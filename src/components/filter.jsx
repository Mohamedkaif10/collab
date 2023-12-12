import { useState, useEffect } from 'react';

const FilteredJobCOmponents = () => {
  const [jobDetails, setJobDetails] = useState([]);
  const [filters, setFilters] = useState({
    location: '',
    stipend_amount: 0,
    // Add more filters as needed
  });

  const fetchFilteredJobDetails = async () => {
    try {
      const response = await fetch(`/filtered-job-details?location=${filters.location}&stipend_amount=${filters.stipend_amount}`);
      const data = await response.json();

      if (response.ok) {
        setJobDetails(data.jobDetails);
      } else {
        console.error('Error fetching filtered job details:', data.error);
        // Handle the error appropriately, e.g., display an error message to the user
      }
    } catch (error) {
      console.error('Error fetching filtered job details:', error);
      // Handle the error appropriately, e.g., display an error message to the user
    }
  };

  useEffect(() => {
    // Fetch filtered job details when the component mounts or when filters change
    fetchFilteredJobDetails();
  }, [filters]);

  const handleFilterChange = (filterName, filterValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: filterValue,
    }));
  };

  // Render your job details using the filtered jobDetails state

  return (
    <div>
      {/* Add filter input fields and buttons as needed */}
      <input
        type="text"
        placeholder="Location"
        value={filters.location}
        onChange={(e) => handleFilterChange('location', e.target.value)}
      />
      <input
        type="number"
        placeholder="Stipend Amount"
        value={filters.stipend}
        onChange={(e) => handleFilterChange('stipend_amount', e.target.value)}
      />
      {/* Add more filter inputs as needed */}
      <button onClick={fetchFilteredJobDetails}>Apply Filters</button>

      {/* Render your job details using the filtered jobDetails state */}
      {jobDetails.map((job) => (
        // Render job details here
        <div key={job.id}>
          <p>{job.job_title}</p>
          {/* Add more job details rendering as needed */}
        </div>
      ))}
    </div>
  );
};

export default FilteredJobCOmponents;
