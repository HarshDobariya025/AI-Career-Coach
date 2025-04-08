import { industries } from '@/data/industries'
import { MonitorCheck } from 'lucide-react'
import React from 'react'

const OnboardingForm = () => {
  return (
    <main>
      <OnboardingPage industries={industries} /> 
    </main>
  )
}

export default OnboardingForm


