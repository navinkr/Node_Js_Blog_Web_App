$('#navbar ul > li:first').click(Blog.showAllBlog);

$('#navbar ul > li:last').click(Blog.showForm);

document.body.onload = Blog.showAllBlog;