using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Server.IPepository;
using Server.Models;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RealestateController : ControllerBase
    {
        public readonly IRealestateSaleRepository _saleRepository;

        public RealestateController(IRealestateSaleRepository saleRepository) 
        {
            _saleRepository = saleRepository; 
        }

        [HttpPost]
        [Authorize]
        public async Task<ActionResult<bool>> AddSale([FromBody]dynamic clientObj )
        {
            var somthing = clientObj;
              bool result = await _saleRepository.AddSale(clientObj);
            if(result == false)
            {
                return BadRequest(result);
            }
            return Ok(result);
        }

    }
}
