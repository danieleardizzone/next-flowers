import Container from "@/app/components/ui/Container";
import LeftText from "@/app/components/ui/text&image/LeftText"
import Image from "next/image";
import TabDivider from "./TabDivider";
import Carousel from "./Carousel";

export default function About() {

    const aboutDescription: string = "Flowers Apartments offre comfort, accoglienza e comodità, ti sentirai come a casa tua! Ogni appartamento dispone di ampio soggiorno, camera da letto, cucina attrezzata e un bagno privato. La cucina attezzata è perfetta per preparare deliziosi pasti con ingredienti locali freschi. Marineo infatti è famosa per gli ottimi salumi, formaggi, carne, olio, vino e tante altre delizie. L'ampio soggiorno è un luogo accogliente dove rilassarsi, con TV e balcone con vista mozzafiato! Prenota la tua vacanza al Flowers Apartments e vivi un'esperienza indimenticabile nella splendida Sicilia. Contattaci per disponibilità e tariffe.";

    return (
        <div className="bg-primary text-primary-content
                        mt-8 sm:mt-0
                        border-t-4 border-accent
                        relative">
            <Container>
                <TabDivider>
                    Casa Vacanze a Marineo
                </TabDivider>
                <LeftText text={aboutDescription}>
                    <Carousel />
                </LeftText>
            </Container>
        </div>
    );
}