import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { parseFile } from 'music-metadata';

export const dynamic = 'force-dynamic';

export async function GET() {
  const musicDir = path.join(process.cwd(), 'public', 'music');

  if (!fs.existsSync(musicDir)) {
    return NextResponse.json([]);
  }

  const files = fs.readdirSync(musicDir).filter(file => file.endsWith('.mp3'));

  const songs = await Promise.all(files.map(async (file) => {
    // Parse filename: "Artist - Title.mp3"
    const namePart = file.replace('.mp3', '');
    const parts = namePart.split(' - ');
    
    let artist = 'Unknown Artist';
    let title = namePart;

    if (parts.length >= 2) {
      artist = parts[0].trim();
      title = parts.slice(1).join(' - ').trim();
    }

    return {
      filename: file,
      title,
      artist,
    };
  }));

  return NextResponse.json(songs);
}
