import { useState } from 'react';
import '../css/Header.css'
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { IoMoon } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


const Header = () => {

    const [theme, setTheme]= useState(false)

    const navigate = useNavigate()

    const changeTheme = () => {
     
        const root= document.getElementById('root')
        setTheme(!theme)
        if(theme) {
        root.style.backgroundColor='black'
        root.style.color='white'
        }else {
            root.style.backgroundColor='white'
            root.style.color='black'
        }
    }



  return (
    <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <div className='flex-row' onClick={()=>navigate('/')}>
            <img className='logo' src="./src/images/logo.webp"/>
            <p className='logo-text'>ALP FERİDE A.Ş</p>
        </div>

        <div className='flex-row'>
            <input className='search-input' type="text" placeholder='Bir şeyler ara' />
            <div>
                {theme ?             <IoMoon className='icon' onClick={changeTheme}/>
 :             <CiLight className='icon' onClick={changeTheme} />
            }
            <CiShoppingBasket className='icon'/>
            </div>
            



        </div>
    </div>
  )
}

export default Header