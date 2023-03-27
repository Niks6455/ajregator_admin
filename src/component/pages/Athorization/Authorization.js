import React from "react";
import Layout from "../../common/Layout";
import styles from './Authorization.module.scss';
import Title from "./../../ui/title/Title";
import Header from "./../../common/header/Header";
const Authorization = () => {
	return (	
    <div className={styles.Aut__main}>   
      <Header/>
       
          <div className={styles.Aut__inner}>
            <Title text="Я партнер"></Title>
          </div>
       
    </div>
	)
}

export default Authorization