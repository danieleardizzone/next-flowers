'use client';

interface LeftTextProptypes {
    text: string;
    children?: React.ReactNode;
}

export default function LeftText(props: LeftTextProptypes) {
    return (
        <div className="grid grid-cols-12 gap-4
                        p-2">
            <p className="text content-center
                        col-span-12 lg:col-span-6 xl:col-span-5 order-2 lg:order-1
                        p-1 md:p-2">
                {props.text}
            </p>

            <div className="col-span-12 lg:col-span-6 xl:col-span-7 order-1 lg:order-2
                            p-1 md:p-2" >
                {/* immagine o carosello */}
                {props.children}
            </div>
        </div>
    );
}