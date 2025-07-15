import Input from "./Input";

const Login = ({ isRegistered }) => {
  return (
    <>
      <h2>Please Login</h2>
      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        {!isRegistered && (
          <Input type="password" placeholder="Confirm Password" />
        )}
        <button type="submit">{isRegistered ? "Login" : "Register"}</button>
      </form>
    </>
  );
};

export default Login;
