import React from "react";

export function Search() {
    return (
        <div>
            <input type="text" name="usersearch" id="usersearch" placeholder="Search" />
            <input type="text" name="location" id="location" placeholder="Location" />
            <input type="text" list="sort_by"  placeholder="Sort By"/>
                <datalist id="sort_by">
                    <option value="Best Match"></option>
                    <option value="Rating"></option>
                    <option value="Review Count"></option>
                    <option value="Rating"></option>
                </datalist>
            <input type="submit" value="Search" />
        </div>
    )
}