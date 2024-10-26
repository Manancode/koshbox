export function Specifications() {
    const specs = [
      {
        category: 'Technical Specs',
        items: [
          { label: 'Dimension', value: '10 x 5 x 2 cm' },
          { label: 'Weight', value: '150g' },
          { label: 'Power', value: '5V DC' },
        ]
      },
      {
        category: 'Performance',
        items: [
          { label: 'Processing Speed', value: '1.2 GHz' },
          { label: 'Memory', value: '512 MB' },
          { label: 'Battery Life', value: '8 hours' },
        ]
      }
    ]
  
    return (
      <div className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specs.map((category, index) => (
              <div key={index} className="p-6 bg-gray-900 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">{category.category}</h3>
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between">
                      <span className="text-gray-400">{item.label}</span>
                      <span className="font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }