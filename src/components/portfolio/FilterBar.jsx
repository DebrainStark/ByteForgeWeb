import React from 'react';

const FilterBar = ({ filters, onFilterChange }) => {
  return (
    <section className="filter-bar-section py-4">
      <div className="container">
        <div className="filter-bar slide-in-element delay-2">
          <div className="row g-3 align-items-center">
            <div className="col-md-6">
              <p className="filter-label mb-md-0">
                <i className="bi bi-funnel-fill filter-icon"></i>
                Filter Projects:
              </p>
            </div>
            <div className="col-md-3">
              <div className="forge-select-container">
                <select 
                  className="forge-select"
                  value={filters.industry}
                  onChange={(e) => onFilterChange('industry', e.target.value)}
                >
                  <option value="all">All Industries</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="retail">Retail</option>
                  <option value="transportation">Transportation</option>
                  <option value="education">Education</option>
                  <option value="hospitality">Hospitality</option>
                </select>
                <div className="select-icon">
                  <i className="bi bi-chevron-down"></i>
                </div>
                <div className="select-glow"></div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="forge-select-container">
                <select 
                  className="forge-select"
                  value={filters.type}
                  onChange={(e) => onFilterChange('type', e.target.value)}
                >
                  <option value="all">All Project Types</option>
                  <option value="web">Web</option>
                  <option value="mobile">Mobile</option>
                  <option value="software">Software</option>
                </select>
                <div className="select-icon">
                  <i className="bi bi-chevron-down"></i>
                </div>
                <div className="select-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterBar;