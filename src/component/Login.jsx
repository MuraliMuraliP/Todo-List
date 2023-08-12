import React ,{ useState }from "react";
function Login() {
  const loginuser = { username: "muralinithish17@gmail.com", password: "abcdef" };
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );
  const [password, setPassword] = useState(
    localStorage.getItem("password") || ""
  );
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username ===loginuser.username && password === loginuser.password) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      setError("Error");
      console.log("error");
    }
  };
  return (
    <>
      <label> Email Id : </label>
      <input
        type="text"
        placeholder="Enter Email"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      /><br/><br/>
      <label > Password : </label>
      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <p style={{color:'red'}}>{error}</p>
      <button type="button" onClick={handleLogin}>
        Submit
      </button>
    </>
  );
}

export default Login;