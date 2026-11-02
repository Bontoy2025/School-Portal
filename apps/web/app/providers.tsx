"use client";

import { AppQueryProvider } from '@/components/providers/query-provider';

export function Providers({ children }: { children: React.ReactNode }) {
  return <AppQueryProvider>{children}</AppQueryProvider>;
}
