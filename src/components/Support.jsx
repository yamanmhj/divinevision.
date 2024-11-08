import React from "react";
import partner from "../Assets/Assistancephotos/partner.jpg";
import { MoveRight } from "lucide-react";

const Support = () => {
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

        <div className="relative items-center justify-center pt-0 ">
          <img
            src={partner}
            alt="user 1"
            className="w-full filter h-2/3 blur-sm"
          />
          <div
            className="absolute inset-0 flex items-center justify-center text-8xl h-2/3 text-center p-4 z-10"
            style={{ color: "white" }}
          >
            Your NDIS Partner Across Australia
          </div>
        </div>

        <div className="flex flex-col mt-10 mb-10 justify-center items-center ">
          <div className="mx-auto">
            <p
              className="text-5xl sm:text-5xl md:text-6xl text-center "
              style={{ color: "#E1EEFE" }}
            >
              Supporting You, Everywhere in Australia
            </p>
          </div>
          <p
            className="mt-10 mx-5 sm:mx-10 md:mx-20 text-lg sm:text-xl md:text-3xl text-center "
            style={{ color: "#4475E5" }}
          >
            At Divine Vision Accessibility Services, we’re here to support you,
            no matter where you are in Australia. From bustling urban centers to
            remote communities, we provide personalized NDIS support designed to
            meet diverse needs.
          </p>
        </div>

        <div className="flex flex-col mx-10 my-10 space-y-10  pt-10">
          {/* Section for NDIS Users */}
          <div
            className="px-8 py-10 rounded-xl shadow-3xl"
            style={{ backgroundColor: "#0C1246" }}
          >
            <h1
              className="text-4xl lg:text-4xl text-center mb-8"
              style={{ color: "#E4E7EB" }}
            >
              Support for NDIS Users
            </h1>
            <ul className="space-y-6">
              <li
                className="text-2xl lg:text-3xl "
                style={{ color: "#E1D5ED" }}
              >
                <span className="text-3xl lg:text-3xl font-semibold">
                  - Personalized Support:{" "}
                </span>
                Our approach prioritizes your unique goals, creating flexible
                care plans that fit your individual needs.
              </li>
              <li className="text-2xl lg:text-3xl" style={{ color: "#E1D5ED" }}>
                <span className="text-3xl lg:text-3xl font-semibold">
                  - Accessibility:{" "}
                </span>
                We offer accessible support wherever you are in Australia,
                ensuring consistent and quality care.
              </li>
              <li
                className="text-2xl lg:text-3xl "
                style={{ color: "#E1D5ED" }}
              >
                <span className="text-3xl lg:text-3xl font-semibold">
                  - Holistic Development:{" "}
                </span>
                Focusing on independence and quality of life, we work together
                to help you thrive.
              </li>
            </ul>
          </div>

          {/* Section for Workers */}
          <div
            className="px-8 py-10 rounded-xl shadow-xl"
            style={{ backgroundColor: "#69A8A3" }}
          >
            <h1
              className="text-3xl lg:text-4xl text-center font-semibold mb-8"
              style={{ color: "#0C1246" }}
            >
              Support for Workers
            </h1>
            <ul className="space-y-6">
              <li className="text-2xl lg:text-3xl" style={{ color: "#0C1246" }}>
                <span className="text-3xl lg:text-3xl font-semibold">
                  - Skill Development:{" "}
                </span>
                We invest in your growth, offering resources for continuous
                training and career advancement.
              </li>
              <li
                className="ttext-2xl lg:text-3xl"
                style={{ color: "#0C1246" }}
              >
                <span className="text-3xl lg:text-3xl font-semibold">
                  - Community Integration:{" "}
                </span>
                Connect with local participants to foster bonds that enhance the
                impact of your work.
              </li>
              <li className="text-2xl lg:text-3xl" style={{ color: "#0C1246" }}>
                <span className="text-3xl lg:text-3xl font-semibold">
                  - Transparent Communication:{" "}
                </span>
                Receive updates, support, and feedback to keep you engaged in
                your role.
              </li>
            </ul>
          </div>

          {/* Section for Family Members */}
          <div
            className="px-8 py-10 rounded-xl shadow-xl"
            style={{ backgroundColor: "#0C1246" }}
          >
            <h1
              className="text-3xl lg:text-4xl text-center font-semibold mb-8"
              style={{ color: "#E1D5ED" }}
            >
              Support for Family Members
            </h1>
            <ul className="space-y-6">
              <li
                className="text-2xl lg:text-3xl "
                style={{ color: "#E1D5ED" }}
              >
                <span className="text-3xl lg:text-3xl font-semibold">
                  - Partnership in Care:{" "}
                </span>
                We value your insights and collaborate to ensure your loved one
                receives the best support possible.
              </li>
              <li className="text-2xl lg:text-3xl" style={{ color: "#E1D5ED" }}>
                <span className="text-3xl lg:text-3xl font-semibold">
                  - Peace of Mind:{" "}
                </span>
                With open communication, we keep you well-informed every step of
                the way.
              </li>
              <li
                className="text-2xl lg:text-3xl "
                style={{ color: "#E1D5ED" }}
              >
                <span className="text-3xl lg:text-3xl font-semibold">
                  - Resourceful Support:{" "}
                </span>
                We provide you with resources and guidance to navigate the NDIS
                journey smoothly.
              </li>
            </ul>
          </div>

          <div
            className=" rounded-xl w-2/3 items-center "
            style={{ backgroundColor: "#e5e5e5" }}
          >
            <div
              className="px-8 py-10 rounded-xl  "
              style={{ backgroundColor: "#e5e5e5" }}
            >
              <h2
                className="text-5xl font-semibold text-center mb-6"
                style={{ color: "#0C1246" }}
              >
                Contact Us
              </h2>

              <form>
                <div className="mb-4">
                  <label
                    className=" text-3xl font-semibold mb-1"
                    htmlFor="name"
                    style={{ color: "#0C1246" }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border border-4 rounded-full "
                    placeholder="Enter your name"
                    style={{ borderColor: "#0C1246" }}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-3xl font-semibold mb-1"
                    htmlFor="email"
                    style={{ color: "#0C1246" }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border border-4 rounded-full "
                    placeholder="Enter your name"
                    style={{ borderColor: "#0C1246" }}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-3xl font-semibold mb-1"
                    htmlFor="phone"
                    style={{ color: "#0C1246" }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-2 border border-4 rounded-full "
                    placeholder="Enter your name"
                    style={{ borderColor: "#0C1246" }}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-3xl font-semibold mb-1"
                    style={{ borderColor: "#0C1246" }}
                  >
                    Category
                  </label>
                  <div className="flex gap-4">
                    <label
                      className="flex text-3xl items-center"
                      style={{ borderColor: "#0C1246" }}
                    >
                      <input
                        type="checkbox"
                        className="mr-2"
                        style={{ borderColor: "#0C1246" }}
                      />
                      Worker
                    </label>
                    <label className="flex text-3xl items-center">
                      <input
                        type="checkbox"
                        className="mr-2"
                        style={{ borderColor: "#0C1246" }}
                      />
                      General Inquiry
                    </label>
                    <label className="flex text-3xl items-center">
                      <input type="checkbox" className="mr-2" />
                      Family/Client
                    </label>
                  </div>
                </div>

                <div className="mb-4" style={{ borderColor: "#0C1246" }}>
                  <label
                    className="block text-3xl font-semibold mb-1"
                    htmlFor="message"
                    style={{ borderColor: "#0C1246" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full p-2 border-4 rounded-xl"
                    rows="4"
                    placeholder="Type your message here..."
                    required
                    style={{ borderColor: "#0C1246" }}
                  ></textarea>
                </div>

                <div className="px-1 items-center ">
                  <div className="">
                    <button
                      className="flex items-center py-3 mt-10 px-5 rounded-full"
                      style={{
                        backgroundColor: "#√ß",
                        color: "white",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <span className="text-3xl">Contact Us</span>
                      <MoveRight size={50} className="mx-3" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="flex max-w-7xl justify-center items-evenly rounded-lg">
          <div className="flex my-10 align-center justify-center px-10">
            {" "}
            <p className="text-3xl  text-center" style={{ color: "#E1D6ED" }}>
              We appreciate your interest in connecting with us. Together, we’ll
              navigate the path to the best support for you and your loved ones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
