import React from 'react'
import Head from 'next/head'
import Navbar from '@/components/ui/Navbar'


function index() {
    return (
        <>
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@100..900&display=swap"
      rel="stylesheet"
    />
    <title>Betashifts</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Fan My - Your Fan Page Solution" />
    <link rel="icon" href="https://img5.pic.in.th/file/secure-sv1/IMG_5312-3f730e01f9d9e550e.png" />
    </Head>
           <div>
  <Navbar />
</div>

{/* เอฟเฟกต์พื้นหลัง */}
<div className="absolute right-[11rem] top-[-6rem] -z-[10] h-[31.25rem] w-[31.25rem] flex-1 rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#946263] sm:w-[68.75rem]"></div>
<div className="absolute left-[-35rem] top-[-1rem] -z-[10] h-[31.25rem] w-[50rem] flex-1 rounded-full bg-[#dbd7fb] blur-[10rem] dark:bg-[#676394] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

{/* ส่วนบริการของเรา */}
<div className="flex flex-col items-start justify-center mt-40 px-4 max-w-7xl mx-auto">
  <h2 className="text-4xl font-bold mb-4 text-zinc-700">
    บริการของเรา 
  </h2>
   <h2 className="text-4xl font-bold mb-4 text-zinc-700">
    คุ้มค่า ทันสมัย พร้อมดูแลคุณ
  </h2>
<p className="text-lg text-zinc-600 mb-20 max-w-3xl">
  สร้างเว็บไซต์ได้ง่ายกว่าที่เคย <span className="font-semibold text-zinc-800">ในงบประมาณที่เป็นมิตร</span><br />
  ทุกอย่างที่คุณต้องการ ไม่ว่าจะเปิดร้านออนไลน์ หรือออกแบบเว็บไซต์เฉพาะทาง  
  มาพร้อม <span className="font-medium">เซิร์ฟเวอร์เร็ว แรง เสถียร</span> และระบบตรวจสอบสลิปอัตโนมัติ  
  ใช้งานง่าย ปลอดภัยด้วย <span className="font-medium">ระบบป้องกันขั้นสูง</span> และมีทีมงานคอย <span className="font-semibold">ดูแลคุณตลอด 24 ชั่วโมง</span>
</p>



  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl w-full">
    {/* การ์ดบริการที่ 1 */}
    <div className="border rounded-xl shadow-sm p-6 bg-white">
      <div className="flex items-center space-x-3 mb-4">
        <div>
          <h3 className="text-base font-semibold text-zinc-700">เช่าเว็บไซส์</h3>
          <p className="text-sm text-zinc-500">ร้านค้าที่ดีที่สุดและระบบการจัดการที่เข้าใจคุณ</p>
        </div>
      </div>
      <p className="text-sm text-zinc-500">เริ่มต้นเพียง</p>
      <h4 className="text-3xl font-bold text-zinc-600 mb-1">99 <span className="text-xl">บาท / เดือน</span></h4>
      <a href="https://www.facebook.com/profile.php?id=100087575394420">
 <button className="w-full max-w-xs mx-auto mt-2 mb-4 px-4 py-2 bg-zinc-100 text-zinc-700 rounded-lg text-sm hover:bg-zinc-200 transition block text-center">
  เริ่มต้นใช้งาน
</button>
</a>
      <ul className="text-sm text-zinc-600 list-disc list-inside space-y-1">
        <li>ครบจบในราคาเดียวไม่ต้องซื้อฟังก์ชันเพิ่ม</li>
        <li>รองรับการเติมเงินหลากหลายช่องทาง</li>
        <li>ระบบวิเคราะห์ Data ช่วยวางแผนการขาย</li>
        <li>ระบบหลังบ้าน ใช้งานง่าย ยืดหยุ่นสูง</li>
        <li>โหลดเว็บไวทันใจ ลูกค้าไม่ต้องรอ</li>
        
      </ul>
    </div>

    {/* การ์ดบริการที่ 2 */}
    <div className="border rounded-xl shadow-sm p-6 bg-white">
      <div className="flex items-center space-x-3 mb-4">
        {/* <img src="/icons/sms.png" alt="SMS Marketing" className="w-6 h-6" /> */}
        <div>
          <h3 className="text-base font-semibold text-zinc-700">Domain</h3>
          <p className="text-sm text-zinc-500">ระบบส่งข้อความแจ้งเตือนและโปรโมชั่น</p>
        </div>
      </div>
      <p className="text-sm text-zinc-500">เริ่มต้นเพียง</p>
      <h4 className="text-3xl font-bold text-zinc-600 mb-1">50 <span className="text-xl">บาท / โดเมน</span></h4>
      <a href="https://www.facebook.com/profile.php?id=100087575394420">
      <button className="w-full max-w-xs mx-auto mt-2 mb-4 px-4 py-2 bg-zinc-100 text-zinc-700 rounded-lg text-sm hover:bg-zinc-200 transition block text-center">
  เริ่มต้นใช้งาน
    </button>
      </a>
      <ul className="text-sm text-zinc-600 list-disc list-inside space-y-1">
        <li>จดโดเมนใหม่ในชื่อที่คุณต้องการ</li>
        <li>ต่ออายุโดเมนเดิม</li>
        <li>เป็นเจ้าของ 100%</li>
        <li>ราคาเริ่มต้นเพียง 50 บาท/ปี</li>
        <li>บริการปกป้องข้อมูล WHOIS </li>
        <li>ติดตั้ง SSL ฟรีสำหรับโดเมน</li>
      </ul>
    </div>

    {/* การ์ดบริการที่ 3 */}
    <div className="border rounded-xl shadow-sm p-6 bg-white">
      <div className="flex items-center space-x-3 mb-4">
        <div>
          <h3 className="text-base font-semibold text-zinc-700">Web Hosting </h3>
          <p className="text-sm text-zinc-500">เพิ่มโอกาสให้เว็บไซต์ติดอันดับ Google</p>
        </div>
      </div>
      <p className="text-sm text-zinc-500">เริ่มต้นเพียง</p>
      <h4 className="text-3xl font-bold text-zinc-600 mb-1">150 <span className="text-xl">บาท / เดือน</span></h4>
      <a href="https://www.facebook.com/profile.php?id=100087575394420">
      <button className="w-full max-w-xs mx-auto mt-2 mb-4 px-4 py-2 bg-zinc-100 text-zinc-700 rounded-lg text-sm hover:bg-zinc-200 transition block text-center">
  เริ่มต้นใช้งาน
</button>
      </a>
      <ul className="text-sm text-zinc-600 list-disc list-inside space-y-1">
        <li>6 GB SSD</li>
        <li>20 Domains</li>
        <li>ไม่จำกัด Subdomain</li>
        <li>ไม่จำกัด บัญชี Email</li>
        <li>ไม่จำกัด Databases</li>
        <li>ไม่จำกัด Bandwidth</li>
      </ul>
    </div>

    {/* การ์ดบริการที่ 4 */}
    <div className="border rounded-xl shadow-sm p-6 bg-white">
      <div className="flex items-center space-x-3 mb-4">
        <div>
          <h3 className="text-base font-semibold text-zinc-700">สั่งทำเว็บไซส์</h3>
          <p className="text-sm text-zinc-500">เพิ่มโอกาสให้เว็บไซต์ติดอันดับ Google</p>
        </div>
      </div>
      <p className="text-sm text-zinc-500">เริ่มต้นเพียง</p>
      <h4 className="text-3xl font-bold text-zinc-600 mb-1">1,990 <span className="text-xl">บาท / งาน</span></h4>
      <a href="https://www.facebook.com/profile.php?id=100087575394420">
      <button className="w-full max-w-xs mx-auto mt-2 mb-4 px-4 py-2 bg-zinc-100 text-zinc-700 rounded-lg text-sm hover:bg-zinc-200 transition block text-center">
  เริ่มต้นใช้งาน
</button>
      </a>
      <ul className="text-sm text-zinc-600 list-disc list-inside space-y-1">
        <li>ออกแบบเว็บไซต์ ลงข้อมูลทุกอย่าง</li>
        <li> รองรับมือถือ คอมพิวเตอร์ แท็บเล็ต</li>
        <li> เมนูเว็บไซต์ 1 - 5 หน้า</li>
        <li>มีระบบหลังบ้าน</li>
        <li>รองรับ SEO</li>
        <li>เริ่มต้นราคาประหยัด</li>
      </ul>
    </div>
  </div>
</div>
 <div className='mt-40'></div>
        </>
    )
}

export default index
