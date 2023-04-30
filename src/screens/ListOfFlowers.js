import React from 'react';
import { FlatList } from "react-native";
import Home from '../component/Home';
import Flower1 from "../../assets/images/oc-gonzalez.jpg";
 import Flower2 from "../../assets/images/christie-kim.jpg";
 import Flower3 from "../../assets/images/amy-shamblen.jpg";
 import Flower4 from "../../assets/images/thomas-ae.jpg";
import Flower5 from "../../assets/images/tanalee-youngblood.jpg";
 import Flower6 from "../../assets/images/doug-kelley.jpg";
import User1 from "../../assets/images/profile1.jpg";
import User2 from "../../assets/images/profile3.jpg";
import User3 from "../../assets/images/computerScientist.jpg";




const ListOfFlowers = () => {
    const minRead = ' mins read';
    const dot = '.';
    const db =[
      {
        id:1,
        img:Flower1,
        heading:"Medicinal Flower  people turn to flowers for their medicinal powers. ...",
        owner:"Jeandy Vlean",
        time:`${11 + minRead}`,
        user:User1, 
        article:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."
      },
      {
        id:2,
        img:Flower2,
        heading:"Paper Cut Flower Border Mothers Day Pink Warm White Transparent",
        owner:"Massah Rah",
        time:`${9 + minRead}`,
        user:User2, 
        article:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },

      {
        id:3,
        img:Flower3,
        heading:"Food Flowers can as pleasing to  palate as they are to the eyes. ...",
        owner:"Tony Blair",
        time:`${4 + minRead}`,
        user:User3, 
        article:"Flowers can be as pleasing to the palate as they are to the eyes. While some flowers are not so tasty and others are entirely inedible, some of these beautiful buds are edible and, in fact, can add flavor to cooking. Explore the world of edible flowers, looking at flower derivatives, such as rose oil, as well as flowers that some eat whole, such as squash blossoms. Explore the ways in which these stunning flowers can be used in the crafting of foods as well as the potential health benefits associated with eating foods that contain flower parts."
      },
      {
        id:4,
        img:Flower4,
        heading:"All flowers are beautiful, some have more than  a pleasing appearance. ...",
        owner:"Tom Tucker",
        time:`${3 + minRead}`,
        user:User2, 
        article:"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
      },
      {
        id:5,
        img:Flower5,
        heading:"What is the importance of pollination to agriculture and can farmers benefit?",
        owner:"Jeandy Vlean",
        time:`${2 + minRead}`,
        user:User3, article:"Experience the magic of Spring with this stunning bouquet of Tulips and Gypsophila. The Spring Supreme Bouquet is the perfect way to add a pop of colour and beauty to any occasion, be it a birthday, anniversary, or just because. The delicate arrangement of seasonal colors reminiscent of a mesmerizing sunset, will bring joy and tranquility to any space. Perfect for brightening someone's home and their day, this bouquet is sure to put a smile on their face. Order now and enjoy next day delivery! Vase not included*"
      },
      {
        id:6,
        img:Flower6,
        heading:"Do flowers exhibit sound of any frequency? Lightning has a sound which we can't create artificially.",
        owner:"Nana Adjoa",
        time:`${1 + minRead}`,
        user:User2, 
        article:"Experience the magic of Spring with this stunning bouquet of Tulips and Gypsophila. The Spring Supreme Bouquet is the perfect way to add a pop of colour and beauty to any occasion, be it a birthday, anniversary, or just because. The delicate arrangement of seasonal colors reminiscent of a mesmerizing sunset, will bring joy and tranquility to any space. Perfect for brightening someone's home and their day, this bouquet is sure to put a smile on their face. Order now and enjoy next day delivery! Vase not included*"
      },
    ];

  return (
    <FlatList
      data={db}
      renderItem={({item})=> {
        return (
          <Home
            img= {item.img}
            Heading= {item.heading}
            Owner= {item.owner}
            User= {item.user}
            Time= {item.time}
            Article= {item.article}
            Id={item.id}
            Color= {item.color}
          />
        )
    }}
    keyExtractor={(item)=>item.id }
    />
);
}

export default ListOfFlowers;
