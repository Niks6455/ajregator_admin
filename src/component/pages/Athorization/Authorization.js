import { useForm} from "react-hook-form";
import React from "react";
import Layout from "../../common/Layout";
import styles from './Authorization.module.scss';
import Title from "./../../ui/title/Title";
import Header from "./../../common/header/Header";
import img1 from "./../../img/authorization/Caterpillar.png"
import img2 from "./../../img/authorization/Vector.png"
import Footer from "./../../common/footer/Footer"
import { Link } from "react-router-dom";
const Authorization = () => {

  const {
    register,
    formState:{errors, isValid},
    handleSubmit,
    reset
 } = useForm({
    mode: "onBlur"
 });

 
 const onSubmit = (data) =>{ 
  
  alert(JSON.stringify(data));
  console.log(JSON.stringify(data));     
  reset();
}//data- хранит всю заполненную информацию о форме



	return (	
    <div className={styles.Aut__main}>   
      <Header/>
      <Layout>
          <div className={styles.Aut__inner}>
            <Title text="Я партнер"/>
          </div>  
          <form onSubmit={handleSubmit(onSubmit)}>             

            {/*----------------------------------------------------------------------------- Почта */}
            <label>
                <input className={styles.field} type="email" placeholder="Почта"
                    {...register("Email",{
                        required: "Обязательное поле!",
                        pattern:   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    })}
                />
            </label>
            <div className={styles.marg} style={{height:20, fontSize:11, padding:2} }>
                {errors?.Email && <p>{"Укажите правильную почту!"}</p>}
            </div>
            {/*----------------------------------------------------------------------------- //Почта */}


            {/*----------------------------------------------------------------------------- Пароль */}
            <label>
                <input className={styles.field} type="password" placeholder="Пароль" 
                    {...register("FirstPassword",{
                        required: "Обязательное поле!",
                        minLength: {
                        value: 5,
                        message: "Минимум 5 символов"
                        },
                        pattern: /(?=.*[0-9])/g
                    })}
                />
            </label>
            <div className={styles.marg} style={{height:20, fontSize:11, padding:2} }>
                {errors?.FirstPassword && <p>{errors?.FirstPassword?.message || "Неправильный пароль!"}</p>}
            </div>





            <div className={styles.button__div}>
               <Link to="/MainPage" disabled={!isValid}>
                  <button className={styles.button}>
                      <input   value="Войти" style={!isValid ? {color:"#b1acac"} : {color:"white"} } type="submit" disabled={!isValid}/>
                  </button>
               </Link> 
            </div>

            </form>
            <div className={styles.images1}>
                <img src={img1} alt="bg"></img>
            </div>
             <div className={styles.images2}>
                <img src={img2}></img>
            </div> 
      </Layout>    
      <Footer/>
    </div>
	)
}

export default Authorization