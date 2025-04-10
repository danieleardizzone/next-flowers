import Calendar from "@/app/components/ui/Calendar";
import Container from "@/app/components/ui/LgContainer";
import { getCalendars } from '@/lib/getCalendars'
import FirstSection from "@/app/components/ui/FirstSection";

export default async function Page() {

    const data = await getCalendars();


    return (
        <div data-theme="flowers">
            <FirstSection />
            <Container>
                <Calendar data={data} />
            </Container>
        </div>
    );
}