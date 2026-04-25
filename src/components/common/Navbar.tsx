import { navbarConfig } from '@/config/Navbar';
import { Link } from 'next-view-transitions';
import React from 'react';

import Container from './Container';
import { ThemeToggleButton } from './ThemeSwitch';

export default function Navbar() {
  return (
    <Container className="sticky top-0 z-20 py-4 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <nav className="flex items-center gap-5">
          {navbarConfig.navItems.map((item) => (
            <Link
              className="text-secondary hover:text-foreground text-sm transition-colors"
              key={item.label}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggleButton variant="circle" start="top-right" blur />
        </div>
      </div>
    </Container>
  );
}
