import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
const BookmarksContext = createContext();

export const useBookmarks = () => {
  return useContext(BookmarksContext);
};

export const BookmarksProvider = ({ children }) => {
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);

  const addBookmark = (jobId) => {
    setBookmarkedJobs((prevBookmarkedJobs) => [...prevBookmarkedJobs, jobId]);
  };

  const removeBookmark = (jobId) => {
    setBookmarkedJobs((prevBookmarkedJobs) =>
      prevBookmarkedJobs.filter((id) => id !== jobId)
    );
  };

  const isJobBookmarked = (jobId) => {
    return bookmarkedJobs.includes(jobId);
  };
  BookmarksProvider.propTypes = {
    children: PropTypes.node, // Validates that children is a node (e.g., JSX elements, strings, numbers)
  };

  return (
    <BookmarksContext.Provider
      value={{ bookmarkedJobs, addBookmark, removeBookmark, isJobBookmarked }}
    >
      {children}
    </BookmarksContext.Provider>
  );
};
