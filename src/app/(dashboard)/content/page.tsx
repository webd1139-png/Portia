import { supabase } from '@/lib/supabase';
import { BIO, SERVICES, SKILLS } from '@/data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default async function ContentPage() {
  const { data: { session } } = await supabase.auth.getSession();

  return (
    <div className='space-y-8'>
      <div>
        <h1 className='text-3xl font-bold text-white mb-2'>Content Management</h1>
        <p className='text-muted'>Update biography, services, skills, and contact information.</p>
      </div>

      <div className='grid lg:grid-cols-2 gap-8'>
        {/* Biography Section */}
        <div className='rounded-xl border border-border bg-surface/50 backdrop-blur p-8'>
          <h2 className='text-xl font-bold text-white mb-6'>Biography</h2>
          <Textarea
            label='Biography'
            value={BIO.biography}
            placeholder='Enter your biography...'
            disabled
            className='h-64'
          />
          <Button variant='outline' size='sm' disabled className='mt-4'>
            Save Biography
          </Button>
        </div>

        {/* Services Section */}
        <div className='rounded-xl border border-border bg-surface/50 backdrop-blur p-8'>
          <h2 className='text-xl font-bold text-white mb-6'>Services ({SERVICES.length})</h2>
          <div className='space-y-4'>
            {SERVICES.map((service) => (
              <div key={service.id} className='p-4 rounded-lg border border-border bg-surface'>
                <h3 className='text-base font-semibold text-white mb-2'>{service.title}</h3>
                <p className='text-sm text-muted mb-3'>{service.shortDescription}</p>
                <Button variant='outline' size='sm' disabled>
                  Edit Service
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className='rounded-xl border border-border bg-surface/50 backdrop-blur p-8'>
        <h2 className='text-xl font-bold text-white mb-6'>Skills & Tech Stack</h2>
        <p className='text-muted mb-6'>Manage your technology proficiency levels.</p>
        <div className='grid md:grid-cols-2 gap-6'>
          {['frontend', 'backend', 'tools', 'ai'].map((category) => {
            const categorySkills = SKILLS.filter((s) => s.category === category);
            const labels: Record<string, string> = {
              frontend: 'Frontend',
              backend: 'Backend',
              tools: 'Tools',
              ai: 'AI',
            };
            return (
              <div key={category}>
                <h4 className='text-sm font-semibold text-muted uppercase tracking-wider mb-3'>
                  {labels[category]}
                </h4>
                <div className='flex flex-wrap gap-2'>
                  {categorySkills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border ${
                        skill.level === 'comfortable'
                          ? 'bg-primary/10 text-primary border-primary/20'
                          : skill.level === 'developing'
                          ? 'bg-cyan/10 text-cyan border-cyan/20'
                          : 'bg-muted/10 text-muted border-muted/20'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact Info */}
      <div className='rounded-xl border border-border bg-surface/50 backdrop-blur p-8'>
        <h2 className='text-xl font-bold text-white mb-6'>Contact Information</h2>
        <form className='space-y-4'>
          <Input
            label='Email'
            type='email'
            value='hello@borgtech.dev'
            disabled
          />
          <Input
            label='WhatsApp Number'
            type='tel'
            value='+1234567890'
            placeholder='+1234567890'
            disabled
          />
          <Input
            label='Location'
            type='text'
            value='Available for remote collaboration worldwide'
            disabled
          />
          <Button variant='outline' size='sm' disabled className='w-full'>
            Save Contact Info
          </Button>
        </form>
      </div>

      <div className='rounded-xl border border-border bg-surface/50 backdrop-blur p-8 text-center'>
        <p className='text-muted'>BorgTech Admin Portal - Content Management</p>
        <p className='text-xs text-muted/60 mt-2'>
          Changes require Supabase authentication and proper RLS policies.
        </p>
      </div>
    </div>
  );
}