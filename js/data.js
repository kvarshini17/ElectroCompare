window.productsData = {
    "iphone-16": {
        id: "iphone-16",
        title: "iPhone 15 Pro Max",
        brand: "Apple",
        category: "smartphones",
        price: 134900,
        image: "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone-15-pro-max.png",
        images: [
            "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone-15-pro-max.png",
            "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?auto=format&fit=crop&q=80&w=1000"
        ],
        rating: 4.8,
        reviews: 1200,
        description: "Titanium design. 48MP Fusion camera. And the powerful A18 Pro chip.",
        variantLabel: "Color",
        variants: ["Natural Titanium", "Blue Titanium", "Black Titanium"],
        specs: [
            { id: "processor", icon: "cpu", label: "Processor", value: "A17 Pro Chip" },
            { id: "ram", icon: "memory-stick", label: "RAM", value: "8GB" },
            { id: "storage", icon: "hard-drive", label: "Storage", value: "256GB" },
            { id: "display", icon: "smartphone", label: "Display", value: "6.7\" OLED" },
            { id: "battery", icon: "battery-charging", label: "Battery", value: "4422 mAh" },
            { id: "camera", icon: "camera", label: "Camera", value: "48MP Main" }
        ],
        compareValues: { ram: 8, battery: 4422, camera: 48, storage: 256 }
    },
    "s24-ultra": {
        id: "s24-ultra",
        title: "Galaxy S24 Ultra",
        brand: "Samsung",
        category: "smartphones",
        price: 129999,
        image: "https://www.pricerunner.com/product/3037407366/Samsung-Galaxy-S24-Ultra-1TB.jpg",
        images: [
            "https://www.pricerunner.com/product/3037407366/Samsung-Galaxy-S24-Ultra-1TB.jpg",
            "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=1000"
        ],
        rating: 4.7,
        reviews: 850,
        description: "Galaxy AI is here. Welcome to the era of mobile AI. With S24 Ultra in your hands, you can unleash whole new levels of creativity.",
        variantLabel: "Storage",
        variants: ["256GB", "512GB", "1TB"],
        specs: [
            { id: "processor", icon: "cpu", label: "Processor", value: "Snapdragon 8 Gen 3" },
            { id: "ram", icon: "memory-stick", label: "RAM", value: "12GB" },
            { id: "storage", icon: "hard-drive", label: "Storage", value: "256GB" },
            { id: "display", icon: "smartphone", label: "Display", value: "6.8\" AMOLED" },
            { id: "battery", icon: "battery-charging", label: "Battery", value: "5000 mAh" },
            { id: "camera", icon: "camera", label: "Camera", value: "200MP Main" }
        ],
        compareValues: { ram: 12, battery: 5000, camera: 200, storage: 256 }
    },
    "pixel-9-pro": {
        id: "pixel-9-pro",
        title: "Pixel 9 Pro XL",
        brand: "Google",
        category: "smartphones",
        price: 109999,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800",
        rating: 4.6,
        reviews: 460,
        description: "The most powerful Pixel yet, engineered by Google with advanced AI.",
        specs: [
            { id: "processor", icon: "cpu", label: "Processor", value: "Tensor G4" },
            { id: "ram", icon: "memory-stick", label: "RAM", value: "16GB" },
            { id: "storage", icon: "hard-drive", label: "Storage", value: "256GB" },
            { id: "display", icon: "smartphone", label: "Display", value: "6.8\" OLED" },
            { id: "battery", icon: "battery-charging", label: "Battery", value: "5060 mAh" },
            { id: "camera", icon: "camera", label: "Camera", value: "50MP Main" }
        ],
        compareValues: { ram: 16, battery: 5060, camera: 50, storage: 256 }
    },
    "macbook-pro": {
        id: "macbook-pro",
        title: "MacBook Pro 16\"",
        brand: "Apple",
        category: "laptops",
        price: 249900,
        image: "https://macfinder.co.uk/wp-content/uploads/2022/12/img-MacBook-Pro-Retina-14-Inch-23934.jpg",
        rating: 4.8,
        reviews: 230,
        description: "The M3 Max chip brings next-level performance.",
        specs: [
            { id: "processor", icon: "cpu", label: "Processor", value: "M3 Max" },
            { id: "ram", icon: "memory-stick", label: "RAM", value: "36GB" },
            { id: "storage", icon: "hard-drive", label: "Storage", value: "1TB SSD" },
            { id: "display", icon: "monitor", label: "Display", value: "16.2\" Liquid Retina" },
            { id: "battery", icon: "battery-charging", label: "Battery", value: "100Wh" }
        ],
        compareValues: { ram: 36, battery: 100, storage: 1000 }
    },
    "macbook-air": {
        id: "macbook-air",
        title: "MacBook Air M3 15\"",
        brand: "Apple",
        category: "laptops",
        price: 134900,
        image: "https://tse3.mm.bing.net/th/id/OIP.K75bGqE5tlwVll1qjOLstQHaEK?pid=Api&P=0&h=180",
        rating: 4.9,
        reviews: 2100,
        description: "Incredibly thin and light, powered by the M3 chip.",
        specs: [
            { id: "processor", icon: "cpu", label: "Processor", value: "M3" },
            { id: "ram", icon: "memory-stick", label: "RAM", value: "8GB" },
            { id: "storage", icon: "hard-drive", label: "Storage", value: "256GB SSD" },
            { id: "display", icon: "monitor", label: "Display", value: "15.3\" Liquid Retina" },
            { id: "battery", icon: "battery-charging", label: "Battery", value: "66.5Wh" }
        ],
        compareValues: { ram: 8, battery: 66, storage: 256 }
    },
    "dell-xps": {
        id: "dell-xps",
        title: "XPS 13 Plus",
        brand: "Dell",
        category: "laptops",
        price: 145900,
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=600",
        rating: 4.5,
        reviews: 680,
        description: "Premium design with edge-to-edge keyboard.",
        specs: [
            { id: "processor", icon: "cpu", label: "Processor", value: "Intel Core i7-1360P" },
            { id: "ram", icon: "memory-stick", label: "RAM", value: "16GB" },
            { id: "storage", icon: "hard-drive", label: "Storage", value: "512GB SSD" },
            { id: "display", icon: "monitor", label: "Display", value: "13.4\" OLED" },
            { id: "battery", icon: "battery-charging", label: "Battery", value: "55Wh" }
        ],
        compareValues: { ram: 16, battery: 55, storage: 512 }
    },
    "samsung-book": {
        id: "samsung-book",
        title: "Galaxy Book4 Pro",
        brand: "Samsung",
        category: "laptops",
        price: 159900,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800",
        rating: 4.7,
        reviews: 120,
        description: "Dynamic AMOLED display in an ultra-thin design.",
        specs: [
            { id: "processor", icon: "cpu", label: "Processor", value: "Intel Core Ultra 7" },
            { id: "ram", icon: "memory-stick", label: "RAM", value: "16GB" },
            { id: "storage", icon: "hard-drive", label: "Storage", value: "512GB SSD" },
            { id: "display", icon: "monitor", label: "Display", value: "14\" AMOLED 2X" },
            { id: "battery", icon: "battery-charging", label: "Battery", value: "63Wh" }
        ],
        compareValues: { ram: 16, battery: 63, storage: 512 }
    },
    "surface-pro": {
        id: "surface-pro",
        title: "Surface Pro 9",
        brand: "Microsoft",
        category: "laptops",
        price: 105900,
        image: "https://tse3.mm.bing.net/th/id/OIP.YYS_41HS6y8CsPagVmyF-gHaFl?pid=Api&P=0&h=180",
        rating: 4.4,
        reviews: 410,
        description: "Tablet flexibility, laptop performance.",
        specs: [
            { id: "processor", icon: "cpu", label: "Processor", value: "Intel Core i5-1235U" },
            { id: "ram", icon: "memory-stick", label: "RAM", value: "8GB" },
            { id: "storage", icon: "hard-drive", label: "Storage", value: "256GB SSD" },
            { id: "display", icon: "monitor", label: "Display", value: "13\" PixelSense" },
            { id: "battery", icon: "battery-charging", label: "Battery", value: "47.7Wh" }
        ],
        compareValues: { ram: 8, battery: 47, storage: 256 }
    },
    "sony-wf": {
        id: "sony-wf",
        title: "WF-1000XM5 ANC",
        brand: "Sony",
        category: "earbuds",
        price: 24990,
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=800",
        rating: 4.8,
        reviews: 1800,
        description: "Industry-leading noise cancellation.",
        specs: [
            { id: "battery", icon: "battery-charging", label: "Battery Life", value: "8 hrs (24 hrs with case)" },
            { id: "feature", icon: "music", label: "Noise Cancellation", value: "Yes (Dual Feedback)" },
            { id: "water", icon: "droplets", label: "Water Resistance", value: "IPX4" }
        ],
        compareValues: { battery: 24 }
    },
    "pixel-buds": {
        id: "pixel-buds",
        title: "Pixel Buds Pro 2",
        brand: "Google",
        category: "earbuds",
        price: 19999,
        image: "https://tse4.mm.bing.net/th/id/OIP.DIeUSMr53v7aIl17O-_0DgHaEK?pid=Api&P=0&h=180",
        rating: 4.4,
        reviews: 320,
        description: "Premium sound with Google AI.",
        specs: [
            { id: "battery", icon: "battery-charging", label: "Battery Life", value: "11 hrs (31 hrs with case)" },
            { id: "feature", icon: "music", label: "Noise Cancellation", value: "Yes (Silent Seal)" },
            { id: "water", icon: "droplets", label: "Water Resistance", value: "IPX4" }
        ],
        compareValues: { battery: 31 }
    },
    "airpods-pro": {
        id: "airpods-pro",
        title: "AirPods Pro 2",
        brand: "Apple",
        category: "earbuds",
        price: 24900,
        image: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24043027/DSCF9466.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=1920",
        rating: 4.7,
        reviews: 4100,
        description: "Rich audio quality, up to 2x more Active Noise Cancellation.",
        specs: [
            { id: "battery", icon: "battery-charging", label: "Battery Life", value: "6 hrs (30 hrs with case)" },
            { id: "feature", icon: "music", label: "Noise Cancellation", value: "Yes (Adaptive Audio)" },
            { id: "water", icon: "droplets", label: "Water Resistance", value: "IPX4" }
        ],
        compareValues: { battery: 30 }
    },
    "galaxy-buds": {
        id: "galaxy-buds",
        title: "Galaxy Buds3 Pro",
        brand: "Samsung",
        category: "earbuds",
        price: 17999,
        image: "https://tse4.mm.bing.net/th/id/OIP.CN5X4aYaA7s7r_DHeI0EBwHaEW?pid=Api&P=0&h=180",
        rating: 4.6,
        reviews: 610,
        description: "Studio quality sound with Galaxy AI.",
        specs: [
            { id: "battery", icon: "battery-charging", label: "Battery Life", value: "7 hrs (30 hrs with case)" },
            { id: "feature", icon: "music", label: "Noise Cancellation", value: "Yes (Adaptive ANC)" },
            { id: "water", icon: "droplets", label: "Water Resistance", value: "IP57" }
        ],
        compareValues: { battery: 30 }
    },
    "apple-watch": {
        id: "apple-watch",
        title: "Watch Ultra 2",
        brand: "Apple",
        category: "watch",
        price: 89900,
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/49-cell-titanium-black-trail-loop-black-ultra?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1724552757277",
        rating: 4.9,
        reviews: 890,
        description: "Rugged and capable, built for endurance athletes.",
        specs: [
            { id: "display", icon: "monitor", label: "Display", value: "1.92\" LTPO OLED (3000 nits)" },
            { id: "battery", icon: "battery-charging", label: "Battery Life", value: "Up to 36 hrs" },
            { id: "feature", icon: "heart-pulse", label: "Sensors", value: "ECG, Blood Oxygen, Temp" },
            { id: "water", icon: "droplets", label: "Water Resistance", value: "100m (WR100)" }
        ],
        compareValues: { battery: 36 }
    },
    "pixel-watch": {
        id: "pixel-watch",
        title: "Pixel Watch 3",
        brand: "Google",
        category: "watch",
        price: 34999,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
        rating: 4.5,
        reviews: 210,
        description: "The best of Google and Fitbit.",
        specs: [
            { id: "display", icon: "monitor", label: "Display", value: "1.2\" AMOLED (2000 nits)" },
            { id: "battery", icon: "battery-charging", label: "Battery Life", value: "Up to 24 hrs" },
            { id: "feature", icon: "heart-pulse", label: "Sensors", value: "ECG, HR, cEDA" },
            { id: "water", icon: "droplets", label: "Water Resistance", value: "50m (5ATM)" }
        ],
        compareValues: { battery: 24 }
    },
    "samsung-watch": {
        id: "samsung-watch",
        title: "Galaxy Watch Ultra",
        brand: "Samsung",
        category: "watch",
        price: 44999,
        image: "https://static1.anpoimages.com/wordpress/wp-content/uploads/2024/10/untitled-design-3.png",
        rating: 4.7,
        reviews: 460,
        description: "Advanced health tracking in a premium design.",
        specs: [
            { id: "display", icon: "monitor", label: "Display", value: "1.5\" Super AMOLED (3000 nits)" },
            { id: "battery", icon: "battery-charging", label: "Battery Life", value: "Up to 100 hrs" },
            { id: "feature", icon: "heart-pulse", label: "Sensors", value: "BIA, ECG, BP" },
            { id: "water", icon: "droplets", label: "Water Resistance", value: "100m (10ATM)" }
        ],
        compareValues: { battery: 100 }
    },
    "garmin-watch": {
        id: "garmin-watch",
        title: "Epix Gen 2 Sapphire",
        brand: "Garmin",
        category: "watch",
        price: 82990,
        image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=600",
        rating: 4.8,
        reviews: 150,
        description: "Premium active smartwatch with AMOLED display.",
        specs: [
            { id: "display", icon: "monitor", label: "Display", value: "1.3\" AMOLED" },
            { id: "battery", icon: "battery-charging", label: "Battery Life", value: "Up to 16 days" },
            { id: "feature", icon: "heart-pulse", label: "Sensors", value: "Elevate V4, Pulse Ox" },
            { id: "water", icon: "droplets", label: "Water Resistance", value: "100m (10ATM)" }
        ],
        compareValues: { battery: 384 } // 16 * 24 hours
    }
};

// Fallback arrays if missing
Object.keys(window.productsData).forEach(key => {
    if (!window.productsData[key].images) window.productsData[key].images = [window.productsData[key].image];
    if (!window.productsData[key].specs) window.productsData[key].specs = [];
    if (!window.productsData[key].variants) window.productsData[key].variants = [];
});
