
import { Inter } from 'next/font/google'
import '/styles/globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'UniChar | Unicode and Metacharacter Handling Library',
  description: 'A library that ensures safe handling of metacharacters and Unicode to prevent common vulnerabilities like SQL and shell injection.',
}

export default function RootLayout({ children }) {
  return (
   
    <html lang='en'>
    <body>
            <div className="main">
           
              
                <div className="gradient" />
            </div>
            <main className="app">
                {children}
            </main>
    </body>

</html>
  )
}
