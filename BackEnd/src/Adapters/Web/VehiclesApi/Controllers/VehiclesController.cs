using Microsoft.AspNetCore.Mvc;
using Core.Domain.Models;
using Core.Domain.Ports.In;

namespace Web.VehiclesApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class VehiclesController : ControllerBase
{
    private readonly IVehicleUseCases useCases;

    public VehiclesController(IVehicleUseCases _useCases)
    {
        this.useCases = _useCases;
    }

    [HttpGet]
    [Route("ListVehicles")]
    public List<VehicleModel> ListVehicles()
    {
        return this.useCases.ListVehicles();
    }

    [HttpGet]
    [Route("SearchVehicle")]
    public IActionResult SearchVevhicle([FromQuery] ChassisId chassisId)
    {
        try{
            VehicleModel? vehicle =  this.useCases.SearchVehicle(chassisId);
            return Ok(vehicle);
        }
        catch(Exception ex){
            return StatusCode(500, ex.Message);
        }
    }

    [HttpPost]
    [Route("AddVehicle")]
    public IActionResult AddVehicle(VehicleModel vehicle)
    {
        try{
            this.useCases.AddVehicle(vehicle);
            return Ok(vehicle);
        }
        catch(Exception ex){
            return StatusCode(500, ex.Message);
        }
        
    }

    [HttpPut]
    [Route("UpdateVehicle")]
    public IActionResult UpdateVehicle(ChassisId chassisId, string newColor)
    {
        try{
            this.useCases.UpdateVehicle(chassisId, newColor);
            return Ok($"Successfully updated the vehicle with Chasssis Series: {chassisId.ChassisSeries} and Chasssis Number:{chassisId.ChassisNumber}");
        }
        catch(Exception ex){
            return StatusCode(500, ex.Message);
        }
    }

    [HttpDelete]
    [Route("DeleteVehicle")]
    public IActionResult DeleteVehicle(ChassisId chassisId)
    {
        try{
            this.useCases.DeleteVehicle(chassisId);
            return Ok($"Successfully deleted the vehicle with Chasssis Series: {chassisId.ChassisSeries} and Chasssis Number:{chassisId.ChassisNumber}");
        }
        catch(Exception ex){
            return StatusCode(500, ex.Message);
        }
        
    }
}
