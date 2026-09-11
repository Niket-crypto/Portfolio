
import "./Header.css";

const Header = ({ menuOpen, setMenuOpen }: any) => {
  return (
    <div className="elements">
      <img src="./Img/photo_2026-04-28_14-00-51.jpg" alt="" />
      <h3>Serhienko Nikita Vadimovich</h3>
      
      <button 
        className={`burger-menu-btn ${menuOpen ? "active" : ""}`} 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        
        <span></span>
    
      </button>
    </div>
  );
}

export default Header;