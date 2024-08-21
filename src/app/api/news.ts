import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(): Promise<string[]> {
  try {
    const response = await axios.get('http://localhost:3000');

    return response.data;
  } catch (error) {
    throw error;
  }
}
