import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    text: "Safe Ship Logistics provided exceptional service and delivered our shipment on time and without any issues. Highly recommended!",
    author: "John Doe, CEO, Acme Corp",
  },
  {
    text: "I was impressed with the professionalism and responsiveness of the Safe Ship Logistics team. They handled my complex shipment with ease.",
    author: "Jane Smith, Logistics Manager, Beta Inc",
  },
  {
    text: "Safe Ship Logistics is my go-to shipping partner. Their global network and reliable service make them a valuable asset to my business.",
    author: "Peter Jones, Owner, Gamma LLC",
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-gray-600">Hear from our satisfied customers</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <CardContent>
                <p className="text-gray-600 text-lg">{testimonial.text}</p>
                <p className="mt-4 text-gray-500 text-right italic">{testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

