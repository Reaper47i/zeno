import React from 'react'
import {VscChromeClose} from 'react-icons/vsc'
import {Link} from 'react-router-dom'

function Modal({modal, setModal}) {
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-top">
                    <h2>Login</h2>
                    <div className="mdl-close"><VscChromeClose onClick={()=> setModal(false)}/></div>
                </div>
                <div className="modal-body">
                    <h3>Username/Email</h3>
                    <input type="text" placeholder="Username/Email" />
                    <h3>Password</h3>
                    <input type="password" name="password" id="" />
                    <button className="input-btn">Login</button>
                    <Link to="#">Create a new Account</Link>
                </div>
                <div className="modal-footer"></div>
            </div>
        </div>
    )
}

export default Modal
