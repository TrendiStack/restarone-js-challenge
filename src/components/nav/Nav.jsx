import DesktopNav from "./DesktopNav";
import FilterBar from "./FilterBar";
import MobileNav from "./MobileNav";

const Nav = () => {
  return (
    <>
      <nav>
        <MobileNav />
        <DesktopNav />
        <FilterBar />
      </nav>
    </>
  );
};

export default Nav;
