import "../styles/gallery.scss";

const Gallery = (props) => {
  if (props.data) {
    return (
      <div className="gallery">
        {props.data.map((prop) => (
          <ImageCard
            link={prop.url}
            detail={prop.breeds.name}
            key={prop.id}
            text={prop.id}
          />
        ))}
      </div>
    );
  } else {
    return (
      <p>Loading images...</p>
    )
  }
};

const ImageCard = (props) => {
  return (
    <figure>
      <img src={props.link} alt={props.detail} />
      <figcaption>
        <span className="bold">picture id:</span> {props.text}
      </figcaption>
    </figure>
  );
};

export default Gallery;
