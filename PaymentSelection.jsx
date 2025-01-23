import React, { useState } from "react";
import PaymentForm from "../components/CreditCard"; 
import UpiPayment from "../components/UpiPayment"; 

function PaymentApp() {
  const [currentStep, setCurrentStep] = useState("selection");
  const [formData, setFormData] = useState({
    movieName: "Avengers: Endgame",
    numberOfSeats: 3,
    totalAmount: "₹450",
  });

  const handlePaymentClick = () => {
    setCurrentStep("form");
  };

  const handleUpiClick = () => {
    setCurrentStep("upi");
  };

  return (
    <div className="font-roboto text-gray-800 min-h-screen flex flex-col items-center justify-between bg-gradient-to-r from-oxfordBlue via-yaleBlue to-lightSteelBlue">
      <header className="bg-oxfordBlue text-white py-5 w-full text-center shadow-lg">
        <h1 className="text-3xl font-bold">Payment Portal</h1>
      </header>
      {currentStep === "selection" && (
        <main className="p-5 text-center w-4/5 max-w-xl mt-8 bg-white shadow-xl rounded-lg">
          <h2 className="text-yaleBlue mb-5 text-2xl font-bold">
            Confirm Your Booking Details
          </h2>
          <div className="bg-gray-50 p-5 rounded-lg shadow-md text-left mb-8">
            <p>
              <strong>Movie:</strong> {formData.movieName}
            </p>
            <p>
              <strong>Number of Seats (Selected seats):</strong>{" "}
              {formData.numberOfSeats}
            </p>
            <p>
              <strong>Total Amount:</strong> {formData.totalAmount}
            </p>
          </div>
          <h3 className="mb-4 text-lg font-semibold">Choose Payment Method</h3>
          <div className="flex justify-center gap-4 mt-5">
            <button
              onClick={handlePaymentClick}
              className="py-3 px-6 bg-oxfordBlue text-white rounded shadow-md text-lg hover:scale-105 transition-transform"
            >
              Pay with Credit Card
            </button>
            <button
              onClick={handleUpiClick}
              className="py-3 px-6 bg-yaleBlue text-white rounded shadow-md text-lg hover:scale-105 transition-transform"
            >
              Pay with UPI
            </button>
          </div>
        </main>
      )}
      {currentStep === "form" && <PaymentForm formData={formData} />}
      {currentStep === "upi" && <UpiPayment />}{" "}
      {/* Render UPI Payment when UPI is clicked */}
      <footer className="mt-8 py-3 bg-oxfordBlue text-white text-center w-full">
        <p>© 2025 Movie Booking System. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default PaymentApp;