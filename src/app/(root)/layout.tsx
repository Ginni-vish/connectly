import React,{ ReactNode} from 'react'
import { Stream } from 'stream'
import StreamVideoProvider from '../../../providers/StreamClientProvider';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Connectly",
  description: "Video calling app",
  icons:{
   icon: '/icons/logo.svg'}
};

const RootLayout = ({ children }: { children: ReactNode }) => {
      return (
    <main>
      <StreamVideoProvider>
      {children} 
      </StreamVideoProvider>
       
    </main>
  )
}

export default RootLayout