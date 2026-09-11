
import { Link } from "react-router-dom";
import "./Buttons.css";
import { useLocation } from "react-router-dom";
const Buttons = ({ menuOpen, setMenuOpen }: any) => {
  const PageLinks = [{ Title: "Home", Path: "/" }, { Title: "Projects", Path: "/projects" }, { Title: "Hobbies", Path: "/hobbies" }];
  const location = useLocation();
  let [firstLink, secondLink]: Array<{ Title: string; Path: string } | null> = [null, null];
  switch(location.pathname) {
    case "/":
      firstLink = PageLinks[1];
      secondLink = PageLinks[2];
      break;
      case "/projects":
      firstLink = PageLinks[0];
      secondLink = PageLinks[2];
      break;
      case "/hobbies":
      firstLink = PageLinks[0];
      secondLink = PageLinks[1];
      break;
    default:
      firstLink = null;
      secondLink = null;
  }

return (
  <>
    <div className={`Buttons ${menuOpen ? "open" : ""}`}>
      <div className="button_1_wrapper">
        {firstLink && (
          <Link to={firstLink.Path} onClick={() => setMenuOpen(false)}>
            <button className="Button_1">{firstLink.Title}</button>
          </Link>
        )}
      </div>
      <div className="button_2_wrapper">
        {secondLink && (
          <Link to={secondLink.Path} onClick={() => setMenuOpen(false)}>
            <button className="Button_2">{secondLink.Title}</button>
          </Link>
        )}
      </div>
    </div></>)}
export default Buttons;