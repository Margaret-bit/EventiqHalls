// import { useState } from "react";
// import { Mail, Lock, Eye, EyeOff, ShieldCheck } from "lucide-react";
// import { LuUser } from "react-icons/lu";
// import "./Login.css";
// import { useNavigate } from "react-router-dom";
// import SignupModal from  "../../components/static/signupModal/signupModal";
// import { useEffect } from "react";
// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Logging in with:", formData);
//   };

//     const [isModalOpen, setIsModalOpen] = useState(false);
  
//     const openModal = () => {
//       setIsModalOpen(true);
//     };
  
//     const closeModal = () => {
//       setIsModalOpen(false);
//     };
  
//     useEffect(() => {
//       if (isModalOpen) {
//         document.body.style.overflow = "hidden";
//       } else {
//         document.body.style.overflow = "unset";
//       }
  
//       return () => {
//         document.body.style.overflow = "unset";
//       };
//     }, [isModalOpen]);

//   return (
//     <div className="login-container">
//       {/* LEFT SECTION */}
//       <div className="left-section">
//         <button className="back-btn" onClick={() => navigate(-1)}>
//           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
//             <path d="M19 12H5M12 19l-7-7 7-7" />
//           </svg>
//         </button>

//         <div className="left-content">
//           <h1>Log In to Continue</h1>
//           <p>
//             Manage your event halls with ease and get more bookings, all on <strong>Eventiq</strong>.
//           </p>
//         </div>
//       </div>

//       {/* RIGHT SECTION */}
//       <div className="right-section">
//         <div className="login-card">
//           {/* <h2>Welcome</h2>
//           <p className="subtitle">Log in to continue</p> */}

//              <div className="form-header">
//                        <LuUser className="user-icon" size={40} />
//                        <div className="form-header-text">
//                          <h2>Welcome</h2>
//                          <p className="form-subtitle">Log in to continue</p>
//                        </div>
//                      </div>

// <form onSubmit={handleSubmit}>
//               <div className="input-group-email">
//               <label>
//                 <Mail size={14} className="label-icon" /> Email Address
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="youremail@example.com"
//               />
//             </div>
             

//             <div className="input-group password-field">
//               <label>
//                 <Lock size={14} className="label-icon" /> Password
//               </label>
//               <div className="password-box">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   placeholder="Create a strong password"
//                 />
//                 <button type="button" onClick={() => setShowPassword(!showPassword)}>
//                   {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//                 </button>
//               </div>
            
//             </div>

//             <div className="actions">
//               <a href="#" className="forgot-link">
//                 Forgot Password?
//               </a>
//             </div>

//             <button type="submit" className="login-btn">
//               Log In
//             </button>
//           </form>

//           <p className="signup-text">
//             Don’t have an account?{" "}
//             <a className="signup-link" onClick={openModal}>
//               Sign Up
//             </a>
//               {isModalOpen && <SignupModal onClose={closeModal} />}
//           </p>

//            <div className="security-note">
//                      <ShieldCheck size={16} color="#22c55e" />
//                      <span>Secure and encrypted platform</span>
//                    </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;







import { useState, useEffect} from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { User, Mail, Lock, Eye, EyeOff, ShieldCheck } from "lucide-react";
import { LuUser } from "react-icons/lu";
import SignupModal from  "../../components/static/signupModal/signupModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    password: "",
    termsAccepted: false,
  });

  // Handle form input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Validate inputs
  // const validateForm = () => {
  //   const newErrors = {};

  //   if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
  //   if (!formData.surname.trim()) newErrors.surname = "Surname is required";
  //   if (!formData.email.trim()) newErrors.email = "Email is required";
  //   else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
  //     newErrors.email = "Invalid email format";
  //   if (!formData.password.trim()) newErrors.password = "Password is required";
  //   else if (formData.password.length < 8)
  //     newErrors.password = "Password must be at least 8 characters";
  //   if (!formData.termsAccepted)
  //     newErrors.termsAccepted = "You must accept the terms";

  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  const validateForm = () => {
  if (!formData.firstName.trim()) {
    toast.error("First name is required");
    return false;
  }

  if (!formData.surname.trim()) {
    toast.error("Surname is required");
    return false;
  }

  if (!formData.email.trim()) {
    toast.error("Email is required");
    return false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    toast.error("Invalid email format");
    return false;
  }

  if (!formData.password.trim()) {
    toast.error("Password is required");
    return false;
  } else if (formData.password.length < 8) {
    toast.error("Password must be at least 8 characters");
    return false;
  }

  if (!formData.termsAccepted) {
    toast.error("You must accept the terms and conditions");
    return false;
  }

  return true; 
};


  // Handle submit with Axios
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

try {
  const response = await axios.post(
    "https://eventiq-final-project.onrender.com/api/v1/venueOwner",
    formData
  );

  console.log("Signup successful:", response.data);
  toast.success("Account created successfully! 🎉");
  setTimeout(() => navigate("/dashboardHome"), 2000); // slight delay to show toast
} catch (error) {
  console.error("Signup failed:", error);
  if (error.response) {
    toast.error(error.response.data.message || "Signup failed. Please try again.");
  } else {
    toast.error("Network error. Please check your internet connection.");
  }
} finally {
    setLoading(false);
  }

  };

   const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    useEffect(() => {
      if (isModalOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
  
      return () => {
        document.body.style.overflow = "unset";
      };
    }, [isModalOpen]);

  return (
    <section className="signup-container-Login">
       <ToastContainer position="top-right" autoClose={3000} />
      <div className="left-section3">
        <div
          className="bg-image3"
          style={{ backgroundImage: "url('src/assets/leftsidelogin.png')" }}
        ></div>

        <button className="back-btn3" onClick={() => navigate("/", { replace: true })}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="left-content3">
          
          <h1>
            Log In to <br /> Continue.
          </h1>
          <p>Manage your event halls with ease and get more bookings, all on Eventiq.
          </p>
        </div>
      </div>

      <section className="right-section3">
        <div className="form-wrapper3" >
          
          <div className="form-header3">
            <LuUser className="user-icon3" size={40} />
            <div className="form-header-text3">
              <h2>Welcome</h2>
              <p className="form-subtitle3">Log In to continue</p>
            </div>
          </div>

          <form className="form-content" onSubmit={handleSubmit}>
            

            <div className="input-group-email-Login">
              <label className="label-login">
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

            <div className="input-group-Login_password password-field-Login">
              <label>
                <Lock size={14} className="label-icon-Login_password" /> Password
              </label>
              <div className="password-box-Login">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && <p className="error-text">{errors.password}</p>}
            </div>

            <div className="checkbox-group-Login1">
              <label>
              
               <a href="#" style={{color:"#603379"}}><strong>Forgot Password?</strong></a>
                   </label>
                 
             
            
            </div>
              {errors.termsAccepted && (
                <p className="error-text">{errors.termsAccepted}</p>
              )}

            <button className="submit-btn-Login" style={{background:"#603379"}} type="submit" disabled={loading}>
              {loading ? "Logging In ..." : "Log In"}
            </button>

            <p className="login-text-Login">
              Don't have an account? <a onClick={openModal}>Sign Up</a>
              {isModalOpen && <SignupModal onClose={closeModal} />}
            </p>

              
          </form>

          <div className="security-note-Login">
            <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.1328 2.444C2.44891 2.4152 4.67585 1.54677 6.4 0C8.12403 1.54706 10.351 2.41578 12.6672 2.4448C12.7552 2.9648 12.8 3.5008 12.8 4.0456C12.8 8.2256 10.128 11.7816 6.4 13.0992C2.672 11.7808 0 8.2248 0 4.0448C0 3.4992 0.0455999 2.9648 0.1328 2.444ZM9.3656 5.4104C9.51133 5.25952 9.59196 5.05744 9.59014 4.84768C9.58832 4.63792 9.50418 4.43727 9.35585 4.28895C9.20753 4.14062 9.00688 4.05648 8.79712 4.05466C8.58736 4.05284 8.38528 4.13347 8.2344 4.2792L5.6 6.9136L4.5656 5.8792C4.41472 5.73347 4.21264 5.65284 4.00288 5.65466C3.79312 5.65648 3.59247 5.74062 3.44415 5.88895C3.29582 6.03727 3.21168 6.23792 3.20986 6.44768C3.20804 6.65744 3.28867 6.85952 3.4344 7.0104L5.0344 8.6104C5.18442 8.76038 5.38787 8.84463 5.6 8.84463C5.81213 8.84463 6.01558 8.76038 6.1656 8.6104L9.3656 5.4104Z" fill="#10B981"/>
</svg>

            <span>Secure and encrypted platform</span>
          </div>
          
        </div>
        

      </section>
      
    </section>
    
  );
};

export default Login;


