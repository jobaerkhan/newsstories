using System;
using Microsoft.Owin;
using Owin;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Routing;
using Microsoft.Owin.Cors;
using Microsoft.Owin.Security.OAuth;
using NewsStories.DAL.Entities;
using NewsStories.Models;

[assembly: OwinStartup(typeof(NewsStories.OwinStartup))]
namespace NewsStories
{
    public class OwinStartup
    {
        public void Configuration(IAppBuilder app)
        {
            // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=316888
            var httpConfiguration = new HttpConfiguration();
            //AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            //GlobalConfiguration.Configure(WebApiConfig.Register);
            //FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            WebApiConfig.Register(httpConfiguration);
            //BundleConfig.RegisterBundles(BundleTable.Bundles);

            AutoMapper.Mapper.Initialize(mapper =>
            {
                mapper.CreateMap<Story, Storydto>().ReverseMap();
            });

            //GlobalConfiguration.Configuration.Formatters.JsonFormatter.MediaTypeMappings.Add(
            //    new QueryStringMapping("type", "json", new MediaTypeHeaderValue("application/json")));

            //GlobalConfiguration.Configuration.Formatters.XmlFormatter.MediaTypeMappings.Add(
            //    new QueryStringMapping("type", "xml", new MediaTypeHeaderValue("application/xml")));


            //owin config
            OAuthAuthorizationServerOptions option = new OAuthAuthorizationServerOptions
            {
                TokenEndpointPath = new PathString("/generateToken"),
                Provider = new ApplicationOAuthProvider(),
                AccessTokenExpireTimeSpan = TimeSpan.FromMinutes(60),
                AllowInsecureHttp = true
            };
            app.UseOAuthAuthorizationServer(option);
            app.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions());

            app.UseCors(CorsOptions.AllowAll);
            app.UseWebApi(httpConfiguration);
        }
    }
}