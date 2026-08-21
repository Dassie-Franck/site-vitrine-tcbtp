export class GetBlogPostByIdUseCase {
  constructor(blogPostRepository) {
    this.blogPostRepository = blogPostRepository;
  }

  async execute(id) {
    if (!id) {
      throw new Error("GetBlogPostByIdUseCase: 'id' is required");
    }
    return this.blogPostRepository.getById(id);
  }
}