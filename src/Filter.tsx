import { useEffect, useState } from "react";
import { useAppContext } from "./AppContextProvider";
import { Artwork } from "./model";

function Filter() {
  const { setArtworks, allArtWorks } = useAppContext();
  const [filters, setFilters] = useState({
    popular: false,
    display: false,
    public: false,
    mmedia: false,
    date_1: 0,
    date_2: 9999,
  });

  useEffect(() => {
    let filtered: Artwork[] = [...allArtWorks];

    if (filters.mmedia)
      filtered = filtered.filter(item => item.has_multimedia_resources);

    if (filters.display)
      filtered = filtered.filter(item => item.is_on_view);

    if (filters.public)
      filtered = filtered.filter(item => item.is_public_domain);

    if (filters.popular)
      filtered = filtered.filter(item => item.has_not_been_viewed_much);

    filtered = filtered.filter(
      item =>
        Number(item.date_start) >= filters.date_1 &&
        Number(item.date_end) <= filters.date_2
    );

    setArtworks(filtered);
  }, [filters, setFilters]);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    setFilters(prev => ({ ...prev, [id]: checked }));
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFilters(prev => ({ ...prev, [id]: Number(value) }));
  };

  const resetFilters =() => {
    setFilters({
    popular: false,
    display: false,
    public: false,
    mmedia: false,
    date_1: 0,
    date_2: 9999,
  });
  }

  return (
    <div>
      <input
        type="checkbox"
        id="popular"
        onChange={handleCheckboxChange}
        checked={filters.popular}
      />
      <label>Less popular</label>

      <input
        type="checkbox"
        id="display"
        onChange={handleCheckboxChange}
        checked={filters.display}
      />
      <label>On display</label>

      <input
        type="checkbox"
        id="public"
        onChange={handleCheckboxChange}
        checked={filters.public}
      />
      <label>On Public domain</label>

      <input
        type="checkbox"
        id="mmedia"
        onChange={handleCheckboxChange}
        checked={filters.mmedia}
      />
      <label>Has multimedia resources</label>

      <div>
        <label>Date range:</label>
        <input
          type="number"
          id="date_1"
          value={filters.date_1}
          onChange={handleDateChange}
        />
        <input
          type="number"
          id="date_2"
          value={filters.date_2}
          onChange={handleDateChange}
        />
      </div>

      <button onClick={()=>resetFilters()}>Reset Filters</button>
    </div>
  );
}

export default Filter;
