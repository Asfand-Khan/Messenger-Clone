import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import ToasterProvider from './context/Toaster'
import AuthContext from './context/AuthContext'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Messenger Clone',
  description: 'Made by Asfand Ali',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <AuthContext>
          <ToasterProvider />
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
