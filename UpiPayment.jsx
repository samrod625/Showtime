import React, { useState } from "react";
import { FaGooglePay, FaPhoneAlt, FaRegCreditCard } from "react-icons/fa"; // Importing icons for a polished look
import OtpVerification from "./OtpVerification";

function UpiPayment() {
  const [upiId, setUpiId] = useState("");
  const [mobile, setMobile] = useState("");
  const [selectedBank, setSelectedBank] = useState("@sbi"); // Default bank selection
  const [amount] = useState("₹450");
  const [showOtpPage, setShowOtpPage] = useState(false); // State to switch between UPI and OTP pages

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate UPI ID
    if (!/^[a-zA-Z0-9._%+-]+$/.test(upiId)) {
      alert("Please enter a valid UPI ID username.");
      return;
    }

    // Validate Mobile Number
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      alert(
        "Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9."
      );
      return;
    }

    // Combine UPI ID and selected bank
    const fullUpiId = `${upiId}${selectedBank}`;

    // Proceed to OTP Page
    console.log(
      `Paying ${amount} using UPI ID: ${fullUpiId} and Mobile: ${mobile}`
    );
    setShowOtpPage(true);
  };

  const handleBankChange = (e) => {
    setSelectedBank(e.target.value);
  };
  if (showOtpPage) {
    return (
      <OtpVerification
      />
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-white">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <img
            src="https://shop.parallellearning.in/cdn/shop/products/02_payment_UPI_Simple_24x16_43a957f4-b89a-45bf-a433-5ead7050b18b_800x.gif?v=1632419846"
            alt="Google Pay Logo"
            className="w-40"
          />
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          UPI Payment
        </h2>

        {/* Payment Details */}
        <div className="text-left mb-6">
          <p className="text-lg font-semibold text-gray-800">Confirm Payment</p>
          <div className="flex justify-between text-gray-800 mt-2">
            <p className="font-semibold">Amount</p>
            <p>{amount}</p>
          </div>
        </div>

        {/* Payment Form */}
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          {/* UPI ID Input with @ fixed */}
          <div className="flex items-center border-b-2 border-gray-300 py-2">
            <FaRegCreditCard className="text-gray-500 mr-3" />
            <input
              type="text"
              id="upiId"
              placeholder="Enter your UPI ID username"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              required
              className="w-full p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-500">@</span>
            <select
              value={selectedBank}
              onChange={handleBankChange}
              className="ml-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="@sbi">sbi</option>
              {/* State Bank of India */}
              <option value="@hdfcbank">hdfcbank</option>
              {/* (HDFC Bank) */}
              <option value="@icici">icici</option>
              {/* (ICICI Bank) */}
              <option value="@axisbank">axisbank</option>
              {/* (Axis Bank) */}
              <option value="@bob">bob</option>
              {/* (Bank of Baroda) */}
              <option value="@pnb">pnb</option>
              {/* (Punjab National Bank) */}
              <option value="@kotak">kotak</option>
              {/* (Kotak Mahindra Bank) */}
              <option value="@yesbank">yesbank</option>
              {/* (Yes Bank) */}
              <option value="@idfcfirstbank">idfcfirstbank</option>
              {/* (IDFC First Bank) */}
              <option value="@rblbank">rblbank</option>
              {/* (RBL Bank) */}
              <option value="@unionbankofindia">unionbankofindia</option>
              {/* (Union Bank of India) */}
              <option value="@phonepe">phonepe</option>
              {/* (PhonePe) */}
              <option value="@okaxis">okaxis</option>
              {/* (Google Pay - Axis Bank) */}
              <option value="@paytm">paytm</option>
              {/* (Paytm) */}
              <option value="@apl">apl</option>
              {/* (Amazon Pay) */}
              <option value="@mbk">mbk</option>
              {/* (MobiKwik) */}
            </select>
          </div>

          {/* Mobile Number Input */}
          <div className="flex items-center border-b-2 border-gray-300 py-2">
            <FaPhoneAlt className="text-gray-500 mr-3" />
            <input
              type="text"
              id="mobile"
              placeholder="Enter your mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
              className="w-full p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Pay {amount}
          </button>
        </form>

        {/* Footer with Terms & Conditions */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>By making this payment, you agree to the</p>
          <p className="font-medium text-blue-500">Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
}

export default UpiPayment;