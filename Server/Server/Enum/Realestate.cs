namespace Server.Enum
{
    public class Realestate
    {
        public enum PropertyType
        {
            Apartment,
            GardenApartment,
            HouseCottage,
            RoofPenthouse,
            Plots,
            Duplex,
            VacationApartment,
            SemiDetached,
            BasementGroundFloor,
            Triplex,
            HousingUnit,
            FarmEstate,
            UtilityFarm,
            AssistedLiving,
            ResidentialBuilding,
            StudioLoft,
            Storage,
            Parking,
            PurchaseGroupPropertyRight,
            General
        }

        public enum PropertyCondition
        {
            NewFromContractor,
            NewUpTo10Years,
            RenovatedLast5Years,
            WellMaintained,
            NeedsRenovation
        }

        public enum PropertyFeature
        {
            AccessibilityForDisabled,
            AirConditioning,
            Bars,
            SolarWaterHeater,
            Elevators,
            Furniture,
            ApartmentUnit,
            KosherKitchen,
            Renovated,
            SafeRoom,
            Storage,
            MultiLockDoors,
            TornadoAirConditioner,
        }

        public enum PackageType
        {
            Base, 
            Premium, 
            Upgraded
        }

        public enum FavoriteType
        {
            Rent = 1,
            ForSale = 2
        }
    }
}
