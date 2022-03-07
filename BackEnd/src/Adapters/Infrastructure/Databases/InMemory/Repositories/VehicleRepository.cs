using System;
using Core.Domain.Models;
using Core.Domain.Ports.Out;
using Infrastructure.Databases.InMemory.Contexts;

namespace Infrastructure.Databases.InMemory.Repositories
{
    public class VehicleRepository : IVehicleRepository
    {
        private VehicleContext context = new VehicleContext();

        public List<VehicleModel> List()
        {
            return this.context.Vehicles;
        }

        public VehicleModel? Find(ChassisId chassisId){
            
            var vehicleFound = this.context.Vehicles.FirstOrDefault<VehicleModel>(
                vehicle => vehicle.ChassisId.ChassisSeries == chassisId.ChassisSeries
                            && vehicle.ChassisId.ChassisNumber == chassisId.ChassisNumber
            );

            return vehicleFound;
        }

        public void Add(VehicleModel vehicle)
        {
            this.context.Vehicles.Add(vehicle);
        }
        public void Update(ChassisId chassisId, string newColor)
        {
            VehicleModel? vehicleFound = this.Find(chassisId);
            
            if(vehicleFound != null)
                vehicleFound.Color = newColor;
        }

        public void Delete(ChassisId chassisId)
        {
            VehicleModel? vehicleFound = this.Find(chassisId);

            if(vehicleFound != null)
                this.context.Vehicles.Remove(vehicleFound);

        }
    }
}