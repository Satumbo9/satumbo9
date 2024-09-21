import satumbo9Logo from "../../Img/logo/satumbo9-logo.png";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <section className="h-[20vh]  bg-[#FFFF4E]  flex justify-center items-center text-gray-600 ">
      <div className="flex flex-col justify-center md:flex-row md:justify-between w-full md:w-[900px] items-center md:items-start">
        <Link href="#" aria-label="logo-top-up">
          <Image
            className="w-[100px] md:w-[150px] md:h-[150px]  p-4"
            src={satumbo9Logo}
            height={90}
            width={90}
            alt="satumbo9 logo"
          />
        </Link>
        <p className="md:hidden">&copy; by satumbo9</p>
        <div className=" hidden md:flex md:flex-col p-4 text-center items-center justify-center">
          <p className="font-bold text-[1.4em]">Information</p>
          <div className="flex flex-col text-center w-[200px] ">
            <Link href="#">LinkedIn</Link>
            <Link href="#">Pexels</Link>
            <Link href="#">VideoMaker Skills</Link>
            <Link href="#">inTerviews</Link>
          </div>
        </div>
        <div className=" hidden md:flex md:flex-col p-4 text-center">
          <p className="font-bold text-[1.4em]">Contact</p>
          <div className="flex flex-col text-center w-[200px] ">
            <Link href="#">hello@satumbo.com</Link>
            <Link href="#">+36309917135</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
