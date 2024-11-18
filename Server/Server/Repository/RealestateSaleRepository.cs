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
        public async Task<bool> AddSale(RealestateForsaleModel clientSaleObj)
        {
            if (clientSaleObj == null )
            {
                return false;
            }
            await _context.RealestateForsale.AddAsync(clientSaleObj);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
