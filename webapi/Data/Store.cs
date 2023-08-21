namespace loginuser.Data;

public static class Store
{
    public static List<User> Users = new List<User>{
        new User{Id=1,Username="mert@mail.com",Password="mert1",FirstName="Mert",LastName="Tunç",Telefon=123456789,Sehir="İstanbul",Ilce="Beylikdüzü",UserType=0},
        new User{Id=2,Username="mert@mail.com",Password="mert2",FirstName="Ali",LastName="Şahin",Telefon=123456789,Sehir="İstanbul",Ilce="Beylikdüzü",UserType=1,Alan="Elektronik onarım ve bakım"},
        new User{Id=3,Username="mert@mail.com",Password="mert3",FirstName="Veli",LastName="Mutlu",Telefon=123456789,Sehir="İstanbul",Ilce="Beylikdüzü",UserType=1 ,Alan="Su tesisatı"},
        new User{Id=4,Username="mert@mail.com",Password="mert4",FirstName="Mert",LastName="Tunç",Telefon=123456789,Sehir="İstanbul",Ilce="Esenyurt",UserType=0},
        new User{Id=5,Username="mert@mail.com",Password="mert5",FirstName="Veli",LastName="Mutlu",Telefon=123456789,Sehir="İstanbul",Ilce="Esenyurt",UserType=1 ,Alan="Boya-Badana Tamir işleri"},

    };
    public static List<Product> Products = new List<Product>{
        new Product{Id=1,Name="Product1",Description="Description1",Price=10,Image="1.jpg"},
        new Product{Id=2,Name="Product2",Description="Description2",Price=20,Image="2.jpg"},
        new Product{Id=3,Name="Product3",Description="Description3",Price=30,Image="3.jpg"},
        new Product{Id=4,Name="Product4",Description="Description4",Price=40,Image="4.jpg"},
        new Product{Id=5,Name="Product5",Description="Description5",Price=50,Image="5.jpg"}
    };
    public static List<Talep> Taleps = new List<Talep>{
        new Talep{Id=1,Tarih="10.08.2023",UserId=1,UstaId=2,Aciklama="Samsung marka Televizyon tamiri",Status=1,MaxTeklif=250,MinTeklif=100},
        new Talep{Id=1,Tarih="15.06.2023",UserId=1,UstaId=2,Aciklama="Buzdolabı tamiri",Status=1,MaxTeklif=400,MinTeklif=250},
        new Talep{Id=2,Tarih="02.08.2023",UserId=1,UstaId=3,Aciklama="Banyo musluk tamiratı",Status=2,MaxTeklif=150,MinTeklif=100},
        new Talep{Id=3,Tarih="13.02.2023",UserId=1,UstaId=2,Aciklama="Klima bakımı",Status=0,MaxTeklif=300,MinTeklif=200},
        new Talep{Id=4,Tarih="17.05.2023",UserId=4,UstaId=5,Aciklama="2 adet 25metre kare odanın boyanması",Status=1,MaxTeklif=350,MinTeklif=300},
        new Talep{Id=5,Tarih="26.06.2023",UserId=4,UstaId=5,Aciklama="120metrekare bir evin boyanması",Status=0,MaxTeklif=500,MinTeklif=350}
    };


}