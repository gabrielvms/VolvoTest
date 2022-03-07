using Infrastructure.Databases.InMemory.Repositories;
using Core.Domain.Ports.In;
using Core.Domain.Ports.Out;
using Core.Application.UseCases;
using Core.Domain.Validators;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors();

builder.Services.AddSingleton<IVehicleUseCases, VehicleUseCases>();
builder.Services.AddSingleton<IVehicleRepository, VehicleRepository>();
builder.Services.AddSingleton<IVehicleValidators, VehicleValidators>();

var app = builder.Build();

app.UseSwagger();

app.UseSwaggerUI();

app.UseCors(c => {
    c.AllowAnyOrigin();
    c.AllowAnyMethod();
    c.AllowAnyHeader();
});

app.UseAuthorization();

app.MapControllers();

app.Run();
