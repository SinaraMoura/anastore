import { useContext } from "react";
import Categories from "../../categories";
import UserContext from "../../../context/UserContext";
import './styles.css'
export default function ModalCategories({ setProdutos }) {
    const { modalCategories, setModalCategories } = useContext(UserContext)
    function closeModalCategories() {
        setModalCategories(false)
    }
    return (
        <>
            {modalCategories &&
                <div className="modal-categories" onClick={() => closeModalCategories()}>
                    <div className="item-modal">
                        <Categories setProdutos={setProdutos} />
                    </div>
                </div>
            }
        </>
    )
}