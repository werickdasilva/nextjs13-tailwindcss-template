import './globals.css'

export const metadata = {
  title: 'NextJs 13 TailWindCss Template',
  description: 'Generated tailwindcss template for nextjs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
