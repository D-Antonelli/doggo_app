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
    return <p>Images are loading...</p>;
  }
};

const ImageCard = (props) => {
  return (
    <figure>
      <img src={props.link} alt={props.detail} />
      <figcaption>
        <span>picture id:</span> {props.text}
      </figcaption>
    </figure>
  );
};

export default Gallery;