type Props = {
  steps: string[]
}

export const Timeline = ({ steps }: Props) => {
  return (
    <ol className='flex items-center w-full flex-col md:flex-row'>
      {steps.map((step, idx) => (
        <div
          key={idx}
          className="flex w-full items-center  dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800"
        >
          <div>
            <div />
            <h2>{step}</h2>
          </div>
          <li>
            <span className='flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0'>
              {idx + 1}
            </span>
          </li>
        </div>
      ))}
    </ol>
  )
}
