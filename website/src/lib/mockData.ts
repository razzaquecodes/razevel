export type Product = {
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

export const MOCK_PRODUCTS: Product[] = [
  {
    "id": "men-1",
    "name": "Heritage Wedding Suits ",
    "price": 142262,
    "category": "Wedding Suits",
    "gender": "men",
    "image": "/images/hero.png",
    "gallery": [
      "/images/journal.png",
      "/images/journal.png",
      "/images/hero.png"
    ],
    "isBespoke": false,
    "colors": [
      "#8C857A",
      "#E63946"
    ],
    "fabric": "Banarasi Silk",
    "embroidery": "Zardozi",
    "occasion": "Black Tie",
    "deliveryTimeline": "4-6 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.3,
    "reviewsCount": 152,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-17",
      "men-5",
      "men-48"
    ]
  },
  {
    "id": "men-2",
    "name": "Timeless Wedding Suits Edition",
    "price": 79723,
    "category": "Wedding Suits",
    "gender": "men",
    "image": "/images/fabric.png",
    "gallery": [
      "/images/atelier.png",
      "/images/craftsmanship.png",
      "/images/fabric.png"
    ],
    "isBespoke": true,
    "badge": "New Arrival",
    "colors": [
      "#C9A84C",
      "#E63946"
    ],
    "fabric": "Egyptian Cotton",
    "embroidery": "None",
    "occasion": "Reception",
    "deliveryTimeline": "Ready to Ship",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.6,
    "reviewsCount": 20,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-43",
      "men-51",
      "men-52"
    ]
  },
  {
    "id": "men-3",
    "name": "Heritage Luxury Suits ",
    "price": 38458,
    "category": "Luxury Suits",
    "gender": "men",
    "image": "/images/fabric.png",
    "gallery": [
      "/images/craftsmanship.png",
      "/images/craftsmanship.png",
      "/images/fabric.png"
    ],
    "isBespoke": true,
    "badge": "Limited Edition",
    "colors": [
      "#8C857A",
      "#E63946"
    ],
    "fabric": "Egyptian Cotton",
    "embroidery": "Threadwork",
    "occasion": "Wedding",
    "deliveryTimeline": "4-6 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.2,
    "reviewsCount": 68,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-49",
      "men-41",
      "men-47"
    ]
  },
  {
    "id": "men-4",
    "name": "Crimson Luxury Suits Edition",
    "price": 55908,
    "category": "Luxury Suits",
    "gender": "men",
    "image": "/images/craftsmanship.png",
    "gallery": [
      "/images/journal.png",
      "/images/fabric.png",
      "/images/craftsmanship.png"
    ],
    "isBespoke": false,
    "colors": [
      "#33312E",
      "#2A9D8F"
    ],
    "fabric": "Banarasi Silk",
    "embroidery": "Zardozi",
    "occasion": "Black Tie",
    "deliveryTimeline": "4-6 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.9,
    "reviewsCount": 146,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-29",
      "men-50",
      "men-45"
    ]
  },
  {
    "id": "men-5",
    "name": "Imperial Business Suits ",
    "price": 170970,
    "category": "Business Suits",
    "gender": "men",
    "image": "/images/bespoke.png",
    "gallery": [
      "/images/journal.png",
      "/images/bespoke.png",
      "/images/hero.png"
    ],
    "isBespoke": true,
    "colors": [
      "#8C857A",
      "#1D3557"
    ],
    "fabric": "Linen",
    "embroidery": "Threadwork",
    "occasion": "Casual",
    "deliveryTimeline": "Ready to Ship",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.2,
    "reviewsCount": 73,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-10",
      "men-42",
      "men-15"
    ]
  },
  {
    "id": "men-6",
    "name": "Imperial Three Piece Suits ",
    "price": 178747,
    "category": "Three Piece Suits",
    "gender": "men",
    "image": "/images/bespoke.png",
    "gallery": [
      "/images/hero.png",
      "/images/journal.png",
      "/images/atelier.png"
    ],
    "isBespoke": true,
    "colors": [
      "#FAFAFA",
      "#E63946"
    ],
    "fabric": "Chiffon",
    "embroidery": "Zardozi",
    "occasion": "Festive",
    "deliveryTimeline": "4-6 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.6,
    "reviewsCount": 6,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-2",
      "men-26",
      "men-16"
    ]
  },
  {
    "id": "men-7",
    "name": "Signature Double Breasted Suits ",
    "price": 50206,
    "category": "Double Breasted Suits",
    "gender": "men",
    "image": "/images/journal.png",
    "gallery": [
      "/images/fabric.png",
      "/images/bespoke.png",
      "/images/fabric.png"
    ],
    "isBespoke": true,
    "colors": [
      "#FAFAFA",
      "#2A9D8F"
    ],
    "fabric": "Velvet",
    "embroidery": "Gota Patti",
    "occasion": "Festive",
    "deliveryTimeline": "3-4 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.5,
    "reviewsCount": 132,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-34",
      "men-14",
      "men-4"
    ]
  },
  {
    "id": "men-8",
    "name": "Imperial Double Breasted Suits Edition",
    "price": 159369,
    "category": "Double Breasted Suits",
    "gender": "men",
    "image": "/images/bespoke.png",
    "gallery": [
      "/images/fabric.png",
      "/images/craftsmanship.png",
      "/images/fabric.png"
    ],
    "isBespoke": true,
    "badge": "Best Seller",
    "colors": [
      "#FAFAFA",
      "#E63946"
    ],
    "fabric": "Linen",
    "embroidery": "Aari",
    "occasion": "Business",
    "deliveryTimeline": "Ready to Ship",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.9,
    "reviewsCount": 28,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-35",
      "men-32",
      "men-9"
    ]
  },
  {
    "id": "men-9",
    "name": "Bespoke Italian Tailoring ",
    "price": 91661,
    "category": "Italian Tailoring",
    "gender": "men",
    "image": "/images/bespoke.png",
    "gallery": [
      "/images/hero.png",
      "/images/hero.png",
      "/images/craftsmanship.png"
    ],
    "isBespoke": true,
    "colors": [
      "#33312E",
      "#1D3557"
    ],
    "fabric": "Egyptian Cotton",
    "embroidery": "Aari",
    "occasion": "Casual",
    "deliveryTimeline": "3-4 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.9,
    "reviewsCount": 92,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-47",
      "men-11",
      "men-35"
    ]
  },
  {
    "id": "men-10",
    "name": "Midnight Italian Tailoring Edition",
    "price": 111928,
    "category": "Italian Tailoring",
    "gender": "men",
    "image": "/images/atelier.png",
    "gallery": [
      "/images/fabric.png",
      "/images/fabric.png",
      "/images/fabric.png"
    ],
    "isBespoke": true,
    "colors": [
      "#8C857A",
      "#2A9D8F"
    ],
    "fabric": "Linen",
    "embroidery": "Gota Patti",
    "occasion": "Reception",
    "deliveryTimeline": "4-6 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.5,
    "reviewsCount": 97,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-42",
      "men-1",
      "men-2"
    ]
  },
  {
    "id": "men-11",
    "name": "Emerald British Tailoring ",
    "price": 47539,
    "category": "British Tailoring",
    "gender": "men",
    "image": "/images/journal.png",
    "gallery": [
      "/images/fabric.png",
      "/images/journal.png",
      "/images/fabric.png"
    ],
    "isBespoke": false,
    "colors": [
      "#33312E",
      "#E63946"
    ],
    "fabric": "Banarasi Silk",
    "embroidery": "Threadwork",
    "occasion": "Wedding",
    "deliveryTimeline": "Ready to Ship",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.3,
    "reviewsCount": 79,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-44",
      "men-8",
      "men-19"
    ]
  },
  {
    "id": "men-12",
    "name": "Crimson British Tailoring Edition",
    "price": 161330,
    "category": "British Tailoring",
    "gender": "men",
    "image": "/images/craftsmanship.png",
    "gallery": [
      "/images/journal.png",
      "/images/bespoke.png",
      "/images/bespoke.png"
    ],
    "isBespoke": false,
    "colors": [
      "#080808",
      "#1D3557"
    ],
    "fabric": "Italian Wool",
    "embroidery": "Threadwork",
    "occasion": "Reception",
    "deliveryTimeline": "3-4 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.5,
    "reviewsCount": 116,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-50",
      "men-13",
      "men-50"
    ]
  },
  {
    "id": "men-13",
    "name": "Heritage Black Tie ",
    "price": 63216,
    "category": "Black Tie",
    "gender": "men",
    "image": "/images/journal.png",
    "gallery": [
      "/images/journal.png",
      "/images/atelier.png",
      "/images/fabric.png"
    ],
    "isBespoke": false,
    "badge": "Limited Edition",
    "colors": [
      "#8C857A",
      "#1D3557"
    ],
    "fabric": "Egyptian Cotton",
    "embroidery": "Gota Patti",
    "occasion": "Business",
    "deliveryTimeline": "3-4 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.9,
    "reviewsCount": 18,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-33",
      "men-7",
      "men-26"
    ]
  },
  {
    "id": "men-14",
    "name": "Signature Black Tie Edition",
    "price": 175483,
    "category": "Black Tie",
    "gender": "men",
    "image": "/images/fabric.png",
    "gallery": [
      "/images/journal.png",
      "/images/hero.png",
      "/images/hero.png"
    ],
    "isBespoke": true,
    "badge": "New Arrival",
    "colors": [
      "#080808",
      "#2A9D8F"
    ],
    "fabric": "Organza",
    "embroidery": "Gota Patti",
    "occasion": "Wedding",
    "deliveryTimeline": "4-6 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.9,
    "reviewsCount": 7,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-41",
      "men-5",
      "men-38"
    ]
  },
  {
    "id": "men-15",
    "name": "Imperial Tuxedos ",
    "price": 36965,
    "category": "Tuxedos",
    "gender": "men",
    "image": "/images/bespoke.png",
    "gallery": [
      "/images/hero.png",
      "/images/craftsmanship.png",
      "/images/journal.png"
    ],
    "isBespoke": false,
    "colors": [
      "#C9A84C",
      "#2A9D8F"
    ],
    "fabric": "Banarasi Silk",
    "embroidery": "Threadwork",
    "occasion": "Business",
    "deliveryTimeline": "3-4 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.2,
    "reviewsCount": 76,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-17",
      "men-52",
      "men-9"
    ]
  },
  {
    "id": "men-16",
    "name": "Crimson Tuxedos Edition",
    "price": 214367,
    "category": "Tuxedos",
    "gender": "men",
    "image": "/images/hero.png",
    "gallery": [
      "/images/fabric.png",
      "/images/fabric.png",
      "/images/journal.png"
    ],
    "isBespoke": false,
    "badge": "Limited Edition",
    "colors": [
      "#C9A84C",
      "#2A9D8F"
    ],
    "fabric": "Italian Wool",
    "embroidery": "Gota Patti",
    "occasion": "Wedding",
    "deliveryTimeline": "3-4 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.8,
    "reviewsCount": 118,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-2",
      "men-24",
      "men-28"
    ]
  },
  {
    "id": "men-17",
    "name": "Midnight Bandhgala ",
    "price": 137523,
    "category": "Bandhgala",
    "gender": "men",
    "image": "/images/bespoke.png",
    "gallery": [
      "/images/hero.png",
      "/images/craftsmanship.png",
      "/images/fabric.png"
    ],
    "isBespoke": false,
    "colors": [
      "#C9A84C",
      "#1D3557"
    ],
    "fabric": "Velvet",
    "embroidery": "Aari",
    "occasion": "Black Tie",
    "deliveryTimeline": "3-4 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.9,
    "reviewsCount": 105,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-30",
      "men-2",
      "men-24"
    ]
  },
  {
    "id": "men-18",
    "name": "Crimson Bandhgala Edition",
    "price": 140491,
    "category": "Bandhgala",
    "gender": "men",
    "image": "/images/craftsmanship.png",
    "gallery": [
      "/images/journal.png",
      "/images/bespoke.png",
      "/images/atelier.png"
    ],
    "isBespoke": true,
    "badge": "New Arrival",
    "colors": [
      "#FAFAFA",
      "#E63946"
    ],
    "fabric": "Linen",
    "embroidery": "Gota Patti",
    "occasion": "Black Tie",
    "deliveryTimeline": "3-4 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.8,
    "reviewsCount": 92,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-15",
      "men-38",
      "men-29"
    ]
  },
  {
    "id": "men-19",
    "name": "Crimson Jodhpuri ",
    "price": 151764,
    "category": "Jodhpuri",
    "gender": "men",
    "image": "/images/hero.png",
    "gallery": [
      "/images/craftsmanship.png",
      "/images/journal.png",
      "/images/craftsmanship.png"
    ],
    "isBespoke": false,
    "colors": [
      "#C9A84C",
      "#1D3557"
    ],
    "fabric": "Linen",
    "embroidery": "Gota Patti",
    "occasion": "Black Tie",
    "deliveryTimeline": "Ready to Ship",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.6,
    "reviewsCount": 10,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-33",
      "men-30",
      "men-14"
    ]
  },
  {
    "id": "men-20",
    "name": "Signature Sherwani ",
    "price": 183582,
    "category": "Sherwani",
    "gender": "men",
    "image": "/images/craftsmanship.png",
    "gallery": [
      "/images/craftsmanship.png",
      "/images/journal.png",
      "/images/journal.png"
    ],
    "isBespoke": false,
    "badge": "Best Seller",
    "colors": [
      "#33312E",
      "#1D3557"
    ],
    "fabric": "Chiffon",
    "embroidery": "None",
    "occasion": "Business",
    "deliveryTimeline": "3-4 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.7,
    "reviewsCount": 142,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-28",
      "men-24",
      "men-44"
    ]
  },
  {
    "id": "men-21",
    "name": "Signature Prince Coat ",
    "price": 205330,
    "category": "Prince Coat",
    "gender": "men",
    "image": "/images/hero.png",
    "gallery": [
      "/images/journal.png",
      "/images/fabric.png",
      "/images/fabric.png"
    ],
    "isBespoke": false,
    "colors": [
      "#C9A84C",
      "#E63946"
    ],
    "fabric": "Velvet",
    "embroidery": "Threadwork",
    "occasion": "Business",
    "deliveryTimeline": "Ready to Ship",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.7,
    "reviewsCount": 31,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-16",
      "men-38",
      "men-3"
    ]
  },
  {
    "id": "men-22",
    "name": "Heritage Achkan ",
    "price": 172981,
    "category": "Achkan",
    "gender": "men",
    "image": "/images/journal.png",
    "gallery": [
      "/images/atelier.png",
      "/images/hero.png",
      "/images/fabric.png"
    ],
    "isBespoke": false,
    "colors": [
      "#33312E",
      "#2A9D8F"
    ],
    "fabric": "Egyptian Cotton",
    "embroidery": "Gota Patti",
    "occasion": "Black Tie",
    "deliveryTimeline": "3-4 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.2,
    "reviewsCount": 123,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-15",
      "men-24",
      "men-41"
    ]
  },
  {
    "id": "men-23",
    "name": "Emerald Indo Western ",
    "price": 194074,
    "category": "Indo Western",
    "gender": "men",
    "image": "/images/bespoke.png",
    "gallery": [
      "/images/bespoke.png",
      "/images/fabric.png",
      "/images/fabric.png"
    ],
    "isBespoke": true,
    "colors": [
      "#33312E",
      "#E63946"
    ],
    "fabric": "Velvet",
    "embroidery": "Threadwork",
    "occasion": "Wedding",
    "deliveryTimeline": "Ready to Ship",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.8,
    "reviewsCount": 130,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-8",
      "men-40",
      "men-51"
    ]
  },
  {
    "id": "men-24",
    "name": "Emerald Blazers ",
    "price": 93795,
    "category": "Blazers",
    "gender": "men",
    "image": "/images/bespoke.png",
    "gallery": [
      "/images/craftsmanship.png",
      "/images/atelier.png",
      "/images/bespoke.png"
    ],
    "isBespoke": false,
    "badge": "Limited Edition",
    "colors": [
      "#FAFAFA",
      "#1D3557"
    ],
    "fabric": "Chiffon",
    "embroidery": "Gota Patti",
    "occasion": "Casual",
    "deliveryTimeline": "3-4 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.6,
    "reviewsCount": 15,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-33",
      "men-7",
      "men-42"
    ]
  },
  {
    "id": "men-25",
    "name": "Emerald Luxury Shirts ",
    "price": 107561,
    "category": "Luxury Shirts",
    "gender": "men",
    "image": "/images/bespoke.png",
    "gallery": [
      "/images/bespoke.png",
      "/images/craftsmanship.png",
      "/images/fabric.png"
    ],
    "isBespoke": false,
    "colors": [
      "#C9A84C",
      "#1D3557"
    ],
    "fabric": "Egyptian Cotton",
    "embroidery": "Threadwork",
    "occasion": "Business",
    "deliveryTimeline": "4-6 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.4,
    "reviewsCount": 28,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-16",
      "men-33",
      "men-26"
    ]
  },
  {
    "id": "men-26",
    "name": "Bespoke Mandarin Shirts ",
    "price": 154069,
    "category": "Mandarin Shirts",
    "gender": "men",
    "image": "/images/journal.png",
    "gallery": [
      "/images/bespoke.png",
      "/images/craftsmanship.png",
      "/images/hero.png"
    ],
    "isBespoke": false,
    "badge": "Limited Edition",
    "colors": [
      "#8C857A",
      "#1D3557"
    ],
    "fabric": "Linen",
    "embroidery": "Threadwork",
    "occasion": "Business",
    "deliveryTimeline": "4-6 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.7,
    "reviewsCount": 78,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-9",
      "men-11",
      "men-45"
    ]
  },
  {
    "id": "men-27",
    "name": "Emerald Oxford Shirts ",
    "price": 191699,
    "category": "Oxford Shirts",
    "gender": "men",
    "image": "/images/fabric.png",
    "gallery": [
      "/images/hero.png",
      "/images/journal.png",
      "/images/fabric.png"
    ],
    "isBespoke": false,
    "colors": [
      "#080808",
      "#2A9D8F"
    ],
    "fabric": "Linen",
    "embroidery": "None",
    "occasion": "Casual",
    "deliveryTimeline": "3-4 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.7,
    "reviewsCount": 8,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-2",
      "men-30",
      "men-15"
    ]
  },
  {
    "id": "men-28",
    "name": "Timeless Oxford Shirts Edition",
    "price": 121102,
    "category": "Oxford Shirts",
    "gender": "men",
    "image": "/images/fabric.png",
    "gallery": [
      "/images/craftsmanship.png",
      "/images/bespoke.png",
      "/images/bespoke.png"
    ],
    "isBespoke": true,
    "colors": [
      "#FAFAFA",
      "#1D3557"
    ],
    "fabric": "Banarasi Silk",
    "embroidery": "Zardozi",
    "occasion": "Wedding",
    "deliveryTimeline": "3-4 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.8,
    "reviewsCount": 6,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-43",
      "men-45",
      "men-7"
    ]
  },
  {
    "id": "men-29",
    "name": "Crimson Formal Shirts ",
    "price": 62053,
    "category": "Formal Shirts",
    "gender": "men",
    "image": "/images/journal.png",
    "gallery": [
      "/images/journal.png",
      "/images/journal.png",
      "/images/fabric.png"
    ],
    "isBespoke": false,
    "colors": [
      "#C9A84C",
      "#1D3557"
    ],
    "fabric": "Chiffon",
    "embroidery": "Gota Patti",
    "occasion": "Reception",
    "deliveryTimeline": "Ready to Ship",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.3,
    "reviewsCount": 120,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-42",
      "men-31",
      "men-13"
    ]
  },
  {
    "id": "men-30",
    "name": "Emerald Formal Shirts Edition",
    "price": 151256,
    "category": "Formal Shirts",
    "gender": "men",
    "image": "/images/craftsmanship.png",
    "gallery": [
      "/images/atelier.png",
      "/images/craftsmanship.png",
      "/images/atelier.png"
    ],
    "isBespoke": false,
    "colors": [
      "#C9A84C",
      "#1D3557"
    ],
    "fabric": "Chiffon",
    "embroidery": "Aari",
    "occasion": "Reception",
    "deliveryTimeline": "3-4 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.9,
    "reviewsCount": 39,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-9",
      "men-23",
      "men-42"
    ]
  },
  {
    "id": "men-31",
    "name": "Heritage Luxury Trousers ",
    "price": 73795,
    "category": "Luxury Trousers",
    "gender": "men",
    "image": "/images/hero.png",
    "gallery": [
      "/images/hero.png",
      "/images/atelier.png",
      "/images/journal.png"
    ],
    "isBespoke": false,
    "colors": [
      "#33312E",
      "#2A9D8F"
    ],
    "fabric": "Organza",
    "embroidery": "None",
    "occasion": "Casual",
    "deliveryTimeline": "3-4 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 5,
    "reviewsCount": 74,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-1",
      "men-2",
      "men-17"
    ]
  },
  {
    "id": "men-32",
    "name": "Bespoke Waistcoats ",
    "price": 177779,
    "category": "Waistcoats",
    "gender": "men",
    "image": "/images/hero.png",
    "gallery": [
      "/images/hero.png",
      "/images/atelier.png",
      "/images/craftsmanship.png"
    ],
    "isBespoke": true,
    "colors": [
      "#C9A84C",
      "#E63946"
    ],
    "fabric": "Italian Wool",
    "embroidery": "Gota Patti",
    "occasion": "Festive",
    "deliveryTimeline": "3-4 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.5,
    "reviewsCount": 122,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-47",
      "men-41",
      "men-49"
    ]
  },
  {
    "id": "men-33",
    "name": "Bespoke Kurta Pajama ",
    "price": 94403,
    "category": "Kurta Pajama",
    "gender": "men",
    "image": "/images/journal.png",
    "gallery": [
      "/images/atelier.png",
      "/images/craftsmanship.png",
      "/images/hero.png"
    ],
    "isBespoke": false,
    "colors": [
      "#080808",
      "#2A9D8F"
    ],
    "fabric": "Banarasi Silk",
    "embroidery": "Gota Patti",
    "occasion": "Black Tie",
    "deliveryTimeline": "Ready to Ship",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.8,
    "reviewsCount": 62,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-45",
      "men-34",
      "men-28"
    ]
  },
  {
    "id": "men-34",
    "name": "Midnight Pathani Suits ",
    "price": 176180,
    "category": "Pathani Suits",
    "gender": "men",
    "image": "/images/hero.png",
    "gallery": [
      "/images/bespoke.png",
      "/images/atelier.png",
      "/images/atelier.png"
    ],
    "isBespoke": false,
    "badge": "New Arrival",
    "colors": [
      "#8C857A",
      "#2A9D8F"
    ],
    "fabric": "Linen",
    "embroidery": "Aari",
    "occasion": "Business",
    "deliveryTimeline": "4-6 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 5,
    "reviewsCount": 65,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-48",
      "men-15",
      "men-11"
    ]
  },
  {
    "id": "men-35",
    "name": "Timeless Nehru Jackets ",
    "price": 84007,
    "category": "Nehru Jackets",
    "gender": "men",
    "image": "/images/journal.png",
    "gallery": [
      "/images/craftsmanship.png",
      "/images/craftsmanship.png",
      "/images/journal.png"
    ],
    "isBespoke": false,
    "colors": [
      "#C9A84C",
      "#1D3557"
    ],
    "fabric": "Organza",
    "embroidery": "Aari",
    "occasion": "Casual",
    "deliveryTimeline": "4-6 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.4,
    "reviewsCount": 20,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-29",
      "men-38",
      "men-29"
    ]
  },
  {
    "id": "men-36",
    "name": "Emerald Linen Collection ",
    "price": 148284,
    "category": "Linen Collection",
    "gender": "men",
    "image": "/images/hero.png",
    "gallery": [
      "/images/atelier.png",
      "/images/atelier.png",
      "/images/hero.png"
    ],
    "isBespoke": false,
    "colors": [
      "#FAFAFA",
      "#E63946"
    ],
    "fabric": "Organza",
    "embroidery": "Aari",
    "occasion": "Black Tie",
    "deliveryTimeline": "4-6 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.9,
    "reviewsCount": 140,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-22",
      "men-33",
      "men-16"
    ]
  },
  {
    "id": "men-37",
    "name": "Emerald Linen Collection Edition",
    "price": 173229,
    "category": "Linen Collection",
    "gender": "men",
    "image": "/images/journal.png",
    "gallery": [
      "/images/journal.png",
      "/images/bespoke.png",
      "/images/bespoke.png"
    ],
    "isBespoke": true,
    "colors": [
      "#C9A84C",
      "#2A9D8F"
    ],
    "fabric": "Linen",
    "embroidery": "Aari",
    "occasion": "Wedding",
    "deliveryTimeline": "4-6 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.4,
    "reviewsCount": 11,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-9",
      "men-1",
      "men-50"
    ]
  },
  {
    "id": "men-38",
    "name": "Signature Winter Collection ",
    "price": 202362,
    "category": "Winter Collection",
    "gender": "men",
    "image": "/images/atelier.png",
    "gallery": [
      "/images/atelier.png",
      "/images/bespoke.png",
      "/images/bespoke.png"
    ],
    "isBespoke": false,
    "colors": [
      "#FAFAFA",
      "#1D3557"
    ],
    "fabric": "Italian Wool",
    "embroidery": "Threadwork",
    "occasion": "Casual",
    "deliveryTimeline": "3-4 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.3,
    "reviewsCount": 66,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-21",
      "men-46",
      "men-16"
    ]
  },
  {
    "id": "men-39",
    "name": "Timeless Luxury Knitwear ",
    "price": 92463,
    "category": "Luxury Knitwear",
    "gender": "men",
    "image": "/images/journal.png",
    "gallery": [
      "/images/bespoke.png",
      "/images/bespoke.png",
      "/images/journal.png"
    ],
    "isBespoke": true,
    "colors": [
      "#C9A84C",
      "#E63946"
    ],
    "fabric": "Organza",
    "embroidery": "Zardozi",
    "occasion": "Black Tie",
    "deliveryTimeline": "3-4 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.3,
    "reviewsCount": 16,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-4",
      "men-33",
      "men-19"
    ]
  },
  {
    "id": "men-40",
    "name": "Crimson Luxury Knitwear Edition",
    "price": 85547,
    "category": "Luxury Knitwear",
    "gender": "men",
    "image": "/images/atelier.png",
    "gallery": [
      "/images/bespoke.png",
      "/images/atelier.png",
      "/images/craftsmanship.png"
    ],
    "isBespoke": false,
    "badge": "New Arrival",
    "colors": [
      "#FAFAFA",
      "#E63946"
    ],
    "fabric": "Italian Wool",
    "embroidery": "Threadwork",
    "occasion": "Reception",
    "deliveryTimeline": "3-4 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.9,
    "reviewsCount": 83,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-9",
      "men-6",
      "men-7"
    ]
  },
  {
    "id": "men-41",
    "name": "Bespoke Luxury Shoes ",
    "price": 134759,
    "category": "Luxury Shoes",
    "gender": "men",
    "image": "/images/fabric.png",
    "gallery": [
      "/images/journal.png",
      "/images/bespoke.png",
      "/images/atelier.png"
    ],
    "isBespoke": true,
    "colors": [
      "#33312E",
      "#1D3557"
    ],
    "fabric": "Chiffon",
    "embroidery": "None",
    "occasion": "Wedding",
    "deliveryTimeline": "4-6 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.4,
    "reviewsCount": 114,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-19",
      "men-5",
      "men-18"
    ]
  },
  {
    "id": "men-42",
    "name": "Heritage Belts ",
    "price": 195735,
    "category": "Belts",
    "gender": "men",
    "image": "/images/bespoke.png",
    "gallery": [
      "/images/bespoke.png",
      "/images/bespoke.png",
      "/images/craftsmanship.png"
    ],
    "isBespoke": false,
    "badge": "Best Seller",
    "colors": [
      "#33312E",
      "#E63946"
    ],
    "fabric": "Italian Wool",
    "embroidery": "None",
    "occasion": "Wedding",
    "deliveryTimeline": "3-4 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 5,
    "reviewsCount": 23,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-50",
      "men-50",
      "men-5"
    ]
  },
  {
    "id": "men-43",
    "name": "Signature Wallets ",
    "price": 193568,
    "category": "Wallets",
    "gender": "men",
    "image": "/images/journal.png",
    "gallery": [
      "/images/craftsmanship.png",
      "/images/bespoke.png",
      "/images/atelier.png"
    ],
    "isBespoke": false,
    "badge": "Best Seller",
    "colors": [
      "#FAFAFA",
      "#2A9D8F"
    ],
    "fabric": "Organza",
    "embroidery": "Gota Patti",
    "occasion": "Reception",
    "deliveryTimeline": "Ready to Ship",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.3,
    "reviewsCount": 143,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-15",
      "men-14",
      "men-22"
    ]
  },
  {
    "id": "men-44",
    "name": "Midnight Pocket Squares ",
    "price": 150257,
    "category": "Pocket Squares",
    "gender": "men",
    "image": "/images/journal.png",
    "gallery": [
      "/images/craftsmanship.png",
      "/images/craftsmanship.png",
      "/images/atelier.png"
    ],
    "isBespoke": false,
    "badge": "Best Seller",
    "colors": [
      "#33312E",
      "#2A9D8F"
    ],
    "fabric": "Organza",
    "embroidery": "Threadwork",
    "occasion": "Reception",
    "deliveryTimeline": "4-6 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.6,
    "reviewsCount": 39,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-4",
      "men-2",
      "men-12"
    ]
  },
  {
    "id": "men-45",
    "name": "Timeless Luxury Ties ",
    "price": 204923,
    "category": "Luxury Ties",
    "gender": "men",
    "image": "/images/craftsmanship.png",
    "gallery": [
      "/images/bespoke.png",
      "/images/atelier.png",
      "/images/journal.png"
    ],
    "isBespoke": false,
    "badge": "Limited Edition",
    "colors": [
      "#FAFAFA",
      "#1D3557"
    ],
    "fabric": "Velvet",
    "embroidery": "Zardozi",
    "occasion": "Business",
    "deliveryTimeline": "3-4 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.3,
    "reviewsCount": 144,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-28",
      "men-24",
      "men-35"
    ]
  },
  {
    "id": "men-46",
    "name": "Imperial Bow Ties ",
    "price": 55016,
    "category": "Bow Ties",
    "gender": "men",
    "image": "/images/bespoke.png",
    "gallery": [
      "/images/hero.png",
      "/images/journal.png",
      "/images/journal.png"
    ],
    "isBespoke": false,
    "colors": [
      "#FAFAFA",
      "#E63946"
    ],
    "fabric": "Egyptian Cotton",
    "embroidery": "Gota Patti",
    "occasion": "Black Tie",
    "deliveryTimeline": "3-4 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.5,
    "reviewsCount": 135,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-5",
      "men-27",
      "men-38"
    ]
  },
  {
    "id": "men-47",
    "name": "Heritage Cufflinks ",
    "price": 142161,
    "category": "Cufflinks",
    "gender": "men",
    "image": "/images/journal.png",
    "gallery": [
      "/images/fabric.png",
      "/images/fabric.png",
      "/images/fabric.png"
    ],
    "isBespoke": false,
    "colors": [
      "#080808",
      "#1D3557"
    ],
    "fabric": "Chiffon",
    "embroidery": "Zardozi",
    "occasion": "Black Tie",
    "deliveryTimeline": "3-4 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.9,
    "reviewsCount": 93,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-14",
      "men-44",
      "men-18"
    ]
  },
  {
    "id": "men-48",
    "name": "Crimson Luxury Watches ",
    "price": 190392,
    "category": "Luxury Watches",
    "gender": "men",
    "image": "/images/craftsmanship.png",
    "gallery": [
      "/images/hero.png",
      "/images/fabric.png",
      "/images/journal.png"
    ],
    "isBespoke": false,
    "colors": [
      "#C9A84C",
      "#2A9D8F"
    ],
    "fabric": "Egyptian Cotton",
    "embroidery": "Aari",
    "occasion": "Business",
    "deliveryTimeline": "Ready to Ship",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.9,
    "reviewsCount": 140,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-50",
      "men-28",
      "men-42"
    ]
  },
  {
    "id": "men-49",
    "name": "Midnight Luxury Watches Edition",
    "price": 155655,
    "category": "Luxury Watches",
    "gender": "men",
    "image": "/images/fabric.png",
    "gallery": [
      "/images/atelier.png",
      "/images/craftsmanship.png",
      "/images/fabric.png"
    ],
    "isBespoke": false,
    "colors": [
      "#080808",
      "#E63946"
    ],
    "fabric": "Velvet",
    "embroidery": "Zardozi",
    "occasion": "Business",
    "deliveryTimeline": "3-4 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.6,
    "reviewsCount": 113,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-1",
      "men-35",
      "men-27"
    ]
  },
  {
    "id": "men-50",
    "name": "Imperial Luxury Perfumes ",
    "price": 114653,
    "category": "Luxury Perfumes",
    "gender": "men",
    "image": "/images/craftsmanship.png",
    "gallery": [
      "/images/fabric.png",
      "/images/bespoke.png",
      "/images/fabric.png"
    ],
    "isBespoke": false,
    "colors": [
      "#8C857A",
      "#1D3557"
    ],
    "fabric": "Linen",
    "embroidery": "Zardozi",
    "occasion": "Wedding",
    "deliveryTimeline": "3-4 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.7,
    "reviewsCount": 70,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-41",
      "men-12",
      "men-19"
    ]
  },
  {
    "id": "men-51",
    "name": "Bespoke Luxury Perfumes Edition",
    "price": 145872,
    "category": "Luxury Perfumes",
    "gender": "men",
    "image": "/images/bespoke.png",
    "gallery": [
      "/images/atelier.png",
      "/images/fabric.png",
      "/images/hero.png"
    ],
    "isBespoke": false,
    "colors": [
      "#080808",
      "#2A9D8F"
    ],
    "fabric": "Linen",
    "embroidery": "None",
    "occasion": "Casual",
    "deliveryTimeline": "Ready to Ship",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.8,
    "reviewsCount": 83,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-21",
      "men-25",
      "men-38"
    ]
  },
  {
    "id": "men-52",
    "name": "Imperial Gift Cards ",
    "price": 190650,
    "category": "Gift Cards",
    "gender": "men",
    "image": "/images/craftsmanship.png",
    "gallery": [
      "/images/bespoke.png",
      "/images/fabric.png",
      "/images/bespoke.png"
    ],
    "isBespoke": false,
    "colors": [
      "#080808",
      "#1D3557"
    ],
    "fabric": "Organza",
    "embroidery": "Aari",
    "occasion": "Reception",
    "deliveryTimeline": "4-6 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.7,
    "reviewsCount": 71,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "men-41",
      "men-15",
      "men-14"
    ]
  },
  {
    "id": "women-53",
    "name": "Timeless Luxury Bridal Lehenga ",
    "price": 115370,
    "category": "Luxury Bridal Lehenga",
    "gender": "women",
    "image": "/images/bespoke.png",
    "gallery": [
      "/images/journal.png",
      "/images/fabric.png",
      "/images/journal.png"
    ],
    "isBespoke": true,
    "colors": [
      "#8C857A",
      "#2A9D8F"
    ],
    "fabric": "Banarasi Silk",
    "embroidery": "Threadwork",
    "occasion": "Reception",
    "deliveryTimeline": "Ready to Ship",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.6,
    "reviewsCount": 11,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-68",
      "women-78",
      "women-87"
    ]
  },
  {
    "id": "women-54",
    "name": "Heritage Luxury Bridal Lehenga Edition",
    "price": 207008,
    "category": "Luxury Bridal Lehenga",
    "gender": "women",
    "image": "/images/journal.png",
    "gallery": [
      "/images/craftsmanship.png",
      "/images/hero.png",
      "/images/atelier.png"
    ],
    "isBespoke": false,
    "colors": [
      "#C9A84C",
      "#1D3557"
    ],
    "fabric": "Organza",
    "embroidery": "Aari",
    "occasion": "Casual",
    "deliveryTimeline": "Ready to Ship",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.4,
    "reviewsCount": 119,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-81",
      "women-73",
      "women-77"
    ]
  },
  {
    "id": "women-55",
    "name": "Heritage Reception Lehenga ",
    "price": 35895,
    "category": "Reception Lehenga",
    "gender": "women",
    "image": "/images/atelier.png",
    "gallery": [
      "/images/journal.png",
      "/images/hero.png",
      "/images/journal.png"
    ],
    "isBespoke": true,
    "badge": "Best Seller",
    "colors": [
      "#C9A84C",
      "#1D3557"
    ],
    "fabric": "Linen",
    "embroidery": "Gota Patti",
    "occasion": "Wedding",
    "deliveryTimeline": "3-4 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.3,
    "reviewsCount": 42,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-87",
      "women-75",
      "women-73"
    ]
  },
  {
    "id": "women-56",
    "name": "Heritage Designer Lehenga ",
    "price": 193180,
    "category": "Designer Lehenga",
    "gender": "women",
    "image": "/images/fabric.png",
    "gallery": [
      "/images/atelier.png",
      "/images/atelier.png",
      "/images/craftsmanship.png"
    ],
    "isBespoke": false,
    "colors": [
      "#FAFAFA",
      "#1D3557"
    ],
    "fabric": "Egyptian Cotton",
    "embroidery": "None",
    "occasion": "Black Tie",
    "deliveryTimeline": "Ready to Ship",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.2,
    "reviewsCount": 53,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-59",
      "women-54",
      "women-59"
    ]
  },
  {
    "id": "women-57",
    "name": "Midnight Designer Lehenga Edition",
    "price": 133130,
    "category": "Designer Lehenga",
    "gender": "women",
    "image": "/images/craftsmanship.png",
    "gallery": [
      "/images/journal.png",
      "/images/atelier.png",
      "/images/atelier.png"
    ],
    "isBespoke": false,
    "colors": [
      "#33312E",
      "#2A9D8F"
    ],
    "fabric": "Italian Wool",
    "embroidery": "None",
    "occasion": "Business",
    "deliveryTimeline": "Ready to Ship",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.3,
    "reviewsCount": 5,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-79",
      "women-55",
      "women-63"
    ]
  },
  {
    "id": "women-58",
    "name": "Emerald Pakistani Suits ",
    "price": 68768,
    "category": "Pakistani Suits",
    "gender": "women",
    "image": "/images/hero.png",
    "gallery": [
      "/images/fabric.png",
      "/images/hero.png",
      "/images/atelier.png"
    ],
    "isBespoke": true,
    "colors": [
      "#C9A84C",
      "#1D3557"
    ],
    "fabric": "Chiffon",
    "embroidery": "Zardozi",
    "occasion": "Black Tie",
    "deliveryTimeline": "4-6 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.4,
    "reviewsCount": 101,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-66",
      "women-93",
      "women-65"
    ]
  },
  {
    "id": "women-59",
    "name": "Imperial Luxury Lawn Collection ",
    "price": 93680,
    "category": "Luxury Lawn Collection",
    "gender": "women",
    "image": "/images/bespoke.png",
    "gallery": [
      "/images/craftsmanship.png",
      "/images/atelier.png",
      "/images/craftsmanship.png"
    ],
    "isBespoke": true,
    "colors": [
      "#C9A84C",
      "#2A9D8F"
    ],
    "fabric": "Italian Wool",
    "embroidery": "Gota Patti",
    "occasion": "Black Tie",
    "deliveryTimeline": "Ready to Ship",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.4,
    "reviewsCount": 5,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-95",
      "women-69",
      "women-89"
    ]
  },
  {
    "id": "women-60",
    "name": "Heritage Luxury Chiffon Collection ",
    "price": 133462,
    "category": "Luxury Chiffon Collection",
    "gender": "women",
    "image": "/images/hero.png",
    "gallery": [
      "/images/atelier.png",
      "/images/craftsmanship.png",
      "/images/fabric.png"
    ],
    "isBespoke": false,
    "colors": [
      "#33312E",
      "#E63946"
    ],
    "fabric": "Italian Wool",
    "embroidery": "Zardozi",
    "occasion": "Festive",
    "deliveryTimeline": "4-6 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.4,
    "reviewsCount": 92,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-90",
      "women-70",
      "women-61"
    ]
  },
  {
    "id": "women-61",
    "name": "Bespoke Luxury Chiffon Collection Edition",
    "price": 108566,
    "category": "Luxury Chiffon Collection",
    "gender": "women",
    "image": "/images/bespoke.png",
    "gallery": [
      "/images/hero.png",
      "/images/atelier.png",
      "/images/craftsmanship.png"
    ],
    "isBespoke": true,
    "colors": [
      "#080808",
      "#E63946"
    ],
    "fabric": "Banarasi Silk",
    "embroidery": "Zardozi",
    "occasion": "Festive",
    "deliveryTimeline": "3-4 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.3,
    "reviewsCount": 113,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-54",
      "women-89",
      "women-64"
    ]
  },
  {
    "id": "women-62",
    "name": "Emerald Luxury Organza Collection ",
    "price": 150746,
    "category": "Luxury Organza Collection",
    "gender": "women",
    "image": "/images/fabric.png",
    "gallery": [
      "/images/fabric.png",
      "/images/craftsmanship.png",
      "/images/atelier.png"
    ],
    "isBespoke": true,
    "colors": [
      "#080808",
      "#E63946"
    ],
    "fabric": "Egyptian Cotton",
    "embroidery": "None",
    "occasion": "Black Tie",
    "deliveryTimeline": "3-4 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.8,
    "reviewsCount": 72,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-89",
      "women-84",
      "women-85"
    ]
  },
  {
    "id": "women-63",
    "name": "Emerald Luxury Organza Collection Edition",
    "price": 149534,
    "category": "Luxury Organza Collection",
    "gender": "women",
    "image": "/images/craftsmanship.png",
    "gallery": [
      "/images/atelier.png",
      "/images/atelier.png",
      "/images/bespoke.png"
    ],
    "isBespoke": false,
    "colors": [
      "#33312E",
      "#2A9D8F"
    ],
    "fabric": "Italian Wool",
    "embroidery": "Zardozi",
    "occasion": "Reception",
    "deliveryTimeline": "3-4 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.9,
    "reviewsCount": 44,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-53",
      "women-71",
      "women-72"
    ]
  },
  {
    "id": "women-64",
    "name": "Midnight Luxury Cotton Collection ",
    "price": 48127,
    "category": "Luxury Cotton Collection",
    "gender": "women",
    "image": "/images/atelier.png",
    "gallery": [
      "/images/atelier.png",
      "/images/hero.png",
      "/images/bespoke.png"
    ],
    "isBespoke": false,
    "colors": [
      "#080808",
      "#2A9D8F"
    ],
    "fabric": "Velvet",
    "embroidery": "None",
    "occasion": "Reception",
    "deliveryTimeline": "4-6 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.8,
    "reviewsCount": 27,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-88",
      "women-89",
      "women-56"
    ]
  },
  {
    "id": "women-65",
    "name": "Heritage Luxury Cotton Collection Edition",
    "price": 164869,
    "category": "Luxury Cotton Collection",
    "gender": "women",
    "image": "/images/craftsmanship.png",
    "gallery": [
      "/images/craftsmanship.png",
      "/images/atelier.png",
      "/images/hero.png"
    ],
    "isBespoke": false,
    "colors": [
      "#33312E",
      "#1D3557"
    ],
    "fabric": "Organza",
    "embroidery": "Gota Patti",
    "occasion": "Casual",
    "deliveryTimeline": "Ready to Ship",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.9,
    "reviewsCount": 55,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-85",
      "women-74",
      "women-79"
    ]
  },
  {
    "id": "women-66",
    "name": "Heritage Luxury Silk Collection ",
    "price": 210688,
    "category": "Luxury Silk Collection",
    "gender": "women",
    "image": "/images/atelier.png",
    "gallery": [
      "/images/craftsmanship.png",
      "/images/craftsmanship.png",
      "/images/hero.png"
    ],
    "isBespoke": true,
    "badge": "Best Seller",
    "colors": [
      "#FAFAFA",
      "#E63946"
    ],
    "fabric": "Egyptian Cotton",
    "embroidery": "Threadwork",
    "occasion": "Business",
    "deliveryTimeline": "Ready to Ship",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.6,
    "reviewsCount": 58,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-76",
      "women-94",
      "women-67"
    ]
  },
  {
    "id": "women-67",
    "name": "Crimson Luxury Velvet Collection ",
    "price": 128382,
    "category": "Luxury Velvet Collection",
    "gender": "women",
    "image": "/images/hero.png",
    "gallery": [
      "/images/fabric.png",
      "/images/bespoke.png",
      "/images/atelier.png"
    ],
    "isBespoke": false,
    "colors": [
      "#FAFAFA",
      "#2A9D8F"
    ],
    "fabric": "Velvet",
    "embroidery": "Zardozi",
    "occasion": "Festive",
    "deliveryTimeline": "3-4 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.8,
    "reviewsCount": 50,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-58",
      "women-75",
      "women-57"
    ]
  },
  {
    "id": "women-68",
    "name": "Timeless Luxury Velvet Collection Edition",
    "price": 42960,
    "category": "Luxury Velvet Collection",
    "gender": "women",
    "image": "/images/journal.png",
    "gallery": [
      "/images/atelier.png",
      "/images/hero.png",
      "/images/atelier.png"
    ],
    "isBespoke": true,
    "badge": "Limited Edition",
    "colors": [
      "#080808",
      "#E63946"
    ],
    "fabric": "Banarasi Silk",
    "embroidery": "Threadwork",
    "occasion": "Wedding",
    "deliveryTimeline": "4-6 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.9,
    "reviewsCount": 31,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-84",
      "women-65",
      "women-91"
    ]
  },
  {
    "id": "women-69",
    "name": "Imperial Luxury Eid Collection ",
    "price": 57224,
    "category": "Luxury Eid Collection",
    "gender": "women",
    "image": "/images/craftsmanship.png",
    "gallery": [
      "/images/fabric.png",
      "/images/fabric.png",
      "/images/fabric.png"
    ],
    "isBespoke": true,
    "colors": [
      "#8C857A",
      "#1D3557"
    ],
    "fabric": "Banarasi Silk",
    "embroidery": "Threadwork",
    "occasion": "Casual",
    "deliveryTimeline": "3-4 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.8,
    "reviewsCount": 18,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-82",
      "women-80",
      "women-82"
    ]
  },
  {
    "id": "women-70",
    "name": "Timeless Luxury Festive Collection ",
    "price": 66670,
    "category": "Luxury Festive Collection",
    "gender": "women",
    "image": "/images/hero.png",
    "gallery": [
      "/images/hero.png",
      "/images/craftsmanship.png",
      "/images/bespoke.png"
    ],
    "isBespoke": false,
    "colors": [
      "#FAFAFA",
      "#1D3557"
    ],
    "fabric": "Velvet",
    "embroidery": "None",
    "occasion": "Business",
    "deliveryTimeline": "3-4 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.7,
    "reviewsCount": 115,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-56",
      "women-82",
      "women-87"
    ]
  },
  {
    "id": "women-71",
    "name": "Crimson Designer Sarees ",
    "price": 209299,
    "category": "Designer Sarees",
    "gender": "women",
    "image": "/images/atelier.png",
    "gallery": [
      "/images/fabric.png",
      "/images/bespoke.png",
      "/images/atelier.png"
    ],
    "isBespoke": false,
    "badge": "Limited Edition",
    "colors": [
      "#FAFAFA",
      "#1D3557"
    ],
    "fabric": "Organza",
    "embroidery": "Zardozi",
    "occasion": "Wedding",
    "deliveryTimeline": "4-6 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.5,
    "reviewsCount": 69,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-53",
      "women-93",
      "women-86"
    ]
  },
  {
    "id": "women-72",
    "name": "Crimson Designer Sarees Edition",
    "price": 104219,
    "category": "Designer Sarees",
    "gender": "women",
    "image": "/images/fabric.png",
    "gallery": [
      "/images/atelier.png",
      "/images/hero.png",
      "/images/journal.png"
    ],
    "isBespoke": true,
    "colors": [
      "#8C857A",
      "#E63946"
    ],
    "fabric": "Chiffon",
    "embroidery": "Zardozi",
    "occasion": "Business",
    "deliveryTimeline": "4-6 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.6,
    "reviewsCount": 70,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-93",
      "women-81",
      "women-57"
    ]
  },
  {
    "id": "women-73",
    "name": "Timeless Silk Sarees ",
    "price": 192985,
    "category": "Silk Sarees",
    "gender": "women",
    "image": "/images/journal.png",
    "gallery": [
      "/images/craftsmanship.png",
      "/images/hero.png",
      "/images/bespoke.png"
    ],
    "isBespoke": false,
    "colors": [
      "#C9A84C",
      "#1D3557"
    ],
    "fabric": "Organza",
    "embroidery": "None",
    "occasion": "Festive",
    "deliveryTimeline": "4-6 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.7,
    "reviewsCount": 134,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-60",
      "women-68",
      "women-90"
    ]
  },
  {
    "id": "women-74",
    "name": "Emerald Banarasi Sarees ",
    "price": 211887,
    "category": "Banarasi Sarees",
    "gender": "women",
    "image": "/images/hero.png",
    "gallery": [
      "/images/hero.png",
      "/images/hero.png",
      "/images/hero.png"
    ],
    "isBespoke": false,
    "badge": "New Arrival",
    "colors": [
      "#33312E",
      "#2A9D8F"
    ],
    "fabric": "Organza",
    "embroidery": "Gota Patti",
    "occasion": "Casual",
    "deliveryTimeline": "Ready to Ship",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.7,
    "reviewsCount": 12,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-92",
      "women-62",
      "women-58"
    ]
  },
  {
    "id": "women-75",
    "name": "Midnight Anarkali ",
    "price": 102975,
    "category": "Anarkali",
    "gender": "women",
    "image": "/images/atelier.png",
    "gallery": [
      "/images/fabric.png",
      "/images/journal.png",
      "/images/fabric.png"
    ],
    "isBespoke": false,
    "colors": [
      "#080808",
      "#E63946"
    ],
    "fabric": "Chiffon",
    "embroidery": "Threadwork",
    "occasion": "Business",
    "deliveryTimeline": "Ready to Ship",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.7,
    "reviewsCount": 125,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-93",
      "women-92",
      "women-95"
    ]
  },
  {
    "id": "women-76",
    "name": "Timeless Anarkali Edition",
    "price": 192628,
    "category": "Anarkali",
    "gender": "women",
    "image": "/images/hero.png",
    "gallery": [
      "/images/journal.png",
      "/images/fabric.png",
      "/images/atelier.png"
    ],
    "isBespoke": false,
    "badge": "Best Seller",
    "colors": [
      "#33312E",
      "#E63946"
    ],
    "fabric": "Velvet",
    "embroidery": "Aari",
    "occasion": "Reception",
    "deliveryTimeline": "3-4 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.4,
    "reviewsCount": 37,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-62",
      "women-70",
      "women-94"
    ]
  },
  {
    "id": "women-77",
    "name": "Imperial Sharara ",
    "price": 179195,
    "category": "Sharara",
    "gender": "women",
    "image": "/images/craftsmanship.png",
    "gallery": [
      "/images/atelier.png",
      "/images/journal.png",
      "/images/atelier.png"
    ],
    "isBespoke": true,
    "colors": [
      "#080808",
      "#2A9D8F"
    ],
    "fabric": "Linen",
    "embroidery": "Zardozi",
    "occasion": "Business",
    "deliveryTimeline": "3-4 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.6,
    "reviewsCount": 88,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-70",
      "women-62",
      "women-83"
    ]
  },
  {
    "id": "women-78",
    "name": "Signature Gharara ",
    "price": 107482,
    "category": "Gharara",
    "gender": "women",
    "image": "/images/journal.png",
    "gallery": [
      "/images/fabric.png",
      "/images/fabric.png",
      "/images/craftsmanship.png"
    ],
    "isBespoke": false,
    "colors": [
      "#8C857A",
      "#2A9D8F"
    ],
    "fabric": "Organza",
    "embroidery": "Threadwork",
    "occasion": "Festive",
    "deliveryTimeline": "3-4 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.5,
    "reviewsCount": 128,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-93",
      "women-79",
      "women-67"
    ]
  },
  {
    "id": "women-79",
    "name": "Signature Gharara Edition",
    "price": 54583,
    "category": "Gharara",
    "gender": "women",
    "image": "/images/journal.png",
    "gallery": [
      "/images/hero.png",
      "/images/journal.png",
      "/images/atelier.png"
    ],
    "isBespoke": true,
    "badge": "Best Seller",
    "colors": [
      "#33312E",
      "#1D3557"
    ],
    "fabric": "Linen",
    "embroidery": "None",
    "occasion": "Business",
    "deliveryTimeline": "4-6 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.2,
    "reviewsCount": 13,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-85",
      "women-64",
      "women-73"
    ]
  },
  {
    "id": "women-80",
    "name": "Emerald Luxury Gowns ",
    "price": 40882,
    "category": "Luxury Gowns",
    "gender": "women",
    "image": "/images/atelier.png",
    "gallery": [
      "/images/hero.png",
      "/images/craftsmanship.png",
      "/images/atelier.png"
    ],
    "isBespoke": false,
    "badge": "New Arrival",
    "colors": [
      "#080808",
      "#E63946"
    ],
    "fabric": "Banarasi Silk",
    "embroidery": "Aari",
    "occasion": "Casual",
    "deliveryTimeline": "3-4 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.6,
    "reviewsCount": 71,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-85",
      "women-62",
      "women-62"
    ]
  },
  {
    "id": "women-81",
    "name": "Emerald Luxury Gowns Edition",
    "price": 99442,
    "category": "Luxury Gowns",
    "gender": "women",
    "image": "/images/hero.png",
    "gallery": [
      "/images/atelier.png",
      "/images/journal.png",
      "/images/atelier.png"
    ],
    "isBespoke": false,
    "colors": [
      "#FAFAFA",
      "#E63946"
    ],
    "fabric": "Linen",
    "embroidery": "Zardozi",
    "occasion": "Reception",
    "deliveryTimeline": "Ready to Ship",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.5,
    "reviewsCount": 32,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-76",
      "women-68",
      "women-57"
    ]
  },
  {
    "id": "women-82",
    "name": "Emerald Reception Gowns ",
    "price": 88144,
    "category": "Reception Gowns",
    "gender": "women",
    "image": "/images/bespoke.png",
    "gallery": [
      "/images/atelier.png",
      "/images/fabric.png",
      "/images/fabric.png"
    ],
    "isBespoke": false,
    "badge": "Limited Edition",
    "colors": [
      "#8C857A",
      "#2A9D8F"
    ],
    "fabric": "Banarasi Silk",
    "embroidery": "Zardozi",
    "occasion": "Festive",
    "deliveryTimeline": "Ready to Ship",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.9,
    "reviewsCount": 34,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-76",
      "women-67",
      "women-78"
    ]
  },
  {
    "id": "women-83",
    "name": "Imperial Reception Gowns Edition",
    "price": 150720,
    "category": "Reception Gowns",
    "gender": "women",
    "image": "/images/bespoke.png",
    "gallery": [
      "/images/fabric.png",
      "/images/journal.png",
      "/images/bespoke.png"
    ],
    "isBespoke": true,
    "colors": [
      "#C9A84C",
      "#1D3557"
    ],
    "fabric": "Banarasi Silk",
    "embroidery": "None",
    "occasion": "Festive",
    "deliveryTimeline": "4-6 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.9,
    "reviewsCount": 12,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-89",
      "women-80",
      "women-93"
    ]
  },
  {
    "id": "women-84",
    "name": "Emerald Luxury Kurtis ",
    "price": 155507,
    "category": "Luxury Kurtis",
    "gender": "women",
    "image": "/images/journal.png",
    "gallery": [
      "/images/journal.png",
      "/images/bespoke.png",
      "/images/journal.png"
    ],
    "isBespoke": false,
    "badge": "New Arrival",
    "colors": [
      "#C9A84C",
      "#2A9D8F"
    ],
    "fabric": "Velvet",
    "embroidery": "Zardozi",
    "occasion": "Reception",
    "deliveryTimeline": "Ready to Ship",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.7,
    "reviewsCount": 32,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-94",
      "women-68",
      "women-56"
    ]
  },
  {
    "id": "women-85",
    "name": "Midnight Luxury Kurtis Edition",
    "price": 144869,
    "category": "Luxury Kurtis",
    "gender": "women",
    "image": "/images/bespoke.png",
    "gallery": [
      "/images/journal.png",
      "/images/bespoke.png",
      "/images/fabric.png"
    ],
    "isBespoke": true,
    "colors": [
      "#FAFAFA",
      "#1D3557"
    ],
    "fabric": "Chiffon",
    "embroidery": "Aari",
    "occasion": "Festive",
    "deliveryTimeline": "3-4 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.9,
    "reviewsCount": 45,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-67",
      "women-86",
      "women-58"
    ]
  },
  {
    "id": "women-86",
    "name": "Imperial Luxury Co-ord Sets ",
    "price": 81215,
    "category": "Luxury Co-ord Sets",
    "gender": "women",
    "image": "/images/bespoke.png",
    "gallery": [
      "/images/bespoke.png",
      "/images/hero.png",
      "/images/hero.png"
    ],
    "isBespoke": true,
    "colors": [
      "#C9A84C",
      "#E63946"
    ],
    "fabric": "Banarasi Silk",
    "embroidery": "None",
    "occasion": "Business",
    "deliveryTimeline": "Ready to Ship",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.4,
    "reviewsCount": 136,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-94",
      "women-79",
      "women-54"
    ]
  },
  {
    "id": "women-87",
    "name": "Signature Luxury Dupattas ",
    "price": 138407,
    "category": "Luxury Dupattas",
    "gender": "women",
    "image": "/images/hero.png",
    "gallery": [
      "/images/fabric.png",
      "/images/fabric.png",
      "/images/journal.png"
    ],
    "isBespoke": false,
    "colors": [
      "#C9A84C",
      "#2A9D8F"
    ],
    "fabric": "Banarasi Silk",
    "embroidery": "Gota Patti",
    "occasion": "Black Tie",
    "deliveryTimeline": "3-4 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.3,
    "reviewsCount": 139,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-85",
      "women-78",
      "women-77"
    ]
  },
  {
    "id": "women-88",
    "name": "Timeless Designer Blouses ",
    "price": 209697,
    "category": "Designer Blouses",
    "gender": "women",
    "image": "/images/bespoke.png",
    "gallery": [
      "/images/fabric.png",
      "/images/journal.png",
      "/images/craftsmanship.png"
    ],
    "isBespoke": true,
    "badge": "Best Seller",
    "colors": [
      "#33312E",
      "#2A9D8F"
    ],
    "fabric": "Italian Wool",
    "embroidery": "None",
    "occasion": "Casual",
    "deliveryTimeline": "4-6 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.8,
    "reviewsCount": 14,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-90",
      "women-77",
      "women-80"
    ]
  },
  {
    "id": "women-89",
    "name": "Bespoke Designer Blouses Edition",
    "price": 141618,
    "category": "Designer Blouses",
    "gender": "women",
    "image": "/images/craftsmanship.png",
    "gallery": [
      "/images/fabric.png",
      "/images/craftsmanship.png",
      "/images/fabric.png"
    ],
    "isBespoke": false,
    "badge": "Limited Edition",
    "colors": [
      "#FAFAFA",
      "#1D3557"
    ],
    "fabric": "Banarasi Silk",
    "embroidery": "Threadwork",
    "occasion": "Casual",
    "deliveryTimeline": "Ready to Ship",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.4,
    "reviewsCount": 106,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-65",
      "women-95",
      "women-84"
    ]
  },
  {
    "id": "women-90",
    "name": "Timeless Luxury Jewellery ",
    "price": 110672,
    "category": "Luxury Jewellery",
    "gender": "women",
    "image": "/images/atelier.png",
    "gallery": [
      "/images/bespoke.png",
      "/images/craftsmanship.png",
      "/images/bespoke.png"
    ],
    "isBespoke": false,
    "colors": [
      "#33312E",
      "#E63946"
    ],
    "fabric": "Italian Wool",
    "embroidery": "None",
    "occasion": "Black Tie",
    "deliveryTimeline": "3-4 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.5,
    "reviewsCount": 65,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-95",
      "women-61",
      "women-86"
    ]
  },
  {
    "id": "women-91",
    "name": "Bespoke Luxury Potli Bags ",
    "price": 213688,
    "category": "Luxury Potli Bags",
    "gender": "women",
    "image": "/images/fabric.png",
    "gallery": [
      "/images/fabric.png",
      "/images/journal.png",
      "/images/fabric.png"
    ],
    "isBespoke": false,
    "colors": [
      "#8C857A",
      "#1D3557"
    ],
    "fabric": "Banarasi Silk",
    "embroidery": "None",
    "occasion": "Casual",
    "deliveryTimeline": "4-6 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.4,
    "reviewsCount": 152,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-85",
      "women-57",
      "women-72"
    ]
  },
  {
    "id": "women-92",
    "name": "Timeless Luxury Clutches ",
    "price": 196201,
    "category": "Luxury Clutches",
    "gender": "women",
    "image": "/images/craftsmanship.png",
    "gallery": [
      "/images/journal.png",
      "/images/craftsmanship.png",
      "/images/atelier.png"
    ],
    "isBespoke": false,
    "badge": "Limited Edition",
    "colors": [
      "#FAFAFA",
      "#2A9D8F"
    ],
    "fabric": "Chiffon",
    "embroidery": "Threadwork",
    "occasion": "Reception",
    "deliveryTimeline": "3-4 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.3,
    "reviewsCount": 100,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-90",
      "women-90",
      "women-95"
    ]
  },
  {
    "id": "women-93",
    "name": "Bespoke Luxury Heels ",
    "price": 112693,
    "category": "Luxury Heels",
    "gender": "women",
    "image": "/images/bespoke.png",
    "gallery": [
      "/images/hero.png",
      "/images/journal.png",
      "/images/bespoke.png"
    ],
    "isBespoke": false,
    "colors": [
      "#080808",
      "#2A9D8F"
    ],
    "fabric": "Linen",
    "embroidery": "Zardozi",
    "occasion": "Business",
    "deliveryTimeline": "Ready to Ship",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.3,
    "reviewsCount": 64,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-69",
      "women-65",
      "women-67"
    ]
  },
  {
    "id": "women-94",
    "name": "Imperial Luxury Shawls ",
    "price": 107957,
    "category": "Luxury Shawls",
    "gender": "women",
    "image": "/images/bespoke.png",
    "gallery": [
      "/images/fabric.png",
      "/images/journal.png",
      "/images/bespoke.png"
    ],
    "isBespoke": true,
    "badge": "New Arrival",
    "colors": [
      "#FAFAFA",
      "#2A9D8F"
    ],
    "fabric": "Linen",
    "embroidery": "Zardozi",
    "occasion": "Black Tie",
    "deliveryTimeline": "3-4 Weeks",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 4.2,
    "reviewsCount": 76,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-78",
      "women-78",
      "women-60"
    ]
  },
  {
    "id": "women-95",
    "name": "Crimson Luxury Shawls Edition",
    "price": 155857,
    "category": "Luxury Shawls",
    "gender": "women",
    "image": "/images/journal.png",
    "gallery": [
      "/images/journal.png",
      "/images/bespoke.png",
      "/images/bespoke.png"
    ],
    "isBespoke": true,
    "colors": [
      "#C9A84C",
      "#1D3557"
    ],
    "fabric": "Egyptian Cotton",
    "embroidery": "Zardozi",
    "occasion": "Festive",
    "deliveryTimeline": "Ready to Ship",
    "desc": "An exquisite masterpiece of craftsmanship. Tailored to perfection using the finest fabrics globally sourced by our atelier.",
    "rating": 5,
    "reviewsCount": 115,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "Made to Measure"
    ],
    "completeTheLookIds": [
      "women-90",
      "women-86",
      "women-55"
    ]
  }
];
