import React, { useState } from "react";
import { X, Mail } from "lucide-react";
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
      // Handle success - e.g., show a success message to the user
    } else {
      console.error("Error submitting form:", response.statusText);
      // Handle error - e.g., show an error message to the user
      onClose();
    }
  };

  return (
    <>
      <div
        className="sticky bottom-2 z-50  mr-5 border-neutral-700/80"
        style={{ ng: "#1BA0AF", position: "fixed", right: "5px" }}
      >
        <button
          className="flex items-center px-5 py-4  text-white rounded-full hover:bg-violet-600 shadow-2xl border-4 "
          onClick={toggleModal}
          style={{
            backgroundColor: "#33CAE5",
            color: "#28228A",
            borderColor: "white",
          }}
        >
          <Mail size={40} className="mr-2" /> {/* Use the Mail icon */}
          <span className="text-3xl ml-5">Make A Referral</span>
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-red items-center border  bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="mt-10 flex flex-col gap-5 text-white">
            <div
              className="overflow-auto h-41 bg-indigo-600 rounded-xl px-20 py-10  flex-col gap-1 items-center "
              style={{ backgroundColor: "#7A05E1" }}
            >
              <form>
                <button className="mr-2" onClick={toggleModal}>
                  <X size={30} />
                </button>

                <p className="text-2l items-center max-w-md active:outline-none">
                  Provide your name or the name of the client or loved one
                </p>
                <input
                  className="w-full h-24 px-4 py-3 text-black border-gray-300 rounded-md overflow-auto resize-none"
                  type="textarea"
                  placeholder="Type text area"
                  onChange={(e) => setpopupname(e.target.value)}
                  required
                />

                <p className="text-2l items-center">Email*</p>
                <input
                  className="w-full px-4 py-3 text-black border-gray-300 rounded-md"
                  type="email"
                  placeholder="Enter your email address"
                  onChange={(e) => setpopupemail(e.target.value)}
                  required
                />

                <p className="text-2l items-center">Phone</p>
                <input
                  className="w-full px-4 py-3 text-black border-gray-300 rounded-md"
                  type="tel"
                  placeholder="Enter your phone number"
                  onChange={(e) => setpopphone(e.target.value)}
                />

                <p className="text-2l items-center max-w-md"></p>
                <input
                  className="w-full overflow-auto h-24 px-4 py-3 text-black border-gray-300 rounded-md"
                  type="textarea"
                  placeholder="Type field text"
                  onChange={(e) => setpopupservicetype(e.target.value)}
                  required
                />

                <p className="text-2l items-center max-w-md">
                  In which country is support to be delivered? *
                </p>
                <input
                  className="w-full px-4 py-3 text-black border-gray-300 rounded-md"
                  type="textarea"
                  placeholder="Type field text"
                  onChange={(e) => setpopupcounty(e.target.value)}
                  required
                />

                <p className="text-2l items-center max-w-md">
                  Please provide additional information
                </p>
                <input
                  className="w-full overflow-auto h-24 px-4 py-3 text-black border-gray-300 rounded-md"
                  type="textarea"
                  placeholder="Type field text"
                  onChange={(e) => setpopupadditionalinfo(e.target.value)}
                  required
                />

                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="mt-5 h-10 w-full  items-center justify-center gap-2 rounded-md bg-black"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ConnectButton;
