import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import Image from 'next/image'
import './page.css'
import { CookieConsent } from "../components/CookieConsent";

import { Analytics } from '../components/Analytics'

export const metadata = {
  title: 'Postman4J - Lightweight Java HTTP Interceptors',
  description: 'Postman4J provides lightweight Java libraries for tracing and logging HTTP requests and responses as Postman collections. Simplify debugging and optimize your applications.',
  metadataBase: new URL('https://postman4j.jora.dev'),
  openGraph: {
    title: 'Postman4J - Lightweight Java HTTP Interceptors',
    description: 'Trace and log HTTP requests and responses in Postman collections with Postman4J. Lightweight, easy-to-use Java libraries for developers.',
    images: [
      '/logo.png'
    ],
    url: 'https://postman4j.jora.dev',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Postman4J - Lightweight Java HTTP Interceptors',
    description: 'Simplify HTTP request tracing and logging with Postman4J. Generate Postman collections effortlessly.',
    images: [
      '/logo.png'
    ]
  },
  icons: {
    icon: 'favicon.ico',
  }
};
 
const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>
const navbar = (
  <Navbar
    logo={
      <Image
        src="/logo.png"
        alt="MyLogo"
        width={40}
        height={40}
        priority
      />
    }
    projectLink='https://github.com/dyadyaJora/postman4j-interceptors'
  />
)
const footer = <Footer>© {new Date().getFullYear()} jora.dev</Footer>
 
export default async function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head>
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/dyadyaJora/postman4j-docs/tree/master/"
          footer={footer}
        >
          {children}
        </Layout>
        <CookieConsent />
      </body>
      <Analytics />
    </html>
  )
}