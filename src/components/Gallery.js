import "../Styles/Gallery.scss";

const Gallery = (props) => {
  return (
    <div className="gallery">
      {props.data &&
        props.data[0] &&
        Object.entries(props.data[0]).length > 0 &&
        props.data.map((prop) => (
          <ImageCard
            link={prop.url}
            detail={prop.breeds.name}
            key={prop.id}
            text={prop.id}
          />
        ))}
    </div>
  );
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
