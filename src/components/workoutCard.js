import React from "react"

const WorkoutComponent = (props) =>{
    const closeComments = (event) => {
        console.log(event.currentTarget)
        document.querySelector('.comments').classList.toggle('hidden')
    }
    return(
        <>
        <div className="test">
            <div className="workout-item">
                <div className="displayed-info" onClick={(event)=>{props.showInfo(event,props.index)}}>
                    <p className="date">{props.work.date}</p>
                    <p className="time">{props.work.time}</p>
                </div>
                <div className="displayed-info" onClick={(event)=>{props.showInfo(event,props.index)}}>
                    <h3>{props.work.target}</h3>
                </div>
                <div className="displayed-info" onClick={(event)=>{props.showInfo(event,props.index)}}>
                    <p className="exercise">{props.work.exercise}</p>
                </div>
                <div className="buttons">
                    <button id="edit-btn"type="button" onClick={()=>{props.openModal(props.work, props.index)}}>EDIT</button><br/>
                    <button id="del-btn"type="button" onClick={()=>{props.delete(props.work, props.index)}}>DELETE</button>
                </div>
            </div>
            <div id={"div" + props.index} className="extra-info hidden" onClick={props.showInfo}>
                <div><span>SETS:</span> {props.work.sets}</div>
                <div><span>REPS:</span> {props.work.reps}</div>
                <div><span>WEIGHT: </span> {props.work.weight}</div>
                <div><span>MEAL:</span> {props.work.meal}</div>
                <div><span>COMMENT:</span> "{props.work.comments}"</div>
            </div>
        </div>
        </>
    )

}

export default WorkoutComponent