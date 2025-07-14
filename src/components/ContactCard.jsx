import Avatar from "./Avatar";

const ContactCard = ({ name, img, tel, email }) => {
  return (
    <article className="contactCard">
      <h2>{name}</h2>
      <Avatar img={img} />
      <p>{tel}</p>
      <p>{email}</p>
    </article>
  );
};

export default ContactCard;
