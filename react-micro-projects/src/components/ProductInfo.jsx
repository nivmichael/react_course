const ProductInfo = () => {
  const products = [
    {name: "laptop", price: "1200$", availability: "In Stock"},
    {name: "ffff", price: "66$", availability: "out of stock Stock"},
    {name: "lapxxxtop", price: "33$", availability: "In Stock"},
  ]; 
  return (
    <div>
        {products.map(({name, price, availability}, index) => (
          <ul key={index}>
            <li>Name: {name}, Price: {price}, Availability: {availability}</li>
          </ul>
        ))}
    </div>
  )
}

export default ProductInfo