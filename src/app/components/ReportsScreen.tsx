import { ArrowLeft, FileText, Download, Share2, Calendar, TrendingUp, Heart, Lock } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface ReportsScreenProps {
  onBack: () => void;
}

export function ReportsScreen({ onBack }: ReportsScreenProps) {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-500 to-indigo-500 px-6 pt-12 pb-8">
        <button onClick={onBack} className="flex items-center gap-2 text-white mb-6">
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl text-white mb-1">Health Reports</h1>
            <p className="text-blue-100 text-sm">Export & share with your doctor</p>
          </div>
        </div>
      </div>

      {/* Data Ownership */}
      <div className="px-6 py-6">
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-5">
            <div className="flex items-start gap-3">
              <Lock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-blue-900 mb-1">Your Data, Your Control</h3>
                <p className="text-sm text-blue-700 leading-relaxed">
                  All reports are encrypted and can only be accessed by you. You decide what to share and with whom. Data can be exported or deleted at any time.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Summary */}
      <div className="px-6 mb-6">
        <h2 className="text-lg text-slate-900 mb-4">Latest Weekly Report</h2>
        <Card className="border-none shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg text-slate-900 mb-1">Week 18 Summary</h3>
                <p className="text-sm text-slate-600">Jan 30 - Feb 5, 2026</p>
              </div>
              <Badge className="bg-emerald-100 text-emerald-700">Complete</Badge>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <Heart className="w-5 h-5 text-emerald-600 mb-2" />
                <p className="text-2xl text-slate-900 mb-1">70</p>
                <p className="text-xs text-slate-600">Avg Heart Rate (bpm)</p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-2xl text-slate-900 mb-1">117/75</p>
                <p className="text-xs text-slate-600">Avg Blood Pressure</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-sm text-slate-700">Blood Oxygen (SpO₂)</span>
                <span className="text-sm text-slate-900">98% avg</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-sm text-slate-700">Body Temperature</span>
                <span className="text-sm text-slate-900">36.6°C avg</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-sm text-slate-700">Fetal Movements</span>
                <span className="text-sm text-slate-900">7.5 per day</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm text-slate-700">Hydration Compliance</span>
                <span className="text-sm text-emerald-600">85%</span>
              </div>
            </div>

            <div className="flex gap-2">
              <Button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              <Button variant="outline" className="flex-1 border-blue-300 text-blue-700">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Historical Reports */}
      <div className="px-6 mb-6">
        <h2 className="text-lg text-slate-900 mb-4">Past Reports</h2>
        <div className="space-y-3">
          <Card className="border-slate-200">
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-slate-900">Week 17 Summary</h3>
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-slate-600">Jan 23 - Jan 29, 2026</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-slate-900">Week 16 Summary</h3>
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-slate-600">Jan 16 - Jan 22, 2026</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-slate-900">First Trimester Report</h3>
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-slate-600">Weeks 1-12 comprehensive</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Medical Records */}
      <div className="px-6 mb-6">
        <h2 className="text-lg text-slate-900 mb-4">Medical Records</h2>
        <div className="space-y-3">
          <Card className="border-slate-200">
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-slate-900">Ultrasound - First Trimester</h3>
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">Jan 20, 2026 • Dr. Fatima Rahman</p>
                  <Badge className="bg-purple-100 text-purple-700 text-xs">Lab Result</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-slate-900">Blood Work - Complete Panel</h3>
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">Jan 5, 2026 • Dhaka Diagnostic</p>
                  <Badge className="bg-purple-100 text-purple-700 text-xs">Lab Result</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Export Options */}
      <div className="px-6 mb-6">
        <h2 className="text-lg text-slate-900 mb-4">Export All Data</h2>
        <Card className="border-slate-200">
          <CardContent className="p-5">
            <h3 className="text-slate-900 mb-2">Complete Health Archive</h3>
            <p className="text-sm text-slate-600 mb-4">
              Download all your MatriCare data including vitals, trends, reports, and medical records in a comprehensive PDF or CSV format.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1 border-slate-300">
                <Download className="w-4 h-4 mr-2" />
                PDF Format
              </Button>
              <Button variant="outline" className="flex-1 border-slate-300">
                <Download className="w-4 h-4 mr-2" />
                CSV Format
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Share with Doctor */}
      <div className="px-6">
        <Card className="border-teal-200 bg-teal-50">
          <CardContent className="p-5">
            <div className="flex items-start gap-3 mb-4">
              <Share2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-teal-900 mb-1">Quick Share with Doctor</h3>
                <p className="text-sm text-teal-700 leading-relaxed mb-4">
                  Generate a secure, time-limited link to share your health data with your healthcare provider. The link expires after 7 days.
                </p>
                <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                  <Share2 className="w-4 h-4 mr-2" />
                  Generate Share Link
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
