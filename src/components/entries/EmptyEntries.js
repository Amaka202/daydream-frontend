import React, {useState} from 'react'
import { Empty } from 'antd';
import '../../styles/emptyentries.css'
import PostEntry from '../PostEntry';
import { Button } from 'rsuite';


function EmptyEntries() {
    const [show, setShow] = useState(false);

    const showModal = () => {
        setShow(true)
    }

    const hideModal = () => {
        setShow(false)
    }

    return (
        <div className="empty-entries-container">
            <div>
            <Empty
            imageStyle={{
            height: 60,
            }}
            description={
            <span className="empty-text">
                Oops! Looks like you have not made an entry yet... <br />
            </span>
            }
                >
            <div className="reminder-btn">
                <Button className="secondary-btn" onClick={showModal}>Create New</Button>
            </div>
                </Empty>
                <PostEntry show={show} handleClose={hideModal}/>
            </div>
        </div>
    )
}

export default EmptyEntries;
