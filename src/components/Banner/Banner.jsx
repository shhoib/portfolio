import './Banner.scss';
import { GoArrowUpRight } from "react-icons/go";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import Lottie from 'react-lottie';
import about from '../../../public/Animations/about.json'
import { MdCall,MdOutlineAlternateEmail } from "react-icons/md";
import {motion} from 'framer-motion'


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
            <motion.div className="textContainer" initial={{x:'-150%'}} animate={{x:0}} transition={{type: "spring",damping: 10,delay:'0.5'}}>
                <h3>MERN Stack Developer</h3>
                <motion.h1 initial={{x:'-150%'}} animate={{x:0}} transition={{type: "spring",damping: 9,delay:'0.8'}}>Hello! I'm <br /> <span>Shuaib </span>Salam</motion.h1>
                <h6>As a MERN stack developer, I leverage my expertise in React.js,Next.js ,MongoDB, Express.js and Node.js to craft robust and scalable web applications that meet the needs of modern businesses.</h6>
                <button>Lets Talk <GoArrowUpRight/></button>
                <div className="socialContainer">
                    <h6>Check Out My</h6>
                    <hr />
                    <a href="https://www.linkedin.com/in/shuaib-salam/"> <IoLogoLinkedin/></a>
                     <a href="https://github.com/shhoib"><FaSquareGithub/></a>  
                </div>
            </motion.div>
        <img src="./IMG/shuaibIMG.png" alt="" />
        </div>

        <div className="IDOsection">
          <motion.h2 initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:.2}}>Best Services</motion.h2>
          <motion.h1 initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:.4}}>WHAT CAN I DO FOR YOU</motion.h1>
          <motion.h6 initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:.6}}>I offer expertise in building dynamic and responsive web applications using the MERN stack, ensuring seamless user experiences and scalable solutions tailored to meet your specific business needs</motion.h6>  
          <motion.div className="numberContainer" initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:.8}}>
            { statistics.map((value,i)=>(
              <div key={i}>
                <h1>{value.number}<span>+</span></h1>
                <h5>{value.text}</h5>
              </div>
            ))
            }
          </motion.div>
          <div className="servicesContainer">
            {services.map((value,i)=>(
              <section key={i}>
              <motion.div className="imageContainer" initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:1, duration:4}}
              style={{backgroundImage: `url(${value.IMG})`}}></motion.div>
              <h3>{value.text}</h3>
              </section>
            ))}
          </div>
        </div>

        <div className="projects">
          <h3>Projects</h3>

          <div className="firstRow">
          <motion.div className="project1" initial={{x:'-120%'}} whileInView={{x:0}}
             style={{background:`url('./IMG/chatloom.jpeg')`,backgroundSize:'cover'}}>
            <h5>ChatLoom</h5>
          </motion.div>
          <motion.div className="project2" initial={{x:'120%',y:'90%'}} whileInView={{x:0,y:0}}
             style={{background:`url('./IMG/tron.png')`,backgroundSize:'cover'}}>
            <h5>TronPool</h5>
          </motion.div>
          </div>

          <div className="secondRow">
          <motion.div className="project3" initial={{x:'-100%'}} whileInView={{x:0}}
             style={{background:`url('./IMG/coride.png')`,backgroundSize:'cover'}}>
            <h5>CoRide</h5>
          </motion.div>
          <motion.div className="project4" initial={{y:'-150%'}} whileInView={{y:0}}
            style={{background:`url('./IMG/zoo.png')`,backgroundSize:'cover'}}>
            <h5>Animal-Kingdom</h5>
          </motion.div>
          <motion.div className="project5"  initial={{x:'100%'}} whileInView={{x:0}} transition={{type:'spring',damping:'1'}}
          style={{background:`url('./IMG/catalyst.png')`,backgroundSize:'cover'}}>
            <h5>Catalyst</h5>
          </motion.div>
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
            <motion.div className="first" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:3}}>
              {firstImages.map((image,i)=>(
              <div className="images" key={i} style={{backgroundImage: `url(${image.image})`}}></div>
            ))}
            </motion.div>

            <motion.div className="first" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:4,delay:1}}>
              {secondImages.map((image,i)=>(
              <div className="images" key={i} style={{backgroundImage: `url(${image.image})`}}></div>
            ))}
            </motion.div>

            <motion.div className="first" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:5,delay:2}}>
              {thirdImages.map((image,i)=>(
              <div className="images" key={i} style={{backgroundImage: `url(${image.image})`}}></div>
            ))}
            </motion.div>
           </div>
        </div>
        </div>

        <div className="connectContainer">
          <h3>Connect With Me</h3>
          <div className="connect">
           <h2><MdCall className='icon'/> +91 9605155858</h2>
           <h2><MdOutlineAlternateEmail className='icon'/> shuaibsalam.dev@gmail.com</h2>
           <h2><IoLogoLinkedin className='icon'/> shuaib-salam</h2>
           <h2><FaSquareGithub className='icon'/> shhoib</h2>
          </div>
        </div>
    </section>
  )
}

export default Banner;