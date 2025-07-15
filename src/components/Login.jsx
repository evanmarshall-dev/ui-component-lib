import Input from "./Input";

const Login = () => {
  return (
    <>
      <h2>Please Login</h2>
      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
