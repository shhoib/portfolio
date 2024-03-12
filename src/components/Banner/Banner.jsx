import './Banner.scss';
import { GoArrowUpRight } from "react-icons/go";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";




const Banner = () => {
  return (
    <section>
        <div className="bannerContainer">
            <div className="textContainer">
                <h3>MERN Stack Developer</h3>
                <h1>Hello! I'm <br /> <span>Shuaib </span>Salam</h1>
                <h6>"As a MERN stack developer, I leverage my expertise in MongoDB, Express.js, React.js,Next.js and Node.js to craft robust and scalable web applications that meet the needs of modern businesses."</h6>
                <button>Lets Talk <GoArrowUpRight/></button>
                <div className="socialContainer">
                    <h6>Check Out My</h6>
                    <hr />
                    <a href="https://www.linkedin.com/in/shuaib-salam/"> <IoLogoLinkedin/></a>
                     <a href="https://github.com/shhoib"><FaSquareGithub/></a>  
                </div>
            </div>
        <img src="./IMG/shuaibIMG.png" alt="" />
        </div>
    </section>
  )
}

export default Banner