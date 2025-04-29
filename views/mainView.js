
    function mainView() {
        const page = model.app.currentPage; 

        let currentPageView = '';
        

        if (page === 'homePage') {
            currentPageView = homePageView(); 
        }
        else if (page === 'loginReg') {
            currentPageView =  loginRegView();
        }
        else if (page === 'catalog') {
            currentPageView =  catalogView();
        }
         else if (page === 'itemPage') {
            currentPageView = itemPageView();
        }
        else if (page === 'searchFilter') {
            currentPageView = searchFilterView();
        }
        else if (page === 'adminPage') {
            currentPageView = adminPageView(); //admin's stuff
        }
        else if (page === 'newlyRegistered') {
            currentPageView = newlyRegisteredView();
        }
        else if (page === 'rewards') {
            currentPageView = rewardsView();
        }

        else if (page === 'findingPage') {
            currentPageView = findingView();
        }
        else if (page === 'registerFinding') {
            currentPageView = registerFindingView();
        }
        else if (page === 'registerUser') {
            currentPageView = registerUserView();
        }
        else if (page === 'userArea') {
            currentPageView = userAreaView();
        }
        else if (page === 'siteMap') {
            currentPageView = siteMapView();
        }
    // console.log(currentPageView);
    // <!--${headerView()} -->   
    document.getElementById('app').innerHTML = /*HTML*/`   
        <div class="container">
            <h1 style = "color: red; max-height: 50px;">PLUG FOR HEADER</h1> 
            <div class = "userInfo">
            ${model.app.previousPage == '' ? `` : `<button onclick = "goToPreviousPage()">⟵</button>`}
            ${getUserName() ?? ''}
            </div>
            ${currentPageView}
            ${footerView()}
        </div>
    `;
}