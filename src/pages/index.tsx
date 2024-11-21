import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

interface Image {
  id: string;
  author: string;
  download_url: string;
}

const Home: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Load the page state from localStorage or query params on mount
  useEffect(() => {
    const savedPage = localStorage.getItem('currentPage');
    const queryPage = router.query.page;

    if (queryPage) {
      setPage(Number(queryPage));
    } else if (savedPage) {
      setPage(Number(savedPage));
    }
  }, [router.query.page]);

  // Fetch images whenever the page state changes
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=12`);
        setImages(response.data);
        setError(null);
        localStorage.setItem('currentPage', String(page)); // Save current page to localStorage
      } catch (err) {
        setError('Failed to fetch images. Please try again later.');
      }
    };
    fetchImages();
  }, [page]);

  // Navigate between pages and update the query parameter
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    router.push(`/?page=${newPage}`, undefined, { shallow: true });
  };

  return (
    <div className={styles.container}>
      <h1>Image Gallery</h1>
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.grid}>
        {images.map((img) => (
          <Link
            key={img.id}
            href={{
              pathname: `/editor/${img.id}`,
              query: { page }, // Pass current page as a query parameter
            }}
            passHref
          >
            <div className={styles.card}>
              <img src={img.download_url} alt={img.author} />
              <p>{img.author}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.pagination}>
        <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <button onClick={() => handlePageChange(page + 1)} disabled={images.length < 12}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
