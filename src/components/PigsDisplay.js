import React, { useState } from "react";
import GreaseFilter from "./GreaseFilter";
import Sort from "./Sort";
import Pig from "./Pig";

function PigsDisplay({ hogs }) {
    const [checked, setChecked] = useState(false)
    const [sortingSelection, setSortingSelection] = useState("unsorted")

    function handleGreasedChange(e) {
        setChecked(e.target.checked)
    }

    function handleSortingSelection(e) {
        setSortingSelection(e.target.value)
    }

    const filteredHogs = hogs.filter((hog) => {
        if (checked === true) return hog.greased === true;
        if (checked === false) return hog;
    })

    const sortedHogs = filteredHogs.map((hog) => {
        if (sortingSelection === "unsorted") return hog;
    })

    return (
        <div>
            <div className="display mods">
                <GreaseFilter onGreasedFilterChange={handleGreasedChange} />
                <Sort onSortingSelection={handleSortingSelection}/>
            </div>
            <div className="ui link cards">
                {sortedHogs.map((hog) => (
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