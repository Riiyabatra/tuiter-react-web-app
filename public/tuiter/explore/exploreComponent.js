import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="wd-relative">
                <input class="wd-search-width" type="text" placeholder="Search Twitter"/>
                <i class="fa fa-search wd-search-icon"></i>
                <a href="explore-settings.html"><i class="fa fa-cog wd-settings-icon"></i></a>
            </div>
            <ul class="nav nav-tabs p-2 nav-fill">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item d-none d-md-inline">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>
            </ul>
            <div class="row h-30 wd-image-div">
                <img class="wd-image-width" src="../../images/starship.jpeg"
                     alt="...">
                <div class="wd-image-text bottom-0">
                    <p class="m-2">SpaceX's Starship</p>
                </div>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;

