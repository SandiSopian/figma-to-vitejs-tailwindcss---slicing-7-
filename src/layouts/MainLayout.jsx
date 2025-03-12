import { quotesImg } from "../services/database";

const MainLayout = ({ children }) => {
  const { quoteTop, quoteBottom } = quotesImg;

  return (
    <>
      <main>
        {/* Konten utama */}
        <img src={quoteTop} alt="quoteTop" />
        <div>{children}</div>
        <img src={quoteBottom} alt="quoteBottom" />
      </main>
    </>
  );
};

export default MainLayout;
