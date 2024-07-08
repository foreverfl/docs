import Logo from "./ui/Logo";
import SetLanguage from "./ui/SetLanguage";
import SetMode from "./ui/SetMode";

const Navbar = () => (
  <nav className="flex items-center justify-between p-4 bg-slate-50 dark:bg-neutral-800">
    <Logo />
    <div className="flex items-center space-x-4 pr-4 sm:pr-0">
      <SetLanguage />
      <SetMode />
    </div>
  </nav>
);

export default Navbar;
