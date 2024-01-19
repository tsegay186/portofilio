'use client'
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
const Contact = () => {
  const [state, handleSubmit] = useForm("xzbnzkap");
  if (state.succeeded) {
    return (
      <p className="flex justify-center">
        {" "}
        <h2 className="text-2xl">Thank you, I will reach you out very soon.</h2>
      </p>
    );
  }
  return (
    <div className="min-h-fit py-12 flex justify-evenly items-center mt-6 w-auto gap-x-8">
      <div className="">
        <div className="py-3">
          I would love to hear from you. Fill out the form and we wll be in
          touch.
        </div>

        <div>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              width: "80%",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="fullName">Full Name</label>
              <input
                style={{
                  height: "40px",
                  width: "100%",
                  borderRadius: "6px",
                  borderTopLeftRadius: "0",
                  paddingLeft: "12px",
                  border: "1px solid black",
                }}
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Full Name"
              />
              <ValidationError
                prefix="Fullname"
                field="fullname"
                errors={state.errors}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="email">Your Email</label>
              <input
                id="email"
                name="email"
                style={{
                  height: "40px",
                  width: "100%",
                  borderRadius: "6px",
                  borderTopLeftRadius: "0",
                  paddingLeft: "12px",
                  border: "1px solid black",
                }}
                type="text"
                placeholder="Email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="subject"> Subject</label>
              <input
                style={{
                  height: "40px",
                  width: "100%",
                  borderRadius: "6px",
                  borderTopLeftRadius: "0",
                  paddingLeft: "12px",
                  border: "1px solid black",
                }}
                id="subject"
                type="text"
                placeholder="Subject"
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="message"> Message</label>
              <textarea
                style={{
                  height: "40px",
                  width: "100%",
                  borderRadius: "6px",
                  borderTopLeftRadius: "0",
                  paddingLeft: "12px",
                  border: "1px solid black",
                }}
                id="message"
                name="message"
                placeholder="Message"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button
                className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
                type="submit"
                disabled={state.submitting}
                style={{
                  width: "100%",
                  alignSelf: "center",
                  padding: "12px",
                  borderRadius: "12px",
                }}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
