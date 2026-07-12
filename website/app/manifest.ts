import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'RAZEVÉL',
    short_name: 'RAZEVÉL',
    description: 'Crafted for Forever.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F7F3EC',
    theme_color: '#0B0B0B',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
