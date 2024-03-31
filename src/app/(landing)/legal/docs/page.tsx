'use client'

import { Container } from '@/app/components/ui'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { LegalDocsAdditionalOffer } from './additional-offer'
import { LegalDocsOffer } from './offer'
import { LegalDocsServices } from './services'

const LegalDocs = () => {
  const href =
    typeof window !== 'undefined' && window.location.href
      ? window.location.href
      : ''

  const searchParams = useSearchParams()

  switch (searchParams.get('type')) {
    case 'offer':
      return <LegalDocsOffer />
    case 'offer-additional':
      return <LegalDocsAdditionalOffer />
    case 'services':
      return <LegalDocsServices />
    case 'program':
      return <LegalDocsServices />
  }

  return (
    <div className='bg-white h-[calc(100vh-70px)]'>
      <Container className='py-16'>
        <h3 className='font-bold text-xl'>
          СПИСОК ЮРИДИЧЕСКИХ ДОКУМЕНТОВ ООО «ПЛАТФОРМА КРЕАТИВНОГО ОБУЧЕНИЯ»
        </h3>
        <ul className='mt-8 text-lg font-normal leading-8'>
          <li>
            Договор-оферта{' '}
            <Link href={{ query: 'type=offer' }} className='underline'>
              {href}?type=offer.
            </Link>
          </li>
          <li>
            Приложение к Договору-оферте{' '}
            <Link
              href={{ query: 'type=offer-additional' }}
              className='underline'
            >
              {href}?type=offer-additional.
            </Link>
          </li>
          <li>
            Перечень услуг{' '}
            <Link href={{ query: 'type=services' }} className='underline'>
              {href}?type=services.
            </Link>
          </li>
          <li>
            Просветительская программа{' '}
            <Link href={{ query: 'type=program' }} className='underline'>
              {href}?type=program.
            </Link>
          </li>
        </ul>
      </Container>
    </div>
  )
}

export default LegalDocs
