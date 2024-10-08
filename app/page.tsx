import HomePage from "@/app/Components/Pages/HOME/page";
import ABOUT from "@/app/Components/Pages/ABOUT/page";
import BACKGROUND from "@/app/Components/Pages/BACKGROUND/page";
import INQUIRY from "@/app/Components/Pages/INQUIRY/page";
import NAV from "@/app/Components/Pages/NAV/page";
import FOOTER from "@/app/Components/Pages/FOOTER/page";

export default function Home() {
  return (
    <main>
      <NAV />
      <HomePage />
      <ABOUT />
      <BACKGROUND />
      <INQUIRY />
      <FOOTER />
    </main>
  );
}
