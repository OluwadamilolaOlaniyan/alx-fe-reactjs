import useAuth from "../hooks/useAuth";

function Login() {
  const { login } = useAuth();

  const handleLogin = () => {
    login();
    alert("Logged in!");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;