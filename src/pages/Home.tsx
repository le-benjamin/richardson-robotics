import styles from '../style'
import { slides } from '../constants'
import Carousel from '../components/Carousel'
import { Link } from 'react-router-dom'
import { frc_logo } from '../assets'

const Home = () => {
  return (
    <div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className="w-full">
          <Carousel slides={slides} autoSlide={true} autoSlideInterval={5000}>
            <div className="w-full h-full flex justify-center items-center text-center backdrop-brightness-50">
              <span className="font-poppins font-semibold text-white text-2xl xs:text-4xl md:text-6xl w-1/2 text-center justify-center items-center">
                Richardson High School Robotics
                <div className="mt-4 flex justify-center items-center">
                  <Link to="/supportus" className=" flex justify-center rounded-full bg-[#651ebf] text-[#ddc600] px-5 py-2 font-poppins md:text-2xl sm:text-xl text-base font-medium cursor-pointer">
                    SUPPORT US
                  </Link>
                </div>
              </span>
            </div>
          </Carousel>
        </div>
      </div>
        
      <div className={`${styles.paddingX} mt-6 ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <div className="flex flex-col items-center md:items-start md:flex-row md:justify-between">
            <div className="w-full md:w-1/2 px-6 flex flex-col items-center">
              <h2 className="font-poppins font-semibold text-white text-4xl md:text-6xl flex justify-center">
                Who We Are
              </h2>
              <p className="font-poppins font-normal text-dimWhite text-lg leading-8 mt-2  flex justify-center">
                Team 8874, The Cybirds, is a FIRST Robotics team founded in 
                2022 at Richardson High School in Richardson, Texas with the 
                goal of fostering innovation, collaboration, and a love for 
                STEM in our community. Through our participation in FRC, we 
                strive to not only achieve success on the field but also to 
                make a positive impact on our community by engaging in outreach 
                that promote STEM awareness and accessibility while also 
                inspiring the next generation of STEM leaders.
              </p>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0 px-6">
              <h2 className="font-poppins font-semibold text-white text-4xl md:text-6xl flex justify-center">
                What We Do
                </h2>
              <p className="font-poppins font-normal text-dimWhite text-lg leading-8 mt-2 flex justify-center">
                As an FRC team, we design, build, and program competitive 
                robots. We prioritize continuous learning, personal growth, 
                and teamwork. Our participation in regional and international 
                competitions showcases our technical prowess and embodies core 
                values like sportsmanship. Through outreach and collaboration, 
                we inspire and educate others about STEM. Together, we make a 
                lasting impact on our members, community, and the future of 
                innovation.
              </p>
            </div>
          </div>

          <div className="mt-9 pt-6 border-t-[1px] border-t-[#3F3E45] flex flex-col items-center  md:flex-row md:justify-between">
            <div className="w-full md:w-1/4 px-6 flex flex-col items-center">
              <Link to="https://www.firstinspires.org/robotics/frc">
                <img src={frc_logo} />
              </Link>
            </div>
            <div className="w-full md:w-3/4 mt-8 md:mt-0 px-6 items-center">
              <p className="font-poppins font-normal text-dimWhite text-lg leading-8 mt-2 flex items-center justify-center">
                The FIRST Robotics Competition (FRC) is an international high 
                school robotics competition where teams of students design, 
                build, and program robots for a yearly game challenge, 
                fostering STEM skills, teamwork, and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home