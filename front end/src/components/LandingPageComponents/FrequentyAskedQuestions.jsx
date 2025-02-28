import React, { useState } from "react";
import expandIcon from "./expand.svg";
import collapse from "./collapse.png";
import faqImage from "./FAQimage.png";
export default function FrequentyAskedQuestions(props) {
  const questionsData = [
    {
      faqId: 1,
      question: "What types of properties do you offer?",
      answer:
        "We specialize in luxury homes, high-yield investments, and exclusive properties across a range of budgets. Whether you're buying your dream home or making a smart investment, we have something for everyone.",
    },
    {
      faqId: 2,
      question: "How can ALKWAY help with property financing?",
      answer: "",
    },
    {
      faqId: 3,
      question: " Do you offer flexible accommodation options?",
      answer: "",
    },
    {
      faqId: 4,
      question: "Can you help with property management and maintenance?",
      answer: "",
    },
    {
      faqId: 5,
      question: "How do I get started with ALKWAY Real Estate?",
      answer: "",
    },
  ];
  return (
    <>
      <div className="flex px-14 items-center my-16   ">
        <div className="w-[50%] ml-6 mr-12">
          <div className="pl-3 flex flex-col gap-1">
            <p className="applyClassicaProFont300 uppercase text-[9px] tracking-widest 2xl:text-[12px] text-[#52434A]">
              Fequently asked questions
            </p>
            <p className="applyArethusaPro500 tracking-tight  text-[18px] 2xl:text-[24px] leading-[34px] 2xl:leading-[37.4px] text-black">
              Your Dream Property, Our Priority!
            </p>
          </div>
          <div className="flex flex-col gap-3 mt-3">
            {questionsData.map((singleFAQ) => (
              <SingleQuestionAndAnswer
                key={singleFAQ.faqId}
                faqData={singleFAQ}
              />
            ))}
            {/* <SingleQuestionAndAnswer /> */}
            {/* <SingleQuestionAndAnswer />
            <SingleQuestionAndAnswer />
            <SingleQuestionAndAnswer />
            <SingleQuestionAndAnswer /> */}
          </div>
        </div>
        <div>
          <img
            className="w-[600px] rounded-2xl 2xl:rounded-[20px]"
            src={faqImage}
            alt="faq's "
          ></img>
        </div>
      </div>
    </>
  );
}
function SingleQuestionAndAnswer({ faqData }) {
  // const [hideAnswer, setHideAnswer] = useState(true);
  const [hideAnswer, setHideAnswer] = useState(checkIfFirstQuestion);
  function checkIfFirstQuestion() {
    if (faqData.faqId !== 1) {
      return true;
    } else {
      return false;
    }
  }
  function toggleAnswer() {
    if (hideAnswer === true) {
      setHideAnswer(false);
    } else {
      setHideAnswer(true);
    }
  }
  return (
    <div className="border-[2px] rounded-lg px-4 py-3">
      <div className="flex justify-between items-center ">
        <p className="applyArethusaPro700">{faqData.question}</p>
        <button>
          {hideAnswer === false ? (
            <img
              className="w-[18px] h-[18px] 2xl:w-[20px] 2xl:h-[20px]"
              onClick={toggleAnswer}
              src={collapse}
              alt="expand icon for faq"
            ></img>
          ) : (
            <img
              className="w-[18px] h-[18px] 2xl:w-[20px] 2xl:h-[20px]"
              onClick={toggleAnswer}
              src={expandIcon}
              alt="expand icon for faq"
            ></img>
          )}
          {/* <img
            className="w-[18px] h-[18px] 2xl:w-[20px] 2xl:h-[20px]"
            onClick={toggleAnswer}
            src={addIcon}
            alt="expand icon for faq"
          ></img> */}
        </button>
      </div>
      <div>
        {hideAnswer === false && (
          <p className="applyClassicaProFont mt-2 mb-1 text-[11px] 2xl:text-[16px] leading-[23px] 2xl:leading-[31px]">
            {faqData.answer}
          </p>
        )}
        {/* {hideAnswer === false ||
          (faqData.faqId === 1 && (
            <p className="applyClassicaProFont mt-2 mb-1 text-[11px] 2xl:text-[16px] leading-[23px] 2xl:leading-[31px]">
              {faqData.answer}
            </p>
          ))} */}
      </div>
    </div>
  );
}
// function SingleQuestionAndAnswer({ faqData }) {
//   // console.log(faqData.answer);
//   const [hideAnswer, setHideAnswer] = useState(true);
//   function toggleAnswer() {
//     if (hideAnswer === true) {
//       setHideAnswer(false);
//     } else {
//       setHideAnswer(true);
//     }
//   }
//   return (
//     <div className="border-[2px] rounded-lg px-4 py-3">
//       <div className="flex justify-between items-center ">
//         <p className="applyArethusaPro700">{faqData.question}</p>
//         <button>
//           <img
//             className="w-[18px] h-[18px] 2xl:w-[20px] 2xl:h-[20px]"
//             onClick={toggleAnswer}
//             src={addIcon}
//             alt="expand icon for faq"
//           ></img>
//         </button>
//       </div>
//       <div>
//         {hideAnswer === false ||
//           (faqData.faqId === 1 && (
//             <p className="applyClassicaProFont mt-2 mb-1 text-[11px] 2xl:text-[16px] leading-[23px] 2xl:leading-[31px]">
//               {faqData.answer}
//             </p>
//           ))}
//       </div>
//     </div>
//   );
// }
