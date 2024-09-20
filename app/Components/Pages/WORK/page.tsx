//  
// import Image from "next/image";
import CardItems from "../../Util/CardItems";
import { PROFESSIONAL_CAREER } from "@/app/Components/Data/Profession";

export default function WorkPage() {
  return (
    <section
      id="WORK"
      className="min-h-[100vh] flex items-center justify-center text-center "
    >
      <div className="text-center flex flex-col items-center ">
        <p className="text-[2em] md:text-[3em] font-bold flex gap-2 2xl:text-[3em]">
          Background <span>👨🏾‍💻</span>
        </p>

        <div className="flex flex-col mt-10 md:flex-row text-[1em] md:text-[1.3em] gap-2">
          {PROFESSIONAL_CAREER.map((items) => (
            <CardItems
              key={items.id}
              id={items.id}
              title={items.name}
              description={items.description}
            />
          ))}
        </div>
        <p className="p-5 md:w-[600px] 2xl:w-[800px] mt-10 h-[200px] text-10 2xl:text-[1em]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
          accusamus qui omnis quisquam sequi, reiciendis id dolorem maiores non
          dolores earum eligendi ea odit officia vel, laboriosam, ab harum
          saepe. Neque nam laboriosam at voluptas error, alias nulla nobis
          molestiae itaque dolore consequuntur officia optio soluta, tempore a,
          praesentium obcaecati quo natus voluptatum voluptatem ab. Deserunt,
          unde placeat. Sunt, repellat! Assumenda saepe natus pariatur ullam
          dolores suscipit alias obcaecati voluptatum dolorum. Nemo quam unde
        </p>
      </div>
    </section>
  );
}
