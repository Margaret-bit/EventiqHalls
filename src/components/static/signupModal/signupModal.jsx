import React from 'react';
import { X, User, Building2 } from 'lucide-react';
import './signupModal.css';
import { useNavigate } from 'react-router-dom';

const SignupModal = ({ onClose }) => {
    const navigate = useNavigate();

    const handleHallOwnerSignup = () => {
    onClose(); // Close the modal first
    navigate('/signup-hallowner'); // Navigate to the hall owner signup page
  };

  const handleIndividualSignup = () => {
    onClose();
    navigate('/signup-individual'); // Navigate to individual signup page (if you have one)
  };
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        {/* Close Button */}
        <button onClick={onClose} className="close-button">
          <X size={24} />
        </button>

        {/* Header */}
        <div className="modal-header">
          <h2 className="modal-title">
            Join <span className="brand-name">Eventiq</span>
          </h2>
          <p className="modal-subtitle">
            Choose how you'd like to get started
          </p>
        </div>

        {/* Sign Up Options */}
        <div className="options-container">
          {/* Individual Option */}
          <button className="option-button option-primary" onClick={handleIndividualSignup}>
            <User className="option-icon" size={24} />
            <h3 className="option-title">Sign up as Individual</h3>
            <p className="option-description option-description-light">
              Find and book event halls
            </p>
          </button>

          {/* Hall Owner Option */}
          <button className="option-button option-secondary" onClick={handleHallOwnerSignup}>
            <Building2 className="option-icon icon-yellow" size={24} />
            <h3 className="option-title option-title-dark"
            >
              Sign up as Hall Owner
            </h3>
            <p className="option-description">List and manage your venues</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;