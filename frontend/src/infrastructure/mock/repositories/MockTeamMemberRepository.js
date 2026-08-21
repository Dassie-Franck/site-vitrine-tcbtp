import { TeamMemberRepositoryPort } from "../../../core/domain/ports/TeamMemberRepository.port";
import { TeamMember } from "../../../core/domain/entities/TeamMember.entity";
import { teamMembersData } from "../data/teamMembers.data";

export class MockTeamMemberRepository extends TeamMemberRepositoryPort {
  async getAll() {
    return teamMembersData.map((data) => TeamMember.create(data));
  }
}