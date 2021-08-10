import React from "react"

const WorkoutComponent = (props) =>{
    const closeComments = (event) => {
        console.log(event.currentTarget)
        document.querySelector('.comments').classList.toggle('hidden')
    }
    return(
        <>
        <div className="workout-item">
            <div className="displayed-info">
                <p className="date">{props.work.date}</p>
                <p className="time">{props.work.time}</p>
            </div>
            <div className="displayed-info">
                <h3>{props.work.target}</h3>
            </div>
            <div className="displayed-info">
                <p className="exercise">{props.work.exercise}</p>
            </div>
            <div className="buttons">
                <button id="edit-btn"type="button" onClick={()=>{props.openModal(props.work)}}>EDIT</button><br/>
                <button id="del-btn"type="button" onClick={()=>{props.delete(props.work)}}>DELETE</button>
            </div>
            <div className="comments hidden">
                <p>Comments: <span>"{props.work.comments}"</span></p>
            </div>
        </div>
        </>
    )

}

export default WorkoutComponent