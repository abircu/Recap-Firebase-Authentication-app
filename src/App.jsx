import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import "./App.css";
import app from "./Firebase/Firebase.config";
import { useState } from "react";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
function App() {
  const [user, setUser] = useState();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1>firebse+ React</h1>
      <button onClick={handleGoogleSignIn}>Google Sign in</button>
      {user && (
        <div className="card">
          <h4>{user.displayName}</h4>
        </div>
      )}
    </>
  );
}

export default App;
