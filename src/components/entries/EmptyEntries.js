import React, {useState} from 'react'
import { Empty, Button } from 'antd';
import '../../styles/emptyentries.css'
import PostEntry from '../PostEntry';

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
            <div className="empty-btn">
                <Button shape="round" size='medium' onClick={showModal}>Create Now</Button>
            </div>
                </Empty>
                <PostEntry show={show} handleClose={hideModal}/>
            </div>
        </div>
    )
}

export default EmptyEntries
