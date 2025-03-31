export default function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-accent font-extrabold pb-2">
            {children}
        </div>
    )
}