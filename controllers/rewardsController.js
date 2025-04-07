function getArrayOfRewards() {
    let rewards = model.data.rewards;
    let rewardsWithDetails = [];

    for (const reward of rewards) {
        let rewardId = reward.id;
        let shopId = reward.shopId;
        let imagePath = getRewardImage(rewardId);
        let shopName = getShop(shopId);

        rewardsWithDetails.push({
            id: rewardId,
            text: reward.text,
            shopName: shopName,
            imagePath: imagePath,
            useable: reward.useable
        });
    }

    model.inputs.rewards.rewardsList = rewardsWithDetails;
    return rewardsWithDetails;
}

function getShop(shopId) {
    let shops = model.data.shops;
    for (const shop of shops) {
        if (shop.id == shopId) {
            return shop.name;
        }
    }
    return '';
}

function getRewardImage(rewardId) {
    let rewardImages = model.data.rewardImages;
    let images = model.data.images;
    let imageId = 0;
    let imagePath = '';

    for (const rewardImg of rewardImages) {
        if (rewardImg.rewardId == rewardId) {
            imageId = rewardImg.imgId;
            break;
        }
    }

    for (const image of images) {
        if (image.id == imageId) {
            imagePath = image.filePath;
            break;
        }
    }

    return imagePath;
}
