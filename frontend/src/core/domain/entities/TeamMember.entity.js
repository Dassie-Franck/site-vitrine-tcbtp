export class TeamMember {
  constructor({ id, name, role, photo, socialLinks }) {
    this.id = id;
    this.name = name;
    this.role = role;
    this.photo = photo;
    this.socialLinks = socialLinks || {}; // { facebook, twitter, linkedin }
  }

  static create(data) {
    return new TeamMember({
      id: data.id,
      name: data.name,
      role: data.role,
      photo: data.photo,
      socialLinks: data.socialLinks,
    });
  }
}