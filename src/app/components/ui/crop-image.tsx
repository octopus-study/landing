export const CropImage = (props: any) => {
  return (
    <img
      {...props}
      style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 86%, 50% 100%, 50% 100%, 0 86%)',
      }}
    />
  )
}
