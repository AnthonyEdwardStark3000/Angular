using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
namespace StreamingBackend.controllers{
    [ApiController]
    [Route("api/[controller]")]
    public class HomeController:Controller{
        // private readonly HttpClient _httpClient;

        // public HomeController(HttpClient httpClient)
        // {
        //     _httpClient = httpClient;
        // }
        // [HttpGet("index")]
        public IActionResult index(){
            return Content("Hello");
        }
    }
}