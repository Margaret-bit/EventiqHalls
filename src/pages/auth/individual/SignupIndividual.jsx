import { useState, useEffect, useRef } from "react";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";
import "./SignupIndividual.css";
import { useNavigate } from "react-router-dom";

const SignupIndividual = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    password: "",
    termsAccepted: false,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    console.log("Account created:", formData);
  };

  return (
    <div className="signup-container">
      <div className="left-section">
        <div
          className="bg-image"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519167758481-83f29da8c2b7?w=800')",
          }}
        ></div>

        <button className="back-btn" onClick={() => navigate("/")}>
          <ArrowLeft size={20} />
        </button>

        <div className="left-content">
          <div className="badge">FOR INDIVIDUALS</div>
          <h1>
            Book Spaces
            <br /> You'll Love
          </h1>
          <p>
            Find and book the perfect hall and services for your next event,
            fast and easy.
          </p>
        </div>
      </div>

      <div className="right-section">
        <div className="form-wrapper">
          <div className="form-header">
            <div className="user-icon">
              <User size={20} color="purple" />
            </div>
            <h2>Individual</h2>
          </div>
          <p className="form-subtitle">Create your account to get started</p>

          <div className="form-content">
            <div className="two-cols">
              <div className="input-group">
                <label>
                  <User size={14} className="label-icon" />
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                />
              </div>
              <div className="input-group">
                <label>
                  <User size={14} className="label-icon" />
                  Surname
                </label>
                <input
                  type="text"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="input-group">
              <label>
                <Mail size={14} className="label-icon" />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="youremail@example.com"
              />
            </div>

            <div className="input-group password-field">
              <label>
                <Lock size={14} className="label-icon" />
                Password
              </label>
              <div className="password-box">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                </button>
              </div>
            </div>

            <div className="checkbox-group">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
              />
              <label>
                I have read the <a href="#">Terms and Conditions</a> and I agree
                to it
              </label>
            </div>

            <button className="submit-btn" onClick={handleSubmit}>
              Create Account
            </button>

            <p className="login-text">
              Already have an account? <a href="#">Log in</a>
            </p>
          </div>

          <div className="security-note">
            <ShieldCheck size={16} color="#22c55e" />
            <span>Secure and encrypted platform</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupIndividual;
