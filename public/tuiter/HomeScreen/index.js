/* eslint-env jquery */
import NavigationSidebar from "../NavigationSideBar/index.js";
import PostSummaryList from "../PostSummaryList";
import PostList from "../PostList";

function exploreComponent() {
    $('#wd-explore').append(`
       <div class="row mt-2">
           <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                ${NavigationSidebar('home')}
           </div>
           <div class="col-10 col-lg-7 col-xl-6">
                ${PostList()}
           </div>
           <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                ${PostSummaryList()}
           </div>
       </div>
   `);
}
$(exploreComponent);