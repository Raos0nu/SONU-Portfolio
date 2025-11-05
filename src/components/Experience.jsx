import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: 'Research Intern',
      company: 'Indian Institute of Technology, Delhi',
      location: 'Delhi, India',
      period: 'Dec 2024 - Jan 2025',
      description: [
        'Developed machine learning models at IIT Delhi\'s CRDT, achieving 90%+ accuracy in cotton yield prediction and disease detection systems.',
        'Deployed data-driven agricultural solutions benefiting 500+ farmers in Wardha, Maharashtra through advanced analytics and model optimization.',
        'Collaborated with research teams to integrate ML models into production, ensuring robust performance and sustainable farming advancement.',
      ],
      technologies: ['Python', 'Machine Learning', 'Data Analytics', 'Model Optimization'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="glass p-8 rounded-xl mb-8 relative"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 gradient-text">{exp.title}</h3>
                    <div className="flex items-center space-x-2 text-lg text-gray-300 mb-2">
                      <FiBriefcase className="text-primary" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-gray-400">
                      <div className="flex items-center space-x-1">
                        <FiMapPin />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FiCalendar />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mt-6">
                  {exp.description.map((point, pointIndex) => (
                    <motion.li
                      key={pointIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + pointIndex * 0.1 }}
                      className="flex items-start space-x-3 text-gray-300"
                    >
                      <span className="text-primary mt-1">▹</span>
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-6">
                  {exp.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm border border-primary/30"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

