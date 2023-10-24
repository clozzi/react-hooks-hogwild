import React, { useState } from "react";

function GreaseFilter({ onGreasedFilterChange }) {

    return (
    <form>
        <label htmlFor="greased">Greased? </label>
        <input type="checkbox" onChange={onGreasedFilterChange}></input>
    </form>
    )
}

export default GreaseFilter