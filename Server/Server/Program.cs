using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Server.Models;
using Server.Data;
using Server.IRepository;
using Server.Repository;
using Server.Utilitys;
using Server.Services;
using Server.IPepository;

// => webaplication
var builder = WebApplication.CreateBuilder(args);

// add a connection string to the server and add a context to pull data and muniplited it 
builder.Services.AddDbContext<DbSecondHandContext>(
    options => options.UseSqlServer(
            builder.Configuration.GetConnectionString("SecondHandAPIPublic")
        )
    );
//Identity framwork
builder.Services.AddIdentity<UserModel, IdentityRole>(o =>
{
    o.User.RequireUniqueEmail = true;
    o.Password.RequiredUniqueChars = 0;
    o.Password.RequireLowercase = false;
    o.Password.RequireUppercase = false;
    o.Password.RequireDigit = true;
    o.Password.RequireNonAlphanumeric = false;
    o.Password.RequiredLength = 8;
})
    .AddEntityFrameworkStores<DbSecondHandContext>()
    .AddDefaultTokenProviders();
builder.Services.AddAuthentication(option =>
{
    option.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    option.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    option.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(opt =>
{
    opt.SaveToken = true;
    opt.RequireHttpsMetadata = true;
    opt.TokenValidationParameters = new TokenValidationParameters()
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidAudience = builder.Configuration["JWT:ValidAudience"],
        ValidIssuer = builder.Configuration["JWT:ValidIssuer"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["JWT:Secret"]))
    };
});
// add the controls 
builder.Services.AddControllers().AddNewtonsoftJson(opt =>
{
    opt.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
}
    );
// implament the repositories
builder.Services.AddTransient<IUsersRepository, UsersRepository>();
builder.Services.AddTransient<IRealestateSaleRepository, RealestateSaleRepository>();
builder.Services.AddSingleton<UtilitysFunctions, UtilitysFunctions>();
builder.Services.AddSingleton<ImageService, ImageService>();
// swagers
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(option =>
{
    option.AddDefaultPolicy(builder =>
    {
        builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});

//daily service 
//builder.Services.AddHostedService<DailyTaskService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// use the build
app.UseHttpsRedirection();
app.UseRouting();
app.UseCors();
//app.UseMiddleware<CustomAuthMiddle>();
app.UseAuthentication();
app.UseAuthorization();

//app.UseAuthorization();


app.MapControllers();

app.Run();
