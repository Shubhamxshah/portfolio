import { footerConfig } from '@/config/Footer';
import { socialLinks } from '@/config/Hero';
import { Link } from 'next-view-transitions';
import React from 'react';

import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import Container from './Container';
import { VisitorCount } from './VisitorCount';

export default function Footer() {
  return (
    <footer className="border-border bg-muted/40 w-full border-t">
      <Container className="py-16">
        {/* Top row: Navigate + Connect */}
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          {/* Navigate */}
          <div>
            <p className="text-secondary mb-4 text-xs font-semibold tracking-widest uppercase">
              Navigate
            </p>
            <div className="flex max-w-xs flex-wrap gap-x-6 gap-y-2">
              {footerConfig.navigateLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-secondary hover:text-foreground text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="text-secondary mb-4 text-xs font-semibold tracking-widest uppercase">
              Connect
            </p>
            <div className="grid grid-cols-4 gap-2">
              {socialLinks.map((link) => (
                <Tooltip key={link.name} delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary border-border hover:bg-muted hover:text-foreground flex size-9 items-center justify-center rounded-md border transition-colors"
                    >
                      <span className="size-4">{link.icon}</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{link.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom: copyright + visitor count */}
        <div className="border-border mt-10 flex flex-col gap-2 border-t pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-secondary text-sm">
            &copy; {new Date().getFullYear()} {footerConfig.developer}.{' '}
            {footerConfig.copyright}
          </p>
          <VisitorCount />
        </div>
      </Container>
    </footer>
  );
}
