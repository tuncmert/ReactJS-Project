using loginuser.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace loginuser.Controllers;
[ApiController]
[Route("[controller]")]
[Authorize]
public class UserController : ControllerBase
{
    private readonly IConfiguration _configuration;
    public UserController(IConfiguration configuration)
    {
        _configuration = configuration;
    }
    [HttpGet]
    public List<User> Get()
    {
        return Store.Users;
    }
    [HttpGet("{id}")]
    public User Get(int id)
    {
        return Store.Users.FirstOrDefault(x => x.Id == id);
    }
    [AllowAnonymous]
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
            userToUpdate.Telefon = user.Telefon;
            userToUpdate.Sehir = user.Sehir;
            userToUpdate.Ilce = user.Ilce;
            userToUpdate.Alan = user.Alan;
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