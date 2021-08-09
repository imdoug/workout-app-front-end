import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import WorkoutComponent from './components/workoutCard'
import EditModal from './components/editWorkoutModal';
import InputComponent from './components/inputComponent'
import NavComponent from './components/navComponent'

const App = () =>{
// WORKOUTS STATES 
  const [newWorkoutDate, setNewWorkoutDate] = useState('')
  const [newWorkoutTime, setNewWorkoutTime] = useState('')
  const [newWorkoutArea, setNewWorkoutArea] = useState('')
  const [newWorkoutExercise, setNwWorkoutExercise] = useState('')
  const [newWorkoutReps, setNewWorkoutReps] = useState(0)
  const [newWorkoutSets, setNewWorkoutSets] = useState(0)
  const [newWorkoutWeight, setNewWorkoutWeight] = useState('')
  const [newMeal, setNewMeal] = useState([])
  const [newComment, setNewComments] = useState([])
  const [editWorkout, setEditWorkout] = useState({})
  const [allWorkouts, setWorkouts] = useState([])

// USER STATES 

  const [newUsername, setNewUsername] = useState('')
  const [newPassword, setNewPassword] = useState('')

// USER LOGIN

  const [currentUser, setCurrentUser] = useState('')

  //GET UPDATED DATA
  const getData = () => {
    axios 
      .get('http://localhost:3000/workout')
      .then((response)=>{
        setWorkouts(response.data)
        // console.log(response.data)
      })
  }
  // //GET USER DATA
  // const getUser = () => {
  //   axios 
  //     .get('http://localhost:3000/user/')
  //     .then((response)=>{
  //       setCurrentUser(response.data)
  //       console.log(response.data)
  //     })
  // }
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
    setNewWorkoutReps(event.target.value) 
  }
  const newSets = (event)=>{
    setNewWorkoutSets(event.target.value)
  }
  const newWeight = (event)=>{
    setNewWorkoutWeight(event.target.value) 
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

  //CREATE FUNCTION
  const formSubmit = (event) =>{
    event.preventDefault()
    console.log("im working!");
    axios.post('http://localhost:3000/workout/new',
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
      }
      ).then(()=>{
        getData();
      })
    event.currentTarget.reset()
  }
  //UPDATE FUNCTION 
  const editSubmit = (event, workoutData) =>{
    event.preventDefault()
    axios.put(`http://localhost:3000/workout/${workoutData._id}`,
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
    ).then(()=>{
      getData()
          
    })
    event.currentTarget.reset()
    setEditWorkout({})
    document.querySelector('.edit-modal').classList.toggle('hidden')

  }

  //DELETE FUNCTION
  const deleteWorkout = (workoutData) =>{
    console.log(workoutData)
    axios
      .delete(`http://localhost:3000/workout/${workoutData._id}`)
      .then(()=>{
        getData()
      })
  }
  // EDIT MODAL OPENER FUNCTION
  const openEditModal = (workout) => {
    document.querySelector('.edit-modal').classList.toggle('hidden')
    setEditWorkout(workout)
    
  }
  //SIGN UP FUNCTION
  const SignUpUser = (event) =>{
    event.preventDefault()
    axios 
      .post('http://localhost:3000/user/new',
      {
        username: newUsername,
        password: newPassword,
      })
      .then(()=>{
        getData() 
      })
      event.currentTarget.reset()
  }
  //LOGIN FUNCTION
  const userLogin = (event) =>{
    event.preventDefault()
    axios 
      .post('http://localhost:3000/user/login',
      {
        username: newUsername,
        password: newPassword,
      })
      .then((response)=>{
        setCurrentUser(response.data)
        console.log(response.data)
        // getUser() 
        getData() 
      })
      event.currentTarget.reset()
  }
  return (
    <>
    <div className="container-master">
    <NavComponent user={currentUser}/>
      <div className="container">
          <div className="Workouts">
            {
              allWorkouts.map((workout) =>{
                return <>
                  <WorkoutComponent work={workout}
                  delete={deleteWorkout}
                  openModal={openEditModal}/>
                </>
              })
            }
            <div className="">
              <img className="bottom-pic" src="https://i.ibb.co/9cMmzG5/bg-img.png"/>
            </div>
          </div>
          <div className="workoutForm">
            <form onSubmit={(event)=>{formSubmit(event)}}>
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
        </div>
      </div>
      {/* <details>
        <form className="userForm" onSubmit={(event)=>{SignUpUser(event)}}>
        Username: <input type="text" onChange={createNewUsername}/>
        Password: <input type="password" onChange={createNewPassword}/><br/>
        <input type="submit" value="SIGN UP"/>
        </form>
      </details> */}
      <details>
        <form className="userForm" onSubmit={(event)=>{userLogin(event)}}>
        Username: <input type="text" onChange={createNewUsername}/>
        Password: <input type="password" onChange={createNewPassword}/><br/>
        <input type="submit" value="LOG IN"/>
        </form>
        <div>
        {/* <div className="nav icons">
          <a>SIGN IN</a>
          <a>JOIN US</a>
        </div> */}
      </div> 
      </details>
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
      editSubmit={editSubmit}
      />
    </>
  );
}

export default App;
