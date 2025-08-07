import React, { useState } from "react";
import "../Css/cashcrops.css";
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const AllProduct = () => {
  const products = [
     {
    name: "Organic NPK Fertilizers",
    desc: "Premium organic fertilizers blend",
    price: "₹1621.57/kg",
    image: "https://casadeamor.in/cdn/shop/files/BioNPK400gm.jpg?v=1702023957",
  },
  {
    name: "Hybrid Maize Seeds",
    desc: "High yield variety",
    price: "₹1056.64/kg",
    image: "https://agribegri.com/productimage/17467238921750166358.webp",
  },
  {
    name: "Kottayam Mangrove",
    desc: "High quality mix",
    price: "₹881.92/kg",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnx5-0xolzI-KFVTsq1Z_u7Xwu7rNHVzzUJw&s",
  },
  {
    name: "Pearl Millet",
    desc: "Fast maturing & drought-resistant",
    price: "₹2993.54",
    image: "https://twobrothersindiashop.com/cdn/shop/articles/Pearl_Millet_-_Benefits_Nutritional_value_uses_recipes_and_more_2.png?v=1689258582&width=1024",
  },
  {
    name: "Pumpkin Seeds",
    desc: "Raw Seeds",
    price: "₹2537.60",
    image: "https://nuttyyogi.com/cdn/shop/products/Roasted_Pumpkin_Seeds.jpg?v=1680770500",
  },
  {
    name: "Coffee Cherries",
    desc: "Specialty Coffee Fruit",
    price: "₹2562.56",
    image: "https://www.shutterstock.com/image-photo/female-farmer-check-coffee-beans-600nw-2504828649.jpg",
  },
  {
    name: "Cotton",
    desc: "Locton cotton production",
    price: "₹4224.06",
    image: "https://media.istockphoto.com/id/1068990556/photo/cotton-plant-in-a-louisiana-field.jpg?s=612x612&w=0&k=20&c=RmWaeZakBA4opcIVXCpwV7hcAxoFfXfFqNG73qXLU50=",
  },
  {
    name: "Wheat",
    desc: "Used for staple production",
    price: "₹2471.04",
    image: "https://media.istockphoto.com/id/1576215601/photo/wheat.jpg?s=612x612&w=0&k=20&c=RYwpRZ5XVRQG6BPfROInGLOAldmVPk8PChAUybenl_s=",
  },
  {
    name: "Hydraulic Reversible Plough",
    desc: "Heavy-duty plough equipment",
    price: "₹6656000.00",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/5/310482217/XI/XR/OL/4043440/hydraulic-reversible-plough-500x500.jpg",
  },
  {
    name: "SugarCane",
    desc: "Used for sugar production",
    price: "₹5074.37",
    image: "https://c8.alamy.com/comp/2CTM7BW/vertical-closeup-shot-of-a-sugarcane-palnt-in-a-farmland-2CTM7BW.jpg",
  },
  {
    name: "Stolzfus Redhawk GT150 Spreader",
    desc: "Primarily for fertilizers",
    price: "₹74880000.00",
    image: "https://www.stoltzfusspreaders.com/wp-content/uploads/2025/01/IMG_8096-scaled-600x600.jpg",
  },
  {
    name: "Cocoa",
    desc: "Theobroma cacao",
    price: "₹1705.60",
    image: "https://as2.ftcdn.net/jpg/05/43/22/71/1000_F_543227170_XH2I8u6SbTJasV4OR9V8s4rmRwPzORIP.jpg",
  },
  {
    name: "Black Mustard Seeds",
    desc: "Farm Fresh Black Mustard Seeds",
    price: "₹4160.83",
    image: "https://media.istockphoto.com/id/477782987/photo/black-mustard-seeds-isolated-on-white.jpg?s=612x612&w=0&k=20&c=DDlJat0pt-veanlRb0z2V0TxqWAe0Be_8byDPqiVJdg=",
  },
    {
    name: "White Sesame Seeds",
    desc: "SBH White Sesame Seeds",
    price: "₹7396.64",
    image: "https://static.vecteezy.com/system/resources/thumbnails/049/111/412/small_2x/a-wooden-bowl-filled-with-white-sesame-seeds-accompanied-by-a-spoon-set-on-a-dark-surface-free-video.jpg"
  },
  {
    name: "Mini Power Tiller",
    desc: "Portable power tiller equipment",
    price: "₹7072000.00",
    image: "https://pre-live-admin.balwaan.com/uploads/media/2023/Balwaan-mini-power-tiller-machine-1.jpg"
  },
  {
    name: "Coriander Care",
    desc: "Boosts coriander leaf production",
    price: "₹2161.17",
    image: "https://www.trustbasket.com/cdn/shop/articles/Coriander.webp?v=1679918194"
  },
  {
    name: "Chilli Spray",
    desc: "Pest protection for chilli crops",
    price: "₹2639.12",
    image: "https://5.imimg.com/data5/YJ/BJ/CQ/SELLER-28985275/chilli-care-500x500.jpg"
  },
  {
    name: "Sunflower Seeds",
    desc: "Best Treated Sunhel for Sunflower",
    price: "₹3330.43",
    image: "https://www.amritahealthfoods.com/cdn/shop/articles/img-1677260300100.png?v=1677345526&width=1100"
  },
  {
    name: "Alfalfa Seeds",
    desc: "For protein-rich forage crops",
    price: "₹3013.84",
    image: "https://www.silkrute.com/images/detailed/3171/lucerne-seeds-sevengrains-original-imagzrvbzv68yjbz.jpeg"
  },
  {
    name: "Agricultural Drone Sprayer",
    desc: "For pesticide and fertilizer spraying",
    price: "₹49920000.00",
    image: "https://5.imimg.com/data5/ANDROID/Default/2022/4/AA/WY/ED/14166347/product-jpeg-500x500.jpg"
  },
  {
    name: "Green Moong Booster",
    desc: "Improves nitrogen fixation",
    price: "₹2783.20",
    image: "https://twobrothersindiashop.com/cdn/shop/articles/green-gram-benefits.png?v=1691755429&width=1024"
  },
    {
    name: "Boom Sprayer Attachment",
    desc: "High coverage pesticide sprayer",
    price: "₹4825600.00",
    image: "https://www.zupan-agroshop.com/slir/w1600-q90/modules/uploader/uploads/s_product/pics_s_product/nosilec-sob-poljedelski-93-0.jpg"
  },
  {
    name: "Crop Harvester Pro 7000",
    desc: "Heavy-duty crop harvester",
    price: "₹104000000.00",
    image: "https://mahindrafarmmachinery.com/sites/default/files/2024-12/7.-Combine-Harvester-Farming%2C-Uses%2C-and-Facts-min_1.jpg"
  },
  {
    name: "Garlic Grow Boost",
    desc: "Stimulates garlic bulb development",
    price: "₹3227.36",
    image: "https://m.media-amazon.com/images/I/61LUgeofJkL._UF1000,1000_QL80_.jpg"
  },
  {
    name: "Dill Seeds",
    desc: "Used as spice and herb",
    price: "₹2363.68",
    image: "https://m.media-amazon.com/images/I/514xA73HVyL._UF1000,1000_QL80_.jpg"
  },
  {
    name: "Rosemary Seeds",
    desc: "Fragrant herb for culinary use",
    price: "₹2904.68",
    image: "https://greenparadiselive.com/cdn/shop/files/Rosemaryseeds_1_1200x1200.png?v=1714801493"
  },
  {
    name: "Tractor Operated Bund Former",
    desc: "Bund shaping agricultural tool",
    price: "₹16640000.00",
    image: "https://5.imimg.com/data5/GU/YG/MY-31255342/tractor-operated-bund-former-28-sheet-type-29-500x500.jpg"
  },
  {
    name: "Pulses Care Ultra",
    desc: "Essential micronutrients for pulse crops",
    price: "₹2430.14",
    image: "https://5.imimg.com/data5/SELLER/Default/2021/6/PU/YC/IS/1261367/cummins-pulse-ultra-plus-12v-32ah-battery-ax1013233-500x500.jpg"
  },
  {
    name: "Heavy Duty Chaff Cutter",
    desc: "For efficient fodder cutting",
    price: "₹6240000.00",
    image: "https://toolz4industry.com/wp-content/uploads/2024/05/really-heavy-chaff-cutter-7.png"
  },
  {
    name: "Mechanical Paddy Transplanter",
    desc: "Used for efficient paddy transplantation",
    price: "₹11648000.00",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/6/430289073/WX/EO/UF/42159037/paddy-transplanters-500x500.jpg"
  },
  {
    name: "Zucchini Seeds",
    desc: "Hybrid Zucchini High Yield",
    price: "₹3486.08",
    image: "https://rukminim2.flixcart.com/image/704/844/xif0q/plant-seed/u/1/b/100-vlr-308-summer-squash-black-beauty-zucchini-100-seeds-vibex-original-imaggh94h2hf3ppz.jpeg?q=90&crop=false"
  },
    {
    name: "Tomato Bloom",
    desc: "Encourages healthy tomato fruiting",
    price: "₹2482.00",
    image: "https://www.groworganic.com/cdn/shop/articles/blossom-drop-lead-1280x720_4a2c0d23-1dab-4241-8294-a5549167af49.jpg?v=1753206251"
  },
  {
    name: "Fenugreek Seeds",
    desc: "Used in spices and herbal remedies",
    price: "₹2224.00",
    image: "https://m.media-amazon.com/images/I/71i4WL1pepL._UF1000,1000_QL80_.jpg"
  },
  {
    name: "Okra Seeds",
    desc: "Hybrid okra for high yield",
    price: "₹1901.00",
    image: "https://5.imimg.com/data5/SELLER/Default/2021/6/EC/HB/GN/130999451/okra-seeds.jpg"
  },
  {
    name: "Onion Gold Enhancer",
    desc: "Improves onion bulb size and quality",
    price: "₹2905.00",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHiEXH7TSgMfbtjNaF09gtcp9h1rveRdx0w&s"
  },
  {
    name: "Battery Sprayer",
    desc: "Rechargeable pesticide sprayer",
    price: "₹647400.00",
    image: "https://m.media-amazon.com/images/I/51Hi606NTVL._UF1000,1000_QL80_.jpg"
  },
  {
    name: "Chia Seeds",
    desc: "Nutrient-rich seeds for superfoods",
    price: "₹6546.00",
    image: "https://m.media-amazon.com/images/I/51Z9BNZOgNL._UF1000,1000_QL80_.jpg"
  },
  {
    name: "Peanut Grow Fast",
    desc: "Accelerates peanut plant growth",
    price: "₹2673.00",
    image: "https://cdn.mos.cms.futurecdn.net/5ZH8RMjoETFUoothpM2LvQ-1200-80.jpg"
  },
  {
    name: "Groundnut Shield",
    desc: "Protects groundnut crops from pests",
    price: "₹2386.25",
    image: "https://tiimg.tistatic.com/fp/1/001/693/groundnut-with-shell-868.jpg"
  },
  {
    name: "Turmeric Max Yield",
    desc: "Boosts root growth and crop size",
    price: "₹2232.70",
    image: "https://5.imimg.com/data5/DW/EE/GL/SELLER-8051866/curcumin-extract-95--500x500.jpg"
  },
  {
    name: "Black Gram Enricher",
    desc: "Improves productivity of black gram",
    price: "₹2278.35",
    image: "https://m.media-amazon.com/images/I/61OILaSIXGL._UF1000,1000_QL80_.jpg"
  },
  {
    name: "Soybean Booster",
    desc: "Enhances soybean crop performance",
    price: "₹2631.10",
    image: "https://m.media-amazon.com/images/I/71dTPREJwfL.jpg"
  },
  {
    name: "Brinjal Booster",
    desc: "Strengthens brinjal plant growth",
    price: "₹2332.30",
    image: "https://m.media-amazon.com/images/I/61I7Xvi8AhL._UF1000,1000_QL80_.jpg"
  },
  {
    name: "Cassava Starter",
    desc: "Promotes healthy cassava root development",
    price: "₹2896.70",
    image: "https://m.media-amazon.com/images/I/81AtasXgC-L._SL1500_.jpg"
  },
  {
    name: "Papaya Seeds",
    desc: "Hybrid papaya seeds for orchard",
    price: "₹3054.40",
    image: "https://static.toiimg.com/photo/111081136.cms"
  },
  {
    name: "Beetroot Grow Enhancer",
    desc: "Increases beetroot sugar and size",
    price: "₹2788.80",
    image: "https://m.media-amazon.com/images/I/71w54AAKy2L._UF1000,1000_QL80_.jpg"
  },
  {
    name: "Agri Trolley Attachment",
    desc: "Durable trailer for fieldwork",
    price: "₹7072000",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/8/336070878/RG/NK/GI/127006838/mini-tractor-trolley.jpg"
  },
  {
    name: "Drum Seeder",
    desc: "Manual paddy seeder",
    price: "₹72000",
    image: "data:image/jpeg;base64,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dTDNYRvfzj9RlDhlsGkXuAey6uGNgaA1oAAAAAFgANAAOAQckREBERAREQEREBERAREQFGYKOlUH/Pd7mMUmozBd9R+sP/hYgk0REBERAREQEREEThn96qh2xH1xqWUThw/LKrugP7jvgpZAREQEREBERAREQEREBERAREQEREBERAREQFGYLvqP1h38DFJqMwTzqj9Yd/BGgk0REBERAREQEREEVSaVk/ayI+rMFKqMZ/fndsDfdI/4qTQEREBERAREQEREBERAREQEREBERAREQEREBReB+dUfrD/4I1KKMwYjNUN4idxI+s1pB9X3IJNERAREQEREBERBHEflg7YD7pB8VIrAkcPK2DjzUhPdnjt77+pZ6AiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgLAqcPJk56J+R5Aa7TMx4G4Ob1jgd4uVnog1vDKyqklnaHRdF487NYb2WZ2fN37yVJZavrp/U9MJp2NkqC1tiZRffr0GO49r3HxUks9KZTHbO73+1srLfDAayp4uh8Gu+K7ck302eyfispFoqwnR1HCSL7N39a481U+lh+yd/Ws9EEeYan0sX2R/rUTUVFS2tjiMrekwi4YcovmdfLm1d81a99MxWzKExCJvl1M6wuRIL9zHEfefWs9THK7dt28z/S2Nk5SFFRCMucXOe91sznbzbcABo0C50WWiLRUREQEREBERAREQERcbHsQckREBERAREQEREBERAREQYOHfnKj/VH8qJZywMM86f/AFj/AC4x+Cz0BERAREQFD4p/fKTvmH/iKmFE4mPyuk75v5RH4oJZERAREQEREBERAREQEREBERAREQEREBERAREQEREGDhjbGbtlcf3Wj8FnLDotJJW/pB3tC6zEBERAREQFF4j/AHql75f5alFGznNVxt+gxz/X0PggkkREBERAREQEREBERAREQEREBERAREQEREBERAREQYsvRla7g4ZD2HeD47vBZS654g9padx9fYR23XTBOQcj7B3A8HDrHwQZSIiAiIgKOw7pySTcCcjO5u8jsJ94K+VkxlJhjP13ixDR1DrP/Ou2fFGGtDWiwAsO4IOaIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIC66iBrxlcLj3jtB4LsRBgFk8fmkSt6nWD/XuPf7kOJ286KcHqEbne9u9Z6IMFuIk+bDN+0zKPWdy+mKWQWcQxp4DV1uoncPfcFZqIOuCFrBlaLD/mpPE9q7ERAREQEREBERAREQF8XF3nDxUdUSOu/U6NbbXtegkyVw16/cqc2sxipa6zaicDqErwPcVrnyrUenm+0d8VS57Jkf/Z"
  },
  {
    name: "Sugar Beet Seeds",
    desc: "Improved sugar beet cultivation",
    price: "₹3,528.32",
    image: "https://hancockseed.com/cdn/shop/products/SugarBeetSeed-1200px_1200x1200.jpg?v=1711050868"
  },
  {
    name: "Turnip Boost",
    desc: "Growth enhancer for turnip crops",
    price: "₹2,487.68",
    image: "https://post.healthline.com/wp-content/uploads/2019/11/turnip-root-vegetable-1296x728-header-1296x728.jpg"
  },
  {
    name: "Radish Hybrid Seeds",
    desc: "Fast-growing hybrid radish",
    price: "₹2,056.64",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/3/399104325/VO/TY/EV/118108476/radish-seeds-500x500.jpg"
  },
  {
    name: "Cabbage Pro",
    desc: "Leafy cabbage yield booster",
    price: "₹2,604.16",
    image: "https://images.onlymyhealth.com/imported/images/2024/May/02_May_2024/main_cabbage.jpg"
  },
  {
    name: "Farm Field Roller",
    desc: "Heavy-duty soil compacting roller",
    price: "₹14,560,000",
    image: "https://www.lloyd.ltd.uk/wp-content/uploads/2019/10/LtdWeb-IMAGEBLOCK-Listing-1200x1000-WW-HydraulicCambridgeRoller.jpg"
  },
  {
    name: "Agri Water Tanker",
    desc: "Mobile water tank for irrigation",
    price: "₹12,480,000",
    image: "https://assets.tractorjunction.com/tractor-junction/assets/images/images/implementTractor/water-tanker-18-1615351329.webp"
  },
  {
    name: "Tractor Rear Loader",
    desc: "Rear loader for material handling",
    price: "₹18,304,000",
    image: "https://5.imimg.com/data5/SELLER/Default/2020/11/AT/YU/DB/21210682/tractor-rear-loader.png"
  },
  {
    name: "Plough Harrow Combo",
    desc: "2-in-1 plough and harrow",
    price: "₹24,960,000",
    image: "https://www.fieldking.com/images/tillage/harrow/lg/robust-poly-disc-harrow-and-plough.png"
  },
  {
  name: "Multi-Crop Planter",
  desc: "Versatile planting equipment",
  price: "₹3,95,200",
  image: "https://5.imimg.com/data5/SELLER/Default/2021/12/RH/QO/ZV/192022/zero-till-seed-cum-fertilizer-drill-with-multi-crop-planter-attachment-copy.png"
},
{
  name: "Castor Seed Oil Enhancer",
  desc: "Increases oil yield in castor",
  price: "₹3,318.68",
  image: "https://m.media-amazon.com/images/I/71Co17xbv1L._UF1000,1000_QL80_.jpg"
},
{
  name: "Tamarind Seeds",
  desc: "Fresh processed tamarind seeds",
  price: "₹2,113.28",
  image: "https://m.media-amazon.com/images/I/41EmBlCoVZL._UF1000,1000_QL80_.jpg"
},
{
  name: "Green Chilli Booster",
  desc: "For spicier and larger chillis",
  price: "₹2,471.04",
  image: "https://m.media-amazon.com/images/I/71izmkRLSAL.jpg"
},
{
  name: "Coconut Tree Enhancer",
  desc: "Boosts coconut fruit yield",
  price: "₹3,660.80",
  image: "https://m.media-amazon.com/images/I/61MVkr0W-tL._UF1000,1000_QL80_.jpg"
},
{
  name: "Wheat Germ Booster",
  desc: "Enriches wheat for better germination",
  price: "₹2,599.00",
  image: "https://www.verywellhealth.com/thmb/d1P3tvADGrH0VCf5zmFKs2iiNfA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-475924306-eb6eff64925f42adad35610b92dce02e.jpg"
},
{
  name: "Neem Kernel Powder",
  desc: "Organic pest repellent",
  price: "₹1,823.00",
  image: "https://5.imimg.com/data5/SELLER/Default/2023/2/DT/NW/SQ/9881769/neem-kernel-powder.jpg"
},
{
  name: "Tractor Seed Drill",
  desc: "Sowing tool for large fields",
  price: "₹27,45,600",
  image: "https://shriramassociate.in/cdn/shop/files/Shriram_Associate_Seed_Drills__9_Tyne_1.jpg?v=1727869453"
},
{
  name: "Multi-Nozzle Boom Sprayer",
  desc: "Wide coverage sprayer",
  price: "₹4,06,680",
  image: "https://m.media-amazon.com/images/I/515MQmpblZL.jpg"
},
{
  name: "Agro Seeder Machine",
  desc: "Automated seed spreading equipment",
  price: "₹23,29,600",
  image: "https://ksagrotech.org/wp-content/uploads/2022/01/Zero-Seed-Drill.jpg"
},
{
  name: "Vertical Paddy Thresher",
  desc: "Compact rice harvesting machine",
  price: "₹7,24,320",
  image: "https://speworks.com/wp-content/uploads/2024/05/Power-Operated-Paddy-Thresher-Machine-a.jpg"
},
{
  name: "Farm Fence Roller",
  desc: "For quick and tight fencing",
  price: "₹2,66,240",
  image: "https://lirp.cdn-website.com/be52c650/dms3rep/multi/opt/FFD2100-3000-640w.jpg"
},
{
  name: "Manual Garden Seeder",
  desc: "Ideal for garden row planting",
  price: "₹1,49,760",
  image: "https://m.media-amazon.com/images/I/51ifVr58VAL._UF1000,1000_QL80_.jpg"
},
{
  name: "Electric Crop Dryer",
  desc: "Used for drying crops faster",
  price: "₹5,32,480",
  image: "https://s.alicdn.com/@sc04/kf/H247e1ac9cbfa496aa7e64a42ced4c325a/Hot-Selling-Household-Automatic-Small-Electric-Heating-Cashew-Nut-Peanut-Cocoa-Bean-Grain-Fish-Meal-Rotary-Drum-Dryer.jpg"
},
{
  name: "Agricultural Shade Net",
  desc: "Protects crops from excess sunlight",
  price: "₹2,48,368",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZeeIYEJp28bCSrvtHNETf_ORiCBG9J3vxfw&s"
}

];

      const { addToCart, cartItems } = useContext(CartContext);
      const [addedItems, setAddedItems] = useState([]);
    
      const cartList = (item, index) => {
        addToCart(item);
        setAddedItems(prev => [...prev, index]);
      };
    

  return (
    <div className="all-product-page">
      <Navbar />

      <div className="category-header" style={{ marginTop: '100px' }}>
      <span className="back-arrow"><Link to="/Agroproducts" >✕</Link></span>
        <button className="active-tab">All Product</button>
      </div>

      <div className="product-grid">
        {products.map((item, i) => (
          <div className="product-card" key={i}>
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p className="desc">{item.desc}</p>
            <p className="price"><i>{item.price}</i></p>
             <div style={{ display: 'flex', marginTop: '20px',marginLeft:'10px', width: '180px', justifyContent: 'center' }}>
                {addedItems.includes(i) && (
                  <img
                    src="/images/checkmark.gif"
                    alt="Done"
                    style={{ height: '25px', marginTop: '15px',width:'20%'}}
                  />
                )}
                <button onClick={() => cartList(item, i)} className="buy-button" 
                disabled={addedItems.includes(i)} style={addedItems.includes(i)? {backgroundColor:'green',color:'white'}:{}}> 
                {addedItems.includes(i) ? 'Added' : 'Add To Cart'}
                </button>
              </div>
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

export default AllProduct;