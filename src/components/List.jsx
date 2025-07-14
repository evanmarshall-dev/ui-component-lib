const List = () => {
  // Object Data.
  const images = [
    {
      src: "https://picsum.photos/200?grayscale",
      alt: "A random 200px grayscale image from picsum",
    },
    {
      src: "https://picsum.photos/id/237/200",
      alt: "A 200px image of a black puppy from picsum",
    },
    {
      src: "https://picsum.photos/200",
      alt: "A random 200px image from picsum",
    },
  ];

  return (
    <>
      <h2 style={{ fontSize: "2rem", color: "var(--accentColor)" }}>
        Favorite Pictures
      </h2>
      {/* <ul>
          <li>Pizza</li>
          <li>Sushi</li>
          <li>Sandwiches</li>
        </ul> */}
      <div>
        <img src={images[0].src} alt={images[0].alt} />
        <img src={images[1].src} alt={images[1].alt} />
        <img src={images[2].src} alt={images[2].alt} />
      </div>{" "}
    </>
  );
};

export default List;
