using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Server.Migrations
{
    /// <inheritdoc />
    public partial class ImagesFix : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Image",
                table: "RealestateRent",
                newName: "ImagesPath");

            migrationBuilder.RenameColumn(
                name: "Image",
                table: "RealestateForsale",
                newName: "ImagesPath");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ImagesPath",
                table: "RealestateRent",
                newName: "Image");

            migrationBuilder.RenameColumn(
                name: "ImagesPath",
                table: "RealestateForsale",
                newName: "Image");
        }
    }
}
