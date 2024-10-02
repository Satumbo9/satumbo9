//Reusable card for the page

export default function CardItems({
  id,
  title,
  description,
}: {
  id: number;
  title: string;
  description: string;
}) {
  return (
    <div
      className="flex flex-col text-center items-center justify-center bg-[yellow] text-[#5a65c4] p-4 transition ease-in-out delay-10 hover:text-[#5a65c4]   hover:bg-white hover:shadow-lg

sm:h-[200px]

 "
      key={id}
    >
      <p className="text-[1.4em] md:font-bold text-center 2xl:text-[1.20em]">
        {title}
      </p>
      <p className="hidden md:inline-block ml-4 w-[200px] 2xl:w-[200px] mt-3 text-center italic 2xl:text-[1em]">
        &lt;{description}&gt;
      </p>
    </div>
  );
}
