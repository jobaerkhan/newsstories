using System.Collections.Generic;
using System.Data.Entity;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.Owin.Security.OAuth;
using NewsStories.DAL;

namespace NewsStories
{
    public class ApplicationOAuthProvider : OAuthAuthorizationServerProvider
    {
        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            await Task.FromResult(context.Validated());
        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            context.OwinContext.Response.Headers.Add("Access-Control-Allow-Origin", new[] { "*" });
            var newsDbContext = new NewsDbContext();
            var user = await newsDbContext.User.FirstOrDefaultAsync(
                u => u.UserName == context.UserName && u.Password == context.Password);
            if (user != null)
            {
                context.Validated(new ClaimsIdentity(new List<Claim>
                {new Claim(ClaimTypes.NameIdentifier, user.UserName),
                    new Claim(ClaimTypes.Name, user.UserName)}, DefaultAuthenticationTypes.ExternalBearer));
            }
            else
            {
                context.SetError("401", "unauthorized");
            }
        }
    }
}