import React from "react"

const WorkoutComponent = (props) =>{
    const closeComments = (event) => {
        console.log(event.currentTarget)
        document.querySelector('.comments').classList.toggle('hidden')
    }
    return(
        <>
        <div>
            <div className="workout-item" onClick={props.showInfo}>
                <div className="displayed-info">
                    <p className="date">{props.work.date}</p>
                    <p className="time">{props.work.time}</p>
                </div>
                <div className="displayed-info" onClick={props.showInfo}>
                    <h3>{props.work.target}</h3>
                </div>
                <div className="displayed-info" onClick={props.showInfo}>
                    <p className="exercise">{props.work.exercise}</p>
                </div>
                <div className="buttons">
                    <button id="edit-btn"type="button" onClick={()=>{props.openModal(props.work, props.index)}}>EDIT</button><br/>
                    <button id="del-btn"type="button" onClick={()=>{props.delete(props.work, props.index)}}>DELETE</button>
                </div><br/>
                <div className="extra-info hidden" onClick={props.showInfo}>
                    <p>Comments: <span>"{props.work.comments}"</span></p>
            </div>
            </div>
        </div>
        </>
    )

}

export default WorkoutComponent