import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import TuitsStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitsItem = (
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
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return(
        <div className="row border border-secondary p-3">
            <div className="col-2">
                <img className="wd-image" src={`${post.image}`} alt="riya"/>
            </div>
            <div className="col">
                <div>
                    <i className="fa fa-ellipsis-h wd-ellipsis"></i>
                    <i className="bi bi-x-lg float-end wd-float-right"
                       onClick={() => deleteTuitHandler(post._id)}></i>
                    <div className="wd-author col-10">{post.userName}<img src="../../images/img.png"
                                                                 className="wd-verified" alt="verified"/>
                        <span className="wd-handle">{post.handle} . {post.time}</span>
                    </div>
                </div>
                <div className="wd-bookmark-feed"></div>
                    <div className="wd-feed-content">
                        <p className="wd-feed">{post.tuit}</p>
                </div>
                <TuitsStats
                    key={post._id} post={post}/>
            </div>
        </div>
    );
};

export default TuitsItem;

