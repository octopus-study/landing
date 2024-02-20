import Script from 'next/script'

const YKey = 'c7a82da8-2278-4e5f-93a2-adc6f2e33d34'

const Contacts = () => {
  return (
    <div className='text-white'>
      <div></div>
      <Script src='https://api-maps.yandex.ru/2.1/?apikey=YOUR_API_KEY&lang=ru_RU' />
    </div>
  )
}

export default Contacts
