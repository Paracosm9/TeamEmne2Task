function rewardsView() {
    if (!model.inputs.rewards) {
        model.inputs.rewards = { searchText: '', rewardsList: [] };
    }

    if (model.inputs.rewards.rewardsList.length === 0) {
        getArrayOfRewards();
    }

    return drawRewardsView();
}

function drawRewardsView() {
    let divApp = ``;
    divApp = /*HTML*/`
        ${drawRewardSearch()}
        ${drawRewards()}
        ${drawRewardButtons()}
    `;
    return divApp;
}

function drawRewardSearch() {
    let searchHtml = /*HTML*/`                              
        <input 
            type="text" 
            name="searchReward" 
            id="searchReward" 
            placeholder="Search Reward" 
            oninput="model.inputs.rewards.searchText = this.value; updateView()"
            style="padding: 5px;"
        >
        <br><br>
        <hr>
    `;
    return searchHtml;
}



function drawRewards() {
    let rewardsHtml = ``;
    let rewards = model.inputs.rewards.rewardsList;

    for (const reward of rewards) {
        let imageHtml = '';
        if (reward.imagePath) {
            imageHtml = `<img src="${reward.imagePath}" alt="${reward.text}" style="height: 100px;">`;
        } else {
            imageHtml = `<div style="height: 100px;">[Bilde mangler]</div>`;
        }

        let buttonText = '';
        if (reward.shopName) {
            buttonText = reward.text + ' fra ' + reward.shopName;
        } else {
            buttonText = 'Velg fra hvilken butikk';
        }

        let oneRewardHtml = /*HTML*/`
            <div style="border: 5px solid black; margin: 20px; padding: 10px; text-align: center; width: 200px;">
                ${imageHtml}
                <br>
                <button style="margin-top: 10px; background-color: lavender;">${buttonText}</button>
            </div>
            <br>
        `;
        rewardsHtml += oneRewardHtml;
    }

    return rewardsHtml;
}

function drawRewardButtons() {
    let buttonHtml = /*HTML*/`
        <br>
        <button style="background-color: black; color: white; padding: 10px 20px;">godkjenn</button>
        <button style="background-color: black; color: white; padding: 10px 20px;">avbryt</button>
    `;
    return buttonHtml;
}
