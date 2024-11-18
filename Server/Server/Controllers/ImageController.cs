using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Server.Services;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImageController : ControllerBase
    {
        public readonly ImageService _imageService;

        public ImageController(ImageService imageService)
        {
            _imageService = imageService;
        }

        [HttpPost]
        public async Task<ActionResult<string>> uploadImages([FromForm]IFormFileCollection images)
        {
                string filePath = await _imageService.SaveImagesAsync(images);
            if(filePath == null)
            {
                return BadRequest(null);
            }
            return Ok (filePath);
        }
    }
}
