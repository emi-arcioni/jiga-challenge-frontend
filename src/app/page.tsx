'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { GET } from '@/app/api/news';

interface Article {
  title: string;
  link: string;
}

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await GET();
        setArticles(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">News Reader</div>
        <input
          type="text"
          placeholder="Search news..."
          className="w-1/3 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-gray-200">
            Login
          </a>
        </div>
      </header>

      <div className="flex flex-1">
        <aside className="bg-gray-100 w-64 p-4 flex-shrink-0">
          <nav>
            <ul>
              <li className="mb-2">
                <a
                  href="#"
                  className="block p-2 rounded-md hover:bg-blue-600 hover:text-white"
                >
                  Technology
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="block p-2 rounded-md hover:bg-blue-600 hover:text-white"
                >
                  Sports
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="block p-2 rounded-md hover:bg-blue-600 hover:text-white"
                >
                  Business
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="block p-2 rounded-md hover:bg-blue-600 hover:text-white"
                >
                  Entertainment
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="flex-1 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {loading && <>Loading...</>}
            {articles.map((article, index) => (
              <article
                key={index}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg"
              >
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{article}</h2>
                  <a href="#" className="text-blue-600 mt-2 block">
                    Read more
                  </a>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 News Reader. All rights reserved.</p>
      </footer>
    </div>
  );
}
