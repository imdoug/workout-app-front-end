import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import WorkoutComponent from './components/workoutCard'
import EditModal from './components/editWorkoutModal';
import InputComponent from './components/inputComponent'

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

  //GET UPDATED DATA
  const getData = () => {
    axios 
      .get('http://localhost:3000/workout')
      .then((response)=>{
        setWorkouts(response.data)
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
  const SignUpUser = (event) =>{
    event.preventDefault()
    axios 
      .post('http://localhost:3000/user/new',
      {
        username: newUsername,
        password: newPassword
      })
      .then(()=>{
        getData() 
      })
      event.currentTarget.reset()
  }
  return (
    <>
    <header>
      <div>
        <h1><span>Dev</span>Muscles</h1>
        <div className="nav icons">
        </div>
      </div> 
    </header> 
      <div className="container-master">
          <div className="workoutForm">
            <form onSubmit={(event)=>{formSubmit(event)}}>
              <h4>ADD WORKOUT</h4>
              DATE<input type="date" onChange={newDate}/>
              TIME<input type="time" onChange={newTime}/>
              TARGET AREA<InputComponent func={newArea}/>
              EXERCISE<input type="text" onChange={newExercise}/>
              SETS<input type="number" onChange={newSets}/>
              REPS<input type="number" onChange={newReps}/>
              WEIGHT<input type="text" onChange={newWeight}/>
              MEAL<input type="text" onChange={newWorkoutMeal}/>
              COMMENTS<input type="text" onChange={newWorkoutComment}/><br/>
              <input type="submit" value="submit"/>
            </form>
          </div>
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
          </div>
      </div>
      <details>
        <form className="userForm" onSubmit={(event)=>{SignUpUser(event)}}>
        Username: <input type="text" onChange={createNewUsername}/>
        Password: <input type="password" onChange={createNewPassword}/><br/>
        <input type="submit" value="SIGN IN"/>
        </form>
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
