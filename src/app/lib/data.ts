import { createClient } from "@vercel/postgres";
import { neon } from '@neondatabase/serverless';
import { unstable_noStore as noStore } from 'next/cache';

export async function connectToDB() {
    const client = await createClient();
    await client.connect();

    try{
        if(client){
           console.log('Connected to database');
           return client; 
        }
    }catch(error){
        console.log('Error connecting to database', error);
    }
}

if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not defined');
}
const sql = neon(process.env.DATABASE_URL);

export async function getPosts() {
    try{
        noStore();
        await new Promise((resolve) => setTimeout(resolve, 3000));
        const data = await sql`SELECT * FROM posts`
        // console.log(data)
        return data;
    }catch(error){
        console.log('Error getting posts', error);
    }
}