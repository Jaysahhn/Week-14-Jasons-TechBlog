document.addEventListener('click', async function (event) {
    if (event.target.classList.contains('delete-button')) {
        const postId = event.target.dataset.postId;
        try {
            const response = await fetch(`/post/${postId}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                event.target.closest('.post').remove();
            } else {
                const errorData = await response.json();
                console.log(errorData.message);
            }
        } catch (error) {
            console.log(error);
        }
    }
});