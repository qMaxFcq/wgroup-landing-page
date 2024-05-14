export default function CompanyDNA() {
  return (
    <div>
      <div className="text-center">
        <p
          className="text-4xl font-medium underline underline-offset-8 "
          id="companyDNA"
        >
          COMPANY DNA
        </p>
      </div>

      <div className="flex flex-wrap justify-center p-16 mt-10 gap-14 bg-gradient-to-b from-transparent via-transparent to-blue-50 mb-10 ">
        {/* <div className="flex flex-wrap justify-center p-16 mt-10 gap-14 "> */}
        <div className="max-w-md w-full p-10 shadow-lg shadow-slate-300 mx-1 rounded-lg bg-white relative transition-transform transform hover:scale-105 duration-700">
          <div className="absolute -top-10 right-[180px] w-20 h-20 rounded-full flex justify-center items-center">
            <div className="absolute w-20 h-20 border-8 border-dashed rounded-full animate-[spin_10s_linear_infinite] border-blue-500"></div>
            <div className="z-10 text-5xl font-medium">A</div>
          </div>
          <ul className="font-normal text-2xl mt-5 text-center">
            <p className="text-emerald-500 inline-block mb-3">A</p>daptability
          </ul>
          <span className="font-light">
            <li>A1 : เรียนรู้จากความผิดพลาด</li>
            <li>
              A2 : สนุกกับความท้าทาย
              {/* <br /> and self-improve. */}
            </li>
            <li>A3 : พร้อมปรับตัว</li>
          </span>
        </div>

        <div className="max-w-md w-full p-10 shadow-lg shadow-slate-300 mx-1 rounded-lg bg-white relative transition-transform transform hover:scale-105 duration-700">
          <div className="absolute -top-10 right-[180px] w-20 h-20 rounded-full flex justify-center items-center ">
            <div className="absolute w-20 h-20 border-8 border-dashed rounded-full animate-[spin_10s_linear_infinite] border-blue-500"></div>
            <div className="z-10 text-5xl font-medium">C</div>
          </div>
          <ul className="font-normal text-2xl mt-5 text-center">
            <p className="text-emerald-500 inline-block mb-3">C</p>ommitment
          </ul>
          <span className="font-light">
            <li>
              C1 : มากกว่าความรับผิด
              <br />
            </li>
            <li>C2 : เชื่อใจได้ ส่งมอบงานคุณภาพ</li>
          </span>
        </div>

        <div className="max-w-md w-full p-10 shadow-lg shadow-slate-300 mx-1 rounded-lg bg-white relative transition-transform transform hover:scale-105 duration-700">
          <div className="absolute -top-10 right-[180px] w-20 h-20 rounded-full flex justify-center items-center ">
            <div className="absolute w-20 h-20 border-8 border-dashed rounded-full animate-[spin_10s_linear_infinite] border-blue-500"></div>
            <div className="z-10 text-5xl font-medium">T</div>
          </div>
          <ul className="font-normal text-2xl mt-5 text-center">
            <p className="text-emerald-500 inline-block mb-3">T</p>eamwork
          </ul>
          <span className="font-light">
            <li>T1 : ยินดีช่วยเหลือ เพื่อความสำเร็จในการร่วมงาน</li>
            <li>T2 : เปิดใจรับฟัง ทุกความคิดมีคุณค่า</li>
            <li>
              T3 : สื่อสารสร้างสรรค์ <br />
            </li>
          </span>
        </div>

        <div className="max-w-md w-full p-10 shadow-lg shadow-slate-300 mx-1 rounded-lg bg-white relative transition-transform transform hover:scale-105 duration-700">
          <div className="absolute -top-10 right-[180px] w-20 h-20 rounded-full flex justify-center items-center ">
            <div className="absolute w-20 h-20 border-8 border-dashed rounded-full animate-[spin_10s_linear_infinite] border-blue-500"></div>
            <div className="z-10 text-5xl font-medium">S</div>
          </div>
          <ul className="font-normal text-2xl mt-5 text-center">
            <p className="text-emerald-500 inline-block mb-3">S</p>uccess
          </ul>
          <span className="font-light">
            <li>S1 : เป้าหมายชัดเจน มุ่งสร้างผลลัพธ์</li>
            <li>S2 : ว้าวได้อีกคิดไปอีกหนึ่งขั้นเพื่อโอกาสที่ดีกว่า</li>
            <li>S3 : สำเร็จร่วมกันสร้างทางเลือกที่ดีมี่สุดสำหรับทุกคน</li>
          </span>
        </div>
      </div>
    </div>
  );
}
