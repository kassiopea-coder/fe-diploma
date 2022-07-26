import "./selectSeatsPage.css";

import Header from "./../../components/Header/Header";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import SideSelector from "../../components/Selection/SideSelector/SideSelector";
import LastTickets from "../../components/Selection/LastTickets/LastTickets";
import TicketSelection from "../../components/Selection/TicketSelection/TicketSelection";

export default function SelectSeatsPage() {
  return (
    <div>
      <Header headerType="select" />
      <ProgressBar />
      <div className="selection__container">
        <div className="selection__sidebar">
          <SideSelector />
          <LastTickets />
        </div>
        <TicketSelection />
      </div>
    </div>
  );
}
