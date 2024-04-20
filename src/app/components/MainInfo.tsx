import Image from "next/image";
import SmallGallery from "../images/gallery/small.png";
import LongGallery from "../images/gallery/long.png";
import Joe from "../images/Performers/Joe.png";
import Eminem from "../images/Performers/Eminem.png";
import Cent from "../images/Performers/50cent.png";
import Jay from "../images/Performers/JayZ.png";
import Hotel from "../images/hotel.svg";
import LeftArrow from "../images/hotel/angle-left.png";
import RightArrow from "../images/hotel/angle-right.png";
import Hotel1 from "../images/hotel/hotel.png";
import Hotel2 from "../images/hotel/hotel1.png";
import Hotel3 from "../images/hotel/hotel2.png";
import Hotel4 from "../images/hotel/hotel3.png";
import RedAvatar from "../images/coments/Border.png";
import Polygon from "../images/coments/Polygon.png";
import RealAvatar from "../images/coments/Mask Group.png";
import Calendar from "../images/calendar.png";

const MainInfo = () => {
  return (
    <main className="flex flex-row lg:flex-col min-h-screen mt-32 sm:mt-20 max-w-5xl m-auto gap-4">
      {/* About the event start */}
      <div className=" w-3/5 lg:w-11/12 lg:m-auto flex flex-col gap-6">
        <h2 className=" text-2xl font-bold sm:text-lg">За събитието</h2>
        <div className="flex flex-col gap-4 sm:text-sm">
          <p>
            Ако ви привлича Изтока и източната култура, със сигурност сте чували
            за Акаба. Курортното градче е разположено в северната част на
            Червено море, като е единственият крайбрежен град в Йордания,
            най-големият и най-гъсто населеният в залива Акаба.
          </p>
          <p>
            Стратегическото местоположение на града между Азия и Африка го прави
            важно пристанище в продължение на хиляди години. Близостта на Акаба
            до известните туристически забележителности – Вади Рум и Петра,
            утвърждава мястото му на световната карта и го превръща в основна
            туристическа дестинация в Йордания.
          </p>
          <p>
            През Акаба минават туристическите и поклонническите маршрути от
            Египет, Арабия и от север. Днес Акаба е едновременно оживен курортен
            град и туристически център, който предлага на посетителите си
            забележителни пейзажи, прекрасен залив и хилядолетна история.
          </p>
        </div>
        {/* Gallery start  */}
        <h2 className=" text-2xl font-bold mb-2 sm:text-lg">Галерия</h2>
        <div className="grid grid-cols-4 grid-rows-2 gap-4 sm:gap-2 grid-flow-row-dense h-80 sm:grid-cols-2 sm:grid-rows-4 sm:h-full">
          <Image src={LongGallery} className=" col-span-2 h-full w-full" />
          <Image src={SmallGallery} className="h-full w-full" />
          <Image src={SmallGallery} className="h-full w-full" />
          <Image src={SmallGallery} className="h-full w-full" />
          <Image src={SmallGallery} className="h-full w-full" />
          <Image src={LongGallery} className=" col-span-2 h-full w-full" />
        </div>
        {/* Gallery end  */}

        {/* Promo start  */}
        <h2 className=" text-lg font-bold mb-2">Промо пакети</h2>
        <div>
          <div className="flex flex-row justify-between gap-2">
            <div className=" bg-gray-100 text-gray-400 w-4/5 sm:w-11/12 px-4 py-2">
              Настаняване
            </div>
            <div className=" bg-gray-100 text-gray-400 w-1/5 px-4 py-2 sm:w-40">
              Цена
            </div>
          </div>

          <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-3 w-4/5">
              <p className="p-2 sm:text-xs">1 човек в двойна стая</p>
              <p className="p-2 sm:text-xs">Трети възрастен</p>
              <p className="p-2 sm:text-xs">Единична стая</p>
              <p className="p-2 sm:text-xs">Дете 2 -5.99 г. в стая с 2-ма възрастни</p>
              <p className="p-2 sm:text-xs">Дете 6 -11.99 г. в стая с 2-ма възрастни</p>
            </div>

            <div className="w-1/5 sm:1/12 pl-2 font-bold flex flex-col gap-3 sm:w-40 sm:justify-items-center">
              <p className="p-2 sm:text-xs">1149 лв</p>
              <p className="p-2 sm:text-xs">1100 лв</p>
              <p className="p-2 sm:text-xs">1548 лв.</p>
              <p className="p-2 sm:text-xs">560 лв.</p>
              <p className="p-2 sm:text-xs sm:mt-4">728 лв.</p>
            </div>
          </div>
        </div>
        {/* Promo end  */}
        {/* Performers start */}
        <h2 className=" text-lg font-bold">Изпълнители</h2>
        <div className="flex text-center gap-4 lg:justify-center sm:grid sm:grid-cols-2 sm:justify-items-center">
          <div>
            <Image src={Joe} />
            <p className=" text-sm mt-2">Fat Joe</p>
          </div>

          <div>
            <Image src={Eminem} />
            <p className=" text-sm mt-2">Eminem</p>
          </div>

          <div>
            <Image src={Cent} />
            <p className=" text-sm mt-2">50 cent</p>
          </div>

          <div>
            <Image src={Jay} />
            <p className=" text-sm mt-2">Jay-Z</p>
          </div>
        </div>
        {/* Performers end */}
        {/* Hotels start  */}
        <h2 className=" text-lg font-bold">Хотели</h2>

        <div>
          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              <Image src={Hotel} />
              <h3 className="font-bold text-2xl sm:text-lg">Grand Halic 4****</h3>
            </div>
            <p className=" sm:text-sm">
              Grand Hotel Halic предлага удобно местоположение в централния
              район Beyoglu и изглед към залива Златния рог. На пешеходно
              разстояние се намират площад „Таксим“ и кулата Галата. На място
              има закрит плувен басейн и СПА център.
            </p>
            <p className=" sm:text-sm">
              Хотелът предлага добре обзаведени стаи за гости и суити с кът за
              сядане и плоскоекранен телевизор със сателитни канали. Всяко
              помещение за настаняване има отопление и климатик, както и
              безплатен WiFi достъп.
            </p>
            <div className="flex gap-2.5 items-center -mx-5 lg:m-0 lg:justify-center">
              <Image src={LeftArrow} />
              <Image src={Hotel1} />
              <Image src={Hotel2} className=" sm:hidden"/>
              <Image src={Hotel3} className=" sm:hidden"/>
              <Image src={Hotel4} className=" md:hidden"/>
              <Image src={RightArrow} />
            </div>
          </div>

          <span className="block w-fill border mt-6 mb-6"></span>

          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              <Image src={Hotel} />
              <h3 className="font-bold text-2xl sm:text-lg">Grand Halic 4****</h3>
            </div>
            <p className=" sm:text-sm">
              Grand Hotel Halic предлага удобно местоположение в централния
              район Beyoglu и изглед към залива Златния рог. На пешеходно
              разстояние се намират площад „Таксим“ и кулата Галата. На място
              има закрит плувен басейн и СПА център.
            </p>
            <p className=" sm:text-sm">
              Хотелът предлага добре обзаведени стаи за гости и суити с кът за
              сядане и плоскоекранен телевизор със сателитни канали. Всяко
              помещение за настаняване има отопление и климатик, както и
              безплатен WiFi достъп.
            </p>
            <div className="flex gap-2.5 items-center -mx-5 lg:m-0 lg:justify-center">
              <Image src={LeftArrow} />
              <Image src={Hotel1} />
              <Image src={Hotel2} className=" sm:hidden"/>
              <Image src={Hotel3} className=" sm:hidden"/>
              <Image src={Hotel4} className=" md:hidden"/>
              <Image src={RightArrow} />
            </div>
          </div>
          <span className="block w-fill border mt-6 mb-6"></span>
        </div>
        {/* Hotels end  */}
        {/* Customer reviews start  */}
        <h2 className=" text-2xl font-bold sm:text-lg">Отзиви от клиенти</h2>
        <div className="grid grid-cols-2 grid-rows-2 gap-5 sm:grid-cols-1 lg:max-w-xl lg:m-auto">
          <div>
            <div className=" bg-gray-100 p-5 rounded-2xl h-60">
              <p>
                A visual guide could be a wireframe, creative composition,
                or information architecture. A device that enables collaboration
                will lessen the chance of work having to be completely redone.
              </p>
            </div>
            <Image src={Polygon} className="relative left-3 bottom-22" />
            <div className="flex my-2 gap-5">
              <div className=" bg-red-500 p-4 rounded-3xl">
                <Image src={RedAvatar} />
              </div>
              <div>
                <h3 className="font-bold">John Johnson</h3>
                <p className=" text-sm">Co-founder of Forpeople</p>
              </div>
            </div>
          </div>

          <div>
            <div className=" bg-gray-100 p-5 rounded-2xl h-60">
              <p>
                A visual guide could be a wireframe, creative composition,
                or information architecture.
              </p>
            </div>
            <Image src={Polygon} className="relative left-3 bottom-22" />
            <div className="flex my-1 gap-5">
              <Image src={RealAvatar} />
              <div>
                <h3 className="font-bold">Cha Ji-Hun</h3>
                <p className=" text-sm">Co-founder of Forpeople</p>
              </div>
            </div>
          </div>

          <div>
            <div className=" bg-gray-100 p-5 rounded-2xl h-60">
              <p>
                A visual guide could be a wireframe, creative composition,
                or information architecture. A device that enables collaboration
                will lessen the chance of work having to be completely redone.
              </p>
            </div>
            <Image src={Polygon} className="relative left-3 bottom-22" />
            <div className="flex my-2 gap-5">
              <div className=" bg-red-500 p-4 rounded-3xl">
                <Image src={RedAvatar} />
              </div>
              <div>
                <h3 className="font-bold">John Johnson</h3>
                <p className=" text-sm">Co-founder of Forpeople</p>
              </div>
            </div>
          </div>

          <div className="h-full">
            <div className=" bg-gray-100 p-5 rounded-2xl h-60">
              <p>
                A visual guide could be a wireframe, creative composition,
                or information architecture.
              </p>
            </div>
            <Image src={Polygon} className="relative left-3 bottom-22" />
            <div className="flex my-2 gap-5">
              <Image src={RealAvatar} />
              <div>
                <h3 className="font-bold">Cha Ji-Hun</h3>
                <p className=" text-sm">Co-founder of Forpeople</p>
              </div>
            </div>
          </div>
        </div>
        {/* Customer reviews end  */}
      </div>
      {/* About the event end */}

      {/* Program start  */}
      <div className=" w-2/5 h-fit bg-gray-50 -mt-32 pt-32 pl-3 pb-8 pr-1 flex flex-col sm:block gap-6 lg:m-auto lg:w-full">
      <h2 className=" text-2xl font-bold sm-min:ml-14 sm:text-lg ml-2 mb-2">Програма</h2>
      <div className=" sm:flex sm:flex-col grid lg:m-auto lg:grid-cols-2 lg:mx-5 sm:gap-4">
        <div className="flex gap-5">
          <div className=" flex flex-col items-center"> 
            <Image src={Calendar} className=" min-w-6" />
            <span className="w-0.5 h-full border block mt-3"></span>
          </div>
          <div className="flex flex-col gap-2">
            <p className=" text-base font-bold text-slate-300">
              1 ден (11.03.20)
            </p>
            <h3 className=" text-lg font-bold">София – Акаба</h3>
            <p className=" text-sm sm:text-xs">
              Среща на летище София, Терминал 2 в 14.30 часа Директен полет на
              Ryan air до Йордания-Акаба в 16.35 часа. Пристигане на летище Кинг
              Хюсиен, преминаваме митнически и гранични процедури. <br />{" "}
              Трансфер към хотела, разположен в залива Tala Bay - най-
              престижния курорт в близост до гр. Акаба, известен със своите
              пясъчни, девствени плажове и едни от най-красивите коралови рифове
              на Червено море. Настаняване в хотел Tala Bay Resortex Radisson
              BLU 5* <br />
              <a
                className=" text-blue-400 underline"
                href={"http://talabay.net/hotel/tala-bay-resort/"}
              >
                http://talabay.net/hotel/tala-bay-resort/
              </a>
              <br />
              на база полупансион. Вечеря. Нощувка.
            </p>
          </div>
        </div>

        <div className="flex gap-5">
          <div className=" flex flex-col items-center">
            <Image src={Calendar} className=" min-w-6" />
            <span className="w-0.5 h-full border block mt-3"></span>
          </div>
          <div className="flex flex-col gap-2">
            <p className=" text-base font-bold text-slate-300">
              2 ден (12.03.20)
            </p>
            <h3 className=" text-lg font-bold">
              Акаба - Мъртво море - Мадаба - Небо - Акаба
            </h3>
            <p className=" text-sm sm:text-xs">
              Закуска. Свободно време. По желание срещу доплащане - Екскурзия до
              Мъртво море - Мадаба - планината Небо. Целодневно пътуване до
              най-ниската точка на земното кълбо, разположена на 420 м под
              морското равнище – Мъртво море. Цена - 90 евро с включен обяд.
              Вечеря. Нощувка.
            </p>
          </div>
        </div>

        <div className="flex gap-5">
          <div className=" flex flex-col items-center">
            <Image src={Calendar} className=" min-w-6" />
            <span className="w-0.5 h-full border block mt-3"></span>
          </div>
          <div className="flex flex-col gap-2">
            <p className=" text-base font-bold text-slate-300">
              3 ден (13.03.20)
            </p>
            <h3 className=" text-lg font-bold">Акаба – Вади Рум – Акаба</h3>
            <p className=" text-sm sm:text-xs">
              Закуска. Свободно време. По желание срещу доплащане - Екскурзия до
              пустинята Вади Рум. С автобус и джип сафари, което ще ви отведе до
              пустинята на едно недокоснато от човешката ръка място. Цена - 80
              евро с включена вечеря в пустинен оазис. Нощувка.
            </p>
          </div>
        </div>

        <div className="flex gap-5">
          <div className=" flex flex-col items-center">
            <Image src={Calendar} className=" min-w-6" />
            <span className="w-0.5 h-full border block mt-3"></span>
          </div>
          <div className="flex flex-col gap-2">
            <p className=" text-base font-bold text-slate-300">
              4 ден (14.03.20)
            </p>
            <h3 className=" text-lg font-bold">Акаба – Петра – Акаба</h3>
            <p className=" text-sm sm:text-xs">
              Закуска. По желание срещу доплащане - Екскурзия до Петра. Градът е
              включен в листата на новите Седем чудеса на света на ЮНЕСКО.
              Открит е случайно през 1812 г. от швейцарския пътешественик
              Буркхард. Преди се е наричал “Изгубеният град” и е бил известен
              само на бедуините. До него се стига след като се прекоси пустинята
              и се мине през стръмен каньон, дълъг над 1 км, със стени високи
              около 200 м, наречен Сик. След това пред погледа ни се открива
              смайващата 50 метрова Съкровищница, наречена Ал-Каснех Фарун,
              позната ни от филма “Индиана Джонс”, в която се счита също, че е
              скрит Светия Граал. Цена - 130 евро с включен обяд Вечеря.
              Нощувка.
            </p>
          </div>
        </div>

        <div className="flex gap-5">
          <div className=" flex flex-col items-center">
            <Image src={Calendar} className=" min-w-6" />
            <span className="w-0.5 h-full border block mt-3"></span>
          </div>
          <div className="flex flex-col gap-2">
            <p className=" text-base font-bold text-slate-300">
              5 ден (15.03.20)
            </p>
            <h3 className=" text-lg font-bold">Акаба – София</h3>
            <p>Закуска. Свободно време. Късно освобождаване на стаите.</p>

            <p>
              В 18.00
              часа трансфер до летище Кинг Хюсиен. Директен полет до София на
              Ryan air в 21.05 часа.
            </p>
          </div>
          </div>
        </div>
      </div>
      {/* Program end  */}
    </main>
  );
};
export default MainInfo;
