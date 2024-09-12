


//Reusable card for the page

export default function CardItems({id, title,description}:{id:number, title:string, description:string}){
   

    return(
        <div
        className="w-[300px]  p-10" 
        key={id}>
        <p className="text-[2em] font-bold text-center">{title}</p>
        <p>{description}</p>
        </div>
    )
}
