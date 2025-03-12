import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
const API_NINJAS_QUOTES_URL = "https://api.api-ninjas.com/v1/quotes";

const QuotesFetcher = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fungsi untuk mengambil quotes
  const fetchQuote = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(API_NINJAS_QUOTES_URL, {
        headers: {
          "X-Api-Key": import.meta.env.VITE_API_NINJAS_KEY,
        },
      });
      setQuote(response.data[0]); // Ambil satu kutipan
    } catch (err) {
      console.error(err);
      setError("Gagal mengambil kutipan. Coba lagi!");
    }
    setLoading(false);
  };

  // Ambil quotes saat pertama kali halaman dimuat
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <section className="flex flex-col md:items-center justify-center px-4 gap-3">
      {loading ? (
        <div className="flex justify-center items-center h-32">
          <p className="text-white text-sm sm:text-xl items-center">Loading...</p>
        </div>
      ) : error ? (
        <div className="flex justify-center items-center h-32">
          <p className="text-red-500 text-sm sm:text-xl items-center">{error}</p>
        </div>
      ) : (
        <div className="max-w-md mt-4 p-4">
          <p className="italic text-base mr-6 sm:mr-0">&ldquo;{quote.quote}&ldquo;</p>
          <p className="font-semibold text-right text-base mr-6 sm:mr-0">-{quote.author}</p>
        </div>
      )}

      {/* Tombol Refresh dengan Ikon */}
      <button onClick={fetchQuote} disabled={loading}>
        {loading ? "" : <FontAwesomeIcon icon={faRotate} className="text-xl text-white hover:text-gray-700 hover:bg-white cursor-pointer rounded-full transition duration-300" />}
      </button>
    </section>
  );
};

export default QuotesFetcher;
