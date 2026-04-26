import "../styles/PlaceGrid.css";

export default function PlaceGrid({ places }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "33% 33% 33%",
      }}
      className="place__grid"
    >
      {places.map((item, index) => {
        let image = item.image;
        return (
          <div className="place">
            <h4 className="place__name">
              {item.emoji} {item.name}
            </h4>
            <h5 className="place__short__description">{item.description}</h5>
            <p>{item.longDescription.slice(0, 200)}...</p>
            <h4>{item.adress}</h4>
            <h4>{item.rating}/5</h4>
            <img src={image} width="100px" height="100px" />
          </div>
        );
      })}
    </div>
  );
}
