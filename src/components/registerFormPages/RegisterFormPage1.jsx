import "../registerForm/registerForm.css";
export default function registerFormPage1() {
  return (
    <form action="">
      {" "}
      <h1 className="registerFormTitle">Create Account</h1>
      <input type="email" placeholder="Email address" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Repeat Password" />
      <button className="registerFormNext">Next</button>
    </form>
  );
}
