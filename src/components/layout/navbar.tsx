"use client";

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, MousePointer2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Expertise', href: '/expertise' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className='fixed top-0 left-0 right-0 z-50'>
      <div className='border-b border-border/50 bg-bg/80 backdrop-blur-md'>
        <div className='max-w-7xl mx-auto px-6 h-16 flex items-center justify-between'>
          <Link href='/' className='flex items-center gap-2 group'>
            <div className='w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-cyan flex items-center justify-center group-hover:rotate-12 transition-transform duration-300'>
              <MousePointer2 className='w-5 h-5 text-white' />
            </div>
            <span className='font-bold text-xl tracking-tight text-white'>BORNGREAT.</span>
          </Link>

          <div className='hidden md:flex items-center gap-8'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href ? 'text-primary' : 'text-muted hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button variant='ghost' size='sm' className='text-muted hover:text-white border-transparent hover:border-none px-4 py-2'>
              Start a Project
            </Button>
          </div>

          <button
            className='md:hidden text-muted hover:text-white'
            onClick={() => setIsOpen(!isOpen)}
            aria-label='Toggle menu'
          >
            {isOpen ? <X className='w-5 h-5' /> : <Menu className='w-5 h-5' />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className='md:hidden border-b border-border/50 bg-bg/90 backdrop-blur-md py-6 px-6 space-y-4'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block text-base font-medium ${
                pathname === item.href ? 'text-primary' : 'text-muted hover:text-white'
              } py-2`}
            >
              {item.name}
            </Link>
          ))}
          <Button variant='ghost' className='w-full text-muted hover:text-white border-transparent hover:border-none py-3' onClick={() => setIsOpen(false)}>
            Start a Project
          </Button>
        </div>
      )}
    </nav>
  );
}