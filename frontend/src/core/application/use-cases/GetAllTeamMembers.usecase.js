export class GetAllTeamMembersUseCase {
  constructor(teamMemberRepository) {
    this.teamMemberRepository = teamMemberRepository;
  }

  async execute() {
    return this.teamMemberRepository.getAll();
  }
}