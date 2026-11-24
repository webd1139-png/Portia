# Borngreat Opoku Portfolio — Deployment Guide

Deploy this portfolio to Vercel with Supabase backend in 15 minutes.

## Prerequisites

- A [Vercel](https://vercel.com) account
- A [Supabase](https://supabase.com) account (for CMS dashboard)
- A [GitHub](https://github.com) account (for repository hosting)
- Optional: [Resend](https://resend.com) account (for contact form emails)

## Step 1: Push to GitHub

```bash
cd c:\Users\PC\vvv
git init
git add .
git commit -m "Initial portfolio build"
git branch -M main
git remote add origin https://github.com/borngreat/portfolio.git
git push -u origin main
```

Replace `borngreat/portfolio` with your actual GitHub repository name.

## Step 2: Deploy to Vercel

### Option A: Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and log in
2. Click **"Add New Project"**
3. Import your `borngreat/portfolio` GitHub repository
4. Configure the project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
5. Click **"Deploy"**

### Option B: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

Follow the prompts to link your repository and deploy.

## Step 3: Configure Environment Variables

In your Vercel project dashboard, go to **Settings → Environment Variables** and add:

| Variable | Value | Example |
|----------|-------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | `https://xxxxx.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key | `eyJ...` |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key | `eyJ...` |
| `NEXT_PUBLIC_GITHUB_USERNAME` | Your GitHub username | `borngreat` |
| `GITHUB_TOKEN` | GitHub personal access token | `ghp_...` |
| `RESEND_API_KEY` | Resend API key (optional) | `re_...` |
| `CONTACT_EMAIL` | Email for form submissions | `hello@borngreat.com` |
| `NEXT_PUBLIC_SITE_URL` | Your production URL | `https://borngreat.com` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number | `+1234567890` |

**Important:** Mark `SUPABASE_SERVICE_ROLE_KEY` and `GITHUB_TOKEN` as **server-side only** (do NOT expose to browser).

After adding variables, click **Redeploy** to apply them.

## Step 4: Set Up GitHub Token (Optional but Recommended)

GitHub API has rate limits for unauthenticated requests (60/hour). To avoid this:

1. Go to GitHub Settings → Developer settings → Personal access tokens → Fine-grained tokens
2. Create a new token with `public_repo` read access
3. Add it as `GITHUB_TOKEN` in Vercel environment variables
4. Redeploy

## Step 5: Set Up Contact Email (Resend)

1. Go to [resend.com](https://resend.com) and create an account
2. Verify your domain or use the default `onboarding@resend.dev`
3. Copy your API key
4. Add `RESEND_API_KEY` and `CONTACT_EMAIL` to Vercel
5. Redeploy

Without Resend, contact form submissions are logged to the server console only.

## Step 6: Supabase Setup (CMS Dashboard)

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Copy your **Project URL** and **anon public key** from Settings → API
3. Copy your **service role key** (keep this secret — server-side only)

### Create Database Tables

Run this SQL in the Supabase SQL Editor:

```sql
create extension if not exists "uuid-ossp";

create table profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text,
  email text,
  avatar_url text,
  role text default 'admin',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table projects (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  description text,
  short_description text,
  category text,
  status text default 'concept',
  featured boolean default false,
  published boolean default false,
  cover_image text,
  gallery_images text[] default '{}',
  live_url text,
  github_url text,
  technologies text[] default '{}',
  challenges text[] default '{}',
  approach text,
  functionality text[] default '{}',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table contact_submissions (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  email text not null,
  company text,
  service text,
  budget text,
  message text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table profiles enable row level security;
alter table projects enable row level security;
alter table contact_submissions enable row level security;

create policy "Public profiles are viewable by everyone" on profiles for select using ( true );
create policy "Users can insert their own profile" on profiles for insert with check ( auth.uid() = id );
create policy "Users can update own profile" on profiles for update using ( auth.uid() = id );
create policy "Projects are viewable by everyone" on projects for select using ( true );
create policy "Authenticated users can manage projects" on projects for all using ( auth.uid() is not null );
create policy "Anyone can insert contact submissions" on contact_submissions for insert with check ( true );
create policy "Authenticated users can view submissions" on contact_submissions for select using ( auth.uid() is not null );
```

## Step 7: Admin CMS Setup

1. Visit your deployed site at `https://your-site.vercel.app/auth/signup`
2. Create an admin account with your email
3. In Supabase, go to **Authentication → Users** and find your new user
4. Update their `role` to `admin` in the `profiles` table
5. Visit `https://your-site.vercel.app/dashboard` to access the CMS

## Step 8: Custom Domain (Optional)

1. In Vercel dashboard, go to **Settings → Domains**
2. Add your custom domain (e.g., `borngreat.com`)
3. Configure DNS as instructed by Vercel
4. Update `NEXT_PUBLIC_SITE_URL` environment variable
5. Redeploy

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Build fails | Check Vercel build logs; ensure all dependencies in package.json |
| GitHub integration not loading | Verify GITHUB_TOKEN is set; check rate limits |
| CMS dashboard not accessible | Verify Supabase credentials; check user role is admin |
| Contact form not sending | Verify RESEND_API_KEY; without it, submissions log to console |
| Images not loading | Ensure portrait.jpg exists in public/ folder |

## File Reference

```
vercel.json          # Vercel deployment configuration
.env.example         # Environment variable template
DEPLOYMENT.md        # This guide
.gitignore           # Git ignore rules
```

---

**BorgTech — Build • Innovate • Grow.**