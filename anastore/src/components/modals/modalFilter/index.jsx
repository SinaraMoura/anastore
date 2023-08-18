import { useContext } from "react"
import UserContext from "../../../context/UserContext"
import Filter from "../../filter"
import './styles.css'

export default function ModalFilter({ setProdutos }) {
    const { modalFilter, setModalFilter } = useContext(UserContext);
    function closeModalFilter() {
        setModalFilter(false)
    }
    return (
        <>
            {modalFilter &&
                <div className="modal-filter" onClick={() => closeModalFilter()}>
                    <div className="item-modal">
                        <Filter setProdutos={setProdutos} />
                    </div>
                </div>
            }
        </>
    )
}