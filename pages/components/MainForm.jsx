import React, { useState } from "react";
import { Fade } from "@material-ui/core";
import {useRouter} from "next/router"
// libraries
import { useFormik } from "formik";
import * as Yup from "yup";

const MainForm = () => {

  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });
  
  const inputIsTouched = (input) => {
    setTouched({
      [input]: true,
    });
  };

  const router = useRouter();
  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("El correo electrónico es requerido")
        .email("Formato de correo electrónico invalido"),
      password: Yup.string()
        .required("La contraseña es requerida")
        .min(6, "Mínimo 6 caracteres"),
    }),
    onSubmit: (values) => {
      router.push('/dashboard')
    },
  });

  return (
    <>
      <form className="form" onSubmit={formik.handleSubmit}>
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
            <span className={`form__span--sm form__span--gray--light label__span ${formik.errors.email? "label__span--invalid": "label__span--error"}`}>
              Correo electrónico
            </span>
          </Fade>
          <input
            className={`form__input ${formik.errors.email? "form__input--invalid": ""}`}
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email ? <span className="form__span--error">{formik.errors.email}</span> : null}
        </label>
        <label
          onClick={() => inputIsTouched("password")}
          className="form__label"
          htmlFor="password"
        >
          <Fade in={touched.password} timeout={500}>
            <span className={`form__span--sm form__span--gray--light label__span ${formik.errors.email? "label__span--invalid": "label__span--error"}`}>
              Contraseña
            </span>
          </Fade>
          <input
            className={`form__input ${formik.errors.email? "form__input--invalid": ""}`}
            type={"password"}
            name="password"
            placeholder="Contraseña"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password ? (
            <span className="form__span--error">{formik.errors.password}</span>
          ) : null}
        </label>
        <span className="form__span form__span--purple form__span--right">
          <a>¿Olvidaste tu contraseña?</a>
        </span>
        <input
          type="submit"
          value="Iniciar sesión"
          className="form__button--lg form__button--blue"
        />
        <span className="form__span form__span--gray form__span--bottom">
          ¿Aún no tienes cuenta? <a className="form__a--blue">Regístrate</a>
        </span>
      </form>
    </>
  );
};

export default MainForm;
