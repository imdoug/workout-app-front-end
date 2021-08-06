import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'

const App = () =>{

  const [newWorkoutDate, setNewWorkoutDate] = useState('')
  const [newWorkoutTime, setNewWorkoutTime] = useState('')
  const [newWorkoutArea, setNewWorkoutArea] = useState('')
  const [newWorkoutExercise, setNwWorkoutExercise] = useState('')
  const [newWorkoutReps, setNewWorkoutReps] = useState(0)
  const [newWorkoutWeight, setNewWorkoutWeight] = useState('')
  const [Workout, setNewWorkout] = useState({})
  // const [allWorkouts, setWorkouts] = useState = []



  
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
  const newWeight = (event)=>{
    setNewWorkoutWeight(event.target.value)
    
  }
  const newWorkout = (event)=>{
    setNewWorkout({
      area : newWorkoutArea,
      exercise : newWorkoutExercise,
      reps : newWorkoutReps,
      weight : newWorkoutWeight,
    })
    
  }
  const formSubmit = (event) =>{
    event.preventDefault()
    console.log("im working!")
  }

  return (
    <>
      <h1>Workout App</h1>
      <form onClick={(event)=>{formSubmit(event)}}>
        Date: <input type="text" onChange={newDate}/>
        Time: <input type="text" onChange={newTime}/>
        Wordkout: 
        Area: <input type="text" onChange={newArea}/>
        Exercise: <input type="text" onChange={newExercise}/>
        Reps: <input type="number" onChange={newReps}/>
        Weight: <input type="text" onChange={newWeight}/>
        <input type="submit" value="submit"/>
      </form>
    </>
  );
}

export default App;
