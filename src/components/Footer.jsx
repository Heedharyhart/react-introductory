import { FaRegCopyright } from 'react-icons/fa'

function Footer({text, bgColor, textColor }) {
  const footerStyle = {
    backgroundColor: bgColor,
    color: textColor,
    
  };

  return (
    <footer style={footerStyle} className="head">
      <div className="footer-container">
        <FaRegCopyright />
        <h2>{text}</h2>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  bgColor: "#FF6A95",
  textColor: "#fff",
  text: "copyright, Team explorer WTFC'23 ",
};

export default Footer;
