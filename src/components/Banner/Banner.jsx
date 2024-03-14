import './Banner.scss';
import { GoArrowUpRight } from "react-icons/go";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import Lottie from 'react-lottie';
import about from '../../../public/Animations/about.json'
import { MdCall,MdOutlineAlternateEmail } from "react-icons/md";


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

 const firstImages = [
  { image : './IMG/react.jpg'},
  { image : './IMG/next.jpg'},
  { image : './IMG/typescript.jpg'},
  { image : './IMG/redux.jpg'},
  { image : './IMG/sass.jpg'},
  { image : './IMG/jest.jpg'},
]
 const secondImages = [
  { image : './IMG/docker.jpg'},
  { image : './IMG/express.jpg'},
  { image : './IMG/graphql.png'},
  { image : './IMG/mongo.jpg'},
  { image : './IMG/node.jpg'},
  { image : './IMG/postman.jpg'},
]
 const thirdImages = [
  { image : './IMG/socket.jpg'},
  { image : './IMG/bootstrap.jpg'},
  { image : './IMG/tailwind.jpg'},
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

        <div className="projects">
          <h3>Projects</h3>

          <div className="firstRow">
          <div className="project1" style={{background:`url('./IMG/chatloom.jpeg')`,backgroundSize:'cover'}}>
            <h5>ChatLoom</h5>
          </div>
          <div className="project2" style={{background:`url('./IMG/tron.png')`,backgroundSize:'cover'}}>
            <h5>TronPool</h5>
          </div>
          </div>

          <div className="secondRow">
          <div className="project3" style={{background:`url('./IMG/coride.png')`,backgroundSize:'cover'}}>
            <h5>CoRide</h5>
          </div>
          <div className="project4" style={{background:`url('./IMG/zoo.png')`,backgroundSize:'cover'}}>
            <h5>Animal-Kingdom</h5>
          </div>
          <div className="project5" style={{background:`url('./IMG/catalyst.png')`,backgroundSize:'cover'}}>
            <h5>Catalyst</h5>
          </div>
          </div>
        </div>

        <div className="AboutContainer">
          <h3>About Me</h3>
          <div className="about">
          <Lottie width={'30%'}
          options={{
            loop: true,
              autoplay: true,
              animationData: about
            }}/>
          <div className="iconsContainer">
            <div className="first">
              {firstImages.map((image,i)=>(
              <div className="images" key={i} style={{backgroundImage: `url(${image.image})`}}></div>
            ))}
            </div>
            <div className="first">
              {secondImages.map((image,i)=>(
              <div className="images" key={i} style={{backgroundImage: `url(${image.image})`}}></div>
            ))}
            </div>
            <div className="first">
              {thirdImages.map((image,i)=>(
              <div className="images" key={i} style={{backgroundImage: `url(${image.image})`}}></div>
            ))}
            </div>
           </div>
        </div>
        </div>

        <div className="connectContainer">
          <h3>Connect With Me</h3>
          <h2><MdCall className='icon'/> +91 9605155858</h2>
          <h2><MdOutlineAlternateEmail className='icon'/> shuaibsalam.dev@gmail.com</h2>
          <h2><IoLogoLinkedin className='icon'/> shuaib-salam</h2>
          <h2><FaSquareGithub className='icon'/> shhoib</h2>
        </div>
    </section>
  )
}

export default Banner;