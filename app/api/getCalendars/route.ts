import { NextResponse } from 'next/server';
import ical, { VEvent } from 'node-ical';


interface ParsedEvent {
    title: string;
    start: Date;
    end: Date;
    resource: string;
}

const icalUrlOrchidea = 'https://ical.booking.com/v1/export?t=c1c062db-65b5-4988-b93b-408454cbb572';
const icalUrlOrtensia = 'https://ical.booking.com/v1/export?t=d698611f-d7fe-434c-b067-516285345370';

export async function GET() {

    try {

        const [respOrchidea, respOrtensia] = await Promise.all([
            fetch(icalUrlOrchidea),
            fetch(icalUrlOrtensia),
        ]);


        const [icalDataOrchidea, icalDataOrtensia] = await Promise.all([
            respOrchidea.text(),
            respOrtensia.text(),
        ]);

        const parsedOrchidea = ical.parseICS(icalDataOrchidea);
        const parsedOrtensia = ical.parseICS(icalDataOrtensia);

        const formatEvents = (data: ReturnType<typeof ical.parseICS>, apartment: string) => {
            return Object.values(data)
                .filter((item) => item.type === 'VEVENT')
                .map((event) => {
                    const ev = event as VEvent;
                    return {
                        title: `App.${apartment} - ${ev.summary || 'Prenotato'}`,
                        start: ev.start,
                        end: ev.end,
                        resource: apartment,
                    };
                });
        }

        const eventsOrchidea = formatEvents(parsedOrchidea, 'orchidea');
        const eventsOrtensia = formatEvents(parsedOrtensia, 'ortensia');




        return NextResponse.json({
            orchidea: eventsOrchidea,
            ortensia: eventsOrtensia,
        });
    } catch (error) {
        console.error('getCalendars error')
        return NextResponse.json({ error: 'impossible to retrieve calendars' }, { status: 500 });
    }


}