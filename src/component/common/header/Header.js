import React from 'react';
import styles from './Header_Hamburger.module.scss';
import people from './../../img/Header/people.svg';
import IconClose from './../../img/Header/hamburger-close.svg';
import IconOpen from './../../img/Header/hamburger.svg';

const Header = () => {

  
    const [show, setShow] = React.useState(false);
   

    return(

      <div className={styles.nav__inner} style={show ? {height: '185px'} :  {height: '85px'}}>

        <div className={styles.logo}></div>


        <div className={styles.navR}>

           <div className={styles.flex}>
              <div className={styles.peopleIcons}>
              <img src={show ? '' : people} ></img>
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
    )
  } 

export default Header