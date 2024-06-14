import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage";
// import { ForgotPasswordPage } from "./pages/ForgotPasswordPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        {/* <Route path="/forgot-password" element={<ForgotPasswordPage/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
