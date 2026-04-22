# Shopping Cart Challenge — Solution

```tsx
import { useEffect, useState } from "react";
import {fetchProducts} from './api'
import { type Product } from "./types";

export default function ShoppingCart() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  function addProductToCart(product: Product) {
    setCart(prev => {
      return [...prev, product];
    })
  }

  function removeProductFromCart(index: number) {
    setCart(prev => {
      const shallowCopy = [...prev]
      shallowCopy.splice(index, 1)
      return shallowCopy;
    })
  }

  useEffect(() => {
    const _fetchProducts = async () => {
      try {
        const response = await fetchProducts();
        setProducts(response);
      } catch (error) {
        console.error(error)
      }
    }

    _fetchProducts()
  }, [])


  return <div>
    <div>
      <p>Products</p>
    <ul>
    {products.map((product: Product) => {
      return <li key={product.id}>
        {product.name} and {product.price} 
        <button onClick={() => addProductToCart(product)}>Add to cart</button>
      </li>
    })}
</ul>
    </div>
    <div>
      <p>cart</p>
      <ul>
{cart.map((cartItem, index) => {
        return <li key={cartItem.id + index}>
          {cartItem.name} and {cartItem.price}
          <button onClick={() => removeProductFromCart(index)}>Remove from cart</button>
        </li>
      })}
      </ul>
      total: ${cart.reduce((acc, curr) => {
        return acc += curr.price
      }, 0)}
    </div>
  </div>;
}
```
