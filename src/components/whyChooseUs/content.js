// import selfCare from "../../Assets/selfcare.png";
// import cusTomerService from "../../Assets/customer-service.png";
// import medTest from "../../Assets/medical-test.png";
// import tech from "../../Assets/science-and-tech.png";
import experience from "../../Assets/experience.png";
import doctor from "../../Assets/doctor.png";
import people from "../../Assets/team.png";

import { GiAmbulance } from "react-icons/gi";
import { HiOutlineHome } from "react-icons/hi";
import { RiMicroscopeLine } from "react-icons/ri";
import { FaUserNurse } from "react-icons/fa";
import { TbReport } from "react-icons/tb";
import { GiTestTubes } from "react-icons/gi";

export const content1 = [
  {
    id: 1,
    heading: "100% ACCURATE RESULTS",
    img: <GiTestTubes />,
  },
  {
    id: 2,
    heading: "FREE AMBULANCE SERVICE 24*7",
    img: <GiAmbulance />,
  },

  {
    id: 3,
    heading: "PROFESSIONAL ON HAND",
    img: <FaUserNurse />,
  },
  {
    id: 4,
    heading: "FREE HOME VISIT FACILITY AVAILABLE",
    img: <HiOutlineHome />,
  },
  {
    id: 5,
    heading: "FASTEST REPORT GENERATION",
    img: <TbReport />,
  },
  {
    id: 6,
    heading: "USE OF SAFE AND SANITARY EQUIPMENT",
    img: <RiMicroscopeLine />,
  },
];

export const content2 = [
  {
    id: 1,
    heading: "6",
    body: "Years of Experience",
    img: experience,
  },
  {
    id: 2,
    heading: "5",
    body: "Medical Specialist",
    img: doctor,
  },
  {
    id: 3,
    heading: "12 Lacs",
    body: "Happy Patients",
    img: people,
  },
];
