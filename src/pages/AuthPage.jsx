import { useState } from "react";

export default function AuthPage(){
    const [isLogin, setIsLogin] = useState(true); //toggles login/signup
    const [formData, setFormData] = useState({name:'', email: '', password: ''});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    
}