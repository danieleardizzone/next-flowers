export default function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="card h-full rounded-xl border-2 border-secondary">
            {children}
        </div>
    )
}