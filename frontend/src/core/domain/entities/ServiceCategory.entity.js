export class ServiceCategory {
  constructor({ id, title, image }) {
    this.id = id;
    this.title = title;
    this.image = image;
  }

  static create(data) {
    return new ServiceCategory({
      id: data.id,
      title: data.title,
      image: data.image,
    });
  }
}