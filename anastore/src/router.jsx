import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { toast } from "react-toastify";
import UserContext from "./context/UserContext";
import Order from "./pages/Order";
import Main from './pages/Main'

export default function MainRouter() {
    const [allProducts, setAllProducts] = useState([]);
    const [modalCategories, setModalCategories] = useState(false);
    const [modalFilter, setModalFilter] = useState(false);
    const [modal, setModal] = useState(false);
    const [valueInput, setValueInput] = useState('');
    const [desc, setDesc] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [categorie, setCategorie] = useState('');
    const [img, setImg] = useState('');
    const [componentRender, setComponentRender] = useState(false);
    const valuesProviders = {
        allProducts, setAllProducts,
        modal, setModal,
        modalCategories, setModalCategories,
        modalFilter, setModalFilter,
        valueInput, setValueInput, title, setTitle, desc, setDesc, categorie,
        setCategorie, price, setPrice, img, setImg, componentRender, setComponentRender
    };

    useEffect(() => {
        const fetchPrismic = async () => {
            try {
                const response = await fetch('https://anastore.prismic.io/api/v2/documents/search?ref=ZNEnRBEAACMACc3H');
                const jsonData = await response.json();

                const formattedData = jsonData.results.map(item => {
                    return {
                        id: item.uid,
                        secao: item.data.title[0]?.text,
                        products: item.data.products.map(product => {
                            const data = {
                                id: product.id[0]?.text,
                                price: product.price[0]?.text,
                                title: product.title_prod[0]?.text,
                                desc: product.description[0]?.text,
                                categorie: product.categorie[0]?.text,
                                img: product.img.url
                            }
                            return data
                        })
                    }
                })
                setAllProducts(formattedData);
            } catch (error) {
                toast.error(error?.response?.data?.message);
            }
        }
        fetchPrismic();
    }, [])

    return (
        <UserContext.Provider value={valuesProviders}>
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path='/order' element={<Order />} />
            </Routes>
        </UserContext.Provider>
    )
}
