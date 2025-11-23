
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"

import Appointments from "./pages/Appointments/Appointments"


import Profile from "./pages/Profile"
import Layout from "./Layout"
import Notifications from "./pages/Notifications"
import Settings from "./pages/Settings"
import Billings from "./pages/Billings"
import Reminders from "./pages/Reminders"
import HealthTips from "./pages/HealthTips"
import BookAppointment from "./pages/Appointments/BookAppointment"
import UpcomingAppointments from "./pages/Appointments/UpcomingAppointments"
import PastAppointments from "./pages/Appointments/PastAppointments"
import ConfirmedAppointments from "./pages/Appointments/ConfirmedAppointments"
import CancelledAppointments from "./pages/Appointments/CancelledAppointments"
import AppointmentLayout from "./pages/Appointments/AppointmentLayout"
import Prescriptions from "./pages/Prescriptions/Prescriptions"
import PastVisits from "./pages/History/PastVisits"
import LabResults from "./pages/History/LabResults"
import Immunizations from "./pages/History/Immunizations"
import Allergies from "./pages/History/Allergies"
import HistoryLayout from "./pages/History/HistoryLayout"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="appointments" element={<AppointmentLayout/>}>
                
                <Route index element={<BookAppointment />} />
                <Route path="upcoming" element={<UpcomingAppointments />} />
                <Route path="past" element={<PastAppointments />} />
                <Route path="confirmed" element={<ConfirmedAppointments />} />
                <Route path="cancelled" element={<CancelledAppointments />} />
          </Route> 



          <Route path="/medicalhistory" element={<HistoryLayout />} >
                 <Route index element={<PastVisits />} />
                <Route path="immunizations" element={<Immunizations />} />
                <Route path="labresults" element={<LabResults />} />
                <Route path="allergies" element={<Allergies />} />
          </Route>


          <Route path="/prescription" element={<Prescriptions />} />
          <Route path="/profile" element={<Profile />} />
           <Route path="/notifications" element={<Notifications/>} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/billings" element={<Billings/>} />
            <Route path="/reminders" element={<Reminders />} />
            <Route path="/healthtips" element={<HealthTips />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
