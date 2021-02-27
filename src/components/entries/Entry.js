import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import tooTired from '../../img/too-tired.png'
import '../../styles/entries.css'

function Entry() {
    const element1 = <FontAwesomeIcon icon={faTrash} />
    const element2 = <FontAwesomeIcon icon={faEdit} />



    return (
        <div className="entry-section">
            <div>
            <div style={{marginBottom: '2rem'}}>
                <p className="entry-date">Friday, 12 Febuary 2021</p>
                <p className="entry-title">Awesome day at the Beach</p>
            </div>
            <div>
                <div className="entry-img-div">
                    <img src={tooTired} alt=""/>
                </div>
                <div className="entry-text">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae imperdiet amet, integer a amet. Lacus, cras quam lobortis fringilla. Erat porta ornare enim posuere amet. Scelerisque cras elementum blandit varius elit platea sed nulla. Tellus integer felis hac neque. Augue consectetur eget senectus volutpat habitant.
                    Felis neque, felis velit volutpat in dolor a eget eu. Sapien enim, risus, sit vulputate et. Lectus amet, hac in convallis tellus gravida. Urna volutpat arcu, porttitor eu gravida metus enim
                    </p>
                </div>
            </div>
            <div className="trash-icon">
                <div style={{color: '#AEAEAE'}}>
                    {element2}
                </div>
                <div style={{color: '#FF0202'}}>
                    {element1}
                </div>
            </div>
            </div>
        </div>
    )
}

export default Entry
