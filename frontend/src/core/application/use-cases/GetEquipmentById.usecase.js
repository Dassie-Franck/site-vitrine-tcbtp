export class GetEquipmentByIdUseCase {
  constructor(equipmentRepository) {
    this.equipmentRepository = equipmentRepository;
  }

  async execute(id) {
    return await this.equipmentRepository.getById(id);
  }
}