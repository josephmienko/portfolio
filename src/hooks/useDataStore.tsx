import { useState, useEffect } from "react";

export function useDataStore<T>(url: string) {
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    const fetchData = () => {
      fetch(url)
        .then((response) => response.json())
        .then((jsonData) => setData(jsonData))
        .catch((error) => console.error(`Error fetching ${url}:`, error));
    };

    fetchData();

    const interval = setInterval(fetchData, 5000); // Poll every 5 seconds

    return () => clearInterval(interval);
  }, [url]);

  return data;
}
