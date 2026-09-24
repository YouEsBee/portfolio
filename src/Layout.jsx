import { Outlet, ScrollRestoration } from "react-router-dom";
import NavBar from "./navbar";
import { ScrollButton } from "./siteFeatures";
import Footer from "./footer";

export default function Layout() {
  return (
    <>
      <div className="min-h-screen flex flex-col dark:bg-[#1b1b1b] overflow-hidden">
        <NavBar/>

        {/* Padding to prevent nav bar cutting off content */}
        <main className="pt-22 md:pt-30 px-3 md:px-30 flex-1">
          <Outlet/>
          
          <ScrollButton/>
        </main>

        <Footer/>
      </div>

      <ScrollRestoration/>
      
    </>
    
  );
}