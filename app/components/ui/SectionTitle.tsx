export default function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-center text-accent font-extrabold pb-2">
            {children}
        </div>
    )
}