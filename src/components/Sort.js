import React from "react";

function Sort({ onSortingSelection }) {
    return (
    <div>
        <select value="sort" onChange={onSortingSelection}>
            <option value="unsorted">Unsorted</option>
            <option value="by name">Sort by Name</option>
            <option value="by weight">Sort by Weight</option>
        </select>
    </div>
    )
}

export default Sort