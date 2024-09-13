//Reusable card for the page

export default function Card({
  id,
  title,
  description,
}: {
  id: number;
  title: string;
  description: string;
}) {
  return (
    <div key={id}>
      <p className="text-[4em] font-bold">{title}</p>
      <p>{description}</p>
    </div>
  );
}
