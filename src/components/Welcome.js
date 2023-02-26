import pic1 from "../Assets/WelcomeImg2.webp";
import pic2 from "../Assets/WelcomeImg1.webp";
// import D3 from "../../Assets/Doc-Img/Vibhu.jpg";

export default function Welcome() {
  return (
    <div className="grid grid-cols-2 p-[4%] gap-32">
      <div className="grid grid-cols-2 gap-5">
        <div className=" border-2 border-transparent  text-white">
          <div className="flex justify-center ">
            <img src={pic2} alt="Anil rajput" className="" />
          </div>
        </div>
        <div className=" border-2 border-transparent pt-10 text-white">
          <div className="flex justify-center ">
            <img src={pic1} alt="Vibhu Goyal" className="" />
          </div>
        </div>
      </div>
      <div className="p-[1%]">
        <div className="font-bold text-primary text-6xl p-4 text-right">
          Welcome To Aarna Diagnostic Centre
        </div>
        <div className="p-4 text-lg text-right">
          Aarna is committed to addressing the medical <br></br>
          community's evolving and ever increasing <br></br>
          diagnostic needs. Our well organised sample <br></br>
          management procedure and cutting edge <br></br>
          electronic equipment guarantee that our patient <br></br> obtain
          prompt and reliable result. The aim of <br></br> Aarna is to make wide
          variety of tests more <br></br> affordable and accessible to general
          public.
        </div>
      </div>
    </div>
  );
}
