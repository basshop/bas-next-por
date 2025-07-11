'use client'

import { Menu, Home, ShoppingBag, CreditCard, LogIn, UserPlus, Search } from "lucide-react"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export default function Navbar() {
  return (
    <nav className={cn("shadow-sm p-3 bg-white/80 backdrop-blur-md fixed top-0 left-0 w-full z-50")}>
      <div className="container mx-auto flex justify-between items-center max-w-6xl px-4">
      {/* Logo */}
      <div className="flex items-center space-x-2 mr-8">
        <img src="https://img5.pic.in.th/file/secure-sv1/IMG_5312-3f730e01f9d9e550e.png" alt="logo" className="h-10 w-auto" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 items-center flex-1 justify-start">
        <li className="flex items-center space-x-1 text-base text-gray-700 hover:text-[#3a5ccc]">
          <a href="/">หน้าหลัก</a>
        </li>
        <li className="flex items-center space-x-1 text-base text-gray-700 hover:text-[#3a5ccc]">
          <a href="serve">บริการ</a>
        </li>
        <li className="flex items-center space-x-1 text-base text-gray-700 hover:text-[#3a5ccc]">
          <a href="#">ผลงาน</a>
        </li>
         <li className="flex items-center space-x-1 text-base text-gray-700 hover:text-[#3a5ccc]">
          <a href="https://www.facebook.com/profile.php?id=100087575394420">ติดต่อเรา</a>
        </li>
      </ul>

      {/* Search + Buttons */}
      <div className="hidden md:flex items-center space-x-4 ml-auto">
        <a href="https://www.facebook.com/profile.php?id=100087575394420">
        <Button
            className="w-full rounded-[10px] bg-gradient-to-r from-[#5672cd] via-[#5672cd] to-[#5672cd] border-none transition-opacity duration-300 text-white hover:opacity-90"
                >
          เริ่มต้นใช้งาน
        </Button>
        </a>
      </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-gray-800" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] sm:w-[300px] bg-white/90 backdrop-blur-md">
              <div className="pt-15 space-y-5">
                <ul className="flex flex-col space-y-4 text-gray-700 ">
                  <li className="flex items-center space-x-0 ">
                    <div className="h-5 w-5 " />
                    <a href="/">หน้าหลัก</a>
                  </li>
                  <li className="flex items-center space-x-0">
                    <div className="h-5 w-5 " />
                    <a href="serve">บริการ</a>
                  </li>
                  <li className="flex items-center space-x-0">
                    <div className="h-5 w-5" />
                    <a href="#">ทีมงาน</a>
                  </li>
                   <li className="flex items-center space-x-0">
                    <div className="h-5 w-5" />
                    <a href="https://www.facebook.com/profile.php?id=100087575394420">ติดต่อเรา</a>
                  </li>
                </ul>

                <div className="flex items-center text-sm text-gray-500 py-2">
                  <hr className="flex-grow border-t border-gray-300" />
                  <span className="px-3 whitespace-nowrap">เริ่มต้นกับเรา</span>
                  <hr className="flex-grow border-t border-gray-300" />
                </div>

                <div className="flex items-center justify-between px-1">
                
                  <a href="#" className="flex items-center space-x-2 text-gray-700">
                    <div className="h-5 w-5" />
                    <a href="https://www.facebook.com/profile.php?id=100087575394420">
                    <Button
                      className="w-full rounded-[10px] bg-gradient-to-r from-[#5672cd] via-[#5672cd] to-[#5672cd] border-none transition-opacity duration-300 text-white hover:opacity-90"
                    >
                      เริ่มต้นใช้งาน
                    </Button>
                    </a>
                    
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
