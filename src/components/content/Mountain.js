import React from 'react';
import Colors from '../Colors'
import { Link } from 'react-router-dom';
import DetailsThumb from '../DetailThumb';
import '../../index.css';
import '../../App.css';
import '../Content.css';

class Mountain extends React.Component{

    state = {
      products: [
        {
          "_id": "1",
          "title": "Gunung Bromo, Jawa Timur",
          "src": [
              "../images/bromo.jpg",
              "../images/bromo2.jpg",
              "../images/bromo3.jpg",
              "../images/bromo4.jpg",
              "../images/bromo5.jpg",
            ],
          "description": "Inilah beberapa detail lokasi, rute, aktivitas dan biaya yang dibutuhkan untuk wisata ke Gunung Bromo, Jawa Timur.",
          "content": "Gunung berapi bromo berada di dalam kawasan Taman Nasional Bromo Semeru Tengger. Meskipun letak gunung bromo masih satu area Taman Nasional dengan gunung semeru akan tetapi jarak keduanya terpaut cukup jauh. Lokasi gunung bromo berada di sebelah utara gunung semeru yang berjarak ± 18 km jika diukur lurus dari pusat kawah masing – masing gunung berapi tersebut.", 
          "link": "/MoutainDetail",
          "count": 1
        },
        {
            "_id": "2",
            "title": "Gunung Prau, Dieng Jawa Tengah",
            "src": [
                "../images/prau1.jpg",              
                "../images/prau2.jpg",              
                "../images/prau3.jpg",              
                "../images/prau4.jpg",              
                "../images/prau5.jpg",              
              ],
            "description": "Inilah beberapa detail lokasi, rute, aktivitas dan biaya yang dibutuhkan untuk wisata ke Gunung Prau, Dieng Jawa Tengah",
            "content": "Gunung Prau berada di kawasan Dieng, Jawa Tengah. Lebih tepatnya berada di tiga kabupaten yaitu Batang, Kendal, dan Wonosobo. Gunung Prau ini memiliki ketinggian 2.565 mdpl diatas permukaan laut, masuk kedalam Gunung yang tidak terlalu tinggi sehingga cocok untuk pemula yang ingin mencoba hobi mendaki.",
            "count": 1
          },
          {
            "_id": "3",
            "title": "Gunung Rinjani, Lombok",
            "src": [
                "../images/rinjani1.jpg",        
                "../images/rinjani2.jpg",        
                "../images/rinjani3.jpg",        
                "../images/rinjani4.jpg",        
                "../images/rinjani5.jpg",               
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
  
  export default Mountain;