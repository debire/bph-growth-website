import ideaIcon from '../assets/icons/Idea.svg'
import leadershipIcon from '../assets/icons/Leadership.svg'
import handshakeIcon from '../assets/icons/Handshake.svg'
import goalIcon from '../assets/icons/Goal.svg'

function CoreValues() {
  const values = [
    {
      title: "Resourcefulness",
      description: "Achieving more with less through lean and agile methodologies.",
      icon: ideaIcon
    },
    {
      title: "Leadership",
      description: "Empowering market dominion through innovation and high responsiveness.",
      icon: leadershipIcon
    },
    {
      title: "Accountability",
      description: "Operating with the highest level of professionalism and transparency.",
      icon: handshakeIcon
    },
    {
      title: "Commitment",
      description: "Driven to see our client start-ups scale within the socio-political setting regardless of the challenges.",
      icon: goalIcon
    }
  ]

  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our Core Values
        </h2>

        <div className="grid grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="relative flex flex-col">
              {index !== values.length - 1 && (
                <div className="absolute right-0 top-0 h-full flex flex-col justify-between py-4">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-0.5 bg-black h-[8%]" />
                  ))}
                </div>
              )}
              
              <div className="text-center px-4 flex flex-col h-full">
                <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <img src={value.icon} alt={value.title} className="w-full h-full object-contain" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 h-14 flex items-center justify-center">
                  {value.title}
                </h3>
                
                <div className="flex-grow flex items-start">
                  <p className="text-sm leading-relaxed text-gray-700">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoreValues