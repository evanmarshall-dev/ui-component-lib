const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        Copyright &copy; <strong>{currentYear}</strong>
      </p>
    </footer>
  );
};

export default Footer;
