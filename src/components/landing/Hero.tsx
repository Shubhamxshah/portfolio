import { heroConfig, socialLinks } from '@/config/Hero';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';

import Container from '../common/Container';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import LastPlayed from './LastPlayed';

export default function Hero() {
  const { name, title, subtitle, bio, avatar } = heroConfig;

  return (
    <Container>
      <div className="flex items-center gap-4">
        <Image
          src={avatar}
          alt={name}
          width={80}
          height={80}
          className="size-20 shrink-0 rounded-full bg-blue-300 dark:bg-yellow-300"
        />
        <div>
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="text-secondary mt-0.5 text-sm">
            {title} · {subtitle}
          </p>
        </div>
      </div>

      <p className="mt-4 text-base">{bio}</p>

      <div className="mt-3">
        <LastPlayed />
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        {socialLinks.map((link) => (
          <Tooltip key={link.name} delayDuration={0}>
            <TooltipTrigger asChild>
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-foreground size-5 transition-colors"
              >
                {link.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{link.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </Container>
  );
}
