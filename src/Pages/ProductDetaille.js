import React, { useContext } from 'react'
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Product from '../Compenent/Product';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, } from 'swiper/modules'
function ProductDetaille() {
    const [productDetaille, setProductDetaille] = useState({})
    const [image, setImage] = useState()
    const {idLien} = useParams();
    const [tt, setTT] = useState()    
    const [loading, setLoading] = useState(true)
    const [category, setCategory] = useState([])
      useEffect(() => {
      axios.get(`https://dummyjson.com/products/${idLien}`)
        .then((res) => {
          setProductDetaille(res.data)
            if (!image && productDetaille?.images?.length > 0) {
              setImage(productDetaille.images[0]);
            }
          setTT(productDetaille.category)
        })
        .catch((err) => console.log(err))
    }, [productDetaille, image]);
      useEffect(() => {
    axios.get(`https://dummyjson.com/products/category/${tt}`)
      .then((res) => {
        setCategory(res.data.products)
        setLoading(false)
        console.log(category);
        
      })
      .catch((err) => console.log(err))
  }, [tt])

  return (
    <div style={{maxWidth: '1100px', margin: '100px auto', marginBottom: '100px'}}>
      <div>
          <div class="card mb-3" style={{padding: '30px', marginBottom: '50px'}}>
              <div class="row g-0">
                  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} class="col-md-4">
                      <img style={{width: '300px', marginBottom: '20px'}} src={image} class="img-fluid rounded-start" alt="..." />  {/* Solution 1 : Optional chaining (la plus simple)*/}
                      <div style={{display: 'flex', alignItems: 'center',  justifyContent: 'space-evenly', width: '100%'}}>
                      <img onClick={() => {setImage(productDetaille?.images?.[0])}} style={{width: '70px', cursor: 'pointer'}} src={productDetaille?.images?.[0] || "/no-image.png"} class="img-fluid rounded-start" alt="..." />
                      <img onClick={() => {setImage(productDetaille?.images?.[1])}} style={{width: '70px', cursor: 'pointer'}} src={productDetaille?.images?.[1] || "/no-image.png"} class="img-fluid rounded-start" alt="..." />
                      <img onClick={() => {setImage(productDetaille?.images?.[2])}} style={{width: '70px', cursor: 'pointer'}} src={productDetaille?.images?.[2] || "/no-image.png"} class="img-fluid rounded-start" alt="..." />
                      </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} class="col-md-8">
                  <div class="card-body">
                      <h2 class="card-title text-primary">{productDetaille.title}</h2>
                        <div className='text-warning ' style={{fontSize: '20px', margin: '15px 0 '}} >
                                          <FaStar />
                                          <FaStar />
                                          <FaStar />
                                          <FaStar />
                                          <FaStarHalfStroke />
                      </div>
                      <h4 style={{}} >$ {productDetaille.price}</h4>
                      <p>Availability: <b className='text-success' style={{}}>{productDetaille.availabilityStatus}</b></p>    
                      <p class="card-text">{productDetaille.description}</p>
                      <h6 class="card-text text-primary">Hurry Up! Only  <span style={{fontSize: '20px'}} className='text-dark'>{productDetaille.stock}</span> products left in stock.</h6>
                      <button type="button" class="btn btn-primary mt-3">Add To Card</button>
                  </div>
                  </div>
              </div>
          </div>
      </div>
      {/* =================== category ===================== */}
      <div>
        <h2 className='text-primary'>laptops</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptates?</p>
        <hr />

        <div class="card text-center">
          <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs">
              <li class="nav-item">
                <a class="nav-link active text-primary " aria-current="true" href="#">Product By Category</a>
              </li>
            </ul>
          </div>
          <div class="card-body">
            <Swiper slidesPerView={5} loop={true} autoplay={{ delay: 2500, disableOnInteraction: false }} modules={[Autoplay]}>
              {loading ? <div class="spinner-border text-primary" ></div>  :  category.map(e => {return <SwiperSlide><Product id={e.id} img={e.images[0]} title={e.title} price={e.price} /></SwiperSlide>}) }
           </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetaille