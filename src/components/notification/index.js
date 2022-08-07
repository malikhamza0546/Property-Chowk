import React from "react"
import "./notification.css"
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import { toast } from 'react-toastify';


 function Notification( type, notify) {

       const icons = {
           error: ErrorIcon,
           success: CheckCircleIcon
       }
       const message =  (
        <div className="notification">
            {type == "error" && <ErrorIcon fontSize="large" style={{ fill: '#FF0000' }}/>}
            {type == "success" && <CheckCircleIcon fontSize="large" style={{ fill: '#00FF00' }}/>}
            <p className='message'>{notify}</p>
        </div>
      )

        switch (type) {
            case "error":
              return toast(message, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                })
            case "success":
            return toast(message, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            default:
            return;
          }
}

export default Notification;


