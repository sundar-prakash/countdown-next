import "@/app/globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Zingbizz - Launching Soon!",
  description: "Countdown to our exciting new Website launch",
  icons: {
    icon: "/zb-logo.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#001929] text-white`}>{children}</body>
    </html>
  )
}

