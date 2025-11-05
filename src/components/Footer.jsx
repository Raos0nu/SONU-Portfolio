import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 mb-4 md:mb-0"
          >
            © {new Date().getFullYear()} Sonu Yadav. All rights reserved.
          </motion.p>

          <div className="flex space-x-6 mb-4 md:mb-0">
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
                  className="text-gray-400 hover:text-primary transition-colors text-xl"
                  aria-label={link.label}
                >
                  <Icon />
                </motion.a>
              )
            })}
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            Back to Top ↑
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer

