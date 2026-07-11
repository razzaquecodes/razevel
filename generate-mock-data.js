const fs = require('fs');
const path = require('path');

const menCategories = [
  "Wedding Suits", "Luxury Suits", "Business Suits", "Three Piece Suits", "Double Breasted Suits", 
  "Italian Tailoring", "British Tailoring", "Black Tie", "Tuxedos", "Bandhgala", "Jodhpuri", "Sherwani", 
  "Prince Coat", "Achkan", "Indo Western", "Blazers", "Luxury Shirts", "Mandarin Shirts", "Oxford Shirts", 
  "Formal Shirts", "Luxury Trousers", "Waistcoats", "Kurta Pajama", "Pathani Suits", "Nehru Jackets", 
  "Linen Collection", "Winter Collection", "Luxury Knitwear", "Luxury Shoes", "Belts", "Wallets", 
  "Pocket Squares", "Luxury Ties", "Bow Ties", "Cufflinks", "Luxury Watches", "Luxury Perfumes", "Gift Cards"
];

const womenCategories = [
  "Luxury Bridal Lehenga", "Reception Lehenga", "Designer Lehenga", "Pakistani Suits", "Luxury Lawn Collection", 
  "Luxury Chiffon Collection", "Luxury Organza Collection", "Luxury Cotton Collection", "Luxury Silk Collection", 
  "Luxury Velvet Collection", "Luxury Eid Collection", "Luxury Festive Collection", "Designer Sarees", 
  "Silk Sarees", "Banarasi Sarees", "Anarkali", "Sharara", "Gharara", "Luxury Gowns", "Reception Gowns", 
  "Luxury Kurtis", "Luxury Co-ord Sets", "Luxury Dupattas", "Designer Blouses", "Luxury Jewellery", 
  "Luxury Potli Bags", "Luxury Clutches", "Luxury Heels", "Luxury Shawls"
];

const images = [
  '/images/hero.png', '/images/bespoke.png', '/images/atelier.png', 
  '/images/craftsmanship.png', '/images/journal.png', '/images/fabric.png'
];

let idCounter = 1;
const products = [];

function getRand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function generateProducts(categories, gender) {
  categories.forEach(cat => {
    // Generate 1-2 products per category
    const num = Math.floor(Math.random() * 2) + 1;
    for(let i=0; i<num; i++) {
      const nameAdjectives = ['Signature', 'Heritage', 'Midnight', 'Crimson', 'Emerald', 'Imperial', 'Bespoke', 'Timeless'];
      products.push({
        id: `${gender}-${idCounter++}`,
        name: `${getRand(nameAdjectives)} ${cat} ${i === 0 ? '' : 'Edition'}`,
        price: Math.floor(Math.random() * 200000) + 15000,
        category: cat,
        gender: gender,
        image: getRand(images),
        gallery: [getRand(images), getRand(images), getRand(images)],
        isBespoke: Math.random() > 0.6,
        badge: Math.random() > 0.8 ? getRand(['New Arrival', 'Best Seller', 'Limited Edition']) : undefined,
        colors: [getRand(['#080808', '#FAFAFA', '#C9A84C', '#8C857A', '#33312E']), getRand(['#E63946', '#2A9D8F', '#1D3557'])],
        fabric: getRand(['Banarasi Silk', 'Italian Wool', 'Velvet', 'Linen', 'Organza', 'Chiffon', 'Egyptian Cotton']),
        embroidery: getRand(['Zardozi', 'Aari', 'Gota Patti', 'Threadwork', 'None']),
        occasion: getRand(['Wedding', 'Reception', 'Business', 'Black Tie', 'Festive', 'Casual']),
        deliveryTimeline: getRand(['3-4 Weeks', '4-6 Weeks', 'Ready to Ship']),
        desc: 'An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.',
        rating: parseFloat((Math.random() * (5 - 4.2) + 4.2).toFixed(1)),
        reviewsCount: Math.floor(Math.random() * 150) + 5,
        sizes: ['S', 'M', 'L', 'XL', 'Made to Measure'],
        completeTheLookIds: [] // Filled later
      });
    }
  });
}

generateProducts(menCategories, 'men');
generateProducts(womenCategories, 'women');

products.forEach(p => {
  const others = products.filter(o => o.gender === p.gender && o.id !== p.id);
  p.completeTheLookIds = [getRand(others).id, getRand(others).id, getRand(others).id];
});

const fileContent = `export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  gender: string;
  image: string;
  gallery: string[];
  isBespoke?: boolean;
  badge?: 'New Arrival' | 'Best Seller' | 'Limited Edition';
  colors: string[];
  fabric: string;
  embroidery: string;
  occasion: string;
  deliveryTimeline: string;
  desc: string;
  rating: number;
  reviewsCount: number;
  sizes: string[];
  completeTheLookIds: string[];
};

export const MOCK_PRODUCTS: Product[] = ${JSON.stringify(products, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'website', 'src', 'lib', 'mockData.ts'), fileContent);
console.log('Successfully generated mock data with', products.length, 'products.');
