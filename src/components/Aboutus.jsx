import React, { useState } from "react";
import assist from "../Assets/Assistancephotos/assist.jpg";
import { CoreValues } from "../constants";
import aboutus from "../Assets/Assistancephotos/aboutus.jpg";
import { Contact, MoveRight } from "lucide-react";
import Australia from "@react-map/australia";
import Collapsible from "react-collapsible";

function Fourth() {
  // State to track which collapsible is open
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close
  };

  return (
    <div className="w-full z-10 " style={{ backgroundColor: "#060733" }}>
      <div
        className="max-w-7xl mx-auto "
        style={{ backgroundColor: "#060733" }}
      >
        <div
          className="flex flex-col max-w-7xl z-10 mx-auto"
          style={{ backgroundColor: "#060733" }}
        >
          <div className="flex mt-10 flex-col mb-10 justify-center items-center">
            <div className="flex my-10 align-center justify-center">
              <h1
                className="text-5xl text-center mt-10"
                style={{ color: "#CFD0DA" }}
              >
                Our Mission Statement
              </h1>
            </div>
            <p
              className="mx-5 mt-10 text-3xl text-center"
              style={{ color: "#4475E5" }}
            >
              Our mission at Divine Vision is to empower NDIS participants to
              achieve their goals and live fulfilling lives through personalized
              support programs and a strong community network.
            </p>
          </div>

          <div className="flex relative items-center justify-center shadow-xl">
            <img
              src={assist}
              alt="user 1"
              className="w-2/4 object-cover filter rounded-xl ml-4"
              style={{ height: "40", objectFit: "cover" }}
            />
            <div className="flex flex-col items-center justify-center p-10">
              <div
                className=" flex-col ml-auto inset-0 flex items-center justify-center text-2xl text-center p-4 z-10"
                style={{ color: "white" }}
              >
                At Divine Vision, we care with compassion, empowering every
                individual to live with dignity, independence, and joy. Discover
                our unwavering commitment to safety, trust, and personalized
                care across New South Wales on our Trust & Safety page.
              </div>
              <div className="px-1 items-center mt-10">
                <button
                  className="bg-[#00A7A7] flex items-center text-white py-1 px-6 rounded-full text-xl  transition-all duration-280 hover:scale-105"
                  onClick={() => (window.location.href = "/TrustandSafety")}
                >
                  <span
                    className="text-2xl px-2 py-2"
                    style={{ color: "#060733" }}
                  >
                    Learn More
                  </span>
                  <MoveRight
                    size={50}
                    className="mx-3"
                    style={{ color: "#060733" }}
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <p className="text-5xl text-center" style={{ color: "#E1EEFE" }}>
              Our Core Values
            </p>

            <div className="relative flex flex-wrap justify-center mt-10 ">
              {CoreValues.map((feature, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 lg:w-1/3 p-3 transition duration-280 hover:scale-105"
                >
                  <div
                    className="flex flex-col items-center   text-center rounded-2xl mx-4 py-5 px-10 mt-5"
                    style={{ background: "#0C1246" }}
                  >
                    <img
                      className="h-20 rounded-3xl"
                      src={feature.img}
                      alt="user 1"
                    />
                    <div className="flex flex-col items-center">
                      <h5
                        className="mt-5 mb-2 text-2xl font-semibold"
                        style={{ color: "#E1EEFE" }}
                      >
                        {feature.text}
                      </h5>
                      <p
                        className="text-center text-xl p-2 mb-4"
                        style={{ color: "#E1EEFE" }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="px-8 py-10 rounded-xl shadow-lg w-full mt-10"
            style={{ backgroundColor: "#060733" }}
          >
            <h1 className="text-5xl text-center" style={{ color: "#E1EEFE" }}>
              Guided by Values, Driven by Care
            </h1>
          </div>

          <div
            className="flex flex-col max-w-7xl h-auto justify-center items-evenly rounded-lg px-5 py-10"
            style={{ backgroundColor: "#060733" }}
          >
            <div className="flex items-center">
              <div className="flex-col">
                <div>
                  <h1
                    className="text-4xl pb-10 ml-5"
                    style={{ color: "white" }}
                  >
                    Looking For Info?
                  </h1>
                </div>
                <div className="text-xl ml-10">
                  <div
                    className="mb-5 transition-all duration-280 hover:scale-105"
                    style={{ color: "white" }}
                  >
                    <Collapsible
                      trigger="+ Invest in your growth"
                      transitionTime={280}
                      open={openIndex === 0}
                      onOpening={() => handleToggle(0)}
                    >
                      <div
                        className=" rounded-2xl py-2 px-5 mt-2"
                        style={{ background: "#00A7A7" }}
                      >
                        <p style={{ color: "#060733" }}>
                          We provide resources and opportunities for continuous
                          training and career advancement.
                        </p>
                      </div>
                    </Collapsible>
                  </div>
                  <div
                    className="mb-5 transition-all duration-280 hover:scale-105"
                    style={{ color: "white" }}
                  >
                    <Collapsible
                      trigger="+ Become Part of the Community"
                      transitionTime={280}
                      open={openIndex === 1}
                      onOpening={() => handleToggle(1)}
                    >
                      <div
                        className=" rounded-2xl py-2 px-5 mt-2"
                        style={{ background: "#00A7A7" }}
                      >
                        <p style={{ color: "#060733" }}>
                          Connect with local participants, build meaningful
                          relationships, and see the positive impact of your
                          work.
                        </p>
                      </div>
                    </Collapsible>
                  </div>
                  <div
                    className="mb-5 transition-all duration-280 hover:scale-105"
                    style={{ color: "white" }}
                  >
                    <Collapsible
                      trigger="+ Open and Supportive Communication"
                      transitionTime={280}
                      open={openIndex === 2}
                      onOpening={() => handleToggle(2)}
                    >
                      <div
                        className=" rounded-2xl py-2 px-5 mt-2"
                        style={{ background: "#00A7A7" }}
                      >
                        <p style={{ color: "#060733" }}>
                          We value your input and provide regular updates,
                          ongoing support, and constructive feedback to help you
                          excel in your role.
                        </p>
                      </div>
                    </Collapsible>
                  </div>
                  <div
                    className="mb-5 transition-all duration-280 hover:scale-105"
                    style={{ color: "white" }}
                  >
                    <Collapsible
                      trigger="+ Collaborative Care"
                      transitionTime={280}
                      open={openIndex === 3}
                      onOpening={() => handleToggle(3)}
                    >
                      <div
                        className=" rounded-2xl py-2 px-5 mt-2"
                        style={{ background: "#00A7A7" }}
                      >
                        <p style={{ color: "#060733" }}>
                          We value your insights and work closely with you to
                          ensure your loved one receives the best possible
                          support.
                        </p>
                      </div>
                    </Collapsible>
                  </div>
                  <div
                    className="mb-5 transition-all duration-280 hover:scale-105"
                    style={{ color: "white" }}
                  >
                    <Collapsible
                      trigger="+ Peace of Mind"
                      transitionTime={280}
                      open={openIndex === 4}
                      onOpening={() => handleToggle(4)}
                    >
                      <div
                        className=" rounded-2xl py-2 px-5 mt-2"
                        style={{ background: "#00A7A7" }}
                      >
                        <p style={{ color: "#060733" }}>
                          We provide open communication and regular updates,
                          keeping you well informed and involved in every step
                          of the way.
                        </p>
                      </div>
                    </Collapsible>
                  </div>
                  <div
                    className="mb-5 transition-all duration-280 hover:scale-105"
                    style={{ color: "white" }}
                  >
                    <Collapsible
                      trigger="+ Guidance and Resources"
                      transitionTime={280}
                      open={openIndex === 5}
                      onOpening={() => handleToggle(5)}
                    >
                      <div
                        className=" rounded-2xl py-2 px-5 mt-2"
                        style={{ background: "#00A7A7" }}
                      >
                        <p style={{ color: "#060733" }}>
                          We offer resources and guidance to help you navigate
                          the NDIS journey with confidence and ease.
                        </p>
                      </div>
                    </Collapsible>
                  </div>
                </div>
              </div>
              <img
                src={assist}
                alt="user 1"
                className="w-2/4 object-cover filter rounded-xl ml-4 "
                style={{ height: "40", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fourth;
