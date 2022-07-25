import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";

const Navbar = () => {
  const buttonStyle = { position: "absolute", right: "3px", padding: "5px" };
  let currentTheme = 0;
  const click = () => {
    currentTheme = changeTheme();
    console.log(buttonTheme, "huuu");
  };

  const { globalTheme, changeTheme } = useContext(ThemeContext);

  let buttonTheme =
    globalTheme.id === 1
      ? { ...buttonStyle, background: "#52578a", color: "white", border: "0px" }
      : { ...buttonStyle, background: "white", color: "#9999" };
  return (
    <>
      <nav
        className="navbar "
        style={{ borderBottom: `1px solid ${globalTheme.border}` }}
      >
        <h1>KITCHEN</h1>

        <div>{new Date().toDateString()}</div>
      </nav>
      <button style={buttonTheme} onClick={() => click()}>
        Change Theme
      </button>
    </>
  );
};

export default Navbar;
