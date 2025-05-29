import { ToastContainer } from "react-toastify";
import "./globals.css";
import ReduxProvider from "@/components/providers/ReduxProvider";
import AuthCheck from "@/components/providers/AuthCheck";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Koducuk",
  description: "Çocuklara yönelik yazılım eğitim sunan platformdur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ReduxProvider>
          <AuthCheck>
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
          </AuthCheck>
        </ReduxProvider>
      </body>
    </html>
  );
}
