export class BlogPost {
  constructor({ id, title, excerpt, content, image, author, publishedAt }) {
    this.id = id;
    this.title = title;
    this.excerpt = excerpt;
    this.content = content;
    this.image = image;
    this.author = author;
    this.publishedAt = publishedAt;
  }

  static create(data) {
    return new BlogPost({
      id: data.id,
      title: data.title,
      excerpt: data.excerpt,
      content: data.content,
      image: data.image,
      author: data.author,
      publishedAt: data.publishedAt,
    });
  }

  get formattedDate() {
    return new Date(this.publishedAt).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }
}