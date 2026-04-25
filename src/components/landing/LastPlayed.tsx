'use client';

import { useEffect, useState } from 'react';

const tracks = [
  {
    name: 'Madhav Mara Mohanji',
    artist: 'Rajesh Ahir, Geeta Rabari',
    url: 'https://open.spotify.com/track/7LKwdP5AcAOsmkcPQPiIWL',
  },
  {
    name: 'For A Reason',
    artist: 'Karan Aujla, Ikky',
    url: 'https://open.spotify.com/track/0cYohCh24y1aMjJmcS9RBl',
  },
  {
    name: 'Winning Speech',
    artist: 'Karan Aujla, Mxrci',
    url: 'https://open.spotify.com/track/3FqtduiaqnFYvBgKuc6QWQ',
  },
  {
    name: 'The Hills',
    artist: 'The Weeknd',
    url: 'https://open.spotify.com/track/7fBv7CLKzipRk6EC6TWHOB',
  },
  {
    name: 'Step On Up',
    artist: 'Ariana Grande',
    url: 'https://open.spotify.com/track/3K1y89UHuAEZbpiSPbtAae',
  },
];

export default function LastPlayed() {
  const [track, setTrack] = useState(tracks[0]);

  useEffect(() => {
    const random = tracks[Math.floor(Math.random() * tracks.length)];
    setTrack(random);
  }, []);

  return (
    <div className="flex items-center gap-2 text-sm">
      <svg
        viewBox="0 0 24 24"
        className="size-4 shrink-0 text-[#1DB954]"
        fill="currentColor"
      >
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
      <span className="text-secondary">
        Last played —{' '}
        <a
          href={track.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:text-secondary underline underline-offset-2 transition-colors"
        >
          {track.name} · {track.artist}
        </a>
      </span>
    </div>
  );
}
