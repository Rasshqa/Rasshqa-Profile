export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
  codeUrl?: string;
  liveUrl?: string;
  status: 'DEPLOYED' | 'IN_DEV' | 'ARCHIVED';
}

export const projects: Project[] = [
  {
    id: 'kasir-pro',
    title: 'KASIR_PRO',
    description: '[SYS_LOG]: Full-featured Point-of-Sale system with multi-tenant architecture, RBAC, and real-time transaction processing. Built for speed and scalability.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Blade', 'TailwindCSS'],
    icon: '💳',
    codeUrl: '#',
    liveUrl: '#',
    status: 'DEPLOYED',
  },
  {
    id: 'e-borrow',
    title: 'E-BORROW',
    description: '[SYS_LOG]: Enterprise-grade borrowing management system with luxury UI, role-based access, approval workflows, and comprehensive inventory tracking.',
    tags: ['Laravel', 'PHP', 'MySQL', 'TailwindCSS', 'Alpine.js'],
    icon: '📦',
    codeUrl: '#',
    liveUrl: '#',
    status: 'DEPLOYED',
  },
  {
    id: 'apollo-3d',
    title: 'APOLLO_EVO_3D',
    description: '[SYS_LOG]: Cinematic 3D web experience showcasing the Apollo Evo hypercar. High-performance Three.js rendering with GSAP scroll-driven animations.',
    tags: ['Three.js', 'GSAP', 'JavaScript', 'WebGL', 'HTML/CSS'],
    icon: '🏎️',
    codeUrl: '#',
    liveUrl: '#',
    status: 'DEPLOYED',
  },
  {
    id: 'project-alpha',
    title: 'PROJECT_ALPHA',
    description: '[SYS_LOG]: // CLASSIFIED — Next-gen mobile application. Full-stack development with cross-platform deployment capabilities. Status: Pre-development.',
    tags: ['Flutter', 'Dart', 'Firebase', 'REST API'],
    icon: '📱',
    status: 'IN_DEV',
  },
  {
    id: 'project-nexus',
    title: 'PROJECT_NEXUS',
    description: '[SYS_LOG]: // PENDING INIT — AI-powered data analytics dashboard. Real-time visualization and predictive modeling interface.',
    tags: ['Python', 'TensorFlow', 'React', 'D3.js'],
    icon: '🧠',
    status: 'IN_DEV',
  },
  {
    id: 'project-phantom',
    title: 'PROJECT_PHANTOM',
    description: '[SYS_LOG]: // QUEUED — Decentralized web application with cutting-edge security protocols and modern architecture patterns.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    icon: '👻',
    status: 'IN_DEV',
  },
];
