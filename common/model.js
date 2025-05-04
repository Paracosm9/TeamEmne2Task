const model = {
    
    app : {
        currentPage: 'homePage', 
        previousPage: '',
        currentUser: 0,
        currentItem: 0, 
        currentFinding: 0, 

        pages : {
            login: 'loginReg',
            item: 'itemPage',
            finding: 'findingPage',
            catalog: 'catalog',
            adminPage: 'adminPage',
            homeAndMain: 'homePage',
            newlyRegistered: 'newlyRegistered',
            rewards: 'rewards',
            registerFinding: 'registerFinding',
            thankYouAddedFind: 'thankYouAdded',
            registerUser: 'registerUser',
            userArea: 'userArea',
            siteMap: 'siteMap',
        }
    },
    
    inputs : {
        login: {
            userName: '',
            password: ''
        },
        catalog: {
            sort: '',
            items: [],
            location: '',
            isEdible: false,
            isPoisonous: false,
            isPartiallyEdible: false,
            name: '',
        },
        
        registerFinding: {
            name: '',
            img: '',
            locationName: '', 
            description: ''
        },
        registerUser: {
            name: '', 
            email: '', 
            pass: '', 
        },
        userArea : {
            img: '',
            pass: '',
            repeatPass: ''
        }, 
        itemChange: {
            id: 0, 
            name: '', 
            img: '',
            latinName: '',
            description: ''
        },
        adminPage: {
            findings: [], 
            itemImg: '', 
            itemId: 0, 
            name: '', 
            latinName: '', 
            description: '', 
            type: 0, 
            characteristics: 0
        }
},
    
    data : {
        users: [
            {id: 1, name: 'Dag', email: 'Dag@example.com', pass: '12345', type: 'admin', registerDate: '2023-01-01'},
            {id: 2, name: 'Linn', email: 'linn@example.com', pass: '54321', type: 'user', registerDate: '2023-02-15'}
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
            {id: 1, userId: 1, itemId: 1, locationId: 2, dateFind: '2025-03-27T08:55:00', description: 'Mange kantareller!!! Bak et tre.', acceptedToBePublished: true},
            {id: 2, userId: 1, itemId: 1, locationId: 2, dateFind: '2025-03-29T08:55:00', description: 'Kantareller!! Bak et tre.', acceptedToBePublished: true},
            {id: 3, userId: 1, itemId: 1, locationId: 2, dateFind: '2025-03-30T08:55:00', description: 'Sopp!!! Bak et tre.', acceptedToBePublished: true},
            {id: 4, userId: 1, itemId: 1, locationId: 1, dateFind: '2025-04-30T08:55:00', description: 'Sopp!!! Mange!', acceptedToBePublished: true},
            {id: 5, userId: 2, itemId: 2, locationId: 2, dateFind: '2025-03-22T08:55:00', description: 'Her var det lite blåbær..', acceptedToBePublished: false}, 
            {id: 6, userId: 2, itemId: 0, locationId: 1, dateFind: '2025-05-01T08:55:00', description: 'Her var det lite bringebær, rett i butikken!', acceptedToBePublished: false}, 
        ],
        
        items: [
            {id: 1, name: 'Kantarell', latinName: 'Cantharellus cibarius', description: "Gylden sopp ved foten av treet.", type: 1},
            {id: 2, name: 'Blåbær', latinName: 'Vaccinium myrtillus', description: "Blåbær er en flerårig dvergbusk i bærlyngslekta", type: 2},
            {id: 3, name: 'Fluesopp', latinName: 'Amanita muscaris', description: "Dreper fluer med vann samlet i hetten på gamle sopp", type: 1}
        ],
        
        types: [
            {id: 1, name: 'Sopp'},
            {id: 2, name: 'Bær'},
            {id: 3, name: 'Plant'}
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
            {id: 1, filePath: 'common/images/findings/Blåbær.jpg'},
            {id: 2, filePath: 'mappe/findings/kantarell.jpg'},
            {id: 3, filePath: 'mappe/rewards/cola.jpg'},
            {id: 4, filePath: 'common/images/items/Hygrophoropsis_aurantiaca.jpg'},
            {id: 5, filePath: 'common/images/items/kantarell_item.jpg'},
            {id: 6, filePath: 'common/images/items/standard_kantarell_37810.jpg'},
            {id: 7, filePath: 'common/images/findings/kant_find1.jpg'},
            {id: 8, filePath: 'common/images/findings/kant_find2.jpg'},
            {id: 9, filePath: 'common/images/findings/kant_find3.jpg'},
            {id: 10, filePath: 'common/images/items/Vaccinium_uliginosum_fruit.jpg'},
            {id: 11, filePath: 'common/images/items/fluesopp_item.jpg'},
            {id: 12, filePath: 'common/images/userimages/default_user.png'},
            {id: 13, filePath: 'common/images/userimages/not_default_userpic.png'},
            {id: 14, filePath: 'common/images/findings/blbrry_finding.png'},
            {id: 15, filePath: 'common/images/findings/raspberry_find.jpg'},
        ],
        
        rewardImages: [
            {rewardId: 1, imgId: 1},
            {rewardId: 2, imgId: 3}
        ],
        
        findingImages: [
            {findingId: 1, imgId: 7},
            {findingId: 2, imgId: 8},
            {findingId: 3, imgId: 9},
            {findingId: 4, imgId: 7},
            {findingId: 5, imgId: 14},
            {findingId: 6, imgId: 15},
        ], 

        itemsImages: [
            {itemId: 1, imgId: 4},
            {itemId: 1, imgId: 5},
            {itemId: 2, imgId: 10},
            {itemId: 3, imgId: 11}
        ], 
        userPicImages: [
            {userId: 1, imgId: 13}, 
            {userId: 2, imgId: 12}, 
        ]
    }
}



