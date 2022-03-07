using System;
using Core.Domain.Models;

namespace Infrastructure.Databases.InMemory.Contexts
{
    public class VehicleContext
    {
        public List<VehicleModel> Vehicles {get; set;}
        public VehicleContext()
        {
            Vehicles = new List<VehicleModel>();
        }
    }
}