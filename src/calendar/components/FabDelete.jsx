import {useUiStore} from "../../hooks/index.js";

export const FabDelete = () => {
    const {openDateModal} = useUiStore();


    return (
        <button className="btn btn-primary fab-delete" >
            <i className="fas fa-plus"> </i>
        </button>
    )
}
