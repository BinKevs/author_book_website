import stoneHenge from "../assets/stoneHengeWhite.png";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { IconContext } from "react-icons";
function FooterPart() {
  return (
    <>
      <footer class="p-4 bg-black shadow  md:p-6 text-white">
        <div className="w-[80%] mx-auto space-y-8">
          {" "}
          <img className="mx-auto" src={stoneHenge} alt="" />
          <div className="flex justify-center space-x-16">
            <a
              href="https://www.facebook.com/stonhenge-literary-media-102558429187060"
              target="_blank"
            >
              <IconContext.Provider value={{ color: "white", size: "2em" }}>
                <FaFacebookSquare />
              </IconContext.Provider>
            </a>
            <a
              href="https://www.instagram.com/stonehengeliterarymedia/"
              target="_blank"
            >
              <IconContext.Provider value={{ color: "white", size: "2em" }}>
                <FaInstagram />
              </IconContext.Provider>
            </a>
            <a href="https://twitter.com/literary_media" target="_blank">
              <IconContext.Provider value={{ color: "white", size: "2em" }}>
                <FaTwitterSquare />
              </IconContext.Provider>
            </a>
          </div>
        </div>
        <div className="md:flex md:items-center md:justify-between w-[80%] mx-auto text-center">
          <span class="text-sm ">
            © 2022 Stonehenge Literary & Media
            <div className="text-center"> All Rights Reserved.</div>
          </span>
          <ul class="flex items-center mt-3 text-sm ">
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                Home
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                About
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Books
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline">
                Reviews
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default FooterPart;
