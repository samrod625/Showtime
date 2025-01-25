// Modal.js
import React from "react";

const Modal = ({ showModal, onConfirm, onClose }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white text-black rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-xl font-bold mb-6">
          Are you sure you want to cancel the booking?
        </h2>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onConfirm}
            className="bg-green-300 text-black py-2 px-4 rounded-lg shadow hover:bg-green-500"
          >
            Yes
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 py-2 px-4 rounded-lg shadow hover:bg-red-800"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
