import React from "react";
import "./LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
    return (
        <div className="wrapper">
            <form>
                <h1>Inicio de sesion</h1>
                <div className="input-box">
                    <input type="text" placeholder='Usuario' required/>
                    <FaUser className='icon'/>
                </div>

                <div className="input-box">
                    <input type="password" placeholder='Contraseña' required/>
                    <FaLock className='icon'/>
                </div>

                <div className="remember-forget">
                    <label><input type="checkbox"/>Recordarme</label>
                    <a href="#">Has olvidado tu contraseña</a>
                </div>
                <button type="submit">Ingresar</button>

                <div className="register-link">
                <p>¿Todavia no tienes una cuenta? <a href="#">Inicia sesion</a></p>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;