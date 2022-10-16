import Posts from "./Posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return (`
           <div>
                ${Posts.map(post => {
                return PostSummaryItem(post)
                }).join('')
            }
            <hr/>
           </div>
    `);
}

export default PostSummaryList;