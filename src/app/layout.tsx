import { Toaster } from '@/components/ui/sonner'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Footer } from './components/modules/footer'
import { Header } from './components/modules/header'
import './globals.css'
import { Providers } from './providers'

const inter = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['cyrillic', 'latin'],
})

export const metadata: Metadata = {
  title: `Школа креативных технологий ${process.env.NEXT_PUBLIC_SCHOOL_NAME}`,
  description:
    'Обучение по 8 современным направлениям для школьников 12-18 лет',
  creator: 'gayfield community',
  keywords: `${process.env.NEXT_PUBLIC_SCHOOL_NAME}, it-школа, образование современным направлениям`,
  icons: '/assets/images/octopus.png',
}

const HEADER_HEIGHT = 70

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-dark`}>
        <Providers>
          <Toaster />
          <Header />
          {/* <Auxiliary /> */}
          <main className={`min-h-[calc(100vh-70px)]`}>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
