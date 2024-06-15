import Logo from "../../Images/footer/Logo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="social">
        <div className="macname">
          <img src={Logo} alt="" />
          <h2>Mc Donald s</h2>
        </div>
        <div className="socials">
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-facebook-messenger"></i>
        </div>
      </div>
      <div className="usefullinks">
        <h3>USEFUL LINKS</h3>
        <a href="">Homepage</a>
        <a href="">Menu</a>
        <a href="">Sale off</a>
        <a href="">News</a>
        <a href="">Contact</a>
      </div>
      <div className="date">
        <h3>OPENING HOUR</h3>
        <span>Monday - Friday:9:00 - 23:00h</span>
        <span>Saturday:09:00 - 16:00h</span>
        <span>Sunday:12:00 - 18:00h</span>
      </div>
    </div>
  );
}

export default Footer;
