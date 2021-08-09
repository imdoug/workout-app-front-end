import React from 'react'

const Nav = (props) =>{
    return(
        <>
        <section>
        <h1><span>Dev</span>Muscles</h1>
            <div className="ex-image">
                <img className="header-img" src="https://i.ibb.co/SJbZZn6/logo-img.png"/>
            </div>
            <form className="profille-form">
                <div className="profille-pic">
                    <img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"/>
                </div>
                <p className="welcome">Welcome</p>
                {props.user ? <p className="username">{props.user.user.username}</p> : <p className="username">"your name"</p>}
                <span>Profille picture</span>
                <input type="url" placeholder="image link"/>
                <span></span>Weight
                <input type="text" placeholder="weight"/>
                <span>Heigth</span>
                <input type="text" placeholder="height"/>
            </form>
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