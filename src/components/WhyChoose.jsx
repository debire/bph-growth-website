import aiIcon from '../assets/icons/Artificial_Intelligence.svg'
import dollarIcon from '../assets/icons/Dollar_Bag.svg'
import handshakeIcon from '../assets/icons/Handshake.svg'
import guruIcon from '../assets/icons/Guru.svg'

function WhyChoose() {
  const features = [
    {
      title: "AI-Augmented Insights",
      description: "Get approved in as little as 24 hours with our streamlined application process. No unnecessary delays.",
      icon: aiIcon
    },
    {
      title: "Verified Funding Access",
      description: "Enjoy transparent pricing with interest rates starting from 5.99% APR. No hidden fees or surprises.",
      icon: dollarIcon
    },
    {
      title: "Free Networking & Pro-Bono Support",
      description: "Choose repayment terms from 6 to 84 months that align with your budget and financial goals.",
      icon: handshakeIcon
    },
    {
      title: "The Business Clinic",
      description: "Our dedicated loan specialists guide you every step of the way, ensuring you make informed decisions.",
      icon: guruIcon
    }
  ]

  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 lg:mb-16">
          Why Entrepreneurs Choose BPH Growth
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative flex flex-col">
              {/* Custom dashed divider with 8 dashes - Desktop only */}
              {index !== features.length - 1 && (
                <div className="hidden lg:flex absolute right-0 top-0 h-full flex-col justify-between py-4">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-0.5 bg-black h-[8%]" />
                  ))}
                </div>
              )}
              
              <div className="text-center px-2 lg:px-4 flex flex-col h-full">
                {/* Icon */}
                <div className="w-16 h-16 lg:w-24 lg:h-24 mx-auto mb-4 lg:mb-6 flex items-center justify-center">
                  <img src={feature.icon} alt={feature.title} className="w-full h-full object-contain" />
                </div>
                
                <h3 className="text-base lg:text-xl font-bold mb-3 lg:mb-4 min-h-12 lg:h-14 flex items-center justify-center">
                  {feature.title}
                </h3>
                
                <div className="grow flex items-start">
                  <p className="text-xs lg:text-sm leading-relaxed text-gray-700">
                    {feature.description}
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

export default WhyChoose