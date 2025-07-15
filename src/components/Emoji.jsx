const Emoji = ({ emoji, name, definition }) => {
  return (
    <div className="description__container">
      <dt>
        <span aria-label={name}>{emoji}</span>
        <span>{name}</span>
      </dt>
      <dd>{definition}</dd>
    </div>
  );
};

export default Emoji;
