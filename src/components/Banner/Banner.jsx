import './Banner.scss';
import { GoArrowUpRight } from "react-icons/go";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";

const statistics = [
  {
    number : 5,
    text : 'Satisfied Clients'
  },
  {
    number : 4,
    text : 'Projects Completed'
  },
  {
    number : '1',
    text : 'Years Of Experience'
  },
]

const services = [  
  {
    IMG : './IMG/WD.jpg',
    text : 'UI/UX Design'
  },
  {
    IMG : './IMG/WEDE.jpg',
    text : 'Web Development'
  },
  {
    IMG : './IMG/SEO.jpg',
    text : 'SEO'
  },
]


const Banner = () => {
  return (
    <section>
        <div className="bannerContainer">
            <div className="textContainer">
                <h3>MERN Stack Developer</h3>
                <h1>Hello! I'm <br /> <span>Shuaib </span>Salam</h1>
                <h6>As a MERN stack developer, I leverage my expertise in React.js,Next.js ,MongoDB, Express.js and Node.js to craft robust and scalable web applications that meet the needs of modern businesses.</h6>
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

        <div className="IDOsection">
          <h2>Best Services</h2>
          <h1>WHAT CAN I DO FOR YOU</h1>
          <h6>I offer expertise in building dynamic and responsive web applications using the MERN stack, ensuring seamless user experiences and scalable solutions tailored to meet your specific business needs</h6>  
          <div className="numberContainer">
            { statistics.map((value,i)=>(
              <div key={i}>
                <h1>{value.number}<span>+</span></h1>
                <h5>{value.text}</h5>
              </div>
            ))
            }
          </div>
          <div className="servicesContainer">
            {services.map((value,i)=>(
              <section key={i}>
              <div className="imageContainer" style={{backgroundImage: `url(${value.IMG})`}}></div>
              <h3>{value.text}</h3>
              </section>
            ))}
          </div>
        </div>
    </section>
  )
}

export default Banner