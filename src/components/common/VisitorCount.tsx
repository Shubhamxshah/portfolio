'use client';

import { useEffect, useState } from 'react';

export function VisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/visitors', { method: 'POST' })
      .then((r) => r.json())
      .then((data) => {
        if (data.count > 0) setCount(data.count);
      })
      .catch(() => {});
  }, []);

  if (!count) return null;

  return (
    <p className="text-secondary text-sm">
      You&apos;re the{' '}
      <b className="text-foreground">{count.toLocaleString()}</b>
      <sup>th</sup> visitor
    </p>
  );
}
