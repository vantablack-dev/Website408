import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react';
import Items from './components/Items';
import Categories from './components/Categories';
import ShowFullItem from './components/ShowFullItem';
import ProductDetailPage from './components/ProductDetailPage';
import Conventor from './components/Conventor';
import HooksComponent from './components/HooksComponent';
import { createContext, useContext } from "react";
import { useState } from "react";
import Dialog from './components/DialogWindow';
import Animation from './components/AnimationItem';
import AdminPage from './components/AdminPage';
import AuthModal from './components/AuthModal';
import NewProductForm from './components/NewProductForm';
import ImageUpload from './components/ImageUpload';
import Login from './components/Login';
import SignupForm from './components/SignupForm.';
import NumberForm from './components/NumberForm';

const UserContext = createContext();
const LanguageContext = createContext();

function UserName() {
  const { name } = useContext(UserContext);
  return <p>Name: {name}</p>;
}

function Language() {
  const { language } = useContext(LanguageContext);
  return <p>Language: {language}</p>;
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders:[],
      currentItems:[],
      items: [
        {
          id:1,
          title: 'Hyperx Alloy fps',
          img: '1.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'hyper',
          price: '49.99'
        },
        {
          id:2,
          title: 'SteelSeries Apex',
          img: '2.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'steel',
          price: '149.00'
        },
        {
          id:3,
          title: 'Razer Cynosa',
          img: '3.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'razer',
          price: '525.99'
        },
        {
          id:4,
          title: 'Motospeed CK107',
          img: '4.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'moto',
          price: '25.99'
        }
      ],
      showFullItem: false,
      fullItem:{}

    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)

   
  }
  render(){
    
  return (
    <div className="wrapper"> 

     <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
     <Categories chooseCategory={this.chooseCategory} />
     <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/> 
     {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
     <HooksComponent/>
     <div>
        <UserContext.Provider value={{ name: "Student" }}>
          <LanguageContext.Provider value={{ language: "eng" }}>
            <UserName />
            <Language />
          </LanguageContext.Provider>
        </UserContext.Provider>
      </div>
      <Dialog/>
      <Animation/>
      <AdminPage></AdminPage>
      <AuthModal></AuthModal>
      <NewProductForm></NewProductForm>
      <ImageUpload></ImageUpload>
      <Login></Login>
      <SignupForm></SignupForm>
      <NumberForm></NumberForm>
     <Footer/>
  
    </div>
  );
}


onShowItem(item){
  this.setState({fullItem:item})
  this.setState({showFullItem: !this.state.showFullItem})
}

chooseCategory(category){
  if(category ==='all'){
    this.setState({currentItems:this.state.items})
    return
  }
this.setState({
  currentItems: this.state.items.filter(el =>el.category === category)
})
}

deleteOrder(id){
this.setState({orders:this.state.orders.filter(el =>el.id !== id)})
}
  addToOrder(item){
    let isInArray=false;
    this.state.orders.forEach(el =>{
      if(el.id === item.id)
      isInArray = true
    })
    if(!isInArray)
this.setState({orders: [...this.state.orders, item]})
  }

}

export default App;
