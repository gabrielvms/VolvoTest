using System;
using Core.Domain.Models;

namespace Core.Domain.Ports.Out
{
    public interface IVehicleValidators
    {
        public void ChassisIdValidator(ChassisId chassisId);
        public void ColorValidator(string newColor);
        public void VehicleValidator(VehicleModel vehicle);
        public VehicleModel? ExistenceValidator(ChassisId chassisId);
        public void NonExistenceValidator(ChassisId chassisId);
    }
}