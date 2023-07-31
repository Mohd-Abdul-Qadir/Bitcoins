import React, { useState } from 'react'
import logo from './images/logo.png'
import twitter from './images/twitter.png'
import ether from './images/etherscan.png'
import telegram from './images/telegram.png'
import game from './images/game.png'
import menu from './images/menu.png'
import './style/header.css'
import { slide as Menu } from 'react-burger-menu'
export default function Header() {
    const clsname = 'translateX(-100%)'
    const clrname = 'white'
    const [cls , setcls] = useState(clsname);
    // const [clr , setclr] = useState(clrname);
    const humburger = ()=>
    {  
        let val = cls
        if(val === 'translateX(-100%)')
        {
            setcls('translateX(0%)')
        }else
        {
            setcls('translateX(-100%)')
        }
    }
    
  return (
   <>
    <div className='menu-navbar'>
        <div className='logo-box'>
            <div className='logo-img-box'>
                <img src={logo} className='logo-img'/>
            </div>
            <span className='logo-text'>ANIMEME</span>
        </div>
        <div className='menu-and-social-box'>
            <div className='menu-box menuhide'>
                <ul className='menu-ul'>
                    <li className='menu-li'><a  href='#home'  className='menu-anchor menu-active'>Home</a></li>
                    <li className='menu-li'><a href='#animegallery' className='menu-anchor'>Animeme Gallery</a></li>
                    <li className='menu-li'><a href='#community' className='menu-anchor'>Community</a></li>
                    <li className='menu-li'><a href='#animonic' className='menu-anchor'>Animenomics</a></li>
                    <li className='menu-li'><a href='#buy' className='menu-anchor'>Buy Sanimeme</a></li>
                </ul>
            </div>
            <div className='menu-social-box menuhide'>
                <div className='social-img-box'>
                    <a href='#' style={{ cursor:'pointer' }}>
                        <img src={twitter} className='twitter-img'/>
                    </a>
                    <a href='#' style={{ cursor:'pointer' }}>
                        <img src={telegram} className='twitter-img'/>
                    </a>
                    <a href='#' style={{ cursor:'pointer' }}>
                        <img src={ether} className='twitter-img'/>
                    </a>
                    <a href='#' style={{ cursor:'pointer' }}>
                        <img src={game} className='twitter-img'/>
                    </a>
                </div>
                
            </div>
            <div className='humburger-box humhide'>
                <img src={menu} className='humburger-img' onClick={humburger} />
            </div>
        </div>
    </div>
        <div className='responsive-menu-box' >
            <ul className='menu-ul' style={{ transform:cls}}>
                <li className='menu-li'><a href='#home' className='menu-anchor menu-active'>Home</a></li>
                <li className='menu-li'><a href='#animegallery' className='menu-anchor'>Animeme Gallery</a></li>
                <li className='menu-li'><a href='#community' className='menu-anchor'>Community</a></li>
                <li className='menu-li'><a  href='#animonic' className='menu-anchor'>Animenomics</a></li>
                <li className='menu-li'><a href='#buy' className='menu-anchor'>Buy Sanimeme</a></li>
            </ul>
        </div>
        
   </>
  )
}
