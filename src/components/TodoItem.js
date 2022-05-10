import React from "react";
import "../TodoItem.css";

const PostItem = (props) => {
    return (
        <div>
            {props.post.complete &&            
            <div className='post complete' {...props}>
                <s>{props.post.title}</s>
                <div>
                    <s>{props.post.date}</s>
                </div>
            </div>
            }
            {!props.post.complete &&            
            <div className='post' id={props.post.id} {...props}>
                <p>{props.post.title}</p>
                <div>
                    <p>{props.post.date}</p>
                </div>
            </div>
            }
        </div>     
    )
}

export default PostItem;