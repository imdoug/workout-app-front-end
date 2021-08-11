import React from 'react'

const Nav = (props) =>{
    return(
        <>
        <section>
        <h1><span>Dev</span>Muscles</h1>
            <div className="ex-image">
                {props.user ? 
                <img className="header-img" src="https://i.ibb.co/SJbZZn6/logo-img.png"/>
                : <></>}
            </div>
            {props.user ?
            <>
                <div className="pic-div">
                    {props.user.user.image === "" ? <img className="profile-pic" src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"/>  : <img className="profile-pic" src={props.user.user.image}/>}
                </div>
                <p className="welcome">WELCOME</p>
                <p className="username">{props.user.user.username}</p>
                <p className="height">HEIGHT: {props.user.user.height}ft</p>
                <p className="weight">WEIGHT: {props.user.user.weight}pounds</p>
                <button className="edit-profile">EDIT PROFILE</button><br/>
                <button className="logout" onClick={props.logout}>LOGOUT</button>
            </>
            :
            <>
            <form className="userForm" onSubmit={(event)=>{props.userLogin(event)}}>
                Username: <input type="text" onChange={props.createNewUsername}/>
                Password: <input type="password" onChange={props.createNewPassword}/><br/>
                    <input id="login" type="submit" value="LOG IN"/>
            </form>
            <img className="header-img" src="https://i.ibb.co/9cMmzG5/bg-img.png"/>
            <details>
                <summary>REGISTER</summary>
                <form className="userForm" onSubmit={(event)=>{props.SignUpUser(event)}}>
                Username: <input type="text" onChange={props.createNewUsername}/>
                Password: <input type="password" onChange={props.createNewPassword}/><br/>
                <input id="login" type="submit" value="SIGN UP"/>
                </form>
            </details> 
            </> }
            <footer>
                <nav className="footer-nav">
                    <p>&copy; 2021</p>
                    <p>Doug Moreira &nbsp;<a href="https://github.com/imdoug" target="_blank"><i className="fa fa-github"></i></a> &nbsp;<a href="https://www.linkedin.com/in/imdoug/" className="fa fa-linkedin"></a></p>
                    <p>Kristian Reyes &nbsp;<a href="https://github.com/kristianreyes7" target="_blank"><i className="fa fa-github"></i></a> &nbsp;<a href="https://www.linkedin.com/in/kristianreyes7/" className="fa fa-linkedin"></a></p>
                    <p>All rights reserved.</p>
                </nav>
            </footer>
        </section>
        </>
    )
}

export default Nav