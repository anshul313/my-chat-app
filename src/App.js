import { Home, SignIn, SignUp } from "./pages";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./Styles/style.scss";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Settings from "./pages/Settings";
import { ToastContainer } from "react-toastify";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to={"/login"} />;
    }
    return children;
  };
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer/>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="login" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="settings" element={<Settings/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
