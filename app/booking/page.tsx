import Calendar from "../components/ui/Calendar";
import Container from "../components/ui/LgContainer";
import { getCalendars } from '@/lib/getCalendars'

export default async function Page() {

    const data = await getCalendars();


    return (
        <Container>
            <Calendar data={data} />
        </Container>
    );
}