import React from 'react';
import CommentIndex from '../components/Comment/index';

const Comment = (props) => {
    var {match} = props;
    return (
        <CommentIndex match={match}/>
    );
};

export default Comment;