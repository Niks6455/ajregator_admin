import React from "react";
import Header from "../../common/header/Header";
import Layout from "../../common/Layout";
import styles from "./MainPage.module.scss"
const MainPage = () => {

	return (	
    <div className={styles.MainPage}>   
      <Header/>
      <Layout>
        <div className={styles.MainPage__inner}>
          <p>Главная</p>
        </div>
      </Layout>
    </div>
	)
}

export default MainPage