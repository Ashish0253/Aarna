import D1 from "../Assets/Doc-Img/Anil.jpg";
import D2 from "../Assets/Doc-Img/Ravina.jpg";
// import D3 from "../../Assets/Doc-Img/Vibhu.jpg";

export default function Welcome() {
  return (
    <div className="container grid grid-cols-2 p-[4%] gap-32">
      <div className="grid grid-cols-2 gap-5">
        <div className=" border-2 border-transparent  text-white">
          <div className="flex justify-center ">
            <img
              src={D1}
              alt="Anil rajput"
              className="h-[300px] w-[300px] m-2 rounded-[50%] border-4 border-primary"
            />
          </div>
          <div className="flex justify-center bg-[#16055d] font-bold text-xl p-3 ">
            DR ANIL RAJPUT<br></br> MD PATHOLOGIST
          </div>
        </div>
        <div className="flex justify-center border-2 border-transparent bg-[#16055d] text-white">
          <img src={D2} alt="Vibhu goyal" className="h-1/2 w-1/2" />
          DR VIBHU GOYAL <br></br> MD PATHOLOGIST
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
