import React, { useState } from "react";
import Header from "./Header";
import '../contact.css';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    };

    return (
        <>
            <Header />


            <div className="contact">
                <div className="contact1">
                    <h1 className="text1">
                        Contact us
                    </h1>
                    <h1 className="text2">
                        Leave a message
                    </h1>
                    <p className="text3">
                        Need to get in touch with us? Either fill out the form with your enquiry or find the
                        phone, email and social media handles to contact
                    </p>
                    <img className="trk-img" src={"../truck.png"} alt="truck-img" />
                </div>
                <div className="form">
                    {/* <img className="abc" src={"../e3.png"} alt="12212" />
                    <img className="abc1" src={"../e2.png"} alt="12212" />
                    <img className="abc2" src={"../e1.png"} alt="12212" /> */}
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="cont-name"
                            id="name"
                            name="name"
                            value={name}
                            placeholder="Name"
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <br />
                        <input
                            type="email"
                            className="cont-email"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <br />
                        <input
                            type="text"
                            className="cont-phone"
                            id="phone"
                            name="phone"
                            value={phone}
                            placeholder="Phone No."
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                        <br />
                        <textarea
                            id="message"
                            className="cont-msg"
                            name="message"
                            value={message}
                            placeholder="Message"
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                        <br />
                        <button className="cont-btn" type="submit">Contact Us</button>
                    </form>
                </div>

            </div>
            <div className="footer">
                <div className="loc">
                    <img className="loc-img" src={"../Location-icon.png"} alt="location icon" />
                    <p className="foot-txt">Location<br />
                        Ghaziabad, Delhi-NCR <br />
                        Uttar Pradesh, India
                    </p>

                </div>
                <div className="em">
                    <img className="em-img" src={"../Mail-icon.png"} alt="location icon" />
                    <p className="foot-txt">Email<br />
                        wasruk@example.com
                    </p>
                </div>
                <div className="ph">
                    <img className="ph-img" src={"../Phone-icon.png"} alt="location icon" />
                    <p className="foot-txt">Phone <br />
                        +91 0123456789
                    </p>
                </div>
                <div className="soc">
                    <img className="soc-ic" src={"../Twitter.png"} alt="location icon" />
                    <img className="soc-ic" src={"../Fb.png"} alt="location icon" />
                    <img className="soc-ic" src={"../Insta.png"} alt="location icon" />
                </div>
            </div>
        </>
    )
}