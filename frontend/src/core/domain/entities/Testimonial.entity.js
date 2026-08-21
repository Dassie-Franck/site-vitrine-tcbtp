export class Testimonial {
  constructor({ id, authorName, authorRole, content, rating, photo }) {
    this.id = id;
    this.authorName = authorName;
    this.authorRole = authorRole;
    this.content = content;
    this.rating = rating || 5;
    this.photo = photo;
  }

  static create(data) {
    return new Testimonial({
      id: data.id,
      authorName: data.authorName,
      authorRole: data.authorRole,
      content: data.content,
      rating: data.rating,
      photo: data.photo,
    });
  }
}