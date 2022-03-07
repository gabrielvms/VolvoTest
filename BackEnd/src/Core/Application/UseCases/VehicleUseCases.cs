using System;
using Core.Domain.Models;
using Core.Domain.Ports.In;
using Core.Domain.Ports.Out;

namespace Core.Application.UseCases
{
    public class VehicleUseCases : IVehicleUseCases
    {
        private readonly IVehicleRepository repository;
        private readonly IVehicleValidators validators;
        public VehicleUseCases(IVehicleRepository _repository , IVehicleValidators _validators)
        {
            this.repository = _repository;
            this.validators = _validators;
        }
        public List<VehicleModel> ListVehicles()
        {
            return this.repository.List();
        }
        public VehicleModel? SearchVehicle(ChassisId chassisId)
        {

            this.validators.ChassisIdValidator(chassisId);
            VehicleModel? existingVehicle = this.validators.ExistenceValidator(chassisId);

            return existingVehicle;
        }
        public void AddVehicle(VehicleModel vehicle)
        {

            this.validators.VehicleValidator(vehicle);
            this.validators.NonExistenceValidator(vehicle.ChassisId);

            this.repository.Add(vehicle);
        }
        public void UpdateVehicle(ChassisId chassisId, string newColor)
        {

            this.validators.ChassisIdValidator(chassisId);
            this.validators.ColorValidator(newColor);
            this.validators.ExistenceValidator(chassisId);

            this.repository.Update(chassisId, newColor);
        }
        public void DeleteVehicle(ChassisId chassisId)
        {
            this.validators.ChassisIdValidator(chassisId);
            this.validators.ExistenceValidator(chassisId);

            this.repository.Delete(chassisId);
        }
    }
}