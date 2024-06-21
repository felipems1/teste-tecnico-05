import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/contexts/cart'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Teste Tecnico QikServe',
  description: 'Sistema de delivery',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} max-w-screen min-h-screen overflow-x-hidden`}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
