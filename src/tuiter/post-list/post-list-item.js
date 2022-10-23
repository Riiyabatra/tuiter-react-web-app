import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';

const PostListItem = (
    {
        post = {
            "userName": "Elon Musk",
            "userHandle": "@elonmusk",
            "time": "23h",
            "heading": "Amazing show about @Inspiration4x mission!",
            "image": "../../images/elon.jpeg",
            "postimage": ",../../images/elonPost.jpeg",
            "postHeading": "CountDown: Inspiration4 Mission to Space | Netflix Official Site",
            "postDescription": "From training to launch to landing, this all access docuseries rides along with the Insipiration4 crew on the first all-civilian orbital space...",
            "comments": "4.2K",
            "retweets": "3.5K",
            "likes": "37.5K"
        }
    }
) => {
    return(
        <div className="row">
            <div className="col-2">
                <img className="wd-image" src={`${post.image}`} alt="riya"/>
            </div>
            <div className="col">
                <i className="fa fa-ellipsis-h wd-ellipsis"></i>
                <p className="wd-author">{post.userName}<img src="../../images/img.png"
                                                              className="wd-verified" alt="verified"/>
                    <span className="wd-handle">{post.userHandle} . {post.time}</span>
                </p>
                <div>
                    <h6>{post.heading}</h6>
                </div>
                <div className="wd-bookmark-feed">
                    <div>
                        <img className="wd-feed-image" src={`${post.postimage}`} alt="feed"/>
                    </div>
                    <div className="wd-feed-content">
                        <p className="wd-feed-title">{post.postHeading}</p>
                        <p className="wd-feed">{post.postDescription}</p>
                    </div>
                </div>
                <div className="wd-bookmark-footer">
                    <a href="#top" className="wd-text-decoration"><i className="fa fa-comment-o wd-icon-color wd-icon-area" aria-hidden="true"><span
                        className="m-2 wd-count">{post.comments}</span></i></a>
                    <a href="#top" className="wd-text-decoration"><i className="fa fa-retweet wd-icon-color wd-icon-area" aria-hidden="true"><span
                        className="m-2 wd-count">{post.retweets}</span></i></a>
                    <a href="#top" className="wd-text-decoration"><i className="fa fa-heart wd-icon-area wd-icon-color" aria-hidden="true"><span
                        className="wd-count m-2 wd-liked">{post.likes}</span></i></a>
                    <a href="#top" className="wd-text-decoration"><i className="fa fa-upload wd-icon-color wd-icon-area" aria-hidden="true"></i></a>
                </div>
            </div>
            <hr/>
        </div>
    );
};

export default PostListItem;

