import authorJames from "../assets/authorJames.jpg";
import authorJames2 from "../assets/authorJames2.jpg";
function Author() {
  return (
    <>
      <div className="md:h-[100vh] bg-black relative flex font-Montserrat md:mt-[88px] mt-[82px]">
        <div className="m-auto text-white w-[80%] space-y-6 ">
          <div className="uppercase text-left pl-2 md:text-7xl text-2xl pb-4">
            ABOUT James B. Anstead
          </div>
          <div className="flex md:flex-row flex-col md:space-y-0 space-y-6 md:space-x-6">
            <div className="flex justify-start">
              <img
                className="border-2 rounded-lg md:min-w-[250px]"
                src={authorJames}
                alt=""
              />
            </div>
            <div className="md:text-3xl flex flex-col justify-center text-start ">
              <div className="border-l-8 border-[#2A4C9A] pl-4">
                James B. Anstead's mother fostered a love of literature and
                appreciation of poetry in him. He began his teaching career in
                1977. Away from the classroom, he devotes much of his time to
                basketball.
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:space-y-0 space-y-6 md:space-x-6">
            <div className="md:text-3xl flex flex-col justify-center text-end ">
              <div className="border-r-8 border-[#2A4C9A] pr-4">
                James holds two degrees from Northern Kentucky University: a BA
                in history and an MA in education. He is currently employed by
                the Covington Public Schools in Kentucky. His hobbies include
                reading, listening to music, and occasionally singing at a local
                pub, cooking, and hiking.
              </div>
            </div>
            <div className="flex justify-start md:min-w-[650px]">
              <img className="border-2 rounded-lg" src={authorJames2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Author;
