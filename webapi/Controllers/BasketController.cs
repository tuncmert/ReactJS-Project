using loginuser.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace loginuser.Controllers;

[ApiController]
[Route("[controller]")]
[Authorize]
public class BasketController : ControllerBase
{
    [HttpGet]
    public List<Basket> Get()
    {
        return Store.Baskets;
    }
    [HttpGet("{id}")]
    public Basket Get(int id)
    {
        return Store.Baskets.FirstOrDefault(x => x.Id == id);
    }
    [HttpPost]
    public void Post(Basket basket)
    {
        var id = Store.Baskets.Max(x => x.Id) + 1;
        basket.Id = id;
        Store.Baskets.Add(basket);
    }
    [HttpPut]
    public void Put(Basket basket)
    {
        var entity = Store.Baskets.FirstOrDefault(x => x.Id == basket.Id);
        entity.UserId = basket.UserId;
        entity.ProductId = basket.ProductId;
        entity.Quantity = basket.Quantity;
    }
    [HttpDelete]
    public void Delete(int id)
    {
        var entity = Store.Baskets.FirstOrDefault(x => x.Id == id);
        Store.Baskets.Remove(entity);
    }
}