import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import WorkoutComponent from './components/workoutCard'
import EditModal from './components/editWorkoutModal';
import InputComponent from './components/inputComponent'
import NavComponent from './components/navComponent'
import EditProfile from './components/editProfile';

const App = () =>{
// WORKOUTS STATES 
  const [newWorkoutDate, setNewWorkoutDate] = useState('')
  const [newWorkoutTime, setNewWorkoutTime] = useState('')
  const [newWorkoutArea, setNewWorkoutArea] = useState('')
  const [newWorkoutExercise, setNwWorkoutExercise] = useState('')
  const [newWorkoutReps, setNewWorkoutReps] = useState(0)
  const [newWorkoutSets, setNewWorkoutSets] = useState(0)
  const [newWorkoutWeight, setNewWorkoutWeight] = useState('')
  const [newMeal, setNewMeal] = useState('')
  const [newComment, setNewComments] = useState()
  const [editWorkout, setEditWorkout] = useState({})
  const [allWorkouts, setWorkouts] = useState([])

// USER STATES 

  const [newUsername, setNewUsername] = useState('')
  const [newPassword, setNewPassword] = useState('')
  // USER PROFILE 
  const [profileImage, setProfileImage] = useState('')
  const [profileWeight, setUserWeight] = useState('')
  const [profileHeight, setUserHeight] = useState('')
// USER LOGIN

  const [currentUser, setCurrentUser] = useState()
// INDEX
  const [index, setIndex] = useState(0)

  //GET UPDATED DATA
  const getData = () => {
    axios 
      .get('https://secure-plateau-25521.herokuapp.com/workout')
      .then((response)=>{
        setWorkouts(response.data)
        // console.log(response.data)
      })
  }

// USE EFFECT
  useEffect(()=>{
    getData();
  },[])

// WORKOUTS
  const newDate = (event)=>{
    setNewWorkoutDate(event.target.value)
  }
  const newTime = (event)=>{
    setNewWorkoutTime(event.target.value)
  }
  const newArea = (event)=>{
    setNewWorkoutArea(event.target.value)
  }
  const newExercise = (event)=>{
    setNwWorkoutExercise(event.target.value)
  }
  const newReps = (event)=>{
    setNewWorkoutReps(Number(event.target.value)) 
  }
  const newSets = (event)=>{
    setNewWorkoutSets(Number(event.target.value))
  }
  const newWeight = (event)=>{
    setNewWorkoutWeight(Number(event.target.value)) 
  }
  const newWorkoutMeal = (event)=>{
    setNewMeal(event.target.value) 
  }
  const newWorkoutComment = (event)=>{
    setNewComments(event.target.value) 
  }

  //USER 
  const createNewUsername = (event)=>{
    setNewUsername(event.target.value)
  }
  const createNewPassword = (event)=>{
    setNewPassword(event.target.value)
  }

  // PROFILE 
  const getProfileImage = (event)=>{
    setProfileImage(event.target.value)
  }
  const getProfileHeight = (event)=>{
    setUserHeight(event.target.value)
  }
  const getProfileWeight = (event)=>{
    setUserWeight(event.target.value)
  }

  // EDIT MODAL OPENER FUNCTION
  const openEditModal = (workout, index) => {
    document.querySelector('.edit-modal').classList.toggle('hidden')
    setEditWorkout(workout)
    setIndex(index)
    
  }
  // EDIT PROFILE MODAL OPENER
  const openEditModalProfile = () => {
    document.querySelector('.profile-modal').classList.toggle('hidden')
  }
  // SHOW EXTRA INFO 
  const showExtraInfo = (event, index) => {
    document.querySelector(`#div${index}`).classList.toggle('hidden')
  }

  //SIGN UP FUNCTION
  const SignUpUser = (event) =>{
    event.preventDefault()
    axios 
      .post('https://secure-plateau-25521.herokuapp.com/user/register',
      {
        username: newUsername,
        password: newPassword,
      })
      .then((response)=>{
        setCurrentUser(response.data)
        getData() 
      })
      event.currentTarget.reset()
  }
  //LOGIN FUNCTION
  const userLogin = (event) =>{
    event.preventDefault()
    axios 
      .post('https://secure-plateau-25521.herokuapp.com/user/login',
      {
        username: newUsername,
        password: newPassword,
      })
      .then((response)=>{
        setCurrentUser(response.data)
        console.log(response.data.token)
        getData() 
      })
      event.currentTarget.reset()
  }
  // LOG OUT 
  const logoutUser = (user) =>{
    console.log(user.token)
    setCurrentUser()
    // axios
    //   .delete(`http://localhost:3000/user/delete`, 
    //   {
    //     token: user.token,
    //     user: {
    //       id: user.user.id,
    //       username: user.user.username,
    //       workoutscompleted: user.user.workoutscompleted,

    //     }

    //   })
    //   .then((response)=>{
    //     setCurrentUser()
    //     console.log(response.data)
    //     getData()
    //   })
  }
  //ADD TO WORKOUT ARRAY
  const addNewWorkout = (event) =>{
    event.preventDefault()
    console.log()
    axios
      .post(`https://secure-plateau-25521.herokuapp.com/user/${currentUser.user.id}/${currentUser.token}`,
      {
        date: newWorkoutDate,
        time: newWorkoutTime,
        target : newWorkoutArea,
        exercise : newWorkoutExercise,
        sets: newWorkoutSets,
        reps : newWorkoutReps,
        weight : newWorkoutWeight,
        meal: newMeal,
        comments: newComment,
      } ).then((response)=>{
        setCurrentUser(response.data)
        setIndex(0)
        getData()
      })
      event.currentTarget.reset( )
  }
  //REMOVE TO WORKOUT ARRAY 
  const removeWorkout = (workoutData, index) =>{
    console.log(workoutData, index)
    axios
      .delete(`https://secure-plateau-25521.herokuapp.com/user/${currentUser.user.id}/${currentUser.token}/${index}`
      ).then((response)=>{
        console.log(response.data)
        setCurrentUser(response.data)
        getData()
      })  
  }
  //EDIT TO WORKOUT ARRAY 
  const editUSerWorkout = (event, workoutData) =>{
    event.preventDefault()
    console.log(workoutData)
    axios
      .put(`https://secure-plateau-25521.herokuapp.com/user/${currentUser.user.id}/${currentUser.token}/${index}`, 
      {
        date: newWorkoutDate || workoutData.date,
        time: newWorkoutTime|| workoutData.time,
        target : newWorkoutArea|| workoutData.target,
        exercise : newWorkoutExercise || workoutData.exercise,
        sets: newWorkoutSets || workoutData.sets,
        reps : newWorkoutReps || workoutData.reps, 
        weight : newWorkoutWeight || workoutData.weight,
        meal: newMeal || workoutData.meal,
        comments: newComment ||workoutData.comments,
      }
      ).then((response)=>{
        console.log(response.data)
        setEditWorkout({})
        setCurrentUser(response.data)
        getData()
      })
      event.currentTarget.reset()
      setIndex(0)
      document.querySelector('.edit-modal').classList.toggle('hidden')
  }
  const editProfileSubmit = (event) => {
    console.log('made it to the function')
    event.preventDefault()
    axios
      .put(`https://secure-plateau-25521.herokuapp.com/user/${currentUser.user.id}/${currentUser.token}`,
      {
        // profileHeight profileWeight profileImage
        height: profileHeight || currentUser.user.height,
        weight: profileWeight || currentUser.user.weight,
        image: profileImage || currentUser.user.image
      })
      .then((response)=>{
        console.log(response.data)
        setCurrentUser(response.data)
        getData()
      })
      event.currentTarget.reset()
      document.querySelector('.profile-modal').classList.toggle('hidden')
  }
  return (
    <>
    <div className="container-master">
    <NavComponent user={currentUser}
    createNewUsername={createNewUsername}
    createNewPassword={createNewPassword}
    userLogin={userLogin}
    SignUpUser={SignUpUser}
    logout={logoutUser}
    EditModalProfile={openEditModalProfile}
    />
      <div className="container">
      {currentUser ?
          <>
          <div className="Workouts">
            {currentUser.user === undefined ? <></> : 
            <>
            {
              currentUser.user.workouts.map((workout, index) =>{
                return <>
                  <WorkoutComponent work={workout}
                  index={index}
                  delete={removeWorkout}
                  openModal={openEditModal}
                  showInfo={showExtraInfo}/>
                </>
              })
            }
            </>} 
            <div className="">
              <img className="bottom-pic" src="https://i.ibb.co/9cMmzG5/bg-img.png"/>
            </div>
          </div>
          <div className="workoutForm">
            <form onSubmit={addNewWorkout}>
              <h4>ADD WORKOUT</h4>
              <span className="form-title">DATE</span><input type="date" onChange={newDate}/>
              <span className="form-title">TIME</span><input type="time" onChange={newTime}/>
              <span className="form-title">TARGET AREA</span><InputComponent func={newArea}/>
              <span className="form-title">EXERCISE</span><input type="text" onChange={newExercise}/>
              <span className="form-title">SETS</span><input type="number" onChange={newSets}/>
              <span className="form-title">REPS</span><input type="number" onChange={newReps}/>
              <span className="form-title">WEIGHT</span><input type="text" onChange={newWeight}/>
              <span className="form-title">MEAL</span><input type="text" onChange={newWorkoutMeal}/>
              <span className="form-title">COMMENTS</span><input type="text" onChange={newWorkoutComment}/><br/>
              <input type="submit" value="submit"/>
            </form>
          </div>
          </> 
          : <div className="index">
            <div>
            <h1 className="index-logo"><span>Dev</span>Muscles</h1>
            </div>
            </div>
            }
        </div>
      </div>
      <EditProfile user={currentUser}
      ProfileImage={getProfileImage}
      ProfileHeight={getProfileHeight}
      ProfileWeight={getProfileWeight}
      ProfileSubmit={editProfileSubmit}
      setWeight={setUserWeight}
      setHeight={setUserHeight}
      setImage={setProfileImage}/>
      <EditModal
      setEditWorkout={setEditWorkout}
      editWorkout={editWorkout}
      newDate={newDate}
      newTime={newTime}
      newArea={newArea}
      newExercise={newExercise}
      newSets={newSets}
      newReps={newReps}
      newWeight={newWeight}
      newMeal={newWorkoutMeal}
      newComment={newWorkoutComment}
      editSubmit={editUSerWorkout}
      />
    </>
  );
}

export default App;
