export class GetAllEquipmentsUseCase {
  constructor(equipmentRepository) {
    this.equipmentRepository = equipmentRepository;
  }

  async execute() {
    return await this.equipmentRepository.getAll();
  }
}