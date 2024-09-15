"use client";

import React, { useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { FunnelIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Filter() {
  const [filtersState, setFiltersState] = useState({
    status: [
      { value: 'All', label: 'All', checked: false },
      { value: 'Registered', label: 'Registered', checked: false },
      { value: 'Pending', label: 'Pending', checked: false },
      { value: 'Abandoned', label: 'Abandoned', checked: false },
      { value: 'Others', label: 'Others', checked: false },
    ],
    owners: [
      { value: 'Tesla Inc.', label: 'Tesla Inc.', checked: false },
      { value: 'LegalForce Rapc.', label: 'LegalForce Rapc.', checked: false },
      { value: 'Space X.', label: 'Space X.', checked: false },
    ],
    lawFirms: [
      { value: 'Kirkland & Ellis', label: 'Kirkland & Ellis', checked: false },
      { value: 'Latham & Watkins', label: 'Latham & Watkins', checked: false },
      { value: 'DLA Piper', label: 'DLA Piper', checked: false },
    ],
  });

  // Calculate the number of selected filters
  const numSelectedFilters = Object.values(filtersState).reduce((total, filterGroup) => {
    return total + filterGroup.filter(option => option.checked).length;
  }, 0);

  // Determine the funnel icon color class
  const funnelIconColorClass =
    numSelectedFilters > 0 ? 'text-indigo-600' : 'text-gray-400 group-hover:text-gray-500';

  function handleStatusChange(selectedIdx) {
    setFiltersState(prevState => {
      const newStatus = prevState.status.map((option, idx) => ({
        ...option,
        checked: idx === selectedIdx,
      }));
      return {
        ...prevState,
        status: newStatus,
      };
    });
  }

  function handleOwnersChange(optionIdx) {
    setFiltersState(prevState => {
      const newOwners = prevState.owners.map((option, idx) => ({
        ...option,
        checked: idx === optionIdx ? !option.checked : option.checked,
      }));
      return {
        ...prevState,
        owners: newOwners,
      };
    });
  }

  function handleLawFirmsChange(optionIdx) {
    setFiltersState(prevState => {
      const newLawFirms = prevState.lawFirms.map((option, idx) => ({
        ...option,
        checked: idx === optionIdx ? !option.checked : option.checked,
      }));
      return {
        ...prevState,
        lawFirms: newLawFirms,
      };
    });
  }

  function handleClearAll() {
    setFiltersState(prevState => {
      const newStatus = prevState.status.map(option => ({ ...option, checked: false }));
      const newOwners = prevState.owners.map(option => ({ ...option, checked: false }));
      const newLawFirms = prevState.lawFirms.map(option => ({ ...option, checked: false }));
      return {
        status: newStatus,
        owners: newOwners,
        lawFirms: newLawFirms,
      };
    });
  }

  return (
    <div className="bg-white">
      {/* Filters */}
      <Disclosure
        as="section"
        aria-labelledby="filter-heading"
        className="grid items-center"
      >
        <h2 id="filter-heading" className="sr-only">
          Filters
        </h2>
        <div className="relative col-start-1 row-start-1 py-4">
          <div className="mx-auto flex max-w-7xl space-x-6 divide-x divide-gray-200 px-4 text-sm sm:px-6 lg:px-8">
            <div>
              <DisclosureButton className="group flex items-center font-medium text-gray-700">
                <FunnelIcon
                  aria-hidden="true"
                  className={`mr-2 h-5 w-5 flex-none ${funnelIconColorClass}`}
                />
                {numSelectedFilters > 0 ? `${numSelectedFilters} Filters` : 'Filters'}
              </DisclosureButton>
            </div>
            <div className="pl-6">
              <button type="button" className="text-gray-500" onClick={handleClearAll}>
                Clear all
              </button>
            </div>
          </div>
        </div>
        <DisclosurePanel className="py-10">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 px-4 text-sm sm:px-6 md:gap-x-6 lg:px-8">
            <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
              <fieldset>
                <legend className="block font-medium">Status</legend>
                <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                  {filtersState.status.map((option, optionIdx) => (
                    <div key={option.value} className="flex items-center text-base sm:text-sm">
                      <input
                        value={option.value}
                        checked={option.checked}
                        id={`status-${optionIdx}`}
                        name="status"
                        type="radio"
                        onChange={() => handleStatusChange(optionIdx)}
                        className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label htmlFor={`status-${optionIdx}`} className="ml-3 min-w-0 flex-1 text-gray-600">
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
              <fieldset>
                <legend className="block font-medium">Owners</legend>
                <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                  {filtersState.owners.map((option, optionIdx) => (
                    <div key={option.value} className="flex items-center text-base sm:text-sm">
                      <input
                        value={option.value}
                        checked={option.checked}
                        id={`owners-${optionIdx}`}
                        name="owners[]"
                        type="checkbox"
                        onChange={() => handleOwnersChange(optionIdx)}
                        className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label htmlFor={`owners-${optionIdx}`} className="ml-3 min-w-0 flex-1 text-gray-600">
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
            <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
              <fieldset>
                <legend className="block font-medium">Law Firms</legend>
                <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                  {filtersState.lawFirms.map((option, optionIdx) => (
                    <div key={option.value} className="flex items-center text-base sm:text-sm">
                      <input
                        value={option.value}
                        checked={option.checked}
                        id={`lawFirms-${optionIdx}`}
                        name="lawFirms[]"
                        type="checkbox"
                        onChange={() => handleLawFirmsChange(optionIdx)}
                        className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label htmlFor={`lawFirms-${optionIdx}`} className="ml-3 min-w-0 flex-1 text-gray-600">
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
          </div>
        </DisclosurePanel>
        <div className="col-start-1 row-start-1 py-4">
          <div className="mx-auto flex max-w-7xl justify-end px-4 sm:px-6 lg:px-8">
            <p className="px-4">Also Searching for</p>
            <span className="inline-flex items-center gap-x-1.5 rounded-lg bg-red-100 px-1.5 py-0.5 text-xs font-medium text-red-700">
              *ike
            </span>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}