import { redirect } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    redirect('/auth/login');
  }

  return (
    <div className='flex h-screen overflow-hidden bg-bg'>
      <aside className='w-64 border-r border-border bg-secondary flex-shrink-0'>
        <div className='p-6 flex items-center gap-2'>
          <div className='w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-cyan flex items-center justify-center'>
            <span className='text-xs font-bold text-white'>BO</span>
          </div>
          <span className='font-bold text-xl tracking-tight text-white'>BORNGREAT.</span>
        </div>
        <nav className='mt-6 px-4 space-y-2'>
          <a
            href='/dashboard'
            className='flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary'
          >
            <span className='w-5 h-5'>📊</span>
            Dashboard
          </a>
          <a
            href='/dashboard/projects'
            className='flex items-center gap-3 px-4 py-3 rounded-lg text-muted hover:text-white hover:bg-surface/50 transition-colors'
          >
            <span className='w-5 h-5'>📁</span>
            Projects
          </a>
          <a
            href='/dashboard/content'
            className='flex items-center gap-3 px-4 py-3 rounded-lg text-muted hover:text-white hover:bg-surface/50 transition-colors'
          >
            <span className='w-5 h-5'>✏️</span>
            Content
          </a>
        </nav>
        <div className='mt-auto p-6'>
          <a
            href='/auth/logout'
            className='flex items-center gap-3 px-4 py-3 rounded-lg text-muted hover:text-red-400 transition-colors'
          >
            <span className='w-5 h-5'>🚪</span>
            Sign Out
          </a>
        </div>
      </aside>
      <main className='flex-1 overflow-y-auto p-8'>
        {children}
      </main>
    </div>
  );
}