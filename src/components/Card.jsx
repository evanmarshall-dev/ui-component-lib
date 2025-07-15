const Card = ({ title, content }) => {
  return (
    <section className="card">
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
};

export default Card;
