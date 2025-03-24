interface AvatarImageProps {
  src: string
}

export function AvatarImage({ src }: AvatarImageProps) {
  return <img src={src} alt="Imagem de avatar" className="h-16 w-16 rounded-full "/>
}