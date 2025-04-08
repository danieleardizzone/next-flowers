import ical, { VEvent } from 'node-ical';

const icalUrlOrchidea = 'https://ical.booking.com/v1/export?t=c1c062db-65b5-4988-b93b-408454cbb572';
const icalUrlOrtensia = 'https://ical.booking.com/v1/export?t=d698611f-d7fe-434c-b067-516285345370';

export async function getCalendars() {
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

                const evStart = new Date(ev.start);
                const evEnd = new Date(ev.end);

                const evFormattedStart = evStart.toLocaleDateString("it-IT");
                const evFormattedEnd = evEnd.toLocaleDateString("it-IT");

                return {
                    title: `App.${apartment} - ${ev.summary || 'Prenotato'}`,
                    start: evFormattedStart,
                    end: evFormattedEnd,
                    resource: apartment,
                };
            });
    }

    const eventsOrchidea = formatEvents(parsedOrchidea, 'orchidea');
    const eventsOrtensia = formatEvents(parsedOrtensia, 'ortensia');




    return {
        orchidea: eventsOrchidea,
        ortensia: eventsOrtensia,
    };
}