const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api';

export class ApiBlogPostRepository {
  async getAll() {
    const response = await fetch(`${API_BASE_URL}/blog-posts`);
    if (!response.ok) return [];
    return await response.json();
  }

  async getById(id) {
    const posts = await this.getAll();
    return posts.find((post) => post.id === Number(id));
  }
}