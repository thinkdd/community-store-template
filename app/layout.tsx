export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="th">
        <head />
        <body className="font-sans bg-gray-50 text-gray-800">{children}</body>
      </html>
    )
  }
  