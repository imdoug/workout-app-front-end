import React from "react"

const EditModal = (props) =>{

    const closeEditModal = () => {
        document.querySelector('.edit-modal').classList.toggle('hidden')
        props.setEditWorkout({})
    }

    return(
        <>
        <div className="edit-modal hidden">
            <div className="editWorkoutForm">
                <form onSubmit={(event)=>{props.editSubmit(event, props.editWorkout)}}>
                <p className="close-modal" onClick={closeEditModal}>x</p>
                    <h4>EDIT {props.editWorkout.date} WORKOUT</h4>
                    Date: <input type="text" onChange={props.newDate}/>
                    Time: <input type="text" onChange={props.newTime}/>
                    Target Area: <input type="text" onChange={props.newArea}/>
                    Exercise: <input type="text" onChange={props.newExercise}/>
                    Sets: <input type="number" onChange={props.newSets}/>
                    Reps: <input type="number" onChange={props.newReps}/>
                    Weight: <input type="text" onChange={props.newWeight}/>
                    Meal: <input type="text" onChange={props.newWorkoutMeal}/>
                    Comments: <input type="text" onChange={props.newWorkoutComment}/><br/>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        </div>
        </>
    )
}

export default EditModal