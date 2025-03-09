import GenresList from "../genres/GenresList";

import AsideNavList from "./AsideNavList";
const Aside = () => {
  return (
    <aside className="relative space-y-2 border-2 hidden w-56 lg:block ">
      <AsideNavList />
      <GenresList />
    </aside>
  );
};

export default Aside;
