import Building from "./Building";
import buildingInfo from "@/buildingInfo.json";

export default function BuildingSection() {
    const buildings = [];
    for (let i = 0; i < buildingInfo.length; i++) {
        buildings.push(
            <Building
                key={i}
                name={buildingInfo[i].name}
                rooms_available={buildingInfo[i].rooms_available}
                // if the building picture is not provided, use the default picture
                building_picture={buildingInfo[i].building_picture || "/assets/freeroomsDoorClosed.png"}
            />
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 px-4 ">
            {buildings}
        </div>
    );  
}