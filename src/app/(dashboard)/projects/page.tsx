import { supabase } from '@/lib/supabase';
import { PROJECTS } from '@/data';
import Link from 'next/link';

export default async function ProjectsPage() {
  const { data: { session } } = await supabase.auth.getSession();

  return (
    <div className='space-y-8'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-3xl font-bold text-white mb-2'>Project Management</h1>
          <p className='text-muted'>Manage your portfolio projects.</p>
        </div>
        <Link
          href='/dashboard/projects/create'
          className='flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors'
        >
          <span>+</span> Create Project
        </Link>
      </div>

      <div className='rounded-xl border border-border bg-surface/50 backdrop-blur overflow-hidden'>
        <table className='w-full'>
          <thead>
            <tr className='border-b border-border bg-surface/80'>
              <th className='px-6 py-4 text-left text-xs font-semibold text-muted uppercase tracking-wider'>Title</th>
              <th className='px-6 py-4 text-left text-xs font-semibold text-muted uppercase tracking-wider'>Category</th>
              <th className='px-6 py-4 text-left text-xs font-semibold text-muted uppercase tracking-wider'>Status</th>
              <th className='px-6 py-4 text-left text-xs font-semibold text-muted uppercase tracking-wider'>Visibility</th>
              <th className='px-6 py-4 text-right text-xs font-semibold text-muted uppercase tracking-wider'>Actions</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-border/50'>
            {PROJECTS.map((project) => (
              <tr key={project.id} className='hover:bg-surface/30 transition-colors'>
                <td className='px-6 py-4 text-white'>{project.title}</td>
                <td className='px-6 py-4 text-muted'>
                  <span className='px-2 py-1 rounded bg-surface border border-border text-xs'>
                    {project.categoryLabel}
                  </span>
                </td>
                <td className='px-6 py-4 text-muted'>
                  <span className={`px-2 py-1 rounded text-xs border ${
                    project.status === 'completed'
                      ? 'bg-green-500/10 text-green-400 border-green-500/20'
                      : project.status === 'prototype'
                      ? 'bg-cyan/10 text-cyan border-cyan/20'
                      : 'bg-muted/10 text-muted border-muted/20'
                  }`}>
                    {project.statusLabel}
                  </span>
                </td>
                <td className='px-6 py-4 text-muted'>
                  <span className={`px-2 py-1 rounded text-xs border ${
                    project.published
                      ? 'bg-green-500/10 text-green-400 border-green-500/20'
                      : 'bg-muted/10 text-muted border-muted/20'
                  }`}>
                    {project.published ? 'Published' : 'Draft'}
                  </span>
                </td>
                <td className='px-6 py-4 text-right'>
                  <div className='flex items-center justify-end gap-2'>
                    <Link
                      href={`/dashboard/projects/${project.id}`}
                      className='text-primary hover:text-cyan transition-colors'
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => {}}
                      className='text-muted hover:text-red-400 transition-colors'
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}