"use client";

import { LevelContext } from "@/utilities/context/mycontext";
import { useContext } from "react";

export default function Heading({ children }: { children: any }){
    const level = useContext(LevelContext);
    switch (level){
        case 1:
            return <h1>{children}</h1>;
        case 2:
            return <h2>{children}</h2>;
        case 3:
            return <h3>{children}</h3>;
        case 4:
            return <h4>{children}</h4>;
        case 5:
            return <h5>{children}</h5>;
        case 6:
            return <h6>{children}</h6>;
        default:
            throw Error('Unknown level: ' + level)
    }
}


// Practicum 1
// export default function Heading({level, children } : { level: number; children: any }) {
//     switch (level){
//         case 1:
//             return <h1>{children}</h1>;
//         case 2:
//             return <h2>{children}</h2>;
//         case 3:
//             return <h3>{children}</h3>;
//         case 4:
//             return <h4>{children}</h4>;
//         case 5:
//             return <h5>{children}</h5>;
//         case 6:
//             return <h6>{children}</h6>;
//         default:
//             throw Error('Unknown level: ' + level)
//     }
// }