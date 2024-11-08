import React from "react";
import assist from "../Assets/Assistancephotos/assist.jpg";
import { CoreValues } from "../constants";
import aboutus from "../Assets/Assistancephotos/aboutus.jpg";
import { Contact, MoveRight } from "lucide-react";
import Australia from "@react-map/australia";
import Collapsible from "react-collapsible";

function Fourth() {
  return (
    <div className="w-full z-10" style={{ backgroundColor: "#060733" }}>
      <div
        className="max-w-7xl mx-auto "
        style={{ backgroundColor: "#060733" }}
      >
        <div
          className="flex max-w-7xl h-15 justify-center items-center rounded-lg"
          style={{ backgroundColor: "#060733" }}
        ></div>
        <div
          className="flex flex-col max-w-7xl z-10 mx-auto  "
          style={{ backgroundColor: "#060733" }}
        >
          <div className="flex mt-10 flex-col mb-10 justify-center items-center">
            <div
              className="flex max-w-7xl h-15 justify-center items-center rounded-lg"
              style={{ backgroundColor: "#060733" }}
            >
              <div className="flex my-10 align-center justify-center">
                <h1
                  className="text-5xl text-center mt-10"
                  style={{ color: "#CFD0DA" }}
                >
                  Our Mission Statement
                </h1>
              </div>
            </div>
            <p
              className=" mx-5 mt-10 text-3xl text-center "
              style={{ color: "#4475E5" }}
            >
              Our mission at Divine Vision is to empower NDIS participants,
              families, and support workers with compassionate, person-centered
              care that fosters dignity, independence, and a thriving community.
            </p>
          </div>

          <div className=" flex relative items-center justify-center shadow-xl  ">
            <img
              src={assist}
              alt="user 1"
              className="w-2/4 object-cover filter rounded-xl ml-4 "
              style={{ height: "40", objectFit: "cover" }}
            />
            <div className="flex flex-col items-center justify-center p-10">
              <div
                className=" ml-auto inset-0 flex items-center justify-center text-2xl  text-center p-4 z-10"
                style={{ color: "white" }}
              >
                At Divine Vision, we care with compassion, empowering every
                individual to live with dignity, independence, and joy. Discover
                our unwavering commitment to safety, trust, and personalized
                care across New South Wales on our Trust & Safety page.
              </div>
              <div className="px-1 items-center mt-10">
                <button
                  className="flex items-center  md:px-5 py-1 rounded-full"
                  style={{
                    backgroundColor: "#12e19e",
                    whiteSpace: "nowrap",
                    boxShadow: "xl",
                  }}
                >
                  <span
                    className="text-2xl px-2 py-2"
                    style={{ color: "#060733" }}
                  >
                    Learn More
                  </span>
                  <MoveRight size={50} className="mx-3" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <p className="text-5xl   text-center" style={{ color: "#E1EEFE" }}>
              Our Core Values
            </p>

            <div className="relative flex  flex-wrap justify-center mt-10  ">
              {CoreValues.map((feature, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-3 ">
                  <div
                    className="flex flex-col items-center text-center  rounded-2xl  mx-4 py-5 px-10 mt-5"
                    style={{ background: "#0C1246" }}
                  >
                    <img
                      className="h-20  rounded-3xl"
                      src={feature.img}
                      alt="user 1"
                    />
                    <div className="flex flex-col items-center">
                      <h5
                        className="mt-5 mb-2 text-2xl  font-semibold"
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
            <h1
              className="text-2xl  text-center  mb-8"
              style={{ color: "#4475E5" }}
            >
              At Divine Care, our core values guide all our actions, from
              recruitment to client support. We are committed to delivering
              exceptional care and ensuring your well-being in every
              interaction. Trust us to be your partner in achieving a better
              quality of life.
            </h1>

            <div className="px-1 items-center mt-10"></div>
          </div>

          <div
            className="flex flex-col max-w-7xl h-auto justify-center   items-evenly rounded-lg px-5 py-10"
            style={{ backgroundColor: "#060733" }}
          >
            <div className="flex items-center  ">
              <div className="flex-col ">
                <div>
                  <h1
                    className="text-4xl pb-10 ml-5 "
                    style={{ color: "white" }}
                  >
                    Looking For Info?
                  </h1>
                </div>
                <div className=" text-xl ml-10 ">
                  <div className="mb-5" style={{ color: "white" }}>
                    <Collapsible
                      trigger="+ Start here"
                      transitionTime={150}
                      accordionPosition="0"
                    >
                      <p>
                        This is the collapsible content. It can be any element
                        or React component you like.
                      </p>
                    </Collapsible>
                  </div>
                  <div className="mb-5" style={{ color: "white" }}>
                    <Collapsible
                      trigger="+ Start here"
                      transitionTime={150}
                      accordionPosition="1"
                    >
                      <p>
                        This is the collapsible content. It can be any element
                        or React component you like.
                      </p>
                    </Collapsible>
                  </div>
                  <div className="mb-5" style={{ color: "white" }}>
                    <Collapsible
                      trigger="+ Start here"
                      transitionTime={150}
                      accordionPosition="2"
                    >
                      <p>
                        This is the collapsible content. It can be any element
                        or React component you like.
                      </p>
                    </Collapsible>
                  </div>
                  <div className="mb-5" style={{ color: "white" }}>
                    <Collapsible
                      trigger="+ Start here"
                      transitionTime={150}
                      accordionPosition="3"
                    >
                      <p>
                        This is the collapsible content. It can be any element
                        or React component you like.
                      </p>
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
          <div
            className="relative flex  md:flex-row items-center justify-evenly "
            style={{ background: "#060733" }}
          >
            <div className="px-12">
              <button
                className="flex items-center  px-4 text-white rounded-full"
                style={{ backgroundColor: "#4475E5", color: "white" }}
              >
                <Contact size={50} className="mx-5" />
                <span className="text-2xl mx-5">Contact Us</span>
              </button>
            </div>

            <div className=" my-10 mx-5 text-justify  my-15">
              <div
                className="mt-10 text-5xl text-center"
                style={{ color: "#28228A" }}
              >
                <h1 style={{ color: "#4375E5" }}>
                  Why Join Divine Vision Team?
                </h1>
              </div>
              <div className="my-5 mx-10 px-10" style={{ color: "#4375E5" }}>
                <ul>
                  <li
                    className="relative before:content-[''] before:left-[-1rem] text-3xl mb-5"
                    style={{ color: "#4375E5" }}
                  >
                    <span className="text-4xl ">- Flexible Scheduling</span>:{" "}
                    <br />
                    We offer flexible work hours to fit your lifestyle.
                  </li>
                  <li className="relative before:content-[''] before:left-[-1rem] text-3xl mb-5">
                    <span className="text-4xl ">- Career Advancement</span>:
                    <br />
                    Benefit from ongoing training and opportunities for growth.
                  </li>
                  <li className="relative before:content-[''] before:left-[-1rem] text-3xl mb-5">
                    <span className="text-4xl ">- Competitive Pay</span>: <br />
                    Enjoy competitive pay rates for your valuable contributions.
                  </li>
                  <li className="relative before:content-[''] before:left-[-1rem] text-3xl mb-5">
                    <span className="text-4xl ">- Community Impact</span>:<br />
                    Experience the satisfaction of serving your local community.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className="relative flex flex-col md:flex-row   my-10 items-center rounded-xl shadow-xl"
            style={{ background: "#69A8A3" }}
          >
            <div className="px-5 mx-10">
              <div
                className="my-10 text-6xl  text center"
                style={{ color: "#56347B" }}
              >
                <h1 style={{ color: "#28228A" }}>
                  We are committed to improving lives for all.
                </h1>
              </div>
            </div>

            <div className="mx-0 mt-10 ml-auto  pr-0">
              <Australia
                type="select-single"
                mapColor="#28228A"
                strokeColor="white"
                hoverColor="#56347B"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fourth;
