export interface Milestone {
  id: string;
  year: string;
  title: string;
  description: string;
  status: 'COMPLETED' | 'IN_PROGRESS' | 'PENDING';
}

export const milestones: Milestone[] = [
  {
    id: 'ms-001',
    year: '2024',
    title: 'WAKIL_KETUA_MPK',
    description: '[LOG]: Elected as Vice Chairman of MPK (Student Council). Leadership protocol: ACTIVE.',
    status: 'COMPLETED',
  },
  {
    id: 'ms-002',
    year: '2024',
    title: 'DEBATE_CHAMPION_STREAK',
    description: '[LOG]: Consecutive debate competition victories. Argumentation engine: CALIBRATED.',
    status: 'COMPLETED',
  },
  {
    id: 'ms-003',
    year: '2025',
    title: 'FIRST_APP_DEPLOYED',
    description: '[LOG]: Kasir Pro — first full-stack application successfully deployed to production.',
    status: 'COMPLETED',
  },
  {
    id: 'ms-004',
    year: '2025',
    title: 'WEB_3D_MASTERY',
    description: '[LOG]: Apollo Evo 3D cinematic experience completed. Three.js proficiency: UNLOCKED.',
    status: 'COMPLETED',
  },
  {
    id: 'ms-005',
    year: '2025',
    title: 'FULLSTACK_CERTIFICATION',
    description: '[LOG]: // PENDING — Full-stack development certification program. Target: Q3 2025.',
    status: 'IN_PROGRESS',
  },
  {
    id: 'ms-006',
    year: '2026',
    title: 'MOBILE_DEV_LAUNCH',
    description: '[LOG]: // QUEUED — First mobile application deployment to App Store / Play Store.',
    status: 'PENDING',
  },
  {
    id: 'ms-007',
    year: '2026',
    title: 'DATA_ANALYST_INIT',
    description: '[LOG]: // QUEUED — Data analytics specialization program. Python + ML pipeline mastery.',
    status: 'PENDING',
  },
  {
    id: 'ms-008',
    year: '2027',
    title: 'PORTFOLIO_50_PROJECTS',
    description: '[LOG]: // LONG_RANGE — Accumulate 50+ production-grade projects across all platforms.',
    status: 'PENDING',
  },
];
