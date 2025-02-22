import { useState, useEffect } from "react";

// Load GitHub account and repo info from environment variables
const GITHUB_ACCOUNT = import.meta.env.VITE_PROJECT_GITHUB_ACCOUNT || "josephmienko";
const GITHUB_REPO = import.meta.env.VITE_PROJECT_GITHUB_REPO || "portfolio";

// Base GitHub raw content URL
const BASE_GITHUB_URL = `https://raw.githubusercontent.com/${GITHUB_ACCOUNT}/${GITHUB_REPO}/refs/heads/main/.data/`;

/**
 * Generic hook to fetch JSON data from GitHub (Project Store, Blog Store, etc.)
 * @param {string} filename - The name of the JSON file to fetch
 * @returns {T[]} - The fetched data
 */
export function useDataStore<T>(filename: string) {
  const url = `${BASE_GITHUB_URL}${filename}`;

  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(`[useDataStore] Fetching data from: ${url}`);
        const response = await fetch(url);
        console.log(`[useDataStore] HTTP Status: ${response.status}`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonData = await response.json();
        console.log(`[useDataStore] Successfully fetched data:`, jsonData);
        setData(jsonData);
      } catch (err) {
        console.error(`[useDataStore] Error fetching ${filename}:`, err);
        setError(`Failed to load ${filename}`);
      }
    };

    fetchData();
  }, [filename]);

  return { data, error };
}
