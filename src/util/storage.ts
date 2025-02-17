export function isStorageAvailable(type: "localStorage" | "sessionStorage"): boolean {
    try {
      const storage = window[type];
      const testKey = "__storage_test__";
      storage.setItem(testKey, testKey);
      storage.removeItem(testKey);
      return true;
    } catch (error) {
      return false;
    }
  }
  
  export function safeSetItem(key: string, value: any): void {
    if (isStorageAvailable("localStorage")) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error("Failed to set localStorage item:", error);
      }
    } else {
      console.warn("localStorage is not available in this context.");
    }
  }
  
  export function safeGetItem<T>(key: string): T | null {
    if (isStorageAvailable("localStorage")) {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) as T : null;
      } catch (error) {
        console.error("Failed to get localStorage item:", error);
      }
    } else {
      console.warn("localStorage is not available in this context.");
    }
    return null;
  }
  
  export function safeRemoveItem(key: string): void {
    if (isStorageAvailable("localStorage")) {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.error("Failed to remove localStorage item:", error);
      }
    } else {
      console.warn("localStorage is not available in this context.");
    }
  }
  