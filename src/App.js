import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import WorkoutComponent from './components/workoutCard'
import EditModal from './components/editWorkoutModal';

const App = () =>{

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
  // const [Workout, setNewWorkout] = useState({})
  const [allWorkouts, setWorkouts] = useState([])


  const getData = () => {
    axios 
      .get('http://localhost:3000/workout')
      .then((response)=>{
        setWorkouts(response.data)
      })
  }

  useEffect(()=>{
    getData();
  },[])


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
  //UPDATE FUNCTION RUNING
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
              Date: <input type="text" onChange={newDate}/>
              Time: <input type="text" onChange={newTime}/>
              Target Area: <input type="text" onChange={newArea}/>
              Exercise: <input type="text" onChange={newExercise}/>
              Sets: <input type="number" onChange={newSets}/>
              Reps: <input type="number" onChange={newReps}/>
              Weight: <input type="text" onChange={newWeight}/>
              Meal: <input type="text" onChange={newWorkoutMeal}/>
              Comments: <input type="text" onChange={newWorkoutComment}/><br/>
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
        <form className="userForm">
        Username: <input type="text"/>
        Password: <input type="password"/><br/>
        <input type="submit"/>
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
