// import { useState, useRef, useEffect } from 'react';
// import { X } from 'lucide-react';
// import "./VerificationModal.css"
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const VerificationModal=()=> {
//   const [code, setCode] = useState(['', '', '', '', '', '']);
//   const [timer, setTimer] = useState(59);
//   const inputRefs = useRef([]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimer((prev) => (prev > 0 ? prev - 1 : 0));
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const handleChange = (index, value) => {
//     if (value.length > 1) {
//       value = value.slice(-1);
//     }
    
//     if (/^\d*$/.test(value)) {
//       const newCode = [...code];
//       newCode[index] = value;
//       setCode(newCode);

//       if (value && index < 5) {
//         inputRefs.current[index + 1]?.focus();
//       }
//     }
//   };

//   const handleKeyDown = (index, e) => {
//     if (e.key === 'Backspace' && !code[index] && index > 0) {
//       inputRefs.current[index - 1]?.focus();
//     }
//   };

//   const handlePaste = (e) => {
//     e.preventDefault();
//     const pastedData = e.clipboardData.getData('text').slice(0, 6);
//     if (/^\d+$/.test(pastedData)) {
//       const newCode = pastedData.split('');
//       setCode([...newCode, ...Array(6 - newCode.length).fill('')]);
//       inputRefs.current[Math.min(pastedData.length, 5)]?.focus();
//     }
//   };

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
//   };

//   const navigate = useNavigate();

// const handleVerify = async () => {
//   const verificationCode = code.join("");

//   if (verificationCode.length < 6) {
//     toast.error("Please enter the 6-digit code");
//     return;
//   }

//   try {
//     const response = await axios.post("https://eventiq-final-project.onrender.com/api/v1/verify", {
//       code: verificationCode,
//       email: userEmail, // if you pass it as prop from signup
//     });

//     toast.success("Verification successful! 🎉");
//     navigate("/dashboardHome");
//   } catch (error) {
//     console.error("Verification failed:", error);
//     toast.error(error.response?.data?.message || "Invalid or expired code");
//   }
// };


//   return (
//     <div className="modal-overlay">
//       <div className="modal-container">
//         <button className="modal-close-btn">
//           <X size={24} />
//         </button>

//         <h2 className="modal-title">Verification</h2>

//         <p className="modal-description">
//           A verification code has been sent to your email address. Please enter to continue.
//         </p>

//         <div className="code-input-container">
//           {code.map((digit, index) => (
//             <input
//               key={index}
//               ref={(el) => (inputRefs.current[index] = el)}
//               type="text"
//               maxLength="1"
//               value={digit}
//               onChange={(e) => handleChange(index, e.target.value)}
//               onKeyDown={(e) => handleKeyDown(index, e)}
//               onPaste={handlePaste}
//               className="code-input"
//             />
//           ))}
//         </div>

//         <button className="verify-btn" onClick={handleVerify}>
//           Verify
//         </button>

//         <p className="resend-text">
//           Resend code in <span className="timer-text">{formatTime(timer)}</span>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default VerificationModal;
import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import "./VerificationModal.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const VerificationModal = ({ userEmail }) => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(59);
  const [isResending, setIsResending] = useState(false);
  const inputRefs = useRef([]);
  const navigate = useNavigate();
   const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null; // hide modal

  // countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // handle code input
  const handleChange = (index, value) => {
    if (value.length > 1) value = value.slice(-1);
    if (/^\d*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (/^\d+$/.test(pastedData)) {
      const newCode = pastedData.split("");
      setCode([...newCode, ...Array(6 - newCode.length).fill("")]);
      inputRefs.current[Math.min(pastedData.length, 5)]?.focus();
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // verify code
  const handleVerify = async () => {
    const verificationCode = code.join("");

    if (verificationCode.length < 6) {
      toast.error("Please enter the 6-digit code");
      return;
    }

    try {
      await axios.post("https://eventiq-final-project.onrender.com/api/v1/verify", {
        code: verificationCode,
        email: userEmail,
      });

      toast.success("Verification successful! 🎉");
      navigate("/dashboardHome");
    } catch (error) {
      console.error("Verification failed:", error);
      toast.error(error.response?.data?.message || "Invalid or expired code");
    }
  };

  // resend code
  const handleResend = async () => {
    if (!userEmail) {
      toast.error("Email not found — please sign up again");
      return;
    }

    setIsResending(true);
    try {
      await axios.post("https://eventiq-final-project.onrender.com/api/v1/resendOtp", {
        email: userEmail,
      });

      toast.success("A new verification code has been sent!");
      setTimer(59);
    } catch (error) {
      console.error("Resend failed:", error);
      toast.error(error.response?.data?.message || "Failed to resend code");
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-button" onClick={() => setIsOpen(false)}>
          <X size={24} />
        </button>

        <h2 className="modal-title">Verification</h2>

        <p className="modal-description">
          A verification code has been sent to your email address. Please enter it below to continue.
        </p>

        <div className="code-inputs">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              className="code-input"
            />
          ))}
        </div>

        <button className="verify-btn" onClick={handleVerify}>
          Verify
        </button>

        <div className="resend-section">
          {timer > 0 ? (
            <p className="resend-text">
              Resend code in <span className="timer">{formatTime(timer)}</span>
            </p>
          ) : (
            <button
              className="resend-btn"
              onClick={handleResend}
              disabled={isResending}
            >
              {isResending ? "Resending..." : "Resend Code"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerificationModal;
