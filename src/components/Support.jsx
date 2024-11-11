import React from "react";
import partner from "../Assets/Assistancephotos/partner.jpg";
import { MoveRight } from "lucide-react";

const Support = () => {
  return (
    <div
      className="w-full z-10 bg-gradient-to-b from-[#060733] to-[#1F2A48]"
      style={{ backgroundColor: "#060733" }}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-20">
        {/* Hero Section */}
        <div
          className="hero-banner relative bg-cover bg-center h-[60vh] flex flex-col justify-center items-center"
          style={{ backgroundImage: `url(${partner})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <h1 className="text-5xl text-white z-10 text-center font-bold transform transition-all duration-300 hover:scale-105">
            Empowering Lives, Enriching Futures
          </h1>
          <p
            className="text-xl sm:text-2xl md:text-3xl text-center text-white z-10 px-5 sm:px-10 mt-5"
            style={{ color: "#CFD0DA" }}
          >
            At Divine Vision, we empower individuals with disabilities,
            promoting independence and well-being. Join us in fostering a future
            where every participant thrives with confidence.
          </p>
        </div>

        {/* Supporting You Section */}
        <div className="flex flex-col mt-10 mb-10 justify-center items-center">
          <p className="text-4xl sm:text-5xl text-center text-white">
            Supporting You, Everywhere in Australia
          </p>
          <p className="mt-5 sm:text-xl md:text-2xl text-center text-gray-300 max-w-3xl">
            At Divine Vision Accessibility Services, we’re here to support you,
            no matter where you are in Australia. From bustling urban centers to
            remote communities, we provide personalized NDIS support designed to
            meet diverse needs.
          </p>
        </div>

        {/* Support Sections */}
        <div className="flex flex-col mx-5 lg:mx-20 my-10 space-y-10">
          {/* NDIS Users */}
          <div
            className="px-8 py-10 rounded-xl shadow-lg"
            style={{ backgroundColor: "#0C1246" }}
          >
            <h2 className="text-3xl lg:text-4xl text-center mb-6 text-white">
              Support for NDIS Users
            </h2>
            <ul className="space-y-6 text-lg sm:text-xl text-gray-300">
              <li>
                <span className="font-semibold text-white">
                  Personalized Support:
                </span>{" "}
                Our approach prioritizes your unique goals, creating flexible
                care plans that fit your individual needs.
              </li>
              <li>
                <span className="font-semibold text-white">Accessibility:</span>{" "}
                We offer accessible support wherever you are in Australia,
                ensuring consistent and quality care.
              </li>
              <li>
                <span className="font-semibold text-white">
                  Holistic Development:
                </span>{" "}
                Focusing on independence and quality of life, we work together
                to help you thrive.
              </li>
            </ul>
          </div>

          {/* Workers */}
          <div
            className="px-8 py-10 rounded-xl shadow-lg"
            style={{ backgroundColor: "#00A7A7" }}
          >
            <h2 className="text-3xl lg:text-4xl text-center mb-6 text-[#0C1246]">
              Support for Workers
            </h2>
            <ul className="space-y-6 text-lg sm:text-xl text-[#0C1246]">
              <li>
                <span className="font-semibold">Skill Development:</span> We
                invest in your growth, offering resources for continuous
                training and career advancement.
              </li>
              <li>
                <span className="font-semibold">Community Integration:</span>{" "}
                Connect with local participants to foster bonds that enhance the
                impact of your work.
              </li>
              <li>
                <span className="font-semibold">
                  Transparent Communication:
                </span>{" "}
                Receive updates, support, and feedback to keep you engaged in
                your role.
              </li>
            </ul>
          </div>

          {/* Family Members */}
          <div
            className="px-8 py-10 rounded-xl shadow-lg"
            style={{ backgroundColor: "#0C1246" }}
          >
            <h2 className="text-3xl lg:text-4xl text-center mb-6 text-white">
              Support for Family Members
            </h2>
            <ul className="space-y-6 text-lg sm:text-xl text-gray-300">
              <li>
                <span className="font-semibold text-white">
                  Partnership in Care:
                </span>{" "}
                We value your insights and collaborate to ensure your loved one
                receives the best support possible.
              </li>
              <li>
                <span className="font-semibold text-white">Peace of Mind:</span>{" "}
                With open communication, we keep you well-informed every step of
                the way.
              </li>
              <li>
                <span className="font-semibold text-white">
                  Resourceful Support:
                </span>{" "}
                We provide you with resources and guidance to navigate the NDIS
                journey smoothly.
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div
            id="contact-form"
            className="w-2/3 max-w-4xl mx-auto mt-10 p-8 rounded-xl bg-gray-200"
          >
            <h2 className="text-4xl font-semibold text-center text-[#0C1246] mb-8">
              Contact Us
            </h2>
            <form>
              <div className="mb-4">
                <label
                  className="text-2xl font-semibold"
                  htmlFor="name"
                  style={{ color: "#0C1246" }}
                >
                  Name <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 mt-2 border-2 rounded-lg"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  className="text-2xl font-semibold"
                  htmlFor="email"
                  style={{ color: "#0C1246" }}
                >
                  Email Address <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 mt-2 border-2 rounded-lg"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  className="text-2xl font-semibold"
                  htmlFor="phone"
                  style={{ color: "#0C1246" }}
                >
                  Phone Number <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-3 mt-2 border-2 rounded-lg"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  className="text-2xl font-semibold"
                  style={{ color: "#0C1246" }}
                >
                  Category
                </label>
                <div className="flex gap-6 mt-2">
                  <label className="flex text-lg items-center">
                    <input type="checkbox" className="mr-2" />
                    Worker
                  </label>
                  <label className="flex text-lg items-center">
                    <input type="checkbox" className="mr-2" />
                    General Inquiry
                  </label>
                  <label className="flex text-lg items-center">
                    <input type="checkbox" className="mr-2" />
                    Family/Client
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <label
                  className="text-2xl font-semibold"
                  htmlFor="message"
                  style={{ color: "#0C1246" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-3 mt-2 border-2 rounded-lg"
                  rows="4"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="w-2/4 py-3  rounded-full  text-2xl font-semibold bg-[#0C1246] text-white hover:bg-[#2A3D5A] transition duration-300"
                >
                  Contact Us <MoveRight size={30} className="inline ml-3" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Section */}
        <div className="flex justify-center items-center ">
          <p className="text-2xl text-center text-gray-200">
            We appreciate your interest in connecting with us. Together, we’ll
            navigate the path to the best support for you and your loved ones.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
