import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Socials from '@/components/Socials'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className + " overscroll-none min-h-screen flex flex-col items-center justify-between relative"}>
        <Navbar/>
        {children}
        <Socials/>
      </body>
    </html>
  )
}
