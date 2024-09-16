import { SOCIAL_MEDIAS } from "../../Data/SocialMedias";
import CardImage from "../../Util/CardImage";
import imagePlaceHolder from "../../Assets/Img/placeHolder1.jpg";
import satumbo9Logo from "../../Img/logo/satumbo9-logo.png";
import Link from "next/link";
// import Image from "next/image";

export default function Talk_To_ME() {
  return (
    <section
      id="TALK"
      className="h-[100vh] justify-center p-5 flex   flex-col items-center "
    >
      <div
        className="
      text-[1em] text-center flex flex-col items-center"
      >
        <p className="text-[2em] font-bold flex gap-2 2xl:text-[3em] mb-10">
          Talk to me
          <span>💬</span>
        </p>
        <div
          className="
        flex flex-col
        text-[1.60em]
        md:flex-row md:gap-10 justify-center mt-4 md:text-[2em] 2xl:text-[2em]"
        >
          <Link
            target="_blank"
            className="italic hover:text-pink-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            href="https://www.instagram.com/satumbo9/"
          >
            Instagram
          </Link>
          <Link
            target="_blank"
            className="italic hover:text-pink-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            href="https://www.tiktok.com/@satumbo9"
          >
            Tiktok
          </Link>
          <Link
            target="_blank"
            className="italic hover:text-pink-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            href="https://www.youtube.com/@Satumbo9Hub"
          >
            Youtube
          </Link>
        </div>

      </div>

    </section>
  );
}
