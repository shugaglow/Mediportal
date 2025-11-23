import React from "react";


function BookAppointment() {
  const [department, setDepartment] = React.useState("");
  const [doctor, setDoctor] = React.useState("");
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
  const [reason, setReason] = React.useState("");
  const [notes, setNotes] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment Booked Successfully!");
    setDepartment("");
    setDoctor("");
    setDate("");
    setTime("");
    setReason("");
    setNotes("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white px-4 py-2 rounded-lg shadow-md">

        <div>
            <h2 className="text-lg font-semibold mt-4">Schedule New Appointment</h2>
            <p className="text-gray-600">Please provide the necessary information below to book your appointment.</p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="mt-6 w-full flex flex-col gap-4">
          {/* Department & Doctor */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 mb-2">Select Department</label>
              <select
                className="w-full border border-gray-300 p-2 rounded-md"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value="">Select a Department</option>
                <option>General Medicine</option>
                <option>Cardiology</option>
                <option>Dermatology</option>
                <option>Pediatrics</option>
                <option>Orthopedics</option>
              </select>
            </div>

            <div className="flex-1">
              <label className="block text-gray-700 mb-2">Doctor</label>
              <select
                className="w-full border border-gray-300 p-2 rounded-md"
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
              >
                <option value="">Select a Doctor</option>
                <option>Dr. Sarah Daniels</option>
                <option>Dr. Eno Ikpe</option>
                <option>Dr. Phil. Ken</option>
                <option>Dr. Ife Ayobami</option>
              </select>
            </div>
          </div>

          {/* Date & Time */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 mb-2">Preferred Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>

            <div className="flex-1">
              <label className="block text-gray-700 mb-2">Preferred Time</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
          </div>

          {/* Reason & Notes */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 mb-2">Reason for Visit</label>
              <textarea
                rows="5"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Describe your symptoms or reason for the appointment"
                className="w-full border border-gray-300 p-2 rounded-md text-gray-700"
              />
            </div>

            <div className="flex-1">
              <label className="block text-gray-700 mb-2">Additional Notes</label>
              <textarea
                rows="5"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any other details you want to add"
                className="w-full border border-gray-300 p-2 rounded-md text-gray-700"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 w-full bg-blue-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookAppointment;
