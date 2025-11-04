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
    <section className="py-12 lg:py-16 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8 lg:mb-16">
          Our Core Values
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div key={index} className="relative flex flex-col">
              {/* Custom dashed divider with 8 dashes - Desktop only */}
              {index !== values.length - 1 && (
                <div className="hidden lg:flex absolute right-0 top-0 h-full flex-col justify-between py-4">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-0.5 bg-black h-[8%]" />
                  ))}
                </div>
              )}
              
              <div className="text-center px-2 lg:px-4 flex flex-col h-full">
                {/* Icon */}
                <div className="w-16 h-16 lg:w-24 lg:h-24 mx-auto mb-4 lg:mb-6 flex items-center justify-center">
                  <img src={value.icon} alt={value.title} className="w-full h-full object-contain" />
                </div>
                
                <h3 className="text-base lg:text-xl font-bold mb-3 lg:mb-4 min-h-12 lg:h-14 flex items-center justify-center">
                  {value.title}
                </h3>
                
                <div className="grow flex items-start">
                  <p className="text-xs lg:text-sm leading-relaxed text-gray-700">
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