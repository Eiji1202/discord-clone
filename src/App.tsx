import React, { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
// import { useSelector } from "react-redux";
import "./App.scss";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import Chat from "./components/chat/Chat";
import Login from "./components/login/Login";
import Sidebar from "./components/sidebar/Sidebar";
import { auth } from "./firebase";
import { login, logout } from "./futures/userSlice";
import { ErrorFallback } from "./utils/ErrorFallback";

function App() {
  const user = useAppSelector((state) => state.user.user);
  // const user = null;

  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      console.log(loginUser);
      if (loginUser) {
        dispatch(
          login({
            uid: loginUser.uid,
            photo: loginUser.photoURL,
            email: loginUser.email,
            displayName: loginUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      {/* ログイン状態によって表示を変える */}
      {user ? (
        <>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            {/* sidebar */}
            <Sidebar />
          </ErrorBoundary>
          {/* home */}
          <Chat />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
