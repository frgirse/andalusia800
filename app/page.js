import { archidaught, lontoutline, bowlbyoneSC } from "@/Utils/fonts";
import React from "react";

const Home = ()  => {

  return (
   
        <main className="area-one text-[8rem]">
      <section id='content'  className=" w-full bg-[url('/assets/images/images.webp')] bg-cover md:bg-[url('/assets/images/image.webp') ] lg:bg-cover bg-no-repeat">
      <div className={bowlbyoneSC.className}>
          <h1 className="  bg-white/100 lg:bg-transparent text-center lg:text-[8rem]lg:text-left lg:ml-56">
              Wohntraum< br className='max-md:hidden'/> 
                    <span className='orange_gradient text-center'> Andalusia</span>
          </h1>
      </div>

      </section>
    </main>

    
    
  );
}
export default Home