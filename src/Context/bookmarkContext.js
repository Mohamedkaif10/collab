import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
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
    children: PropTypes.node,
  };

  return (
    <BookmarksContext.Provider
      value={{ bookmarkedJobs, addBookmark, removeBookmark, isJobBookmarked }}
    >
      {children}
    </BookmarksContext.Provider>
  );
};
