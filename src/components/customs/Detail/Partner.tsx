// import BinanceLogo from '../../../pic/binance-logo.png';
// import OkxLogo from '../../../pic/okx-logo.png';
import WowLogo from '../../../pic/wowrobot-logo.png';
// import ZLogo from '../../../pic/z-logo.png';
// import BTZLogo from '../../../pic/bitazza-logo.png';
// import BKLogo from '../../../pic/bitkub-logo.png';

export default function DetailSeconCenter() {
  return (
    <div className="mt-10">
      <div className="text-center">
        <p className="text-4xl font-medium underline underline-offset-8">
          Partner
        </p>
      </div>
      <div className="p-10 hover:cursor-pointer">
        {/* <div className="flex flex-wrap justify-center mb-5 max-sm:mb-8">
          <a
            href="https://www.binance.com/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={BinanceLogo}
              className="max-w-[300px] max-h-[100px] transition-transform transform hover:scale-105 duration-700"
              draggable="true"
              alt="Binance Logo"
            />
          </a>
        </div> */}

        {/* <div className="flex max flex-wrap justify-center items-center max-md:gap-8 gap-10 duration-700">
          <a
            href="https://www.okx.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={OkxLogo}
              className="max-w-[100px] max-h-[40px] transition-transform transform hover:scale-105 duration-700"
            />
          </a>

          <img
            src={ZLogo}
            className="max-w-[150px] max-h-[40px] transition-transform transform hover:scale-105 duration-700"
          />

          <a
            href="https://bitazza.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={BTZLogo}
              className="max-w-[300px] max-h-[60px] transition-transform transform hover:scale-105 duration-700"
            />
          </a>
          <a
            href="https://www.bitkub.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={BKLogo}
              className="max-w-[200px] max-h-[50px] transition-transform transform hover:scale-105 duration-700"
            />
          </a>
        </div> */}

        <div className="flex justify-center my-8">
          <a
            href="https://app.wowrobot.tech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={WowLogo}
              className="max-w-[180px] max-h-[100px] transition-transform transform hover:scale-105 duration-700"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
