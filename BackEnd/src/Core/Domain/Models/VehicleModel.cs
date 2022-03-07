using System;
using System.ComponentModel.DataAnnotations;

namespace Core.Domain.Models
{
    public class VehicleModel
    {
        [Required]
        public ChassisId ChassisId {get; set;}
        [Required]
        public string Type {get; set;}
        [Required]
        public uint NumberOfPassengers {get; set;}
        [Required]
        public string Color {get; set;}
    }

    public class ChassisId
    {
        [Required]
        public string ChassisSeries {get; set;}
        [Required]
        public uint ChassisNumber {get; set;}
    }
}