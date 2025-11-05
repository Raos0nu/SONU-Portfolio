import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiUser, FiMapPin, FiBook } from 'react-icons/fi'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Developer and Software Engineer currently pursuing my 
                <span className="text-primary font-semibold"> Bachelor of Technology in Computer Science & Engineering</span> at 
                <span className="text-primary font-semibold"> National Institute of Technology, Srinagar</span>.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With a strong foundation in computer science fundamentals and hands-on experience in 
                full-stack development, I specialize in building scalable web applications using modern 
                technologies like React, Node.js, Python, and cloud platforms.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I've had the privilege of working as a Research Intern at IIT Delhi, where I developed 
                machine learning models for agricultural solutions, achieving 90%+ accuracy and impacting 
                500+ farmers. I'm always eager to learn new technologies and contribute to innovative projects.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.05, x: 10 }}
                className="glass p-6 rounded-xl"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                    <FiUser className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Full Stack Developer</h3>
                    <p className="text-gray-400">Software Engineer</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, x: 10 }}
                className="glass p-6 rounded-xl"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-secondary to-primary flex items-center justify-center">
                    <FiMapPin className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Location</h3>
                    <p className="text-gray-400">Haryana, India</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, x: 10 }}
                className="glass p-6 rounded-xl"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                    <FiBook className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Education</h3>
                    <p className="text-gray-400">B.Tech CSE, NIT Srinagar</p>
                    <p className="text-gray-400 text-sm">2022 - 2026</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

