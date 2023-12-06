import { Metadata } from 'next'

export const baseMetadata: Metadata = {
  title: 'Qwavee - Technical Test 2',
  description:
    'Website created by David Mamani from a technical test dictated by the company Qwavee for the position as Frontend Developer.',
  generator: 'Next.js',
  applicationName: 'Qwavee - Technical Test 2',
  referrer: 'origin-when-cross-origin',
  keywords: ['Technical', 'Test', 'Qwavee', 'David Mamani', 'davidmedev', 'Frontend Developer', 'Website'],
  authors: [{ name: 'David Mamani', url: 'https://www.linkedin.com/in/davidmedev/' }],
  creator: 'David Mamani',
  publisher: 'David Mamani',
  category: 'technology',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    title: 'Qwavee - Technical Test 2',
    description:
      'Website created by David Mamani from a technical test dictated by the company Qwavee for the position as Frontend Developer.',
    url: 'https://qwavee-technical-test-2.vercel.app/',
    siteName: 'Qwavee - Technical Test 2',
    locale: 'en',
    type: 'website'
  }
}
