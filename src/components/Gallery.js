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
            key={prop.id}
            id={prop.id}
          />
        ))}
    </div>
  );
};

const ImageCard = ({link, id}) => {
  return (
    <figure>
      <img src={link} alt="dog breed" />
      <figcaption>
        <span className="bold">Picture id: </span> {id}
      </figcaption>
    </figure>
  );
};

export default Gallery;
