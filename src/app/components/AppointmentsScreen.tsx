import { ArrowLeft, Calendar, Clock, MapPin, Video, Phone, Plus, CheckCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface AppointmentsScreenProps {
  onBack: () => void;
}

export function AppointmentsScreen({ onBack }: AppointmentsScreenProps) {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-teal-500 to-cyan-500 px-6 pt-12 pb-8">
        <button onClick={onBack} className="flex items-center gap-2 text-white mb-6">
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl text-white mb-1">Appointments</h1>
            <p className="text-teal-100 text-sm">Manage your prenatal care</p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-2 gap-4">
          <Card className="border-emerald-200 bg-emerald-50">
            <CardContent className="p-4 text-center">
              <Calendar className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
              <p className="text-2xl text-emerald-900 mb-1">1</p>
              <p className="text-xs text-emerald-700">Upcoming</p>
            </CardContent>
          </Card>
          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-4 text-center">
              <CheckCircle className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl text-blue-900 mb-1">4</p>
              <p className="text-xs text-blue-700">Completed</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div className="px-6 mb-6">
        <h2 className="text-lg text-slate-900 mb-4">Upcoming</h2>
        
        <Card className="border-teal-200 bg-teal-50 shadow-md mb-3">
          <CardContent className="p-5">
            <div className="flex items-start justify-between mb-4">
              <Badge className="bg-teal-600 text-white text-xs">Tomorrow</Badge>
              <Badge className="bg-white/50 text-teal-900 text-xs">In-Person</Badge>
            </div>

            <h3 className="text-lg text-slate-900 mb-2">Prenatal Checkup</h3>
            <p className="text-sm text-slate-700 mb-4">Regular health assessment and ultrasound</p>

            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-3 text-sm text-slate-700">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-teal-600" />
                </div>
                <div>
                  <p className="text-slate-900">Saturday, February 7</p>
                  <p className="text-xs text-slate-600">Week 18 checkup</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-700">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <Clock className="w-4 h-4 text-teal-600" />
                </div>
                <div>
                  <p className="text-slate-900">10:00 AM - 10:30 AM</p>
                  <p className="text-xs text-slate-600">30 minutes</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-700">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-lg">👩‍⚕️</span>
                </div>
                <div>
                  <p className="text-slate-900">Dr. Fatima Rahman</p>
                  <p className="text-xs text-slate-600">Obstetrician & Gynecologist</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-700">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-teal-600" />
                </div>
                <div>
                  <p className="text-slate-900">Dhaka Women's Hospital</p>
                  <p className="text-xs text-slate-600">Dhanmondi, Dhaka</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
              <p className="text-xs text-amber-900">
                <AlertCircle className="w-3 h-3 inline mr-1" />
                <strong>Reminder:</strong> Please bring your previous test reports and MatriCare health summary
              </p>
            </div>

            <div className="flex gap-2">
              <Button className="flex-1 bg-teal-600 hover:bg-teal-700 text-white">
                Get Directions
              </Button>
              <Button variant="outline" className="flex-1 border-teal-300 text-teal-700">
                Reschedule
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardContent className="p-5">
            <div className="flex items-start justify-between mb-4">
              <Badge className="bg-slate-200 text-slate-700 text-xs">Feb 20</Badge>
              <Badge className="bg-purple-100 text-purple-700 text-xs">Teleconsult</Badge>
            </div>

            <h3 className="text-lg text-slate-900 mb-2">Nutrition Consultation</h3>
            <p className="text-sm text-slate-700 mb-4">Dietary guidance for second trimester</p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-700">
                <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center">
                  <Video className="w-4 h-4 text-purple-600" />
                </div>
                <span>Video call via MatriCare</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-700">
                <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center">
                  <Clock className="w-4 h-4 text-purple-600" />
                </div>
                <span>2:00 PM • 20 minutes</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Past Appointments */}
      <div className="px-6 mb-6">
        <h2 className="text-lg text-slate-900 mb-4">Past Appointments</h2>
        
        <Card className="border-slate-200 opacity-75 mb-3">
          <CardContent className="p-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-slate-900">First Trimester Scan</h3>
                  <Badge className="bg-slate-200 text-slate-600 text-xs">Completed</Badge>
                </div>
                <p className="text-sm text-slate-600">Jan 20, 2026 • Dr. Fatima Rahman</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 opacity-75 mb-3">
          <CardContent className="p-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-slate-900">Initial Consultation</h3>
                  <Badge className="bg-slate-200 text-slate-600 text-xs">Completed</Badge>
                </div>
                <p className="text-sm text-slate-600">Jan 5, 2026 • Dr. Fatima Rahman</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <button className="text-sm text-teal-600 hover:text-teal-700">View all appointments →</button>
      </div>

      {/* Recommended Schedule */}
      <div className="px-6 mb-6">
        <h2 className="text-lg text-slate-900 mb-4">Recommended Schedule</h2>
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-5">
            <h3 className="text-slate-900 mb-3">Second Trimester Timeline</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 pb-3 border-b border-blue-200">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm text-slate-900">Week 18-20: Anatomy Scan ✓</p>
                  <p className="text-xs text-slate-600">Upcoming on Feb 7</p>
                </div>
              </div>
              <div className="flex items-start gap-3 pb-3 border-b border-blue-200">
                <div className="w-2 h-2 bg-slate-300 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm text-slate-700">Week 24-28: Glucose Screening</p>
                  <p className="text-xs text-slate-600">Schedule soon</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-300 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm text-slate-700">Week 28: Third Trimester Begins</p>
                  <p className="text-xs text-slate-600">More frequent checkups</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Book Appointment */}
      <div className="px-6">
        <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white h-14">
          <Plus className="w-5 h-5 mr-2" />
          Book New Appointment
        </Button>
      </div>

      {/* Teleconsultation Info */}
      <div className="px-6 mt-4">
        <Card className="border-purple-200 bg-purple-50">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <Video className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-purple-900 mb-1 text-sm">Teleconsultation Available</h3>
                <p className="text-xs text-purple-700 leading-relaxed">
                  Can't visit in person? Book a video consultation with your doctor through MatriCare for routine checkups and follow-ups.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
