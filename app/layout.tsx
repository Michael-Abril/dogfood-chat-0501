import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dogfood Chat App',
  description: 'Real-time chat application',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif', background: '#0f0f0f', color: '#fff' }}>
        {children}
      </body>
    </html>
  )
}
