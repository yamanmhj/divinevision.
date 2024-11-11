import React from "react";
import trust from "../Assets/Assistancephotos/trust.jpg";

function TrustandSafety() {
  return (
    <div
      className="w-full z-10 bg-gradient-to-b from-[#060733] to-[#1F2A48]"
      style={{ backgroundColor: "#060733" }}
    >
      <div className="max-w-7xl mx-auto ">
        <div
          className="flex max-w-7xl h-15 justify-center items-center rounded-lg"
          style={{ backgroundColor: "#060733" }}
        >
          <div className="flex my-10 align-center justify-center">
            <h1
              className="text-5xl text-center mt-10"
              style={{ color: "#E1EEFE" }}
            >
              Our Commitment to Safety & Care
            </h1>
          </div>
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-evenly">
          <div className="px-5">
            <div className="mx-5 mt-14">
              <h1 className="text-3xl text-center" style={{ color: "white" }}>
                At Divine Vision, we're deeply committed to supporting our NSW
                communities with unwavering safety, trust, and compassion.
              </h1>
              <h1
                className="text-2xl text-justify mt-10"
                style={{ color: "white" }}
              >
                We are dedicated to providing safe, reliable, and compassionate
                support for NDIS participants across New South Wales. With a
                commitment to building genuine relationships and fostering
                community connections, we offer personalized care and a deep
                understanding of our participants' unique needs. Trust and
                safety are at the heart of all we do.
              </h1>
            </div>
          </div>

          <div className="ml-auto my-10 mx-5 text-justify">
            <img
              className="h-22 rounded-2xl max-w-full"
              src={trust}
              alt="trust"
            />
          </div>
        </div>

        {/* Building Trust Through Community Section */}
        <div className="flex flex-col md:flex-row justify-evenly mt-12">
          <div
            className="flex px-10 rounded-xl shadow-2xl mx-10"
            style={{ backgroundColor: "#0C1246" }}
          >
            <div className="mx-3 mt-14">
              <h1
                className="text-3xl text-center font-bold"
                style={{ color: "#E4E7EB" }}
              >
                Building Trust Through Community
              </h1>
              <ul className="mt-10">
                <li className="relative before:content-[''] before:left-[-1rem] text-2xl mb-10 text-white">
                  <span className="text-2xl font-bold">
                    - Personal Connections:
                  </span>
                  <br />
                  We prioritize connecting participants with local workers who
                  understand their community's unique needs, while regular
                  community events and meet-and-greets strengthen relationships
                  among participants, families, and our team.
                </li>
                <li className="relative before:content-[''] before:left-[-1rem] text-2xl mb-10 text-white">
                  <span className="text-2xl font-bold">- Transparency:</span>
                  <br />
                  We ensure clear communication about our services, pricing, and
                  policies, maintain an open-door policy for participants and
                  families to address any concerns, and provide regular updates
                  on service improvements based on community feedback.
                </li>
                <li className="relative before:content-[''] before:left-[-1rem] text-2xl mb-10 text-white">
                  <span className="text-2xl font-bold">
                    - Local Partnerships:
                  </span>
                  <br />
                  We collaborate with NSW disability advocacy groups to uphold
                  the highest standards and engage with local healthcare
                  providers for a holistic approach to participant well-being.
                </li>
              </ul>
            </div>
          </div>

          {/* NSW Safety Commitment Section */}
          <div
            className="ml-auto mx-10 text-evenly rounded-xl shadow-xl my-15 px-12"
            style={{ backgroundColor: "#00A7A7" }}
          >
            <div className="mx-5 mt-14">
              <h1
                className="text-3xl text-center "
                style={{ color: "#0E1139" }}
              >
                Our NSW Safety Commitment
              </h1>
              <ul className="mt-10">
                <li
                  className="relative before:content-[''] before:left-[-1rem] text-2xl mb-10"
                  style={{ color: "#0E1139" }}
                >
                  <span className="text-2xl font-bold">
                    - Rigorous Worker Screening:
                  </span>
                  All support workers undergo comprehensive NDIS Worker
                  Screening checks, including additional NSW Working with
                  Children Checks for those assisting younger participants. We
                  conduct thorough reference checks and in-person interviews to
                  ensure that our workers align with our values.
                </li>

                <li
                  className="relative before:content-[''] before:left-[-1rem] text-2xl mb-10"
                  style={{ color: "#0E1139" }}
                >
                  <span className="text-2xl font-bold">
                    - Local Knowledge, Local Care:
                  </span>
                  Our support workers are community members familiar with NSW
                  resources and support systems, receiving regular training on
                  NSW-specific health and safety protocols to provide
                  up-to-date, relevant care.
                </li>

                <li
                  className="relative before:content-[''] before:left-[-1rem] text-2xl mb-10"
                  style={{ color: "#0E1139" }}
                >
                  <span className="text-2xl font-bold">
                    - Continuous Monitoring:
                  </span>
                  We maintain ongoing supervision and regular check-ins with
                  both workers and participants, offering anonymous feedback
                  channels for participants to report any concerns. Any safety
                  issues are addressed swiftly by our dedicated response team
                  based in NSW.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Your Safety, Our Priority Section */}
        <div
          className="relative flex flex-col md:flex-row items-center justify-evenly px-5 my-10 mx-10 rounded-3xl shadow-xl"
          style={{ background: "#E5E5E5" }}
        >
          <div className="flex px-10 mx-10 mt-10">
            <div className="mx-5 mt-">
              <h1
                className="text-4xl text-center font-bold"
                style={{ color: "#28228A" }}
              >
                Your Safety, Our Priority
              </h1>
              <ul className="mt-10">
                <li
                  className="relative before:content-[''] before:left-[-1rem] text-2xl mb-10"
                  style={{ color: "#28228A" }}
                >
                  <span className="text-2xl font-bold">
                    - Creating a Safe Environment:
                  </span>{" "}
                  <br />
                  We believe that true safety goes beyond background checks.
                  It's about creating an environment where every participant
                  feels valued, respected, and empowered. Our NSW-focused
                  approach means we understand the unique challenges and
                  opportunities in your local area, allowing us to provide
                  support that's truly tailored to your needs.
                </li>

                <li
                  className="relative before:content-[''] before:left-[-1rem] text-2xl mb-10"
                  style={{ color: "#28228A" }}
                >
                  <span className="text-2xl font-bold">
                    - Community Testimonials
                  </span>{" "}
                  <br />
                  "Divine Vision isn't just a service provider; they're our
                  neighbors. Knowing my support worker lives just down the
                  street gives me such peace of mind." - Sarah T., Sydney "The
                  effort they put into understanding our local community really
                  shows. My son's support worker even helped him join the local
                  sports club!" - Michael R., Newcastle
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* NDIS Excellence Section */}
        <div
          className="text-justify pt-5 rounded-xl "
          style={{ backgroundColor: "#0C1246" }}
        >
          <div className="mx-4 py-10">
            <h1 className="text-4xl text-center " style={{ color: "#F0EBF6" }}>
              NDIS Excellence in NSW
            </h1>
            <ul className="mt-10">
              <li
                className="relative before:content-[''] before:left-[-1rem] text-2xl mb-3"
                style={{ color: "#F0EBF6" }}
              >
                <span className="text-2xl ">
                  - Full compliance with all NDIS Practice Standards and Quality
                  Indicators.
                </span>
              </li>
              <li
                className="relative before:content-[''] before:left-[-1rem] text-3xl mb-3"
                style={{ color: "#F0EBF6" }}
              >
                <span className="text-2xl ">
                  - Rigorous staff training program tailored to NDIS guidelines
                  and NSW-specific requirements.
                </span>
              </li>
              <li
                className="relative before:content-[''] before:left-[-1rem] text-3xl mb-3"
                style={{ color: "#F0EBF6" }}
              >
                <span className="text-2xl ">
                  - Commitment to empowering participants by maintaining
                  consistent, respectful, and person-centered care.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustandSafety;
