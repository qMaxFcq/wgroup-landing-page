// import React from 'react'
import { BsFillPeopleFill } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { LuPhone } from 'react-icons/lu';

export default function Hiring() {
  return (
    <div>
      {' '}
      <div className="" id="product">
        {/* <div className="text-center">
          <p className="text-4xl font-medium underline underline-offset-8 ">
            We Make Future in Blockchain
          </p>
        </div> */}
        {/* <div className="flex flex-wrap justify-center p-16 mt-10 gap-14 bg-gradient-to-b from-transparent via-transparent to-blue-50">
         */}
        <div className="flex flex-wrap justify-center p-16 mt-10 gap-14 ">
          {/* <div className="max-w-xl w-full p-10 shadow-lg shadow-slate-300 mx-1 rounded-lg bg-white relative transition-transform transform hover:scale-105 duration-700">
           */}
          <div className="max-w-xl w-full p-10 shadow-lg shadow-slate-300 mx-1 rounded-lg bg-white relative transition-transform transform hover:scale-105 duration-700">
            <div className="absolute -top-10 left-6 w-20 h-20 rounded-full flex justify-center items-center">
              {/* <img src={WoWLogo} className="w-16" /> */}
              <BsFillPeopleFill className="text-5xl" />
            </div>
            <p className="font-normal text-2xl">WE'RE HIRING</p>
            <p className="font-light mt-1 text-sm">
              <p className="text-lg mb-1">Customer Service 1 ตำแหน่ง</p>
              <ul className="">Job description</ul>
              <li>ติดต่อลูกค้าเพื่อยืนยันตัวตน (มี script ให้)</li>
              <li>ตอบคำถามรวมถึงอำนวยความสะดวกให้ลูกค้า</li>
              <li>ประสานงานกับทีมที่เกี่ยวข้องเพื่อแก้ไขปัญหาให้ลูกค้า</li>
              <li>สรุปรายงานยอดประจำวัน</li>
              <ul className="mt-1">Qualification</ul>
              <li>ม.6 ปวส. ปริญญาตรีทุกสาขา ยินดีรับเด็กจบใหม่</li>
              <li>มี service mind</li>
              <li>มีทักษะในการสื่อสาร</li>
              <ul className="mt-1">Benefits</ul>
              <li>รายได้ 17,000 บาท (ฐานเงินเดือน 12,000 + ค่ากะ 5,000)</li>
              <li>โบนัสรายเดือนตามผลงาน 1,500 บาท</li>
              <li>ประกันสังคม</li>
              <li>ประกันชีวิตและอุบัติเหตุ</li>
              <ul className="mt-1">
                สถานที่ทำงาน : World of W ติด BTS รัชโยธิน
              </ul>
              <ul className="mt-1 font-medium">สอบถามเพิ่มเติมติดต่อ</ul>

              <div className="flex flex-wrap justify-start gap-1 mt-2">
                <div>
                  <MdOutlineEmail className="text-lg hover:cursor-pointer relative transition-transform transform hover:scale-105 duration-700" />
                </div>
                <div className="font-light text-sm items-center">
                  wanatchaphon.s@wgroup.co.th
                </div>
                <div>
                  <LuPhone className="text-lg hover:cursor-pointer relative transition-transform transform hover:scale-105 duration-700" />
                </div>
                <div className="font-light text-sm items-center">
                  02-000-8558
                </div>
              </div>
            </p>
            <div className="flex gap-5">
              <div>
                <a
                  href="https://www.jobfinfin.com/job/65df0b933df0b67ec876e64d"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="max-sm:text-xs text-sm mt-3 bg-zinc-300 hover:bg-zinc-400 text-black py-1 px-3 rounded font-light">
                    เพิ่มเติม
                  </button>
                </a>
              </div>
              {/* <div>
                <a
                  href="https://wow-robot-landing.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="max-sm:text-sm mt-4  hover:bg-slate-100 text-black py-1 px-3 rounded font-light">
                    Learn More
                  </button>
                </a>
              </div> */}
            </div>
          </div>

          {/* <div className="max-w-sm w-full p-10 shadow-lg shadow-slate-300 mx-1 rounded-lg bg-white relative transition-transform transform hover:scale-105 duration-700">
            <div className="absolute -top-10 left-6 w-20 h-20 rounded-full flex justify-center items-center ">
              <img src={KruttLogo} alt="" />
            </div>
            <p className="font-normal text-2xl mt-5">Krutt</p>
            <p className="font-light">
              <p className="text-amber-500">One-stop Bitcoin</p> bank The
              one-stop solution for the lightning-fast Bitcoin trading on
              Bitcoin Lightning network
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
          </div> */}
        </div>
      </div>
    </div>
  );
}
