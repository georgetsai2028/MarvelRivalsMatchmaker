import { useState } from "react";

export default function AuthPage(){
    const [isLogin, setIsLogin] = useState(true); //toggles login/signup
    const [formData, setFormData] = useState({name:'', email: '', password: ''});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        //conditional logic
        const endpoint = isLogin ? '/api/v1/auth/sign-in' : 'api/v1/auth/sign-up'; //if login true go to sign-in route, else go to signup route
        const payload = isLogin ? {email: formData.email, password: formData.password} : formData; //if signing up send full form data in payload

        //try catch block to send req
        try{
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(payload)
            });
            //handling the req
            const data = await res.json();
            if(!res.ok) throw new Error(data.message);

            //save the token and redirect to new page
            //stores the received JWT token in localStorage, so you can use it later to authenticate API calls
            localStorage.setItem('token', data.data.token)
            //redirect user to profile on success
             window.location.href = '/profile'
        }catch(error){
            alert(error.message);
        };
        
    }

    return (
        <div className="formDiv">
          <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <p onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'Need an account? Sign up' : 'Have an account? Log in'} </p>

      </div>
    )
}