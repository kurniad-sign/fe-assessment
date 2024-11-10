import { Metadata } from 'next';

import { AppLayout } from '@/components/layouts/app-layout';

export const metadata: Metadata = {
  title: 'Home - Axent Note',
  description: 'Digital note for simple productivity',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppLayout>{children}</AppLayout>;
}
