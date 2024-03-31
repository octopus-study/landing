import { Container } from '@/app/components/ui'

const LegalRequisites = () => {
  return (
    <div className='bg-white h-[calc(100vh-70px)]'>
      <Container className='py-16'>
        <h3 className='font-bold text-5xl'>
          Реквизиты школы {process.env.NEXT_PUBLIC_SCHOOL_NAME}
        </h3>
        <div className='text-xl mt-16 leading-8'>
          <p>ООО «Платформа креативного обучения»</p>
          <p>
            Адрес 123100, г. Москва, ул. Мантулинская, дом 7, стр. 3, эт. 2,
            пом. II, ком. 2
          </p>
          <p>ОГРН 5167746258125</p>
          <p>ИНН/КПП 7703475219/770301001</p>
          <p>ОГРН 1197746294767</p>
          <p>Банковские реквизиты:</p>
          <p>Наименование банка АО «АЛЬФА-БАНК» г. Москва</p>
          <p>Р/счет 40702 810 5 0239 0004028</p>
          <p>БИК 044525593</p>
          <p>Корр/счет</p>
          <p>30101810200000000593</p>
          <p>
            E-mail:{' '}
            <a
              href='#'
              rel='noopener noreferrer'
              target='_blank'
              className='underline'
            >
              info@tumo.moscow
            </a>
          </p>
          <p>Генеральный директор Бадалян М.С.</p>
        </div>
      </Container>
    </div>
  )
}

export default LegalRequisites
