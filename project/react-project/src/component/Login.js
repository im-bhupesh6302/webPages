import React from 'react';
import logo from '../images/vuexy-thumbnail.jpeg';
import '../App.css';
import { useState,useEffect} from 'react';


import { useNavigate } from 'react-router-dom';



const Login = () => {
    const navigate=useNavigate();
    const initialValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState( {initialValues} );
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);
    // const [count,setCount]=useState(0);
    
    const validate = (values) => {
        const errors = {};
        const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        //const pass = /([A-Z]{1})([a-z]{1,})[@]{1}([0-9]){2,6}/;

        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is invalid email format";
        }
      else  if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length <6) {
            errors.password = "Password must be more than 6 characters";
        } else if (values.password.length > 12) {
            errors.password = "Password cannot exceed more than 12 characters";
        }
        else{
            navigate("/users");
        }
        return errors;
    };
    return (
        <body>
            <div className="container-fluid " id='main' >
            {Object.keys(formErrors).length === 0 && isSubmit ? (
                    <div className="ui message success"></div>
                ) :("")}
                <form onSubmit={handleSubmit}>
                    <h3 id='logoName' className='text-center'><img src={logo} id='vuexylogo' alt='logo' />&nbsp;Vuexy</h3>
                    <br />
                    <h5>Welcome to vuexy! &#128075;</h5>

                    <p id='texts'>Please sign-in to your account and start the<br/> adventure </p>

                    <label for='mail' >Email</label><br />
                    <input type='text' className='form-control ' id='mail' placeholder='john@example.com' name='email' value={formValues.email} onChange={handleChange}   />
                    <p class='emailReq'>{formErrors.email}</p>

                    <label for='pass' >Password</label>
                    <a href='#' id='forgot-pass' >Forgot Password?</a> <br />
                   

                    <input type='password' placeholder='*****' className='form-control mb-2' id='pass'  name='password' value={formValues.password} onChange={handleChange} />
                      <p class='passReq'>{formErrors.password}</p>
                    <input type='checkbox' /><span>  Remember Me</span>


                    <br />
                  
                    <div className='d-grid'>
                        {/* route start */}

                       <button className=' btn mt-2' id='sign-in' >Sign-in</button>
                     {/* route */}
                        <span className='mt-3 text-center'>New on our platform? <a href='#' id='create-acc'>Create an account</a> </span>
                    </div>
                    <span id='h6' >OR</span>

                    <footer id="footer">
                        <a href='https://www.facebook.com/'> <i class="fa-brands fa-facebook-square fa-xl me-2"></i></a>
                        <a href='https://twitter.com/i/flow/login'><i class="fa-brands fa-twitter-square fa-xl me-2"></i></a>
                        <i class="fa-solid fa-square-envelope fa-xl me-2"></i>
                        <a href='#'><i class="fa-brands fa-github-square fa-xl me-2" ></i></a>
                    </footer>


                </form>
            </div>
        </body>
    );
}

export default Login;

