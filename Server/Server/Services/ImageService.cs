using System.Reflection.Metadata;

namespace Server.Services
{
    public class ImageService
    {
        readonly string folderDirectory = @"C:\Users\ogoritoo\Desktop\Programing\JavaScript\SecondHand\SecondHand\Server\Server\Images\Realestates\";

        public async Task<string> SaveImagesAsync(List<byte[]> Images)
        {
            string uniqueFolderName = $"Images_{DateTime.Now:yyyyMMdd_HHmmssffff}";
            string fileFolderFullPath = Path.Combine(folderDirectory, uniqueFolderName);
            Directory.CreateDirectory(fileFolderFullPath);
        
            foreach (byte[] byteArrImg in Images)
            {
                string uniqueFileName = $"Image_{Guid.NewGuid()}.png";
                string filePath = Path.Combine(fileFolderFullPath, uniqueFileName);

                await File.WriteAllBytesAsync(filePath, byteArrImg);
            }
            return uniqueFolderName;
        }

        public async Task<List<byte[]>> GetImages(string path)
        {
            if (!Directory.Exists(path))
            {
                throw new DirectoryNotFoundException($"Folder not found.");
            }
            
            var images = new List<byte[]>();

            foreach (var filePath in Directory.GetFiles(path)) 
            {
                byte[] fileBytes = await File.ReadAllBytesAsync(filePath);
                images.Add(fileBytes);
            }

            return images;
        }
    }
}
