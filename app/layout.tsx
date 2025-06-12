
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <head />
      <body className="font-sans bg-white text-gray-900">{children}</body>
    </html>
  )
}
