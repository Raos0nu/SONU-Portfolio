import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactMethods = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'sonuyadav97297@gmail.com',
      link: 'https://mail.google.com/mail/?view=cm&to=sonuyadav97297@gmail.com',
      color: 'from-primary to-secondary',
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: '+91 9729783390',
      link: 'https://wa.me/919729783390',
      color: 'from-green-500 to-green-700',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 9729783390',
      link: 'tel:+919729783390',
      color: 'from-primary to-secondary',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Haryana, India',
      link: '#',
      color: 'from-secondary to-primary',
    },
  ]

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/Raos0nu', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/sonu-yadav-577878268/', label: 'LinkedIn' },
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

  const handleEmailClick = (e) => {
    e.preventDefault()
    window.open('https://mail.google.com/mail/?view=cm&to=sonuyadav97297@gmail.com', '_blank')
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon
                  return (
                    <motion.a
                      key={index}
                      href={method.link}
                      onClick={method.label === 'Email' ? handleEmailClick : undefined}
                      target={method.link.startsWith('http') ? '_blank' : method.link === '#' ? undefined : '_self'}
                      rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      whileHover={{ scale: 1.05, x: 10 }}
                      className="glass p-6 rounded-xl flex items-center space-x-4 group cursor-pointer"
                      style={{ textDecoration: 'none' }}
                    >
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform`}>
                        <Icon />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-300 group-hover:text-white transition-colors">
                          {method.label}
                        </h4>
                        <p className="text-gray-400">{method.value}</p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>

              <div className="flex justify-center space-x-6 pt-6">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon
                  return (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-14 h-14 rounded-full glass flex items-center justify-center text-xl text-white hover:text-primary transition-colors"
                      aria-label={link.label}
                    >
                      <Icon />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
