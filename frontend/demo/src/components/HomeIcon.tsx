'use client';
import Image from 'next/image';
import freeRoomsLogo from '../assets/freeRoomsLogo.png';

export default function HomeIcon() {
    // when the user clicks on the logo, the page will redirect to the home page
    return (
        <div onClick={() => window.location.href = '/'} className="flex items-center scale-100 hover:scale-105 ">
            <Image
                src={freeRoomsLogo}
                alt="Free Rooms Logo"
                width={80}
                height={80}
            />
            <p className="hidden md:block text-orange text-4xl font-bold ">Freerooms</p>
        </div>
    );
}
