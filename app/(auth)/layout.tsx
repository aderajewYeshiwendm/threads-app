
import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';

export const metadata = {
    description: "Next.js Threads Application",
    title:'ThreadsApp'
}

const inter = Inter({ subsets:['latin']})
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
        
            <html lang="en">
                <head>
                    <title>Threads</title>  
                </head>
                <body className={`${inter.className} bg-dark-1`}>
                    {children}
                </body>
            </html>
            </ClerkProvider>
    )

}