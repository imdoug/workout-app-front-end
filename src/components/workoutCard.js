import React from "react"

const WorkoutComponent = (props) =>{
    return(
        <>
        <div className="workout-item">
            <p className="date">{props.work.date}</p>
            <p className="time">{props.work.time}</p>
            <h3>{props.work.target}</h3>
            <p>{props.work.exercise}</p>
            <div className="buttons">
                <button type="button" onClick={props.delete}>DELETE</button>
                <button type="button" >EDIT</button>
            </div>
            <div className="comments" style={{display: "none"}}>
                {props.work.comments.map((coments)=>{
                    return(
                        <>
                        <p>Comments: <span>"{coments}"</span></p>
                        </>
                    )
                })}
            </div>
        </div>
        </>
    )

}

export default WorkoutComponent