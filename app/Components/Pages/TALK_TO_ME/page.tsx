import { SOCIAL_MEDIAS } from "../../Data/SocialMedias";
import CardImage from "../../Util/CardImage";
import imagePlaceHolder from '../../Assets/Img/placeHolder1.jpg';
 import Image from 'next/image';

export default function Talk_To_ME() {
    return (
      <section 
      id="TALK"
      className="h-[100vh] flex flex-col items-center justify-center">
          
        <p className="text-[4em]">Talk to me </p>
        
        
        <div className="flex">
      
        {
          SOCIAL_MEDIAS.map((items)=>(
            <CardImage 
            id={items.id}
            img={imagePlaceHolder}
            h={400}
            w={400}
            title={items.name}
            


            />
          ))
        }
        </div>
        <Image 

width={300}
height={300}
alt="Satumbo-log"
src={imagePlaceHolder}

/>

      </section>
    );
  }
  