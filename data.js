const categories = [
    {
        name: 'Furniture',
        id: 'Furniture',
        subcategories: [
            { name: 'Sofas', id: 'Sofas' },
            { name: 'Tables', id: 'Tables' },
            { name: 'Chairs', id: 'Chairs' },
            { name: 'Bedsides', id: 'Bedsides' }
        ]
    },
    {
        name: 'Accessories',
        id: 'Accessories',
        subcategories: [
            { name: 'Cushions', id: 'Cushions' },
            { name: 'Lamps', id: 'Lamps' }
        ]
    },
    {
        name: 'Decor',
        id: 'Decor',
        subcategories: [
            { name: 'Vases', id: 'Vases' },
            { name: 'Baskets', id: 'Baskets' },
            { name: 'Bowls', id: 'Bowls' }
        ]
    },
    {
        name: 'Textile',
        id: 'Textile',
        subcategories: [
            { name: 'Tablecloths', id: 'Tablecloths' }
        ]
    }
];

const products = [
    {
        id: 'SKU-1000',
        imgSrc: 'images/single-img-1.jpg',
        images: {
            burlywood: ['images/sofa-grey-half-brown.jpg', 'images/sofa-grey-half-brown2.jpg'],
            olive: ['images/single-img-1.jpg', 'images/single-img-2.jpg'],
            darkred: ['images/single-img-red1.jpg', 'images/single-img-red2.jpg'],
        },
        name: 'Minimal 954',
        description: 'Elegant single product perfect for any space.',
        offer: 'Buy Now',
        price: 250,
        colors: ['olive', 'burlywood', 'darkred'],
        special: 'single',
        category: 'Furniture',
        subcategory: 'Sofas',
        options: [{ size: '80 x 10 x 90' }, { size: '85 x 12 x 95' }],
        specifications: { assembly: 'Easy', care: 'Wipe clean', material: 'Wood' },
        availability: [{ branch: 'Main Store', address: '123 Main St', quantity: 10 }, { branch: 'Store A', address: '456 Elm St', quantity: 5 }]
    },
    {
        id: 'SKU-2000',
        imgSrc: 'images/sofa-1-2.jpg',
        images: {
            burlywood: ['images/sofa-1-2.jpg', 'images/sofa-zara.webp'],
            olive: ['images/sofa-1-2-olive.avif', 'images/sofa-1-olive.avif'],
        },
        name: 'Safari 900',
        description: 'Comfortable sofa with modern design.',
        offer: 'Buy Now',
        price: 1500,
        colors: ['burlywood', 'olive'],
        special: 'single',
        category: 'Furniture',
        subcategory: 'Sofas',
        options: [{ size: '90 x 30 x 100' }, { size: '95 x 32 x 105' }],
        specifications: { assembly: 'Professional', care: 'Vacuum regularly', material: 'Fabric' },
        availability: [{ branch: 'Store A', address: '456 Elm St', quantity: 5 }, { branch: 'Store B', address: '789 Oak St', quantity: 8 }]
    },
    {
        id: 'SKU-3000',
        imgSrc: 'images/gwen.jpg',
        name: 'Gwen 968',
        description: 'Stylish single item to enhance your home.',
        offer: 'Sale %30',
        price: 400,
        colors: [],
        special: 'single',
        category: 'Furniture',
        subcategory: 'Sofas',
        options: [{ size: '85 x 20 x 85' }],
        specifications: { assembly: 'Minimal', care: 'Dust with a dry cloth', material: 'Leather' },
        availability: [{ branch: 'Main Store', address: '123 Main St', quantity: 7 }]
    },
    {
        id: 'SKU-4000',
        imgSrc: 'images/grace.jpg',
        name: 'Grace 110',
        description: 'Unique single piece for contemporary interiors.',
        offer: 'Sale %15',
        price: 600,
        colors: [],
        special: 'single',
        category: 'Furniture',
        subcategory: 'Chairs',
        options: [{ size: '100 x 15 x 55' }, { size: '105 x 17 x 60' }],
        specifications: { assembly: 'Easy', care: 'Clean with a damp cloth', material: 'Metal' },
        availability: [{ branch: 'Store B', address: '789 Oak St', quantity: 6 }]
    },
    {
        id: 'SKU-5000',
        imgSrc: 'images/table.webp',
        name: 'Zana 131',
        description: 'Modern and sleek single product for any decor.',
        offer: 'Sale %25',
        price: 800,
        colors: [],
        special: 'single',
        category: 'Furniture',
        subcategory: 'Tables',
        options: [{ size: '75 x 20 x 120' }, { size: '80 x 22 x 125' }],
        specifications: { assembly: 'Assembly required', care: 'Wipe with a damp cloth', material: 'Glass' },
        availability: [{ branch: 'Main Store', address: '123 Main St', quantity: 4 }, { branch: 'Store A', address: '456 Elm St', quantity: 3 }]
    },
    {
        id: 'SKU-6000',
        imgSrc: 'images/terra.jpg',
        name: 'Terra 686',
        description: 'Chic single piece with a stylish touch.',
        offer: 'Buy Now',
        price: 350,
        colors: [],
        special: 'single',
        category: 'Furniture',
        subcategory: 'Tables',
        options: [{ size: '80 x 18 x 100' }],
        specifications: { assembly: 'Minimal', care: 'Dust regularly', material: 'Wood' },
        availability: [{ branch: 'Store C', address: '101 Pine St', quantity: 5 }]
    },
    {
        id: 'SKU-7000',
        imgSrc: 'images/photo-1549187774-b4e9b0445b41.avif',
        name: 'York 775',
        description: 'Trendy single item for contemporary spaces.',
        offer: 'Sale %15',
        price: 500,
        colors: [],
        special: 'single',
        category: 'Furniture',
        subcategory: 'Sofas',
        options: [{ size: '85 x 22 x 95' }, { size: '90 x 24 x 100' }],
        specifications: { assembly: 'Professional', care: 'Vacuum regularly', material: 'Fabric' },
        availability: [{ branch: 'Main Store', address: '123 Main St', quantity: 8 }, { branch: 'Store B', address: '789 Oak St', quantity: 6 }]
    },
    {
        id: 'SKU-8000',
        imgSrc: 'images/chair.jpg',
        images: {
            peru: ['images/chair.jpg', 'images/chair-peru.jpg'],
            black: ['images/char-black-1.jpg', 'images/chair-black-2.jpg'],
        },
        name: 'Beudje 905',
        description: 'Comfortable chair set for modern homes.',
        offer: 'Sale 25%',
        price: 1200,
        colors: ['peru', 'black'],
        special: 'set',
        category: 'Furniture',
        subcategory: 'Chairs',
        options: [{ size: '95 x 12 x 55' }, { size: '100 x 14 x 60' }],
        specifications: { assembly: 'Easy', care: 'Wipe clean', material: 'Leather' },
        availability: [{ branch: 'Store A', address: '456 Elm St', quantity: 7 }, { branch: 'Store C', address: '101 Pine St', quantity: 4 }]
    },
    {
        id: 'SKU-9000',
        imgSrc: 'images/chair4.jpg',
        name: 'Origin 901',
        description: 'Stylish chairs that complement any decor.',
        offer: 'Buy Now',
        price: 1500,
        colors: [],
        special: 'set',
        category: 'Furniture',
        subcategory: 'Chairs',
        options: [{ size: '100 x 14 x 60' }, { size: '105 x 16 x 65' }],
        specifications: { assembly: 'Professional', care: 'Dust with a dry cloth', material: 'Metal' },
        availability: [{ branch: 'Store B', address: '789 Oak St', quantity: 6 }, { branch: 'Store C', address: '101 Pine St', quantity: 3 }]
    },
    {
        id: 'SKU-10000',
        imgSrc: 'images/bascket.jpg',
        name: 'Marocco 95',
        description: 'Functional and decorative basket set.',
        offer: 'Sale 15%',
        price: 60,
        colors: [],
        special: 'set',
        category: 'Decor',
        subcategory: 'Baskets',
        options: [{ size: '30 x 5 x 30' }],
        specifications: { assembly: 'None', care: 'Wipe clean', material: 'Wicker' },
        availability: [{ branch: 'Main Store', address: '123 Main St', quantity: 12 }]
    },
    { id: 'SKU-1100', 
        imgSrc: 'images/bedside.jpg', 
        name: 'Retro 707', 
        description: 'Elegant bedside table set for your bedroom.',
        offer: 'Buy Now', 
        price: 200, 
        colors: [], 
        special: 'set', 
        category: 'Furniture', 
        subcategory: 'Bedsides', 
        options: [
            { size: '60 x 8 x 40' }, 
            { size: '65 x 9 x 45' }
        ], 
        specifications: { assembly: 'Easy', care: 'Dust regularly', material: 'Wood' }, 
        availability: [{ branch: 'Store A', address: '456 Elm St', quantity: 8 }] 
    },
    { id: 'SKU-1200', 
        imgSrc: 'images/chair2.webp', 
        name: 'Kvela 988', 
        description: 'Modern chair set for any living area.',
        offer: 'Sale 15%', 
        price: 900, 
        colors: [], 
        special: 'set', 
        category: 'Furniture', 
        subcategory: 'Chairs', 
        options: [
            { size: '95 x 12 x 55' }, 
            { size: '100 x 14 x 60' }
        ], 
        specifications: { assembly: 'Easy', care: 'Wipe clean', material: 'Fabric' }, 
        availability: [{ branch: 'Store C', address: '101 Pine St', quantity: 6 }] 
    },
    { id: 'SKU-1300', 
        imgSrc: 'images/coffe-table.jpg', 
        name: 'Chrome 101', 
        description: 'Chic coffee table set to enhance your living space.',
        offer: 'Sale 30%', 
        price: 400, 
        colors: [], 
        special: 'set', 
        category: 'Furniture', 
        subcategory: 'Tables', 
        options: [
            { size: '45 x 15 x 80' }, 
            { size: '50 x 17 x 85' }
        ], 
        specifications: { assembly: 'Assembly required', care: 'Wipe with a damp cloth', material: 'Metal' }, 
        availability: [{ branch: 'Main Store', address: '123 Main St', quantity: 5 }, { branch: 'Store A', address: '456 Elm St', quantity: 3 }] 
    },
    { id: 'SKU-1400', 
        imgSrc: 'images/chair3.webp', 
        images: {
            lightgray: ['images/chair3.webp'],
            burlywood: ['images/armchair-brown-1.webp'],
        },
        name: 'Blanko 001', 
        description: 'Stylish chair set for contemporary interiors.',
        offer: 'Buy Now', 
        price: 1300, 
        colors: ['lightgray', 'burlywood'],
        special: 'set', 
        category: 'Furniture', 
        subcategory: 'Chairs', 
        options: [
            { size: '100 x 14 x 60' }, 
            { size: '105 x 16 x 65' }
        ], 
        specifications: { assembly: 'Professional', care: 'Dust regularly', material: 'Leather' }, 
        availability: [{ branch: 'Store A', address: '456 Elm St', quantity: 8 }, { branch: 'Store B', address: '789 Oak St', quantity: 5 }] 
    },
    { id: 'SKU-1500', 
        imgSrc: 'images/pillow-1.jpg',
        images: {
            lightgray: ['images/pillow-1.jpg', 'images/pillow-1-2.jpg'],
            olive: ['images/pillow-1-olive2.jpg', 'images/pillow-1-olive1.jpg'],
            cornsilk: ['images/pillow-1-white1.jpg', 'images/pillow-1-white2.jpg'],
            burlywood: ['images/pillow-1-brown1.jpg','images/pillow-1-brown2.jpg'],
        }, 
        name: 'Sandy 303', 
        description: 'Decorative pillow set for comfort and style.',
        offer: 'Buy Now', 
        price: 80, 
        colors: ['lightgray', 'olive', 'cornsilk', 'burlywood'], 
        special: 'set', 
        category: 'Accessories', 
        subcategory: 'Cushions', 
        options: [
            { size: '40 x 1 x 40' }
        ], 
        specifications: { assembly: 'None', care: 'Spot clean', material: 'Cotton' }, 
        availability: [{ branch: 'Store C', address: '101 Pine St', quantity: 15 }] 
    },
    { id: 'SKU-1600', 
        imgSrc: 'images/chair5.webp', 
        name: 'Greko 383', 
        description: 'Elegant chair set with a modern design.',
        offer: 'Buy Now', 
        price: 1400, 
        colors: [], 
        special: 'set', 
        category: 'Furniture', 
        subcategory: 'Chairs', 
        options: [
            { size: '95 x 14 x 55' }, 
            { size: '100 x 16 x 60' }
        ], 
        specifications: { assembly: 'Easy', care: 'Wipe clean', material: 'Wood' }, 
        availability: [{ branch: 'Main Store', address: '123 Main St', quantity: 5 }, { branch: 'Store B', address: '789 Oak St', quantity: 7 }] 
    },
    { id: 'SKU-1700', 
        imgSrc: 'images/sofa-grey-half.jpg',
        images: {
            lightgray: ['images/sofa-grey-half2.avif', 'images/sofa-grey-half.jpg'],
            brown: ['images/sofa-grey-half-brown.jpg', 'images/sofa-grey-half-brown2.jpg'],
        }, 
        name: 'CRO 909', 
        description: 'Comfortable sofa set for any living room.',
        offer: 'Sale 15%', 
        price: 2500, 
        colors: ['lightgray', 'brown'], 
        special: 'set', 
        category: 'Furniture', 
        subcategory: 'Sofas', 
        options: [
            { size: '90 x 40 x 100' }, 
            { size: '95 x 42 x 105' }
        ], 
        specifications: { assembly: 'Professional', care: 'Vacuum regularly', material: 'Fabric' }, 
        availability: [{ branch: 'Store A', address: '456 Elm St', quantity: 4 }, { branch: 'Store C', address: '101 Pine St', quantity: 2 }] 
    },
    { id: 'SKU-1800', 
        imgSrc: 'images/vase4.webp', 
        name: 'Murel 707', 
        description: 'Decorative vase set for a stylish touch.',
        offer: 'Sale 25%', 
        price: 90, 
        colors: [], 
        special: 'set', 
        category: 'Decor', 
        subcategory: 'Vases', 
        options: [
            { size: '30 x 2 x 30' }
        ], 
        specifications: { assembly: 'None', care: 'Wipe clean', material: 'Ceramic' }, 
        availability: [{ branch: 'Store B', address: '789 Oak St', quantity: 8 }] 
    },
    { id: 'SKU-1900', 
        imgSrc: 'images/pillow.jpg', 
        name: 'Soho 353', 
        description: 'Soft and cozy pillow set for any space.',
        offer: 'Buy Now', 
        price: 70, 
        colors: [], 
        special: 'set', 
        category: 'Accessories', 
        subcategory: 'Cushions', 
        options: [
            { size: '40 x 1 x 40' }
        ], 
        specifications: { assembly: 'None', care: 'Spot clean', material: 'Polyester' }, 
        availability: [{ branch: 'Main Store', address: '123 Main St', quantity: 10 }, { branch: 'Store A', address: '456 Elm St', quantity: 5 }] 
    },
    { id: 'SKU-2000', 
        imgSrc: 'images/chair6.webp', 
        name: 'Amer 030', 
        description: 'Stylish and comfortable chair set.',
        offer: 'Sale 10%', 
        price: 1600, 
        colors: [], 
        special: 'set', 
        category: 'Furniture', 
        subcategory: 'Chairs', 
        options: [
            { size: '100 x 16 x 60' }, 
            { size: '105 x 18 x 65' }
        ], 
        specifications: { assembly: 'Professional', care: 'Dust with a dry cloth', material: 'Leather' }, 
        availability: [{ branch: 'Store A', address: '456 Elm St', quantity: 7 }, { branch: 'Store C', address: '101 Pine St', quantity: 5 }] 
    },
    {
        id: 'SKU-2100',
        imgSrc: 'images/vase5.jpg',
        name: 'Stela 050',
        description: 'Elegant vase set to enhance your decor.',
        offer: 'Sale 25%',
        price: 120,
        colors: [],
        special: 'set',
        category: 'Decor',
        subcategory: 'Vases',
        options: [{ size: '35 x 3 x 35' }],
        specifications: { assembly: 'None', care: 'Wipe clean', material: 'Glass' },
        availability: [{ branch: 'Store B', address: '789 Oak St', quantity: 6 }]
    },
    {
        id: 'SKU-2200',
        imgSrc: 'images/chairs.avif',
        name: 'Nutto 504',
        description: 'Modern chair set for a fresh look.',
        offer: 'Buy Now',
        price: 1100,
        colors: [],
        special: 'set',
        category: 'Furniture',
        subcategory: 'Chairs',
        options: [{ size: '95 x 12 x 55' }, { size: '100 x 14 x 60' }],
        specifications: { assembly: 'Easy', care: 'Wipe clean', material: 'Fabric' },
        availability: [{ branch: 'Main Store', address: '123 Main St', quantity: 7 }, { branch: 'Store C', address: '101 Pine St', quantity: 5 }]
    },
    {
        id: 'SKU-2300',
        imgSrc: 'images/vase.webp',
        images: {
            black: ['images/vase.webp'],
            cornsilk: ['images/vase-white.jpg'],
        }, 
        name: 'Tuta 440',
        description: 'Decorative vase set for adding elegance.',
        offer: 'Sale 15%',
        price: 75,
        colors: ['black', 'cornsilk'],
        special: 'set',
        category: 'Decor',
        subcategory: 'Vases',
        options: [{ size: '25 x 2 x 25' }],
        specifications: { assembly: 'None', care: 'Wipe clean', material: 'Ceramic' },
        availability: [{ branch: 'Store C', address: '101 Pine St', quantity: 9 }]
    },
    {
        id: 'SKU-2400',
        imgSrc: 'images/coffe-table3.jpg',
        name: 'Zino 080',
        description: 'Functional coffee table set for modern homes.',
        offer: 'Buy Now',
        price: 400,
        colors: [],
        special: 'set',
        category: 'Furniture',
        subcategory: 'Tables',
        options: [{ size: '50cm x 15kg x 100cm' }],
        specifications: { assembly: 'Assembly required', care: 'Wipe with a damp cloth', material: 'Wood' },
        availability: [{ branch: 'Main Store', address: '123 Main St', quantity: 5 }, { branch: 'Second Store', address: '456 Elm St', quantity: 3 }]
    },
    {
        id: 'SKU-2500',
        imgSrc: 'images/lamp.jpg',
        images: {
            peru: ['images/lamp.jpg'],
            cornsilk: ['images/lamp-white.jpg', 'images/lamp-white-1.jpg'],
            darkred: ['images/lamp-red.jpg', 'images/lamp-red-1.jpg'],
            olive: ['images/lamp-olive.jpg', 'images/lamp-olive-1.jpg']
        },
        name: 'Fema 702',
        description: 'Stylish lamp set to brighten up your space.',
        offer: 'Sale 15%',
        price: 200,
        colors: ['peru','cornsilk', 'darkred', 'olive'],
        special: 'set',
        category: 'Accessories',
        subcategory: 'Lamps',
        options: [{ size: '30cm x 3kg x 15cm' }, { size: '40cm x 4kg x 20cm' }],
        specifications: { assembly: 'No assembly required', care: 'Dust regularly', material: 'Metal and fabric' },
        availability: [{ branch: 'Main Store', address: '123 Main St', quantity: 10 }]
    },
    {
        id: 'SKU-2600',
        imgSrc: 'images/vase3.webp',
        name: 'Zwin 011',
        description: 'Decorative vase set with a modern design.',
        offer: 'Sale 25%',
        price: 100,
        colors: [],
        special: 'set',
        category: 'Decor',
        subcategory: 'Vases',
        options: [{ size: '20cm x 1kg x 10cm' }],
        specifications: { assembly: 'No assembly required', care: 'Clean with a soft cloth', material: 'Ceramic' },
        availability: [{ branch: 'Main Store', address: '123 Main St', quantity: 7 }, { branch: 'Second Store', address: '456 Elm St', quantity: 4 }]
    },
    {
        id: 'SKU-2700',
        imgSrc: 'images/wood-bowl.webp',
        name: 'XEE 455',
        description: 'Unique wooden bowl set for a rustic touch.',
        offer: 'Sale 25%',
        price: 150,
        colors: [],
        special: 'set',
        category: 'Decor',
        subcategory: 'Bowls',
        options: [{ size: '15cm x 2kg x 25cm' }, { size: '20cm x 3kg x 30cm' }],
        specifications: { assembly: 'No assembly required', care: 'Wipe with a dry cloth', material: 'Wood' },
        availability: [{ branch: 'Main Store', address: '123 Main St', quantity: 8 }]
    }
];