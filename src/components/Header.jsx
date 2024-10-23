import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../store/todosSlicer";
import moonIcon from "../assets/images/icon-moon.svg";
import sunIcon from "../assets/images/icon-sun.svg";
import { useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const themeState = useSelector((state) => state.todos.theme);

  let bgCssClass =
    "h-72 w-full bg-no-repeat bg-cover fixed top-0 left-0 right-0  -z-10 ";
  let toggleButton;
  function onToggleTheme() {
    dispatch(todoActions.onToggleTheme());
  }
  if (themeState === "light") {
    document.body.style.backgroundColor = "var(--Very-Light-Grayish-Blue)";
    bgCssClass +=
      " bg-[url('./assets/images/bg-mobile-light.jpg')] md:bg-[url('./assets/images/bg-desktop-light.jpg')]";
    toggleButton = <img src={moonIcon} alt="dark mode" className="w-5" />;
  }
  if (themeState === "dark") {
    document.body.style.backgroundColor = "var(--Very-Dark-Blue)";
    bgCssClass +=
      " bg-[url('./assets/images/bg-mobile-dark.jpg')] md:bg-[url('./assets/images/bg-desktop-dark.jpg')]";
    toggleButton = <img src={sunIcon} alt="dark mode" className="w-5" />;
  }
  useEffect(() => {
    localStorage.setItem("theme", themeState);
    document.body.classList = "";

    const selectedTheme = localStorage.getItem("theme");

    if (selectedTheme) {
      document.body.classList.add(selectedTheme);
    } else {
      document.body.classList.add("light");
    }
  }, [themeState]);

  return (
    <>
      <div className={bgCssClass} />

      <div className="flex justify-between w-80 md:w-[40vw] my-10">
        <h1 className="text-2xl font-semibold tracking-[.5rem] text-title ">
          TODO
        </h1>
        <button
          className="cursor-pointer active:scale-90 ease-in "
          onClick={onToggleTheme}
        >
          {toggleButton}
        </button>
      </div>
    </>
  );
};

export default Header;
