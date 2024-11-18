using Server.Models;

namespace Server.IPepository
{
    public interface IRealestateSaleRepository
    {
        public Task<bool> AddSale(RealestateForsaleModel clientObj);
    }
}
