import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import WorkoutComponent from './components/workoutCard'

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
  // const newWorkout = (event)=>{
  //   setNewWorkout({
  //     date: newWorkoutDate,
  //     time: newWorkoutTime,
  //     area : newWorkoutArea,
  //     exercise : newWorkoutExercise,
  //     sets: newWorkoutSets,
  //     reps : newWorkoutReps,
  //     weight : newWorkoutWeight,
  //     meal: newMeal,
  //     comments: newComment,
  //   })
    
  // }
  const formSubmit = (event) =>{
    event.preventDefault()
    console.log("im working!");
    axios.post('http://localhost:3000/workout/new',
      {
        date: newWorkoutDate,
        time: newWorkoutTime,
        area : newWorkoutArea,
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

  //DELETE FUNCTION
  const deleteWorkout = (workoutData) =>{
    console.log(workoutData)
    axios
      .delete(`http://localhost:3000/workout/${workoutData}`)
      .then(()=>{
        getData()
      })
  }
  return (
    <>
      <h1><span>Dev</span>Muscles</h1>
      <details>
        <div className="workoutForm">
          <form onClick={(event)=>{formSubmit(event)}}>
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
      </details>
      <div className="Workouts">
        {
          allWorkouts.map((workout) =>{
            return <>
              <WorkoutComponent work={workout} delete={(event)=>{deleteWorkout(workout._id)}}/>
            </>
          })
        }
      </div>
      <details >
        <form className="userForm">
        Username: <input type="text"/>
        Password: <input type="password"/><br/>
        <input type="submit"/>
        </form>
      </details>
    </>
  );
}

export default App;
