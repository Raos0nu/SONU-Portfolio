import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'

const Hero = () => {
  const handleEmailClick = (e) => {
    e.preventDefault()
    window.open('https://mail.google.com/mail/?view=cm&to=sonuyadav97297@gmail.com', '_blank')
  }

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/Raos0nu', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/sonu-yadav-577878268/', label: 'LinkedIn' },
    { icon: FaEnvelope, url: 'https://mail.google.com/mail/?view=cm&to=sonuyadav97297@gmail.com', label: 'Email', onClick: handleEmailClick },
    { icon: FaWhatsapp, url: 'https://wa.me/919729783390', label: 'WhatsApp' },
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold"
          >
            <span className="gradient-text">Sonu Yadav</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300"
          >
            Full Stack Developer & Software Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            B.Tech in Computer Science & Engineering at NIT Srinagar
            <br />
            Passionate about building scalable web applications and innovative solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center space-x-6 pt-6"
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={index}
                  href={link.url}
                  onClick={link.onClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 rounded-full glass flex items-center justify-center text-2xl text-white hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  <Icon />
                </motion.a>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="pt-12"
          >
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection('about')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-4xl text-gray-400 hover:text-white transition-colors"
          >
            <HiArrowDown />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

