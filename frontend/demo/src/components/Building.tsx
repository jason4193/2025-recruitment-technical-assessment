interface BuildingProps {
    name:string;
    rooms_available:number;
    building_picture:string;
};

export default function Building ({name, rooms_available, building_picture}: BuildingProps) {
    return (
        <div
            className="w-full h-40 bg-cover bg-center rounded-xl py-4 px-6 flex justify-between items-center"
            style={{ backgroundImage: `url(${building_picture})` }}
        >
            <span className="text-white text-2xl font-bold">{name}</span>
            <div className="bg-white rounded-xl py-2 px-4 flex items-center gap-2">
                {/* A green dot */}
                <div className="bg-green-600 rounded-full w-4 h-4"></div>
                <span className="font-bold">{rooms_available}/{rooms_available}</span>
            </div>
        </div>
    );
}