import AWS from '@/components/technologies/AWS';
import Bun from '@/components/technologies/Bun';
import ExpressJs from '@/components/technologies/ExpressJs';
import FastAPI from '@/components/technologies/FastAPI';
import Figma from '@/components/technologies/Figma';
import GraphQL from '@/components/technologies/GraphQL';
import HuggingFace from '@/components/technologies/HuggingFace';
import Kubernetes from '@/components/technologies/Kubernetes';
import NestJs from '@/components/technologies/NestJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Postman from '@/components/technologies/Postman';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    company: 'CDMBase',
    position: 'Founding AI Engineer',
    location: 'United States (Remote)',
    image: '/company/promote.png',
    description: [
      'Performed domain-adaptive pre-training on LLaMA-2 7B using 20B tokens of data across 8x A100s with DeepSpeed ZeRO-2, improving domain perplexity by 34% over base model,reducing hallucination rate by 41% on internal eval set, enabling production deployment for coding agents',
      'Built coding agents from scratch,combining multi-agent swarms, MCPs to build automated workflows , running on an isolated sandbox',
      'Developed cutting-edge visual editor feature for enabling users to edit the content directly on the website enhancing UI/UX improvements',
      'Owning end-to-end frontend and backend delivery for billing, Slack alerts, and campaign analytics, etc',
    ],
    startDate: 'June 2025',
    endDate: 'Present',
    technologies: [
      {
        name: 'Graphql',
        href: 'https://apollographql.com',
        icon: <GraphQL />,
      },
      {
        name: 'NestJS',
        href: 'https://nestjs.com/',
        icon: <NestJs />,
      },
      {
        name: 'TypeScript',
        href: 'https://typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'FastAPI',
        href: 'https://bun.sh/',
        icon: <FastAPI />,
      },
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Figma',
        href: 'https://figma.com/',
        icon: <Figma />,
      },
      {
        name: 'kubernetes',
        href: 'https://kubernetes.com',
        icon: <Kubernetes />,
      },
      {
        name: 'AWS',
        href: 'https://aws.amazon.com/',
        icon: <AWS />,
      },
      {
        name: 'Postman',
        href: 'https://www.postman.com/',
        icon: <Postman />,
      },
    ],
    website: '#',
    github: '#',
    x: '#',
  },
  {
    isCurrent: false,
    company: 'AnswerThis (YC 25)',
    position: 'Fullstack AI Engineer',
    location: 'United States (remote)',
    image: '/company/answer.png',
    description: [
      'Built a RAG-based document retrieval system using vector databases to answer natural-language queries over large PDFs, books, and long-form articles.',
      'Independently architected and developed end-to-end full-stack solutions for core product features, resulting in 95% cost reduction in AI retrieval. Redesigned the product and improved UI/UX',
    ],
    startDate: 'June 2024',
    endDate: 'Apr 2025',
    technologies: [
      {
        name: 'FastAPI',
        href: 'https://fastapi.com/',
        icon: <FastAPI />,
      },
      {
        name: 'Huggingface',
        href: 'https://www.postman.com/',
        icon: <HuggingFace />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'Express',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
    ],
    website: 'https://answerthis.io',
    github: '#',
    x: 'https://x.com/answerthis',
    linkedin: 'https://www.linkedin.com/company/answerthis',
  },
  {
    isCurrent: false,
    company: 'one2n',
    position: 'Backend & Devops Engineer',
    location: 'Pune, India',
    image: '/company/one2n.png',
    description: [
      'Single-handedly engineered and deployed a scalable AI Interview Platform, implementing real-time leaderboard analytics and automated personalized interview feedback system, reducing per-session costs from *$7* to *$0.30*.',
      'Designed and developed a low latency trading platform, distributed microservices, message queues etc and deployed on kubernetes',
      'Engineered a complete Learning Management System (LMS) with an integrated Quiz Platform, featuring progress tracking and performance analytics.',
    ],
    startDate: 'Oct 2022',
    endDate: 'Mar 2024',
    technologies: [
      {
        name: 'kubernetes',
        href: 'https://nextjs.org/',
        icon: <Kubernetes />,
      },
      {
        name: 'Express',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Prisma',
        href: 'https://www.prisma.io/',
        icon: <Prisma />,
      },
      {
        name: 'PostgreSQL',
        href: 'https://www.postgresql.org/',
        icon: <PostgreSQL />,
      },
      {
        name: 'Vercel',
        href: 'https://vercel.com/',
        icon: <Vercel />,
      },
      {
        name: 'AWS',
        href: 'https://aws.amazon.com/',
        icon: <AWS />,
      },
      {
        name: 'Postman',
        href: 'https://www.postman.com/',
        icon: <Postman />,
      },
      {
        name: 'Bun',
        href: 'https://bun.sh/',
        icon: <Bun />,
      },
    ],
    website: 'https://one2n.io',
    github: '#',
  },
];
