"use client";
import Navbar from "./UI/navbar";
 
export default function Home() {
  return (
    <>
      <div>
      <div className="min-h-screen bg-gradient-to-r from-violet-500 to-fuchsia-950 p-20 flex flex-col justify-center ">
        <main>
          <Navbar/>
        
      </main>     
      </div>
      </div>
      </>
  );
}