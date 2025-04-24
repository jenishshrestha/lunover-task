import AppLayout from "@/components/layouts";
import "./globals.css";

export const metadata = {
  title: "Kulturfestivalen 2025",
  description: "13-17/8 2025 - 1 Festival • 5 Dagar • 6 Områden",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppLayout>{children}</AppLayout>;
}
