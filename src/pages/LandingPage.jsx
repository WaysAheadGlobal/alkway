import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/LandingPageComponents/HeroSection";
import InDemandProperties from "../components/LandingPageComponents/InDemandProperties";
import DreamHomeAwaits from "../components/LandingPageComponents/DreamHomeAwaits";
import FrequentyAskedQuestions from "../components/LandingPageComponents/FrequentyAskedQuestions";
import ContactUs from "../components/LandingPageComponents/ContactUs";
import Footer from "../components/Footer";
import CloseIcon from "@mui/icons-material/Close";
import AutorenewIcon from "@mui/icons-material/Autorenew";
export default function LandingPage(props) {
  // console.log(process.env.REACT_APP_API_URL);
  return (
    <>
      <div className="relative">
        <Navbar />
        <HeroSection />
        <ContactUsPopUp />
        <InDemandProperties />
        <DreamHomeAwaits />
        <FrequentyAskedQuestions />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}
function ContactUsPopUp() {
  const [displayContactUsForm, setDisplayContactUsForm] = useState(true);
  const [displayLoadingSpinner, setDisplayLoadingSpinner] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState();
  const [displayError, setDisplayError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }
  async function submitForm() {
    const data = {
      name: name,
      email: email,
      phoneNo: phoneNo,
      city: "",
      message: "",
    };
    if (!name || !email || !phoneNo) return;
    try {
      setDisplayLoadingSpinner(true);
      const response = await fetch(
        `http://${process.env.REACT_APP_API_URL}/contactUs`,
        {
          method: "POST", // You can use 'PUT', 'PATCH' or other methods as needed
          headers: {
            "Content-Type": "application/json", // This tells the server to expect JSON
          },
          body: JSON.stringify(data), // Convert the JavaScript object to a JSON string
        }
      );
      const responseRecieved = await response.json();
      setDisplayLoadingSpinner(false);
      console.log(responseRecieved);
      if (responseRecieved.message === "submitted successfully") {
        setIsSubmitted(true);
        setName("");
        setPhoneNo(0);
        setEmail("");
      }
    } catch (err) {
      console.log(err);
    }

    // console.log(data);
  }
  function toggleDisplayForm() {
    if (displayContactUsForm === true) {
      setDisplayContactUsForm(false);
    } else {
      setDisplayContactUsForm(true);
    }
  }

  return (
    <div className=" bg-black pt-3 pb-3 rounded-lg mb-3  z-30 px-3 fixed  bottom-0 right-0 mr-3 w-[200px]">
      {displayContactUsForm === true && (
        <ContactForm
          toggleDisplayForm={toggleDisplayForm}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phoneNo={phoneNo}
          setPhoneNo={setPhoneNo}
          submitForm={submitForm}
          displayLoadingSpinner={displayLoadingSpinner}
          isSubmitted={isSubmitted}
        />
      )}
      {displayContactUsForm === false && (
        <button
          onClick={toggleDisplayForm}
          className=" w-full duration-500  applyClassicaProFont bg-white text-black py-1 rounded-md"
          // className="applyClassicaProFont500 bg-white w-full py-2"
        >
          Contact Us
        </button>
      )}
    </div>
  );
}
function ContactForm({
  toggleDisplayForm,
  setName,
  setEmail,
  setPhoneNo,
  name,
  email,
  phoneNo,
  submitForm,
  displayLoadingSpinner,
  isSubmitted,
}) {
  return (
    <>
      <div className="text-white relative duration-500 applyClassicaProFont500 top-0  flex justify-between w-full">
        {/* <div className="text-white relative duration-500 applyClassicaProFont500 top-0 flex justify-between w-full"> */}
        Contact Us
        <CloseIcon onClick={toggleDisplayForm} />
      </div>
      <div>
        <p className="applyClassicaProFont500 text-white text-[11px] 2xl:text-[13px] leading-[26px]">
          Name
        </p>
        <input
          onChange={(e) => setName(e.target.value)}
          className="bg-white opacity-100 py-2 placeholder:text-[#696969] text-[11px] focus:outline-none rounded-md px-2 bg w-full 2xl:text-[13px]"
          placeholder="Enter your full name"
          value={name}
        ></input>
      </div>
      <div>
        <p className="applyClassicaProFont500 text-white text-[11px] 2xl:text-[13px] leading-[26px]">
          Email
        </p>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white opacity-100 py-2 text-[11px] placeholder:text-[#696969] focus:outline-none rounded-md px-2 bg w-full 2xl:text-[13px]"
          placeholder="Enter your email"
          value={email}
        ></input>
      </div>
      <div>
        <p className="applyClassicaProFont500 text-white text-[11px] 2xl:text-[13px] leading-[26px]">
          Contact No
        </p>
        <input
          onChange={(e) => setPhoneNo(e.target.value)}
          className="bg-white opacity-100 py-2 text-[11px] placeholder:text-[#696969] focus:outline-none rounded-md px-2 bg w-full 2xl:text-[13px]"
          placeholder="Enter your contact no."
          value={phoneNo}
        ></input>
      </div>
      <button
        onClick={submitForm}
        className=" w-full applyClassicaProFont bg-white text-black mt-4 py-1 rounded-md"
      >
        {displayLoadingSpinner === true ? (
          <AutorenewIcon className="animate-spin" />
        ) : (
          ""
        )}
        {isSubmitted === true ? "Sent!" : "Send"}
        {/* Send */}
      </button>
    </>
  );
}
