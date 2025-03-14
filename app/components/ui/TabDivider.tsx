export default function TabDivider({ children }: { children: React.ReactNode }) {
    // ricorda di dare la classe relative al wrapper del container
    return (
        <div className="tab-divider
                                absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full
                                bg-primary px-2 py-0 lg:py-2
                                rounded-t-lg border-4 border-accent border-b-primary">
            {children}
            <div className="absolute w-full h-1 bg-primary left-0 bottom-[-.3rem] "></div>
        </div>
    )
}