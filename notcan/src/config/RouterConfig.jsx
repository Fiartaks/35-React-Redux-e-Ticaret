import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import ProductDetail from '../components/ProductDetail'


const RouterConfig = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-details/:id" element={<ProductDetail />} />

        
    </Routes>
  )
}

export default RouterConfig