const PostSummaryItem = (post) => {
    return(`
        <div class="row">
            <hr/>
            <div class="col-9">
                <p class="wd-gray-color">${post.topic}</p>
                <p class="wd-bold">${post.userName} <img src="../../images/verifiedWhite.png" class="wd-verified" alt="react"/> <span class=".text-secondary wd-gray-color">- ${post.time}</span></p>
                <p class="wd-bold">${post.title}</p>
            </div>
            <div class="col align-self-center">
                <img src=${post.image} class="wd-logo" alt="react"/>
            </div>
        </div>
    `);
}

export default PostSummaryItem;
