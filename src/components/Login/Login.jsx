import React, { useState } from "react";

import mainpic from "../../assets/mainpic.png";
import apple from "../../assets/appstore.png";
import google from "../../assets/googleplay.png";
import fb from "../../assets/facebook.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login succesfully! Data stored in State: 
    - Username: ${email} 
    - Password: ${password}`);
  };

  return (
    <>
      <div className="login">
        <section className="login--left">
          <img src={mainpic} alt="Phones" />
        </section>
        <section className="login--right">
          <article className="login--right-form">
            <form>
              <h3>Instagram</h3>
              <input
                type="text"
                name="email"
                placeholder="Teléfono, usuario o correo electrónico"
                onChange={handleEmailChange}
                value={email}
              />
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                onChange={handlePasswordChange}
                value={password}
              />
              <button type="submit" disabled={!email || password.length < 6 } onClick={handleSubmit}>Iniciar sesión</button>
              <h6><span>o</span></h6>
              <p className="login--right-form-facebook">
                <img src={fb} alt="Facebook" />
                Iniciar sesión con Facebook
              </p>
              <a className="login--right-form-forgot" href="/password">
                ¿Ha olvidado la contraseña?
              </a>
            </form>
          </article>
          <article className="login--right-account">
            ¿No tienes una cuenta? <a href="/register">Regístrate</a>
          </article>
          <article className="login--right-apps">
            <p>Descarga la aplicación.</p>
            <a
              href="https://apps.apple.com/app/instagram/id389801252?vt=lo"
              target="_blank" rel="noreferrer"
            >
              <img src={apple} alt="App Store" className="apple" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DF8BBB1A3-08A6-4021-BF21-294959EA9ADF%26utm_content%3Dlo%26utm_medium%3Dbadge"
              target="_blank" rel="noreferrer"
            >
              <img src={google} alt="Google Play" className="google" />
            </a>
          </article>
        </section>
      </div>

      <div className="bottom">
        <ul className="login--bottom-links">
          <li>
            <a href="https://about.facebook.com/meta" target="_blank" rel="noreferrer">
              Meta
            </a>
          </li>
          <li>
            <a href="https://about.instagram.com/" target="_blank" rel="noreferrer">
              Información
            </a>
          </li>
          <li>
            <a href="https://about.instagram.com/blog/" target="_blank" rel="noreferrer">
              Blog
            </a>
          </li>
          <li>
            <a
              href="https://about.instagram.com/about-us/careers"
              target="_blank" rel="noreferrer"
            >
              Empleo
            </a>
          </li>
          <li>
            <a href="https://help.instagram.com/" target="_blank" rel="noreferrer">
              Ayuda
            </a>
          </li>
          <li>
            <a
              href="https://developers.facebook.com/docs/instagram"
              target="_blank" rel="noreferrer"
            >
              API
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/legal/privacy/" target="_blank" rel="noreferrer">
              Privacidad
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/legal/terms/" target="_blank" rel="noreferrer">
              Condiciones
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/directory/profiles/"
              target="_blank" rel="noreferrer"
            >
              Cuentas destacadas
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/directory/hashtags/"
              target="_blank" rel="noreferrer"
            >
              Hashtags
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/explore/locations/"
              target="_blank" rel="noreferrer"
            >
              Ubicaciones
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/web/lite/" target="_blank" rel="noreferrer">
              Instagram Lite
            </a>
          </li>
          <br />
          <li>
            <a href="https://www.instagram.com/topics/beauty/" target="_blank" rel="noreferrer">
              Belleza
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/topics/dance-and-performance/"
              target="_blank" rel="noreferrer"
            >
              Danza
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/topics/fitness/" target="_blank" rel="noreferrer">
              Actividad física
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/topics/food-and-drink/"
              target="_blank" rel="noreferrer"
            >
              Comida y bebida
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/topics/home-and-garden/"
              target="_blank" rel="noreferrer"
            >
              Hogar y jardinería
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/topics/music/" target="_blank" rel="noreferrer">
              Música
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/topics/visual-arts/"
              target="_blank" rel="noreferrer"
            >
              Artes visuales
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <select name="languages" id="languages">
              <option value="afrikaans">Afrikaans</option>
              <option value="bahasa">Bahasa Indonesia</option>
              <option value="german">Deutsch</option>
              <option value="english">English </option>
              <option value="uk">English (UK)</option>
              <option value="spanish">Español</option>
              <option value="spanish" selected="selected">
                Español (España)
              </option>
              <option value="philippine">Filipino</option>
              <option value="french">Francais</option>
              <option value="italian">Italian</option>
              <option value="dutch">Neederlands</option>
              <option value="norsk">Norsk</option>
              <option value="polsk">Polski</option>
              <option value="brazil">Português (Brasil)</option>
              <option value="portuguese">Português (Portugal)</option>
              <option value="suomi">Suomi</option>
              <option value="svenska">Svenska</option>
            </select>
          </li>
          <li>© 2021 Instagram from Meta</li>
        </ul>
      </div>
    </>
  );
};

export default Login;


