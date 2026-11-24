"use client";

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function AuthPage() {
  const router = useRouter();
  const pathname = usePathname();
  const isLogin = pathname.includes('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (isLogin) {
        const { error: err } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (err) throw err;
        router.push('/dashboard');
      } else {
        const { error: err } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: email.split('@')[0],
            },
          },
        });
        if (err) throw err;
        router.push('/auth/login');
      }
    } catch (err: any) {
      setError(err.message || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex h-screen items-center justify-center bg-bg'>
      <div className='w-full max-w-md p-8'>
        <div className='mb-8 flex items-center gap-2'>
          <div className='w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-cyan flex items-center justify-center'>
            <span className='text-xs font-bold text-white'>BO</span>
          </div>
          <span className='font-bold text-xl tracking-tight text-white'>BORNGREAT.</span>
        </div>

        <div className='rounded-xl border border-border bg-surface/50 backdrop-blur p-8'>
          <h2 className='text-2xl font-bold text-white mb-6'>
            {isLogin ? 'Sign In' : 'Create Account'}
          </h2>

          <form onSubmit={handleSubmit} className='space-y-4'>
            <Input
              label='Email'
              type='email'
              placeholder='hello@example.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              label='Password'
              type='password'
              placeholder='••••••••'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && (
              <div className='p-3 rounded-lg border border-red-500/30 bg-red-500/10 text-red-400 text-sm'>
                {error}
              </div>
            )}

            <Button type='submit' size='lg' disabled={loading} className='w-full'>
              {loading ? 'Processing...' : isLogin ? 'Sign In' : 'Create Account'}
            </Button>
          </form>

          <div className='mt-6 text-center text-sm'>
            {isLogin ? (
              <p className='text-muted'>Don't have an account?</p>
            ) : (
              <p className='text-muted'>Already have an account?</p>
            )}
            <a
              href={isLogin ? '/auth/signup' : '/auth/login'}
              className='text-primary hover:text-cyan transition-colors ml-1'
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </a>
          </div>

          <div className='mt-8 border-t border-border pt-6 text-center'>
            <p className='text-xs text-muted'>BorgTech Admin Portal</p>
          </div>
        </div>
      </div>
    </div>
  );
}