import { useState, useEffect } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [error, setError] = useState("");

    useEffect(() => {
        setError("");
    }, [formData])

    const handleChange = ({ target }) => {
        const { name, value } = target;

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const submitForm = (e) => {
        e.preventDefault();

        if (checkValid()) {
            console.log("[SUBMIT]", formData);
        }
    }

    const validateEmail = (email) => {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const checkValid = () => {
        if (!formData.name) {
            setError("Please ensure you have filled out your name.");
            return false;
        } else if (!formData.message) {
            setError("Please ensure you have filled out your message.");
            return false;
        } else if (!validateEmail(formData.email)) {
            setError("Please ensure you have filled out a valid email.");
            return false;
        } else {
            return true
        }
    }

    return (
        <section className="container form">
            <form onSubmit={submitForm}>
                <div className="form-control">
                    <label htmlFor="name">Your name:</label>
                    <input type="text" id="name" name="name" onChange={handleChange} onBlur={checkValid} />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Your email:</label>
                    <input type="email" id="email" name="email" onChange={handleChange} onBlur={checkValid} />
                </div>
                <div className="form-control">
                    <label htmlFor="message">Your message:</label>
                    <textarea type="text" id="message" name="message" onChange={handleChange} onBlur={checkValid} />
                </div>

                <button type="submit">Reach Out!</button>
                {error && <p className="error">{error}</p>}
            </form>
        </section>
    )
}

export default Contact;