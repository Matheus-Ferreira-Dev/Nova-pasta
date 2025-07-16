import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Clínica Dental - Seu Sorriso É Nossa Prioridade',
  description: 'Clínica odontológica moderna com tratamentos completos e tecnologia avançada. Agende sua consulta hoje mesmo!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
