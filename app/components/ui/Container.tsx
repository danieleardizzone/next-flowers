
export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className="container mx-auto mb-4 px-1 md:px-0">
            {children}
        </div>
    )
}