import { useEffect } from 'react';

const shortNumber = number => {
  if (number >= 1_000_000) return (number / 1_000_000).toFixed(1) + 'M';
  if (number >= 1_000) return (number / 1_000).toFixed(1) + 'k';
  return number.toString();
};

const searchItems = ({ search, setSearchLoading, apps, setSearchedData }) => {
  useEffect(() => {
    const term = search.trim().toLowerCase();
    if (term) {
      setSearchLoading(true);
      const timer = setTimeout(() => {
        const filtered = apps.filter(app =>
          app.title.toLowerCase().includes(term)
        );
        setSearchedData(filtered);
        setSearchLoading(false);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setSearchedData(apps);
      setSearchLoading(false);
    }
  }, [search, apps]);
};
export { shortNumber, searchItems };
