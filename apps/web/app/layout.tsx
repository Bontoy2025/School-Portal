export const metadata = {
  title: 'School Portal',
  description: 'Modular monolith MVP',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
