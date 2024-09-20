



export  const ButtonForm = ({text, type, className}:{text:string, type:any, className:string})=>{



    return(
        <button type={type} className={className}>{text}</button>
    )
}