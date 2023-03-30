import React from "react";
import styles from "./PageWash.module.scss"
import Header from "../../common/header/Header";
import { useForm} from "react-hook-form";
const PageWash = ({NameWash = "Мойка Юг", AddressWash = "Ул. Автомойщиков 12", ContactWash = "+7(950) 863-04-84"}) => {

  const {
    register,
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
    
    <div className={styles.PageWash}>   
      <Header/>
      <div className={styles.PageWash__title}> 
        <p>ПАРАМЕТРЫ</p>
      </div>
      <form className={styles.PageWash__form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.PageWash__text}>Информация о личной странице мойки</h1>
        <div className={styles.PageWash__flex}>
          <div className={styles.PageWash__pole}>
            <label className={styles.PageWash__label}>Название мойки</label>
            <input className={styles.field} type="NameWash" placeholder={NameWash} {...register("NameWash")}/>
          </div>
        </div>
        
        <div className={styles.PageWash__flex}>
          <div className={styles.PageWash__pole}>
            <label className={styles.PageWash__label}>Адрес мойки</label>
            <input className={styles.field} type="AddressWash" placeholder={AddressWash} {...register("AddressWash")}/>
          </div>
        </div>

        <div className={styles.PageWash__flex}>
          <div className={styles.PageWash__pole}>
            <label className={styles.PageWash__label}>Контакты</label>
            <input className={styles.field} type="ContactWash" placeholder={ContactWash} {...register("ContactWash")}/>
          </div>
        </div>

      </form>
    </div>
	)
}

export default PageWash