import { Button } from "@/components/ui/button"

export default function GlobalReach() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold sm:text-4xl">Global Reach, Local Expertise</h2>
            <p className="text-blue-100 text-lg">
              With presence in over 100 countries and partnerships with leading carriers, we ensure your shipments reach
              their destination safely and on time.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              View Coverage
            </Button>
          </div>
          <div className="relative h-[400px] bg-white/10 rounded-lg">
            {/* World map or coverage visualization would go here */}
          </div>
        </div>
      </div>
    </section>
  )
}

