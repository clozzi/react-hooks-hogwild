import React from "react";
import Filter from "./Filter";
import Sort from "./Sort";
import Pig from "./Pig";

function PigsDisplay({ hogs }) {
    return (
        <div>
            {/* <Filter />
            <Sort /> */}
            <div className="ui link cards">
                {hogs.map((hog) => (
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