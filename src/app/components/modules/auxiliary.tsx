export const Auxiliary = () => {
  return (
    <div className='fixed h-screen w-screen -rotate-90'>
      {/* -rotate-90  */}
      <div className='flex  text-red-600 text-base justify-between'>
        <div>
          <span className='h-2 bg-dark w-full'></span>
          <button>Наверх</button>
        </div>
        <div>
          <p>Подписывайся</p>
          <div>
            <a href='#'>Vk</a>
            <span>/</span>
            <a href='#'>Tg</a>
            <span>/</span>
            <a href='#'>YT</a>
            <span>/</span>
          </div>
        </div>
      </div>
    </div>
  )
}
