function Login() {
  const handleLogin = () => {
    localStorage.setItem("isAuthenticated", "true");
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