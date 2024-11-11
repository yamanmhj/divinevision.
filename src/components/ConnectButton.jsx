import React, { useState } from "react";
import { X, Mail, MoveRight } from "lucide-react";
import axios from "axios";

function ConnectButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [popupname, setpopupname] = useState();
  const [popupemail, setpopupemail] = useState();
  const [popupphone, setpopphone] = useState();
  const [popupservicetype, setpopupservicetype] = useState();
  const [popupcounty, setpopupcounty] = useState();
  const [popupadditionalinfo, setpopupadditionalinfo] = useState();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      selectedname: popupname,
      selectedemail: popupemail,
      selectedphone: popupphone,
      selectedservicetype: popupservicetype,
      selectedcounty: popupcounty,
      selectedadditionalinfo: popupadditionalinfo,
    };
    console.log(formData);

    const response = await axios.post(
      "http://127.0.0.1:5000/submit/form",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      console.log("Form submitted successfully:", response.data);
    } else {
      console.error("Error submitting form:", response.statusText);
      onClose();
    }
  };

  return (
    <>
      <div
        className="sticky bottom-2 z-50 mr-5 border-neutral-700/80"
        style={{ position: "fixed", right: "5px" }}
      >
        <button
          className="flex items-center px-5 py-2 text-white rounded-full hover:scale-105 shadow-2xl border-4"
          onClick={toggleModal}
          style={{
            backgroundColor: "#4A90E2",
            color: "white",
            borderColor: "#3B78D4",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <Mail size={40} className="mr-2" />
          <span className="text-2xl ml-2">Make A Referral</span>
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="mt-10 flex flex-col gap-5 text-white overflow-auto max-h-[80vh] p-8 rounded-xl bg-[#white] shadow-lg animate__animated animate__fadeIn animate__delay-1s">
            <div
              className="overflow-auto w-full h-full bg-white rounded-xl px-10 py-10 flex-col gap-1 items-center"
              style={{ background: "#E6F2FF" }}
            >
              <div className="ml-auto justify-end flex">
                <button
                  className=" ml-auto text-white"
                  onClick={toggleModal}
                  aria-label="Close form"
                >
                  <X size={30} style={{ color: "#0171BB", font: "bold" }} />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="w-full">
                <h2 className="text-4xl font-semibold text-center text-[#0071BC] mb-8">
                  Make A Referral
                </h2>

                <div className="mb-4">
                  <label
                    className="text-2xl font-semibold"
                    htmlFor="name"
                    style={{ color: "#0071BC" }}
                  >
                    Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 mt-2 border-2 rounded-lg transition duration-300 ease-in-out"
                    style={{ color: "#0071BC" }}
                    placeholder="Enter your name"
                    onChange={(e) => setpopupname(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="text-2xl font-semibold"
                    htmlFor="email"
                    style={{ color: "#0071BC" }}
                  >
                    Email Address <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 mt-2 border-2 rounded-lg transition duration-300 ease-in-out"
                    placeholder="Enter your email"
                    style={{ color: "#0071BC" }}
                    onChange={(e) => setpopupemail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="text-2xl font-semibold"
                    htmlFor="phone"
                    style={{ color: "#0071BC" }}
                  >
                    Phone Number <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    style={{ color: "#0071BC" }}
                    className="w-full p-3 mt-2 border-2 rounded-lg transition duration-300 ease-in-out"
                    placeholder="Enter your phone number"
                    onChange={(e) => setpopphone(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="text-2xl font-semibold"
                    style={{ color: "#0071BC" }}
                  >
                    Service Type
                  </label>
                  <input
                    className="w-full p-3 mt-2 border-2 rounded-lg transition duration-300 ease-in-out"
                    type="text"
                    placeholder="Enter service type"
                    style={{ color: "#0071BC" }}
                    onChange={(e) => setpopupservicetype(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="text-2xl font-semibold"
                    style={{ color: "#0071BC" }}
                  >
                    Australian State
                  </label>
                  <input
                    className="w-full p-3 mt-2 border-2 rounded-lg transition duration-300 ease-in-out"
                    type="text"
                    placeholder="Enter Australian State"
                    style={{ color: "#0071BC" }}
                    onChange={(e) => setpopupcounty(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="text-2xl font-semibold"
                    style={{ color: "#0071BC" }}
                  >
                    Additional Information
                  </label>
                  <textarea
                    className="w-full p-3 mt-2 border-2 rounded-lg transition duration-300 ease-in-out"
                    rows="4"
                    placeholder="Provide any additional information"
                    style={{ color: "#0071BC" }}
                    onChange={(e) => setpopupadditionalinfo(e.target.value)}
                    required
                  />
                </div>
                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="w-2/4 items-center justify-center py-3 mt-5 rounded-full text-2xl font-semibold bg-[#4B8FE2] text-white hover:bg-[#3B78D4] transition duration-250 shadow-lg transform hover:scale-105"
                  >
                    Submit <MoveRight size={40} className="inline ml-3" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ConnectButton;
