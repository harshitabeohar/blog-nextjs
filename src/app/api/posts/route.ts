// import { sql } from '@vercel/postgres';
import { neon } from '@neondatabase/serverless';
import { NextResponse } from 'next/server';
// import { auth } from "../../../../auth.config"

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
  // const session = await auth();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const title = searchParams.get('title');
  const content = searchParams.get('content');
  const date = searchParams.get('date');
  const author = searchParams.get('author');


  try {
    // if (!session) {
    //   return NextResponse.json({ message: 'user not authenticated' }, { status: 401 });
    // }
    // SQL query to insert a new post
    await sql`INSERT INTO posts (id, author, title, content, date) VALUES (${id}, ${author}, ${title}, ${content}, ${date});`;
    return NextResponse.json({ message: 'Post successfully inserted' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

