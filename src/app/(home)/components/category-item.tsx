import Image from 'next/image'

interface CategoryItemProps {
  imageUrl: string
  name: string
}

export function CategoryItem({ imageUrl, name }: CategoryItemProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 border-b-4 border-transparent hover:border-b-4 hover:border-brown-800">
      <div className="relative h-[100px] w-[100px] rounded-full">
        <Image
          src={imageUrl}
          alt=""
          fill
          quality={100}
          className="cursor-pointer rounded-full object-fill p-1 hover:border-4 hover:border-brown-800"
        />
      </div>
      <h3 className="pb-2">{name}</h3>
    </div>
  )
}
