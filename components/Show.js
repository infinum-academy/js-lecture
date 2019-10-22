function Show({ name, onLike }) {
  return (
    <div>
      <h2>{name}</h2>
      <button onClick={onLike}>Like</button>
    </div>
  );
}

export default Show;
