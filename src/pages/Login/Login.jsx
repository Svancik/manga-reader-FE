import LoginForm from "../../components/loginForm/LoginForm";
import "./login.css";
import Carousel from "./../../components/carousel/Carousel";

export default function Login() {
  const imgs_1 = []


  return (
    <div className="loginWrapper">
      <div className="loginLeft">
        <Carousel />
      </div>
      <div className="loginRight">
        <div className="loginFormWrapper">
          <h1 className="loginFormTitle">MANGA READER</h1>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
