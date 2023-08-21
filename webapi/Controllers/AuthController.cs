using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using loginuser.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace loginuser.Controllers;
[ApiController]
[Route("[controller]")]
public class AuthController : ControllerBase
{
    private readonly string _issur;
    private readonly string _audience;
    private readonly string _signingKey;
    private readonly IConfiguration _configuration;


    public AuthController(IConfiguration configuration)
    {
        _configuration = configuration;
        _issur = _configuration["JwtConfig:Issuer"];
        _audience = _configuration["JwtConfig:Audience"];
        _signingKey = _configuration["JwtConfig:SigningKey"];
    }




    [HttpPost("Authenticate")]
    public ActionResult<AuthModel> Authenticate([FromBody] LoginModel model)
    {
        var user = Store.Users.FirstOrDefault(u => u.Username == model.UserName && u.Password == model.Password && u.UserType == model.UserType);

        if (user == null)
        {
            return new AuthModel { Token = null, IsAuthenticated = false };
        }

        var token = GenerateToken(user.Username, user.UserType,user.Id);
        return Ok(new AuthModel { Token = token, IsAuthenticated = true });
    }
    private string GenerateToken(string userName, int usertype ,int userid)
    {
        var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_signingKey));
        var signingCredentials = new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256);
        var jwtSecurityToken = new JwtSecurityToken(
            issuer: _issur,
            audience: _audience,
            claims: new List<Claim>
            {
            new Claim(ClaimTypes.Name, userName),
            new Claim(ClaimTypes.Role, "User"),
            new Claim("Usertype", usertype.ToString()),
            new Claim("Userid", userid.ToString())
            },
            expires: DateTime.Now.AddDays(20),
            signingCredentials: signingCredentials
        );

        var token = new JwtSecurityTokenHandler().WriteToken(jwtSecurityToken);
        return token;
    }
    [HttpGet("ValidateToken")]
    public ActionResult<ValidationResult> ValidateToken(string token)
    {
        try
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_signingKey);
            var validationParameters = new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(key),
                ValidateLifetime = true,
                ValidIssuer = _issur,
                ValidAudience = _audience
            };

            var claimsPrincipal = tokenHandler.ValidateToken(token, validationParameters, out SecurityToken validatedToken);

            var userTypeClaim = claimsPrincipal.FindFirst("Usertype");
            var userIdClaim = claimsPrincipal.FindFirst("Userid");
            if (userIdClaim != null && int.TryParse(userTypeClaim.Value, out int usertype)&& int.TryParse(userIdClaim.Value, out int userid))
            {
                return new ValidationResult { IsValid = true, Usertype = usertype ,UserId=userid };
            }

            return new ValidationResult { IsValid = false };
        }
        catch (Exception)
        {
            return new ValidationResult { IsValid = false };
        }
    }


    public class LoginModel
    {
        public string UserName { get; set; }
        public string Password { get; set; }
        public int UserType { get; set; }
    }

    public class AuthModel
    {
        public string Token { get; set; }
        public bool IsAuthenticated { get; set; }
    }

    public class ValidationResult
    {
        public bool IsValid { get; set; }
        public int Usertype { get; set; }
        public int UserId { get; set; }
    }
}