import React from "react";
import "react-vertical-timeline-component/style.min.css";
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

const Services = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#060733] to-[#1F2A48] bg-[#060733] text-[#CFD0DA] py-20">
      <div className="flex flex-col items-center max-w-7xl mx-auto z-10">
        <div className="text-center my-10">
          <h1 className="text-5xl ">Discover Our Range of Services</h1>
          <hr className="w-16 mx-auto border-t-2 mt-6 border-[#00A7A7]" />
        </div>

        <VerticalTimeline lineColor="#00A7A7" layout="2-columns">
          {/* Personal Care Service */}
          <VerticalTimelineElement
            contentArrowStyle={{ borderRight: "7px solid #0C1246" }}
            iconStyle={{ background: "#060733" }}
            icon={<Cross style={{ color: "#CFD0DA" }} />}
            contentStyle={{ background: "#00A7A7", color: "#060733" }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-5">Personal Care</h3>
              <ul className="list-disc pl-5 space-y-4">
                <li>Hygiene Assistance</li>
                <li>Mobility Support</li>
                <li>Medication Management</li>
                <li>Meal Prep and Dietary Assistance</li>
                <li>Customized Exercise Plans</li>
              </ul>
            </div>
          </VerticalTimelineElement>

          {/* Domestic Assistance */}
          <VerticalTimelineElement
            contentArrowStyle={{ borderRight: "7px solid #0C1246" }}
            iconStyle={{ background: "#060733" }}
            icon={<HeartHandshake style={{ color: "#CFD0DA" }} />}
            contentStyle={{ background: "#00A7A7", color: "#060733" }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-5">Domestic Assistance</h3>
              <ul className="list-disc pl-5 space-y-4">
                <li>Housekeeping</li>
                <li>Shopping and Errands</li>
                <li>Home Maintenance</li>
              </ul>
            </div>
          </VerticalTimelineElement>

          {/* Social and Community Duties */}
          <VerticalTimelineElement
            contentArrowStyle={{ borderRight: "7px solid #0C1246" }}
            iconStyle={{ background: "#060733" }}
            icon={<Handshake style={{ color: "#CFD0DA" }} />}
            contentStyle={{ background: "#00A7A7", color: "#060733" }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-5">
                Social and Community Duties
              </h3>
              <ul className="list-disc pl-5 space-y-4">
                <li>Support in Social Gatherings</li>
                <li>Assistance with Hobbies</li>
                <li>Transportation to Community Centers</li>
              </ul>
            </div>
          </VerticalTimelineElement>

          {/* Therapy Assistance */}
          <VerticalTimelineElement
            contentArrowStyle={{ borderRight: "7px solid #0C1246" }}
            iconStyle={{ background: "#060733" }}
            icon={<Accessibility style={{ color: "#CFD0DA" }} />}
            contentStyle={{ background: "#00A7A7", color: "#060733" }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-5">Therapy Assistance</h3>
              <ul className="list-disc pl-5 space-y-4">
                <li>Follow-up on Therapy Programs</li>
                <li>Assistance with Medical Routines</li>
              </ul>
            </div>
          </VerticalTimelineElement>

          {/* Travel and Transport Support */}
          <VerticalTimelineElement
            contentArrowStyle={{ borderRight: "7px solid #0C1246" }}
            iconStyle={{ background: "#060733" }}
            icon={<Car style={{ color: "#CFD0DA" }} />}
            contentStyle={{ background: "#00A7A7", color: "#060733" }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-5">
                Travel and Transport Support
              </h3>
              <ul className="list-disc pl-5 space-y-4">
                <li>Transportation to Medical Appointments</li>
                <li>Travel Planning and Coordination</li>
              </ul>
            </div>
          </VerticalTimelineElement>

          {/* Mentorship and Life Skills */}
          <VerticalTimelineElement
            contentArrowStyle={{ borderRight: "7px solid #0C1246" }}
            iconStyle={{ background: "#060733" }}
            icon={<HandHelping style={{ color: "#CFD0DA" }} />}
            contentStyle={{ background: "#00A7A7", color: "#060733" }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-5">
                Mentorship and Life Skills
              </h3>
              <ul className="list-disc pl-5 space-y-4">
                <li>Skill-building in Budgeting and Planning</li>
                <li>Emotional Support and Mentorship</li>
              </ul>
            </div>
          </VerticalTimelineElement>

          {/* Health and Wellness */}
          <VerticalTimelineElement
            contentArrowStyle={{ borderRight: "7px solid #0C1246" }}
            iconStyle={{ background: "#060733" }}
            icon={<HeartPulse style={{ color: "#CFD0DA" }} />}
            contentStyle={{ background: "#00A7A7", color: "#060733" }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-5">Health and Wellness</h3>
              <ul className="list-disc pl-5 space-y-4">
                <li>Tailored Assistance for Autism Spectrum</li>
                <li>Support with Communication and Social Skills</li>
                <li>Routine and Sensory Needs Management</li>
                <li>Specialized Support for Complex Needs</li>
              </ul>
            </div>
          </VerticalTimelineElement>

          {/* Medication Assistance */}
          <VerticalTimelineElement
            contentArrowStyle={{ borderRight: "7px solid #0C1246" }}
            iconStyle={{ background: "#060733" }}
            icon={<PillBottle style={{ color: "#CFD0DA" }} />}
            contentStyle={{ background: "#00A7A7", color: "#060733" }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-5">Medication Assistance</h3>
              <ul className="list-disc pl-5 space-y-4">
                <li>Medication Management and Reminders</li>
                <li>Support with Daily Medication Routines</li>
              </ul>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <hr className="w-16 mx-auto border-t-2 mt-6 border-[#00A7A7]" />
      </div>
    </div>
  );
};

export default Services;
