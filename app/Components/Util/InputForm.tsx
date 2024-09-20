





//Reuseable Input
export const InputForm = ({name, id, type, label, placeHolder, labelClass, inputClass, className}:
    {name?:string, id?:string, type?:string, label?:string, placeHolder?:string, labelClass?:string, inputClass?:string, className?:string})=>{


    return(
        <div className={className}>
            <label htmlFor={name} className={`${labelClass}`}> 
                <p>{label}</p>
            </label>
            <input type={type} name={name} id={id} placeholder={placeHolder} className={`${inputClass}`} />
        </div>
    )
}