import { Countdown } from "@/app/components/Countdown"

export default function Home() {
  // Set your launch date here
  const launchDate = new Date("2025-01-29T00:00:00")

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="max-w-4xl w-full space-y-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Our Zingbizz Website is Launching Soon</h1>
        <p className="text-xl sm:text-2xl text-gray-300">Reloaded !! Get ready to revolutionize your business operations</p>
        <Countdown targetDate={launchDate} />
        <div className="space-y-4">
          <p className="text-lg">
            Be among the first to experience our cutting-edge solutions designed to streamline your workflows and boost
            productivity.
          </p>
         
        </div>
        <div className="pt-8 border-t border-white border-opacity-20">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Our Platform?</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-blue-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Seamless Integration with Existing Systems</span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-blue-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Advanced Analytics and Reporting</span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-blue-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Customizable Workflows</span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-blue-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>24/7 Enterprise-level Support</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}

