import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage";
// import { ForgotPasswordPage } from "./pages/ForgotPasswordPage";
import { LoginPage } from "./pages/LoginPage";
import { DataSiswaPage } from "./pages/DataSiswaPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/datasiswa" element={<DataSiswaPage/>} />
        {/* <Route path="/forgot-password" element={<ForgotPasswordPage/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
