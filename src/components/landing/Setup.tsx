import { Link } from 'next-view-transitions';
import React from 'react';

import Container from '../common/Container';

const developmentItems = [
  {
    name: 'Gears',
    description: 'Tools, devices, and software I use to get work done.',
    href: '/gears',
  },
  {
    name: 'Setup',
    description: 'VSCode / Cursor configuration and extensions guide.',
    href: '/setup',
  },
];

const personalItems = [
  {
    name: 'Journey',
    description: 'My learning journey, milestones, and experiences so far.',
    href: '/journey',
  },
];

function ResourceList({
  items,
}: {
  items: { name: string; description: string; href: string }[];
}) {
  return (
    <div className="mt-3 flex flex-col gap-2">
      {items.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="group border-border hover:bg-muted flex flex-col rounded-lg border px-4 py-3 transition-colors"
        >
          <span className="text-sm font-medium">{item.name}</span>
          <span className="text-secondary text-sm">{item.description}</span>
        </Link>
      ))}
    </div>
  );
}

export default function Setup() {
  return (
    <Container className="mt-16">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Development</h2>
        <ResourceList items={developmentItems} />
      </div>

      <div>
        <h2 className="text-2xl font-bold">Personal</h2>
        <ResourceList items={personalItems} />
      </div>
    </Container>
  );
}
