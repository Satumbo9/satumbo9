


//Reusable card for the page

export default function CardItems({id, title,description}:{id:number, title:string, description:string}){
   

    return(
        <div
        key={id}>
        <p className="text-[1em] md:font-bold text-center ">{title}</p>
        <p className="hidden md:inline-block ml-4 w-[200px] mt-3 text-center">{description}</p>
        </div>
    )
}
