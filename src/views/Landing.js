import aroundTheWorldVideo from "../assets/spaceEarthTemplate.mp4";
import HollywoodBookReviewLogo from "../assets/HollywoodBookReviewLogo.png";
import authorJames from "../assets/authorJamesRemoveBg.png";

function Landing() {
  return (
    <>
      <div className=" overflow-hidden relative md:mt-[88px] mt-[82px] bg-black">
        <video
          className="xl:!min-w-[100vw] lg:!min-w-[120vw] md:!min-w-[250vw] !min-w-[350vw]"
          loop
          autoPlay
          muted
        >
          <source src={aroundTheWorldVideo} type="video/mp4" />
          <source src={aroundTheWorldVideo} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-1/2 -translate-y-1/2 text-white md:text-7xl text-2xl font-Montserrat font-bold ">
          <div className="flex md:flex-row flex-col justify-center">
            <div className="space-y-6 md:w-[20%] w-[60%] text-center  mx-auto ">
              <div>Around The World In Five Lines </div>

              <div className=" text-gray-200 md:text-lg text-md">
                BUY "Around The World In Five Lines"
              </div>
              <a
                href="https://www.amazon.com/Around-World-Lines-James-Anstead-ebook/dp/B09FRY2XMD/ref=sr_1_1?crid=2YPXSXXLL2JPZ&keywords=around+the+world+in+five+lines+james+b+anstead&qid=1666881346&sprefix=around+the+world+in+five+lines+james+b+anstea%2Caps%2C310&sr=8-1"
                target="_blank"
              >
                <div class="focus:outline-none text-white bg-[white] hover:bg-gray-600 active:bg-gray-800 font-medium rounded-lg text-md px-5 md:py-2.5 py-3.5 md:max-w-[270px] max-w-[170px] mx-auto">
                  <img
                    className="pt-2 "
                    src="https://jamesanstead.com/wp-content/uploads/2021/02/580b57fcd9996e24bc43c518-1-300x60.png"
                    alt=""
                  />
                </div>
              </a>
            </div>
            <div className="md:w-[580px] w-[230px]  mx-auto md:order-last order-first">
              <img
                className=""
                src="https://jamesanstead.com/wp-content/uploads/2021/04/FrontBook-Paperback-1024x1019.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-black">
        <div className="text-white w-[75%] mx-auto pt-[80px]">
          <div className="lg:text-7xl md:text-5xl text-4xl  pl-2 pb-4">
            Author James B. <span className="text-[#2A4C9A]">Ansted</span>
          </div>
          <div className="flex md:flex-row flex-col">
            <div className=" md:min-w-[380px] min-w-[180px] max-w-[380px] md:border-r-8 md:border-b-0 border-b-8 border-[#2A4C9A] mx-auto">
              <img className="" src={authorJames} alt="" />
            </div>
            <div className="md:text-4xl sm:text-2xl text-lg md:text-start text-center flex flex-col justify-center">
              <div className=" md:pl-8">
                James B. Anstead's mother fostered a love of literature and
                appreciation of poetry in him. He began his teaching career in
                1977. Away from the classroom, he devotes much of his time to
                basketball. James holds two degrees from Northern Kentucky
                University: a BA in history and an MA in education. He is
                currently employed by the Covington Public Schools in Kentucky.
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center h-[60vh]">
          <div className="flex flex-col justify-center w-[75%]">
            <div className="space-y-8">
              <div className=" text-white sm:text-7xl text-5xl">
                Book talks on <span className="text-[#1DB954]">Spotify</span>{" "}
              </div>{" "}
              <iframe
                className=""
                src="https://open.spotify.com/embed/episode/4PC80sEavmd25UQdb8Vqih?utm_source=generator&theme=0"
                width="100%"
                height="280"
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="w-[75%] mx-auto">
          <div className="md:w-[50%]">
            <div className="py-6 uppercase ">
              <img
                className="w-[550px]"
                src="https://d1fd687oe6a92y.cloudfront.net/img/kir_images/logo/kirkus-nav-logo.svg"
                alt=""
              />
            </div>
            <div className="text-gray-300 text-lg border-l-4 pl-4 border-[#13699B] ml-8">
              A book of poetry that works a classic form for all it’s worth. “Do
              not try to do everything. Do one thing well.” So said the late
              Steve Jobs, giving advice that debut poet Anstead seems to have
              taken quite seriously. The latter’s new collection does one thing
              and one thing only: the limerick.
            </div>
          </div>
        </div>
        <div className="w-[75%] mx-auto">
          <div className="md:w-[50%] md:ml-auto">
            <div className="py-6 uppercase ">
              <img
                className="w-[550px]"
                src="https://www.pacificbookreview.com/wp-content/uploads/2016/02/pbr-logo-long-transparent-23.png"
                alt=""
              />
            </div>
            <div className="text-gray-300 text-lg text-right border-r-4 pr-4 border-[#54447F] mr-8">
              One of life’s greatest adventures which people strive to have in
              their lives at one point or another is the ability to travel.
              Growing up in a specific country and learning about the world
              around us, many people have the desire, and for some the need, to
              travel and visit these faraway lands which make up our planet.
              Whether it is to immerse ourselves in a different culture, see
              historical landscapes, or meet new friends, travel has a way of
              giving us a well-rounded picture of what makes up our planet.
            </div>
          </div>
        </div>
        <div className="w-[75%] mx-auto">
          <div className="md:w-[50%] ">
            <div className="py-6 uppercase ">
              <img className="w-[550px]" src={HollywoodBookReviewLogo} alt="" />
            </div>
            <div className="text-gray-300 text-lg border-l-4 pl-4 border-[#FFFE98] ml-8">
              Limericks have long held a spot in the hearts of children and
              adults alike for their playful themes and strict structure, which
              makes them all the more joyful to read, and poet James B.
              Anstead’s collection is no exception. Anstead’s collection of
              limericks, titled Around the World in Five Lines, is a fun and
              funny assembly.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
