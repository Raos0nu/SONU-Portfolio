import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import {
  SiReact,
  SiTypescript,
  SiFlask,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiAngular,
  SiNodedotjs,
  SiExpress,
  SiFigma,
  SiJenkins,
  SiGithubactions,
  SiGrafana,
  SiPython,
  SiTensorflow,
} from 'react-icons/si'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'Data Engineering ETL Pipeline',
      description: 'A modern, full-stack Data Engineering ETL Pipeline with a beautiful React frontend and Flask backend API. Features interactive dashboard, data management, analytics, and real-time visualizations.',
      longDescription: 'Developed an interactive ETL pipeline in Python to extract, view, and update CSV data via console. Implemented modular extraction and data addition with pandas, allowing efficient data manipulation and storage. Enhanced practical skills in building user-driven data workflows for data engineering applications. Includes dual storage (CSV and SQLite) and comprehensive analytics dashboard.',
      technologies: ['Python', 'Flask', 'React', 'Pandas', 'SQLite', 'Recharts'],
      icons: [SiPython, SiFlask, SiReact],
      github: 'https://github.com/Raos0nu/Data-Engineering-ETL-Pipeline',
      featured: true,
    },
    {
      title: 'AI-Powered Resume Analyzer',
      description: 'Built an AI-driven resume analysis tool that extracts key information, scores resumes against job descriptions, and provides personalized feedback using machine learning and NLP.',
      longDescription: 'Developed a full-stack application leveraging natural language processing (NLP) and machine learning models to parse resumes, identify skills, experience, and education. The system compares resumes against specific job requirements and provides compatibility scores with actionable insights for job seekers to improve their resumes.',
      technologies: ['Python', 'Flask', 'React', 'TensorFlow', 'NLP', 'Machine Learning'],
      icons: [SiPython, SiFlask, SiReact, SiTensorflow],
      github: 'https://github.com/Raos0nu/AI-powered-Resume-Analyzer',
      featured: true,
    },
    {
      title: 'Flask-React-Template',
      description: 'Enhanced production-ready full-stack boilerplate from Jalan Technologies using React, TypeScript, Flask, MongoDB with Docker containerization, CI/CD pipelines, and Kubernetes orchestration for multi-environment deployment.',
      longDescription: 'Applied software engineering best practices including unit testing with Pytest, automated code quality checks (ESLint, Pylint), Git workflows, and Agile development methodology with code reviews.',
      technologies: ['React', 'TypeScript', 'Flask', 'MongoDB', 'Docker', 'Kubernetes', 'CI/CD'],
      icons: [SiReact, SiTypescript, SiFlask, SiMongodb, SiDocker, SiKubernetes],
      github: 'https://github.com/Raos0nu/flask-react-template',
      featured: true,
    },
    {
      title: 'DevOps: Docker Base Images Pipeline',
      description: 'Engineered reusable Docker base images for multi-environment deployments, achieving 40% reduction in build times with improved scalability and reliability.',
      longDescription: 'Integrated performance monitoring (Grafana), security hardening, and CI/CD pipelines using Jenkins and GitHub Actions with comprehensive documentation.',
      technologies: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Grafana', 'CI/CD'],
      icons: [SiDocker, SiKubernetes, SiJenkins, SiGithubactions, SiGrafana],
      github: 'https://github.com/Raos0nu/Docker-base-images-project',
      featured: true,
    },
    {
      title: 'MEAN Stack Expense Tracker',
      description: 'Built full-stack expense tracking application using MEAN stack (MongoDB, Express.js, Angular, Node.js) managing 7 expense categories with complete CRUD operations.',
      longDescription: 'Implemented RESTful APIs and responsive Angular frontend with Material Design, featuring real-time expense analytics, form validation, and dynamic data visualization.',
      technologies: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript'],
      icons: [SiAngular, SiNodedotjs, SiExpress, SiMongodb, SiTypescript],
      github: 'https://github.com/Raos0nu/Expense-Tracker',
      featured: true,
    },
    {
      title: 'E-Commerce Platform',
      description: 'Designed end-to-end UX for an Amazon-like e-commerce platform, creating wireframes and adaptive prototypes using Figma to optimize user journeys and interaction flows.',
      longDescription: 'Conducted user research and data-driven A/B testing, achieving a 22% uplift in checkout conversions and 30% increase in user engagement through improved design.',
      technologies: ['Figma', 'UX Design', 'User Research', 'A/B Testing'],
      icons: [SiFigma],
      github: 'https://github.com/Raos0nu/E-commerce-platform',
      featured: true,
    },
  ]

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
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass p-6 rounded-xl flex flex-col h-full group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    {project.icons.map((Icon, iconIndex) => (
                      <div
                        key={iconIndex}
                        className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white"
                      >
                        <Icon />
                      </div>
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 gradient-text group-hover:text-white transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                <p className="text-gray-400 text-sm mb-4">{project.longDescription}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary/20 text-primary rounded text-xs border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 mt-auto">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center space-x-2 text-gray-300 hover:text-primary transition-colors"
                  >
                    <FiGithub />
                    <span>Code</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
