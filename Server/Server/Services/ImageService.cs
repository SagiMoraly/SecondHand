using System.Reflection.Metadata;

namespace Server.Services
{
    public class ImageService
    {
        readonly string folderDirectory = @"C:\Users\ogoritoo\Desktop\Programing\JavaScript\SecondHand\SecondHand\Server\Server\Images\Realestates\";

        public async Task<string> SaveImagesAsync(IFormFileCollection Images)
        {
            string uniqueFolderName = $"Images_{DateTime.Now:yyyyMMdd_HHmmssffff}";
            string fileFolderFullPath = Path.Combine(folderDirectory, uniqueFolderName);
            Directory.CreateDirectory(fileFolderFullPath);
        
            foreach (var imageFile in Images)
            {
                if(imageFile.Length > 0)
                {
                    string uniqueFileName = $"Image_{Guid.NewGuid()}.png";
                    string filePath = Path.Combine(fileFolderFullPath, uniqueFileName);

                    using (var stream = System.IO.File.OpenWrite(filePath))
                    {
                        await imageFile.CopyToAsync(stream);
                    }
                }
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
