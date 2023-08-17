import { useContext } from "react"
import UserContext from "../../../context/UserContext"
import Filter from "../../filter"
import './styles.css'

export default function ModalFilter() {
    const { modalFilter } = useContext(UserContext)
    return (
        <div className="modal-filter">
            {modalFilter &&
                <Filter />
            }
        </div>
    )
}