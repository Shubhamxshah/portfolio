import Blog from '@/components/landing/Blog';
import Experience from '@/components/landing/Experience';
import Hero from '@/components/landing/Hero';
import Setup from '@/components/landing/Setup';
import React from 'react';

export default function page() {
  return (
    <div className="min-h-screen py-4">
      <Hero />
      <Experience />
      <Blog />
      <Setup />
    </div>
  );
}
