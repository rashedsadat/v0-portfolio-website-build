import type { Metadata, Viewport } from 'next'
import { Offside, JetBrains_Mono, Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const offside = Offside({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display"
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans"
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono"
})

export const metadata: Metadata = {
  title: 'Md. Shahadat Hossen | Software Engineer (PHP-Laravel)',
  description: 'Passionate and skilled Software Engineer with 3 years of experience in PHP and Laravel development. Building robust digital solutions with user-friendly interfaces and scalable back-end systems.',
  keywords: ['Software Engineer', 'PHP Developer', 'Laravel Developer', 'Full Stack Developer', 'Web Developer', 'Bangladesh'],
  authors: [{ name: 'Md. Shahadat Hossen' }],
  creator: 'Md. Shahadat Hossen',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shahadathossen.vercel.app',
    title: 'Md. Shahadat Hossen | Software Engineer',
    description: 'Passionate Software Engineer with 3 years of experience in PHP and Laravel development.',
    siteName: 'Shahadat Hossen Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Md. Shahadat Hossen | Software Engineer',
    description: 'Passionate Software Engineer with 3 years of experience in PHP and Laravel development.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${offside.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
