import React from 'react'
import telegram from "../Components/Images/telegram.svg"

export const Homecotnent = () => {
  return (
    <>
    <div className='content-section'>
        <div className='container'>
                <h1>Welcome to the <span>Tycoon Leaderboard</span> for Binance Futures</h1>
                <p>Search for your favourite traders to follow their trades in real-time.</p>
                  <div className='home-content-buttn'>
                    <ul>
                     <li className='loginbtn'><a href='/login'><img src={telegram} alt="Telegram"/> Log in with Telegram </a></li>  
                    </ul>
                 </div>

        </div>


    </div>
    
    
    
    </>
  )
}
