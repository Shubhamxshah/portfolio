import { type Experience, experiences } from '@/config/Experience';
import { cn } from '@/lib/utils';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';

import Container from '../common/Container';
import { Button } from '../ui/button';

export default function Experience() {
  return (
    <Container className="mt-16">
      <h2 className="text-2xl font-bold">Experience</h2>
      <div className="divide-border mt-4 flex flex-col divide-y">
        {experiences.slice(0, 3).map((experience: Experience) => (
          <div
            key={experience.company}
            className="flex flex-col gap-1 py-4 md:flex-row md:items-start md:justify-between"
          >
            <div className="flex items-center gap-3">
              <Image
                src={experience.image}
                alt={experience.company}
                width={40}
                height={40}
                className="size-10 shrink-0 rounded-md"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      'font-medium',
                      experience.isBlur ? 'blur-[5px]' : 'blur-none',
                    )}
                  >
                    {experience.company}
                  </span>
                  {experience.isCurrent && (
                    <span className="flex items-center gap-1 rounded-md bg-green-500/10 px-2 py-0.5 text-xs text-green-600 dark:text-green-400">
                      <span className="size-1.5 animate-pulse rounded-full bg-green-500" />
                      Working
                    </span>
                  )}
                </div>
                <p className="text-secondary text-sm">{experience.position}</p>
              </div>
            </div>
            <div className="text-secondary ml-13 flex flex-col text-sm md:ml-0 md:text-right">
              <span>
                {experience.startDate} –{' '}
                {experience.isCurrent ? 'Present' : experience.endDate}
              </span>
              <span>{experience.location}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <Button variant="outline">
          <Link href="/work-experience">Show all work experiences</Link>
        </Button>
      </div>
    </Container>
  );
}
