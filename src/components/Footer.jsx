import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';

export default function Footer() {
  return (
    <footer className="relative  z-[1000]  bg-[#030617] text-white px-6 py-12 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Rudraology</h2>

        <p className="text-sm text-gray-400 mb-2 font-medium">Disclaimer :</p>
        <p className="text-sm text-gray-500 mb-6">
          This webinar is strictly for educational purposes. It does not offer financial or investment advice.
          Trading involves risk. Please consult a SEBI-registered adviser before making investment decisions.
          Investing in securities is subject to market risk.
        </p>

        <div className="flex justify-center gap-6 text-xl text-gray-400">
          <RxCross1 className="hover:text-white transition cursor-pointer" />
          <FaInstagram className="hover:text-white transition cursor-pointer" />
          <FaFacebook className="hover:text-white transition cursor-pointer" />
          <FaYoutube className="hover:text-white transition cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}
