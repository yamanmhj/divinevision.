import React from "react";
import { features } from "../constants";
import facebook from "../Assets/facebook.png";
import instagram from "../Assets/instagram.png";
import linkedin from "../Assets/linkedin.png";
import youtube from "../Assets/youtube.png";
import phone from "../Assets/phone.png";
import mail from "../Assets/mail.png";

function Bottom() {
  return (
    <div className="relative  bg-blue" style={{ backgroundColor: "#060733" }}>
      <div className="flex justify-center  pt-10  flex-wrap">
        <img
          className="h-15 mx-10"
          hover:scale-105
          src={facebook}
          alt="facebook"
        />
        <img
          className="h-15 mx-10"
          hover:scale-105
          src={instagram}
          alt="instagram"
        />
        <img
          className="h-15 mx-10"
          hover:scale-105
          src={linkedin}
          alt="linkedin"
        />
        <img
          className="h-15 mx-10"
          hover:scale-105
          src={youtube}
          alt="youtube"
        />
      </div>
      <hr
        className="mt-8 mx-12 bg-black-100"
        style={{ borderWidth: "1px", color: "#E1D5ED" }}
      />

      <div className="flex flex-col lg:flex-row mt-10 mx-10">
        <div className="flex flex-col ">
          <ul>
            <li className="py-1">
              <a href="/" className="text-white hover:text-indigo-600">
                <span
                  className="text-xl  lg:text-xl sm:text-xl"
                  style={{ color: "#E1D5ED" }}
                >
                  {" - "} Home
                </span>
              </a>
            </li>
            <li className="py-1">
              <a href="/Aboutus" className="text-white hover:text-indigo-600">
                <span
                  className="text-xl  lg:text-xl sm:text-xl"
                  style={{ color: "#E1D5ED" }}
                >
                  {" - "} About us
                </span>
              </a>
            </li>
            <li className="py-1">
              <a href="/Services" className="text-white hover:text-indigo-600">
                <span
                  className="text-xl  lg:text-xl sm:text-xl"
                  style={{ color: "#E1D5ED" }}
                >
                  {" - "} Our Services
                </span>
              </a>
            </li>

            <li className="py-1">
              <a href="/Support" className="text-white hover:text-indigo-600">
                <span
                  className="text-xl  lg:text-xl sm:text-xl"
                  style={{ color: "#E1D5ED" }}
                >
                  {" - "} Support in Australia
                </span>
              </a>
            </li>

            <li className="py-1">
              <a
                href="/TrustandSafety"
                className="text-white hover:text-indigo-600"
              >
                <span
                  className="text-xl  lg:text-xl sm:text-xl"
                  style={{ color: "#E1D5ED" }}
                >
                  {" - "} Trust and Safety
                </span>
              </a>
            </li>
            <li className="py-1">
              <a href="/" className="text-white hover:text-indigo-600">
                <span
                  className="text-xl  lg:text-xl sm:text-xl"
                  style={{ color: "#E1D5ED" }}
                >
                  {" - "} Terms Of Services
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="ml-auto mt-10 mr-20 flex flex-col">
          <div className="flex items-center mb-10">
            <img className="h-12" src={phone} alt="phone" />
            <div className="flex-col ml-5">
              <p className="text-xl font-bold" style={{ color: "#E1D5ED" }}>
                Phone
              </p>
              <p className="text-xl mt-3" style={{ color: "#E1D5ED" }}>
                +61 0424 591035
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <img className="h-12" src={mail} alt="email" />
            <div className="flex-col ml-5">
              <p className="text-xl font-bold" style={{ color: "#E1D5ED" }}>
                Email
              </p>
              <p className="text-xl mt-3" style={{ color: "#E1D5ED" }}>
                Divinevisioncare@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-5 mx-10">
        <p className="text-xl mt-10 text-center" style={{ color: "#E1D5ED" }}>
          Divine Vision Disability Services is a registered charity based in
          Australia, providing support for individuals with disabilities in
          Sydney, Brisbane, Melbourne, and Perth. We focus on empowering
          individuals and enhancing their quality of life through personalized
          care. Our registered office is located at Sydney.
        </p>

        <div className="flex justify-center my-5">
          <span className="mt-1 text-xl" style={{ color: "#E1D5ED" }}>
            c 2024 Divine Vision
          </span>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
