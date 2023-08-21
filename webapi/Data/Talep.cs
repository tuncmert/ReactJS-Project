namespace loginuser.Data;

public class Talep
{
    public int Id { get; set; }
    public string? Tarih { get; set; }
    public string Aciklama { get; set; }
    public int UserId { get; set; }
    public int UstaId { get; set; }
    public int Status { get; set; }
    public int MaxTeklif { get; set; }
    public int MinTeklif { get; set; }

}