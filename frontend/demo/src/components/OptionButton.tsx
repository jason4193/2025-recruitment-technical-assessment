"use client";

interface OptionButtonProps {
    icon: string;
    action: () => void;
}

export default function OptionButton({ icon, action }: OptionButtonProps) {
    return (
        <button onClick={action} className="w-16 h-16 p-2 option-button border rounded-md border-orange hover:bg-orange text-orange hover:text-white">
            <span className="material-icons" style={{ fontSize: '2.5rem', fontWeight: 'bold'}}>
                {icon}
            </span>
        </button>
    )
}
