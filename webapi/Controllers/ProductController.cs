using loginuser.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace loginuser.Controllers;
[ApiController]
[Route("[controller]")]
[Authorize]
public class ProductController : ControllerBase
{
    [HttpGet]
    public List<Product> Get()
    {
        return Store.Products;
    }
    [HttpGet("{id}")]
    public Product Get(int id)
    {
        return Store.Products.FirstOrDefault(x => x.Id == id);
    }
    [HttpPost]
    public void Post(Product product)
    {
        var id = Store.Products.Max(x => x.Id) + 1;
        product.Id = id;
        Store.Products.Add(product);
    }
    [HttpPut]
    public void Put(Product product)
    {
        var entity = Store.Products.FirstOrDefault(x => x.Id == product.Id);
        entity.Name = product.Name;
        entity.Description = product.Description;
        entity.Price = product.Price;
        entity.Image = product.Image;
    }
    [HttpDelete]
    public void Delete(int id)
    {
        var entity = Store.Products.FirstOrDefault(x => x.Id == id);
        Store.Products.Remove(entity);
    }
}