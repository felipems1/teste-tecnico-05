import Image from 'next/image'

interface CategoryItemProps {
  imageUrl: string
  name: string
}

export function CategoryItem({ imageUrl, name }: CategoryItemProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="relative h-[120px] w-[120px] rounded-full">
        <Image
          src={imageUrl}
          alt=""
          fill
          quality={100}
          className="rounded-full object-fill"
        />
      </div>
      <h3>{name}</h3>
    </div>
  )
}
