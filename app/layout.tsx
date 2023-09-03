import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import Themes from '@/theme/themes'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rich Cocktail',
  description: 'find the best cocktail in the city',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Themes>
          <Navigation />
          {children}
          <Footer />
        </Themes>
      </body>
    </html>
  )
}
