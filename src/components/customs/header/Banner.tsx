// import { CircleUser, CircleDollarSign, MessageCircle } from 'lucide-react';
import BG from '../../../pic/bg.png';

export default function DetailHeader() {
  return (
    <div>
      <div className="flex justify-center items-center h-screen " id="banner">
        <img
          src={BG}
          alt="BG"
          className=" absolute -top-0 left-0 w-full h-full object-cover z-0 opacity-10"
        />
        <div className="xl:z-10 text-center relative z-10">
          <p className="font-base text-7xl mb-5 max-md:text-1xl max-sm:text-[50px]">
            Total Crypto Solutions
          </p>
          <p className="mt-2 text-xl font-light mb-12 max-md:text-1xl max-sm:text-sm">
            ให้คำปรึกษาธุรกิจคริปโตฯ และการจัดการคริปโตฯ ทุกรูปแบบ
          </p>
          {/* 
          <div className="flex mt-5 justify-center text-justify gap-10">
            <p className="flex flex-col items-center">
              <CircleUser />
              Team
            </p>
            <p className="flex flex-col items-center">
              <CircleDollarSign />
              Profit
            </p>
            <p className="flex flex-col items-center">
              <MessageCircle />
              Support
            </p>
          </div> */}
        </div>
        {/* <div className="hidden xl:block">
          <img
            src={BG}
            alt="BG"
            className=" w-[900px] h-[650px] transition-transform transform-gpu hover:scale-105 duration-1000"
          />
        </div> */}
      </div>
    </div>
  );
}
{
  /* <div className="hidden md:block md:absolute md:top-0 md:left-0 md:w-[900px] md:h-[650px] md:object-cover md:z-0">
<img
  src={Bitcoin}
  alt="Bitcoin"
  className="w-full h-full transition-transform transform-gpu hover:scale-105 duration-1000"
/>
</div> */
}
