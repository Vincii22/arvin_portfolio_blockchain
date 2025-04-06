import { portfolio_template_backend } from "../../declarations/portfolio_template_backend";

// Function to add a comment
async function addComment() {
    const commentInput = document.querySelector("#comment-input");
    const commentText = commentInput.value;

    try {
        const result = await portfolio_template_backend.addComment(commentText);
        console.log(result); // Optional: log the result
        updateComments(); // Refresh the comments after adding
    } catch (error) {
        console.error("Error adding comment:", error);
    }
}

// Function to update and display comments
async function updateComments() {
    try {
        const comments = await portfolio_template_backend.getComments();
        const commentsListElement = document.querySelector(".comments-list");
        commentsListElement.innerHTML = ""; // Clear existing comments

        // Add each comment to the list
        comments.forEach(comment => {
            const commentElement = document.createElement("li");
            commentElement.textContent = comment;
            commentsListElement.appendChild(commentElement);
        });
    } catch (error) {
        console.error("Error fetching comments:", error);
    }
}

// Fetch and display the comments when the page loads
document.addEventListener("DOMContentLoaded", async () => {
    await updateComments();

    // Handle comment form submission
    const commentForm = document.querySelector("#comment-form");
    commentForm.addEventListener("submit", (event) => {
        event.preventDefault();
        addComment();
    });
});
