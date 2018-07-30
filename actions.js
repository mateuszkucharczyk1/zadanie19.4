const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: uuid.v4()
    }
}

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        text,
        id: uuid.v4()
    }
}

function thumbUpComment(id, vote) {
    return {
        type: THUMB_UP_COMMENT,
        id: uuid.v4(),
        vote: vote
    }
}

function thumbDownComment(id, vote) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: uuid.v4(),
        vote: vote
    }
}


export const boundAddComment = text => dispatch(addComment(text));
export const boundRemoveComment = id => dispatch(removeComment(id));
export const boundEditComment = (id, text) => dispatch(editComment(id, text));
export const boundThumbUpComment = id => dispatch(thumbUpComment(id));
export const boundThumbDownComment = id => dispatch(thumbDownComment(id));

// przyklad

boundAddComment('new comment');
boundRemoveComment(id);
boundEditComment(4, 'edit of comment id 4');
boundThumbUpComment(7);
boundThumbDownComment(3);
