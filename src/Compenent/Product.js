
import { FaStar, FaShoppingCart, FaRegHeart, FaShare  } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router-dom";


function Product({id, img, title, price}) {


  return (
    <div   className="product"  style={{
        width: '200px',
        height: '250px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        borderRadius: '5px',
        cursor: 'pointer',
        textDecoration: 'none'
        }}>
          <Link to={`/products/${id}`}>
            <div className='text-warning stars' style={{fontSize: '15px', position: 'absolute', top: '5px', left: '5px'}} >
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfStroke />
            </div>
            <div  style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }} >
              <img style={{width: '120px', height: '120px'}} src={img} class="card-img-top" alt="..." />
            </div>
            <div >
                <p style={{fontSize: '14px', textAlign: 'center', textDecoration: 'none', color: '#000'}}>{title}</p>
                <h6 style={{position: 'absolute',right: '10px', bottom: '5px'}} className='text-primary' >$ {price}</h6>
              <div className='iconsProduct' style={{ flexDirection: 'column' ,fontSize: '15px', position: 'absolute', right: '10px', top: '20px'}} >
                  <FaShoppingCart style={{marginBottom: '15px'}} />
                  <FaRegHeart style={{marginBottom: '15px'}}  />
                  <FaShare  />
              </div>
            </div>
           </Link>
    </div>
  )
}

export default Product