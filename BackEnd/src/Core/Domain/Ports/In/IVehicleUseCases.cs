using System;
using Core.Domain.Models;

namespace Core.Domain.Ports.In
{
    public interface IVehicleUseCases
    {
        public List<VehicleModel> ListVehicles();
        public VehicleModel? SearchVehicle(ChassisId chassisId);
        public void AddVehicle(VehicleModel vehicle);
        public void UpdateVehicle(ChassisId chassisId, string newColor);
        public void DeleteVehicle(ChassisId chassisId);
    }
}