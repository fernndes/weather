import React from 'react'

import { SearchBar as SearchBarComponent } from '../styles/global'

function SearchBar({ city, set, get }) {
    return (
        <div style={{ display: 'flex' }}>
            <SearchBarComponent placeholder="Procure por uma cidade" value={city} onChange={(e) => set(e.target.value)} />
            <button style={{ width: 100, border: 'none' }} onClick={() => {
                get()
            }} >Search</button>
        </div>
    )
}

export default SearchBar
