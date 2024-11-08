import React from "react";
import { features } from "../constants";
import user1 from "../Assets/profile-pictures/user1.jpg";
import aboutus from "../Assets/Assistancephotos/aboutus.jpg";
import trust from "../Assets/Assistancephotos/trust.jpg";
import { CircleCheck, MoveRight } from "lucide-react";

function Home() {
  return (
    <div className="w-full z-10" style={{ backgroundColor: "#060733" }}>
      <div
        className="max-w-7xl mx-auto "
        style={{ backgroundColor: "#060733" }}
      >
        <div
          className="flex max-w-7xl h-15 justify-center items-center rounded-lg"
          style={{ backgroundColor: "#060733" }}
        >
          <div className="flex my-10 align-center justify-center">
            <h1
              className="text-5xl text-center mt-10"
              style={{ color: "#E1EEFE" }}
            >
              Care that Empowers, Support that Lasts.
            </h1>
          </div>
        </div>

        <div className="relative flex flex:col  justify-evenly ">
          <div className="px-2 ">
            <div className="ml-5 mt-14 ">
              <h1
                className="text-3xl text-start ml-10"
                style={{ color: "#4475E5" }}
              >
                At Divine Vision, trust and care come first. As a registered
                NDIS provider, our experienced and compassionate professionals
                are here to support participants and their families.
              </h1>

              <ul className="text-xl mt-10 ml-10">
                <li className="flex items-center mt-2">
                  <CircleCheck size={30} style={{ color: "#43867B" }} />
                  <span className="ml-2" style={{ color: "#E1EEFE" }}>
                    Our Services: NDIS Support That Fits You
                  </span>
                </li>
                <li className="flex items-center mt-2">
                  <CircleCheck size={30} style={{ color: "#43867B" }} />
                  <span className="ml-2" style={{ color: "#E1EEFE" }}>
                    Getting Started: Easy Steps to Your Support
                  </span>
                </li>
                <li className="flex items-center mt-2">
                  <CircleCheck size={30} style={{ color: "#43867B" }} />
                  <span className="ml-2" style={{ color: "#E1EEFE" }}>
                    Community Impact: Making a Difference Together
                  </span>
                </li>
                <li className="flex items-center mt-2">
                  <CircleCheck size={30} style={{ color: "#43867B" }} />
                  <span className="ml-2" style={{ color: "#E1EEFE" }}>
                    Testimonials: Coming Soon – Stories from Our Clients
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className=" mx-5 text-justify  w-full">
            <img
              className="h-30 rounded-3xl " // Added max-w-full for responsiveness
              src={trust}
              alt="user 1"
            />
          </div>
        </div>

        <div
          className="px-8 py-10 rounded-xl shadow-lg w-full mt-10"
          style={{ backgroundColor: "#69A9A3" }}
        >
          <h1
            className="text-3xl lg:text-4xl text-center font-semibold mb-8"
            style={{ color: "#0C1246" }}
          >
            What NDIS Services Do You Need?
          </h1>
          <h1
            className="text-2xl lg:text-3xl text-center mb-10 "
            style={{ color: "#0C1246" }}
          >
            Looking for{" "}
            <span
              className="text-4xl font-semibold"
              style={{ color: "#0C1246" }}
            >
              Personalized NDIS Support{" "}
            </span>
            tailored to your needs? At Divine Vision, we offer compassionate,
            local services across Australia designed to empower individuals and
            enhance their lives.
          </h1>
          <div className="px-1 items-center mt-10">
            <button
              className="flex items-center  md:px-5 py-1 rounded-full"
              style={{
                backgroundColor: "#4375E5",
                whiteSpace: "nowrap",
                boxShadow: "xl",
              }}
            >
              <span className="text-2xl px-2 py-2" style={{ color: "white" }}>
                Our Services
              </span>
              <MoveRight
                size={50}
                className="mx-3 "
                style={{ color: "white" }}
              />
            </button>
          </div>
        </div>
        <div className="text-center text-xl mt-20" style={{ color: "#E0EEFD" }}>
          Made for Australia
        </div>

        <div className="flex flex-wrap justify-center mt-10  shadow-6xl  ">
          {features.map((feature, index) => (
            <div key={index} className="w-full pb-10 sm:w-1/1 lg:w-1/3 p-4  ">
              <div
                className="flex flex-col items-center text-center rounded-xl   mx-8 pt-10"
                style={{ background: "#0C1246" }}
              >
                <div className="flex mx-auto h-45 w-40 justify-center items-center ">
                  <img className="h-22 rounded-full" src={user1} alt="user 1" />
                </div>
                <h5
                  className="mt-4 mb-2 text-xl sm:text-2xl "
                  style={{ color: "#C9CAD6" }}
                >
                  {feature.text}
                </h5>
                <p
                  className="text-lg sm:text-l p-2 mb-10"
                  style={{ color: "#C9CAD6" }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
