import { Metadata } from 'next'
import { EducationSupportPage } from './education'
import { SchoolSupportPage } from './school'

type Props = {
  searchParams: {
    entity: 'school' | 'education'
  }
}

const Support = ({ searchParams }: Props) => {
  switch (searchParams.entity) {
    case 'education':
      return <EducationSupportPage />
    case 'school':
      return <SchoolSupportPage />
  }
}

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  switch (searchParams.entity) {
    case 'education':
      return {
        title: `Поддержка в обучении ${process.env.NEXT_PUBLIC_SCHOOL_NAME}`,
      }
    case 'school':
      return {
        title: `Поддержка школы ${process.env.NEXT_PUBLIC_SCHOOL_NAME}`,
      }
    default:
      return {
        title: `Школа креативных технологий ${process.env.NEXT_PUBLIC_SCHOOL_NAME}`,
      }
  }
}

export default Support
