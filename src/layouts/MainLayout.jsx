const MainLayout = ({ children }) => {
  return (
    <div className="">
      {/* Navbar tetap di atas */}
      <div className="">
        <nav>Navbar</nav>
      </div>

      {/* Konten utama */}
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
