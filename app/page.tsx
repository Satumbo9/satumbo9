import HomePage from "@/app/Components/Pages/HOME/page";
import ABOUT from "@/app/Components/Pages/ABOUT/page";
import WORK from "@/app/Components/Pages/WORK/page";
import TALK from "@/app/Components/Pages/TALK_TO_ME/page";
import NAV from "@/app/Components/Pages/NAV/page";
import FOOTER from "@/app/Components/Pages/FOOTER/page";

export default function Home() {
  return (
    <section>
      <NAV />
      <HomePage />
      <ABOUT />
      <WORK />
      <TALK />
      <FOOTER />
    </section>
  );
}
