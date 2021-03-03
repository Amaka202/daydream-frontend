import React, {useState} from 'react'
import {Button} from 'rsuite';
import PostEntry from './PostEntry';

function MakeEntryButton() {

    const [show, setShow] = useState(false);

    const showModal = () => {
        setShow(true)
    }

    const hideModal = () => {
        setShow(false)
    }

    return (
        <div className="make-entry-btn">
            <div className="empty-btn">
                <Button shape="round" size='medium' onClick={showModal}>Create New</Button>
            </div>
            <PostEntry show={show} handleClose={hideModal}/>

        </div>
    )
}

export default MakeEntryButton;
