import { ImageSourcePropType } from "react-native";

export type ProductProps={
    id: number;
    image: ImageSourcePropType;
    itemName: string;
    price: number;
    brandName?: string;
    multipleBrand: boolean;
}

export const CartList:ProductProps[] =[
    {
        id:1,
        image:require('../../assets/indomie.png'),
        itemName:'Noodles',
        price:200,
        brandName:'Indome',
        multipleBrand:false
    },
    {
        id:2,
        image:require('../../assets/rice.png'),
        itemName:'Rice',
        price:200,
        brandName:'Multiple brands',
        multipleBrand:true
    },
    {
        id:3,
        image:require('../../assets/spag.png'),
        itemName:'Spaghetti',
        price:200,
        brandName:'Golden penny',
        multipleBrand:false
    },
    {
        id:4,
        image:require('../../assets/paste.png'),
        itemName:'Toothpaste',
        price:200,
        brandName:'Multiple brands',
        multipleBrand:true
    },
    {
        id:5,
        image:require('../../assets/indomie.png'),
        itemName:'Noodles',
        price:200,
        brandName:'Indome',
        multipleBrand:false
    },
    {
        id:6,
        image:require('../../assets/rice.png'),
        itemName:'Rice',
        price:200,
        brandName:'Multiple brands',
        multipleBrand:true
    },
    {
        id:7,
        image:require('../../assets/spag.png'),
        itemName:'Spaghetti',
        price:200,
        brandName:'Golden penny',
        multipleBrand:false
    },
    {
        id:8,
        image:require('../../assets/paste.png'),
        itemName:'Toothpaste',
        price:200,
        brandName:'Multiple brands',
        multipleBrand:true
    },
]