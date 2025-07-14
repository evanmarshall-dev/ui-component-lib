const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      Copyright ©️ <strong>{currentYear}</strong>
    </>
  );
};

export default Footer;
