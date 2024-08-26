import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";
import { useSelector } from "react-redux";
import { ThemeProvider } from "./themeProvider";
import { ThemeContext } from './themeProvider'; 
import Chat from "./pages/Chat/Chat";
import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const user = useSelector((state) => state.authReducer.authData);
  const { theme } = useContext(ThemeContext);

  return (
    <>
    <ToastContainer />
    <div
      className="App"
      data-theme={theme}
      style={{
        height:
          window.location.href === "http://localhost:3000/chat"
            ? "calc(100vh - 2rem)"
            : "auto",
      }}
    >
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../auth" />}
        />
        <Route
          path="/auth"
          element={user ? <Navigate to="../home" /> : <Auth />}
        />
        <Route
          path="/profile/:id"
          element={user ? <Profile /> : <Navigate to="../auth" />}
        />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem", height: "100vh" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />

        <Route
          path="/chat"
          element={user ? <Chat /> : <Navigate to="../auth" />}
        />
      </Routes>
    </div>
    </>
  );
}

export default App;
