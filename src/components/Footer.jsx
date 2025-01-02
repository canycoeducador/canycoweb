import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <small> &copy; 2021 by Patricia Lobo. All rights reserved </small>
      <a href="./index.html#home">
        <div className="menu-up">
          <i className="fas fa-chevron-up"></i>
        </div>
      </a>
    </footer>
  );
}

export default Footer;
