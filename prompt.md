Generate a React coding challenge in which a candidate needs to code a simple shopping cart UI. The UI needs to list all the items available for a user to add to a cart. These items need to be added to a shopping cart which contents are also displayed somewhere on the UI. The total cost of the items in the shopping cart needs to also be displayed.

Below is the expected type of the products a user can add to the cart. We will add an async method that emulates an API call to retrieve an array of mock products. The candidate should import this method from another file into their component and call it to get the list of products.

Types:

```typescript
interface Product {
  id: string;
  name: string;
  price: number;
}
```
