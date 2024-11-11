import React from "react";
import { MoveRight, Contact } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import aboutus from "../Assets/Assistancephotos/aboutus.jpg"; // Import image

function Career() {
  const navigate = useNavigate();
  const handleScrollToForm = () => {
    navigate("/Support#contact-form");
  };
  return (
    <div className="w-full z-10 bg-gradient-to-b from-[#060733] to-[#1F2A48]">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section with Image */}
        <div
          className="hero-banner relative bg-cover bg-center h-[60vh] flex flex-col justify-center items-center"
          style={{ backgroundImage: `url(${aboutus})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <h1 className="text-5xl text-white z-10 text-center font-bold transform transition-all duration-300 hover:scale-105">
            Shape Lives, Shape Your Future!
          </h1>
          <p
            className="text-xl sm:text-2xl md:text-3xl text-center text-white z-10 px-5 sm:px-10 mt-5"
            style={{ color: "#CFD0DA" }}
          >
            At Divine Vision, we are committed to improving the lives of those
            in need. Join us in making a real impact and advancing your career
            in a fulfilling and supportive environment.
          </p>
        </div>

        <div className="flex flex-col mx-10  space-y-10 pt-10">
          {/* Section for NDIS Users */}
          <div
            className="px-8 py-5 rounded-xl shadow-3xl bg-[#0C1246]"
            style={{ backgroundColor: "#0C1246" }}
          >
            <h1 className="text-4xl text-center mb-8 text-white font-semibold">
              Why Work With Us?
            </h1>
            <ul className="space-y-6">
              <li className="text-2xl text-[#E1D5ED]">
                <span className="text-2xl">- Impactful Work:</span>
                <br />
                <span className="text-xl">
                  At Divine Vision, you don’t just have a job—you have an
                  opportunity to truly make a difference in the lives of others.
                </span>
              </li>
              <li className="text-2xl text-[#E1D5ED]">
                <span className="text-2xl">- Work That Matters:</span>
                <br />
                <span className="text-xl">
                  Your work will contribute to our core mission: providing
                  compassionate care, advocacy, and support to those who need it
                  most.
                </span>
              </li>
              <li className="text-2xl text-[#E1D5ED]">
                <span className="text-2xl">- Flexibility & Balance:</span>
                <br />
                <span className="text-xl">
                  We value your well-being and provide flexible hours to
                  accommodate your lifestyle.
                </span>
              </li>
              <li className="text-2xl text-[#E1D5ED]">
                <span className="text-2xl">- Supportive Work Environment:</span>
                <br />
                <span className="text-xl">
                  Join a workplace that feels like a family. We offer a
                  collaborative and supportive environment where every team
                  member’s contribution is valued.
                </span>
              </li>
            </ul>
          </div>

          {/* Section for Workers */}
          <div
            className="px-8 py-5 rounded-xl shadow-xl bg-[#69A8A3]"
            style={{ backgroundColor: "#00A7A7" }}
          >
            <Tabs value="direct-care">
              <TabsHeader>
                <Tab
                  className="text-3xl font-semibold  mx-10 rounded-2xl  transition-all duration-300 "
                  value="direct-care"
                  style={{ color: "#060733" }}
                >
                  Direct Care Roles
                </Tab>
                <Tab
                  className="text-3xl font-semibold  mx-10 rounded-2xl  transition-all duration-300 "
                  value="office-roles"
                  style={{ color: "#060733" }}
                >
                  Office-Based Roles
                </Tab>
              </TabsHeader>
              <hr
                className="mt-8 mx-12"
                style={{ borderWidth: "2px", borderColor: "#060733" }}
              />
              <TabsBody>
                <TabPanel value="direct-care">
                  <ul className="text-xl lg:text-2xl py-10">
                    <li
                      style={{ color: "#060733" }}
                      className="transition-all duration-300 hover:bg-gradient-to-r from-[#4475E5] to-[#69A8A3] p-4 rounded-xl "
                    >
                      <span className="text-2xl font-semibold">
                        Disability Support Worker
                      </span>
                      <br />
                      Location: Brisbane, Ipswich
                      <br />
                      Support individuals with disabilities in daily tasks,
                      helping them achieve personal goals and live
                      independently.
                    </li>
                    <li
                      className="mt-5"
                      style={{ color: "#060733" }}
                      className="transition-all duration-300 hover:bg-gradient-to-r from-[#4475E5] to-[#69A8A3] p-4 rounded-xl "
                    >
                      <span className="text-2xl font-semibold">
                        Aged Care Assistant
                      </span>
                      <br />
                      Location: Sunshine Coast, Gold Coast
                      <br />
                      Assist elderly individuals with daily tasks, personal
                      care, and enhancing their independence.
                    </li>
                    <li
                      className="mt-5"
                      style={{ color: "#060733" }}
                      className="transition-all duration-300 hover:bg-gradient-to-r from-[#4475E5] to-[#69A8A3] p-4 rounded-xl "
                    >
                      <span className="text-2xl font-semibold">
                        Nursing & Medical Support
                      </span>
                      <br />
                      Location: Brisbane, Sunshine Coast
                      <br />
                      Provide healthcare support, including medication
                      management and health monitoring.
                    </li>
                  </ul>
                </TabPanel>

                <TabPanel value="office-roles">
                  <ul className="text-2xl lg:text-2xl py-10">
                    <li
                      style={{ color: "#060733" }}
                      className="transition-all duration-300 hover:bg-gradient-to-r from-[#4475E5] to-[#69A8A3] p-4 rounded-xl "
                    >
                      <span className="text-2xl font-semibold">
                        Customer Care Representative
                      </span>
                      <br />
                      Location: Brisbane
                      <br />
                      Handle customer inquiries, manage service requests, and
                      ensure satisfaction.
                    </li>
                    <li
                      className="mt-5"
                      style={{ color: "#060733" }}
                      className="transition-all duration-300 hover:bg-gradient-to-r from-[#4475E5] to-[#69A8A3] p-4 rounded-xl "
                    >
                      <span className="text-2xl font-semibold">
                        Finance & Accounting Officer
                      </span>
                      <br />
                      Location: Brisbane
                      <br />
                      Maintain financial records, process transactions, and
                      assist with budget management.
                    </li>
                  </ul>
                </TabPanel>
              </TabsBody>
            </Tabs>
          </div>

          {/* Section for Family Members */}
          <div className="relative flex md:flex-row items-center rounded-2xl justify-evenly bg-gradient-to-r from-[#060733] to-[#4475E5]">
            <div className="px-12 flex justify-center items-center">
              <button
                className="bg-[#4B8FE2] flex items-center text-white py-1 px-6 rounded-full text-xl hover:bg-[#00A7A7] transition-all duration-300 hover:scale-105"
                onClick={() => (window.location.href = "/Aboutus")}
              >
                <Contact size={40} className="mx-2 " />
                <span className="text-2xl mx-2  whitespace-nowrap">
                  About Us
                </span>
              </button>
            </div>

            <div className="my-10 mx-5 text-justify ">
              <div
                className="mt-10 text-4xl text-center"
                style={{ color: "#28228A" }}
              >
                <h1 style={{ color: "white" }}>Why Join Divine Vision Team?</h1>
              </div>
              <div className="my-5 mx-10 px-10" style={{ color: "#4375E5" }}>
                <ul>
                  <li className="text-3xl mb-5" style={{ color: "white" }}>
                    - Empower Your Career: <br />
                    <span className="text-2xl">
                      Take your career to new heights with an organization that
                      values professional development.
                    </span>
                  </li>
                  <li className="text-3xl mb-5" style={{ color: "white" }}>
                    - Make a Difference: <br />
                    <span className="text-2xl">
                      Work in a role where your actions create lasting change in
                      the lives of others.
                    </span>
                  </li>
                  <li className="text-3xl mb-5" style={{ color: "white" }}>
                    - Collaborative Work Culture: <br />
                    <span className="text-2xl">
                      Be a part of a team that thrives on collaboration and
                      supports each other.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Ready to Apply Section */}
          <div
            className="py-20 bg-gradient-to-b from-[#060733] to-[#1F2A48] rounded-4xl shadow-4xl"
            style={{ backgroundColor: "#060733" }}
          >
            <div className="max-w-7xl mx-auto text-center text-white">
              <h1 className="text-5xl font-Semibold mb-8">Ready to Apply?</h1>
              <p className="text-2xl mb-8">
                Start your journey today by filling out an application. We look
                forward to having you join our team.
              </p>
              <button
                className="bg-[#4B8FE2]  py-2 px-6 rounded-full text-2xl hover:bg-[#00A7A7] transition-all duration-300 hover:scale-105"
                style={{ color: "white" }}
                onClick={handleScrollToForm}
              >
                Apply Now <MoveRight size={30} className="inline ml-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Career;
