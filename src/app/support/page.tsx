'use client'

import { useSearchParams } from 'next/navigation'
import { EducationSupportPage } from './education'
import { SchoolSupportPage } from './school'

const Support = () => {
  const searchParams = useSearchParams()
  const entity = searchParams.get('entity')

  switch (entity) {
    case 'education':
      return <EducationSupportPage />
    case 'school':
      return <SchoolSupportPage />
  }
}

export default Support
