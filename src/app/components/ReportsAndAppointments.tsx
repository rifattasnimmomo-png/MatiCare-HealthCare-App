import { Calendar, FileText, Download, Share2, CheckCircle, Clock, MapPin, Video } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';

const appointmentImage = "https://images.unsplash.com/photo-1725271765537-b8e21964d2ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVnbmFudCUyMHdvbWFuJTIwaGVhbHRoY2FyZSUyMGNoZWNrdXB8ZW58MXx8fHwxNzcwMzk4ODk5fDA&ixlib=rb-4.1.0&q=80&w=1080";

export function ReportsAndAppointments() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-[#407CE2] px-6 pt-12 pb-8 rounded-b-[32px]">
        <h1 className="text-white text-2xl font-medium mb-2">Reports & Appointments</h1>
        <p className="text-white/80 text-sm">Manage your care and data</p>
      </div>

      <Tabs defaultValue="reports" className="px-6 pt-6">
        <TabsList className="w-full grid grid-cols-2 h-auto bg-gray-100 dark:bg-gray-800 p-1 mb-6 rounded-xl">
          <TabsTrigger value="reports" className="py-3 rounded-lg data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:text-[#407CE2]">
            <FileText className="w-4 h-4 mr-2" />
            Reports
          </TabsTrigger>
          <TabsTrigger value="appointments" className="py-3 rounded-lg data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:text-[#407CE2]">
            <Calendar className="w-4 h-4 mr-2" />
            Appointments
          </TabsTrigger>
        </TabsList>

        {/* Reports Tab */}
        <TabsContent value="reports" className="space-y-6">
          {/* Latest Weekly Report */}
          <div>
            <h2 className="text-gray-900 dark:text-white font-semibold mb-4">Latest Weekly Report</h2>
            <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-800 shadow-sm">
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-medium mb-1">Week 18 Summary</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Jan 30 - Feb 5, 2026</p>
                  </div>
                  <Badge className="bg-[#407CE2] text-white border-none">Complete</Badge>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-[#E8F1FD] dark:bg-blue-900/30 rounded-xl p-3">
                    <p className="text-2xl text-gray-900 dark:text-white font-semibold mb-1">70</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Avg Heart Rate (bpm)</p>
                  </div>
                  <div className="bg-[#E8F1FD] dark:bg-blue-900/30 rounded-xl p-3">
                    <p className="text-2xl text-gray-900 dark:text-white font-semibold mb-1">117/75</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Avg Blood Pressure</p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                    <span className="text-sm text-gray-700 dark:text-gray-300">Blood Oxygen (SpO₂)</span>
                    <span className="text-sm text-gray-900 dark:text-white font-medium">98% avg</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                    <span className="text-sm text-gray-700 dark:text-gray-300">Body Temperature</span>
                    <span className="text-sm text-gray-900 dark:text-white font-medium">98.2°F avg</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-gray-700 dark:text-gray-300">Fetal Movements</span>
                    <span className="text-sm text-gray-900 dark:text-white font-medium">7.5 per day</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 bg-[#407CE2] hover:bg-[#3568c4] text-white">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                  <Button variant="outline" className="flex-1 border-[#407CE2] text-[#407CE2] hover:bg-[#E8F1FD] dark:hover:bg-blue-900/30">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Previous Reports */}
          <div>
            <h2 className="text-gray-900 dark:text-white font-semibold mb-4">Previous Reports</h2>
            <div className="space-y-3">
              {[
                { week: 'Week 17', date: 'Jan 23-29, 2026', status: 'Complete' },
                { week: 'Week 16', date: 'Jan 16-22, 2026', status: 'Complete' },
                { week: 'Week 15', date: 'Jan 9-15, 2026', status: 'Complete' },
              ].map((report) => (
                <Card key={report.week} className="border-gray-200 dark:border-gray-700 dark:bg-gray-800 shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#E8F1FD] dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-[#407CE2]" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-900 dark:text-white font-medium">{report.week} Summary</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">{report.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-[#407CE2] text-white text-xs border-none">{report.status}</Badge>
                        <Button size="sm" variant="ghost" className="text-[#407CE2]">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Appointments Tab */}
        <TabsContent value="appointments" className="space-y-6">
          {/* Upcoming Appointment */}
          <div>
            <h2 className="text-gray-900 dark:text-white font-semibold mb-4">Upcoming Appointment</h2>
            <Card className="border-[#407CE2] dark:border-blue-700 bg-gradient-to-br from-[#E8F1FD] dark:from-blue-900/30 to-white dark:to-gray-800 shadow-md">
              <CardContent className="p-0">
                <div className="h-40 bg-cover bg-center rounded-t-lg relative overflow-hidden">
                  <img src={appointmentImage} alt="Healthcare" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-[#407CE2] text-white border-none">
                    Tomorrow
                  </Badge>
                </div>
                <div className="p-5">
                  <h3 className="text-gray-900 dark:text-white font-semibold mb-3">Prenatal Checkup</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Clock className="w-4 h-4 text-[#407CE2]" />
                      <span className="text-gray-700 dark:text-gray-300">Tomorrow, 10:00 AM - 10:45 AM</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin className="w-4 h-4 text-[#407CE2]" />
                      <span className="text-gray-700 dark:text-gray-300">Dhaka Medical Center, Building A</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Video className="w-4 h-4 text-[#407CE2]" />
                      <span className="text-gray-700 dark:text-gray-300">Telemedicine option available</span>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Button className="flex-1 bg-[#407CE2] hover:bg-[#3568c4] text-white">
                      Join Video Call
                    </Button>
                    <Button variant="outline" className="border-[#407CE2] text-[#407CE2] hover:bg-[#E8F1FD] dark:hover:bg-blue-900/30">
                      Reschedule
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Past Appointments */}
          <div>
            <h2 className="text-gray-900 dark:text-white font-semibold mb-4">Past Appointments</h2>
            <div className="space-y-3">
              {[
                { title: 'Prenatal Checkup', date: 'Jan 20, 2026', time: '10:00 AM', doctor: 'Dr. Rahman' },
                { title: 'Ultrasound Scan', date: 'Jan 8, 2026', time: '2:00 PM', doctor: 'Dr. Sultana' },
                { title: 'Prenatal Checkup', date: 'Dec 28, 2025', time: '11:00 AM', doctor: 'Dr. Rahman' },
              ].map((appointment, idx) => (
                <Card key={idx} className="border-gray-200 dark:border-gray-700 dark:bg-gray-800 shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#E8F1FD] dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-[#407CE2]" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900 dark:text-white font-medium">{appointment.title}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{appointment.date} at {appointment.time}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">with {appointment.doctor}</p>
                      </div>
                      <Button size="sm" variant="outline" className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300">
                        View Notes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Schedule New Appointment */}
          <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-800 shadow-sm">
            <CardContent className="p-5">
              <h3 className="text-gray-900 dark:text-white font-semibold mb-3">Schedule New Appointment</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Book your next checkup or scan with your healthcare provider
              </p>
              <Button className="w-full bg-[#407CE2] hover:bg-[#3568c4] text-white">
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}