import { useState } from "react";
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
import { LuUser } from "react-icons/lu";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupIndividual = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Account created:", formData);
    toast.success("Account created successfully!");
  };

  return (
    <section className="signup-container">
      <div className="left-section">
        <div
          className="bg-image2"
          style={{ backgroundImage: "url('src/assets/leftsideclient.png')" }}
        ></div>

        <button
          className="back-btn2"
          onClick={() => navigate("/", { replace: true })}
        >
          <ArrowLeft size={20} />
        </button>

        <div className="left-content">
          <div className="badge">FOR INDIVIDUALS</div>
          <h1>
            Book Spaces <br /> You'll Love.
          </h1>
          <p>
            Find and book the perfect hall and services for your next event,
            fast and easy.
          </p>
        </div>
      </div>

      <section className="right-section">
        <div className="form-wrapper">
          <div className="form-header">
            <div className="user-icon">
              <User size={20} color="purple" />
            </div>
          </div>

          <form className="form-content" onSubmit={handleSubmit}>
            <div className="two-cols-ind">
              <div className="input-group1-ind">
                <label>
                  <User size={14} className="label-icon" /> First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                />
                {errors.firstName && (
                  <p className="error-text">{errors.firstName}</p>
                )}
              </div>

              <div className="input-group2-ind">
                <label>
                  <User size={14} className="label-icon" /> Surname
                </label>
                <input
                  type="text"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  placeholder="Doe"
                />
                {errors.surname && (
                  <p className="error-text">{errors.surname}</p>
                )}
              </div>
            </div>

            <div className="input-group-email-ind">
              <label>
                <Mail size={14} className="label-icon" /> Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="youremail@example.com"
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>

            <div className="input-group-ind password-field-ind">
              <label>
                <Lock size={14} className="label-icon-ind" /> Password
              </label>
              <div className="password-box-ind">
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
              {errors.password && (
                <p className="error-text">{errors.password}</p>
              )}
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
            {errors.termsAccepted && (
              <p className="error-text">{errors.termsAccepted}</p>
            )}

            <button
              className="submit-btn-ind"
              style={{ background: "#603379" }}
              type="submit"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>

            <p className="login-text-ind">
              Already have an account? <a href="/login">Log in</a>
            </p>
          </form>

          <div className="security-note-ind">
            <ShieldCheck size={14} color="#10B981" />
            <span>Secure and encrypted platform</span>
          </div>
        </div>
      </section>
      <ToastContainer />
    </section>
  );
};

export default SignupIndividual;
