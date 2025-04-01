const model = {
    
    app: {
        currentPage: 'mainPage',
        pages: { 
            login: "loginReg",
            findings: "findingsPage",
            catalog: "catalog",
            search: "searchFilter",
            adminPage: "adminPage",
            adminCatalog: "adminCatalog",
            itemsAdmin: "itemPageForAdmin",
            newlyRegistered: "newlyRegistered",
            rewards: "rewards",
            registerFinding: "registerFinding",
        }
    },

    
    inputs: {
        addFind: {},
        addUser: {},
        addPlace: {},
        addReward: {},
        addLookALike: {},
        addShop: {},
        changeDescriptionFind: {},
        changePhotoFind: {},
        changeItemText: {},
        changeItemDescription: {},
        changePlaceText: {},
        changeShopAddress: {},
        changeRewardText: {},
        changeRewardPhoto: {},
    },

    
    data: {
        users: [
            { id: 1, name: "Dag", email: "dag@example.com", password: "*********", type: "admin", registerDate: "2023-01-01" },
            { id: 2, name: "Linn", email: "linn@example.com", password: "*********", type: "user", registerDate: "2023-02-15" }
        ],

        rewards: [
            { id: 1, text: "Pølse", imgId: 3, useable: 1 },
            { id: 2, text: "Burger", imgId: 3, useable: 2 }
        ],

        shops: [
            { id: 1, name: 'Esso Larvik', address: 'Gata 12' },
            { id: 2, name: 'Shell Larvik', address: 'Veien 7' }
        ],

        rewardShops: [
            { rewardId: 1, shopId: 1 },
            { rewardId: 2, shopId: 1 },
            { rewardId: 2, shopId: 2 }
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
            { id: 1, userId: 1, itemId: 1, foodPlaceId: 2, dateFind: "2025-03-26" },
            { id: 2, userId: 2, itemId: 2, foodPlaceId: 2, dateFind: "2025-03-20" }
        ],

        items: [
            { id: 1, name: 'Kantarell', latinName: 'Cantharellus cibarius', description: "Gylden sopp ved foten av treet." }
        ],

        itemTypes: [
            { itemId: 1, typeId: 1 },
            { itemId: 2, typeId: 2 },
            { itemId: 3, typeId: 1 }
        ],

        types: [
            { id: 1, name: 'Sopp' },
            { id: 2, name: 'Bær' },
            { id: 3, name: 'Plante' }
        ],

        lookALikes: [
            { itemId: 1, looksLikeItemId: 3 },
            { itemId: 3, looksLikeItemId: 4 },
            { itemId: 1, looksLikeItemId: 2 },
            { itemId: 2, looksLikeItemId: 3 },
            { itemId: 3, looksLikeItemId: 3 },
            { itemId: 1, looksLikeItemId: 3 },
            { itemId: 1, looksLikeItemId: 3 }
        ],

        itemCharacteristics: [
            { itemId: 1, type: 1 },
            { itemId: 2, type: 1 },
            { itemId: 3, type: 2 },
            { itemId: 4, type: 3 }
        ],

        characteristics: [
            { itemId: 1, type: 'Edible' },
            { itemId: 2, type: 'Edible (if prepared properly)' },
            { itemId: 3, type: 'Non-Edible' }
        ],

        images: [
            { id: 1, filePath: "mappe/findings/blaabaer.jpg" },
            { id: 2, filePath: "mappe/findings/kantarell.jpg" },
            { id: 3, filePath: "mappe/rewards/cola.jpg" }
        ]
    }
};




