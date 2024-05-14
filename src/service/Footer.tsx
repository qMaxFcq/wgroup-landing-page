import { FaLine, FaTelegram } from 'react-icons/fa';
import DBD_PIC from '../pic/dbd.png';
import { MdOutlineEmail } from 'react-icons/md';
import { LuPhone } from 'react-icons/lu';

// import { IoIosMail } from 'react-icons/io';

export default function Footer() {
  return (
    // <footer className="bg-gray-800 text-white p-4 text-center bottom-0 w-full">
    //   <p>&copy; 2024 W Group Holding Co., LTD. All rights reserved.</p>
    // </footer>
    <div
      className="py-6 text-gray-900 bg-gradient-to-b from-neutral-100 via-transparent"
      id="footer"
    >
      <div className="flex flex-row gap-1 space-x-2 space-y-0 items-center justify-center flex-shrink-0 mt-6">
        <div className="flex flex-col justify-center">
          <div className="flex justify-center mb-2 font-light">
            ร่วมเป็นส่วนหนึ่งกับเรา
          </div>
          <div className="text-xs font-light text-center">
            เราเปิดรับความคิดเห็นและไอเดียใหม่ๆ รวมถึงโปรเจกต์ใหม่ๆ
            หากคุณมีโครงการหรือไอเดียที่น่าสนใจ
            ติดต่อเราและสร้างความเป็นไปได้ในการทำงานร่วมกัน
          </div>
          <div className="flex flex-row justify-center gap-1 mt-2">
            <div>
              <MdOutlineEmail className="text-lg hover:cursor-pointer relative transition-transform transform hover:scale-105 duration-700" />
            </div>
            <div className="font-light text-sm items-center">
              wanatchaphon.s@wgroup.co.th
            </div>
            <div>
              <LuPhone className="text-lg hover:cursor-pointer relative transition-transform transform hover:scale-105 duration-700" />
            </div>
            <div className="font-light text-sm items-center">02-000-8558</div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-evenly mt-5 max-sm:justify-center max-sm:flex-col max-sm:items-center max-sm:gap-3 max-sm:mt-5">
        <div className="items-center">
          <p className="mb-1 text-[10px] font-normal tracking-widest uppercase text-black">
            บริษัท ดับบลิวกรุ๊ป โฮลดิ้ง จำกัด
          </p>
        </div>
        <div>
          <a
            href="https://drive.google.com/file/d/1itv3t-sl14wfVFYy6z820RkUMMA7r0Wi/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={DBD_PIC}
              className="max-w-[100px] text-sky-400 hover:cursor-pointer transition-transform transform hover:scale-105 duration-700"
            />
          </a>
        </div>
        <div className="flex gap-2">
          <div>
            <FaTelegram className="text-4xl text-sky-400 hover:cursor-pointer transition-transform transform hover:scale-105 duration-700" />
          </div>
          <div>
            <FaLine className="text-4xl text-green-500 hover:cursor-pointer transition-transform transform hover:scale-105 duration-700" />
          </div>
        </div>
      </div>
    </div>
  );
}
