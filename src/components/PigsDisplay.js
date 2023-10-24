import React, { useState } from "react";
import GreaseFilter from "./GreaseFilter";
import Sort from "./Sort";
import Pig from "./Pig";

function PigsDisplay({ hogs }) {
    const [checked, setChecked] = useState(false)

    function handleGreasedChange(e) {
        setChecked(e.target.checked)
    }

    const hogsToDisplay = hogs.filter((hog) => {
        if (checked === true) return hog.greased === true;
        if (checked === false) return hog;
    })

    return (
        <div>
            <div className="display mods">
                <GreaseFilter onGreasedFilterChange={handleGreasedChange} />
                {/* <Sort /> */}
            </div>
            <div className="ui link cards">
                {hogsToDisplay.map((hog) => (
                    <Pig 
                        name={hog.name} 
                        image={hog.image} 
                        specialty={hog.specialty} 
                        weight={hog.weight}
                        greased={hog.greased}
                        medal={hog["highest medal achieved"]}
                        />
                ))}
            </div>
        </div>
    )
}

export default PigsDisplay