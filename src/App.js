import React, {useState, useEffect, useLayoutEffect} from 'react';
import './App.css';
import axios from 'axios'

const App = () =>{

  const [newWorkoutDate, setNewWorkoutDate] = useState('')
  const [newWorkoutTime, setNewWorkoutTime] = useState('')
  const [newWorkoutArea, setNewWorkoutArea] = useState('')
  const [newWorkoutExercise, setNwWorkoutExercise] = useState('')
  const [newWorkoutReps, setNewWorkoutReps] = useState(0)
  const [newWorkoutWeight, setNewWorkoutWeight] = useState('')
  const [Workout, setNewWorkout] = useState('')
  const [allWorkout, setAllWorkout] = useState([])
  // const [allWorkouts, setWorkouts] = useState = []

  useEffect(()=>{
    axios 
      .get('http://localhost:3000/workout')
      .then((response)=>{
        setAllWorkout(response.data)

      })
      
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
    console.log(newWorkoutDate)
    console.log(newWorkoutTime)
    console.log(Workout)
    event.currentTarget.reset()
  }

  return (
    <>
      <h1>Workout App</h1>
      <form className="workout-form" onSubmit={(event)=>{formSubmit(event)}}>
        Date: <input type="date" onChange={newDate}/><br/>
        Time: <input type="text" onChange={newTime}/><br/>
        Wordkout: <br/>
        Area: <input type="text" onChange={newArea}/><br/>
        Exercise: <input type="text" onChange={newExercise}/><br/>
        Reps: <input type="number" onChange={newReps}/><br/>
        Weight: <input type="text" onChange={newWeight}/><br/>
        <input type="submit" value="submit" onClick={newWorkout}/>
      </form>
    </>
  );
}

export default App;
