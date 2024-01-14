import React from "react";

const Contact = () => {
  return (
    <div className="min-h-fit py-12 flex justify-evenly items-center mt-6 w-auto gap-x-8">
      <div className="">
        <div className="py-3">
          I'd love to hear from you. Fill out the form and we'll be in touch.
        </div>

        <div>
          <form
            action=""
            method="post"
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
                type="text"
                value=""
                placeholder="Full Name"
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="email">Your Email</label>
              <input
                id="email"
                style={{
                  height: "40px",
                  width: "100%",
                  borderRadius: "6px",
                  borderTopLeftRadius: "0",
                  paddingLeft: "12px",
                  border: "1px solid black",
                }}
                type="text"
                value=""
                placeholder="Email"
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
                value=""
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
                value=""
                placeholder="Message"
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
