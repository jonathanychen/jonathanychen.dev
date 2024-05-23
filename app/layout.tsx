import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Socials from '@/components/Socials'


const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jon Dev',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className + " overscroll-none min-h-screen flex flex-col items-center justify-between relative"}>
        <Navbar/>
        {children}
        <Socials/>
      </body>
    </html>
  )
}
