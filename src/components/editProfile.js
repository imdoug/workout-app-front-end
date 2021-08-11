import React from 'react'

const EditProfile = (props) =>{
    const closeEditModal = () => {
        document.querySelector('.profile-modal').classList.toggle('hidden')
        props.setHeight("")
        props.setWeight("")
        props.setImage("")
    }
    return(
        <>
        {props.user && <>
        <div className="profile-modal hidden">
            <div className="editProfileForm" >
                <form onSubmit={props.ProfileSubmit}>
                <p id="close-profile-modal"className="close-modal" onClick={closeEditModal}><i class="fa fa-times-circle"></i></p>
                    <h4>{props.user.user.username}'s PROFILE</h4>
                    <span>PROFILE PICTURE</span><input type="text" placeholder={props.user.user.image} onChange={props.ProfileImage}/>
                    <span>HEIGHT</span><input type="Number" step={0.01} placeholder={props.user.user.height} onChange={props.ProfileHeight}/>
                    <span>WEIGHT</span><input type="number" placeholder={props.user.user.weight} onChange={props.ProfileWeight}/>
                    <input type="submit" value="EDIT"/>
                </form>
            </div>
        </div>
        </>
        }   
        </>
    )
}

export default EditProfile