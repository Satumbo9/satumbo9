import HomePage from "@/app/Components/Pages/HOME/page";
import ABOUT from "@/app/Components/Pages/ABOUT/page";
import WORK from "@/app/Components/Pages/WORK/page";
import SEND_ME_EMAIL from "@/app/Components/Pages/TALK_TO_ME/page";
import NAV from "@/app/Components/Pages/NAV/page";
import FOOTER from "@/app/Components/Pages/FOOTER/page";
// import Modal from "./Components/Util/Modal";

export default function Home() {
  return (
    <main>
      <NAV />
      <HomePage />
      <ABOUT />
      <WORK />
      <SEND_ME_EMAIL />
      <FOOTER />
      {/* <Modal /> */}
    </main>
  );
}
