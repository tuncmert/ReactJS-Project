using loginuser.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace loginuser.Controllers;
[ApiController]
[Route("[controller]")]
[Authorize]
public class UstaController : ControllerBase
{
    private readonly IConfiguration _configuration;
    public UstaController(IConfiguration configuration)
    {
        _configuration = configuration;
    }
    [HttpGet]
    public List<User> Get()
    {
        return Store.Users.Where(x => x.UserType == 1).ToList();
    }
    [HttpGet("{id}")]
    public List<User> Get(int id)
    {
        var selected_user = Store.Users.FirstOrDefault(x => x.Id == id);
        return Store.Users.Where(x => x.UserType == 1 && x.Sehir == selected_user.Sehir && x.Ilce == selected_user.Ilce).ToList();
    }
    [HttpPost]
    public User Post(User user)
    {
        user.Id = Store.Users.Max(x => x.Id) + 1;
        Store.Users.Add(user);
        return user;
    }
    [HttpPut]
    public User Put(User user)
    {
        var userToUpdate = Store.Users.FirstOrDefault(x => x.Id == user.Id);
        if (userToUpdate != null)
        {
            userToUpdate.FirstName = user.FirstName;
            userToUpdate.LastName = user.LastName;
            userToUpdate.Username = user.Username;
        }
        return userToUpdate;
    }
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
        var userToDelete = Store.Users.FirstOrDefault(x => x.Id == id);
        if (userToDelete != null)
        {
            Store.Users.Remove(userToDelete);
        }
    }
}