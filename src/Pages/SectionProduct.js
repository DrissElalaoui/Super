import { useState, useEffect } from 'react'
import Product from '../Compenent/Product'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, } from 'swiper/modules'
import axios from 'axios'

function SectioProduct() {
  const tableCategoies = [
    "smartphones",
    "laptops",
    "mens-watches",
    "womens-watches",
    "mobile-accessories",
    "sunglasses",
    "tablets",
    // "beauty",
    // "fragrances",
    // "furniture",
    // "home-decoration",
    // "groceries",
    // "kitchen-accessories",
    // "mens-shirts",
    // "mens-shoes",
    // "motorcycle",
    // "vehicle",
    // "skin-care",
    // "sports-accessories",
    // "tops",
    // "womens-bags",
    // "womens-dresses",
    // "womens-shoes",
    // "womens-jewellery",
]
  return (
    <div style={{margin: '100px 0'}}>
      {tableCategoies.map(e => {
        return <SlideProduct category={e} />
      })}
    </div>
  )
}



function SlideProduct({ category }) {
  const [loading, setLoading] = useState([true])
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/category/${category}`)
      .then((res) => {
        setProducts(res.data.products)
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }, [category])
      
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto 50px ' }}>
      <h3 className='text-primary' style={{textTransform: 'capitalize', marginBottom: '20px'}}>{category.replace('-', " ")}</h3>
     
      {/* ================================================== */}
      <div class="card text-center">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <a class="nav-link active text-primary" aria-current="true" href="#">All Products</a>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <Swiper slidesPerView={5} loop={true} autoplay={{ delay: 2500, disableOnInteraction: false }} modules={[Autoplay]}>
              {
              loading ? 
              <div class="spinner-border text-primary" ></div> 
              : 
              products.map(p => (
                <SwiperSlide key={p.id}>
                  <Product id={p.id} title={p.title} price={p.price} img={p.images[0]} />
                </SwiperSlide>
              )) }
              {}
            </Swiper>
        </div>
      </div>
      {/* ================================================== */}
    </div>
  )
}

export default SectioProduct