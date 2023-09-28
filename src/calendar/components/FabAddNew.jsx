import {useCalendarStore, useUiStore} from "../../hooks/index.js";
import {addHours} from "date-fns";

export const FabAddNew = () => {

    const {openDateModal} = useUiStore();
    const {setActiveEvent} = useCalendarStore();
    const handleOpenModal = () => {
        setActiveEvent({
            title: '',
            notes: '',
            start: new Date(),
            end: addHours(new Date(), 2),
            bgColor: '#fafafa',
            user: {
                _id: '123',
                name: 'Sebastian',
            },
        });
        openDateModal();
    }

    return (
        <button className="btn btn-primary fab" onClick={ handleOpenModal }>
            <i className="fas fa-plus"> </i>
        </button>
    )
}
