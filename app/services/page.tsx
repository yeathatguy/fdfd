import Header from "../components/Header"
import Footer from "../components/Footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Ship, Plane, FileCheck } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h1>
        <Tabs defaultValue="sea-freight" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 gap-4">
            <TabsTrigger value="sea-freight" className="flex items-center gap-2">
              <Ship className="w-5 h-5" />
              Sea Freight
            </TabsTrigger>
            <TabsTrigger value="air-freight" className="flex items-center gap-2">
              <Plane className="w-5 h-5" />
              Air Freight
            </TabsTrigger>
            <TabsTrigger value="customs-clearance" className="flex items-center gap-2">
              <FileCheck className="w-5 h-5" />
              Customs Clearance
            </TabsTrigger>
          </TabsList>
          <TabsContent value="sea-freight">
            <Card>
              <CardHeader>
                <CardTitle>Sea Freight Services</CardTitle>
                <CardDescription>
                  Reliable and cost-effective ocean shipping solutions from China to India
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Our sea freight services offer a comprehensive solution for transporting goods from China to India via
                  ocean routes. We specialize in:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Full Container Load (FCL) shipments for large volume cargo</li>
                  <li>Less than Container Load (LCL) consolidation for smaller shipments</li>
                  <li>Special equipment handling for oversized or project cargo</li>
                  <li>Refrigerated container solutions for temperature-sensitive goods</li>
                  <li>Flexible scheduling with weekly departures from major Chinese ports</li>
                  <li>Real-time tracking and updates throughout the shipping process</li>
                </ul>
                <p>
                  With our extensive network and partnerships with leading ocean carriers, we ensure your cargo reaches
                  its destination safely and on time, while optimizing costs and transit times.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="air-freight">
            <Card>
              <CardHeader>
                <CardTitle>Air Freight Services</CardTitle>
                <CardDescription>Fast and efficient air cargo solutions for time-sensitive shipments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Our air freight services provide rapid transportation for urgent and high-value goods from China to
                  India. We offer:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Express air freight for time-critical shipments</li>
                  <li>Consolidated air freight for cost-effective solutions</li>
                  <li>Charter services for large volume or special cargo</li>
                  <li>Temperature-controlled air freight for perishables and pharmaceuticals</li>
                  <li>Door-to-door air cargo services with last-mile delivery</li>
                  <li>Advanced tracking systems for real-time shipment visibility</li>
                </ul>
                <p>
                  Our partnerships with major airlines and our presence at key airports in both China and India ensure
                  we can provide flexible, reliable, and swift air freight solutions tailored to your specific needs.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="customs-clearance">
            <Card>
              <CardHeader>
                <CardTitle>Customs Clearance Services</CardTitle>
                <CardDescription>Expert handling of customs procedures for smooth import processes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Our customs clearance services ensure a seamless import process for your goods entering India from
                  China. We provide:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Comprehensive documentation preparation and verification</li>
                  <li>Classification of goods and HS code determination</li>
                  <li>Calculation and payment of duties and taxes</li>
                  <li>Liaison with customs authorities for efficient clearance</li>
                  <li>Compliance management to ensure adherence to Indian import regulations</li>
                  <li>Handling of special permits and licenses for restricted goods</li>
                  <li>Post-clearance audits and record-keeping</li>
                </ul>
                <p>
                  Our team of experienced customs brokers and compliance experts work diligently to navigate the
                  complexities of Indian customs regulations, minimizing delays and ensuring your shipments clear
                  customs quickly and compliantly.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  )
}

