import React, { useState } from "react";
import Footer from "./Footer";
import illustrationDekstop from "../assets/images/illustration-woman-online-desktop.svg";
import illustrationDekstopShadow from "../assets/images/bg-pattern-desktop.svg";
import box from "../assets/images/illustration-box-desktop.svg";

const Faq = () => {
  const [data, setData] = useState([
    {
      question: "How many team members can I invite?",
      ans: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    },
    {
      question: "What is the maximum file upload size?",
      ans: "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      question: "How do I reset my password?",
      ans: "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
    },
    {
      question: "Can I cancel my subscription?",
      ans: "Yes! Send us a message and we’ll process your request no questions asked.",
    },
    {
      question: "Do you provide additional support?",
      ans: "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
    },
  ]);

  const [visibleClick, setVisbleClick] = useState([]);

  function openBar(index) {
    setVisbleClick((prevClick) =>
      prevClick.includes(index)
        ? prevClick.filter((i) => i !== index)
        : [...prevClick, index]
    );
  }

  return (
    <div className="flex flex-col justify-center items-center  bg-[linear-gradient(hsl(273,_75%,_66%),_hsl(240,_73%,_65%))] p-20 miniMobile:p-10 miniMobile:h-auto h-screen">
      <div className=" bg-white rounded-3xl shadow-lg">
        <div className=" flex justify-between  mobile:flex-col mobile:justify-center mobile:items-center  ">
          <div
            className={` flex items-center justify-center overflow-hidden`}
            style={{
              backgroundImage: `url(${illustrationDekstopShadow})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          >
            <div>
              <img
                className="w-[100%]  h-auto max-w-[25rem] translate-y-[110px]"
                src={illustrationDekstop}
                alt="Illustration"
              />
              <img className=" box:-translate-y-24 mobile:-translate-y-16   max-w-[10rem] -translate-y-24 -translate-x-8  " src={box} alt="Illustration" 
              />
            </div>
          </div>
          <div className="w-[65%] mobile:w-[90%]  p-10 mobile:p-0 ">
            <div className="text-[hsl(238,_29%,_16%)] text-2xl font-bold mb-4 mobile:text-center mobile:mt-10">
              <h1>FAQ</h1>
            </div>
            <div className="mb-10">
              {data.map((item, index) => (
                <div key={index} className="p-2 ">
                  <div className="flex justify-between  items-center  text-[hsl(237,_12%,_33%)]">
                    {visibleClick.includes(index) ? (
                      <h3 className="text-[hsl(238,_29%,_16%)] font-bold">
                        {item.question}
                      </h3>
                    ) : (
                      <h3 className="w-[85%]">{item.question}</h3>
                    )}
                    <button
                      onClick={() => openBar(index)}
                      type="button"
                      className="text-[hsl(14,_88%,_65%)] w-[15%]"
                    >
                      {visibleClick.includes(index) ? "˄" : "˅"}
                    </button>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-1000 ${
                      visibleClick.includes(index) ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="text-[hsl(240,_6%,_50%)] mb-4">
                      {item.ans}
                    </div>
                  </div>
                  <hr className="mt-3" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
