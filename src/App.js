import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'

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
    axios.post('http://localhost:3000/workout',
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

  return (
    <>
      <h1>Workout App</h1>
      <form className="form-control" onClick={(event)=>{formSubmit(event)}}>
        Date: <input className="form-control" type="text" onChange={newDate}/>
        Time: <input className="form-control" type="text" onChange={newTime}/>
        Workout: 
        Area: <input className="form-control" type="text" onChange={newArea}/>
        Exercise: <input className="form-control" type="text" onChange={newExercise}/>
        Sets: <input className="form-control" type="number" onChange={newSets}/>
        Reps: <input className="form-control" type="number" onChange={newReps}/>
        Weight: <input className="form-control" type="text" onChange={newWeight}/>
        Meal: <input className="form-control" type="text" onChange={newWorkoutMeal}/>
        Comments: <input className="form-control" type="text" onChange={newWorkoutComment}/>
        <input type="submit" value="submit"/>
      </form>
      <div>
        {
          allWorkouts.map((workout) =>{
            return <p>{workout.exercise}</p>
          })
        }


      </div>
    </>
  );
}

export default App;
