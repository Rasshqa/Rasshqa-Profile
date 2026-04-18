'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { projects as fallbackProjects, Project } from '@/data/projects';
import ProjectCard from './ProjectCard';
import TypewriterText from '@/components/ui/TypewriterText';

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const [gitHubProjects, setGitHubProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch('https://api.github.com/users/Rasshqa/repos?sort=updated&per_page=6');
        if (!res.ok) throw new Error('Failed to fetch from GitHub');
        
        const data = await res.json();
        
        // Transform GitHub data to fit our cyberpunk Project interface
        const transformed: Project[] = data.map((repo: any) => {
          // Assign icons based on repo name keywords or language
          let icon = '🗃️';
          if (repo.name.toLowerCase().includes('apollo')) icon = '🏎️';
          if (repo.name.toLowerCase().includes('borrow')) icon = '📦';
          if (repo.name.toLowerCase().includes('pos') || repo.name.toLowerCase().includes('kasir')) icon = '💳';
          if (repo.language === 'Vue') icon = '🟢';
          if (repo.language === 'JavaScript' || repo.language === 'TypeScript') icon = '⚡';
          if (repo.language === 'CSS') icon = '🎨';

          return {
            id: repo.id.toString(),
            title: repo.name.toUpperCase().replace(/-/g, '_'),
            description: `[SYS_LOG]: ${repo.description || '// NO DESCRIPTION PROVIDED. CLASSIFIED OR EMPTY.'}`,
            tags: repo.language ? [repo.language] : ['MIXED_STACK'],
            icon: icon,
            codeUrl: repo.html_url,
            liveUrl: repo.homepage || undefined,
            status: repo.homepage ? 'DEPLOYED' : 'IN_DEV',
          };
        });
        
        setGitHubProjects(transformed);
      } catch (err) {
        console.error('GitHub fetch failed, using fallback database:', err);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchRepos();
  }, []);

  // Use GitHub data if available, otherwise use fallback data
  const displayProjects = gitHubProjects.length > 0 ? gitHubProjects : fallbackProjects;

  return (
    <section id="portfolio" className="relative py-24 lg:py-32 cyber-grid" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="font-mono text-xs text-neon-blue/50 tracking-[0.3em] uppercase">
              {'// SECTION_003'}
            </div>
            {/* Live Data Indicator */}
            {!isLoading && !hasError && (
              <div className="flex items-center gap-2 px-2 py-0.5 border border-neon-blue/30 bg-neon-blue/5 rounded-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse shadow-[0_0_5px_#00A6FF]" />
                <span className="font-mono text-[9px] text-neon-blue tracking-widest leading-none mt-[1px]">LIVE_GITHUB_UPLINK</span>
              </div>
            )}
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-stark-white tracking-wider">
            PROJECT <span className="text-copper text-glow-copper">DATABASE</span>
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-copper to-transparent mt-4" />
          <p className="mt-4 font-mono text-xs text-slate-gray/50 max-w-xl h-4">
            {isLoading 
              ? <TypewriterText text="[SYS_LOG]: Establishing uplink to GitHub database... Fetching latest repository coordinates." speed={20} />
              : <TypewriterText text="[SYS_LOG]: Displaying all registered projects. Live synchronization complete." speed={15} glitchChance={0.01} />}
          </p>
        </motion.div>

        {/* Loading State */}
        {isLoading && (
          <div className="h-64 flex flex-col items-center justify-center border border-copper/10 bg-obsidian-light rounded-sm">
             <div className="w-12 h-12 border border-t-copper border-r-transparent border-b-neon-blue border-l-transparent rounded-full animate-spin mb-4" />
             <div className="font-mono text-xs text-slate-gray/50 tracking-[0.3em]">
               <TypewriterText text="CONNECTING_TO_GITHUB_API..." speed={40} delay={300} />
             </div>
          </div>
        )}

        {/* Project grid */}
        {!isLoading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}

        {/* Footer stat */}
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-12 text-center font-mono text-xs text-slate-gray/30 tracking-widest"
          >
            TOTAL_ENTRIES: {displayProjects.length} // DEPLOYED: {displayProjects.filter(p => p.status === 'DEPLOYED').length} // IN_DEV: {displayProjects.filter(p => p.status === 'IN_DEV').length}
          </motion.div>
        )}
      </div>
    </section>
  );
}
