using static Server.Enum.Realestate;

namespace Server.Models
{
    public class RealestateRentModel 
    {
        public Guid Id { get; set; }
        public DateTime CreatedAt { get; set; }
        public string City { get; set; }
        public string Street { get; set; }
        public int StreetNumber { get; set; }
        public int Floor { get; set; }
        public int FloorsTotal { get; set; }
        public string Neighborhood { get; set; }
        public string Area { get; set; }
        public PropertyType Type { get; set; } // Enum: Apartment, Villa, etc.
        public PropertyCondition Condition { get; set; } // Enum: New, Renovated, etc.
        public int AirWays { get; set; } // Enum: 1-4 directions
        public int OpenView { get; set; } // Enum: No view, Sea, Park, etc.
        public bool RearAsset { get; set; }
        public bool UpdatesToEmail { get; set; }
        public decimal Rooms { get; set; } // Can be 1.5, 2.5, etc.
        public int ShowerRooms { get; set; }// can be 1 - 4
        public int Parking { get; set; } // 0 - 3
        public int Balcony { get; set; }// 0-4
        public List<PropertyFeature> Features { get; set; } // JSON or CSV for features list
        public string ?FurnitureDetails { get; set; } // Can be null

        // Rent-specific properties
        public int NumberOfPay { get; set; }
        public decimal PayHomeOwner { get; set; }
        public decimal ArnonaPer2Months { get; set; }
        public DateTime DateOfEntering { get; set; }
        public bool LongTermRent { get; set; }

        public decimal SquareBuild { get; set; }
        public decimal SquareMeter { get; set; }
        public decimal Price { get; set; } //  rent price >= 100

        public string ImagesPath { get; set; } // Placeholder for images or videos
        public string ContactPhone { get; set; }
        public string ContactName { get; set; }
        public string ContactPhone2 { get; set; }
        public string ContactName2 { get; set; }
        public PackageType PackageType { get; set; } // Enum: Base, Premium, Upgraded

        public bool GetUpdates { get; set; }

        // Foreign key to User
        public int UserId { get; set; }
        public UserModel User { get; set; }

        // Indicator if this is a favorite
        public bool IsFavorite { get; set; }
        
        // add date
    }
}
