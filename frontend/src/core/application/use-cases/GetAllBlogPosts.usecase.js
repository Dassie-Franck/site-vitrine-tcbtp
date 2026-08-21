export class GetAllBlogPostsUseCase {
  constructor(blogPostRepository) {
    this.blogPostRepository = blogPostRepository;
  }

  async execute() {
    return this.blogPostRepository.getAll();
  }
}