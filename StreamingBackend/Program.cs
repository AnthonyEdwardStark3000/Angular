
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers(); // Adding controllers with services for DI in future.

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddHttpClient();
var app = builder.Build();

// app.UseStaticFiles();
app.UseRouting();
app.UseCors(builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
app.MapControllers();
app.Run();
