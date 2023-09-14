import Modal from 'react-modal';
import {useState} from "react";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    },
};

Modal.setAppElement('#root');
export const CalendarModal = () => {
    const onCloseModal = () => {
        console.log('Modal closed');
        setIsOpen(false);
    };

    const [isOpen, setIsOpen] = useState(true);

    return (
        <Modal
            isOpen={ isOpen }
            onRequestClose={ onCloseModal }
            style={ customStyles }
        >
            <h1>Hola mundo</h1>
        </Modal>
    )
}
