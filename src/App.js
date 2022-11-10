import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Main from "./components/Landing/landing";


function App() {

  const user = localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        {/* {user && <Route path="/" exact element={<Main />} />} */}
        <Route path="/" exact element={<Main />} />
        {/* <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/form" exact element={<Formm />} /> */}
      </Routes>
    </Router>
  );
}

export default App;