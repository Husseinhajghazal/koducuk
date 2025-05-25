import "./globals.css";

export const metadata = {
  title: "Koducuk",
  description: "Çocuklara yönelik yazılım eğitim sunan platformdur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
