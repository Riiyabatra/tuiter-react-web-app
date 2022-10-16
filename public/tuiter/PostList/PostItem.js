const PostItem = (post) => {
    return(`
        <div class="row">
            <div class="col-2">
                <img class="wd-image" src=${post.image} alt="riya">
            </div>
            <div class="col">
                <i class="fa fa-ellipsis-h wd-ellipsis"></i>
                <p class="wd-author">${post.userName}<img src="../../images/verifiedWhite.png" class="wd-verified" alt="verified"/>
                <span class="wd-handle">${post.userHandle} . ${post.time}</span>
                </p>
                <div>
                    <h6>${post.heading}</h6>
                </div>
                <div class="wd-bookmark-feed">
                    <div>
                        <img class="wd-feed-image" src=${post.postimage} alt="feed">
                    </div>
                    <div class="wd-feed-content">
                        <p class="wd-feed-title">${post.postHeading}</p>
                        <p class="wd-feed">${post.postDescription}</p>
                    </div>
                </div>
                <div class="wd-bookmark-footer">
                    <a href="#"><i class="fa fa-comment-o wd-icon-color wd-icon-area" aria-hidden="true"><span class="m-2 wd-count">${post.comments}</span></i></a>
                    <a href="#"><i class="fa fa-retweet wd-icon-color wd-icon-area" aria-hidden="true"><span class="m-2 wd-count">${post.retweets}</span></i></a>
                    <a href="#"><i class="fa fa-heart wd-icon-area wd-icon-color" aria-hidden="true"><span class="wd-count m-2 wd-liked">${post.likes}</span></i></a>
                    <a href="#"><i class="fa fa-upload wd-icon-color wd-icon-area" aria-hidden="true"></i></a>
                </div>
            </div>
            <hr/>
        </div>
    `);
}

export default PostItem;