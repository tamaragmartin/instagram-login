import React from "react";

const Login = () => {
  return (
    <div className="login">
      <section className="login--left">
        <img src="" alt="" />
      </section>
      <section className="login--right">
        <article className="login--right-form">
          <form>
            <h2>Instagram</h2>
            <input
              type="text"
              name="user"
              placeholder="Teléfono, usuario o correo electrónico"
            />
            <input type="text" name="password" placeholder="Contraseña" />
            <input type="button" value="Iniciar sesión"/>
            <a href="#">Iniciar sesión con Facebook</a>
            <a href="#">¿Ha olvidado su contraseña</a>
          </form>
        </article>
        <article className="login--right-account">
          <p>
            ¿No tienes una cuenta? <a href="#">Regístrate</a>
          </p>
        </article>
        <article className="login--right-apps">
          <p>Descarga la aplicación</p>
          <img src="" alt="" />
          <img src="" alt="" />
        </article>
        <article className="login--bottom"></article>
      </section>
    </div>
  );
};

export default Login;
