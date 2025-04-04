import Calendar from "../components/ui/Calendar";
import Container from "../components/ui/LgContainer";

export interface Event {
    title: string,
    start: string,
    end: string,
    resource: string,
}

export interface EventData {
    orchidea: Event[],
    ortensia: Event[],
}

<<<<<<< HEAD
export const dynamic = 'force-dynamic';

=======
>>>>>>> e94fe4e02e7d8e7a81075bfc013ceed726b28a2c
export default async function Page() {

    const res = await fetch('http://localhost:3000/api/getCalendars', { cache: 'no-store' });

    if (!res.ok) throw new Error('Error in calendars retrieval');

    const data = await res.json() as EventData;


    return (
        <Container>
            <Calendar data={data} />
        </Container>
    );
}