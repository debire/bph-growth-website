function HowWeWork() {
  const steps = [
    {
      number: "1",
      title: "Discovery & Assessment",
      description: "We analyze your business goals, challenges, and market position to understand your unique needs.",
      align: "left"
    },
    {
      number: "2",
      title: "Strategic Planning",
      description: "Our experts develop a customized roadmap with actionable strategies tailored to your business objectives.",
      align: "right"
    },
    {
      number: "3",
      title: "Implementation Support",
      description: "We guide you through executing the plan with hands-on support and AI-powered tools for maximum efficiency.",
      align: "left"
    },
    {
      number: "4",
      title: "Growth & Optimization",
      description: "Monitor progress, refine strategies, and scale operations to achieve sustainable business growth.",
      align: "right"
    },
    {
      number: "5",
      title: "Ongoing Partnership",
      description: "Continuous support and advisory services to ensure long-term success and adaptability to market changes.",
      align: "left"
    }
  ]

  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-2">
            How We Work
          </h2>
          <p className="text-lg lg:text-xl text-gray-600">
            Our Proven 5-Step Process
          </p>
        </div>

        <div className="space-y-4 lg:space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="border-2 border-black rounded-2xl p-4 lg:p-6">
              <div className={`flex items-start gap-3 lg:gap-6 ${
                step.align === 'right' ? 'flex-row-reverse' : ''
              }`}>
                {/* Number inside box */}
                <div className="text-4xl lg:text-6xl font-bold shrink-0">
                  {step.number}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className={`text-lg lg:text-2xl font-bold mb-1 lg:mb-2 ${
                    step.align === 'right' ? 'text-right' : 'text-left'
                  }`}>
                    {step.title}
                  </h3>
                  <p className={`text-sm lg:text-base text-gray-700 ${
                    step.align === 'right' ? 'text-right' : 'text-left'
                  }`}>
                    {step.description}
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

export default HowWeWork