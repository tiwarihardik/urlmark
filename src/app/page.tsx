"use client"
import { useState, useEffect } from 'react';
import URLComponent from "@/app/URLComponent";
import UrlProp from "@/types";


export default function Home() {
  const [urls, setUrls] = useState<UrlProp[]>([]);

  // Simulating an API
  useEffect(() => {
    const fetchUrls = async () => {

      const fetchedUrls: UrlProp[] = [
        {
          title: 'Google',
          url: 'https://google.com',
          id: '1',
          about: 'The most popular search engine.',
        },
        {
          title: 'GitHub',
          url: 'https://github.com',
          id: '2',
          about: 'A platform for hosting and sharing code.',
        },
        {
          title: 'Twitter',
          url: 'https://twitter.com',
          id: '3',
          about: 'A microblogging and social networking service.',
        },
      ];

      // Set the fetched URLs to state
      setUrls(fetchedUrls);
    };

    fetchUrls();
  }, []);

  return (

        <div className="space-y-4 mt-8">
          {urls.map((urlData) => (
              <URLComponent key={urlData.id} {...urlData} />
          ))}
      </div>

  );
}
