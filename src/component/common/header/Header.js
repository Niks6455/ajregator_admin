import React, {useState} from 'react';
import styles from './Header_Hamburger.module.scss';
import Home from './../../img/Header/iconHome.png';
import IconClose from './../../img/Header/hamburger-close.svg';
import IconOpen from './../../img/Header/hamburger.svg';
import {useLocation } from 'react-router-dom';
const Header = ({Name="Мойка ЮГ", address="г Таганрог ул Автомойская 15"}) => {

  
    const [show, setShow] = useState(false);
    let location = useLocation();
    let check;
    if(location.pathname == "/"){
        check = true;
    }else{
       check = false;
    }

    return(
      <header>
        <div className={styles.nav__inner} style={show ? {height: '185px'} :  {height: '85px'}}>

                <div style={check ? {justifyContent: 'center', display: "flex", width: "100%"} : {display: 'none'}}>
                    <div className={styles.logo}></div>
                </div>
                
                <div>
                  <div className={styles.text} style={!check ? {display: 'block'} : {display: 'none'}}>
                    <p>{Name}</p>
                   <span> <p>{address}</p></span>
                  </div>
                </div>

                <div className={styles.navR} style={check ? {display: 'none'}: {display: 'block'}}>

                  <div className={styles.flex}>
                      <div className={styles.peopleIcons}>
                      <img src={show ? '' : Home} style={{ wight: '30px', height: '30px', backgroundColor: '#4E78E2'}}></img>
                      </div>

                      <button className={styles.button1} type='button' onClick={() => setShow(!show)}>
                            <img src={show ? IconClose : IconOpen} alt='Auth'></img>
                      </button>
                    </div>

                  
                    <nav className= {styles.menu  + (show ? 'show' : '')}>
                      <ul>
                        <li>Личный кабинет</li>
                        <li>О нас</li>
                        <li>Контакты</li>
                      </ul>
                    </nav>  
                    
                </div>
              </div>
      </header>
      
    )
  } 

export default Header