
export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className="container mx-auto mb-4 p-1 md:p-0">
            {children}
        </div>
    )
}