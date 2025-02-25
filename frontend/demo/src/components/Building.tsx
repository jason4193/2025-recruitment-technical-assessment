interface BuildingProps {
    name:string;
    rooms_available:number;
    building_picture:string;
};

export default function Building ({name, rooms_available, building_picture}: BuildingProps) {
    return (
        <div
            className="w-full h-40 md:h-60 lg:h-80 bg-cover bg-center rounded-xl py-4 px-6 flex flex-row-reverse md:flex-col justify-between items-center md:items-end"
            style={{ backgroundImage: `url(${building_picture})` }}
        >
            <div className="bg-white rounded-xl py-2 px-4 flex items-center gap-2">
                {/* A green dot */}
                <div className="bg-green-600 rounded-full w-4 h-4"></div>
                <span className="font-bold">{rooms_available}/{rooms_available}</span>
            </div>
            <div className="md:bg-orange md:p-4 md:w-full rounded-xl">
                <span className="text-white text-2xl md:text-xl lg:text-lg font-bold">{name}</span>
            </div>
        </div>
    );
}