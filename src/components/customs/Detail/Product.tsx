import KruttLogo from '../../../pic/krutt.webp';
import WoWLogo from '../../../pic/wow-robot-head.svg';

export default function DetailCenter() {
  return (
    <div className="mb-10" id="product">
      <div className="text-center">
        <p className="text-4xl font-medium underline underline-offset-8 ">
          We Make Future in Blockchain
        </p>
      </div>
      <div className="flex flex-wrap justify-center p-16 mt-10 gap-14 bg-gradient-to-b from-transparent via-transparent to-blue-50">
        <div className="max-w-sm w-full p-10 shadow-lg shadow-slate-300 mx-1 rounded-lg bg-white relative transition-transform transform hover:scale-105 duration-700">
          <div className="absolute -top-10 left-6 w-20 h-20 rounded-full flex justify-center items-center">
            <img src={WoWLogo} className="w-16" />
          </div>
          <p className="font-normal text-2xl mt-5">WOW Robot</p>
          <p className="font-light">
            <p className="text-sky-500 ">Your personal set-and-forget</p> robot
            trader A trading bot that helps you trade with minimum risks,
            enabling slow but steady profit
          </p>
          <div className="flex gap-5">
            <div>
              <a
                href="https://app.wowrobot.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="max-sm:text-sm mt-4 bg-sky-500 hover:bg-sky-400 text-white py-1 px-3 rounded font-light">
                  Trade Now
                </button>
              </a>
            </div>
            <div>
              <a
                href="https://wow-robot-landing.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="max-sm:text-sm mt-4  hover:bg-slate-100 text-black py-1 px-3 rounded font-light">
                  Learn More
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-sm w-full p-10 shadow-lg shadow-slate-300 mx-1 rounded-lg bg-white relative transition-transform transform hover:scale-105 duration-700">
          <div className="absolute -top-10 left-6 w-20 h-20 rounded-full flex justify-center items-center ">
            <img src={KruttLogo} alt="" />
          </div>
          <p className="font-normal text-2xl mt-5">Krutt</p>
          <p className="font-light">
            <p className="text-amber-500">One-stop Bitcoin</p> bank The one-stop
            solution for the lightning-fast Bitcoin trading on Bitcoin Lightning
            network
          </p>
          <div className="flex gap-5">
            <div>
              <a
                href="https://krutt.fi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="max-sm:text-sm max-sm:mt-2 mt-4 bg-amber-500 hover:bg-amber-400 text-white py-1 px-3 rounded font-light">
                  Learn More
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
