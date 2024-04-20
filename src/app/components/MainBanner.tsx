import Bed from "../images/icons-blocks/bed.svg";
import Airplane from "../images/icons-blocks/airplane.svg";
import Map from "../images/icons-blocks/map.svg";
import Calendar from "../images/icons-blocks/calendar.svg";
import Image from "next/image";

const MainBanner = () => {
    return (
        <div className="bg-[url('./images/main-banner.png')] h-587 bg-center bg-cover -mr-4 -ml-4 flex flex-col gap-3 items-center justify-center m-auto">
        <h2 className=" text-5xl text-white font-bold md:text-2xl sm:text-center">
          Арабска приказка в Йордания
        </h2>
        <div className=" border px-6 py-1 text-white">11-15 Март</div>
        {/* Timer start  */}
        <div className="flex gap-10 text-white py-7">
          <div className=" text-center">
            <h3 className=" text-5xl md:text-4xl">11</h3>
            <p className="text-sm">дни</p>
          </div>

          <span className=" h-8 border mt-2"></span>

          <div className=" text-center">
            <h3 className=" text-5xl md:text-4xl">14</h3>
            <p className="text-sm">часа</p>
          </div>

          <span className=" h-8 border mt-2"></span>

          <div className=" text-center">
            <h3 className=" text-5xl md:text-4xl">55</h3>
            <p className="text-sm">минути</p>
          </div>
        </div>
        {/* Timer end  */}
        <button className=" bg-red-500 text-white py-3 px-7 rounded-3xl">
          Резервирайте сега
        </button>
        <p className="text-white ">от 1 149,00лв.</p>

        {/* Reservation blocks start */}
        <div className="grid grid-cols-4 gap-4 relative top-20 md:grid-cols-2 sm:gap-2">
          <div className=" px-10 py-4 bg-red-500 text-white flex flex-col items-center justify-center gap-2">
            <Image src={Bed} width={40} className="max-h-7" alt={"Bed"} />
            <p>8 нощувки</p>
          </div>

          <div className=" px-10 py-4 bg-red-500 text-white flex flex-col items-center gap-2">
            <Image src={Airplane} width={40} className="max-h-7" alt={"Airplane"} />
            <p>Самолет</p>
          </div>

          <div className=" px-10 py-4 bg-red-500 text-white flex flex-col items-center gap-2">
            <Image src={Map} width={40} className="max-h-7" alt={"Map"} />
            <p>Австрия</p>
          </div>

          <div className=" px-10 py-4 bg-red-500 text-white flex flex-col items-center gap-2">
            <Image src={Calendar} width={40} className="max-h-7" alt={"Calendar"} />
            <p>11 - 15 Mart</p>
          </div>
        </div>
        {/* Reservation blocks end */}
      </div>
    )
}

export default MainBanner;