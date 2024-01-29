type Props = {
  info: any
}

export const AdminParticipantCard = ({ info }: Props) => {
  // const [isHover, setIsHover] = useState(false)

  const teacher = {
    first_name: 'Alexey',
    last_name: 'Spirin',
    age: 32,
    sex: 'male',
    img_url:
      'https://marvel-b1-cdn.bc0a.com/f00000000290162/images.ctfassets.net/2htm8llflwdx/5u2aV3rSMUUwTsf6hyfx5F/b8a0330066d3891c658b890b42425e1a/Shorelight_Education_Majors.jpg?fit=thumb',
  }

  return (
    <div className='flex-col flex w-52 h-52 cursor-pointer'>
      <img
        className='w-48 h-52 object-cover rounded-xl'
        src={teacher.img_url}
      />
      <p
        className='text-center mt-2 truncate text-white'
        title={`${teacher.first_name} ${teacher.last_name}`}
      >
        {teacher.first_name} {teacher.last_name}
      </p>
    </div>
  )
}
