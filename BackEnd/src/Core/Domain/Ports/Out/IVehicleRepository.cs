using System;
using Core.Domain.Models;

namespace Core.Domain.Ports.Out
{
    public interface IVehicleRepository
    {
        public List<VehicleModel> List();
        public VehicleModel? Find(ChassisId chassisId);
        public void Add(VehicleModel vehicle);
        public void Update(ChassisId chassisId, string newColor);
        public void Delete(ChassisId chassisId);
    }
}