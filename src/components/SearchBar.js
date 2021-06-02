import React from 'react'

import { SearchBar as SearchBarComponent } from '../styles/global'

function SearchBar({ city, set, get, error }) {
    return (
        <div style={{ display: 'flex', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>
            <SearchBarComponent placeholder="City" value={city} onChange={(e) => set(e.target.value)} />
            {error && <span className="error">{error}</span>}
            <button style={{ width: 60, height: 60, border: 'none' }} onClick={() => {
                get()
            }} >
                <i class="fas fa-search" style={{ fontSize: 16 }}></i>
            </button>
        </div>
    )
}

export default SearchBar
