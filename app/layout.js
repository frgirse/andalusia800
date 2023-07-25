import '../styles/globals.css'
import Provider from './context/AuthContext'
import ToasterContext from './context/ToasterContext'
import { Header} from'./components'
import { Architects_Daughter } from 'next/font/google'

const archidaught = Architects_Daughter({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: 'Wohntraum Andalusia',
  description: 'Landing Page',
}                                                                                                                                                                                                                                                                                                                

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={archidaught.className}><Provider><ToasterContext /><Header/>{children}</Provider></body>
    </html>
  )
}
