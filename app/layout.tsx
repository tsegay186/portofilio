import type { Metadata } from 'next'
import './globals.css'
import AppHeader from "./components/AppHeader";
import AppFooter from './components/AppFooter';
export const metadata: Metadata = {
  title: 'Tsegay Berhanu',
  description: 'Tsegay Berhanu - Software Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body  >
        <div className='fixed w-full z-50 font-light  bg-red-400'>
          <AppHeader />
        </div>
        <div className=' px-6 justify-center'>
          {children}</div>
          <div className='bg-slate-100 flex justify-center '>
          <AppFooter/>
          </div>
      </body>
    </html>
  )
}
