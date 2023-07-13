import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import UserContext from "./context/UserContext";
import Order from "./pages/Order";
import Main from './pages/Main'

export default function MainRouter() {
    const [valueInput, setValueInput] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [categorie, setCategorie] = useState('');
    const [img, setImg] = useState('');
    const [componentRender, setComponentRender] = useState(false);
    const valuesProviders = {
        valueInput, setValueInput, desc, setDesc, categorie,
        setCategorie, price, setPrice, img, setImg, componentRender, setComponentRender
    };

    return (
        <UserContext.Provider value={valuesProviders}>
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path='/order' element={<Order />} />
            </Routes>
        </UserContext.Provider>
    )
}
