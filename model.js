const database = {
    users: [
        { id: 1, name: "Dag", email: "Dag@example.com", pass: "*********", type: "admin", registerDate: "2023-01-01"},
        { id: 2, name: "Linn", email: "linn@example.com", pass: "*********", type: "user", registerDate: "2023-02-15"}
    ],

    rewards: [
        { id: 1, text: "Pølse på Esso", shop: "Esso" },
        { id: 2, text: "Burger på Shell", shop: "Shell" }
    ],

    userRewards: [
        { userId: 1, rewardId: 1, dateEarned: "2025-03-26" },
        { userId: 2, rewardId: 1, dateEarned: "2025-03-20" }
    ],

    foodPlaces: [
        { placeId: 1, placeName: "Nordmarka", placeText: "Populært turområde i Oslo" },
        { placeId: 2, placeName: "Baneheia", placeText: "Skogsområde i Kristiansand" }
    ],

    findings: [
        { 
            id: 1, 
            firstUserId: 1, 
            dateFind: "2025-03-26", 
            foodImg: "blaabaer.jpg", 
            dangerousDoubles: "Trollbær (Atropa belladonna)", 
        },
        { 
            id: 2, 
            firstUserId: 2, 
            dateFind: "2025-03-20", 
            foodImg: "kantarell.jpg", 
            dangerousDoubles: "Falsk kantarell (Hygrophoropsis aurantiaca)", 
        }
    ],

    items: [
        {id: 1, name: 'Kantarell', latinName: 'Cantharellus cibarius', description: "Gylden sopp ved foten av treet.", }
    ],

    itemTypes: [
        {itemId: 1, typeId: 1},
        {itemId: 2, typeId: 2},
        {itemId: 3, typeId: 1},
    ], 

    types: [
        {id: 1, name: 'Sopp'},
        {id: 2, name: 'Bær'},
        {id: 3, name: 'Plant'}
    ],

    // itemTypes: [ not to discuss later with Dag 
    //     {itemId: 1, typeId: 'Sopp'},
    //     {itemId: 2, typeId: 'Bær'},
    //     {itemId: 3, typeId: 'Fisk'},
    //     {itemId: 4, typeId: 'Bær'}
    // ],
    
    itemCharacteristics: [
        {itemId: 1, type: 1},
        {itemId: 2, type: 1},
        {itemId: 3, type: 2},
        {itemId: 4, type: 3},
    ],

    characteristics: [
        {itemId: 1, type: 'Edible'},
        {itemId: 2, type: 'Edible(if prepared in proper way)'},
        {itemId: 3, type: 'Non-Edible'}
    ],
    

    foodAndPlaces: [
        { placeId: 1, foodId: 1 },
        { placeId: 2, foodId: 2 }
    ],

    images: [
        { imgId: "img_001", findingsId: 1, dateAdded: "2025-03-26" },
        { imgId: "img_002", findingsId: 2, dateAdded: "2025-03-20" }
    ]
};