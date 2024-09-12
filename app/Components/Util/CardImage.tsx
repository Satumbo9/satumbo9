import Image from 'next/image';


//Reusable card for the page

export default function CardImage({id, img, title, w, h}:{id:number, img:any, title:string, w:number, h:number}){
   

    return(
        <div
        className="w-[300px]  p-10 flex flex-col items-center text-center" 
        key={id}>  
        <Image
        src={img}
        width={w}
        height={h}
        alt={img}
        
        />
        <p className="text-[2em] font-bold text-center">{title}</p>

        </div>
    )
}
