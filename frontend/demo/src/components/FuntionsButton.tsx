interface FuntionsButtonProps {
    icon: string;
    name: string;
}

export default function FunitonsButton({ icon, name }: FuntionsButtonProps) {
    return (
        <div className="w-full flex justify-center items-center gap-2 border-2 border-orange rounded-xl p-2">
            <span className="material-icons"><div className="text-orange">{icon}</div></span>
            <div className="text-orange font-bold">{name}</div>
        </div>
    );
}