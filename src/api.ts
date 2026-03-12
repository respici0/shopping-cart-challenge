import { Product } from './types';

const mockProducts: Product[] = [
  { id: '1', name: 'Mechanical Keyboard', price: 129.99 },
  { id: '2', name: 'Wireless Mouse', price: 49.99 },
  { id: '3', name: 'USB-C Hub', price: 39.99 },
  { id: '4', name: '27" Monitor', price: 299.99 },
  { id: '5', name: 'Webcam HD', price: 79.99 },
  { id: '6', name: 'Desk Lamp', price: 24.99 },
];

export async function fetchProducts(): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockProducts), 800);
  });
}
