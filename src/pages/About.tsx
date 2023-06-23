import styles from '../style'

const About = () => {
  return (
    <div>
      <div className={`${styles.paddingX} mt-6 ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <h2 className="font-poppins font-semibold text-white text-4xl md:text-6xl flex justify-center">
            About
          </h2>
          <p className="font-poppins font-normal text-dimWhite text-lg leading-8 mt-2  flex justify-center">
            Nothing here yet! Sorry!
          </p>
        </div>
      </div>
    </div>
  )
}

export default About