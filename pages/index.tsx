import React from 'react'
import Head from 'next/head'
import Navbar from '@/components/ui/Navbar'
import Intro from '@/components/ui/Intro' // Removed unused import

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
   <div className="absolute right-[11rem] top-[-6rem] -z-[10] h-[31.25rem] w-[31.25rem] flex-1 rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#946263] sm:w-[68.75rem]"></div>
        <div className="absolute left-[-35rem] top-[-1rem] -z-[10] h-[31.25rem] w-[50rem] flex-1 rounded-full bg-[#dbd7fb] blur-[10rem] dark:bg-[#676394] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        <Intro />
       
        
        </>
    )
}

export default index
