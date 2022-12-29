import React from 'react'
import logo from "../Components/Images/logo.svg"
import Noty from "./Noty";
import telegram from "../Components/Images/telegram.svg"

export const Header = () => {
  return (
    <div>

    <div className='header-top'>
            <div className='container'>

                    <div className='left-header'>
                        <a href="/"><img src={logo} alt="Tycoon Logo"/></a>
                    </div>
                    <div className='right-header'>
                        <ul>    
                            <li><Noty width={"22px"} height={"22px"} color={"#fff"} count={10} /></li>    
                            <li><a href='/login'><img src={telegram} alt="Telegram"/> Log in <span className='telegram_display'> With Telegram</span></a></li>    
                        </ul>
                    </div>

            </div>
    </div>



    </div>
  )
}

