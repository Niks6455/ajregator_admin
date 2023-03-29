import React from "react";
import Header from "../../common/header/Header";
import Layout from "../../common/Layout";
import Button from "../../ui/button/Button";
import styles from "./MainPage.module.scss";
import img1 from "./../../img/MainPage/page.png";
import img2 from "./../../img/MainPage/setting.png";
import img3 from "./../../img/MainPage/stocks.png";
import img4 from "./../../img/MainPage/calandar.png";
import Footer from "./../../common/footer/Footer"
import { Link } from "react-router-dom";
const MainPage = () => {

	return (	
    <div className={styles.MainPage}>
      <Header/>
        <Layout>
          <div className={styles.MainPage__inner}>      
            <Link to="/PageWash"><Button text="страница автомойки" image={img1} bg_color="#4E78E2" size="18" w="150" text_color="#fff"/></Link>
            <Link to="/ParamWash"> <Button text=" Параметры" image={img2} bg_color="#4E78E2" size="18" w="150" text_color="#fff"/></Link>
            <Link to="/StockWash"> <Button text="Мои акции" image={img3} bg_color="#4E78E2" size="18" w="150" text_color="#fff"/></Link>
            <Link to="/ScheduleWash"> <Button text="Расписание" image={img4} bg_color="#4E78E2" size="18" w="150" text_color="#fff"/></Link>
           
           
           
          </div>
        </Layout>
      <Footer/>
    </div>
	)
}

export default MainPage