"use client";

interface OptionButtonProps {
    icon: string;
    action: () => void;
}

export default function OptionButton({ icon, action }: OptionButtonProps) {
    return (
        <button onClick={action} className="p-2 option-button border rounded-md border-orange hover:bg-orange text-orange hover:text-white">
            <span className="material-icons" >
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold">
                    {icon}
                </div>
            </span>
        </button>
    )
}
