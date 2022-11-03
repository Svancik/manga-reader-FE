import RegisterForm from "../../components/registerForm/RegisterForm";
import Carousel from "./../../components/carousel/Carousel";
import "./register.css";

export default function Register() {
  return (
    <div className="registerWrapper">
      <div className="register--left">
        <Carousel />
      </div>
      <div className="register--right">      
        <RegisterForm />
      </div>
    </div>
  );
}
