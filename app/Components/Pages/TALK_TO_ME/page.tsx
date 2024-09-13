import { SOCIAL_MEDIAS } from "../../Data/SocialMedias";
import CardImage from "../../Util/CardImage";
import imagePlaceHolder from "../../Assets/Img/placeHolder1.jpg";
import satumbo9Logo from '../../Img/logo/satumbo9-logo.png'
import Image from "next/image";

export default function Talk_To_ME() {
  return (
    <section
      id="TALK"
      // className="h-[100vh] flex flex-col items-center justify-center"
      className="=h-[100vh] text-center flex flex-col items-center"
    >
      <p 
      // className="text-[4em] font-bold"
      >Talk to me </p>

      <div 
      className="grid grid-cols-1 md:grid-cols-2"
      >
        {SOCIAL_MEDIAS.map((items) => (
          <CardImage
            id={items.id}
            img={imagePlaceHolder}
            h={400}
            w={400}
            title={items.name}
          />
        ))}
      </div>
      <Image
      className="rounded-full"
        width={300}
        height={300}
        alt="Satumbo-log"
        src={satumbo9Logo}
      />
    </section>
  );
}
