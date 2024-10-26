export function Features() {
    const features = [
      {
        title: 'Feature 1',
        description: 'Description of feature 1',
        icon: '⚡'
      },
      {
        title: 'Feature 2',
        description: 'Description of feature 2',
        icon: '🔥'
      },
      {
        title: 'Feature 3',
        description: 'Description of feature 3',
        icon: '💡'
      }
    ]
  
    return (
      <div className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-gray-800 rounded-xl">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }