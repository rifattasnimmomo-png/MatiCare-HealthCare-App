import svgPaths from "../../imports/svg-fb67ctbup0";
import { Pill, Droplet, Utensils } from 'lucide-react';
import { getWeekInsight, getMilestoneWeeks } from '../data/pregnancyWeekInsights';

interface HomeDashboardProps {
  onNavigate?: (screen: string) => void;
  userName?: string;
  pregnancyWeek?: number;
}

function StatusBar() {
  return (
    <div className="absolute h-[44px] left-0 overflow-clip top-0 w-full" data-name="Status Bar">
     
      
    </div>
  );
}

export function HomeDashboard({ onNavigate, userName, pregnancyWeek }: HomeDashboardProps) {
  const currentWeek = pregnancyWeek || 18;
  const weekInsight = getWeekInsight(currentWeek);
  const milestoneWeeks = getMilestoneWeeks(currentWeek);
  const weeksToGo = 40 - currentWeek;
  const progressPercentage = (currentWeek / 40) * 100;
  
  // Calculate the width of the progress bar (relative to container)
  const progressBarWidth = `${progressPercentage}%`;

  return (
    <div className="bg-white dark:bg-gray-900 relative size-full overflow-auto pb-24" data-name="Matri Care">
      <div className="absolute bg-[#407CE2] h-[380px] left-0 rounded-[34px] top-[-100px] w-full" />
      
      <StatusBar />
      
      {/* Good Morning Text */}
      <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[0] left-[16px] text-[16px] text-black dark:text-white top-[67px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[1.4]">Good Morning</p>
      </div>
      
      {/* Name */}
      <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-semibold justify-center leading-[0] left-[17px] text-[32px] text-black dark:text-white top-[96.5px] tracking-[1.6px] whitespace-nowrap">
        <p className="leading-[1.4]">{userName || "Yeasmin"}</p>
      </div>
      
      {/* Pregnancy Week Card */}
      <div className="absolute bg-[rgba(255,255,255,0.3)] h-[74px] left-[16px] rounded-[14px] top-[128px] w-[calc(100%-32px)]">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-medium h-[28px] justify-center leading-[0] left-[18px] text-[16px] text-white top-[19px] tracking-[0.8px] whitespace-nowrap">
          <p className="leading-[1.4]">Pregnancy Week</p>
        </div>
        
        {/* Progress Bar Background */}
        <div className="absolute bg-white h-[11px] left-[18px] opacity-30 rounded-[5.5px] top-[38px] right-[18px]" />
        {/* Progress Bar Fill - Dynamic */}
        <div 
          className="absolute bg-white h-[11px] left-[18px] rounded-[5.5px] top-[38px]"
          style={{ width: `calc((100% - 36px) * ${currentWeek} / 40)` }}
        />
        
        {/* weeks badge - Dynamic - Rectangular with border */}
        <div className="absolute bg-[rgba(255,255,255,0.5)] border-[1.5px] border-solid border-white h-[20px] right-[18px] rounded-[6px] top-[10px] px-3 flex items-center justify-center min-w-[60px]">
          <span className="font-['Instrument_Sans',sans-serif] font-medium text-[12px] text-white tracking-[0.6px] whitespace-nowrap">
            {currentWeek} weeks
          </span>
        </div>
        
        {/* weeks to go - Dynamic */}
        <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-medium justify-center leading-[0] left-[18px] text-[8px] text-white top-[59px] tracking-[0.4px] whitespace-nowrap">
          <p className="leading-[1.4]">{weeksToGo} weeks to go</p>
        </div>
      </div>
      
      {/* Health Overview Card */}
      <button
        onClick={() => onNavigate?.('vitals')}
        className="absolute left-[17px] top-[216px] w-[calc(100%-34px)]"
      >
        <div className="bg-[#fdfdfd] dark:bg-gray-800 h-[314px] rounded-[14px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.25)] w-full" />
        
        {/* Health Overview Title */}
        <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-medium justify-center leading-[0] left-[14px] text-[20px] text-black dark:text-white top-[27px] tracking-[-0.4px] whitespace-nowrap">
          <p className="leading-[1.4]">Health Overview</p>
        </div>
        
        {/* Wifi Icon */}
        <div className="absolute right-[76px] size-[13px] top-[21px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <path d={svgPaths.p34fc3080} stroke="var(--stroke-0, #B2B2B2)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        
        {/* 2 min ago */}
        <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-medium justify-center leading-[0] right-[14px] text-[#c0c0c0] text-[12px] top-[27.5px] tracking-[0.6px] whitespace-nowrap">
          <p className="leading-[1.4]">2 min ago</p>
        </div>
        
        {/* Pink status box */}
        <div className="absolute bg-[#E8F1FD] dark:bg-blue-900/30 h-[91px] left-[17px] rounded-[14px] top-[58px] right-[17px]" />
        
        {/* Pink circle with activity icon */}
        <div className="absolute left-[26px] size-[35px] top-[85px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
            <circle cx="17.5" cy="17.5" fill="var(--fill-0, #407CE2)" r="17.5" />
          </svg>
        </div>
        <div className="absolute h-[16px] left-[31px] top-[95px] w-[25px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 19.4141">
            <path d={svgPaths.p1807de00} stroke="var(--stroke-0, white)" strokeLinecap="round" />
          </svg>
        </div>
        
        {/* All vitals looking good */}
        <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-medium justify-center leading-[1.4] left-[72px] text-[16px] text-black dark:text-white top-[93px] tracking-[0.8px] whitespace-nowrap">
          <p className="mb-0">All vitals looking good</p>
        </div>
        
        {/* Your health metrics text */}
        <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[0] left-[72px] text-[12px] text-black dark:text-white top-[116px] tracking-[0.6px] w-[207px]">
          <p className="leading-[1.2] whitespace-pre-wrap text-left">Your health metrics are within normal range</p>
        </div>
        
        {/* Vital Signs Icons */}
        <div className="absolute left-[29px] size-[11px] top-[172px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p17fe3500} stroke="var(--stroke-0, #FF383C)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="absolute left-[28px] size-[12px] top-[206px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path d={svgPaths.p16e7ca00} stroke="var(--stroke-0, #0088FF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="absolute left-[29px] size-[11px] top-[240px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p2539ee80} stroke="var(--stroke-0, #FF8D28)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="absolute left-[26px] size-[14px] top-[272px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p9735100} stroke="var(--stroke-0, #CB30E0)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        
        {/* Vital Labels */}
        <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[1.4] left-[44px] text-[12px] text-black dark:text-white top-[228.5px] tracking-[0.6px] whitespace-nowrap">
          <p className="mb-0">Heart Rate</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">Blood Oxygen</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">Temperature</p>
          <p className="mb-0">&nbsp;</p>
          <p>Blood Pressure</p>
        </div>
        
        {/* Vital Values */}
        <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[1.4] right-[72px] text-[12px] text-black dark:text-white top-[228.5px] tracking-[0.6px] whitespace-nowrap text-right">
          <p className="mb-0">72 bpm</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">98%</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">98.7° F</p>
          <p className="mb-0">&nbsp;</p>
          <p>118/76</p>
        </div>
        
        {/* Normal Badges */}
        <div className="absolute right-[14px] top-[172px]">
          <div className="bg-[#407CE2] h-[10px] rounded-[2px] w-[45px]" />
          <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[0] left-[7px] text-[8px] text-white top-[50%] tracking-[0.4px] w-[30px]">
            <p className="leading-[1.4] whitespace-pre-wrap">Normal</p>
          </div>
        </div>
        <div className="absolute right-[14px] top-[206px]">
          <div className="bg-[#407CE2] h-[10px] rounded-[2px] w-[45px]" />
          <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[0] left-[7px] text-[8px] text-white top-[50%] tracking-[0.4px] w-[30px]">
            <p className="leading-[1.4] whitespace-pre-wrap">Normal</p>
          </div>
        </div>
        <div className="absolute right-[14px] top-[239px]">
          <div className="bg-[#407CE2] h-[10px] rounded-[2px] w-[45px]" />
          <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[0] left-[7px] text-[8px] text-white top-[50%] tracking-[0.4px] w-[30px]">
            <p className="leading-[1.4] whitespace-pre-wrap">Normal</p>
          </div>
        </div>
        <div className="absolute right-[14px] top-[274px]">
          <div className="bg-[#407CE2] h-[10px] rounded-[2px] w-[45px]" />
          <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[0] left-[7px] text-[8px] text-white top-[50%] tracking-[0.4px] w-[30px]">
            <p className="leading-[1.4] whitespace-pre-wrap">Normal</p>
          </div>
        </div>
      </button>
      
      {/* Food & Supplements Card */}
      <button
        onClick={() => onNavigate?.('daily')}
        className="absolute left-[17px] top-[540px] w-[calc(100%-34px)]"
      >
        <div className="bg-[#fdfdfd] dark:bg-gray-800 h-[155px] rounded-[14px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.25)] w-full p-[0px]" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-medium justify-center leading-[0] left-[14px] text-[20px] text-black dark:text-white top-[27px] tracking-[-0.4px] whitespace-nowrap">
          <p className="leading-[1.4]">{`Food & Supplements`}</p>
        </div>
        
        {/* Food & Supplements Icons */}
        <div className="absolute left-[40px] top-[65px] flex flex-col items-center gap-1">
          <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
            <Pill className="w-7 h-7 text-[#407CE2]" />
          </div>
          <span className="text-xs text-gray-600 dark:text-gray-400">Pills</span>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 top-[65px] flex flex-col items-center gap-1">
          <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
            <Droplet className="w-7 h-7 text-[#407CE2]" />
          </div>
          <span className="text-xs text-gray-600 dark:text-gray-400">Water</span>
        </div>
        <div className="absolute right-[40px] top-[65px] flex flex-col items-center gap-1">
          <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
            <Utensils className="w-7 h-7 text-[#407CE2]" />
          </div>
          <span className="text-xs text-gray-600 dark:text-gray-400">Meals</span>
        </div>
      </button>
      
      {/* Pregnancy Timeline */}
      <div className="absolute left-[18px] top-[744px] w-[calc(100%-36px)]">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-semibold justify-center leading-[0] left-0 text-[20px] text-black dark:text-white top-[-25px] tracking-[1px] whitespace-nowrap">
          <p className="leading-[1.4]">Pregnancy Timeline</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 h-[279px] rounded-[13px] shadow-[0px_0px_4px_1px_rgba(0,0,0,0.25)] w-full" />
        
        {/* Calendar Icon */}
        <div className="absolute left-[16px] size-[25px] top-[25px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
            <path d={svgPaths.p1166480} stroke="var(--stroke-0, #407CE2)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        
        {/* Timeline Content */}
        <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-normal justify-center leading-[1.4] left-[51px] text-[0px] text-black dark:text-white top-[131.5px] tracking-[0.8px] w-[calc(100%-65px)]">
          <p className="mb-0 text-[16px]">Week {currentWeek} of 40</p>
          <p className="mb-0 text-[12px]">{weekInsight.trimester === 1 ? 'First Trimester' : weekInsight.trimester === 2 ? 'Second Trimester' : 'Third Trimester'}</p>
          <p className="mb-0 text-[12px]">&nbsp;</p>
          <p className="mb-0 text-[16px]">Current Week</p>
          <p className="mb-0 text-[12px]">{weekInsight.babyDevelopment}</p>
          <p className="mb-0 text-[12px]">Size: {weekInsight.babySize}</p>
          {milestoneWeeks.slice(0, 2).map((milestone, index) => (
            <div key={milestone.week}>
              <p className="mb-0 text-[12px]">&nbsp;</p>
              <p className="mb-0 text-[16px]">Week {milestone.week} (Milestone)</p>
              <p className={index === 1 ? "text-[12px]" : "mb-0 text-[12px]"}>{milestone.milestone}</p>
            </div>
          ))}
        </div>
        
        {/* Timeline dots and lines */}
        <div className="absolute left-[25px] size-[7px] top-[83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <circle cx="3.5" cy="3.5" fill="var(--fill-0, #407CE2)" r="3" stroke="var(--stroke-0, #407CE2)" />
          </svg>
        </div>
        
        <div className="absolute h-[63.5px] left-[25px] top-[154px] w-[7.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 63.5">
            <path d={svgPaths.paa59b00} fill="var(--fill-0, #DADADA)" stroke="var(--stroke-0, #DADADA)" />
          </svg>
        </div>
        
        <div className="absolute flex h-[33px] items-center justify-center left-[28px] top-[92px] w-[0.5px]">
          <div className="flex-none rotate-[0.87deg]">
            <div className="h-[33.004px] relative w-0">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 34.0038">
                <path d="M0.5 0.5V33.5038" stroke="var(--stroke-0, #407CE2)" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="absolute flex h-[74.5px] items-center justify-center left-[27.37px] top-[163px] w-[2.757px]">
          <div className="flex-none rotate-[0.87deg]">
            <div className="h-[74.484px] relative w-[1.629px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.6286 75.4839">
                <path d={svgPaths.p2d32ee00} stroke="var(--stroke-0, #DADADA)" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Today's Health Tip */}
      <div className="absolute left-[15px] top-[1056px] w-[calc(100%-30px)]">
        <div className="size-[28px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
            <g>
              <circle cx="14" cy="14" fill="var(--fill-0, #407CE2)" r="14" />
              <path d={svgPaths.p19976ec0} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </g>
          </svg>
        </div>
        
        <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans',sans-serif] font-medium justify-center leading-[1.4] left-[43px] text-[0px] text-black dark:text-white top-[20.5px] tracking-[-0.4px] w-[calc(100%-43px)] whitespace-pre-wrap">
          <p className="mb-0 text-[16px]">Today's Health Tip</p>
          <p className="font-['Instrument_Sans',sans-serif] font-normal text-[#828282] dark:text-gray-400 text-[10px]">{weekInsight.motherTips}</p>
        </div>
      </div>
    </div>
  );
}