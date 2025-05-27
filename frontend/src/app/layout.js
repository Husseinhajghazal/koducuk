import { ToastContainer } from "react-toastify";
import "./globals.css";

export const metadata = {
  title: "Koducuk",
  description: "Çocuklara yönelik yazılım eğitim sunan platformdur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </body>
    </html>
  );
}
