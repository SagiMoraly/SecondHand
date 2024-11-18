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
        public async Task<ActionResult<bool>> AddSale([FromBody]RealestateForsaleModel clientSaleObj)
        { 
            //Console.WriteLine(clientObj.image.FileName);
            //var result = clientObj.image.FileName;
              bool result = await _saleRepository.AddSale(clientSaleObj);
            if (result == null)
            {
                return BadRequest(result) ;
            }
            return Ok(result);
        }

    }
}
