import Image from "next/image";
import Logo from "../images/Logo.svg";
import License from '../images/footer/license.svg';
import Shild from '../images/footer/insurance.svg';
import Facebook from '../images/footer/facebook.svg';
import Instagram from '../images/footer/instagram.svg';

const Footer = () => {
    return (
        <div className=" bg-stone-700 -mx-5">
            <div className=" py-11 flex max-w-6xl m-auto justify-between text-white px-3 lg:flex-col lg:items-center">
                <h2 className="text-2xl max-w-xl  font-extrabold ml-4 sm:mx-2 lg:text-center lg:mb-3 lg:ml-0 sm:text-lg">Отстъпки и специални предложения налични само на имейл</h2>
                <div className="flex flex-col gap-3 mr-4 sm:items-center sm:ml-5">
                    <div>
                        <input type="text" placeholder="Въведете вашия имейл" className="py-2 w-96 sm:w-11/12 pl-3"/>
                        <button className=" bg-red-600 py-2 pl-5 sm:mt-2">Абонирай се</button>
                    </div>
                    <p className=" sm:ml-4">Всеки месец ще получаваш първи най-добрите ни оферти</p>
                </div>
            </div>

            <span className=" block border w-screen h-0 border-white"></span>

            <div className=" py-11 flex max-w-6xl m-auto justify-between text-white pt-5 pb-12 px-3 lg:flex-col-reverse">

            <div className=" flex flex-row sm:flex-col-reverse gap-24 lg:justify-between lg:w-4/5 lg:m-auto ">
                {/* First footer column start */}
                <div className="flex flex-col gap-11 ml-4">
                    <Image src={Logo} alt={"Logo"}/>

                    <div className="flex flex-col gap-5">

                    <div className="flex sm-min:justify-between gap-3">
                        <Image src={License} alt={"License"}/>
                        <p className=" max-w-32 text-xs font-extrabold">Лиценз, удостоверение за регистрация № 05236</p>
                    </div>

                    <div className="flex sm-min:justify-between gap-3">
                        <Image src={Shild} alt={"Shild"}/>
                        <p className=" max-w-32 text-xs font-extrabold">Застраховка "Отговорност на туроператора"</p>
                    </div>
                    </div>
                    <p className="text-sm text-gray-400 mt-8">All rights reserved. <br />© 2020 Mistral</p>
                </div>
                {/* First footer column end */}

                {/* Second footer column start */}
                <div className="flex flex-col gap-6 mt-14">
                    <h4 className=" font-extrabold ">Контакти</h4>
                    <div className="flex flex-col gap-3 sm:text-sm">
                        <p>1111 София, България, <br />ул. Христо Белчев 34</p>
                        <p>+359 884 47 30 34 // мобилен</p>
                        <p>+359 2 980 44 59 // офис</p>
                        <p>+359 2 980 41 05 // факс</p>
                        <p>mistral@mistralbg.com</p>
                        <p>Понеделник - Петък <br />10.00ч. - 18.00ч.</p>
                    </div>
                </div>
                {/* Second footer column end */}
                </div>
                <div className=" flex flex-col sm-min:flex-row gap-8 lg:justify-between lg:w-4/5 lg:m-auto">
                {/* Third footer column start */}
                <div className="flex mt-14">
                    <div className="flex flex-col gap-6">
                    <h4 className=" font-extrabold ">Бързи връзки</h4>
                    <div className="flex gap-16">
                    <div className="flex flex-col gap-3 sm:text-sm">
                        <p>За нас</p>
                        <p>Документи</p>
                        <p>Начин на <br />плащане</p>
                    </div>
                    <div className="flex flex-col gap-3 self-center sm:text-sm">
                        <p>Общи условия</p>
                        <p>Лични данни</p>
                        <p>Контакти</p>
                    </div>
                    </div>
                    </div>
                    
                </div>
                {/* Third footer column end */}

                {/* Last footer column start */}
                <div className="flex flex-col gap-5 mt-14 sm:mt-4 items-center mr-4 lg:mr-2 sm:flex-row">
                    <h4 className=" sm:text-sm">120к ни харесват в </h4>
                    <Image src={Facebook} alt={"Facebook"} className=" sm:w-8"/>
                    <h4 className=" sm:text-sm">60к ни харесват в </h4>
                    <Image src={Instagram} alt={"Instagram"} className=" sm:w-8"/>
                </div>
                {/* Last footer column end */}
                </div>
            </div>
        </div>
    )
}

export default Footer;