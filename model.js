const model = {
    
    app : {
        currentUser: '',
        currentPage: 'mainPage', 
        pages : {
            login: 'loginReg',
            findings: 'findingsPage',
            catalog: 'catalog',
            search: 'searchFilter',
            adminPage: 'adminPage',
            adminCatalog: 'adminCatalog',
            itemsAdmin: 'itemPageForAdmin',
            newlyRegistered: 'newlyRegistered',
            rewards: 'rewards',
            registerFinding: 'registerFinding'
        }
    },
    
    inputs : {
        login: {
            userName: '',
            password: ''
        },
        catalog: {
            sort: '',
        },
        searchFilter: {
            name: '',
            location: '',
            isEdible: false,
            isPoisonous: false,
            sort: '',
        },
       //lang tilbake i loggen nice 
        // rewards: { 
        //     selectedRewardId: 0, 

        // },
        
        registerFinding: {
            name: '',
            img: '',
            locationId: '', 
            description: ''
        },
        addLocationItemPage: {
            locationId: ''
    
    },
    
    data : {
        users: [
            {id: 1, name: 'Dag', email: 'Dag@example.com', pass: '*********', type: 'admin', registerDate: '2023-01-01'},
            {id: 2, name: 'Linn', email: 'linn@example.com', pass: '*********', type: 'user', registerDate: '2023-02-15'}
        ],
        
        rewards: [
            {id: 1, text: 'Pølse', shopId: 1, imgId: 3, useable: 1},
            {id: 2, text: 'Burger', shopId: 2, imgId: 3, useable: 2}
        ],
        
        shops: [
            {id: 1, name: 'Esso Larvik', address: 'Gata 12'},
            {id: 2, name: 'Shell Larvik', address: 'Veien 7'}
        ],
        
        userRewards: [
            {userId: 1, rewardId: 1, dateEarned: '2025-03-26'},
            {userId: 2, rewardId: 1, dateEarned: '2025-03-20'}
        ],
        
        location: [
            {id: 1, name: 'Nordmarka', description: 'Populært turområde i Oslo'},
            {id: 2, name: 'Baneheia', description: 'Skogsområde i Kristiansand'}
        ],
        
        findings: [
            {id: 1, userId: 1, itemId: 1, locationId: 2, dateFind: '2025-03-26', description: 'Mange kantareller!!! Bak et tre.', acceptedToBePublished: true},
            {id: 2, userId: 2, itemId: 2, locationId: 2, dateFind: '2025-03-20', description: 'Her var det lite blåbær..', acceptedToBePublished: false}
        ],
        
        items: [
            {id: 1, name: 'Kantarell', latinName: 'Cantharellus cibarius', description: "Gylden sopp ved foten av treet.", type: 1},
            {id: 2, name: 'Blåbær', latinName: 'Vaccinium myrtillus', description: "Blåbær er en flerårig dvergbusk i bærlyngslekta", type: 1},
            {id: 3, name: 'Fluesopp', latinName: 'Amanita muscaris', description: "Dreper fluer med vann samlet i hetten på gamle sopp", type: 3}
        ],
        
        types: [
            {id: 1, name: 'Sopp'},
            {id: 2, name: 'Bær'},
            {id: 3, name: 'Plant'}
        ],
        
        lookALikes: [
            {itemId: 1, looksLikeItemId: 3},
            {itemId: 3, looksLikeItemId: 4},
            {itemId: 3, looksLikeItemId: 4},
            {itemId: 1, looksLikeItemId: 2},
            {itemId: 2, looksLikeItemId: 3},
            {itemId: 3, looksLikeItemId: 3},
            {itemId: 1, looksLikeItemId: 3},
            {itemId: 1, looksLikeItemId: 3}
        ],  
        
        itemCharacteristics: [
            {itemId: 1, type: 1},
            {itemId: 2, type: 1},
            {itemId: 3, type: 3}
        ],
        
        characteristics: [
            {itemId: 1, type: 'Edible'},
            {itemId: 2, type: 'Edible(if prepared in proper way)'},
            {itemId: 3, type: 'Non-Edible'}
        ],
        
        images: [
            {id: 1, filePath: 'mappe/findings/blaabaer.jpg'},
            {id: 2, filePath: 'mappe/findings/kantarell.jpg'},
            {id: 3, filePath: 'mappe/rewards/cola.jpg'}
        ],
        
        rewardImages: [
            {rewardId: 1, imgId: 1},
            {rewardId: 2, imgId: 3}
        ],
        
        findingImages: [
            {findingId: 1, imgId: 2}
        ]
    }
}
}
    
