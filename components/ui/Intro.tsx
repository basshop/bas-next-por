import React, { useState } from 'react'
import { Menu, Home, ShoppingBag, CreditCard, LogIn, UserPlus, Search } from "lucide-react"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

function Intro() {
  const [open, setOpen] = useState(false)
  const [language, setLanguage] = useState('en')





  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'th' : 'en'))
  }

  return (
    <>
      {/* เนื้อหาหลัก */}
      <div className="flex flex-col items-center justify-center mt-20 space-y-6 ml-8 sm:ml-0">
        {/* รูป */}
        <div className="w-42 h-42 sm:w-50 sm:h-50 rounded-full border-2 border-white overflow-hidden shadow-lg animate-bounce-in">
          <img
            src="https://img2.pic.in.th/pic/image0c9bb89e04d5103a.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* ข้อความ */}
        <div className="flex flex-col items-center justify-center text-center animate-scroll-text">
          <h1 className="mb-10 mt-4 px-4 text-2xl sm:text-4xl">
            <span className="font-medium !leading-[1.5]">
              <span className="text-xl sm:text-2xl">Hi, my name is </span>
              Anupap Srisawat
              <br />
              <span className="text-xl sm:text-2xl">
                I am a programmer{" "}
              </span>
              in Bangkok 🥰
            </span>
            <p className="text-[20px] mt-2">
              I hope to get a job soon because I have no money left.🤩
            </p>
          </h1>
        </div>

        {/* คำอธิบาย */}
        <p className="text-zinc-500 w-full max-w-xl text-1xl px-2 py-1 text-center animate-scroll-text">
          บริการปล่อยเช่าเว็บไซต์เริ่มต้นแค่ 99 บาทดำเนินธุรกิจออนไลน์ โดยผู้เช่าสามารถใช้ฟีเจอร์ต่างๆ
          ที่พัฒนาไว้ เช่น ระบบมินเกม ระบบชำระเงิน ระบบโซเชียล หรือหน้าโปรไฟล์ร้านค้า
          โดยไม่ต้องสร้างเว็บไซต์เองและรับทำเว็บแอปพลิเคชันตามความต้องการของลูกค้า
        </p>

        {/* ปุ่ม */}
        <div className="flex space-x-4 justify-center animate-scroll-text delay-500">
          <a
            href="serve"
            className="px-5 py-2 rounded-lg bg-[#5672cd] hover:bg-[#3a5ccc] transition text-white sm:ml-3"
          >
            ดูบริการ
          </a>
          <button
            onClick={() => setOpen(true)}
            className="px-5 py-2 rounded-lg bg-[#ebebef] hover:bg-[#e6e6e6] transition"
          >
            ติดต่อฉัน
          </button>
        </div>
      </div>

      {/* Modal (ใช้ shadcn/ui Sheet) */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="bottom"
          className="max-w-md mx-auto rounded-t-2xl p-6 animate-[sheet-mac-in_0.4s_ease]"
          style={{
            boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
            background: "rgba(255,255,255,0.95)",
            borderTopLeftRadius: "1.5rem",
            borderTopRightRadius: "1.5rem",
          }}
        >
          <h2 className="text-lg font-bold mb-4 text-center">ช่องทางการติดต่อ</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center border rounded-xl p-3 bg-muted shadow-sm hover:shadow-md transition">
              <img
                className="w-10 h-10 rounded-md mr-4 object-contain"
                src="https://img5.pic.in.th/file/secure-sv1/image6e10e8d0a80f3af0.png"
                alt="Instagram"
              />
              <div>
                <div className="font-semibold">เบอร์โทร</div>
                <div className="text-sm text-muted-foreground">061-0618142</div>
              </div>
            </div>
            <div className="flex items-center border rounded-xl p-3 bg-muted shadow-sm hover:shadow-md transition">
              <img
                className="w-10 h-10 rounded-md mr-4 object-contain"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBsOYTIsKfhK7N5OHsHX-mUuxfADjwYMq1RA&s"
                alt="Instagram"
              />
              <div>
                <div className="font-semibold">อีเมล</div>
                <div className="text-sm text-muted-foreground">755jkm@gmail.com</div>
              </div>
            </div>
            <div className="flex items-center border rounded-xl p-3 bg-muted shadow-sm hover:shadow-md transition">
              <img
                className="w-10 h-10 rounded-md mr-4 object-contain"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/330px-Instagram_logo_2022.svg.png"
                alt="Instagram"
              />
              <div>
                <div className="font-semibold text-gray-800">IG</div>
                <div className="text-sm text-muted-foreground">anupap_xi</div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* About Me พร้อมปุ่มแปลภาษา */}
      <div className="flex flex-col items-center justify-center mt-30 space-y-6 ml-8 sm:ml-0">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-zinc-500 w-full max-w-xl text-1xl px-2 py-1 text-center animate-scroll-text">
          Hello! My name is Aunpap, but you can call me Bas. Honestly, I’m currently looking for a job, but haven’t been hired yet. I just want to try working to earn some money for living expenses.

I’m passionate about programming and new technologies, especially in Web Development. I enjoy creating websites and applications that are easy to use, user-friendly, and look great on every screen.

I have experience working with technologies like HTML, CSS, JavaScript, React, PHP, and MySQL, and I’m continuously developing my skills on both the frontend and backend sides.

Besides coding, I’m also interested in UI/UX design, teamwork, and applying new ideas to real projects. I believe these things make the work not just “functional,” but truly “pleasant to use.
        </p>  <button
          onClick={toggleLanguage}
          className="mb-1 px-1 py-1 rounded-lg bg-[#ebebef] hover:bg-[#e6e6e6] text-zinc-500 transition"
        >
          {language === 'en' ? 'แปลภาษา' : 'English'}
        </button>
      </div>
       <div className="flex flex-col items-center justify-center mt-30 space-y-6 ml-8 sm:ml-0">
  {/* <h2 className="text-2xl font-bold mb-4">Projects</h2> */}

  {/* กล่องโปรเจกต์ที่ 1 */}
 
</div>

    </>
  )
}

export default Intro
