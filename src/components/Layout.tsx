import Link from 'next/link';
import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Space_Grotesk, PT_Mono, Montserrat } from "next/font/google";

interface LayoutProps {
  children: React.ReactNode;
}

const pt = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
    weight: ["600"]
  });

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">

              <Link className="text-4xl font-bold text-gray-900" href="/">
               <p className={`${pt.className} font-bold text-gray-900`}>preDix</p> 
              </Link>
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                <Link className='text-gray-700 hover:text-gray-900 px-1 py-2 text-lg hover:bg-red-500' href="/">
                  Home
                </Link>
                <Link className='text-gray-700 hover:text-gray-900 px-1 py-2 text-lg hover:bg-red-500' href="/events">
                  Events
                </Link>
              </div>

            <div className="flex items-center">
            <ConnectButton />
            </div>
          </div>
        </div>
      </nav>
      
      <main className="py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-20">
          {children}
        </div>
      </main>
      
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto pt-8 pb-2 px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          © 2025 PredictionMarket. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;