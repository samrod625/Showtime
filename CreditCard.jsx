import React, { useState } from "react";
import OtpVerification from "./OtpVerification";

function PaymentForm() {
  const [formData, setFormData] = useState({
    movieName: "Avengers: Endgame",
    numberOfSeats: 3,
    totalAmount: "₹450",
    cardType: "Visa",
    cardNumber: "",
    nameOnCard: "",
    expiryMonth: "",
    expiryYear: "",
    securityCode: "",
  });

  const [showOtpPage, setShowOtpPage] = useState(false); // State to manage OTP page navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate card details
    if (!/^\d{16}$/.test(formData.cardNumber)) {
      alert("Please enter a valid 16-digit card number.");
      return;
    }

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    if (
      formData.expiryYear < currentYear ||
      (formData.expiryYear == currentYear &&
        formData.expiryMonth < currentMonth)
    ) {
      alert("Your card's expiry date is invalid or has already passed.");
      return;
    }

    if (!/^\d{3,4}$/.test(formData.securityCode)) {
      alert("Please enter a valid 3 or 4-digit security code.");
      return;
    }

    // Navigate to OTP Verification
    setShowOtpPage(true);
  };

  if (showOtpPage) {
    return (
      <OtpVerification
      />
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-blue-500 mb-2">
        Amount: {formData.totalAmount}
      </h2>
      <h3 className="text-lg text-gray-700 mb-6">
        Movie: {formData.movieName}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="block text-sm font-medium text-gray-700">
            Card Number
          </span>
          <div className="relative flex items-center">
            <input
              type="text"
              name="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={formData.cardNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
            <div className="absolute right-2 flex space-x-2">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/free-visa-credit-card-icon-download-in-svg-png-gif-file-formats--e-commerce-pack-shopping-icons-1547549.png?f=webp&w=256"
                alt="Visa"
                className="h-6"
              />
              <img
                src="data:image/jpeg;base64,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"
                alt="MasterCard"
                className="h-6"
              />
            </div>
          </div>
        </label>

        <label className="block">
          <span className="block text-sm font-medium text-gray-700">
            Name on Card
          </span>
          <input
            type="text"
            name="nameOnCard"
            placeholder="Ex. John Doe"
            value={formData.nameOnCard}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </label>

        <div className="flex gap-4">
          <label className="flex-1">
            <span className="block text-sm font-medium text-gray-700">
              Expiry Month
            </span>
            <select
              name="expiryMonth"
              value={formData.expiryMonth}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Month</option>
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i} value={String(i + 1).padStart(2, "0")}>
                  {String(i + 1).padStart(2, "0")}
                </option>
              ))}
            </select>
          </label>

          <label className="flex-1">
            <span className="block text-sm font-medium text-gray-700">
              Expiry Year
            </span>
            <select
              name="expiryYear"
              value={formData.expiryYear}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Year</option>
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i} value={String(2025 + i)}>
                  {2025 + i}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="block">
          <span className="block text-sm font-medium text-gray-700">
            Security Code (CVV)
          </span>
          <input
            type="password"
            name="securityCode"
            placeholder="•••"
            value={formData.securityCode}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </label>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Pay Now
        </button>
      </form>

      <p className="text-sm text-gray-600 mt-4">
        Note: You will be redirected to your bank's secure site for
        verification.
      </p>
    </div>
  );
}

export default PaymentForm;
