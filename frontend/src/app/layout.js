import { ToastContainer } from "react-toastify";
import "./globals.css";
import ReduxProvider from "@/components/providers/ReduxProvider";
import AuthCheck from "@/components/providers/AuthCheck";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Koducuk | Çocuklar için Kodlama Eğitimi",
  description:
    "Çocuklar için eğlenceli ve interaktif kodlama eğitimi platformu. Web geliştirme, oyun programlama ve daha fazlası.",
  keywords: "çocuk kodlama, programlama eğitimi, web geliştirme, çocuk eğitimi",
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
