import { useState } from 'react';
import { ChevronRight, Shield, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Checkbox } from './ui/checkbox';
import logoImage from 'figma:asset/bcc859c9fd4b4782cb3a85be753384def38388e9.png';

interface OnboardingScreenProps {
  onComplete: (userName: string, pregnancyWeek: number) => void;
}

export function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    week: '',
    trimester: '1',
    riskFlags: [] as string[],
    consent: false,
  });

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Extract first name from full name
      const firstName = formData.name.trim().split(' ')[0];
      const week = parseInt(formData.week) || 18;
      onComplete(firstName, week);
    }
  };

  const isStepComplete = () => {
    switch (step) {
      case 1:
        return formData.name && formData.age;
      case 2:
        return formData.week;
      case 3:
        return formData.consent;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="px-6 pt-12 pb-8">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img 
            src={logoImage} 
            alt="MatriCare Logo" 
            className="w-24 h-24 object-contain"
          />
        </div>
        <h1 className="text-3xl text-center text-black dark:text-white mb-2">MatriCare</h1>
        <p className="text-center text-gray-600 dark:text-gray-400">
          Your trusted companion for a healthy pregnancy journey
        </p>
      </div>

      {/* Progress Indicator */}
      <div className="px-6 mb-8">
        <div className="flex items-center justify-center gap-2">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-2 rounded-full transition-all ${
                s === step ? 'w-12 bg-[#407CE2]' : 'w-2 bg-[#E8F1FD]'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="px-6 pb-32">
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl text-slate-900 dark:text-white mb-2">Let's get started</h2>
              <p className="text-slate-600 dark:text-gray-400">Tell us a bit about yourself</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="Your age"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label className="mb-3 block">Which trimester are you in?</Label>
                <RadioGroup
                  value={formData.trimester}
                  onValueChange={(value) => setFormData({ ...formData, trimester: value })}
                >
                  <div className="flex items-center space-x-2 p-4 border border-slate-200 dark:border-gray-700 rounded-xl">
                    <RadioGroupItem value="1" id="t1" />
                    <Label htmlFor="t1" className="flex-1 cursor-pointer">
                      First Trimester (Weeks 1-12)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border border-slate-200 dark:border-gray-700 rounded-xl">
                    <RadioGroupItem value="2" id="t2" />
                    <Label htmlFor="t2" className="flex-1 cursor-pointer">
                      Second Trimester (Weeks 13-26)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border border-slate-200 dark:border-gray-700 rounded-xl">
                    <RadioGroupItem value="3" id="t3" />
                    <Label htmlFor="t3" className="flex-1 cursor-pointer">
                      Third Trimester (Weeks 27-40)
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl text-slate-900 dark:text-white mb-2">Pregnancy details</h2>
              <p className="text-slate-600 dark:text-gray-400">Help us personalize your experience</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="week">Current pregnancy week</Label>
                <Input
                  id="week"
                  type="number"
                  placeholder="e.g., 18"
                  value={formData.week}
                  onChange={(e) => setFormData({ ...formData, week: e.target.value })}
                  className="mt-1.5"
                  min="1"
                  max="42"
                />
                <p className="text-sm text-slate-500 dark:text-gray-400 mt-1.5">
                  If you're unsure, you can update this later
                </p>
              </div>

              <div>
                <Label className="mb-3 block">Any risk factors? (optional)</Label>
                <div className="space-y-3">
                  {[
                    { id: 'first', label: 'First pregnancy' },
                    { id: 'age', label: 'Age over 35' },
                    { id: 'diabetes', label: 'Gestational diabetes' },
                    { id: 'bp', label: 'High blood pressure' },
                    { id: 'multiple', label: 'Multiple pregnancy (twins/triplets)' },
                  ].map((risk) => (
                    <div key={risk.id} className="flex items-center space-x-3 p-3 border border-slate-200 dark:border-gray-700 rounded-lg">
                      <Checkbox
                        id={risk.id}
                        checked={formData.riskFlags.includes(risk.id)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setFormData({
                              ...formData,
                              riskFlags: [...formData.riskFlags, risk.id],
                            });
                          } else {
                            setFormData({
                              ...formData,
                              riskFlags: formData.riskFlags.filter((f) => f !== risk.id),
                            });
                          }
                        }}
                      />
                      <Label htmlFor={risk.id} className="flex-1 cursor-pointer">
                        {risk.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl text-slate-900 dark:text-white mb-2">Privacy & consent</h2>
              <p className="text-slate-600 dark:text-gray-400">Your data security is our priority</p>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#407CE2] rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 dark:text-white mb-1">End-to-end encryption</h3>
                    <p className="text-sm text-slate-600 dark:text-gray-400">
                      All your health data is encrypted and stored securely
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#407CE2] rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 dark:text-white mb-1">You control access</h3>
                    <p className="text-sm text-slate-600 dark:text-gray-400">
                      Choose who can view your data - only share what you're comfortable with
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-slate-200 dark:border-gray-700 rounded-xl p-4 space-y-3">
                <p className="text-sm text-slate-700 dark:text-gray-300 leading-relaxed">
                  MatriCare collects and processes your health data to provide personalized pregnancy
                  monitoring and insights. Your data will be:
                </p>
                <ul className="text-sm text-slate-600 dark:text-gray-400 space-y-2 pl-4">
                  <li>• Stored securely with medical-grade encryption</li>
                  <li>• Never sold to third parties</li>
                  <li>• Only accessible to your designated healthcare providers with your consent</li>
                  <li>• Deletable at any time upon request</li>
                </ul>
              </div>

              <div className="flex items-start space-x-3 p-4 border-2 border-slate-200 dark:border-gray-700 rounded-xl">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, consent: checked as boolean })
                  }
                />
                <Label htmlFor="consent" className="flex-1 cursor-pointer leading-relaxed">
                  I understand and agree to the privacy policy and terms of service. I consent to the
                  collection and processing of my health data as described above.
                </Label>
              </div>

              <p className="text-xs text-slate-500 dark:text-gray-500 text-center">
                MatriCare is not a diagnostic tool and does not replace professional medical care
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Action */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-slate-200 dark:border-gray-700 p-6">
        <Button
          onClick={handleNext}
          disabled={!isStepComplete()}
          className="w-full h-14 bg-[#407CE2] hover:bg-[#3568c4] text-white rounded-xl"
        >
          {step === 3 ? 'Get Started' : 'Continue'}
          <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}