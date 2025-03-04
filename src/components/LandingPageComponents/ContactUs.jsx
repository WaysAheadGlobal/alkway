import React from "react";
import contactUsImage from "./contactUsImage.jpg";
import { useState } from "react";
import ModalForContactUsForm from "./ModalForContactUsForm";
import AutorenewIcon from "@mui/icons-material/Autorenew";
export default function ContactUs(props) {
  const [displayErrorModal, setDisplayErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState();
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [submittingForm, setSubmittingForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }
  async function submitForm() {
    if (!name || !email || !phoneNo) return;
    const data = {
      name: name,
      email: email,
      phoneNo: phoneNo,
      city: city,
      message: message,
    };

    // isValidEmail(email);
    if (isValidEmail(email)) {
    } else {
      setErrorMessage("Please Enter Valid Email Address.");
      setDisplayErrorModal(true);
    }
    // console.log(isValidEmail);
    setSubmittingForm(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/contactUs`,
        {
          method: "POST", // You can use 'PUT', 'PATCH' or other methods as needed
          headers: {
            "Content-Type": "application/json", // This tells the server to expect JSON
          },
          body: JSON.stringify(data), // Convert the JavaScript object to a JSON string
        }
      );
      const responseRecieved = await response.json();
      setSubmittingForm(false);
      if (responseRecieved.message === "submitted successfully") {
        setSubmitted(true);
        setName("");
        setEmail("");
        setPhoneNo(0);
        setCity("");
        setMessage("");
      }
    } catch (err) {
      console.log(err);
    }

    // console.log(data);
  }
  function closeModal() {
    setErrorMessage("");
    setDisplayErrorModal(false);
  }
  return (
    <>
      <div className="flex flex-col px-4 md:px-0 md:flex-row md:mx-14 md:my-16  bg-[#F9F9F9] items-center rounded-2xl 2xl:rounded-[20px]">
        {/* <div className="flex px-14 py-8 gap-20 bg-white "> */}

        <div className="">
          <img
            className="w-[600px]  md:w-auto rounded-2xl 2xl:rounded-[20px]"
            src={contactUsImage}
            alt=""
            loading="lazy"
          ></img>
        </div>
        <div className="flex flex-col gap-3 px-4 my-5 md:my-0 w-full md:mx-24">
          <div>
            <p className="applyClassicaProFont300 leading-[14px] uppercase text-[9px] tracking-widest 2xl:text-[12px] text-[#52434A]">
              Contact us
            </p>
            <p className="applyArethusaPro500 text-[18px] 2xl:text-[24px] leading-[37.4px] text-[#252A2C]">
              We'd love to hear from you
            </p>
          </div>
          {displayErrorModal === true && (
            <ModalForContactUsForm
              closeModal={closeModal}
              errorMessage={errorMessage}
            />
          )}

          <ContactUsForm
            setName={setName}
            setEmail={setEmail}
            setMessage={setMessage}
            setPhoneNo={setPhoneNo}
            setCity={setCity}
            submitForm={submitForm}
            submittingForm={submittingForm}
            submitted={submitted}
          />
        </div>
      </div>
    </>
  );
}
function ContactUsForm({
  setName,
  setEmail,
  setMessage,
  setPhoneNo,
  setCity,
  submitForm,
  submittingForm,
  submitted,
}) {
  return (
    <div className="flex flex-col  gap-2  ">
      <div className="flex gap-5">
        <div>
          <p className="text-[11px] 2xl:text-[13px]  applyClassicaProFont700 ">
            Your Name
          </p>
          <input
            onChange={(e) => setName(e.target.value)}
            className="w-[100%] text-[12px] 2xl:text-[14px]  applyClassicaProFont px-2 md:w-auto focus:outline-none mt-[2px] rounded-[4px] 2xl:rounded-[5px] border-[1px] border-[#E7E7E7] py-1"
            placeholder=""
          ></input>
        </div>
        <div>
          <p className="text-[11px] 2xl:text-[13px]  applyClassicaProFont700 2xl:leading-[22px]">
            Your Email
          </p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-[100%] text-[12px] 2xl:text-[14px]  px-2 md:w-auto applyClassicaProFont focus:outline-none mt-[2px] rounded-[4px] 2xl:rounded-[5px] border-[1px] border-[#E7E7E7] py-1"
            placeholder=""
          ></input>
        </div>
      </div>
      <div className="flex gap-5">
        <div>
          <p className="text-[11px]  2xl:text-[13px]   applyClassicaProFont700 2xl:leading-[22px]">
            Your Phone
          </p>
          {/* setMessage, setPhoneNo, setCity */}
          <input
            onChange={(e) => setPhoneNo(e.target.value)}
            className="focus:outline-none text-[12px] 2xl:text-[14px]  applyClassicaProFont px-2 mt-[2px] w-[100%] md:w-auto rounded-[4px] 2xl:rounded-[5px] border-[1px] border-[#E7E7E7] py-1"
            placeholder=""
          ></input>
        </div>
        <div>
          <p className="text-[11px] 2xl:text-[13px]  applyClassicaProFont700 2xl:leading-[22px]">
            Your City
          </p>
          <input
            onChange={(e) => setCity(e.target.value)}
            className="focus:outline-none text-[12px] 2xl:text-[14px]  applyClassicaProFont px-2 mt-[2px]  w-[100%] md:w-auto rounded-[4px] 2xl:rounded-[5px] border-[1px] border-[#E7E7E7] py-1"
            placeholder=""
          ></input>
        </div>
      </div>
      <div>
        <div>
          <p className="text-[11px] 2xl:text-[13px]  applyClassicaProFont700 2xl:leading-[22px]">
            Your Message
          </p>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            className="focus:outline-none text-[12px] 2xl:text-[14px]  applyClassicaProFont px-2 mt-[2px] w-full rounded-[4px] 2xl:rounded-[5px] border-[1px] border-[#E7E7E7] py-1"
            placeholder=""
          ></textarea>
        </div>
      </div>
      <button
        onClick={submitForm}
        className="bg-black text-[12px] py-2 rounded-[4px] 2xl:text-[14px] text-white applyClassicaProFont leading-[16.1px]"
      >
        {submittingForm === true ? (
          <AutorenewIcon className="animate-spin" />
        ) : (
          ""
        )}

        {submitted === true ? "Sent!" : "Send Message"}
      </button>
    </div>
  );
}
