import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Calendar, Heart, Droplet, Thermometer, TrendingUp, Info } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';

const heartRateData = [
  { date: 'Feb 1', value: 68 },
  { date: 'Feb 2', value: 71 },
  { date: 'Feb 3', value: 69 },
  { date: 'Feb 4', value: 73 },
  { date: 'Feb 5', value: 70 },
  { date: 'Feb 6', value: 72 },
];

const spo2Data = [
  { date: 'Feb 1', value: 97 },
  { date: 'Feb 2', value: 98 },
  { date: 'Feb 3', value: 97 },
  { date: 'Feb 4', value: 99 },
  { date: 'Feb 5', value: 98 },
  { date: 'Feb 6', value: 98 },
];

const tempData = [
  { date: 'Feb 1', value: 36.5 },
  { date: 'Feb 2', value: 36.6 },
  { date: 'Feb 3', value: 36.7 },
  { date: 'Feb 4', value: 36.6 },
  { date: 'Feb 5', value: 36.8 },
  { date: 'Feb 6', value: 36.7 },
];

const bpSystolicData = [
  { date: 'Feb 1', value: 115 },
  { date: 'Feb 2', value: 118 },
  { date: 'Feb 3', value: 116 },
  { date: 'Feb 4', value: 119 },
  { date: 'Feb 5', value: 117 },
  { date: 'Feb 6', value: 118 },
];

export function TrendsScreen() {
  const [selectedVital, setSelectedVital] = useState<'hr' | 'spo2' | 'temp' | 'bp'>('hr');

  const vitalConfig = {
    hr: {
      label: 'Heart Rate',
      icon: <Heart className="w-5 h-5 text-[#407CE2]" />,
      color: '#f43f5e',
      data: heartRateData,
      unit: 'bpm',
      range: 'Normal: 60-100 bpm',
    },
    spo2: {
      label: 'Blood Oxygen',
      icon: <Droplet className="w-5 h-5 text-[#407CE2]" />,
      color: '#3b82f6',
      data: spo2Data,
      unit: '%',
      range: 'Normal: 95-100%',
    },
    temp: {
      label: 'Body Temperature',
      icon: <Thermometer className="w-5 h-5 text-[#407CE2]" />,
      color: '#f97316',
      data: tempData,
      unit: '°C',
      range: 'Normal: 36.1-37.2°C',
    },
    bp: {
      label: 'Blood Pressure (Systolic)',
      icon: <TrendingUp className="w-5 h-5 text-[#407CE2]" />,
      color: '#a855f7',
      data: bpSystolicData,
      unit: 'mmHg',
      range: 'Normal: 90-120 mmHg',
    },
  };

  const currentVital = vitalConfig[selectedVital];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 px-6 pt-12 pb-6 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-gray-900 dark:text-white text-2xl font-medium mb-2">Health Trends</h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm">Track your vitals over time</p>
      </div>

      {/* Vital Selector */}
      <div className="px-6 py-6">
        <Tabs value={selectedVital} onValueChange={(v) => setSelectedVital(v as any)}>
          <TabsList className="w-full grid grid-cols-4 h-auto bg-gray-100 dark:bg-gray-800 p-1 rounded-xl">
            <TabsTrigger value="hr" className="flex flex-col items-center py-3 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:rounded-lg">
              <Heart className="w-5 h-5 mb-1 text-[#407CE2]" />
              <span className="text-xs dark:text-gray-300">Heart</span>
            </TabsTrigger>
            <TabsTrigger value="spo2" className="flex flex-col items-center py-3 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:rounded-lg">
              <Droplet className="w-5 h-5 mb-1 text-[#407CE2]" />
              <span className="text-xs dark:text-gray-300">SpO₂</span>
            </TabsTrigger>
            <TabsTrigger value="temp" className="flex flex-col items-center py-3 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:rounded-lg">
              <Thermometer className="w-5 h-5 mb-1 text-[#407CE2]" />
              <span className="text-xs dark:text-gray-300">Temp</span>
            </TabsTrigger>
            <TabsTrigger value="bp" className="flex flex-col items-center py-3 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:rounded-lg">
              <TrendingUp className="w-5 h-5 mb-1 text-[#407CE2]" />
              <span className="text-xs dark:text-gray-300">BP</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Chart Card */}
      <div className="px-6 mb-6">
        <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-800 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                {currentVital.icon}
                <div>
                  <h3 className="text-gray-900 dark:text-white font-medium">{currentVital.label}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{currentVital.range}</p>
                </div>
              </div>
              <Badge className="bg-[#407CE2] text-white border-none">Last 7 days</Badge>
            </div>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={currentVital.data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="date"
                    stroke="#9ca3af"
                    fontSize={12}
                    tickLine={false}
                  />
                  <YAxis
                    stroke="#9ca3af"
                    fontSize={12}
                    tickLine={false}
                    domain={['dataMin - 5', 'dataMax + 5']}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#fff',
                      border: '1px solid #e5e7eb',
                      borderRadius: '12px',
                      fontSize: '14px',
                    }}
                    labelStyle={{ color: '#6b7280' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke={currentVital.color}
                    strokeWidth={3}
                    dot={{ fill: currentVital.color, r: 5 }}
                    activeDot={{ r: 7 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Average</p>
                <p className="text-2xl text-gray-900 dark:text-white font-semibold">
                  {(
                    currentVital.data.reduce((sum, d) => sum + d.value, 0) /
                    currentVital.data.length
                  ).toFixed(1)}{' '}
                  <span className="text-base text-gray-500 dark:text-gray-400">{currentVital.unit}</span>
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Trend</p>
                <div className="flex items-center gap-1">
                  <span className="text-[#407CE2]">↓</span>
                  <span className="text-[#407CE2] font-medium">Stable</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Insights */}
      <div className="px-6 mb-6">
        <Card className="border-none bg-[#E8F1FD] dark:bg-blue-900/20 shadow-sm">
          <CardContent className="p-5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-[#407CE2] rounded-full flex items-center justify-center flex-shrink-0">
                <Info className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-gray-900 dark:text-white font-semibold mb-2">AI Health Insight</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  Your heart rate has remained consistently within the healthy range this week. This is
                  excellent! The slight variation is completely normal and shows your body is adapting
                  well to pregnancy.
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  💡 Tip: Continue with your current activity level and stay hydrated.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pregnancy Timeline */}
      <div className="px-6">
        <h2 className="text-gray-900 dark:text-white font-semibold mb-4">Pregnancy Timeline</h2>
        <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-800 shadow-sm">
          <CardContent className="p-5">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-5 h-5 text-[#407CE2]" />
              <div>
                <p className="text-gray-900 dark:text-white font-medium">Week 18 of 40</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Second Trimester</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative pl-6 pb-4 border-l-2 border-[#407CE2]">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#407CE2] rounded-full border-4 border-white dark:border-gray-800 shadow-sm" />
                <p className="text-sm text-gray-900 dark:text-white font-medium mb-1">Current Week</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Baby's hearing is developing. Size: approximately 14cm (like a bell pepper)
                </p>
              </div>

              <div className="relative pl-6 pb-4 border-l-2 border-gray-200">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gray-300 rounded-full border-4 border-white" />
                <p className="text-sm text-gray-600 mb-1">Week 20 (Milestone)</p>
                <p className="text-xs text-gray-500">Halfway point • Anatomy scan scheduled</p>
              </div>

              <div className="relative pl-6 border-l-2 border-gray-200">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gray-300 rounded-full border-4 border-white" />
                <p className="text-sm text-gray-600 mb-1">Week 27 (Milestone)</p>
                <p className="text-xs text-gray-500">Third trimester begins</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}