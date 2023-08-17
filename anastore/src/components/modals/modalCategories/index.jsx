import { useContext } from "react";
import Categories from "../../categories";
import UserContext from "../../../context/UserContext";
import './styles.css'
export default function ModalCategories() {
    const { modalCategories } = useContext(UserContext)
    return (
        <div className="modal-categories">
            {modalCategories &&
                <Categories />
            }
        </div>
    )
}