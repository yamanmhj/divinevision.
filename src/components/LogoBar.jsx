import React, { useState } from "react";
import logo from "../Assets/logo.jpeg";
import { Contact, Search, X, CircleX } from "lucide-react";

function LogoBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [popupsearchquery, setpopupsearchquery] = useState(); // Add state for modal visibility

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    api_post_query = popupsearchquery;

    console.log(formData);

    const response = await axios.post(
      "http://127.0.0.1:5000/searchrequest",
      api_post_query,
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
        className="sticky flex justify-center items-center "
        style={{ backgroundColor: "#060733" }}
      >
        <div className="relative my-2 mx-5 h-15 py-1">
          <img
            className="h-20 md:h-20 ml-4 md:ml-2 rounded-full"
            src={logo}
            alt="Logo"
          />
        </div>
        <div className="relative ml-auto items-center justify-center ">
          <button className="items-center" onClick={toggleModal}>
            <Search size={40} style={{ color: "#E0EEFD" }} />
          </button>
        </div>
        <div className="relative ml-5 mr-4 md:mr-10">
          <button
            className="flex items-center px-4 md:px-5 py-2 md:py-2 bg-indigo-600 text-white rounded-full"
            style={{ backgroundColor: "#4475E5", color: "white" }}
          >
            <Contact size={30} className="mr-2 md:mr-3" />
            <span className="text-lg md:text-xl ml-2 md:ml-1 ">Contact Us</span>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-red items-center border  bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="mt-10 flex flex-col gap-5">
            <div
              className="overflow-auto   px-10   flex-col gap-1 items-center  border-4 rounded-3xl"
              style={{ backgroundColor: "#33CAE5" }}
            >
              <div className="flex  justify-end py-2">
                <button onClick={toggleModal}>
                  <X size={50} className="  text-white  " />
                </button>
              </div>
              <div className="flex flex-col pt-2  px-2 mx-2">
                <h1
                  className="text-4xl text-center font-bold"
                  style={{ color: "#28228A" }}
                >
                  Search Divine Vision
                </h1>
                <h1
                  className="text-3xl text-center mt-5"
                  style={{ color: "#28228A" }}
                >
                  Search our wide range of database{" "}
                </h1>

                <form onSubmit={handleSubmit} className="w-full">
                  <div
                    className="flex items-center border mt-10  py-2 px-2 rounded-xl border-2  w-full p-2  border-4 rounded-full mb-10"
                    style={{ borderColor: "#28228A" }}
                  >
                    <Search size={50} className="text-black " />
                    <input
                      type="text"
                      placeholder="Try searching for NDIS....."
                      className="flex-grow outline-none bg-transparent mx-2  fontsize text-black text-2xl"
                      value={popupsearchquery}
                      style={{ color: "black" }}
                      onChange={(e) => setPopupSearchQuery(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleSubmit(e); // Call the submit function when Enter is pressed
                        }
                      }}
                    />
                    <button onClick={toggleModal}>
                      <CircleX size={50} className="text-black " />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LogoBar;
