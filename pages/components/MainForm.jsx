import { Fade } from "@material-ui/core";
import React, { useState } from "react";

const MainForm = () => {
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const inputIsTouched = (input)=>{
    setTouched({
      [input]:true,
      
    })
  }

  return (
    <>
      <form className="form" action="/dashboard">
        <h1 className="form__h1 form__h1--left">Iniciar sesión</h1>
        <p className="form__p form__p--left form__p--gray">
          Selecciona como deseas ingresar a la plataforma
        </p>
        <div className="form__buttonGroup">
          <button className="form__button--md form__button--facebook">
            <img className="form__icon" src="/facebook.svg" alt="" />
          </button>
          <button className="form__button--md form__button--google">
            <img className="form__icon" src="/google-icon.svg" alt="" />
          </button>
          <button className="form__button--md form__button--linkedIn">
            <img
              className="form__icon form__icon--linkedIn"
              src="/linkedin-icon.svg"
              alt=""
            />
          </button>
        </div>
        <label
          onClick={() => inputIsTouched("email")}
          className="form__label"
          htmlFor="email"
        >
          <Fade in={touched.email} timeout={500}>
            <span className="form__span--sm form__span--gray label__span">
              Correo electrónico
            </span>
          </Fade>
          <input
            className="form__input"
            type="email"
            name="email"
            placeholder="Correo electrónico"
          />
        </label>
        <label
          onClick={() => inputIsTouched("password")}
          className="form__label"
          htmlFor="password"
        >
          <Fade in={touched.password} timeout={500}>
            <span className="form__span--sm form__span--gray label__span">
              Contraseña
            </span>
          </Fade>
          <input
            className="form__input"
            type={"password"}
            name="password"
            placeholder="Contraseña"
          />
        </label>
        <span className="form__span form__span--purple form__span--right">
          <a>¿Olvidaste tu contraseña?</a>
        </span>
        <input type="submit" value="Iniciar sesión" className="form__button--lg form__button--blue"/>
        <span className="form__span">
          ¿Aún no tienes cuenta? <a className="form__a--blue">Regístrate</a>
        </span>
      </form>
    </>
  );
};

export default MainForm;
