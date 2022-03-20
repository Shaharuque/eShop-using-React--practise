import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Reactmodal = (props) => {
    //console.log(props)
    const {description,title}=props
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
        <Button variant="info rounded text-white" onClick={handleShow}>
        Product Details
        </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title >{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    );
};

export default Reactmodal;