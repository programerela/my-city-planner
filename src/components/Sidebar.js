import { CATEGORIES } from "../data/categories";
import { PLACES } from "../data/places";
import "../styles/sidebar.css";

export default function Sidebar({ activeCategory, onSelect }) {
  // Brojimo koliko mjesta ima u svakoj kategoriji
  const countByCategory = (categoryId) =>
    PLACES.filter((p) => p.category === categoryId).length;

  return (
    <aside className="sidebar">
      <p className="sidebar__label">Kategorije</p>

      <ul className="sidebar__list">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          const count = cat.id === "sve" ? PLACES.length : countByCategory(cat.id);

          return (
            <li key={cat.id}>
              <button
                className={`sidebar__item ${isActive ? "sidebar__item--active" : ""}`}
                style={isActive ? { background: cat.color + "18", color: cat.color } : {}}
                onClick={() => onSelect(cat.id)}
              >
                {/* Lijeva strana: ikonica i naziv */}
                <span className="sidebar__item-left">
                  <span
                    className="sidebar__item-dot"
                    style={{ background: cat.color }}
                  />
                  <span className="sidebar__item-emoji">{cat.emoji}</span>
                  <span className="sidebar__item-label">{cat.label}</span>
                </span>

                {/* Desna strana: broj mjesta */}
                <span
                  className="sidebar__item-count"
                  style={isActive ? { background: cat.color, color: "white" } : {}}
                >
                  {count}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}