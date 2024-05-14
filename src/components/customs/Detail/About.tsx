// import Wglogo from '../../../pic/wg-logo.png';
import P2P_Pic from '../../../pic/p2p.png';
import OTC_Pic from '../../../pic/otc.png';
import SOFTWARE_Pic from '../../../pic/software.png';

export default function About() {
  return (
    // redploy
    <div
      className="flex flex-wrap justify-center mb-10 p-16 gap-14 bg-gradient-to-b from-transparent via-transparent to-blue-50 "
      id="about"
    >
      <div className="mb-10">
        <div className="flex flex-wrap justify-center max-sm:justify-start gap-20 mb-20">
          <div className="text-6xl font-medium">
            <p className="max-sm:text-3xl">
              <span>
                Whats Is
                <br />
                <span>
                  World of W &<br />
                </span>
              </span>
              <span>What we do ?</span>
            </p>
          </div>
          <div className="max-sm:hidden border-r-2 border-slate-900"></div>
          <div className="flex flex-col ">
            <p className="text-2xl font-medium underline mb-2">What we do</p>
            <p className="font-light">
              {/* We are a financial services provider <br />
                in the cryptocurrency world, <br />
                including software related to cryptocurrencies. */}
              พวกเราพร้อมให้คำปรึกษาทางด้านธุรกิจและคริปโตฯ
              <br />
              พร้อมทั้งมีบริการทางด้าการเงินและบล็อกเชน
            </p>
          </div>
        </div>

        <div className="flex flex-wrap max-sm:justify-start justify-center m-auto gap-16 ">
          <div className="max-w-[300px] overflow-hidden transition-transform duration-700 transform hover:scale-110">
            <img
              src={P2P_Pic}
              className="max-w-[120px] mx-auto transition-transform duration-300 transform mb-5"
            />
            <ul className="font-semibold text-center mb-2">
              <p className="text-lg">ให้คำปรึกษาทางด้านธุรกิจและคริปโตฯ</p>
              <p className="text-base">Crypto Consultation Service</p>
            </ul>
            <span className="font-light">
              <li>Start crypto business</li>
              <li>Enjoy challenges, always learn</li>
              <li>Be open to change for mutual development.</li>
            </span>
          </div>
          {/* fintech and blockchain software house */}
          <div className="max-w-[300px] overflow-hidden transition-transform duration-700 transform hover:scale-110">
            <img
              src={OTC_Pic}
              className="max-w-[120px] mx-auto transition-transform duration-300 transform mb-5"
              alt="OTC_Pic"
            />
            <ul className="font-semibold text-lg text-center mb-2">
              <p className="text-lg">ให้บริการทางด้านการเงินและบล็อกเชน</p>
              <p className="text-base">
                Fintech And Blockchain <br />
              </p>
            </ul>
            <span className="font-light">
              <li>Digital Wallet</li>
              <li>Dex</li>
              <li>Lightning Service</li>
            </span>
          </div>

          {/* <div className="border-r-2 border-slate-400"></div> */}

          <div className="max-w-[300px] overflow-hidden transition-transform duration-700 transform hover:scale-110">
            <img
              src={SOFTWARE_Pic}
              className="max-w-[120px] mx-auto transition-transform duration-300 transform mb-5"
              alt="OTC_Pic"
            />
            <ul className="font-semibold text-lg text-center mb-2">
              <p className="text-lg">ระบบเทรดอัตโนมัติด้วย Grid Trading</p>
              {/* <p className="text-base">
                Tranding Bot <br />
              </p> */}
            </ul>
            <span className="font-light">
              <li>Grid Trading</li>
              <li>Long/Short Equity</li>
              <li>Market Neutral</li>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
