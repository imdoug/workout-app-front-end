import React from "react"

const WorkoutComponent = (props) =>{
    const closeComments = (event) => {
        console.log(event.currentTarget)
        document.querySelector('.comments').classList.toggle('hidden')
    }
    return(
        <>
        <div className="workout-item">
            <p className="date">{props.work.date}</p>
            <p className="time">{props.work.time}</p>
            <h3>{props.work.target}</h3>
            <p>{props.work.exercise}</p>
            <div className="buttons">
                <button type="button" onClick={()=>{props.delete(props.work)}}>DELETE</button>
                <button type="button" onClick={()=>{props.openModal(props.work)}}>EDIT</button>
            </div>
            <div className="comments hidden">
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