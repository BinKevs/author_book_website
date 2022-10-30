import { Outlet } from "react-router-dom";
import authorJames from "../assets/authorJames.jpg";

function Author() {
  return (
    <>
      <div className="md:h-[100vh] bg-black relative flex font-Montserrat">
        <div className="m-auto text-white w-[80%] space-y-6">
          <div className="uppercase text-left pl-2 md:text-4xl text-2xl pb-4">
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
            <div className="md:text-lg flex flex-col justify-center text-start ">
              <div className="border-l-8 border-[#2A4C9A] pl-4">
                James B. Anstead's mother fostered a love of literature and
                appreciation of poetry in him. He began his teaching career in
                1977. Away from the classroom, he devotes much of his time to
                basketball. James holds two degrees from Northern Kentucky
                University: a BA in history and an MA in education. He is
                currently employed by the Covington Public Schools in Kentucky.
                His hobbies include reading, listening to music, and
                occasionally singing at a local pub, cooking, and hiking.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Author;
