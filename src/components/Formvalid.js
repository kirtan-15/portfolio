// import React, { useState } from 'react';

// const Formvalid = () => {
//   const [form, setForm] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   const validate = () => {
//     const newErrors = {};
//     if (!form.username.trim()) {
//       newErrors.username = 'Username is required';
//     } else if (form.username.trim().split(/\s+/).length < 2) {
//       newErrors.username = 'Please enter both first and last name';
//     }
//     if (!form.email) {
//       newErrors.email = 'Email is required';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
//       newErrors.email = 'Email is invalid';
//     }
//     if (!form.password) {
//       newErrors.password = 'Password is required';
//     } else if (form.password.length < 6) { 
//       newErrors.password = 'Password must be at least 6 characters';
//     }
//     if (!form.confirmPassword) {
//       newErrors.confirmPassword = 'Confirm password is required';
//     } else if (form.password !== form.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }
//     return newErrors;
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     setErrors(validationErrors);
//     setSubmitted(true);
//     if (Object.keys(validationErrors).length === 0) {
//       alert('Form submitted successfully!');
//     }
//   };

//   return (
//     <div style={{ maxWidth: '400px', margin: 'auto' }}>
//       <h2>Form Validation Example</h2>
//       <form onSubmit={handleSubmit} noValidate>
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             name="username"
//             value={form.username}
//             onChange={handleChange}
//           />
//           {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//           />
//           {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={form.password}
//             onChange={handleChange}
//           />
//           {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
//         </div>
//         <div>
//           <label>Confirm Password:</label>
//           <input
//             type="password"
//             name="confirmPassword"
//             value={form.confirmPassword}
//             onChange={handleChange}
//           />
//           {errors.confirmPassword && <span style={{ color: 'red' }}>{errors.confirmPassword}</span>}
//         </div>
//         <button type="submit">Submit</button>
//         {submitted && Object.keys(errors).length === 0 && (
//           <div style={{ color: 'green', marginTop: '10px' }}>Form is valid!</div>
//         )}
//       </form>
//     </div>
//   );
// };




import React,{useState} from "react";

const Formvalid = ({ onSuccess, count }) => {
    let [user, setUser]= useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    let [error, setError] = useState("")
    let [success, setSuccess] = useState("")

    let {name, email, password, confirmPassword} = user

    function handleChange(e){
                setUser({...user, [e.target.name]: e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault();
        if(!name || !email || !password || !confirmPassword){
            setError("Please fill all the details")
            setSuccess("")
        }
        else if(!name.includes(" ")){
            setError("Please Enter your first and last name")
            setSuccess("")
        }
        else if(!email.includes("@")){
            setError("Please Enter Valid Email")
            setSuccess("")
        }
        else if(password !== confirmPassword){
            setError("Password and confirm password should be same")
            setSuccess("")
        }
        else{
            setSuccess("Form submitted Successfully");
            if (typeof onSuccess === "function") onSuccess();
            setError("")
            setUser({
                name:"",
                email:"",
                password:"",
                confirmPassword:""
            })
        }
    }

    return(
        <div className="signup">
            <p style={{fontWeight:'bold'}}>Total submissions so far: {count}</p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Your Name" name="name" onChange={handleChange} value={name}/>
                <input type="text" placeholder="Enter Your Email" name="email" onChange={handleChange} value={email}/>
                <input type="text" placeholder="Enter Your Password" name="password" onChange={handleChange} value={password}/>
                <input type="text" placeholder="Enter Your confirm Password" name="confirmPassword" onChange={handleChange} value={confirmPassword}/>
                <button type="submit" style={{marginTop:"1rem"}}>Submit</button>
                
            </form>
            {
                error && <h3 style={{color:"Red"}}>{error}</h3>
            }
            {
                success && <h3 style={{color:"Green"}}>{success}</h3>
            }
        </div>
    )
}

export default Formvalid;
