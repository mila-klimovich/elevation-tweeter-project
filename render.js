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

                const deleteCommentBtn = $("<span>").addClass("delete-comment").text("X");

                thisComment.append(deleteCommentBtn, commentText);
                commentsContainer.append(thisComment);
            });

            const inputContainer = $("<div>").addClass("input-container");
            const inputComment = $("<input>")
                .attr("type", "text")
                .attr("placeholder", "Got something to say?")
                .addClass("input-comment");;
            const btnComment = $("<button>").text("Comment").addClass("post-comment");

            inputContainer.append(inputComment, btnComment);

            const deleteBtn = $("<button>").text("Delete Post").addClass("delete");

            thisPost.append(
                postText,
                commentsContainer,
                inputContainer,
                deleteBtn
            );
            postsContainer.append(thisPost);
        })

    };

    return {
        renderPosts: renderPosts,
    };
}

