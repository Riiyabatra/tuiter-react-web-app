const NavigationSidebar = (active) => {
    return(`<div>
            <ul class="list-group">
                <li class="list-group-item">
                    <i class="fab fa-twitter fa-1x"></i>
                </li>
                <li class="list-group-item ${active === 'home' ? 'active' : ''}">
                    <a href="../HomeScreen/index.html" style="color: white; text-decoration: None">
                        <span>
                            <i class="fa fa-home fa-1x"></i>
                            <span class="d-none d-xl-inline"> Home</span>
                        </span>   
                    </a>
                </li>
                <li class="list-group-item ${active === 'explore' ? 'active' : ''}">
                    <a href="../explore/index.html" style="color: white; text-decoration: None">
                        <span>
                            <i class="fa-solid fa-hashtag fa-1x" style="color: white"></i>
                            <span class="d-none d-xl-inline"> Explore</span>
                        </span>
                    </a>
                </li>
                <li class="list-group-item">
                    <i class="fa-solid fa-bell fa-1x"></i>
                    <span class="d-none d-xl-inline"> Notifications</span>
                </li>
                <li class="list-group-item">
                    <i class="fa-solid fa-envelope fa-1x"></i>
                    <span class="d-none d-xl-inline"> Messages</span>
                </li>
                <li class="list-group-item">
                    <i class="fa-solid fa-bookmark fa-1x"></i>
                    <span class="d-none d-xl-inline"> Bookmarks</span>
                </li>
                <li class="list-group-item">
                    <i class="fa-solid fa-list fa-1x"></i>
                    <span class="d-none d-xl-inline"> Lists</span>
                </li>
                <li class="list-group-item">
                    <i class="fa-solid fa-user fa-1x"></i>
                    <span class="d-none d-xl-inline"> Profile</span>
                </li>
                <li class="list-group-item">
                    <i class="fa-solid fa-circle-info fa-1x"></i>
                    <span class="d-none d-xl-inline"> More</span>
                </li>
            </ul>
            <div>
                <button class="btn btn-primary wd-image-width mt-2 rounded-pill w-100">
                    Tweet
                </button>
            </div>
         </div>`);
}
export default NavigationSidebar;

