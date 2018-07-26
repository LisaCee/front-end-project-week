import React from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
import { Link } from "react-router-dom";

import '../css/DeleteModal.css';

const DeleteModal = (props) => {
 console.log('MODAL', props)
    return (
        <div>
            <Modal isOpen={ props.modal } toggle={ props.toggle }>
                <ModalBody>
                    <p>Are you sure you want to delete this?</p>
                    <Link to={ "/" }>
                        <Button className='deleteButton' onClick={ () => props.delete(props.id) }>
                            Delete
                    </Button>
                    </Link>
                    <Button className='dismissModal' onClick={ () => props.toggle() }>
                        No
                    </Button>
                </ModalBody>
            </Modal >
        </div >
    );
}

export default DeleteModal;
