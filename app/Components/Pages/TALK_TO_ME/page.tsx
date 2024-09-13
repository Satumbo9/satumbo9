import { SOCIAL_MEDIAS } from "../../Data/SocialMedias";
import CardImage from "../../Util/CardImage";
import imagePlaceHolder from "../../Assets/Img/placeHolder1.jpg";
import satumbo9Logo from '../../Img/logo/satumbo9-logo.png'
import Image from "next/image";

export default function Talk_To_ME() {
  return (
    <section
      id="TALK"

      // className="h-[100vh] text-center flex flex-col items-center bg-red-500 j+ustify-center p-5"
       className="h-[100vh] justify-center p-5"
    >
      <p 
      // className="text-[4em] font-bold"
      >Talk to me </p>

      <div 
      className="grid grid-cols-2 md:grid-cols-2"
      >
        {SOCIAL_MEDIAS.map((items) => (
          <CardImage
        
            id={items.id}
            img={imagePlaceHolder}
            h={50}
            w={50}
            title={items.name}
          />
        ))}
      </div>
      <Image
      className="rounded-full"
        width={100}
        height={100}
        alt="Satumbo-log"
        src={satumbo9Logo}
      />
    </section>
  );
}
