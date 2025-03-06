
import { neon } from '@neondatabase/serverless';
//import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not defined');
}
const sql = neon(process.env.DATABASE_URL);

export async function GET() {
  try {
    const posts = await sql`SELECT * FROM posts ORDER BY date DESC LIMIT 2;`;
    return NextResponse.json({ posts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const title = searchParams.get('title');
  const content = searchParams.get('content');
  const date = searchParams.get('date');

  try {
    // SQL query to insert a new post
    await sql`INSERT INTO posts (id, title, author, content, date) VALUES (${id}, ${title}, 'harshita b', ${content}, ${date})`;
    return NextResponse.json({ message: 'Post successfully inserted' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

