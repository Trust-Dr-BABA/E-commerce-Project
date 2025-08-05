'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Description({ I1 = "/samsungbanner1.jpg", I2 = "/samsungbanner2.png", I3 = "/samsungbanner3.png" }) {
  const [showMore, setShowMore] = useState(false);
  const [activeTab, setActiveTab] = useState('tab1');
  
    const tabs = [
      { id: 'tab1', label: 'DESCRIPTION' },
      { id: 'tab2', label: 'REVIEWS (5)' },
      { id: 'tab3', label: 'ADDITIONAL INFORMATION' },
    ];
  
    const renderContent = () => {
      switch (activeTab) {
        case 'tab1':
          return(
            <div className="mt-12 space-y-4">
              <p className="text-[14px]">Built for ultra-fast performance, the thin and lightweight Samsung Galaxy Tab S2 goes anywhere you go. Photos, movies and documents pop on a crisp, clear Super AMOLED display. Expandable memory lets you enjoy more of your favorite content. And connecting and sharing between all your Samsung devices is easier than ever. Welcome to life with the reimagined Samsung Galaxy Tab S2. Watch thev world come to life on your tablet&#39;s <span className="font-bold">Super AMOLED display *</span> . With deep contrast, rich colors and crisp details, you won&#39;t miss a thing</p>
              <div className="relative w-full h-[400px] rounded-[10px] overflow-hidden">
                <Image src={I1} alt="Banner" fill className="object-cover"/>
              </div>
              <p className="text-[13px] italic text-[#777777] text-center">* The Galaxy Tab S2&#39;s 4 : 3 ratio display provides you with an ideal environment for performing office tasks.</p>
              <h6 className="text-[18px] font-bold">From the manufacturer</h6>
              <p className="text-[14px] text-[#555555]">Dive into the blockbuster movies you can&#39;t wait to see. Switch between your favorite apps quickly and easily. The new and improved octa-core processor gives you the power and speed you need to see more and do more. Expand your tablet&#39;s memory from 32GB to up to an additional 128GB and enjoy more of your favorite music, photos, movies and games on the go with a microSD card. With Quick Connect, start a show on your Smart TV and, with the touch of a button, take it with you by moving it to your Galaxy Tab S2.</p>
              <p className="text-[14px] text-[#555555]">Or send videos and photos from your tablet screen to your TV screen to share with everyone in the room. Work effortlessly between your Samsung tablet and Samsung smartphone with SideSync. Quickly drag and drop photos between devices. And even respond to a call from your smartphone right on your tablet screen.</p>
              <div className="grid grid-col-1 md:grid-cols-2 gap-2">
                <div className="w-full aspect-[13/4] relative rounded-[10px] overflow-hidden">
                  <Image src={I2} alt="Banner" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                </div>
                <div className="w-full aspect-[13/4] relative rounded-[10px] overflow-hidden">
                  <Image src={I3} alt="Banner" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                </div>
              </div>
              <h6 className="text-[18px] font-bold">Samsung Galaxy Tab S2, 8-Inch, White</h6>
              <div className={`relative text-[14px] leading-relaxed text-[#666] transition-all duration-300 ${ showMore ? 'max-h-full' : 'max-h-[120px] overflow-hidden' }`}>
                <p>The Samsung Galaxy Tab S2 offers dual cameras: a rear-facing 8-megapixel camera with Auto Focus and a 2.1-megapixel camera on the front. Take high-quality pictures and video or video chat with friends, family, and colleagues. Customize your Galaxy Tab S2 with the apps you use most. The Samsung Galaxy Essentials widget provides a collection of premium complimentary apps optimized for your tablet screen. Select and download the apps you want to instantly upgrade your tablet experience.</p>
                {!showMore && (
                  <div className="absolute bottom-0 left-0 w-full h-[98%] bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                )}
              </div>
              <button onClick={() => setShowMore(!showMore)} className="mt-2 text-[#1ABA1A] font-semibold text-sm underline cursor-pointer">
                {showMore ? 'Show Less' : 'Show More'}
              </button>
            </div>
          );
        case 'tab2':
          return(
            <div></div>
          );
        case 'tab3':
          return(
            <div></div>
          );
        default:
          return null;
      }
    };

  return (
    <div className="bg-white p-8 rounded-[10px]">
      <div className="flex gap-6">
        {tabs.map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)}
            className={`flex items-center justify-between text-[18px] ${activeTab === tab.id ? 'font-bold' : 'text-[#666666]'} `}>
              {tab.label}
          </button>
        ))}
      </div>
      <div>
        {renderContent()}
      </div>
    </div>
  );
}