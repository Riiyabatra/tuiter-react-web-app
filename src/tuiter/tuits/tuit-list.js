import React from "react";
import {useSelector} from "react-redux";
import TuitsItem from "./tuit-item";

const TuitsList = () => {
    const postsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <div>
                        <TuitsItem
                            key={post._id} post={post}/>
                    </div>
                )
            }
        </ul>
    );
};

export default TuitsList;

