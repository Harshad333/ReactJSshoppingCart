import React, {useState} from 'react';
import './Product.css'

const Product = ({cart, setCart}) => {
    const [products] = useState([
        {
          category: "men's clothing",
          description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          id: 1,
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          price: 109.00,
          title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
        },
        {
          category: "men's clothing",
          description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
          id: 2,
          image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
          price: 22.00,
          title: "Mens Casual Premium Slim Fit T-Shirts "
        },
        {
          category: "men's clothing",
          description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
          id: 3,
          image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
          price: 55.00,
          title: "Mens Cotton Jacket"
        },
        {
          category: "men's clothing",
          description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
          id: 4,
          image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
          price: 50,
          title: "Mens Casual Slim Fit"
        },
        {
          category: "jewelery",
          description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
          id: 5,
          image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
          price: 695,
          title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain "
        },
        {
          category: "jewelery",
          description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
          id: 6,
          image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
          price: 168,
          title: "Solid Gold Petite Micropave "
        },
        {
          category: "jewelery",
          description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
          id: 7,
          image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
          price: 99.00,
          title: "White Gold Plated Princess"
        },
        {
          category: "jewelery",
          description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
          id: 8,
          image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
          price: 10.00
        },
        {
          category: "electronics",
          description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
          id: 9,
          image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
          price: 64,
          title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 "
        },
        {
          category: "electronics",
          description: "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
          id: 10,
          image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
          price: 109,
          title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s"
        }
      ]);
    
      const addToCart = (product) => {
        let newCart = [...cart];
        let itemInCart = newCart.find(
          (item) => product.id === item.id
        );
        if (itemInCart) {
          itemInCart.quantity++;
        } else {
          itemInCart = {
            ...product,
            quantity: 1,
          };
          newCart.push(itemInCart);
        }
        setCart(newCart);
      };


    return (
        <div>
        <h1 className="pro">Products</h1> 
        <div className="Products">
        {
          products.map((product) => (
            <div className="Product" key={product.id}>
              <p style={{fontSize:"20px"}} className="pro_name">{product.title}</p>
              <h4 className="pro_price"><span>&#8377;</span>{product.price}</h4>
              <img src={product.image} className="iconImage" alt={product.title}></img>
              <div><button className="Add_To_Cart" onClick={()=>addToCart(product)}>Add to Cart</button></div>
            </div>
          ))
        }
        <hr></hr>
        </div>
        </div>
    )
}

export default Product
