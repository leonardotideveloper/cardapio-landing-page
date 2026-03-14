import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: 'Cardápio Pro | Cardápio Digital para Restaurantes',
  description: 'Transforme seu restaurante com um cardápio digital moderno e profissional. Aumente suas vendas e melhore a experiência dos seus clientes.',
  generator: 'v0.app',
  icons: {
    icon: '/apple-icon.png?v=20260314',
    shortcut: '/apple-icon.png?v=20260314',
    apple: '/apple-icon.png?v=20260314',
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
