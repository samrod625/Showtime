import React, { useState, useEffect } from "react";

function OtpVerification({ username, upiId, selectedBank, amount }) {
  const [otp, setOtp] = useState("");
  const [isOtpValid, setIsOtpValid] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [otpVerified, setOtpVerified] = useState(false); // Define otpVerified state
  const [showModal, setShowModal] = useState(false);

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (otp === "123456") {
      setSuccessMessage("OTP Verified Successfully!!"); // Set success message
      setError("");
      setIsOtpValid(true);
      setShowModal(true); // Open the modal
    } else {
      setError("Invalid OTP. Please try again.");
      setSuccessMessage("");
      setIsOtpValid(false);
    }
  };

   useEffect(() => {
     if (isOtpValid) {
       setShowModal(true); // Show the modal popup
     }
   }, [isOtpValid]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-white">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          OTP Verification
        </h2>

        {/* OTP Input Section */}
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-col items-center gap-4 mb-6">
            <label className="text-lg text-gray-700">Enter OTP</label>
            <input
              type="text"
              maxLength="6"
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={handleOtpChange}
              className="w-full p-4 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-center">{error}</p>}

          {/* Success Message */}
          {successMessage && (
            <div className="mt-6 text-center text-green-500">
              <p>{successMessage}</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition w-full"
          >
            Verify OTP
          </button>
        </form>

        {/* Footer with Resend OTP Option */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Didn't receive the OTP?</p>
          <button className="font-medium text-blue-500 hover:underline">
            Resend OTP
          </button>
        </div>
      </div>
      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
            {/* Animated Circle and Tick */}
            <div className="flex justify-center items-center mb-4">
              <svg
                className="w-16 h-16"
                viewBox="0 0 60 60"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="26"
                  cy="26"
                  r="25"
                  fill="none"
                  stroke="#4CAF50"
                  strokeWidth="4"
                  className="animate-draw-circle"
                />
                <path
                  fill="none"
                  stroke="#4CAF50"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 27l8 8 16-16"
                  className="animate-draw-tick"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-green-600 mb-2">
              Payment Successful!!
            </h3>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default OtpVerification;