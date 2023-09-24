import './globals.css'
import type { Metadata } from 'next'
import StyledComponentsRegistry from '@/lib/registry'
import Header from './components/layout/header'
import Footer from './components/layout/footer'

export const metadata: Metadata = {
  title: 'Menabi Prototype',
  description: 'Menabi Prototype',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
