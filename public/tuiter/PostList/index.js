import Posts from "./Posts.js";
import PostItem from "./PostItem.js";

const PostList = () => {
    return (`
           <div>
                ${Posts.map(post => {
                    return PostItem(post)
                    }).join('')
                }
           </div>
    `);
}

export default PostList;