import React, { useState } from "react";

function GreaseFilter({ onGreasedFilterChange }) {

    return (
    <form>
        <h3>Greased? </h3>
        <input type="checkbox" onChange={onGreasedFilterChange}></input>
    </form>
    )
}

export default GreaseFilter