import aroundTheWorld from "../assets/aroundTheWorldWithBG.jpg";
import aroundTheWorldWithBG2 from "../assets/aroundTheWorldWithBG2.jpg";

import Typewriter from "typewriter-effect";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Book() {
  return (
    <>
      <div className="xl:h-screen h-full bg-black relative flex font-Montserrat">
        <div className=" pt-[110px] pb-[30px] m-auto text-white w-[80%] space-y-6">
          <div className="text-5xl font-bold md:hidden block ">
            <Typewriter
              options={{
                strings: [
                  "Around The World In Five Lines",
                  "By James B. Anstead",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="flex flex-col xl:flex-row">
            <Carousel showStatus={false} showArrows={false} autoPlay={true}>
              <div className=" ">
                <img className="max-w-[1600px]" src={aroundTheWorld} alt="" />
              </div>
              <div className="">
                <img
                  className="max-w-[1600px]"
                  src={aroundTheWorldWithBG2}
                  alt=""
                />
              </div>
            </Carousel>

            <div className="md:text-xl text-sm md:space-y-1 space-y-3 flex flex-col justify-evenly  md:ml-16 ">
              <div className="text-5xl font-bold md:block hidden">
                <Typewriter
                  options={{
                    strings: [
                      "Around The World In Five Lines",
                      "By James B. Anstead",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <div className="font-light">Released Date: April 7, 2021</div>
              <div className="font-medium">
                Around the World in Five Lines is a fun and whimsical collection
                of limericks inspired by countries all over the world! An avid
                traveler and dreamer, author James B. Anstead brings to us this
                fun and silly collection of fascination with the limerick and
                its special wordplay. Enjoy!
              </div>
              <div className=" text-gray-400">
                BUY "Around The World In Five Lines"
              </div>
              <a
                href="https://www.amazon.com/Around-World-Lines-James-Anstead-ebook/dp/B09FRY2XMD/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1617999145&sr=1-1"
                target="_blank"
                class="focus:outline-none text-white bg-[white] hover:bg-[#FF9900] font-medium rounded-lg text-md px-5 md:py-2.5 py-3.5 max-w-[220px]"
              >
                <img
                  className="pt-2 "
                  src="https://jamesanstead.com/wp-content/uploads/2021/02/580b57fcd9996e24bc43c518-1-300x60.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Book;
