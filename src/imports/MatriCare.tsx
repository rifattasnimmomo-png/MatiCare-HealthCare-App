import svgPaths from "./svg-fb67ctbup0";
import imgScreenshot202602070255361 from "figma:asset/0d9085c0acef3bfb5e633b5d2cadbf903ca6d6c2.png";
import imgScreenshot202602070255401 from "figma:asset/28994158843e9c89f9b49b01c5de0dfc7b7ea546.png";
import imgScreenshot202602070255451 from "figma:asset/ed221c04e294e56bd6f8cf34f0d2c89f124919a9.png";

function Time() {
  return (
    <div className="absolute h-[21px] left-[16px] top-[9px] w-[54px]" data-name="Time">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 21">
        <g id="Time">
          <g id="9:41">
            <path d={svgPaths.p3de63e00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3029a300} fill="var(--fill-0, black)" />
            <path d={svgPaths.p2e0c43c0} fill="var(--fill-0, black)" />
            <path d={svgPaths.p38350600} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="absolute contents left-[16px] top-[9px]" data-name="Left Side">
      <Time />
    </div>
  );
}

function RightSide() {
  return (
    <div className="absolute h-[11.336px] right-[44.67px] top-[16.33px] w-[66.662px]" data-name="Right Side">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66.6616 11.3362">
        <g id="Right Side">
          <g id="Battery">
            <path d={svgPaths.p30659700} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, black)" />
            <path d={svgPaths.p34388380} fill="var(--fill-0, black)" id="Combined Shape" opacity="0.4" />
            <path d={svgPaths.p2ed0dd00} fill="var(--fill-0, black)" id="Rectangle_2" />
          </g>
          <path d={svgPaths.p11931770} fill="var(--fill-0, black)" id="Wifi" />
          <path d={svgPaths.p3b31a00} fill="var(--fill-0, black)" id="Mobile Signal" />
        </g>
      </svg>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute h-[44px] left-0 overflow-clip top-0 w-[419px]" data-name="Status Bar">
      <LeftSide />
      <RightSide />
    </div>
  );
}

function Wifi() {
  return (
    <div className="absolute left-[288px] size-[13px] top-[237px]" data-name="Wifi">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="Wifi">
          <path d={svgPaths.p34fc3080} id="Icon" stroke="var(--stroke-0, #B2B2B2)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Heart() {
  return (
    <div className="absolute left-[46px] size-[11px] top-[388px]" data-name="Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_39_238)" id="Heart">
          <path d={svgPaths.p17fe3500} id="Icon" stroke="var(--stroke-0, #FF383C)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_39_238">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Droplet() {
  return (
    <div className="absolute left-[45px] size-[12px] top-[422px]" data-name="Droplet">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Droplet">
          <path d={svgPaths.p16e7ca00} id="Icon" stroke="var(--stroke-0, #0088FF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Thermometer() {
  return (
    <div className="absolute left-[46px] size-[11px] top-[456px]" data-name="Thermometer">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_39_233)" id="Thermometer">
          <path d={svgPaths.p2539ee80} id="Icon" stroke="var(--stroke-0, #FF8D28)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_39_233">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TrendingUp() {
  return (
    <div className="absolute left-[43px] size-[14px] top-[488px]" data-name="Trending up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Trending up">
          <path d={svgPaths.p9735100} id="Icon" stroke="var(--stroke-0, #CB30E0)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[43px] top-[385px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-center leading-[1.4] left-[61px] text-[12px] text-black top-[444.5px] tracking-[0.6px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">Heart Rate</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">Blood Oxygen</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">Temperature</p>
        <p className="mb-0">&nbsp;</p>
        <p>Blood Pressure</p>
      </div>
      <Heart />
      <Droplet />
      <Thermometer />
      <TrendingUp />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[250px] top-[385px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-center leading-[1.4] left-[250px] text-[12px] text-black top-[444.5px] tracking-[0.6px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">72 bpm</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">98%</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">98.7° F</p>
        <p className="mb-0">&nbsp;</p>
        <p>118/76</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[300px] top-[388px]">
      <div className="absolute bg-[#539877] h-[10px] left-[300px] rounded-[2px] top-[388px] w-[45px]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[307px] text-[8px] text-white top-[393.5px] tracking-[0.4px] w-[30px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.4] whitespace-pre-wrap">Normal</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[300px] top-[422px]">
      <div className="absolute bg-[#539877] h-[10px] left-[300px] rounded-[2px] top-[422px] w-[45px]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[307px] text-[8px] text-white top-[427.5px] tracking-[0.4px] w-[30px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.4] whitespace-pre-wrap">Normal</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[300px] top-[455px]">
      <div className="absolute bg-[#539877] h-[10px] left-[300px] rounded-[2px] top-[455px] w-[45px]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[307px] text-[8px] text-white top-[460.5px] tracking-[0.4px] w-[30px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.4] whitespace-pre-wrap">Normal</p>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[300px] top-[490px]">
      <div className="absolute bg-[#539877] h-[10px] left-[300px] rounded-[2px] top-[490px] w-[45px]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[307px] text-[8px] text-white top-[495.5px] tracking-[0.4px] w-[30px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.4] whitespace-pre-wrap">Normal</p>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[17px] top-[216px]">
      <div className="absolute bg-[#fdfdfd] h-[314px] left-[17px] rounded-[14px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.25)] top-[216px] w-[364px]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-medium justify-center leading-[0] left-[31px] text-[20px] text-black top-[243px] tracking-[-0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.4]">Health Overview</p>
      </div>
      <Wifi />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-medium justify-center leading-[0] left-[305px] text-[#c0c0c0] text-[12px] top-[243.5px] tracking-[0.6px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.4]">2 min ago</p>
      </div>
      <div className="absolute bg-[#ffe3f5] h-[91px] left-[34px] rounded-[14px] top-[274px] w-[328px]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[89px] text-[12px] text-black top-[332px] tracking-[0.6px] w-[207px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.4] whitespace-pre-wrap">Your health metrics are within normal range</p>
      </div>
      <div className="absolute left-[43px] size-[35px] top-[301px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
          <circle cx="17.5" cy="17.5" fill="var(--fill-0, #D23DA1)" id="Ellipse 161" r="17.5" />
        </svg>
      </div>
      <div className="absolute h-[16px] left-[48px] top-[311px] w-[25px]">
        <div className="absolute inset-[-9.56%_-2%_-11.78%_-2%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 19.4141">
            <path d={svgPaths.p1807de00} id="Vector 2355" stroke="var(--stroke-0, white)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-medium justify-center leading-[1.4] left-[89px] text-[16px] text-black top-[309px] tracking-[0.8px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">All vitals looking good</p>
        <p>&nbsp;</p>
      </div>
      <Group />
      <Group1 />
      <Group2 />
      <Group3 />
      <Group4 />
      <Group5 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-[17px] top-[540px]">
      <div className="absolute bg-[#fdfdfd] h-[140px] left-[17px] rounded-[14px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.25)] top-[540px] w-[364px]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-medium justify-center leading-[0] left-[31px] text-[20px] text-black top-[567px] tracking-[-0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.4]">{`Food & Supplements`}</p>
      </div>
    </div>
  );
}

function Calendar() {
  return (
    <div className="absolute left-[34px] size-[25px] top-[769px]" data-name="Calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Calendar">
          <path d={svgPaths.p1166480} id="Icon" stroke="var(--stroke-0, #D732A8)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute left-[15px] size-[28px] top-[1056px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Group 123219">
          <circle cx="14" cy="14" fill="var(--fill-0, #F03030)" id="Ellipse 162" r="14" />
          <g id="Alert circle">
            <path d={svgPaths.p19976ec0} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function MatriCare() {
  return (
    <div className="bg-white relative size-full" data-name="Matri Care">
      <div className="absolute bg-[#d53ea3] h-[380px] left-0 rounded-[34px] top-[-100px] w-[402px]" />
      <StatusBar />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[16px] text-[16px] text-black top-[67px] tracking-[-0.32px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.4]">Good Morning</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[17px] text-[32px] text-black top-[96.5px] tracking-[1.6px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.4]">Yeasmin</p>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.3)] h-[74px] left-[16px] rounded-[14px] top-[128px] w-[364px]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-medium h-[28px] justify-center leading-[0] left-[34px] text-[16px] text-white top-[147px] tracking-[0.8px] w-[175px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.4] whitespace-pre-wrap">Pregnancy Week</p>
      </div>
      <div className="absolute bg-white h-[11px] left-[34px] opacity-30 rounded-[5.5px] top-[166px] w-[333px]" />
      <div className="absolute bg-white h-[11px] left-[34px] rounded-[5.5px] top-[166px] w-[140px]" />
      <div className="absolute bg-[rgba(255,255,255,0.5)] border border-solid border-white h-[17px] left-[297px] opacity-50 rounded-[5px] top-[140px] w-[67px]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-medium justify-center leading-[0] left-[306px] text-[12px] text-white top-[148.5px] tracking-[0.6px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.4]">18 weeks</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-medium justify-center leading-[0] left-[34px] text-[8px] text-white top-[187.5px] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.4]">22 weeks to go</p>
      </div>
      <Group6 />
      <Group8 />
      <div className="absolute bg-white h-[279px] left-[18px] rounded-[13px] shadow-[0px_0px_4px_1px_rgba(0,0,0,0.25)] top-[744px] w-[364px]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[18px] text-[20px] text-black top-[719px] tracking-[1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.4]">Pregnancy Timeline</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-center leading-[1.4] left-[69px] text-[0px] text-black top-[875.5px] tracking-[0.8px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0 text-[16px]">Week 18 of 40</p>
        <p className="mb-0 text-[12px]">Second Trimester</p>
        <p className="mb-0 text-[12px]">&nbsp;</p>
        <p className="mb-0 text-[16px]">Current Week</p>
        <p className="mb-0 text-[12px]">{`Baby's hearing is developing`}</p>
        <p className="mb-0 text-[12px]">{`Size: approximately 14cm `}</p>
        <p className="mb-0 text-[12px]">&nbsp;</p>
        <p className="mb-0 text-[16px]">Week 20 (Milestone)</p>
        <p className="mb-0 text-[12px]">Halfway point • Anatomy scan scheduled</p>
        <p className="mb-0 text-[12px]">&nbsp;</p>
        <p className="mb-0 text-[16px]">Week 27 (Milestone)</p>
        <p className="text-[12px]">Third trimester begins</p>
      </div>
      <Calendar />
      <div className="absolute left-[43px] size-[7px] top-[827px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #D53EA3)" id="Ellipse 163" r="3" stroke="var(--stroke-0, #D53EA3)" />
        </svg>
      </div>
      <div className="absolute h-[63.5px] left-[43px] top-[898px] w-[7.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 63.5">
          <path d={svgPaths.paa59b00} fill="var(--fill-0, #DADADA)" id="Ellipse 164" stroke="var(--stroke-0, #DADADA)" />
        </svg>
      </div>
      <div className="absolute flex h-[33px] items-center justify-center left-[46px] top-[836px] w-[0.5px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "21.59375" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.87deg]">
          <div className="h-[33.004px] relative w-0">
            <div className="absolute inset-[-1.51%_-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 34.0038">
                <path d="M0.5 0.5V33.5038" id="Vector 2358" stroke="var(--stroke-0, #D53EA3)" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[74.5px] items-center justify-center left-[45.37px] top-[907px] w-[2.757px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "21.59375" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.87deg]">
          <div className="h-[74.484px] relative w-[1.629px]">
            <div className="absolute inset-[-0.67%_-30.7%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.6286 75.4839">
                <path d={svgPaths.p2d32ee00} id="Vector 2359" stroke="var(--stroke-0, #DADADA)" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Group7 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-medium justify-center leading-[1.4] left-[58px] text-[0px] text-black top-[1076.5px] tracking-[-0.4px] w-[239px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0 text-[16px]">Today’s Health Tip</p>
        <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal text-[#828282] text-[10px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`During week 18, your baby's hearing is developing. Try talking or singing to your baby - they can hear you!`}</p>
      </div>
      <div className="absolute h-[90px] left-[43px] top-[581px] w-[80px]" data-name="Screenshot 2026-02-07 025536 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot202602070255361} />
      </div>
      <div className="absolute h-[80px] left-[138px] top-[585px] w-[96px]" data-name="Screenshot 2026-02-07 025540 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot202602070255401} />
      </div>
      <div className="absolute h-[80px] left-[249px] top-[586px] w-[84px]" data-name="Screenshot 2026-02-07 025545 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot202602070255451} />
      </div>
    </div>
  );
}