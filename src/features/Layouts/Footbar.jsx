import React from 'react';

const dataFootbar = [
  {
    id: 1,
    name: 'Meta',
  },
  {
    id: 2,
    name: 'About',
  },
  {
    id: 3,
    name: 'Blog',
  },
  {
    id: 4,
    name: 'jobs',
  },
  {
    id: 5,
    name: 'help',
  },
  {
    id: 6,
    name: 'help',
  },
  {
    id: 7,
    name: 'API',
  },
  {
    id: 7,
    name: 'API',
  },

];

export default function Footbar() {
  return (
    <div className="Footer w-96 h-32 pt-6 pb-12 flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="Footer w-96 h-14 px-96 justify-center items-center inline-flex">
        <div className="Footer grow shrink basis-0 self-stretch flex-col justify-center items-start inline-flex">
          <div className="FooterTop self-stretch justify-start items-start inline-flex">
            <div className="FooterItem px-2 pb-3 justify-start items-start gap-2.5 flex">
              <div className="Meta text-neutral-400 text-xs font-normal capitalize leading-3">Meta</div>
            </div>
            <div className="FooterItem px-2 pb-3 justify-start items-start gap-2.5 flex">
              <div className="Meta text-neutral-400 text-xs font-normal capitalize leading-3">About</div>
            </div>
            <div className="FooterItem px-2 pb-3 justify-start items-start gap-2.5 flex">
              <div className="Meta text-neutral-400 text-xs font-normal capitalize leading-3">Blog</div>
            </div>
            <div className="FooterItem px-2 pb-3 justify-start items-start gap-2.5 flex">
              <div className="Meta text-neutral-400 text-xs font-normal capitalize leading-3">jobs</div>
            </div>
            <div className="FooterItem px-2 pb-3 justify-start items-start gap-2.5 flex">
              <div className="Meta text-neutral-400 text-xs font-normal capitalize leading-3">Help</div>
            </div>
            <div className="FooterItem px-2 pb-3 justify-start items-start gap-2.5 flex">
              <div className="Meta text-neutral-400 text-xs font-normal capitalize leading-3">API</div>
            </div>
            <div className="FooterItem px-2 pb-3 justify-start items-start gap-2.5 flex">
              <div className="Meta text-neutral-400 text-xs font-normal capitalize leading-3">privacy</div>
            </div>
            <div className="FooterItem px-2 pb-3 justify-start items-start gap-2.5 flex">
              <div className="Meta text-neutral-400 text-xs font-normal capitalize leading-3">terms</div>
            </div>
            <div className="FooterItem px-2 pb-3 justify-start items-start gap-2.5 flex">
              <div className="Meta text-neutral-400 text-xs font-normal capitalize leading-3">top accounts</div>
            </div>
            <div className="FooterItem px-2 pb-3 justify-start items-start gap-2.5 flex">
              <div className="Meta text-neutral-400 text-xs font-normal capitalize leading-3">hashtags</div>
            </div>
            <div className="FooterItem px-2 pb-3 justify-start items-start gap-2.5 flex">
              <div className="Meta text-neutral-400 text-xs font-normal capitalize leading-3">locations</div>
            </div>
            <div className="FooterItem px-2 pb-3 justify-start items-start gap-2.5 flex">
              <div className="Meta text-neutral-400 text-xs font-normal capitalize leading-3">ınstagram lite</div>
            </div>
          </div>
          <div className="FooterBottom self-stretch py-1.5 justify-start items-start inline-flex">
            <div className="FooterItem px-2 pb-3 justify-start items-start flex">
              <div className="Frame7 justify-start items-start gap-2.5 flex">
                <div className="English text-neutral-400 text-xs font-normal capitalize leading-3">English</div>
              </div>
              <div className="Icon pl-1 justify-start items-start gap-2.5 flex">
                <div className="IconsArrow w-2.5 h-2.5 relative origin-top-left -rotate-180" />
              </div>
            </div>
            <div className="FooterItem pl-4 pr-2 pb-3 justify-start items-start gap-2.5 flex">
              <div className="Meta text-neutral-400 text-xs font-normal capitalize leading-3">© 2021 Instagram from Meta</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
