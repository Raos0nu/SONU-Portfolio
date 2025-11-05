import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiGo,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGit,
  SiFlask,
  SiAngular,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGithubactions,
} from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: SiPython, color: 'from-yellow-400 to-yellow-600' },
        { name: 'JavaScript', icon: SiJavascript, color: 'from-yellow-300 to-yellow-500' },
        { name: 'TypeScript', icon: SiTypescript, color: 'from-blue-500 to-blue-700' },
        { name: 'Go', icon: SiGo, color: 'from-cyan-400 to-cyan-600' },
        { name: 'HTML5', icon: SiHtml5, color: 'from-orange-400 to-orange-600' },
        { name: 'CSS3', icon: SiCss3, color: 'from-blue-400 to-blue-600' },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', icon: SiReact, color: 'from-cyan-400 to-blue-600' },
        { name: 'Angular', icon: SiAngular, color: 'from-primary to-secondary' },
        { name: 'TailwindCSS', icon: SiTailwindcss, color: 'from-teal-400 to-cyan-600' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, color: 'from-green-500 to-green-700' },
        { name: 'Express.js', icon: SiExpress, color: 'from-gray-700 to-gray-900' },
        { name: 'Flask', icon: SiFlask, color: 'from-gray-300 to-gray-500' },
      ],
    },
    {
      title: 'Databases & DevOps',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, color: 'from-green-500 to-green-700' },
        { name: 'Docker', icon: SiDocker, color: 'from-blue-500 to-blue-700' },
        { name: 'Kubernetes', icon: SiKubernetes, color: 'from-blue-400 to-blue-600' },
        { name: 'Jenkins', icon: SiJenkins, color: 'from-blue-600 to-blue-800' },
        { name: 'GitHub Actions', icon: SiGithubactions, color: 'from-gray-700 to-gray-900' },
        { name: 'Git', icon: SiGit, color: 'from-orange-500 to-orange-700' },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="glass p-6 rounded-xl"
              >
                <h3 className="text-2xl font-semibold mb-6 text-center">{category.title}</h3>
                <div className="grid grid-cols-3 gap-4">
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = skill.icon
                    return (
                      <motion.div
                        key={skillIndex}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer group"
                      >
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-3xl text-white group-hover:shadow-lg transition-shadow`}>
                          <Icon />
                        </div>
                        <span className="text-sm text-gray-300 text-center group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

