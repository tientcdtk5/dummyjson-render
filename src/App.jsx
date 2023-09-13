import { useState, useEffect } from 'react'
import './styles.css'
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import Wellcome from './components/Wellcome';
import StudentList from './components/StudentList';
const getProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");

  const data = await res.json();

  return data.products;
};

const productData = getProducts();
function App() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("https://dummyjson.com/products");

      const data = await res.json();

      return data.products;
    };

    setStatus("loading");

    getProducts()
      .then((data) => {
        setProducts(data);
        setStatus("success");
      })
      .catch((error) => {
        setError(error);
        setStatus("fail");
      });
  }, []);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong :( {error.message}</div>;
  }

 

  return (
    <div className='App'>
      <Navbar/>
      <Header/>
      <Section products={products}/>
      <Footer/>
      
      
    </div>
  )
}

export default App
