const ProfilePage = () => {
  return (
    <section className="border-2 border-red-500 p-12 w-full">
      <div className="flex flex-col items-center space-y-16 border-green-500 border-2">
        <p className="flex text-7xl font-semibold">
          nickname
          <img
            src="/images/noImage.png"
            alt="profile pic"
            className="rounded-full h-20 aspect-square ml-6"
          />
        </p>
        <div className="text-3xl border-2 border-yellow-500">
          <p>Library</p>
         <p>
          <input type="text" placeholder="Search my library" />
          </p> 
        </div>
        <div className="text-3xl">
          <p>Wishlist</p>
          <input type="text" placeholder="Search my wishlist" />
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
