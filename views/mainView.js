
    function mainView() {
        const page = model.app.currentPage; 

        let currentPageView = '';

        if (page === 'homePage') {
            currentPageView = `TEST LOL`; 
            // homePageView(); 
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
        else if (page === 'registerFinding') {
            currentPageView = registerFindingView();
        }
  
    // console.log(currentPageView);
    // <!--${headerView()} -->   
    document.getElementById('app').innerHTML = /*HTML*/`   
        <div class="container">
            <h1>PLUG</h1>        
            
            ${currentPageView}
            <br>            
            <div>
                Todo:
                <ul>
                    <li><s>Søke brukere</s></li>
                    <li><s>Legge til brukere</s></li>
                    <li>Forbedre routing?</li>
                    <li>Øke gjenbrukbarhet?</li>
                    <li><s>Slette brukere</s></li>                    
                </ul>
            </div>
        </div>
    `;
}