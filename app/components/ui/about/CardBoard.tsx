import CallToAction from "../CallToAction";
import Card from "./Card";

export default function CardBoard() {
    return (
        <div className="grid grid-cols-4 grid-rows-3 gap-2">
            <div className="apartments-specs w-full h-full 
                            col-span-2 row-span-2 col-start-3 row-start-1">
                <Card>
                    appartamenti specifiche
                </Card>
            </div>
            <div className="apartments-capacity w-full h-full 
                            col-span-2 row-span-1 col-start-1 row-start-1">
                <Card>
                    apartments capacity
                </Card>
            </div>
            <div className="apartments-panorama w-full h-full
                            col-span-1 row-span-2 col-start-1 row-start-2">
                <Card>
                    panorama view
                </Card>
            </div>
            <div className="apartments-services-1 w-full h-full 
                            col-span-1 row-span-1 col-start-2 row-start-2">
                <Card>
                    wifi
                </Card>
            </div>
            <div className="apartments-services-2 w-full h-full 
                            col-span-1 row-span-1 col-start-2 row-start-3">
                <Card>
                    lavanderia
                </Card>
            </div>
            <div className="cta w-full h-full
                            col-span-2 row-span-2 col-start-3 row-start-3">
                <CallToAction />
            </div>
        </div>
    );
}