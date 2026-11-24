"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Code, RefreshCw } from "lucide-react";
import { Section, Container } from "@/components/ui/section";
import { GITHUB_USERNAME } from "@/data";

interface Repo {
  name: string;
  full_name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  html_url: string;
  homepage: string | null;
}

interface GitHubState {
  repos: Repo[];
  loading: boolean;
  error: string | null;
}

const CACHE_KEY = "borgtech_github_repos";
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes

export default function GitHubIntegration() {
  const [state, setState] = React.useState<GitHubState>({
    repos: [],
    loading: true,
    error: null,
  });

  React.useEffect(() => {
    const fetchRepos = async () => {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_DURATION) {
          setState({ repos: data, loading: false, error: null });
          return;
        }
      }

      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
          {
            headers: {
              Accept: "application/vnd.github+json",
              "User-Agent": "borgtech-portfolio",
            },
            next: { revalidate: 600 },
          },
        );

        if (!res.ok) {
          throw new Error("Failed to fetch repositories");
        }

        const data: Repo[] = await res.json();
        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ data, timestamp: Date.now() }),
        );
        setState({ repos: data, loading: false, error: null });
      } catch (err) {
        setState({
          repos: [],
          loading: false,
          error: err instanceof Error ? err.message : "Unknown error",
        });
      }
    };

    fetchRepos();
  }, []);

  return (
    <Section id="github" padding="xl" className="bg-secondary">
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-cyan flex items-center justify-center shadow-lg shadow-primary/25">
              <Github className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-4xl font-bold leading-tight text-white">
              GitHub Activity
            </h2>
          </div>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Public repositories and recent activity.
          </p>
        </motion.div>

        {state.loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full mb-4"
            />
            <p className="text-muted">Loading repositories...</p>
          </div>
        ) : state.error ? (
          <div className="text-center py-20">
            <div className="w-10 h-10 rounded-full bg-surface/50 border border-border flex items-center justify-center mx-auto mb-4">
              <RefreshCw className="h-5 w-5 text-muted" />
            </div>
            <p className="text-muted">
              Unable to load GitHub data at this time. Please try again later.
            </p>
          </div>
        ) : state.repos.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted">
              No public repositories found for {GITHUB_USERNAME}.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {state.repos.map((repo) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-6 rounded-xl border border-border bg-surface/50 backdrop-blur-sm hover-lift-luxury"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">
                    {repo.name}
                  </h3>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted hover:text-white transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
                {repo.description && (
                  <p className="text-sm text-muted mb-4 line-clamp-2">
                    {repo.description}
                  </p>
                )}
                <div className="flex items-center gap-4 text-xs text-muted mb-4">
                  {repo.language && (
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1.5">
                    <Code className="h-3 w-3" />
                    {repo.stargazers_count} stars
                  </span>
                  <span className="flex items-center gap-1.5">
                    {repo.forks_count} forks
                  </span>
                </div>
                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-primary hover:text-cyan transition-colors"
                  >
                    View Live
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
