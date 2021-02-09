import React from 'react'

function SearchInput(props) {
    return (
        <div>
            <input onChange={(e) => props.setSearchValue(e.target.value)} />
        </div>
    )
}

export default SearchInput
