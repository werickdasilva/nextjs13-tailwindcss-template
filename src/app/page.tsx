import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-center my-3">
        NextJs 13 TailWindCss Template
      </h1>
      <Link  
        className="bg-blue-600 py-2 px-3 rounded-md focus:bg-blue-400 hover:bg-blue-400 text-base font-semibold text-white" 
        href='https://github.com/werickdasilva/nextjs13-tailwindcss-template' 
        target='_blank'>
          Github
      </Link>
    </div>
  )
}