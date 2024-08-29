import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: string }> = ({ className, children, href, ...props }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const target = document.querySelector(href || '')
    target?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <button
      className={`px-4 py-2 rounded-full font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  )
}

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => {
  return (
    <input
      className={`w-full px-4 py-2 rounded-full bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 ${className}`}
      {...props}
    />
  )
}

const Particles: React.FC = () => {
  useEffect(() => {
    const canvas = document.getElementById('particles') as HTMLCanvasElement
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 3 - 1.5
        this.speedY = Math.random() * 3 - 1.5
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height
      }

      draw() {
        ctx!.fillStyle = 'rgba(255, 255, 255, 0.5)'
        ctx!.beginPath()
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx!.fill()
      }
    }

    const particlesArray: Particle[] = []
    for (let i = 0; i < 100; i++) {
      particlesArray.push(new Particle())
    }

    function animateParticles() {
      ctx!.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()
      }
      requestAnimationFrame(animateParticles)
    }

    animateParticles()

    return () => cancelAnimationFrame(0)
  }, [])

  return <canvas id="particles" className="absolute inset-0 z-0" />
}

const Modal: React.FC<{ isOpen: boolean; onClose: () => void; children: React.ReactNode }> = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="bg-gray-800 p-6 rounded-lg max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const FeatureCard: React.FC<{ icon: string; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors duration-300"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}

const GameCard: React.FC<{ title: string; image: string; onClick: () => void }> = ({ title, image, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 rounded-lg overflow-hidden"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <Button className="mt-4 w-full" onClick={onClick}>Registrarse</Button>
      </div>
    </motion.div>
  )
}

export const GamerLanding: React.FC = () => {
  const [glowColor, setGlowColor] = useState('from-purple-600 to-blue-600')
  const [playerCount, setPlayerCount] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedGame, setSelectedGame] = useState('')
  const [registeredEvents, setRegisteredEvents] = useState<{ [key: string]: string }>({})
  const [formData, setFormData] = useState({ fullName: '', email: '', date: '' })
  
  useEffect(() => {
    const colors = [
      'from-purple-600 to-blue-600',
      'from-green-600 to-cyan-600',
      'from-red-600 to-yellow-600'
    ]
    let colorIndex = 0
    const intervalId = setInterval(() => {
      colorIndex = (colorIndex + 1) % colors.length
      setGlowColor(colors[colorIndex])
    }, 3000)

    const countInterval = setInterval(() => {
      setPlayerCount(prev => (prev < 1000000 ? prev + 1234 : 1000000))
    }, 50)

    return () => {
      clearInterval(intervalId)
      clearInterval(countInterval)
    }
  }, [])

  const handleGameClick = (game: string) => {
    setSelectedGame(game)
    setIsModalOpen(true)
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    const eventDate = new Date(formData.date).toISOString().split('T')[0]
    setRegisteredEvents(prev => ({ ...prev, [eventDate]: selectedGame }))
    setIsModalOpen(false)
    setFormData({ fullName: '', email: '', date: '' })
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <Particles />
      <div className="relative z-10">
        <header className="fixed top-0 left-0 right-0 p-4 border-b border-gray-800 bg-black bg-opacity-80 z-50">
          <nav className="container mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              ZonaGamer
            </div>
            <div className="space-x-4">
              <Button href="#inicio" className="bg-transparent hover:bg-purple-700">Inicio</Button>
              <Button href="#juegos" className="bg-transparent hover:bg-purple-700">Juegos</Button>
              <Button href="#nosotros" className="bg-transparent hover:bg-purple-700">Nosotros</Button>
              <Button href="#contacto" className="bg-transparent hover:bg-purple-700">Contacto</Button>
            </div>
          </nav>
        </header>

        <main>
          <section id="inicio" className="pt-24 py-20 relative overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-r ${glowColor} opacity-20 blur-3xl transition-all duration-1000 ease-in-out`}></div>
            <div className="container mx-auto text-center relative z-10">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-pulse">
                Entra al <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Siguiente Nivel</span> de Juego
              </h1>
              <p className="text-xl mb-8 text-gray-300">Experimenta un rendimiento sin igual y una jugabilidad inmersiva</p>
              <Button className="animate-bounce text-lg">
                Comienza a Jugar Ahora
              </Button>
            </div>
          </section>

          <section className="py-20 bg-gray-900">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard icon="🎮" title="Últimos Juegos" description="Acceso a una amplia biblioteca de juegos de vanguardia" />
              <FeatureCard icon="⚡" title="Velocidad Relámpago" description="Optimizado para juegos de baja latencia y alta velocidad" />
              <FeatureCard icon="💻" title="Hardware Potente" description="Hardware de última generación para una jugabilidad fluida" />
              <FeatureCard icon="🌐" title="Multijugador" description="Conéctate y compite con jugadores de todo el mundo" />
            </div>
          </section>

          <section id="juegos" className="py-20 relative overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-r ${glowColor} opacity-20 blur-3xl transition-all duration-1000 ease-in-out`}></div>
            <div className="container mx-auto text-center relative z-10">
              <h2 className="text-4xl font-bold mb-8">Juegos Destacados</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <GameCard title="Nexo Cibernético" image="/placeholder.svg?height=200&width=300" onClick={() => handleGameClick("Nexo Cibernético")} />
                <GameCard title="Odisea Estelar" image="/placeholder.svg?height=200&width=300" onClick={() => handleGameClick("Odisea Estelar")} />
                <GameCard title="Samurái Neón" image="/placeholder.svg?height=200&width=300" onClick={() => handleGameClick("Samurái Neón")} />
                <GameCard title="Leyendas del Cosmos" image="/placeholder.svg?height=200&width=300" onClick={() => handleGameClick("Leyendas del Cosmos")} />
              </div>
            </div>
          </section>

          <section className="py-20 bg-gray-900">
            <div className="container mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">Calendario de Torneos</h2>
              <Calendar
                className="mx-auto bg-gray-800 p-4 rounded-lg"
                tileContent={({ date }) => {
                  const eventDate = date.toISOString().split('T')[0]
                  if (registeredEvents[eventDate]) {
                    return <div className="bg-purple-600 rounded-full w-2 h-2 mx-auto"></div>
                  }
                  return null
                }}
                tileClassName="text-white hover:bg-gray-700"
              />
            </div>
          </section>

          <section id="nosotros" className="py-20 bg-gray-900">
            <div className="container mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">Sobre Nosotros</h2>
              <p className="text-xl mb-8 text-gray-300">
                En ZonaGamer, nos apasiona crear experiencias de juego inolvidables. Nuestro equipo de expertos trabaja incansablemente para ofrecerte los mejores juegos, la tecnología más avanzada y una comunidad vibrante de jugadores.
              </p>
              <div className="mt-12">
                <p className="text-2xl font-bold">Jugadores en Línea</p>
                <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  {playerCount.toLocaleString()}
                </p>
              </div>
            </div>
          </section>

          <section id="contacto" className="py-20 relative overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-r ${glowColor} opacity-20 blur-3xl transition-all duration-1000 ease-in-out`}></div>
            <div className="container mx-auto text-center relative z-10">
              <h2 className="text-4xl font-bold mb-8">Únete a Nuestra Comunidad de Juego</h2>
              <div className="max-w-md mx-auto">
                <Input type="email" placeholder="Ingresa tu correo electrónico" className="mb-4" />
                <Button className="w-full text-lg">
                  Suscríbete Ahora
                </Button>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-gray-900 text-gray-300 py-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2023 ZonaGamer. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3 className="text-2xl font-bold mb-4">Registrarse para {selectedGame}</h3>
        <form onSubmit={handleRegister}>
          <Input
            type="text"
            placeholder="Nombre completo"
            className="mb-4"
            value={formData.fullName}
            onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
            required
          />
          <Input
            type="email"
            placeholder="Correo electrónico"
            className="mb-4"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            required
          />
          <Input
            type="date"
            className="mb-4"
            value={formData.date}
            onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
            required
          />
          <Button type="submit" className="w-full">Registrarse</Button>
        </form>
      </Modal>
    </div>
  )
}