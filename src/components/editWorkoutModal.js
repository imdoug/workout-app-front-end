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
                <form onSubmit={(event)=>{props.editSubmit(event, props.editWorkout.workout, props.editWorkout.index)}}>
                <p className="close-modal" onClick={closeEditModal}><i class="fa fa-times-circle"></i></p>
                    <h4>EDIT {props.editWorkout.exercise}</h4>
                    Date<input type="text" onChange={props.newDate} placeholder={props.editWorkout.date}/>
                    Time<input type="text" onChange={props.newTime} placeholder={props.editWorkout.time}/>
                    Target Area<input type="text" onChange={props.newArea} placeholder={props.editWorkout.target}/>
                    Exercise<input type="text" onChange={props.newExercise} placeholder={props.editWorkout.exercise}/>
                    Sets<input type="number" onChange={props.newSets} placeholder={props.editWorkout.sets}/>
                    Reps<input type="number" onChange={props.newReps} placeholder={props.editWorkout.reps}/>
                    Weight<input type="text" onChange={props.newWeight} placeholder={props.editWorkout.weight}/>
                    Meal<input type="text" onChange={props.newWorkoutMeal} placeholder={props.editWorkout.meal}/>
                    Comments<input type="text" onChange={props.newWorkoutComment} placeholder={props.editWorkout.comments}/><br/>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        </div>
        </>
    )
}

export default EditModal