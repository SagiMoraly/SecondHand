using Server.Data;
using Server.IPepository;
using Server.Models;
using Server.Services;

namespace Server.Repository
{
    public class RealestateSaleRepository : IRealestateSaleRepository
    {
        private readonly DbSecondHandContext _context;
        private readonly ImageService _imageService;

        public RealestateSaleRepository(
                DbSecondHandContext context,
                ImageService imageService
            )
        {
            _context = context;
            _imageService = imageService;
        }
        public async Task<bool> AddSale(ClientRealestateSaleObjctModel clientObj)
        {
            if ( clientObj == null )
            {
                return false;
            }
            string pathForImages = null;
            if (clientObj.Images != null )
            {
                pathForImages = await _imageService.SaveImagesAsync(clientObj.Images);
            }
            var saleObj = clientObj.RealestateData;
            saleObj.ImagesPath = pathForImages;
            await _context.RealestateForsale.AddAsync(saleObj);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
