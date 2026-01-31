import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { parseFile } from 'music-metadata';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const filename = searchParams.get('file');

  if (!filename) {
    return new NextResponse('Filename required', { status: 400 });
  }

  const filePath = path.join(process.cwd(), 'public', 'music', filename);

  if (!fs.existsSync(filePath)) {
    return new NextResponse('File not found', { status: 404 });
  }

  try {
    const metadata = await parseFile(filePath);
    const picture = metadata.common.picture?.[0];

    if (picture) {
      return new NextResponse(Buffer.from(picture.data), {
        headers: {
          'Content-Type': picture.format,
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      });
    } else {
        // Return a transparent 1x1 pixel or a placeholder logic
        // For now, let's return 404 so the frontend can show a fallback
        return new NextResponse('No cover art found', { status: 404 });
    }
  } catch (error) {
    console.error('Error parsing metadata:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
