const PRODUCTS = [
  {
    "id": 1,
    "title": "iPad A16",
    "category": "Accessory",
    "price": 21500,
    "oldPrice": null,
    "rating": 3.8,
    "images": [
      "img/ipad a16.png",
      "img/ipad a16.png"
    ],
    "description": "This is iPad A16 with great features and reliable performance.",
    "specs": {
      "RAM": "6GB",
      "ROM": "64GB",
      "camera": "12MP",
      "battery": "4000mAh",
      "color": "Black"
    }
  },
  {
    "id": 2,
    "title": "iPhone 17 pro",
    "category": "Earbuds",
    "price": 23000,
    "oldPrice": null,
    "rating": 4.1,
    "images": [
      "img/iPhone 17 pro.png",
      "img/iPhone 17 pro.png"
    ],
    "description": "This is iPhone 17 pro with great features and reliable performance.",
    "specs": {
      "RAM": "4GB",
      "ROM": "64GB",
      "camera": "12MP",
      "battery": "4000mAh",
      "color": "Black"
    }
  },
  {
    "id": 3,
    "title": "iPhone 17",
    "category": "Phone",
    "price": 24500,
    "oldPrice": null,
    "rating": 4.4,
    "images": [
      "img/iPhone 17 Sage SOURCE Julian Chokkattu.jpg",
      "img/iPhone 17 Sage SOURCE Julian Chokkattu.jpg"
    ],
    "description": "This is iPhone 17 with great features and reliable performance.",
    "specs": {
      "RAM": "6GB",
      "ROM": "128GB",
      "camera": "12MP",
      "battery": "4000mAh",
      "color": "Black"
    }
  },
  {
    "id": 4,
    "title": "iPhone 17",
    "category": "Accessory",
    "price": 26000,
    "oldPrice": 27600,
    "rating": 4.7,
    "images": [
      "img/iphone 17.png",
      "img/iphone 17.png"
    ],
    "description": "This is iPhone 17 with great features and reliable performance.",
    "specs": {
      "RAM": "4GB",
      "ROM": "64GB",
      "camera": "12MP",
      "battery": "4000mAh",
      "color": "Black"
    }
  },
  {
    "id": 5,
    "title": "iPhone Air",
    "category": "Earbuds",
    "price": 27500,
    "oldPrice": null,
    "rating": 3.5,
    "images": [
      "img/iphone air.png",
      "img/iphone air.png"
    ],
    "description": "This is iPhone Air with great features and reliable performance.",
    "specs": {
      "RAM": "6GB",
      "ROM": "64GB",
      "camera": "12MP",
      "battery": "4000mAh",
      "color": "Black"
    }
  },
  {
    "id": 6,
    "title": "iPhone 8",
    "category": "Phone",
    "price": 29000,
    "oldPrice": null,
    "rating": 3.8,
    "images": [
      "img/iphone_8_roundup_header.jpg",
      "img/iphone_8_roundup_header.jpg"
    ],
    "description": "This is iPhone 8 with great features and reliable performance.",
    "specs": {
      "RAM": "4GB",
      "ROM": "128GB",
      "camera": "12MP",
      "battery": "4000mAh",
      "color": "Black"
    }
  },
  {
    "id": 7,
    "title": "iPhone 11 pro",
    "category": "Accessory",
    "price": 30500,
    "oldPrice": null,
    "rating": 4.1,
    "images": [
      "img/iphone-11-pro.jpg",
      "img/iphone-11-pro.jpg"
    ],
    "description": "This is iPhone 11 pro with great features and reliable performance.",
    "specs": {
      "RAM": "6GB",
      "ROM": "64GB",
      "camera": "12MP",
      "battery": "4000mAh",
      "color": "Black"
    }
  },
  {
    "id": 8,
    "title": "Oppo a3",
    "category": "Earbuds",
    "price": 32000,
    "oldPrice": 33200,
    "rating": 4.4,
    "images": [
      "img/oppo a3.jpg",
      "img/oppo a3.jpg"
    ],
    "description": "This is Oppo a3 with great features and reliable performance.",
    "specs": {
      "RAM": "4GB",
      "ROM": "64GB",
      "camera": "12MP",
      "battery": "4000mAh",
      "color": "Black"
    }
  },
  {
    "id": 9,
    "title": "Oppo A77 5G",
    "category": "Phone",
    "price": 33500,
    "oldPrice": null,
    "rating": 4.7,
    "images": [
      "img/Oppo-A77-5G-price-1-200x300.png",
      "img/Oppo-A77-5G-price-1-200x300.png"
    ],
    "description": "This is Oppo A77 5G with great features and reliable performance.",
    "specs": {
      "RAM": "6GB",
      "ROM": "128GB",
      "camera": "12MP",
      "battery": "4000mAh",
      "color": "Black"
    }
  },
  {
    "id": 10,
    "title": "Oppo Reno 2z",
    "category": "Accessory",
    "price": 35000,
    "oldPrice": null,
    "rating": 3.5,
    "images": [
      "img/Oppo-Reno-2z-01.jpg",
      "img/Oppo-Reno-2z-01.jpg"
    ],
    "description": "This is Oppo Reno 2z with great features and reliable performance.",
    "specs": {
      "RAM": "4GB",
      "ROM": "64GB",
      "camera": "12MP",
      "battery": "4000mAh",
      "color": "Black"
    }
  },
  {
    "id": 11,
    "title": "iPhone 14 Pro",
    "category": "Earbuds",
    "price": 36500,
    "oldPrice": null,
    "rating": 3.8,
    "images": [
      "img/REGEN-iPhone14Pro-Frontback-Silver-Pakistan.png",
      "img/REGEN-iPhone14Pro-Frontback-Silver-Pakistan.png"
    ],
    "description": "This is iPhone 14 Pro with great features and reliable performance.",
    "specs": {
      "RAM": "6GB",
      "ROM": "64GB",
      "camera": "12MP",
      "battery": "4000mAh",
      "color": "Black"
    }
  },
  {
    "id": 12,
    "title": "iPhone 11 Pro",
    "category": "Phone",
    "price": 38000,
    "oldPrice": 38800,
    "rating": 4.1,
    "images": [
      "img/iphone-11-pro.jpg",
      "img/iphone-11-pro.jpg"
    ],
    "description": "This is iPhone 11 Pro with great features and reliable performance.",
    "specs": {
      "RAM": "4GB",
      "ROM": "128GB",
      "camera": "12MP",
      "battery": "4000mAh",
      "color": "Black"
    }
  }
];
