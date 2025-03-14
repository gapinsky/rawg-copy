import GenresList from "./genres/GenresList";

import AsideNavList from "./AsideNavList";
const Aside = () => {
  return (
    <aside className="px-4 py-2 h-fit top-0 space-y-2  hidden w-56  lg:block  overflow-hidden ">
      <AsideNavList />
      <GenresList />
    </aside>
  );
};

export default Aside;
