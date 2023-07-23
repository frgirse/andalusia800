import { archidaught, lontoutline } from "@/Utils/fonts";
import React from "react";

export default async function Home() {

  return (
    <div className="w-full overflow-x-hidden flex-col h-2/3" >
        <main className="area-one text-[8rem]">
      <section  className="h-full w-full bg-[url('assets/images/images.webp')] bg-cover md:bg-[url('/assets/images/image.webp') ] lg:bg-cover bg-no-repeat">
      <div className={lontoutline.className}>
          <h1 className="head_xttext bg-white/60 lg:bg-transparent text-center lg:text-[8rem]lg:text-left lg:ml-56">
              Wohntraum
           <br
                  className='max-md:hidden' />
                    <span className='orange_gradient text-center'> Andalusia</span>
          </h1>
      </div>

      </section>
    </main>

    </div>
    
  );
}
