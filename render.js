const Renderer = function () {

    const renderPosts = function (posts) {
        const postsContainer = $("#posts");
        postsContainer.empty();

        posts.forEach((post) => {

            const thisPost = $("<div>").addClass("post").attr("data-id", post.id);
            const postText = $("<p>").addClass("post-text").text(post.text);
            const commentsContainer = $("<div>").addClass("comments");

            post.comments.forEach((comment) => {

                const thisComment = $("<div>").addClass("comment").attr("data-id", comment.id);
                const commentText = $("<span>").text(comment.text);

                // const deleteCommentBtn = $("<span>").addClass("delete-comment").text("X");

                thisComment.append(commentText);
                // append(commentText, deleteCommentBtn);
                commentsContainer.append(thisComment);
            });

            thisPost.append(postText, commentsContainer);
            postsContainer.append(thisPost);
        })

    };

    return {
        renderPosts: renderPosts,
    };
}

