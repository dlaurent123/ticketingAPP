import { useState } from "react";
import useRequest from "../../hooks/use-request";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { doRequest, errors } = useRequest({
    url: "/api/users/signup",
    method: "post",
    body: { email, password },
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    doRequest();
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>signup</h1>
      <div className="form-group">
        <label>Email Address</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          className="form-control"
        />
      </div>
      {errors}
      <button className="btn btn-primary">Sign Up</button>
    </form>
  );
};

export default Signup;
