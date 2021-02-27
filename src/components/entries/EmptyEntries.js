import React from 'react'
import { Empty, Button } from 'antd';
import '../../styles/emptyentries.css'

function EmptyEntries() {
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
                Document every mood, thoughts, activities on this <br /> awesome webiste, FOR FREE!!
            </span>
            }
        >
            <div className="empty-btn">
                <Button shape="round" size='medium'>Create Now</Button>
            </div>
        </Empty>
            </div>
        </div>
    )
}

export default EmptyEntries
