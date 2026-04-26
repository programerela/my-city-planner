import { useState } from "react";
import { PLACES } from "../data/places";
import Sidebar from "../components/Sidebar";
// import SearchBar from "../components/SearchBar";
import PlaceGrid from "../components/PlaceGrid";
// import PlaceModal from "../components/PlaceModal";
import "../styles/homepage.css";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("sve");
  const [searchText, setSearchText] = useState("");
  const [selectedPlace, setSelectedPlace] = useState(null);

  const filteredPlaces = PLACES.filter((place) => {
    const matchCategory =
      activeCategory === "sve" || place.category === activeCategory;

    const matchSearch =
      place.name.toLowerCase().includes(searchText.toLowerCase()) ||
      place.description.toLowerCase().includes(searchText.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div className="home-page">
      {/* Hero banner */}
      <div className="home-page__hero">
        <div className="home-page__hero-icon">🗺️</div>
        <h1 className="home-page__hero-title">Dobrodošli u Novi Pazar!</h1>
        <p className="home-page__hero-subtitle">
          Pronađi znamenitosti, restorane, parking i još mnogo toga.
        </p>
      </div>

      {/* Wrapper za search + glavni layout */}
      <div className="home-page__outer">
        {/* Search bar — izdiže se iz heroa */}
        <div className="home-page__search">
          {/* <SearchBar value={searchText} onChange={setSearchText} /> */}
        </div>

        {/* Dvostupčani layout: sidebar + grid */}
        <div className="home-page__layout">
          {/* Lijeva kolona: sidebar s kategorijama */}
          <Sidebar
            activeCategory={activeCategory}
            onSelect={setActiveCategory}
          />

          {/* Desna kolona: rezultati */}
          <div className="home-page__main">
            <div className="home-page__results-bar">
              <p className="home-page__results-count">
                Pronađeno: <strong>{filteredPlaces.length}</strong> mesta
              </p>
            </div>

            <PlaceGrid places={filteredPlaces} />
          </div>
        </div>
      </div>

      {/* Modal s detaljima */}
      {/* {selectedPlace && (
        <PlaceModal
          place={selectedPlace}
          onClose={() => setSelectedPlace(null)}
        />
      )} */}
    </div>
  );
}
