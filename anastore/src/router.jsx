import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { toast } from "react-toastify";
import UserContext from "./context/UserContext";
import Order from "./pages/Order";
import Main from './pages/Main'

export default function MainRouter() {
    const [allProducts, setAllProducts] = useState([]);
    const [valueInput, setValueInput] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [categorie, setCategorie] = useState('');
    const [img, setImg] = useState('');
    const [componentRender, setComponentRender] = useState(false);
    const valuesProviders = {
        allProducts, setAllProducts,
        valueInput, setValueInput, desc, setDesc, categorie,
        setCategorie, price, setPrice, img, setImg, componentRender, setComponentRender
    };

    useEffect(() => {
        const fetchPrismic = async () => {
            try {
                const response = await fetch('https://anastore.prismic.io/api/v2/documents/search?ref=ZL6kThIAACQA6yr2');
                const jsonData = await response.json();
                const formattedData = jsonData.results.map(item => ({
                    id: item.uid,
                    secao: item.data.title[0].text,
                    products: item.data.products.map(product => {
                        return {
                            id: product.id[0].text,
                            price: product.price[0].text,
                            desc: product.description[0].text,
                            categorie: product.categorie[0].text,
                            img: product.img.url
                        }
                    })
                }
                ))
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
