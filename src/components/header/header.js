 import './header.css';
 import {VscGithubInverted} from 'react-icons/vsc';
import {BsFacebook} from 'react-icons/bs'
import {IoLogoLinkedin} from 'react-icons/io'
import {HiMenuAlt2} from 'react-icons/hi'
 const Header=()=>{
return(
    <div className="header">
            <div className='logo'>Visual Data</div>
            <div className='links'>
                <a href="#inpDiv">Input</a>
                <a href="#howTo">How to use</a>
                <a href="#aboutDev">About</a>
            </div>
            <div className="social">
                <VscGithubInverted className='icon'/>
                <BsFacebook className='icon'/>
                <IoLogoLinkedin className='icon'/>

            </div>
            <HiMenuAlt2 className='menu-icon'/>
        </div>
)
 }
 export default Header