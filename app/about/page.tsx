import Header from "../components/Header"
import Footer from "../components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { CheckCircle, Award, Users, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Safe Ship Logistics</h1>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Our Journey</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="prose max-w-none">
              <p>
                Founded in 2010, Safe Ship Logistics emerged from a vision to revolutionize the China-India trade
                corridor. What began as a small team of logistics enthusiasts has now grown into a leading force in
                cross-border shipping solutions.
              </p>
              <p>
                Our journey has been marked by continuous innovation, strategic partnerships, and an unwavering
                commitment to our clients' success. From navigating complex customs regulations to optimizing supply
                chains, we've consistently risen to meet the evolving challenges of international trade.
              </p>
            </div>
            <div className="relative h-64 md:h-full">
              <Image
                src="/placeholder.svg"
                alt="Safe Ship Logistics Journey"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Image
                  src="/placeholder.svg"
                  alt="Rajesh Sharma"
                  width={100}
                  height={100}
                  className="rounded-full mx-auto"
                />
                <CardTitle className="text-center">Rajesh Sharma</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center font-semibold">Founder & CEO</p>
                <p className="text-sm text-gray-600 mt-2">
                  With over 20 years of experience in international logistics, Rajesh leads our company with a vision
                  for innovation and excellence. His expertise in China-India trade has been instrumental in our growth.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Image
                  src="/placeholder.svg"
                  alt="Priya Patel"
                  width={100}
                  height={100}
                  className="rounded-full mx-auto"
                />
                <CardTitle className="text-center">Priya Patel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center font-semibold">Operations Director</p>
                <p className="text-sm text-gray-600 mt-2">
                  Priya's expertise in supply chain management ensures our operations run smoothly and efficiently. Her
                  innovative approaches have significantly improved our service delivery times.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Image src="/placeholder.svg" alt="Li Wei" width={100} height={100} className="rounded-full mx-auto" />
                <CardTitle className="text-center">Li Wei</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center font-semibold">China Relations Manager</p>
                <p className="text-sm text-gray-600 mt-2">
                  Li Wei's deep understanding of Chinese business practices helps us maintain strong partnerships with
                  suppliers and carriers in China, ensuring smooth operations at the source.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Our Mission & Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  At Safe Ship Logistics, our mission is to empower businesses by providing seamless, reliable, and
                  cost-effective logistics solutions for China-India trade. We strive to simplify complex supply chains,
                  ensure compliance with international regulations, and deliver exceptional value to our clients.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-green-500" /> Integrity in all our dealings
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-green-500" /> Customer-centric approach
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-green-500" /> Continuous innovation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-green-500" /> Commitment to sustainability
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-green-500" /> Empowering our team
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Why Choose Safe Ship Logistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6">
                <Award className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-center mb-2">Expertise</h3>
                <p className="text-sm text-gray-600 text-center">
                  Specialized knowledge in China-India trade routes and regulations
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Globe className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-center mb-2">Global Network</h3>
                <p className="text-sm text-gray-600 text-center">
                  Strong partnerships with key players in both Chinese and Indian markets
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-center mb-2">Customer Support</h3>
                <p className="text-sm text-gray-600 text-center">
                  Dedicated team providing support in multiple languages
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <CheckCircle className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-center mb-2">Reliability</h3>
                <p className="text-sm text-gray-600 text-center">
                  Consistent on-time delivery and transparent communication
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6">Our Achievements</h2>
          <div className="bg-blue-50 rounded-lg p-8">
            <ul className="space-y-4">
              <li className="flex items-start">
                <Award className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Best Logistics Provider 2022</h3>
                  <p className="text-sm text-gray-600">Awarded by the India-China Trade Council</p>
                </div>
              </li>
              <li className="flex items-start">
                <Award className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">ISO 9001:2015 Certified</h3>
                  <p className="text-sm text-gray-600">For our quality management systems</p>
                </div>
              </li>
              <li className="flex items-start">
                <Award className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Fastest Growing Logistics Company 2021</h3>
                  <p className="text-sm text-gray-600">Recognized by Business Today Magazine</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

