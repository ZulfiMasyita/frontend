import React from 'react';
import Colors from '../Colors'
import { Link } from 'react-router-dom';
import DetailsThumb from '../DetailThumb';
import '../../index.css';
import '../../App.css';
import '../Content.css';

class Beach extends React.Component{

    state = {
      products: [
        {
          "_id": "1",
          "title": "Danau Toba, Sumatera Utara",
          "src": [
              "../images/toba1.jpg",
              "../images/toba2.jpg",
              "../images/toba3.jpg",
              "../images/toba4.jpg",
              "../images/toba5.jpg",
            ],
          "description": "Inilah beberapa detail lokasi, rute, aktivitas dan biaya yang dibutuhkan untuk wisata ke Danau Toba, Sumatera Utara",
          "content": "Sumatra Utara dikenal memiliki keindahan alam yang memesona. Salah satu destinasi favoritnya yakni Danau Toba. Dengan luas sekitar 1.130 kilometer persegi, Danau Toba menjadi salah satu tempat paling diminati para wisatawan. Jika sedang berkunjung ke Sumatra Utara, Danau Toba harus masuk dalam bucket list penjelajahanmu. Namun sebelum menuju ke sana, ada baiknya kamu simak dulu info wisata Danau Toba berikut ini!", 
          "link": "/MoutainDetail",
          "count": 1
        },
        {
            "_id": "2",
            "title": "Danau Kelimutu, Flores",
            "src": [
                "../images/kelimutu1.jpg",              
                "../images/kelimutu2.jpg",              
                "../images/kelimutu3.jpg",              
                "../images/kelimutu4.jpg",              
                "../images/kelimutu5.jpg",              
              ],
            "description": "Inilah beberapa detail lokasi, rute, aktivitas dan biaya yang dibutuhkan untuk wisata ke Gunung Prau, Dieng Jawa Tengah",
            "content": "Gunung Prau berada di kawasan Dieng, Jawa Tengah. Lebih tepatnya berada di tiga kabupaten yaitu Batang, Kendal, dan Wonosobo. Gunung Prau ini memiliki ketinggian 2.565 mdpl diatas permukaan laut, masuk kedalam Gunung yang tidak terlalu tinggi sehingga cocok untuk pemula yang ingin mencoba hobi mendaki.",
            "count": 1
          },
          {
            "_id": "3",
            "title": "Danau Labuan Cermin, Kalimantan Timur",
            "src": [
                "../images/cermin1.jpg",        
                "../images/cermin2.jpg",        
                "../images/cermin3.jpg",        
                "../images/cermin4.jpg",        
                "../images/cermin5.jpg",               
              ],
            "description": "Inilah beberapa detail lokasi, rute, aktivitas dan biaya yang dibutuhkan untuk wisata ke Gunung Rinjani, Lombok",
            "content": "Gunung Rinjani merupakan gunung berapi tertinggi kedua di Indonesia dengan ketinggian 3.726 meter di atas permukaan laut. Gunung ini berada di Pulau Lombok, Nusa Tenggara Barat. Gunung Rinjani menjadi salah satu gunung favorit para pendaki. Keindahan alam Gunung Rinjani menjadi salah satu yang terbaik. Gak heran kalau para wisatawan, baik lokal maupun mancanegara, berbondong-bondong datang ke sini.",
            "count": 1
          }
      ],
      index: 0
      
    };
  
    myRef = React.createRef();
  
    handleTab = index =>{
      this.setState({index: index})
      const images = this.myRef.current.children;
      for(let i=0; i<images.length; i++){
        images[i].className = images[i].className.replace("active", "");
      }
      images[index].className = "active";
    };
  
    componentDidMount(){
      const {index} = this.state;
      this.myRef.current.children[index].className = "active";
    }
  
  
    render(){
      const {products, index} = this.state;
      return(
        <div className="content">
          {
            products.map(item =>(
              <div className="details" key={item._id}>
                <div className="big-img">
                  <img src={item.src[index]} alt=""/>
                </div>
  
                <div className="box">
                  <div className="row">
                    <h2>{item.title}</h2>
                  </div>
                  <p>{item.description}</p>
                  <p>{item.content}</p>
                  <p>{item.content2}</p>
                  <Link to={item.link}>Klik untuk informasi selengkapnya</Link>
                  <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                </div>
              </div>
            ))
          }
        </div>
      );
    };
  }
  
  export default Beach;