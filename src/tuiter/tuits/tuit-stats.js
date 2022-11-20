import React from "react";
import { updateTuitThunk } from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";
import '@fortawesome/fontawesome-free/css/all.css';

const TuitsStats = ({post}) => {
    const dispatch = useDispatch();
    return(
            <div className="wd-bookmark-footer">
                <a href="#top" className="wd-text-decoration"><i className="fa fa-comment wd-icon-color wd-icon-area" aria-hidden="true"><span
                    className="m-2 wd-count">{post.replies}</span></i> </a>
                <a href="#top" className="wd-text-decoration"><i className="fa fa-retweet wd-icon-color wd-icon-area" aria-hidden="true"><span
                    className="m-2 wd-count">{post.retuits}</span></i> </a>
                <a href="#top" className="wd-text-decoration"><i onClick={() => dispatch(updateTuitThunk({...post, likes: post.likes + 1, liked: true}))} className= {`${post.liked === true ? `fa fa-heart wd-icon-area wd-icon-color wd-icon-color-red` : `fa fa-heart wd-icon-area wd-icon-color`}`} aria-hidden="true"><span
                    className="wd-count m-2 wd-liked">{post.likes}</span></i> </a>
                <a href="#top" className="wd-text-decoration"><i onClick={() => dispatch(updateTuitThunk({...post, dislikes: post.dislikes + 1}))} className= "fa fa-thumbs-down wd-icon-area wd-icon-color" aria-hidden="true"><span
                    className="wd-count m-2 wd-liked">{post.dislikes}</span></i> </a>
                <a href="#top" className="wd-text-decoration"><i className="fa fa-upload wd-icon-color wd-icon-area " aria-hidden="true"></i> </a>
            </div>
    );
};

export default TuitsStats;

