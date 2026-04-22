import { useEffect, useState } from "react";
import {fetchProducts} from './api'
import { type Product } from "./types";

/*
 * Shopping Cart Challenge
 *
 * Build a shopping cart UI that meets the following requirements:
 *
 * 1. Load the list of available products from the provided API utility.
 *
 * 2. Display all available products, showing each product's name and price.
 *
 * 3. Provide a way for the user to add products to the cart.
 *
 * 4. Display the current cart contents, including each item's name, price
 *
 * 5. Display the total cost of all items in the cart.
 */

export default function ShoppingCart() {

  useEffect(() => {
    // TODO: fetch products using fetchProducts() and store in state
  }, [])

  return <div>
    {/* TODO: render product list with an "Add to cart" button for each */}
    {/* TODO: render cart contents */}
    {/* TODO: render cart total */}
  </div>;
}
