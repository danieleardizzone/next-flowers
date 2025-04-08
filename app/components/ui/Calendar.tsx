'use client';

export interface Event {
    title: string,
    start: string,
    end: string,
    resource: string,
}

interface CalendarProptypes {
    data: {
        orchidea: Event[],
        ortensia: Event[],
    }
}

export default function Calendar({ data }: CalendarProptypes) {
    return (
        <div className="bg-primary text-primary-content">
            <h2 className="text-3xl text-accent">
                Orchidea
            </h2>
            <ul>
                {
                    data.orchidea.map((event, index) => (
                        <li key={index}>
                            <p>
                                EVENTO {index}
                            </p>
                            <p>
                                dal {event.start}
                            </p>
                            <p>
                                al {event.end}
                            </p>
                        </li>
                    ))
                }
            </ul>
            <h2 className="text-3xl text-accent">
                Ortensia
            </h2>
            <ul>
                {
                    data.ortensia.map((event, index) => (
                        <li key={index}>
                            <p>
                                EVENTO {index}
                            </p>
                            <p>
                                dal {event.start}
                            </p>
                            <p>
                                al {event.end}
                            </p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}