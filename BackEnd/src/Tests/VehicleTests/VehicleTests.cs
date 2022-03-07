using Moq;
using Xunit;
using System;
using System.Collections.Generic;

using Core.Domain.Models;
using Core.Application.UseCases;
using Core.Domain.Validators;
using Web.VehiclesApi.Controllers;
using Infrastructure.Databases.InMemory.Contexts;
using Infrastructure.Databases.InMemory.Repositories;


namespace Tests
{
    public class VehicleTests
    {
        private VehicleRepository repository;
        private VehicleValidators validators;
        private VehicleUseCases useCases;
        private VehicleUseCases mockUseCases;
        public VehicleTests()
        {
            this.repository = new VehicleRepository();
            this.validators = new VehicleValidators(this.repository);
            this.useCases = new VehicleUseCases(this.repository, this.validators);
            this.mockUseCases = new VehicleUseCases(new Mock<VehicleRepository>().Object, this.validators);
        }

        [Fact(DisplayName = "Should return a list of vehicles")]
        public void ListVehiclesTest()
        {
            var VehicleList = this.useCases.ListVehicles();
            Assert.True(VehicleList.GetType() == typeof(List<VehicleModel>));

        }



        [Fact(DisplayName = "Should return exception when trying to find with empty ChassisId")]
        public void FindEmptyVehicleTest()
        {
            var ex = Assert.Throws<Exception>(() => mockUseCases.SearchVehicle(new ChassisId()));
            Assert.Equal("The Chassis should have Series and Number!", ex.Message);
        }



        [Fact(DisplayName = "Should return exception when trying to add with empty Vehicle")]
        public void AddEmptyVehicleTest()
        {
            var ex = Assert.Throws<Exception>(() => mockUseCases.AddVehicle(new VehicleModel()));
            Assert.Equal("All the vehicle fields should be filled!", ex.Message);
        }



        [Fact(DisplayName = "Should return exception when trying to update with empty ChassisId")]
        public void UpdateEmptyVehicleTest()
        {
            var ex = Assert.Throws<Exception>(() => mockUseCases.UpdateVehicle(new ChassisId(), "blue"));
            Assert.Equal("The Chassis should have Series and Number!", ex.Message);
        }



        [Fact(DisplayName = "Should return exception when trying to update with empty Color")]
        public void UpdateEmptyColorTest()
        {
            ChassisId testChassisId = new ChassisId();
            testChassisId.ChassisSeries = "t";
            testChassisId.ChassisNumber = 0;

            var ex = Assert.Throws<Exception>(() => mockUseCases.UpdateVehicle(testChassisId, null));
            Assert.Equal("The color value should not be empty!", ex.Message);
        }



        [Fact(DisplayName = "Should return exception when trying to delete with empty Chassis")]
        public void DeleteEmptyVehicleTest()
        {
            var ex = Assert.Throws<Exception>(() => mockUseCases.DeleteVehicle(new ChassisId()));
            Assert.Equal("The Chassis should have Series and Number!", ex.Message);
        }
    }

}
