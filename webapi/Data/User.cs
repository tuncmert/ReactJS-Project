namespace loginuser.Data
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Token { get; set; }   
        public int? Telefon { get; set; }
        public string? Sehir { get; set; }
        public string? Ilce { get; set; }
        public int UserType { get; set; }
        public string? Alan { get; set; }
    }
}