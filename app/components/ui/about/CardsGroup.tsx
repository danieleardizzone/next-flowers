import Card from "./Card"

export default function CardsGroup() {

    const cards = [
        {
            title: "Capacità",
            content: "4 persone per appartamento.<br />Due appartamenti per un totale di 8 persone.",
        },
        {
            title: "Autonomia e Comfort",
            content: "Ogni appartamento dispone di<br />cucina attrezzata,<br />bagno privato e<br />salotto indipendente.",
        },
        {
            title: "Balcone con vista",
            content: "Goditi momenti di relax e paesaggi suggestivi nell'appartamento Orchidea!",
        }
    ]

    return (
        <div className="flex justify-center">
            <div className="xl:w-[90vw] p-2 text-secondary-content 
                        flex flex-col items-center gap-3
                        lg:flex-row lg:items-stretch">
                {
                    cards.map((card, index) => (
                        <div key={index} className="flex w-full sm:w-3/4 lg:w-full">
                            <Card title={card.title} content={card.content} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}