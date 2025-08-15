import { useEffect, useState ,useContext} from "react";
import { useParams } from "react-router-dom";
import Accordian from "./Accordian";
import {Testcontext} from "./Testcontext";

function Resdetails() {
  const { id } = useParams();
  const [resinfo, setResinfo] = useState(null);
  const Test=useContext(Testcontext);
  console.log(Test)

  const idrequest = () => {
   const resdetails = [
  {
    id: 1,
    restaurant_name: "Pasta Paradise",
    description: "A cozy Italian restaurant serving authentic pasta dishes with rich, homemade sauces.",
    cuisines: ["Italian", "Pasta"],
    accordionData: [
      {
        heading: "Recommended",
        options: [
          { name: "Fettuccine Alfredo", price: 12.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH7ecR2atSAw2EN_GYKYEpFJPcIEWPs3_UEQ&s" },
          { name: "Spaghetti Carbonara", price: 13.99, image: "https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-jumbo-v2.jpg" },
          { name: "Pesto Penne", price: 11.99, image: "https://www.forkintheroad.co/wp-content/uploads/2023/04/pesto-penne-tomatoes-129-500x500.jpg" }
        ]
      },
      {
        heading: "Veg Options",
        options: [
          { name: "Margherita Pasta", price: 10.99, image: "https://carlsbadcravings.com/wp-content/uploads/2017/03/Margherita-Pasta-9.jpg" },
          { name: "Pesto Penne", price: 11.99, image: "https://www.chefnotrequired.com/wp-content/uploads/2024/09/creamy-pesto-pasta-blog-hero.jpgl3" },
          { name: "Vegetable Lasagna", price: 12.49, image: "https://urbanfarmie.com/wp-content/uploads/Vegetarian-Lasagna-Square-1.jpg" }
        ]
      }
    ]
  },
  {
    id: 2,
    restaurant_name: "Sushi Delight",
    description: "A premium sushi spot offering fresh and delicious sushi rolls and sashimi.",
    cuisines: ["Japanese", "Sushi"],
    accordionData: [
      {
        heading: "Recommended",
        options: [
          { name: "Dragon Roll", price: 14.99, image: "https://www.justonecookbook.com/wp-content/uploads/2020/06/Dragon-Roll-0286-I.jpg" },
          { name: "Salmon Nigiri", price: 15.49, image: "https://aisforappleau.com/wp-content/uploads/2023/07/how-to-make-sushi-salmon-nigiri-6.jpg" },
          { name: "California Roll", price: 12.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOPPrfy8_3OvbT0F3NM9EKxJUSaqwEeSUglw&s" }
        ]
      },
      {
        heading: "Veg Options",
        options: [
          { name: "Cucumber Roll", price: 9.99, image: "https://images.squarespace-cdn.com/content/v1/568e8fe6b204d5cbecd5c77e/02ae8fee-8b6f-407a-851f-737a439ab4e9/Cucumber+Sushi-0905.jpg" },
          { name: "Avocado Roll", price: 10.49, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZtDYQv-6u6bKpBD2THsF-rc-RfZOGk6uggw&s" },
          { name: "Veg Tempura Uramaki", price: 11.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPqwbSZS4hwxASOLiaSMOEOBvz22_7zXWjLQ&s" }
        ]
      }
    ]
  },
  {
    id: 3,
    restaurant_name: "Burger Haven",
    description: "A paradise for burger lovers, featuring juicy, handcrafted burgers with gourmet toppings.",
    cuisines: ["American", "Fast Food"],
    accordionData: [
      {
        heading: "Recommended",
        options: [
          { name: "Cheeseburger Deluxe", price: 11.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKzqnG45BC5ASuNzAzwnNWzZ9Vw_VJqYLjdA&s" },
          { name: "BBQ Bacon Burger", price: 13.49, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3bIbjHxNKqWe7GVlS7ef5OuyZogTfmLrlUw&s" },
          { name: "Mushroom Swiss Burger", price: 12.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv18w6Gi2EhoQ1iEv3ZNT7UaqqDghX3993Lw&s" }
        ]
      },
      {
        heading: "Veg Options",
        options: [
          { name: "Veggie Burger", price: 10.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1IvOEs9XPj4AaKqnTnI5698CueUIQ600TRA&s" },
          { name: "Falafel Burger", price: 11.49, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEyhlSZrY-0IT7g0Za_6XZefhzhC0uhEV7zg&s" },
          { name: "Beyond Meat Burger", price: 12.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaTmY2HMZApM7KF_0EDWp2OUVk9H7XRJvHtA&s" }
        ]
      }
    ]
  },
  {
    id: 4,
    restaurant_name: "Vegan Vibes",
    description: "A plant-based eatery specializing in delicious and healthy vegan meals.",
    cuisines: ["Vegan", "Healthy"],
    accordionData: [
      {
        heading: "Recommended",
        options: [
          { name: "Jackfruit Tacos", price: 11.99, image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FEdit%2F2022-12-Jackfruit-Tacos%2FEdited%2Fjackfruit-tacos-1-edited" },
          { name: "Vegan Buddha Bowl", price: 12.49, image: "https://cdn.loveandlemons.com/wp-content/uploads/2020/06/IMG_25456.jpg" },
          { name: "Tofu Stir Fry", price: 11.49, image: "https://naturallieplantbased.com/wp-content/uploads/2024/02/peanut-tofu-stir-fry-6-500x500.jpg" }
        ]
      },
      {
        heading: "Veg Options",
        options: [
          { name: "All items are vegetarian and vegan", price: 0, image: "url21" }
        ]
      }
    ]
  },
  {
    id: 5,
    restaurant_name: "Taco Fiesta",
    description: "A vibrant Mexican restaurant serving mouth-watering tacos and traditional flavors.",
    cuisines: ["Mexican", "Street Food"],
    accordionData: [
      {
        heading: "Recommended",
        options: [
          { name: "Carnitas Tacos", price: 10.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGS1BBkLNRjfyKwMtx8V_Qn9jlqOv5XxYhBw&s" },
          { name: "Al Pastor Tacos", price: 11.49, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThnb2gCZeGpL2Y_QC0fDEU_wcMEhw-gqWbwQ&s" },
          { name: "Loaded Nachos", price: 12.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG_O-D-7pPBBFwIOCTP8JmK4VUbIdxArl68w&s" }
        ]
      },
      {
        heading: "Veg Options",
        options: [
          { name: "Grilled Veggie Tacos", price: 10.49, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvFaAF1JD_s3WdkeM1o9AmXahPzdukeaNhnw&s" },
          { name: "Bean and Cheese Quesadilla", price: 9.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5CuqjQiDQP7_r_Refz6hp1WxXztZaYYpg8g&s" },
          { name: "Chili Relleno", price: 11.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV4ZllC6V1yvhb6bL5qVS02-gvtMyhyYbazQ&s" }
        ]
      }
    ]
  },
  {
    id: 6,
    restaurant_name: "Pizza Palace",
    description: "A classic pizzeria offering freshly baked pizzas with authentic Italian ingredients.",
    cuisines: ["Italian", "Pizza"],
    accordionData: [
      {
        heading: "Recommended",
        options: [
          { name: "Pepperoni Pizza", price: 13.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8I0UzPdBT0GcrdIz-6NBGNwkHnYwN2ekWw&s" },
          { name: "Four Cheese Pizza", price: 12.99, image: "https://uk.ooni.com/cdn/shop/articles/FourCheese_Resized.jpg?crop=center&height=800&v=1598453116&width=800" },
          { name: "Truffle Mushroom Pizza", price: 14.49, image: "https://www.urbanbakes.com/wp-content/uploads/2022/10/Truffle-and-Mushroom-White-Pizza-with-Arugula-URBAN-BAKES-3.1.jpg" }
        ]
      },
      {
        heading: "Veg Options",
        options: [
          { name: "Margherita Pizza", price: 11.99, image: "https://safrescobaldistatic.blob.core.windows.net/media/2022/11/PIZZA-MARGHERITA.jpg" },
          { name: "Vegetarian Supreme", price: 12.49, image: "https://cdn.loveandlemons.com/wp-content/uploads/2023/02/vegetarian-pizza.jpg" },
          { name: "Spinach and Ricotta Pizza", price: 12.99, image: "https://djalalicooks.com/wp-content/uploads/2021/11/IMG_0016.jpg" }
        ]
      }
    ]
  },
  {
    id: 7,
    restaurant_name: "Noodle Nirvana",
    description: "A noodle house serving flavorful ramen and other Asian-inspired noodle dishes.",
    cuisines: ["Japanese", "Asian", "Noodles"],
    accordionData: [
      {
        heading: "Recommended",
        options: [
          { name: "Tonkotsu Ramen", price: 13.99, image: "https://glebekitchen.com/wp-content/uploads/2017/04/tonkotsuramenfront.jpg" },
          { name: "Spicy Miso Ramen", price: 12.99, image: "https://www.spoonforkbacon.com/wp-content/uploads/2024/04/spicy-ramen-noodles-recipe-card.jpg" },
          { name: "Yakisoba", price: 11.49, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHijDTtQptU2kKvz_ouj47Qf5GJs1TNPm5tw&s" }
        ]
      },
      {
        heading: "Veg Options",
        options: [
          { name: "Vegetable Ramen", price: 11.99, image: "https://myfoodstory.com/wp-content/uploads/2021/03/Tonkotsu-Style-Veg-Ramen-4.jpg" },
          { name: "Tofu Yakisoba", price: 11.49, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcXOPZAOBc7Z5orAB323tlUeZEH2FaLozXTg&s" },
          { name: "Udon with Mushrooms", price: 12.49, image: "https://frommybowl.com/wp-content/uploads/2021/04/Creamy_Mushroom_Udon_Soup_Vegan_FromMyBowl-6-scaled.jpg" }
        ]
      }
    ]
  },
  {
    id: 8,
    restaurant_name: "Steakhouse Supreme",
    description: "A high-end steakhouse known for its premium cuts of meat and elegant dining experience.",
    cuisines: ["Steakhouse", "American"],
    accordionData: [
      {
        heading: "Recommended",
        options: [
          { name: "Ribeye Steak", price: 24.99, image: "https://inkristaskitchen.com/wp-content/uploads/2022/04/air-fryer-ribeye-steak-comp-10-1-500x500.jpg" },
          { name: "Filet Mignon", price: 26.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPbMLwm-o0DnNlb0jhuG_j83DhiQlsb9vCJQ&s" },
          { name: "Grilled Lamb Chops", price: 25.49, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeR7HbsnTG6mGMN2MjaOE48Evdt0hW4fCzCw&s" }
        ]
      },
      {
        heading: "Veg Options",
        options: [
          { name: "Grilled Asparagus", price: 9.99, image: "url43" },
          { name: "Stuffed Bell Peppers", price: 10.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBllwmLjOfCEm27wuYgmLLslpIcTjDhNmHRA&s" },
          { name: "Baked Mac and Cheese", price: 11.49, image: "https://www.southernliving.com/thmb/7tvEnGp-U8vG5YOgJjsItak-nmM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Baked-Mac-and-Cheese-3x4-1126-6509f428efe649d6afe1d2d65938bf51.jpg" }
        ]
      }
    ]
  },
  {
    id: 9,
    restaurant_name: "Dim Sum Dynasty",
    description: "A traditional Chinese restaurant specializing in freshly steamed dim sum and dumplings.",
    cuisines: ["Chinese", "Dim Sum"],
    accordionData: [
      {
        heading: "Recommended",
        options: [
          { name: "Shrimp Dumplings", price: 11.49, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR5N13ANCJn9MnJoier-EJX6C87hIQ8d3laQ&s" },
          { name: "BBQ Pork Buns", price: 10.99, image: "https://silkroadrecipes.com/wp-content/uploads/2020/08/Chinese-BBQ-Pork-Buns-Char-Siu-Bao-square2.jpg" },
          { name: "Sticky Rice in Lotus Leaf", price: 12.49, image: "https://www.seriouseats.com/thmb/i1gokxt-KXjQxvf-B_PgwL_qWaQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__03__20150316-sticky-rice-with-lotus-leaf-shao-zhong-33-1fe07224fcae4ef08ef375bc42513dfe.jpg" }
        ]
      },
      {
        heading: "Veg Options",
        options: [
          { name: "Vegetable Dumplings", price: 10.49, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3HRvaojVc4Pys1b88Y76UmB63xl34-nv2NQ&s" },
          { name: "Spring Rolls", price: 9.99, image: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/01/Spring-Roll-Recipe-500x375.jpg" },
          { name: "Turnip Cake", price: 10.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFmAq52XwYH4G9CY5qdQ90AiAAnA_wZFH-1g&s" }
        ]
      }
    ]
  },
  {
    id: 10,
    restaurant_name: "Grill Master",
    description: "A BBQ hotspot offering perfectly grilled meats with smoky, bold flavors.",
    cuisines: ["BBQ", "American"],
    accordionData: [
      {
        heading: "Recommended",
        options: [
          { name: "Smoked Brisket", price: 14.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtl8N78DVWfG2GrsQP-4aFba20oqKkl19pxw&s" },
          { name: "BBQ Ribs", price: 15.99, image: "https://www.allrecipes.com/thmb/IWVelWahUb2gQxixWJC2N-HXp0k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/22469-Barbecue-Ribs-ddmfs-2x1-210-e799db142f594b00bb317bb357d0971c.jpg" },
          { name: "Pulled Pork Sandwich", price: 13.49, image: "https://whatsgabycooking.com/wp-content/uploads/2022/10/WGC-__-Pulled-Pork-Sammy-580x870-1.jpg" }
        ]
      },
      {
        heading: "Veg Options",
        options: [
          { name: "Grilled Corn", price: 7.99, image: "https://hips.hearstapps.com/hmg-prod/images/shot-2-0129-1522854796.png?crop=1xw:1xh;center,top&resize=1200:*" },
          { name: "BBQ Veggie Skewers", price: 9.49, image: "https://www.allrecipes.com/thmb/KBVMWciO-GJsEKnVOcUFvBDrOWk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/229166-grilled-veggie-skewers-DDMFS-013-4x3-38df5f3275934280a930c09d660a332c.jpg" },
          { name: "Mac and Cheese", price: 8.99, image: "https://www.allrecipes.com/thmb/MkbGgNcGadAWdYw0aRZbo8WapHM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/237311-slow-cooker-mac-and-cheese-DDMFS-4x3-9b4a15f2c3344c1da22b034bc3b35683.jpg" }
        ]
      }
    ]
  },
  {
    id: 11,
    restaurant_name: "Curry Corner",
    description: "An Indian cuisine gem serving rich and flavorful curries with aromatic spices.",
    cuisines: ["Indian", "Curry"],
    accordionData: [
      {
        heading: "Recommended",
        options: [
          { name: "Butter Chicken", price: 13.49, image: "https://feelgoodfoodie.net/wp-content/uploads/2024/02/Easy-Butter-Chicken-TIMG.jpg" },
          { name: "Lamb Rogan Josh", price: 14.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3beBkvYTloWz6mhttkw3UYORn_-EpskUCzw&s" },
          { name: "Paneer Tikka Masala", price: 12.49, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReKxJR0ce0renYEro-eiu0o7nLt5d-5AlnsQ&s" }
        ]
      },
      {
        heading: "Veg Options",
        options: [
          { name: "Chana Masala", price: 10.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-CoaPS55AffvqyQiKmwHbcu4PWkR-VCTOgQ&s" },
          { name: "Palak Paneer", price: 11.49, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTa0vMZXRWCqeT6LPG6YbA2wDxk8iisAMwQw&s" },
          { name: "Vegetable Korma", price: 10.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyC9PU9CwfiYte4s34WmZe9vE33z9N-KZIFQ&s" }
        ]
      }
    ]
  },
  {
    id: 12,
    restaurant_name: "Dosa Corner",
    description: "A South Indian eatery known for its crispy dosas and delicious chutneys.",
    cuisines: ["Indian", "South Indian"],
    accordionData: [
      {
        heading: "Recommended",
        options: [
          { name: "Masala Dosa", price: 9.99, image: "https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__700_0_0_0_auto.jpg" },
          { name: "Mysore Dosa", price: 10.49, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpt-YAVG9KBdhOCGk5pUBKKJIi42O9W5BFDA&s" },
          { name: "Rava Dosa", price: 10.99, image: "https://www.vegrecipesofindia.com/wp-content/uploads/2018/09/rava-dosa-recipe-1.jpg" }
        ]
      },
      {
        heading: "Veg Options",
        options: [
          { name: "All items are vegetarian", price: 0, image: "url67" }
        ]
      }
    ]
  }
];

    
    return resdetails.filter((x) => x.id === Number(id)); 
  };

  useEffect(() => {
    const data = idrequest();
    setResinfo(data);
  }, [id]); 

  if (!resinfo || resinfo.length === 0) {
    return <p>Loading restaurant details...</p>;
  }
  
  const { restaurant_name, description, cuisines, accordionData } = resinfo[0];
  
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4 ">
      <h1 className="text-2xl font-bold text-gray-800 cursor-pointer">{restaurant_name}</h1>
      <p className="text-lg text-gray-600 cursor-pointer">{description}</p>
      <p className="text-md text-gray-500 cursor-pointer">Cuisines: {cuisines.join(", ")}</p>
      {accordionData?.map((item, index) => (
        <Accordian key={index} accordiandata={item} />
      ))}
    </div>
  );
  
  
  
}

export default Resdetails;

