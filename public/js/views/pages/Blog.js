class Blog {
    static ViewPrerender;
    static buildView() {
        const newContentView = Blog.ViewPrerender;
        return new DOMParser().parseFromString(newContentView, "text/html").body
            .firstElementChild;
    }
}

window.Blog = Blog;