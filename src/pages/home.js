import Carousel from "../components/carousel/Carousel";
import Welcome from "../components/Welcome";
import Packages from "../components/packages/Packages";
import Departments from "../components/department/Departments";
import HealthScans from "../components/healthScans/HealthScans";
import WhyChooseUs from "../components/whyChooseUs/WhyChooseUs";
import Testimonials from "../components/testimonials/Testimonials";
import Map from "../components/map/Map";

export default function Home() {
  return (
    <>
      <Carousel />
      <Welcome />
      <Packages />
      <Departments />
      <HealthScans />
      <WhyChooseUs />
      <Testimonials />
      <Map />
    </>
  );
}
