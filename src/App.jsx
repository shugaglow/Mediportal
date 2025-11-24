import { BrowserRouter, Routes, Route } from "react-router-dom";

// Landing Page
import LandingPage from "./Landingpage/LandingPage";

// App Layout & Pages
import Layout from "./Layout";
import Home from "./pages/Home";

// Appointments
import AppointmentLayout from "./pages/Appointments/AppointmentLayout";
import BookAppointment from "./pages/Appointments/BookAppointment";
import UpcomingAppointments from "./pages/Appointments/UpcomingAppointments";
import PastAppointments from "./pages/Appointments/PastAppointments";
import ConfirmedAppointments from "./pages/Appointments/ConfirmedAppointments";
import CancelledAppointments from "./pages/Appointments/CancelledAppointments";

// Medical History
import HistoryLayout from "./pages/History/HistoryLayout";
import PastVisits from "./pages/History/PastVisits";
import Immunizations from "./pages/History/Immunizations";
import LabResults from "./pages/History/LabResults";
import Allergies from "./pages/History/Allergies";

// Other Pages
import Prescriptions from "./pages/Prescriptions/Prescriptions";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import Billings from "./pages/Billings";
import Reminders from "./pages/Reminders";
import HealthTips from "./pages/HealthTips";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC ROUTE */}
        <Route path="/" element={<LandingPage />} />

        {/* PROTECTED APP ROUTES */}
        <Route path="/app" element={<Layout />}>
          <Route index element={<Home />} />

          {/* Appointments */}
          <Route path="appointments" element={<AppointmentLayout />}>
            <Route index element={<BookAppointment />} />
            <Route path="upcoming" element={<UpcomingAppointments />} />
            <Route path="past" element={<PastAppointments />} />
            <Route path="confirmed" element={<ConfirmedAppointments />} />
            <Route path="cancelled" element={<CancelledAppointments />} />
          </Route>

          {/* Medical History */}
          <Route path="medicalhistory" element={<HistoryLayout />}>
            <Route index element={<PastVisits />} />
            <Route path="immunizations" element={<Immunizations />} />
            <Route path="labresults" element={<LabResults />} />
            <Route path="allergies" element={<Allergies />} />
          </Route>

          {/* Other Pages */}
          <Route path="prescription" element={<Prescriptions />} />
          <Route path="profile" element={<Profile />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="settings" element={<Settings />} />
          <Route path="billings" element={<Billings />} />
          <Route path="reminders" element={<Reminders />} />
          <Route path="healthtips" element={<HealthTips />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;


