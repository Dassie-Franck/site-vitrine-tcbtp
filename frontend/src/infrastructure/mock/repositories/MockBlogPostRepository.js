import { BlogPostRepositoryPort } from "../../../core/domain/ports/BlogPostRepository.port";
import { BlogPost } from "../../../core/domain/entities/BlogPost.entity";
import { blogPostsData } from "../data/blogPosts.data";

export class MockBlogPostRepository extends BlogPostRepositoryPort {
  async getAll() {
    return blogPostsData.map((data) => BlogPost.create(data));
  }

  async getById(id) {
    const found = blogPostsData.find((data) => data.id === id);
    return found ? BlogPost.create(found) : null;
  }
}