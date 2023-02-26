import React, { useRef } from "react";
import "./email.css";
import emailjs from '@emailjs/browser';

const Email = () => {

    const form=useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jsd1i9n', 'template_l9rmuss', form.current, '_pSVmFxOIvUWNL0nm')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };


  return (
    <div className="join" id="joinus">
      <div className="leftt">
        <hr/>
        <div>
          <span className="stroketext">READY TO</span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroketext"> WITH US?</span>
        </div>
      </div>
      <div className="righte">
        <form action="" ref={form} className="emailcontainer" onSubmit={sendEmail}>
            <input type="email" name="useremail" placeholder="Enter your email" />
            <button className="btn  btn-join">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Email;
