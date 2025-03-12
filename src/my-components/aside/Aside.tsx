import GenresList from "./genres/GenresList";

import AsideNavList from "./AsideNavList";
const Aside = () => {
  return (
    <aside className=" h-fit top-0 space-y-2  hidden w-56 lg:block ">
      <AsideNavList />
      <GenresList />
    </aside>
  );
};

export default Aside;
