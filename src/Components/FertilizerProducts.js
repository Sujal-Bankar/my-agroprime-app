import React from 'react';
import '../Css/FertilizerProducts.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const products = [
  {
  name: 'EcoSoil Enhancer',
  description: 'Improves organic matter content in soil',
  price: '$26.45',
  unit: 'bag',
  image: 'data:image/jpeg;base64,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'
},
{
  name: 'BioBloom Booster',
  description: 'Organic bloom-phase fertilizer for flowering crops',
  price: '$24.80',
  unit: 'bottle',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh1mmF4LA8P_8Rk1ND4tteo6ldav5ddAhykQ&s'
},
{
  name: 'NeemGold Fertilizer',
  description: 'Neem-based organic pest-repellent fertilizer',
  price: '$28.90',
  unit: 'bag',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY_QFMjPYZzR19urtL4eY-c2ksFl1oKU1KAg&s'
},
{
  name: 'WormCast Pure',
  description: 'Premium vermicompost from red wigglers',
  price: '$21.99',
  unit: 'bag',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTedg_naWvVgh1fgddWu28B3tzYczSbyV99vQ&s'
},
{
  name: 'Seaweed Max',
  description: 'Organic seaweed extract for micronutrient balance',
  price: '$30.00',
  unit: 'bottle',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0tnhxkxlXAfbbJwDG1XAdIjTpq2-64py1MA&s'
},
{
  name: 'MycoBoost Bio',
  description: 'Mycorrhiza-based biofertilizer for root synergy',
  price: '$29.75',
  unit: 'bottle',
  image: 'https://trsagri.com/wp-content/uploads/2024/07/Myco-Boost.jpg'
},
{
  name: 'NatureGrow Mix',
  description: 'Balanced blend of natural nutrients for all crops',
  price: '$25.40',
  unit: 'bag',
  image: 'https://5.imimg.com/data5/SELLER/Default/2024/6/430273542/ZS/PD/ZU/88496101/ibc-product-page-0012-500x500.jpg'
},
{
  name: 'EarthTone Granules',
  description: 'Slow-release organic granules for vegetable beds',
  price: '$33.99',
  unit: 'bag',
  image: 'https://m.media-amazon.com/images/I/81JEToRmljL._UF350,350_QL80_.jpg'
},
{
  name: 'Foliar BioSpray',
  description: 'Plant-based foliar feed for leaves and buds',
  price: '$22.49',
  unit: 'bottle',
  image: 'https://5.imimg.com/data5/SELLER/Default/2023/9/345495233/NR/XE/VW/5416364/bio-spray-powder-organic-crop-enhancer.jpeg'
},
{
  name: 'PlantMate Compost',
  description: '100% decomposed organic waste fertilizer',
  price: '$20.00',
  unit: 'bag',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSFGVn6ewHN28rQi77b5JoerHk1RkJoARnEA&s'
},
{
  name: 'GreenFarm Vermi+',
  description: 'Enriched vermicompost for organic farms',
  price: '$24.20',
  unit: 'bag',
  image: 'https://m.media-amazon.com/images/I/61O9EfXOK6L._UF1000,1000_QL80_.jpg'
},
{
  name: 'HerbiGro Extract',
  description: 'Herbal extract-based organic fertilizer',
  price: '$27.30',
  unit: 'bottle',
  image: 'https://5.imimg.com/data5/TY/NV/GA/SELLER-19139309/bhringraj-dry-extract-500x500-500x500.jpg'
},
{
  name: 'NaturaKelp Liquid',
  description: 'Cold-processed kelp for stress resistance',
  price: '$31.50',
  unit: 'bottle',
  image: 'https://i.ebayimg.com/images/g/qfcAAOSwis1iaOkL/s-l500.jpg'
},
{
  name: 'BioSoil Activator',
  description: 'Microbial mix to restore soil health',
  price: '$28.00',
  unit: 'bag',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg-cbng8cr6N_jjfVY0s3RI_EV0EXrYdtEqA&s'
},
{
  name: 'RootFuel Organic',
  description: 'High-performance natural root stimulator',
  price: '$26.60',
  unit: 'bottle',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtjMHtSq6MX8x41nS6K6neckehYHiqzqylbg&s'
},

{
    name: 'Forte+ XL Fertilizer',
    description: 'Enhance Overall Crop Yield',
    price: '$30.99',
    unit: 'bottle',
    image: 'https://agribegri.com/productimage/18689083651735628824.webp'
},
  {
  name: 'Bio NPK Fertilizer',
    description: 'Liquid for Organic Gardening',
    price: '$22.75',
    unit: 'bottle',
    image: 'https://iplbiologicals.com/wp-content/uploads/2023/11/WhatsApp-Image-2024-07-23-at-12.58.50-PM.jpeg'
  },
  {
    name: "Dr. Bacto's COMBO",
    description: 'NPK Microbial Liquid Consortia Bio Fertilizer',
    price: '$20.99',
    unit: 'bottle',
    image: 'https://m.media-amazon.com/images/I/51MX9bXSBdL.jpg'
  },
  {
    name: 'Organic Fertilizer',
    description: 'Black Bio Compost Organic Fertilizer',
    price: '$25.78',
    unit: 'bag',
    image: 'https://vgrgardens.com/wp-content/uploads/2024/08/1-25.png'
  },
  {
    name: 'Nano DAP',
    description: 'Liquid for Organic Gardening',
    price: '$35.75',
    unit: 'bottle',
    image: 'https://m.media-amazon.com/images/I/31ZhVtlpn3L.UF1000,1000_QL80.jpg'
  },
  {
    name: 'TEA 19',
    description: 'Tea T9 Special Fertilizer',
    price: '$55.95',
    unit: 'bottle',
    image: 'https://agrijunction.s3.ap-south-1.amazonaws.com/uploads/products/meta/B9topdueRtJZuaqjZjkycK29YNR7ebsWtEoYf6ms.webp'
  },
  {
    name: 'Soil Boost Pro',
    description: 'Improves soil health and nutrient retention',
    price: '$29.99',
    unit: 'bag',
    image: 'https://m.media-amazon.com/images/I/61NeFoKAbDL.jpg'
  },
  {
    name: 'GreenGold 360',
    description: 'All-round fertilizer for vegetables & grains',
    price: '$27.50',
    unit: 'bottle',
    image: 'https://5.imimg.com/data5/ANDROID/Default/2025/2/489284956/NH/HJ/SW/237467476/prod-20250217-1202371611482166149297741-jpg.jpg'
  },
  {
    name: 'RootMax Enhancer',
    description: 'Stimulates root growth in early stages',
    price: '$24.00',
    unit: 'bottle',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeac1JNtNaQOy617AlD2TqOSyWpOzjT_B7qw&s'
  },
  {
    name: 'CropGuard Bio Fertilizer',
    description: 'Protects and nourishes crops naturally',
    price: '$32.80',
    unit: 'bottle',
    image: 'https://5.imimg.com/data5/OH/AF/MY-1727963/hope-500x500.jpg'
  },
  {
    name: 'AgroBloom X',
    description: 'Boosts flowering and fruiting in plants',
    price: '$38.90',
    unit: 'bottle',
    image: 'data:image/jpeg;base64,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'
  },
  {
    name: 'FarmStrong Nitro',
    description: 'Advanced nitrogen supplement for fast growth',
    price: '$19.95',
    unit: 'bottle',
    image: 'https://cdn.shopify.com/s/files/1/0722/2059/files/amstorng-seaweed-nutrient-based-file-6072.jpg?v=1737432481'
  },
  {
    name: 'CropGain Xtra',
    description: 'Increases nutrient uptake efficiency',
    price: '$21.60',
    unit: 'bottle',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/8/OP/DP/XV/59373149/syngenta-calaris-xtra-herbicide-700-ml-250x250.png'
  },
  {
    name: 'BloomMax Liquid',
    description: 'For healthy flowering stage',
    price: '$23.49',
    unit: 'bottle',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/3/295804320/EE/KP/RS/5362947/bloomax-500x500.jpeg'
  },
  {
    name: 'AgriBoost Plus',
    description: 'Enriches soil and plant growth simultaneously',
    price: '$26.90',
    unit: 'bag',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrTtjzFME_rvXNkjyoBmPBk6P0xyJFlfeRig&s'
  },
  {
    name: 'GreenVita Organic',
    description: 'Best for green leafy vegetables',
    price: '$18.25',
    unit: 'bottle',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP6Re-ozZ0P804zObODNY2ZH7WEhQWiRiyVQ&s'
  },
  {
    name: 'TerraRich Granules',
    description: 'Organic granule-based fertilizer',
    price: '$30.00',
    unit: 'bag',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/UL/RY/GC/11660582/tera-phos-phosphorus-rich-orgnic-manure.jpg'
  },
  {
    name: 'NutriSoil Supreme',
    description: 'Improves micro-nutrient content in soil',
    price: '$22.90',
    unit: 'bag',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMmijVST90uCkAeN6Qw6egpsdKiDLbDysv_w&s'
  },
  {
    name: 'VitalGrow Enhancer',
    description: 'Speeds up seedling development',
    price: '$28.45',
    unit: 'bottle',
    image: 'https://m.media-amazon.com/images/I/31HEIlAyRSL.UF1000,1000_QL80.jpg'
  },
  {
    name: 'PowerCrop Mix',
    description: 'Universal mix for all crops',
    price: '$25.75',
    unit: 'bag',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBBn19JEMiS6EYnexHqT7Ep6JPvWeDgVbgig&s'
  },
  {
    name: 'LeafGuard Bio',
    description: 'Protects against leaf burn and diseases',
    price: '$29.80',
    unit: 'bottle',
    image: 'https://3.imimg.com/data3/CE/XU/MY-4243061/leaf-guard-insecticide-500x500.jpg'
  },
  {
  name: 'FarmStrong Nitro',
  description: 'Advanced nitrogen supplement for fast growth',
  price: '$19.95',
  unit: 'bottle',
  image: 'https://cdn.shopify.com/s/files/1/0722/2059/files/amstorng-seaweed-nutrient-based-file-6072.jpg?v=1737432481'
},
{
  name: 'CropGain Xtra',
  description: 'Increases nutrient uptake efficiency',
  price: '$21.60',
  unit: 'bottle',
  image: 'https://5.imimg.com/data5/SELLER/Default/2022/8/OP/DP/XV/59373149/syngenta-calaris-xtra-herbicide-700-ml-250x250.png'
},
{
  name: 'BloomMax Liquid',
  description: 'For healthy flowering stage',
  price: '$23.49',
  unit: 'bottle',
  image: 'https://5.imimg.com/data5/SELLER/Default/2023/3/295804320/EE/KP/RS/5362947/bloomax-500x500.jpeg'
},
{
  name: 'AgriBoost Plus',
  description: 'Enriches soil and plant growth simultaneously',
  price: '$26.90',
  unit: 'bag',
  image: 'https://nutrimentgroup.com/images/foliar/agriboost.jpg'
},
{
  name: 'GreenVita Organic',
  description: 'Best for green leafy vegetables',
  price: '$18.25',
  unit: 'bottle',
  image: 'https://5.imimg.com/data5/SELLER/Default/2025/1/483685543/CW/SV/DC/239457393/humic-acid-amino-acid-fulvic-acid-vitamins-liquid.jpg'
},
{
  name: 'TerraRich Granules',
  description: 'Organic granule-based fertilizer',
  price: '$30.00',
  unit: 'bag',
  image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/UL/RY/GC/11660582/tera-phos-phosphorus-rich-orgnic-manure.jpg'
},
{
  name: 'NutriSoil Supreme',
  description: 'Improves micro-nutrient content in soil',
  price: '$22.90',
  unit: 'bag',
  image: 'https://konzeptgarden.com/cdn/shop/files/Nutrisoil-product-1.jpg?v=1752049266'
},
{
  name: 'VitalGrow Enhancer',
  description: 'Speeds up seedling development',
  price: '$28.45',
  unit: 'bottle',
  image: 'https://m.media-amazon.com/images/I/31HEIlAyRSL.UF1000,1000_QL80.jpg'
},
{
  name: 'PowerCrop Mix',
  description: 'Universal mix for all crops',
  price: '$25.75',
  unit: 'bag',
  image: 'https://m.media-amazon.com/images/I/31DFftEGPkL.UF1000,1000_QL80.jpg'
},
{
  name: 'LeafGuard Bio',
  description: 'Protects against leaf burn and diseases',
  price: '$29.80',
  unit: 'bottle',
  image: 'https://3.imimg.com/data3/CE/XU/MY-4243061/leaf-guard-insecticide-500x500.jpg'
},
{
  name: 'MaxRoot Builder',
  description: 'Encourages strong root systems',
  price: '$26.10',
  unit: 'bottle',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIGJcyEawFVnVMdkxqa2mqQkZoFqAU8FnjWg&s'
},
{
  name: 'SoilPro 360',
  description: 'Balances soil pH and nutrient content',
  price: '$31.00',
  unit: 'bag',
  image: 'https://covingtonnaturals.com/cdn/shop/files/ProLineLiquidLawnAerator_7ff00360-c162-4dfe-9701-46d0aefe9a2a_1400x.jpg?v=1709156052'
},
{
  name: 'HydroBoost NPK',
  description: 'Ideal for drip irrigation',
  price: '$34.20',
  unit: 'bottle',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-t-hPLQ_E4XFQWx2Ui1u79oP3FufcaZRSRg&s'
},
{
  name: 'CompostX Organic Mix',
  description: 'Premium organic compost fertilizer',
  price: '$22.99',
  unit: 'bag',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxcA849aAYERr1gzjZTbiBE8jywqejnXyIhA&s'
},
{
  name: 'EcoGrow BioPellets',
  description: 'Easy-to-apply fertilizer pellets',
  price: '$27.30',
  unit: 'bag',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpPApYcv-GfCwA3MSZ4jR2ZBcm3Bt9-gYffg&s'
},
{
  name: 'EcoSoil Enhancer',
  description: 'Improves organic matter content in soil',
  price: '$26.45',
  unit: 'bag',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj9N5Pq_EfbpbGmegHI0GQde5ERwpF_9khhQ&s'
},
{
  name: 'BioBloom Booster',
  description: 'Organic bloom-phase fertilizer for flowering crops',
  price: '$24.80',
  unit: 'bottle',
  image: 'https://mankindag.com/wp-content/uploads/2022/10/BIO-BLOOM.png'
},
{
  name: 'NeemGold Fertilizer',
  description: 'Neem-based organic pest-repellent fertilizer',
  price: '$28.90',
  unit: 'bag',
  image: 'https://www.neemindia.com/wp-content/uploads/2018/07/Neem-Gold-40-Kg.jpg'
},
{
  name: 'WormCast Pure',
  description: 'Premium vermicompost from red wigglers',
  price: '$21.99',
  unit: 'bag',
  image: 'https://sites.create-cdn.net/siteimages/32/9/7/329768/21/3/9/21391099/1000x680.webp?1740652741'
},
{
  name: 'Seaweed Max',
  description: 'Organic seaweed extract for micronutrient balance',
  price: '$30.00',
  unit: 'bottle',
  image: 'https://5.imimg.com/data5/SELLER/Default/2022/5/FY/AZ/ER/151865664/img-20220516-173842-500x500.jpg'
},
{
  name: 'MycoBoost Bio',
  description: 'Mycorrhiza-based biofertilizer for root synergy',
  price: '$29.75',
  unit: 'bottle',
  image: 'https://trsagri.com/wp-content/uploads/2024/07/Myco-Boost.jpg'
},
{
  name: 'NatureGrow Mix',
  description: 'Balanced blend of natural nutrients for all crops',
  price: '$25.40',
  unit: 'bag',
  image: 'https://primary.jwwb.nl/public/u/b/q/temp-beybutmnnmlubbzxhixl/18hcme/image_1.jpg?enable-io=true&enable=upscale&fit=bounds&width=414'
},
{
  name: 'EarthTone Granules',
  description: 'Slow-release organic granules for vegetable beds',
  price: '$33.99',
  unit: 'bag',
  image: 'https://m.media-amazon.com/images/I/81JEToRmljL.UF350,350_QL80.jpg'
},
{
  name: 'Foliar BioSpray',
  description: 'Plant-based foliar feed for leaves and buds',
  price: '$22.49',
  unit: 'bottle',
  image: 'https://5.imimg.com/data5/SELLER/Default/2023/9/345495233/NR/XE/VW/5416364/bio-spray-powder-organic-crop-enhancer.jpeg'
},
{
  name: 'PlantMate Compost',
  description: '100% decomposed organic waste fertilizer',
  price: '$20.00',
  unit: 'bag',
  image: 'https://m.media-amazon.com/images/I/81tFMeIXJTL.UF1000,1000_QL80.jpg'
},
{
  name: 'GreenFarm Vermi+',
  description: 'Enriched vermicompost for organic farms',
  price: '$24.20',
  unit: 'bag',
  image: 'https://m.media-amazon.com/images/I/61O9EfXOK6L.UF1000,1000_QL80.jpg'
},
{
  name: 'HerbiGro Extract',
  description: 'Herbal extract-based organic fertilizer',
  price: '$27.30',
  unit: 'bottle',
  image: 'https://5.imimg.com/data5/TY/NV/GA/SELLER-19139309/bhringraj-dry-extract-500x500-500x500.jpg'
},
{
  name: 'NaturaKelp Liquid',
  description: 'Cold-processed kelp for stress resistance',
  price: '$31.50',
  unit: 'bottle',
  image: 'https://i.ebayimg.com/images/g/qfcAAOSwis1iaOkL/s-l500.jpg'
},
{
  name: 'BioSoil Activator',
  description: 'Microbial mix to restore soil health',
  price: '$28.00',
  unit: 'bag',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcX8gU3SXDv8wZ1SwA6cLKE4M9eZBPWzjpNA&s'
},
{
  name: 'RootFuel Organic',
  description: 'High-performance natural root stimulator',
  price: '$26.60',
  unit: 'bottle',
  image: 'https://rootfuel.in/cdn/shop/files/Untitleddesign_1.png?v=1725966690'
},
{
  name: 'EcoSoil Enhancer',
  description: 'Improves organic matter content in soil',
  price: '$26.45',
  unit: 'bag',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj9N5Pq_EfbpbGmegHI0GQde5ERwpF_9khhQ&s'
},
{
  name: 'BioBloom Booster',
  description: 'Organic bloom-phase fertilizer for flowering crops',
  price: '$24.80',
  unit: 'bottle',
  image: 'https://mankindag.com/wp-content/uploads/2022/10/BIO-BLOOM.png'
},
{
  name: 'NeemGold Fertilizer',
  description: 'Neem-based organic pest-repellent fertilizer',
  price: '$28.90',
  unit: 'bag',
  image: 'https://www.neemindia.com/wp-content/uploads/2018/07/Neem-Gold-40-Kg.jpg'
},
{
  name: 'WormCast Pure',
  description: 'Premium vermicompost from red wigglers',
  price: '$21.99',
  unit: 'bag',
  image: 'https://sites.create-cdn.net/siteimages/32/9/7/329768/21/3/9/21391099/1000x680.webp?1740652741'
},
{
  name: 'Seaweed Max',
  description: 'Organic seaweed extract for micronutrient balance',
  price: '$30.00',
  unit: 'bottle',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQquPrLsezjvZF3C_Io8n1BzACiErZH0cGLcQ&s'
},
{
  name: 'MycoBoost Bio',
  description: 'Mycorrhiza-based biofertilizer for root synergy',
  price: '$29.75',
  unit: 'bottle',
  image: 'https://trsagri.com/wp-content/uploads/2024/07/Myco-Boost.jpg'
},
{
  name: 'NatureGrow Mix',
  description: 'Balanced blend of natural nutrients for all crops',
  price: '$25.40',
  unit: 'bag',
  image: 'https://primary.jwwb.nl/public/u/b/q/temp-beybutmnnmlubbzxhixl/18hcme/image_1.jpg?enable-io=true&enable=upscale&fit=bounds&width=414'
},
{
  name: 'EarthTone Granules',
  description: 'Slow-release organic granules for vegetable beds',
  price: '$33.99',
  unit: 'bag',
  image: 'https://m.media-amazon.com/images/I/81JEToRmljL.UF350,350_QL80.jpg'
},
{
  name: 'Foliar BioSpray',
  description: 'Plant-based foliar feed for leaves and buds',
  price: '$22.49',
  unit: 'bottle',
  image: 'https://5.imimg.com/data5/SELLER/Default/2023/9/345495233/NR/XE/VW/5416364/bio-spray-powder-organic-crop-enhancer.jpeg'
},
{
  name: 'PlantMate Compost',
  description: '100% decomposed organic waste fertilizer',
  price: '$20.00',
  unit: 'bag',
  image: 'https://m.media-amazon.com/images/I/41hPchpMScL.UF1000,1000_QL80.jpg'
},
{
  name: 'GreenFarm Vermi+',
  description: 'Enriched vermicompost for organic farms',
  price: '$24.20',
  unit: 'bag',
  image: 'https://m.media-amazon.com/images/I/61O9EfXOK6L.UF1000,1000_QL80.jpg'
},
{
  name: 'HerbiGro Extract',
  description: 'Herbal extract-based organic fertilizer',
  price: '$27.30',
  unit: 'bottle',
  image: 'https://5.imimg.com/data5/TY/NV/GA/SELLER-19139309/bhringraj-dry-extract-500x500-500x500.jpg'
},
{
  name: 'NaturaKelp Liquid',
  description: 'Cold-processed kelp for stress resistance',
  price: '$31.50',
  unit: 'bottle',
  image: 'https://i.ebayimg.com/images/g/qfcAAOSwis1iaOkL/s-l500.jpg'
},
{
  name: 'BioSoil Activator',
  description: 'Microbial mix to restore soil health',
  price: '$28.00',
  unit: 'bag',
  image: 'https://www.equoitaly.com/wp-content/uploads/2019/12/biosoil_250_sx.jpg'
},
{
  name: 'RootFuel Organic',
  description: 'High-performance natural root stimulator',
  price: '$26.60',
  unit: 'bottle',
  image: 'https://rootfuel.in/cdn/shop/files/Untitleddesign_1.png?v=1725966690'
},




];


const FertilizerProducts = () => {
  return (
    <div className="fertilizer-page">
      <Navbar/>

      <div className="category-header">
        <span className="back-arrow"><Link to="/Agroproducts" >✕</Link></span>
        <button className="active-tab">fertilizers</button>
      </div>

      <div className="product-grid">
        {products.map((item, i) => (
          <div className="product-card" key={i}>
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p className="desc">{item.description}</p>
            <p className="price"><i>{item.price}</i> <span> / {item.unit}</span></p>
            <button className="buy-btn">Buy now</button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer>
        <div>2025 AgroPrime</div>
        <div className="social-links">
          <a href="#">Facebook</a> |
          <a href="#">Instagram</a> |
          <a href="#">Youtube</a>
        </div>
      </footer>
    </div>
  );
};

export default FertilizerProducts;