import './globals.css';
import { Providers } from './providers';

export const metadata = {
  title: 'DepEd School Portal',
  description: 'Role-based school portal for administrative and academic operations.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-100 text-slate-900 antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
