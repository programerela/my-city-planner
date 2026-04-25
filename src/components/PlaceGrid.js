export default function PlaceGrid({ places }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "33% 33% 33%" }}>
      {places.map((item, index) => {
        let image = item.image;
        return (
          <div style={{ display: "block" }}>
            <h4>
              {item.emoji} {item.name}
            </h4>
            <h5>{item.description}</h5>
            <p>{item.longDescription}</p>
            <h4>{item.adress}</h4>
            <h4>{item.rating}/5</h4>
            <img src={image} width="100px" height="100px" />
          </div>
        );
      })}
    </div>
  );
}
