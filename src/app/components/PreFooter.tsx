import Tour1 from "../images/MoreTours/Tour1.png";
import Tour2 from "../images/MoreTours/Tour2.png";
import Image from "next/image";
import Bed from "../images/MoreTours/bed.svg";
import Airplane from "../images/MoreTours/plane.svg";
import Location from "../images/MoreTours/location.svg";
import Logo1 from '../images/Partners/Logo1.png';
import Logo2 from '../images/Partners/Logo2.png';
import Logo3 from '../images/Partners/Logo3.png';
import Logo4 from '../images/Partners/Logo4.png';
import Logo5 from '../images/Partners/Logo5.png';
import Logo6 from '../images/Partners/Logo6.png';
import Logo7 from '../images/Partners/Logo7.png';
import Logo8 from '../images/Partners/Logo8.png';
import Logo9 from '../images/Partners/Logo9.png';
import Logo10 from '../images/Partners/Logo10.png';


const PreFooter = () => {
  return (
    <div className=" bg-gray-50 -mx-2">
      <div className="flex flex-col max-w-6xl m-auto gap-8 mt-12 sm:mt-0 pt-12 pb-28">
        <h2 className="text-2xl font-bold mx-4 lg:ml-14">Още предложения</h2>
        <div className="grid grid-cols-4 gap-7 mx-4 lg:grid-cols-2 lg:m-auto sm:flex sm:flex-col">

          <div className=" bg-white shadow-xl lg:max-w-72">
            <Image src={Tour1} alt={"Tour1"} />
            <div className=" p-5">
              <p className=" text-sm font-bold mb-4">
                Ски в Алпите в курорта Иглс, Австрия хотел Bon Alpina 3*
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className=" text-red-600 font-bold">336лв</p>
                  <p className="line-through text-gray-400">689лв</p>
                </div>
                <div className=" flex flex-col">
                  <div className=" text-gray-400 flex gap-2">
                    <Image src={Bed} alt={"Bed"} />
                    <p>8 нощувки</p>
                  </div>
                  <div className=" text-gray-400 flex gap-2">
                    <Image src={Airplane} width={20} alt={"Airplane"} />
                    <p>Самолет</p>
                  </div>
                  <div className=" text-gray-400 flex gap-2">
                    <Image src={Location} alt={"Location"} />
                    <p>Австрия</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" bg-white shadow-xl lg:max-w-72">
            <Image src={Tour2} alt={"Tour2"} />
            <div className=" p-5">
              <p className=" text-sm font-bold mb-4">
                Ски в Алпите в курорта Иглс, Австрия хотел Bon Alpina 3*
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className=" text-red-600 font-bold">336лв</p>
                  <p className="line-through text-gray-400">689лв</p>
                </div>
                <div className=" flex flex-col">
                  <div className=" text-gray-400 flex gap-2">
                    <Image src={Bed} alt={"Bed"} />
                    <p>8 нощувки</p>
                  </div>
                  <div className=" text-gray-400 flex gap-2">
                    <Image src={Airplane} width={20} alt={"Airplane"} />
                    <p>Самолет</p>
                  </div>
                  <div className=" text-gray-400 flex gap-2">
                    <Image src={Location} alt={"Location"} />
                    <p>Австрия</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" bg-white shadow-xl lg:max-w-72">
            <Image src={Tour1} alt={"Tour1"} />
            <div className=" p-5">
              <p className=" text-sm font-bold mb-4">
                Ски в Алпите в курорта Иглс, Австрия хотел Bon Alpina 3*
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className=" text-red-600 font-bold">336лв</p>
                  <p className="line-through text-gray-400">689лв</p>
                </div>
                <div className=" flex flex-col">
                  <div className=" text-gray-400 flex gap-2">
                    <Image src={Bed} alt={"Bed"} />
                    <p>8 нощувки</p>
                  </div>
                  <div className=" text-gray-400 flex gap-2">
                    <Image src={Airplane} width={20} alt={"Airplane"} />
                    <p>Самолет</p>
                  </div>
                  <div className=" text-gray-400 flex gap-2">
                    <Image src={Location} alt={"Location"} />
                    <p>Австрия</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" bg-white shadow-xl lg:max-w-72">
            <Image src={Tour2} alt={"Tour2"} />
            <div className=" p-5">
              <p className=" text-sm font-bold mb-4">
                Ски в Алпите в курорта Иглс, Австрия хотел Bon Alpina 3*
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className=" text-red-600 font-bold">336лв</p>
                  <p className="line-through text-gray-400">689лв</p>
                </div>
                <div className=" flex flex-col">
                  <div className=" text-gray-400 flex gap-2">
                    <Image src={Bed} alt={"Bed"} />
                    <p>8 нощувки</p>
                  </div>
                  <div className=" text-gray-400 flex gap-2">
                    <Image src={Airplane} width={20} alt={"Airplane"} />
                    <p>Самолет</p>
                  </div>
                  <div className=" text-gray-400 flex gap-2">
                    <Image src={Location} alt={"Location"} />
                    <p>Австрия</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 flex flex-col max-w-6xl m-auto gap-12 pt-20 pb-28 sm:pt-2">
        <div className="flex flex-col gap-2 sm-min:mx-5 sm:ml-5">
          <h2 className="text-2xl font-bold sm-min:ml-14 ml-2 sm:text-xl">Партньори</h2>
          <p className="text-sm max-w-md sm-min:ml-14">
            Our customers accomplish amazing things every day. They work to find
            cures to cancer, travel to space.
          </p>
        </div>
        <div className=" grid grid-cols-2 md-min:gap-14 md:gap-2 sm-min:grid-cols-5 lg:mx-5 sm:justify-center">
          <div className=" justify-self-center">
            <Image src={Logo1} alt={"Logo1"}/>
          </div>
          <div className=" justify-self-center">
            <Image src={Logo2} alt={"Logo2"}/>
          </div>
          <div className=" justify-self-center">
            <Image src={Logo3} alt={"Logo3"}/>
          </div>
          <div className=" justify-self-center">
            <Image src={Logo4} alt={"Logo4"}/>
          </div>
          <div className=" justify-self-center">
            <Image src={Logo5} alt={"Logo5"}/>
          </div>
          <div className=" justify-self-center">
            <Image src={Logo6} alt={"Logo6"}/>
          </div>
          <div className=" justify-self-center">
            <Image src={Logo7} alt={"Logo7"}/>
          </div>
          <div className=" justify-self-center">
            <Image src={Logo8} alt={"Logo8"}/>
          </div>
          <div className=" justify-self-center">
            <Image src={Logo9} alt={"Logo9"}/>
          </div>
          <div className=" justify-self-center">
            <Image src={Logo10} alt={"Logo10"}/>
          </div>
        </div>
        </div>
    </div>
  );
};

export default PreFooter;
