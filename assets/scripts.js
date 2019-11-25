const message_input = document.getElementById('message_input');
const author_input = document.getElementById('author_input');
const submit_button = document.getElementById('submit_button');
const comments_section = document.getElementById('comments');

submit_button.addEventListener('click', () => {
    const message = message_input.value;
    const author = author_input.value;
    const body_content = { message, author };
    if (message && author) {
        fetch('/.netlify/functions/api/v1/comments', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body_content)
        });
    }
    loadComments();
});

window.addEventListener('load', () => {
    // FETCH
    loadComments();
});

function loadComments() {
    fetch('/.netlify/functions/api/v1/comments')
        .then(results => {
            return results.json();
        })
        .then(response => {
            comments_section.innerHTML = '';
            response.data.forEach(comment => {
                comments_section.insertAdjacentHTML(
                    'beforeend',
                    `
                    <div class="comment">
                        <p><b>${comment.author}</b></p>
                        <p>${comment.message}</p>
                    </div>
                `
                );
            });
        })
        .catch(error => {
            console.log(error);
        });
}
