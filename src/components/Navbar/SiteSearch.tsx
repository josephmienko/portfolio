import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

export function SiteSearch() {
  const [showSearch, setShowSearch] = useState(false);

  const handleShortcut = useCallback((event: KeyboardEvent) => {
    if ((event.metaKey || event.ctrlKey) && event.key === "k") {
      event.preventDefault();
      setShowSearch(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleShortcut);

    return () => {
      window.removeEventListener("keydown", handleShortcut);
    };
  }, [handleShortcut]); // Depend on `handleShortcut` to prevent unnecessary re-renders

  return (
    <>
      <button
        className="btn btn-outline-secondary search-icon-button"
        onClick={() => setShowSearch(true)}
        aria-label="Search (Command+K)"
      >
        <i className="bi bi-search"></i>
      </button>

      {showSearch &&
        createPortal(
          <div className="DocSearch-Modal">
            <header className="DocSearch-SearchBar">
              <form className="DocSearch-Form">
                <input
                  type="search"
                  className="DocSearch-Input"
                  placeholder="Search..."
                  autoFocus
                />
                <button type="reset" onClick={() => setShowSearch(false)}>Cancel</button>
              </form>
            </header>
          </div>,
          document.body
        )}
    </>
  );
}
