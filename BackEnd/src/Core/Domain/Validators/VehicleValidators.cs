using System;
using Core.Domain.Models;
using Core.Domain.Ports.Out;

namespace Core.Domain.Validators
{
    public class VehicleValidators : IVehicleValidators
    {
        private readonly IVehicleRepository repository;
        public VehicleValidators(IVehicleRepository _repository)
        {
            this.repository = _repository;
        }
        public void ChassisIdValidator(ChassisId chassisId)
        {
            if (chassisId.ChassisSeries == null || chassisId.ChassisNumber == null)
            {
                throw new Exception("The Chassis should have Series and Number!");
            }
        }

        public void ColorValidator(string newColor)
        {
            if (newColor == null)
            {
                throw new Exception("The color value should not be empty!");
            }
        }

        public void VehicleValidator(VehicleModel vehicle)
        {
            if (vehicle.ChassisId == null || vehicle.Type == null ||
                vehicle.NumberOfPassengers == null || vehicle.Color == null)
            {

                throw new Exception("All the vehicle fields should be filled!");
            }
        }

        public VehicleModel? ExistenceValidator(ChassisId chassisId)
        {
            VehicleModel? existingVehicle = this.repository.Find(chassisId);

            if (existingVehicle == null)
            {
                throw new Exception("The vehicle does not exist!");
            }
            
            return existingVehicle;
        }

        public void NonExistenceValidator(ChassisId chassisId)
        {
            VehicleModel? existingVehicle = this.repository.Find(chassisId);

            if (existingVehicle != null)
            {
                throw new Exception("The vehicle already exists!");
            }
        }
    }
}