export interface IClientSaleObj{
    images: FormData;
    realestateData: {
        city: string;
        street: string;
        streetNumber: string
        floor: string
        floorTotal: string
        type: string
        condition: string;
        airWays: string
        openView: string
        rearAsset: boolean
        rooms: string;
        showerRooms: string;
        parking: string;
        balcony: string;
        propertyFeature: string[];
        furnitureDetails: string;
        details: string;
        squareBuild: string;
        squareMeter: string;
        price: string;
        images: []
        contactName: string;
        contactPhone: string;
        packageType: string;
    },
}

