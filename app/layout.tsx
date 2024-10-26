import "@radix-ui/themes/styles.css";

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './NavBar'
import { Theme } from "@radix-ui/themes";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Smart Issue Tracker',
  description: 'Web That used For Tracking Github Issues',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <NavBar />
          <main className={inter.className}>{children}</main>
        </Theme>
      </body>
    </html>
  )
}
