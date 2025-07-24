import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram, faYoutube, faPinterestP } from '@fortawesome/free-brands-svg-icons';

export default function TopLinks() {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <p className="text-[18px] font-bold mb-[30px]">SWOO - 1ST NYC TECH ONLINE MARKET</p>
        <p className="text-[14px]">HOTLINE 24/7</p>
        <p className="text-[30px] font-bold text-[#1ABA1A] mb-[30px]">(025) 3686 25 16</p>
        <p className="text-[14px] w-[292.62px]">257 Thatcher Road St, Brooklyn, Manhattan, NY 10092</p>
        <p className="text-[14px]">contact@Swootechmart.com</p>
        <div className="flex flex-row mt-[40px]">
          <Link href="/" className="w-[35px] h-[35px] flex justify-center items-center">
            <FontAwesomeIcon icon={faTwitter} className="w-[18.2px] h-[18px]"/>
          </Link>
          <Link href="/" className="w-[35px] h-[35px] flex justify-center items-center">
            <FontAwesomeIcon icon={faFacebookF} className="w-[18.2px] h-[18px]"/>
          </Link>
          <Link href="/" className="w-[35px] h-[35px] flex justify-center items-center">
            <FontAwesomeIcon icon={faInstagram} className="w-[18.2px] h-[18px]"/>
          </Link>
          <Link href="/" className="w-[35px] h-[35px] flex justify-center items-center">
            <FontAwesomeIcon icon={faYoutube} className="w-[18.2px] h-[18px]"/>
          </Link>
          <Link href="/" className="w-[35px] h-[35px] flex justify-center items-center">
            <FontAwesomeIcon icon={faPinterestP} className="w-[18.2px] h-[18px]"/>
          </Link>
        </div>
      </div>
      <div className="space-y-6">
        <p className="text-[18px] font-bold">TOP CATEGORIES</p>
        <div className="flex flex-col text-[14px] text-[#666666] space-y-1">
          <Link href="/">Laptops</Link>
          <Link href="/">PC & Computers</Link>
          <Link href="/">Cell Phones</Link>
          <Link href="/">Tablets</Link>
          <Link href="/">Gaming & VR</Link>
          <Link href="/">Networks</Link>
          <Link href="/">Cameras</Link>
          <Link href="/">Sounds</Link>
          <Link href="/">Office</Link>
        </div>
      </div>
      <div className="space-y-6">
        <p className="text-[18px] font-bold">COMPANY</p>
        <div className="flex flex-col text-[14px] text-[#666666] space-y-1">
          <Link href="/">About Swoo</Link>
          <Link href="/">Contacts</Link>
          <Link href="/">Career</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Sitemap</Link>
          <Link href="/">Store Locations</Link>
        </div>
      </div>
      <div className="space-y-6">
        <p className="text-[18px] font-bold">HELP CENTER</p>
        <div className="flex flex-col text-[14px] text-[#666666] space-y-1">
          <Link href="/">Customer Service</Link>
          <Link href="/">Policy</Link>
          <Link href="/">Terms & Conditions</Link>
          <Link href="/">Track Order</Link>
          <Link href="/">FAQs</Link>
          <Link href="/">My Account</Link>
          <Link href="/">Product Support</Link>
        </div>
      </div>
      <div className="space-y-6">
        <p className="text-[18px] font-bold">PARTNER</p>
        <div className="flex flex-col text-[14px] text-[#666666] space-y-1">
          <Link href="/">Become Seller</Link>
          <Link href="/">Affiliate</Link>
          <Link href="/">Advertise</Link>
          <Link href="/">Partnership</Link>
        </div>
      </div>
    </div>
  );
}