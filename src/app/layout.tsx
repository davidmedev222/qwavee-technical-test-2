import { Footer, Header } from '@/components'
import '@/styles/index.scss'
import { nunito } from '@/utils'

export const metadata = {
  title: 'Qwavee - Technical Test',
  description: 'Qwavee Technical Test'
}

interface Props {
  children: React.ReactNode
}

function RootLayout({ children }: Props) {
  return (
    <html lang='en' className={`${nunito.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
