import Image from "next/image";

//Reusable card for the page

export default function CardImage({
  id,
  img,
  title,
  w,
  h,
}: {
  id: number;
  img: string;
  title: string;
  w: number;
  h: number;
}) {
  return (
    <div
      className="w-[300px]  p-10 flex flex-col items-center text-center text-[0.5em]"
      key={id}
    >
      <Image 
      src={img} width={w} height={h} alt={img} />
      <p className="text-[2em] text-center">{title}</p>
    </div>
  );
}
