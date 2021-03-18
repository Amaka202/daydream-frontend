import React from 'react'
import {Loader} from 'rsuite';

function MyLoader() {
    return (
        <div>
            <Loader backdrop content="loading..." size="md" vertical />
        </div>
    )
}

export default MyLoader
