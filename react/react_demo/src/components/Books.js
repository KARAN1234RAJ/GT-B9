const Books = (props) => {
  return (
    <div>
      <h2>Name:{props.name}</h2>
      <h3>Author:{props.author}</h3>
      <h4>Pages:{props.pages}</h4>
    </div>
  );
};

export default Books;
