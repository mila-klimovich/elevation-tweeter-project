const Tweeter = function () {

    const _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" },
            ],
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                {
                    id: "c4",
                    text: "Don't wory second poster, you'll be first one day.",
                },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." },
            ],
        },
    ];

    let postIdCounter = _posts.length;

    let commentIdCounter = 0;
    _posts.forEach((post) => commentIdCounter += post.comments.length);

    const getPosts = () => _posts;

    const addPost = (post) => _posts.push({ text: post, id: `p${_posts.length + 1}`, comments: []});
    
    const removePost = function (id) {
        const index = _posts.findIndex(post => post.id === id);
        if (index !== -1) {
            _posts.splice(index, 1);
        }
    }; 

    const addComment = function(id, comment) {
        const post = _posts.find(post => post.id === id);
        if (post) {
            const newComment = {
                id: `c${commentIdCounter + 1}`,
                text: comment,
            };
            post.comments.push(newComment);
            commentIdCounter++;
        }
    };

    const removeComment = function(postId, commentId) {
        const post = _posts.find(post => post.id === postId);
        if (post) {
            const commentIndex = post.comments.findIndex((comment) => comment.id === commentId);
            if (commentIndex !== -1) {
                post.comments.splice(commentIndex, 1);
            }
        }

    }

    return {
        postIdCounter: postIdCounter,
        commentIdCounter: commentIdCounter,
        getPosts: getPosts,
        addPost: addPost,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment,
    };

}

const tweeter = Tweeter();

    // console.log(_posts);
    // console.log(tweeter.postIdCounter);
    // console.log(tweeter.commentIdCounter);
    // console.log(tweeter.getPosts());
    // tweeter.addPost('whats up');
    // tweeter.addPost('blah blah blah');
    // tweeter.addPost('pew pew pew');
    // console.log(tweeter.getPosts());
    // tweeter.removePost('p4');
    // console.log(tweeter.getPosts());
    // tweeter.addComment('p3', 'privet');
    // console.log(tweeter.getPosts());
    // tweeter.removeComment('p1', 'c2');
    // console.log(tweeter.getPosts());

    // const tweeter = Tweeter()

tweeter.addPost("This is my own post!")
console.log(tweeter.getPosts())
//This should be added to the posts array:
//{text: "This is my own post!", id: "p3", comments: []}

tweeter.removePost("p1")
console.log(tweeter.getPosts())
//There should only be two posts in the post's array:
//{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
//{text: "This is my own post!", id: "p3", comments: []}

//============================
//============================
//Stop here
//Make sure everything works. Then keep going
//============================
//============================

tweeter.addComment("p3","Damn straight it is!")
tweeter.addComment("p2","Second the best!")
console.log(tweeter.getPosts())
//This should be added to the third post's comments array:
//{id: "c7", text: "Damn straight it is!"}

//This should be added to the second post's comments array:
//{id: "c8", text: "Second the best!"}

tweeter.removeComment("p2", "c6")
console.log(tweeter.getPosts())
//This comment should be removed:
//{id: "c6", text: "Haha second place what a joke."}