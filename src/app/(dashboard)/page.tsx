import { supabase } from '@/lib/supabase';
import { PROJECTS } from '@/data';

export default async function DashboardPage() {
  const { data: { session } } = await supabase.auth.getSession();

  const projectCount = PROJECTS.filter((p) => p.published).length;
  const draftCount = PROJECTS.filter((p) => !p.published).length;

  return (
    <div className='space-y-8'>
      <div>
        <h1 className='text-3xl font-bold text-white mb-2'>Dashboard</h1>
        <p className='text-muted'>Welcome back, {session?.user?.user_metadata?.full_name || 'Developer'}</p>
      </div>

      <div className='grid md:grid-cols-4 gap-6'>
        <div className='p-6 rounded-xl border border-border bg-surface/50 backdrop-blur-sm'>
          <div className='text-xs font-semibold text-muted uppercase tracking-wider mb-2'>Published Projects</div>
          <div className='text-4xl font-bold text-white'>{projectCount}</div>
        </div>
        <div className='p-6 rounded-xl border border-border bg-surface/50 backdrop-blur-sm'>
          <div className='text-xs font-semibold text-muted uppercase tracking-wider mb-2'>Draft Projects</div>
          <div className='text-4xl font-bold text-cyan'>{draftCount}</div>
        </div>
        <div className='p-6 rounded-xl border border-border bg-surface/50 backdrop-blur-sm'>
          <div className='text-xs font-semibold text-muted uppercase tracking-wider mb-2'>Total Projects</div>
          <div className='text-4xl font-bold text-white'>{PROJECTS.length}</div>
        </div>
        <div className='p-6 rounded-xl border border-border bg-surface/50 backdrop-blur-sm'>
          <div className='text-xs font-semibold text-muted uppercase tracking-wider mb-2'>Last Updated</div>
          <div className='text-4xl font-bold text-muted'>Today</div>
        </div>
      </div>

      <div className='rounded-xl border border-border bg-surface/50 backdrop-blur-sm p-6'>
        <h2 className='text-xl font-bold text-white mb-6'>Recent Projects</h2>
        <div className='overflow-x-auto'>
          <table className='w-full text-left'>
            <thead>
              <tr className='border-b border-border pb-4 text-xs font-semibold text-muted uppercase tracking-wider'>
                <th className='pb-4'>Title</th>
                <th className='pb-4'>Status</th>
                <th className='pb-4'>Visibility</th>
                <th className='pb-4'>Updated</th>
                <th className='pb-4 text-right'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {PROJECTS.map((project) => (
                <tr key={project.id} className='border-b border-border/50 hover:bg-surface/30 transition-colors'>
                  <td className='py-4 text-white'>{project.title}</td>
                  <td className='py-4'>
                    <span className='px-2 py-1 rounded text-xs border'>
                      {project.status === 'completed' ? 'Live' : project.status === 'prototype' ? 'Prototype' : 'Concept'}
                    </span>
                  </td>
                  <td className='py-4'>
                    <span className={`px-2 py-1 rounded text-xs ${project.published ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-muted/10 text-muted border-muted/20'}`}>
                      {project.published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className='py-4 text-muted'>{new Date(project.updatedAt).toLocaleDateString()}</td>
                  <td className='py-4 text-right'>
                    <a href={`/dashboard/projects/${project.id}`} className='text-primary hover:text-cyan transition-colors'>Edit</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}