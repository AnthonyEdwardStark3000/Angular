using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.IO;
using System.Net.Http;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;

namespace StreamingBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly HttpClient _httpClient;
        private const int BatchSize = 100; // Number of items per batch

        public HomeController(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        [HttpGet("stream")]
        public async Task<IActionResult> StreamData(CancellationToken cancellationToken)
        {
            var apiUrl = "https://jsonplaceholder.typicode.com/photos"; // Replace with your external API URL

            Response.ContentType = "text/event-stream";
            Response.Headers.Add("Cache-Control", "no-cache");
            Response.Headers.Add("Connection", "keep-alive");

            try
            {
                using (var response = await _httpClient.GetAsync(apiUrl, HttpCompletionOption.ResponseHeadersRead, cancellationToken))
                {
                    response.EnsureSuccessStatusCode();
                    var stream = await response.Content.ReadAsStreamAsync();
                    using var jsonDocument = await JsonDocument.ParseAsync(stream, cancellationToken: cancellationToken);
                    
                    var root = jsonDocument.RootElement;
                    var buffer = new List<JsonElement>();

                    foreach (var item in root.EnumerateArray())
                    {
                        buffer.Add(item);

                        if (buffer.Count >= BatchSize)
                        {
                            var batch = JsonSerializer.Serialize(buffer);
                            await Response.WriteAsync($"data: {batch}\n\n");
                            await Response.Body.FlushAsync();
                            buffer.Clear();
                        }
                    }

                    if (buffer.Count > 0)
                    {
                        var batch = JsonSerializer.Serialize(buffer);
                        await Response.WriteAsync($"data: {batch}\n\n");
                        await Response.Body.FlushAsync();
                    }
                }
            }
            catch (HttpRequestException ex)
            {
                await Response.WriteAsync($"data: {{\"error\":\"{ex.Message}\"}}\n\n");
                await Response.Body.FlushAsync();
            }
            catch (OperationCanceledException)
            {
                await Response.WriteAsync($"data: {{\"error\":\"Operation was canceled\"}}\n\n");
                await Response.Body.FlushAsync();
            }
            catch (Exception ex)
            {
                await Response.WriteAsync($"data: {{\"error\":\"{ex.Message}\"}}\n\n");
                await Response.Body.FlushAsync();
            }

            return new EmptyResult();
        }
    }
}
