import React from "react";
import { toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const SignIn = () => {
  const navigate = useNavigate();

  
  

  const handleSubmit =(e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    // try {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        
        toast.success("Successfully LogIn!...", {
                position: "top-left",
                theme: "colored",
              });
        
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage, {
                position: "top-left",
                theme: "colored",
              });
      });
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">My Chat</span>
        <span className="title">Sign In</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email..." />
          <input type="password" placeholder="Password..." />

          <button>
            Sign in
          </button>
        </form>
        <p>
          You don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
