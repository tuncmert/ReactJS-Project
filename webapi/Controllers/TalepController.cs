using loginuser.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace loginuser.Controllers;
[ApiController]
[Route("[controller]")]
[Authorize]
public class TalepController : ControllerBase
{
    [HttpGet]
    public List<Talep> Get()
    {
        return Store.Taleps;
    }
    [HttpGet("{id}")]
    public List<Talep> Get(int id)
    {
        return Store.Taleps.Where(x => x.UserId == id).ToList();
    }
    [HttpGet("ustaid/{id}")]
    public List<TalepWithUserInfo> GetByUstaId(int id)
    {
        var talepler = Store.Taleps.Where(x => x.UstaId == id).ToList();

        List<TalepWithUserInfo> taleplerWithUserInfo = new List<TalepWithUserInfo>();

        foreach (var talep in talepler)
        {
            var user = Store.Users.FirstOrDefault(u => u.Id == talep.UserId);

            if (user != null)
            {
                TalepWithUserInfo talepWithUserInfo = new TalepWithUserInfo
                {
                    Id = talep.Id,
                    Tarih = talep.Tarih,
                    Aciklama = talep.Aciklama,
                    UserId = talep.UserId,
                    UstaId = talep.UstaId,
                    Status = talep.Status,
                    MaxTeklif = talep.MaxTeklif,
                    MinTeklif = talep.MinTeklif,
                    UserFirstName = user.FirstName,
                    UserLastName = user.LastName,
                    UserTelefon = Convert.ToInt32(user.Telefon),
                    UserSehir = user.Sehir,
                    UserIlce = user.Ilce,
                    UserType = user.UserType,
                    UserAlan = user.Alan
                };

                taleplerWithUserInfo.Add(talepWithUserInfo);
            }
        }

        return taleplerWithUserInfo;
    }
    [HttpPost]
    public void Post(Talep talep)
    {
        var id = Store.Taleps.Max(x => x.Id) + 1;
        talep.Id = id;
        Store.Taleps.Add(talep);
    }
    [HttpPut]
    public Talep Put(Talep talep)
    {
        var talepToUpdate = Store.Taleps.FirstOrDefault(x => x.Id == talep.Id);
        if (talepToUpdate != null)
        {
            talepToUpdate.MaxTeklif = talep.MaxTeklif;
            talepToUpdate.MinTeklif = talep.MinTeklif;

        }
        return talepToUpdate;
    }

    [HttpDelete]
    public void Delete(int id)
    {
        var entity = Store.Taleps.FirstOrDefault(x => x.UserId == id);
        Store.Taleps.Remove(entity);
    }
}