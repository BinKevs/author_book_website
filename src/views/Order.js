import aroundTheWorldFandB from "../assets/aroundTheWorldFandB.jpg";
import { AiOutlineAmazon } from "react-icons/ai";
import { IconContext } from "react-icons";
function Order() {
  return (
    <div className="h-[70vh] mt-[88px] bg-black ">
      <div className="mx-auto w-[80%] text-white ">
        <div className="">
          <div className="text-7xl font-bold py-6 uppercase text-white">
            Order Details
          </div>
          <div className="flex space-x-12 pt-[100px] ">
            <div>
              <img className="max-w-[480px]" src={aroundTheWorldFandB} alt="" />
            </div>
            <div className="flex space-x-8 my-auto text-white">
              <div>
                <div class="max-w-md rounded-lg ">
                  <div class="p-5">
                    <h5 class="mb-2 text-6xl font-bold tracking-tight #2A4C9A">
                      Kindle
                    </h5>
                    <h5 class="mb-2 text-4xl font-bold tracking-tight ">
                      $2.99
                    </h5>
                    <div class="mb-3 font-normal space-y-4">
                      <div>Print length : 36 pages</div>
                      <div> Language: English </div>
                      <div> File size : 943 KB</div>
                      <div> KB ASIN : B09FRY2XMD</div>
                    </div>
                    <a
                      href="#"
                      class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#FF9900] rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 "
                    >
                      BUY NOW ON
                      <div>
                        <IconContext.Provider
                          value={{ color: "white", size: "2em" }}
                        >
                          <AiOutlineAmazon />
                        </IconContext.Provider>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div class="max-w-md rounded-lg ">
                  <div class="p-5">
                    <h5 class="mb-2 text-6xl font-bold tracking-tight #2A4C9A">
                      Hardcover
                    </h5>
                    <h5 class="mb-2 text-4xl font-bold tracking-tight">
                      $15.99
                    </h5>
                    <div class="mb-3 font-normal space-y-4">
                      <div>Print length : 48 pages</div>
                      <div>Language: English </div>
                      <div>ISBN-10 : 164753724X</div>
                      <div>ISBN-13 : 978-1647537241</div>
                    </div>
                    <a
                      href="#"
                      class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#FF9900] rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 "
                    >
                      BUY NOW ON
                      <div>
                        <IconContext.Provider
                          value={{ color: "white", size: "2em" }}
                        >
                          <AiOutlineAmazon />
                        </IconContext.Provider>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div class="max-w-md rounded-lg ">
                  <div class="p-5">
                    <h5 class="mb-2 text-6xl font-bold tracking-tight #2A4C9A">
                      Paperback
                    </h5>
                    <h5 class="mb-2 text-4xl font-bold tracking-tight ">
                      $9.99
                    </h5>

                    <div class="mb-3 font-normal space-y-4">
                      <div> Print length : 48 pages</div>
                      <div> Language: English </div>
                      <div> ISBN-10 : 1647537169</div>
                      <div> ISBN-13 : 978-1647537166</div>
                    </div>
                    <a
                      href="#"
                      class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#FF9900] rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 "
                    >
                      BUY NOW ON
                      <div>
                        <IconContext.Provider
                          value={{ color: "white", size: "2em" }}
                        >
                          <AiOutlineAmazon />
                        </IconContext.Provider>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
