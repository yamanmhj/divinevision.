import React from "react";
import "react-vertical-timeline-component/style.min.css";
import facebook from "../Assets/facebook.png";
import user1 from "../Assets/profile-pictures/user1.jpg";
import {
  Snowflake,
  Cross,
  HeartHandshake,
  Handshake,
  Accessibility,
  Car,
  HandHelping,
  HeartPulse,
  PillBottle,
  AccessibilityIcon,
} from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const squares = [
  { id: 1, color: "#B5D9F7" }, // Red square
];

function Services() {
  return (
    <div className="w-full z-10" style={{ backgroundColor: "#060733" }}>
      <div
        className="flex flex-col max-w-7xl mx-auto  items-center  z-10  "
        style={{ backgroundColor: "#060733" }}
      >
        <div
          className="flex max-w-7xl h-15 justify-center items-center rounded-lg"
          style={{ backgroundColor: "#060733" }}
        >
          <div className="flex my-10 align-center justify-center">
            <h1
              className="text-5xl text-center mt-10"
              style={{ color: "#CFD0DA" }}
            >
              Discover our range of Services
            </h1>
          </div>
        </div>

        <div className="experience  justify-center max-w-3xl z-10">
          <hr
            className=" mx-9 "
            style={{
              borderWidth: "1px",
              borderColor: "#69AAA3",
              borderStyle: "double",
            }}
          />
          <VerticalTimeline lineColor="#69AAA3" layout="2-columns">
            <VerticalTimelineElement
              contentArrowStyle={{ color: "#0C1246" }}
              iconStyle={{ background: "#060733" }}
              icon={<Cross style={{ color: "#CFD0DA" }} />}
              contentStyle={{
                background: "#69AAA3",
              }}
            >
              <div className="flex flex-col z-10 items-center justify-center">
                <div className="  mt-2">
                  <h3
                    className=" text-2xl font-bold text-center "
                    style={{ color: "#060733" }}
                  >
                    Personal Care
                  </h3>
                </div>

                <div className="mt-5 mx-2">
                  <ul>
                    <li
                      className="relative before:content-['-'] before:left-[-1rem] text-xl mb-4"
                      style={{ color: "#060733" }}
                    >
                      Hygiene assistance
                    </li>
                    <li
                      className="relative before:content-['-'] before:left-[-1rem] text-xl mb-4"
                      style={{ color: "#060733" }}
                    >
                      Mobility Support
                    </li>
                    <li
                      className="relative before:content-['-'] before:left-[-1rem] text-xl mb-4"
                      style={{ color: "#060733" }}
                    >
                      Medication Management
                    </li>
                    <li
                      className="relative before:content-['-'] before:left-[-1rem] text-xl mb-4"
                      style={{ color: "#060733" }}
                    >
                      Meal prep to dietary
                    </li>
                    <li
                      className="relative before:content-['-'] before:left-[-1rem] text-xl mb-4"
                      style={{ color: "#060733" }}
                    >
                      Customized Exercise plan
                    </li>
                  </ul>
                </div>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentArrowStyle={{ color: "rgb(33, 150, 243)" }}
              iconStyle={{ background: "#060733" }}
              icon={<HeartHandshake style={{ color: "#CFD0DA" }} />}
              contentStyle={{ background: "#69AAA3", color: "#fff" }}
            >
              <div className="flex flex-col items-center justify-center">
                <div className="  mt-10">
                  <h3
                    className=" text-2xl font-bold text-center "
                    style={{ color: "#060733" }}
                  >
                    Domestic Assistance
                  </h3>
                </div>

                <div className="mt-5 mx-2">
                  <ul>
                    <div>
                      <li
                        className="relative before:content-['->'] before:left-[-1rem] text-xl mb-4"
                        style={{ color: "#060733" }}
                      >
                        HouseKeeping
                      </li>
                    </div>
                    <li
                      className="relative before:content-['->'] before:left-[-1rem] text-xl mb-4"
                      style={{ color: "#060733" }}
                    >
                      Shopping and Errands
                    </li>
                    <li
                      className="relative before:content-['->'] before:left-[-1rem] text-xl mb-4"
                      style={{ color: "#060733" }}
                    >
                      Home Maintenance
                    </li>
                  </ul>
                </div>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentArrowStyle={{ color: "rgb(33, 150, 243)" }}
              iconStyle={{ background: "#060733" }}
              icon={<Handshake style={{ color: "#CFD0DA" }} />}
              contentStyle={{
                background: "#69AAA3",
                color: "#fff",
                rounded: "3xl",
              }}
            >
              <div className="flex flex-col items-center justify-center">
                <div className="  mt-10">
                  <h3
                    className=" text-2xl font-bold text-center "
                    style={{ color: "#060733" }}
                  >
                    Social and Community Duites
                  </h3>
                </div>

                <div className="mt-5 mx-2 " style={{ color: "#CFD0DA" }}>
                  <ul>
                    <div>
                      <li
                        className="relative before:content-['->'] before:left-[-1rem] text-xl mb-4"
                        style={{ color: "#060733" }}
                      >
                        Support in social gatherings
                      </li>
                    </div>
                    <li
                      className="relative before:content-['->'] before:left-[-1rem] text-xl mb-4"
                      style={{ color: "#060733" }}
                    >
                      Assistance with hobbies and recreational activities
                    </li>
                    <li
                      className="relative before:content-['->'] before:left-[-1rem] text-xl mb-4"
                      style={{ color: "#060733" }}
                    >
                      Transportation to community centers, parks
                    </li>
                  </ul>
                </div>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentArrowStyle={{ color: "rgb(33, 150, 243)" }}
              iconStyle={{ background: "#060733" }}
              icon={<Accessibility style={{ color: "#CFD0DA" }} />}
              contentStyle={{ background: "#69AAA3", color: "#fff" }}
            >
              <div className="flex flex-col items-center justify-center">
                <div className="  mt-10">
                  <h3
                    className=" text-2xl font-bold text-center "
                    style={{ color: "#060733" }}
                  >
                    Therapy Asssistance
                  </h3>
                </div>

                <div className="mt-5 mx-2">
                  <ul>
                    <li
                      className="relative before:content-['->'] before:left-[-1rem] text-xl mb-4"
                      style={{ color: "#060733" }}
                    >
                      Aids in following up with therapy programs
                    </li>
                    <li
                      className="relative before:content-['->'] before:left-[-1rem] text-xl mb-4"
                      style={{ color: "#060733" }}
                    >
                      Assistance with medical routines and therapy appointments
                    </li>
                  </ul>
                </div>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentArrowStyle={{ color: "rgb(33, 150, 243)" }}
              iconStyle={{ background: "#060733" }}
              icon={<Car style={{ color: "#CFD0DA" }} />}
              contentStyle={{ background: "#69AAA3", color: "#fff" }}
            >
              <div className="flex flex-col items-center justify-center">
                <div className="  mt-10">
                  <h3
                    className=" text-2xl font-bold text-center "
                    style={{ color: "#060733" }}
                  >
                    Travel and Transport Support
                  </h3>
                </div>

                <div className="mt-5 mx-2">
                  <ul>
                    <li
                      className="relative before:content-['->'] before:left-[-1rem] text-xl mb-4"
                      style={{ color: "#060733" }}
                    >
                      Transportation for medical appointments, work
                    </li>

                    <li
                      className="relative before:content-['->'] before:left-[-1rem] text-xl mb-4"
                      style={{ color: "#060733" }}
                    >
                      Assistance with planning and coordinating travel needs
                    </li>
                  </ul>
                </div>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentArrowStyle={{ color: "rgb(33, 150, 243)" }}
              iconStyle={{ background: "#060733" }}
              icon={<HandHelping style={{ color: "#CFD0DA" }} />}
              contentStyle={{ background: "#69AAA3", color: "#fff" }}
            >
              <div className="flex flex-col items-center justify-center">
                <div className="  mt-10">
                  <h3
                    className=" text-2xl font-bold text-center "
                    style={{ color: "#060733" }}
                  >
                    Mentorship and Life Skills
                  </h3>
                </div>

                <div className="mt-5 mx-2">
                  <ul>
                    <li
                      className="relative before:content-['->'] before:left-[-1rem] text-xl mb-4"
                      style={{ color: "#060733" }}
                    >
                      Skill-building in areas like budgeting and personal
                      planning
                    </li>
                    <li
                      className="relative before:content-['->'] before:left-[-1rem] text-xl mb-4"
                      style={{ color: "#060733" }}
                    >
                      Emotional support and mentorship to achieve personal goals
                    </li>
                  </ul>
                </div>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentArrowStyle={{ color: "rgb(33, 150, 243)" }}
              iconStyle={{ background: "#060733" }}
              icon={<HeartPulse style={{ color: "#CFD0DA" }} />}
              contentStyle={{ background: "#69AAA3", color: "#fff" }}
            >
              <div className="flex flex-col items-center justify-center">
                <div className="  mt-10">
                  <h3
                    className=" text-2xl font-bold text-center "
                    style={{ color: "#060733" }}
                  >
                    Health and Wellness
                  </h3>
                </div>

                <div className="mt-5 mx-2">
                  <ul>
                    <li
                      className="relative before:content-['->'] before:left-[-1rem] text-xl mb-4"
                      style={{ color: "#060733" }}
                    >
                      Tailored Assistance for individual on the autism spectrum
                    </li>
                    <li
                      className="relative before:content-['->'] before:left-[-1rem] text-xl mb-4"
                      style={{ color: "#060733" }}
                    >
                      Support with Communication and social skills
                    </li>
                    <li
                      className="relative before:content-['->'] before:left-[-1rem] text-xl mb-4"
                      style={{ color: "#060733" }}
                    >
                      Help Managing routines and sensory needs
                    </li>
                    <li
                      className="relative before:content-['->'] before:left-[-1rem] text-xl mb-4"
                      style={{ color: "#060733" }}
                    >
                      Specialized support for Complex Needs
                    </li>
                  </ul>
                </div>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentArrowStyle={{ color: "rgb(33, 150, 243)" }}
              iconStyle={{ background: "#060733" }}
              icon={<PillBottle style={{ color: "#CFD0DA" }} />}
              contentStyle={{ background: "#69AAA3", color: "#fff" }}
            >
              <div className="flex flex-col items-center justify-center">
                <div className="  mt-10">
                  <h3
                    className=" text-2xl font-bold text-center "
                    style={{ color: "#060733" }}
                  >
                    Complex and High-Intensity Supports
                  </h3>
                </div>

                <div className="mt-5 mx-2">
                  <ul>
                    <li
                      className="relative before:content-['->'] before:left-[-1rem] text-xl mb-4"
                      style={{ color: "#060733" }}
                    >
                      Advanced personal care, including tube feeding and
                      ventilation support
                    </li>
                    <li
                      className="relative before:content-['->'] before:left-[-1rem] text-xl mb-4"
                      style={{ color: "#060733" }}
                    >
                      Behavioural support from specially trained workers
                    </li>
                    <li
                      className="relative before:content-['->'] before:left-[-1rem] text-xl mb-4"
                      style={{ color: "#060733" }}
                    >
                      Palliiative care ensuring comfort and dignity
                    </li>
                  </ul>
                </div>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              contentArrowStyle={{ color: "rgb(33, 150, 243)" }}
              iconStyle={{ background: "#060733" }}
              icon={<Accessibility style={{ color: "#CFD0DA" }} />}
              contentStyle={{ background: "#69AAA3", color: "#fff" }}
            >
              <div className="flex flex-col items-center justify-center">
                <div className="  mt-10">
                  <h3
                    className=" text-2xl font-bold text-center "
                    style={{ color: "#060733" }}
                  >
                    Disability Specific Care
                  </h3>
                </div>

                <div className="mt-5 mx-2">
                  <ul>
                    <li
                      className="relative before:content-['->'] before:left-[-1rem] text-xl mb-4"
                      style={{ color: "#060733" }}
                    >
                      Specialized support for physical disabilities, including
                      manual handling
                    </li>
                    <li
                      className="relative before:content-['->'] before:left-[-1rem] text-xl mb-4"
                      style={{ color: "#060733" }}
                    >
                      Behavioural support from specially trained workers
                    </li>
                    <li
                      className="relative before:content-['->'] before:left-[-1rem] text-xl mb-4"
                      style={{ color: "#060733" }}
                    >
                      24/7 and emergency support available
                    </li>
                  </ul>
                </div>
              </div>
            </VerticalTimelineElement>
          </VerticalTimeline>
          <hr
            className=" mx-9 "
            style={{ borderWidth: "1px", borderColor: "#69AAA3" }}
          />
        </div>
        <div
          className="flex max-w-7xl h-15 justify-center items-evenly rounded-lg"
          style={{ backgroundColor: "#060733" }}
        >
          <div className="flex my-10 align-center justify-center">
            {" "}
            <p className="text-2xl  text-center" style={{ color: "#CFD0DA" }}>
              Our commitment to the NSW communities means we understand local
              resources and can connect you with nearby specialists and
              community programs taht complement our serrvices.We strive to
              enhance your NDIS experience by providing tryly localized,
              community-centered support that goes beyond basic care to enrigh
              your daily life
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
