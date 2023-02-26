import S1 from "../../Assets/Scans_img/ctscan.png";
import S2 from "../../Assets/Scans_img/ultrasound.png";
import S3 from "../../Assets/Scans_img/ecg.png";
import S4 from "../../Assets/Scans_img/xray.png";

const content = [
  {
    id: 1,
    page: "/ctscan",
    src: S1,
    atl: "",
    title: "CT Scan",
    price: "Starting @",
    price2: "₹3000",
    price3: "₹900",
    description:
      "Computed tomography or CT/CAT scan is a commonly ordered image diagnostic test that combines X-ray images from several angles and compiles them into a single image using 2D and 3D image reconstruction.The cross-sectional images or ‘slices’ can be taken for any part or structure of the body, including the bones, soft tissues, and blood vessels.",
  },
  {
    id: 1,
    page: "/ultrasound",
    src: S2,
    atl: "",
    title: "Ultrasound",
    price: "Starting @",
    price2: "₹6000",
    price3: "₹1500",
    description:
      "An ultrasound scan, also known as sonography, is the second most popular image diagnostic test after X-ray. It uses high-frequency sound waves to capture detailed images of body parts and structures, such as tissues, blood vessels, and organs. The ultrasound is a non-invasive diagnostic test that works on the principles of sonar, the same technology used by navies to detect planes, ships, and submarines.",
  },
  {
    id: 1,
    page: "/digitalxray",
    src: S4,
    atl: "",
    title: "Digital X-Ray",
    price: "Starting @",
    price2: "₹1200",
    price3: "₹500",
    description:
      "A digital X-ray test is the most common and non-invasive image diagnostic test that has been around for decades. This image testing is ordered to detect, diagnose, and monitor a host of medical issues. While other imaging tests are typically used to assess hard-to-reach areas (tissues, blood vessels, nerves, etc.), a digital X-ray, on the other hand, gives a quick picture of the bones, chest, teeth, and abdomen.",
  },
  {
    id: 1,
    page: "/ecgtest",
    src: S3,
    atl: "",
    title: "ECG Test",
    price: "Starting @",
    price2: "₹2000",
    price3: "₹1500",
    description:
      "An ECG or an electrocardiogram test is a non-invasive and painless diagnostic procedure that helps in the detection of heart issues as well as monitoring the overall heart health. An ECG monitors the electrical activity of the heart as each heartbeat generates an electronic pulse that travels through the heart. The electrical pulse contracts the arterial muscles which in turn pump the blood from the heart. The test detects and identifies any abnormal electrical activity, indicative of a heart illness or the risk of one.",
  },
];

export default content;
