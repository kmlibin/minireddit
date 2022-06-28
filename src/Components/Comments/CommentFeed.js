import { useEffect, useState } from "react";

//function for fetching comments from API
import { getPostComments } from "../../Util/commentsFetch";

//time formatting
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

//styles are in feedcard.css

export default function CommentFeed({ permalink }) {
    const [comments, setComments] = useState([]);


    useEffect(() => {
        getPostComments(permalink)
            .then(jsonComments => setComments(
                jsonComments.map(comment => (
                    <div key={comment.id} className="comments">
                        <div className="comments-info">
                            <li>{comment.author}</li>
                            <li className="italics">{formatDistanceToNow(new Date(comment.created_utc * 1000), 20220625, { addSuffix: true })}</li>
                        </div>
                        <p>{comment.body}</p>
                    </div>

                ))));

    }, [permalink]);

    return (
        <div className="comment-list">
            {comments}
        </div>
    );
};

