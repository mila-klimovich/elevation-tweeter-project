const tweeter = Tweeter();
const renderer = Renderer();

const renderAll = function() {
    renderer.renderPosts(tweeter.getPosts());  
} 

renderAll();

$("#post").on("click", function() {
    tweeter.addPost($("input").val());
    $("input").val('');   
    renderAll();
})

$("#posts").on("click", ".delete", function() {
    tweeter.removePost($(this).closest(".post").data().id);
    renderAll();
})

$("#posts").on("click", ".post-comment", function () {
    tweeter.addComment(
        $(this).closest(".post").data().id,
        $(this).closest(".post").find(".input-comment").val()
    );
    renderAll();
});

$("#posts").on("click", ".delete-comment", function () {
    tweeter.removeComment(
        $(this).closest(".post").data().id,
        $(this).closest(".comment").data().id
    );
    renderAll();
});

