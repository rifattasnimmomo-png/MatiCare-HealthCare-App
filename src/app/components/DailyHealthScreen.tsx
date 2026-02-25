import { ArrowLeft, Pill, Apple, Droplet, Moon, Check, Plus, Bell } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';

interface DailyHealthScreenProps {
  onBack: () => void;
}

const nutritionImage = "https://images.unsplash.com/photo-1650562075965-4940a2cfbfe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbnV0cml0aW9uJTIwcHJlZ25hbmN5JTIwbWVhbHxlbnwxfHx8fDE3NzAzOTg4OTl8MA&ixlib=rb-4.1.0&q=80&w=1080";

export function DailyHealthScreen({ onBack }: DailyHealthScreenProps) {
  return (
    <div className="bg-gradient-to-b from-blue-50 dark:from-gray-900 to-white dark:to-gray-900 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#407CE2] via-[#5088e5] to-[#3568c4] px-6 pt-12 pb-8 rounded-b-3xl shadow-lg">
        <button onClick={onBack} className="flex items-center gap-2 text-white mb-6">
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center">
            <Pill className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl text-white font-medium mb-1">Daily Health Support</h1>
            <p className="text-white/80 text-sm">Nutrition, supplements & wellness</p>
          </div>
        </div>
      </div>

      {/* Today's Summary */}
      <div className="px-6 py-6">
        <h2 className="text-lg text-gray-800 dark:text-white font-semibold mb-4">Today's Progress</h2>
        <Card className="border-none shadow-md bg-white dark:bg-gray-800">
          <CardContent className="p-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 dark:from-blue-900/30 to-blue-50 dark:to-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Pill className="w-6 h-6 text-[#407CE2]" />
                </div>
                <p className="text-2xl text-gray-800 dark:text-white font-semibold mb-1">2/2</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Supplements</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 dark:from-blue-900/30 to-blue-50 dark:to-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Droplet className="w-6 h-6 text-[#407CE2]" />
                </div>
                <p className="text-2xl text-gray-800 dark:text-white font-semibold mb-1">6/8</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Water (glasses)</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 dark:from-blue-900/30 to-blue-50 dark:to-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Apple className="w-6 h-6 text-[#407CE2]" />
                </div>
                <p className="text-2xl text-gray-800 dark:text-white font-semibold mb-1">3/3</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Meals logged</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Supplements & Medications */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg text-gray-800 dark:text-white font-semibold">Supplements & Medications</h2>
          <button className="text-sm text-[#407CE2] hover:text-[#3568c4]">+ Add</button>
        </div>

        <div className="space-y-3">
          <Card className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20">
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                  <div className="w-10 h-10 bg-[#407CE2] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white mb-1">Prenatal Multivitamin</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">1 tablet • Once daily with breakfast</p>
                    <Badge className="bg-[#407CE2] text-white text-xs">Taken at 8:30 AM</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20">
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                  <div className="w-10 h-10 bg-[#407CE2] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white mb-1">Folic Acid</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">400 mcg • Once daily</p>
                    <Badge className="bg-[#407CE2] text-white text-xs">Taken at 8:30 AM</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-gray-700 dark:bg-gray-800">
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Pill className="w-5 h-5 text-[#407CE2]" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white mb-1">Iron Supplement</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">65 mg • With dinner</p>
                    <Badge className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs">
                      <Bell className="w-3 h-3 inline mr-1" />
                      Reminder at 7:00 PM
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Water Intake */}
      <div className="px-6 mb-6">
        <h2 className="text-lg text-gray-800 dark:text-white font-semibold mb-4">Hydration Tracker</h2>
        <Card className="border-slate-200 dark:border-gray-700 dark:bg-gray-800">
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Droplet className="w-6 h-6 text-[#407CE2]" />
                <div>
                  <p className="text-gray-900 dark:text-white">6 of 8 glasses</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">1,500 ml / 2,000 ml</p>
                </div>
              </div>
              <span className="text-2xl">💧</span>
            </div>

            <Progress value={75} className="mb-4 h-3" />

            <div className="flex gap-2">
              <Button className="flex-1 bg-[#407CE2] hover:bg-[#3568c4] text-white">
                <Plus className="w-4 h-4 mr-1" />
                Add Glass
              </Button>
              <Button variant="outline" className="border-[#407CE2] text-[#407CE2]">
                <Droplet className="w-4 h-4" />
              </Button>
            </div>

            <p className="text-xs text-gray-600 dark:text-gray-400 mt-3 text-center">
              💡 Aim for 8-10 glasses daily during pregnancy
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Nutrition Guidelines */}
      <div className="px-6 mb-6">
        <h2 className="text-lg text-gray-800 dark:text-white font-semibold mb-4">Nutrition for Week 18</h2>
        <Card className="border-none bg-gradient-to-br from-blue-50 dark:from-blue-900/20 to-blue-100 dark:to-blue-900/30">
          <CardContent className="p-5">
            <div className="flex items-start gap-3 mb-4">
              <Apple className="w-6 h-6 text-[#407CE2] flex-shrink-0" />
              <div>
                <h3 className="text-gray-900 dark:text-white mb-2">Focus Nutrients</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#407CE2] rounded-full" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>Iron:</strong> Red meat, spinach, lentils
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#407CE2] rounded-full" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>Calcium:</strong> Milk, yogurt, cheese
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#407CE2] rounded-full" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>Protein:</strong> Fish, eggs, beans, nuts
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#407CE2] rounded-full" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>Omega-3:</strong> Salmon, walnuts, flaxseed
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                🥗 <strong>Tip:</strong> Your baby's brain development is in full swing. Focus on foods rich in omega-3 fatty acids and iron.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Meal Log */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg text-gray-800 dark:text-white font-semibold">Today's Meals</h2>
          <button className="text-sm text-[#407CE2] hover:text-[#3568c4]">+ Add meal</button>
        </div>

        <div className="space-y-3">
          <Card className="border-slate-200 dark:border-gray-700 dark:bg-gray-800">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🌅</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-gray-900 dark:text-white">Breakfast</h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400">8:00 AM</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Oatmeal with berries, boiled egg, orange juice</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-gray-700 dark:bg-gray-800">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">☀️</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-gray-900 dark:text-white">Lunch</h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400">1:00 PM</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Grilled chicken, brown rice, mixed vegetables, yogurt</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-gray-700 dark:bg-gray-800">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🌙</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-gray-900 dark:text-white">Dinner</h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400">7:30 PM</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Fish curry, lentils, roti, salad</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Rest & Sleep */}
      <div className="px-6">
        <h2 className="text-lg text-gray-800 dark:text-white font-semibold mb-4">Rest & Sleep</h2>
        <Card className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20">
          <CardContent className="p-5">
            <div className="flex items-center gap-3 mb-4">
              <Moon className="w-6 h-6 text-[#407CE2]" />
              <div>
                <p className="text-gray-900 dark:text-white">Last night's sleep</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">7.5 hours</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                😴 <strong>Sleep tip:</strong> Aim for 8-10 hours of sleep. Use pillows to support your belly and between your knees for comfort.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}