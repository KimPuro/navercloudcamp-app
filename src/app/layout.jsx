import {Inter} from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "김동은의 Next.js",
    description: "linus team app",
};
export default function RootLayout({children}) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/images/icon/favicon.ico" type="image/x-icon"/>
        </head>
        <body className={inter.className}>
            {children}
        </body>
        </html>
    );
}
