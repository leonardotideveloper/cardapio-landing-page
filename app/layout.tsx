import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cardapio.webpro.app.br'),
  title: 'Cardápio Pro | Cardápio Digital para Restaurantes',
  description: 'Transforme seu restaurante com um cardápio digital moderno e profissional. Aumente suas vendas e melhore a experiência dos seus clientes.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Cardápio Pro | Cardápio Digital para Restaurantes',
    description: 'Transforme seu restaurante com um cardápio digital moderno e profissional. Aumente suas vendas e melhore a experiência dos seus clientes.',
    url: 'https://cardapio.webpro.app.br',
    siteName: 'Cardápio Pro',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/favicon.png',
        width: 1024,
        height: 1024,
        alt: 'Cardápio Pro',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cardápio Pro | Cardápio Digital para Restaurantes',
    description: 'Transforme seu restaurante com um cardápio digital moderno e profissional. Aumente suas vendas e melhore a experiência dos seus clientes.',
    images: ['/favicon.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
