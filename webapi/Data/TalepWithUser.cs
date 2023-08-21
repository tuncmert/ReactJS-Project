public class TalepWithUserInfo
{
    public int Id { get; set; }
    public string? Tarih { get; set; }
    public string Aciklama { get; set; }
    public int UserId { get; set; }
    public int UstaId { get; set; }
    public int Status { get; set; }
    public int MaxTeklif { get; set; }
    public int MinTeklif { get; set; }

    // User Bilgileri
    public string UserFirstName { get; set; }
    public string UserLastName { get; set; }
    public int UserTelefon { get; set; }
    public string UserSehir { get; set; }
    public string UserIlce { get; set; }
    public int UserType { get; set; }
    public string? UserAlan { get; set; }
}