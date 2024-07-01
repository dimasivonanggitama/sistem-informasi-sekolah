import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage";
// import { ForgotPasswordPage } from "./pages/ForgotPasswordPage";
import { LoginPage } from "./pages/LoginPage";
import { DataSiswaPage } from "./pages/DataSiswaPage";
import { ParentDataPage } from "./pages/ParentDataPage";
import { EmployeeDataPage } from "./pages/EmployeeDataPage";
import { AchievementDataPage } from "./pages/AchievementDataPage";
import { StudentAttendancePage } from "./pages/StudentAttendancePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/studentdata" element={<DataSiswaPage/>} />
        <Route path="/parentdata" element={<ParentDataPage/>} />
        <Route path="/employeedata" element={<EmployeeDataPage/>} />
        <Route path="/achievementdata" element={<AchievementDataPage/>} />
        <Route path="/academic/class/attendance" element={<StudentAttendancePage/>} />
        {/* <Route path="/forgot-password" element={<ForgotPasswordPage/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
