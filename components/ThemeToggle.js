import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from './Themes';
import { useContext } from "react";
import Button from "./Button";
const Toggle = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (

        <button className="rounded-full bg-white dark:bg-black shadow-3xl"  >
            <div className="transition duration-500 ease-in-out rounded-full  p-2 content-end">
                {theme === 'dark' ? (
                    <FaSun
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'light')}
                        className="text-black dark:text-bright-gray-50 text-2xl cursor-pointer"
                    />
                ) : (
                    <FaMoon
                        onClick={() => setTheme(theme === 'light' ? 'dark' : 'dark')}
                        className="text-black dark:text-bright-gray-50 text-2xl cursor-pointer"
                    />
                )}
            </div>
        </button>
    );
};

export default Toggle;