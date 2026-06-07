import type { Metadata } from "next";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Yvan DJASSAH – Développeur d'applications",
  description:
    "Étudiant en informatique spécialisé en systèmes d'information et cybersécurité. Compétences en Java Spring Boot, Python, Angular, React et réseaux Cisco.",
  keywords: [
    "Yvan DJASSAH",
    "développeur",
    "full stack",
    "Java",
    "Spring Boot",
    "Togo",
    "portfolio",
  ],
  authors: [{ name: "Yvan DJASSAH" }],
  openGraph: {
    title: "Yvan DJASSAH – Développeur d'applications",
    description:
      "Portfolio de Yvan DJASSAH, étudiant développeur à l'IAI TOGO.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
