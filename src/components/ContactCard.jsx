import Avatar from "./Avatar";

const ContactCard = ({ name, img, tel, email, id }) => {
  return (
    <article className="contactCard">
      <p>Contact ID: {id}</p>
      <h2>{name}</h2>
      <Avatar img={img} />
      <p>{tel}</p>
      <p>{email}</p>
    </article>
  );
};

export default ContactCard;
