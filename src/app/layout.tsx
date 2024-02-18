import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import { Footer } from './components/modules/footer'
import { Header } from './components/modules/header'
import { UserState } from './contexts/user'
import './globals.css'

const inter = Raleway({ subsets: ['cyrillic', 'latin'] })

export const metadata: Metadata = {
  title: `Школа креативных технологий ${process.env.NEXT_PUBLIC_SCHOOL_NAME}`,
  description:
    'Обучение по 8 современным направлениям для школьников 12-18 лет',
  creator: 'gayfield community',
  keywords: `${process.env.NEXT_PUBLIC_SCHOOL_NAME}, it-школа, образование современным направлениям`,
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
        <UserState>
          <Header />
          {/* <Auxiliary /> */}
          <main className={`min-h-[calc(100vh-70px)]`}>{children}</main>
          <Footer />
        </UserState>
      </body>
    </html>
  )
}
