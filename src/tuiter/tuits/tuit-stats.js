import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';

const TuitsStats = (
    {
        post = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "../../images/elon.jpeg",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    return(
            <div className="wd-bookmark-footer">
                <a href="#top" className="wd-text-decoration"><i className="fa fa-comment wd-icon-color wd-icon-area" aria-hidden="true"><span
                    className="m-2 wd-count">{post.replies}</span></i> </a>
                <a href="#top" className="wd-text-decoration"><i className="fa fa-retweet wd-icon-color wd-icon-area" aria-hidden="true"><span
                    className="m-2 wd-count">{post.retuits}</span></i> </a>
                <a href="#top" className="wd-text-decoration"><i className= {`${post.liked === true ? `fa fa-heart wd-icon-area wd-icon-color wd-icon-color-red` : `fa fa-heart wd-icon-area wd-icon-color`}`} aria-hidden="true"><span
                    className="wd-count m-2 wd-liked">{post.likes}</span></i> </a>
                <a href="#top" className="wd-text-decoration"><i className="fa fa-upload wd-icon-color wd-icon-area " aria-hidden="true"></i> </a>
            </div>
    );
};

export default TuitsStats;

