import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import SignUp from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";
import { AuthProvider } from "./context/AuthContext";
import AddPost from "./pages/Post/AddPost";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/addPost" element={<AddPost />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
