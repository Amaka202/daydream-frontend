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
        <div className="make-entry-btn page-padding">
            <div className="">
                <Button className="secondary-btn" onClick={showModal}>Create New</Button>
            </div>
            <PostEntry show={show} handleClose={hideModal}/>

        </div>
    )
}

export default MakeEntryButton;
