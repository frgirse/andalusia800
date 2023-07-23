import './globals.css'
import { Inter } from 'next/font/google'
import Provider from './context/AuthContext'
import ToasterContext from './context/ToasterContext'
import { Header} from'./components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Wohntraum Andalusia',
  description: 'Landing Page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><Provider><ToasterContext /><Header/>{children}</Provider></body>
    </html>
  )
}
