import React from "react";

const ContactUs = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1553775282-20af80779df7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
      }}
      className="hero bg-cover h-screen gap-10 bg-fixed"
    >
      <div className="hero-overlay bg-opacity-75"></div>
      <div className="hero-content text-center text-neutral-content  lg:flex-row-reverse">
        <div className="text-center lg:text-left hidden lg:block">
          <h1 className="text-5xl font-bold">Contact Us!</h1>
          <p className="py-6">
            Send us email for knowing more details about use.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                type="text"
                placeholder="message"
                className="input input-bordered h-[100px]"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
