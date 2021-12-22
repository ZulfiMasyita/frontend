import React from 'react';
import Colors from '../Colors'
import { Link } from 'react-router-dom';
import DetailsThumb from '../DetailThumb';
import '../../index.css';
import '../../App.css';
import '../Content.css';

class Waterfall extends React.Component{

    state = {
      products: [
        {
          "_id": "1",
          "title": "Air Terjun Kanto Lampo, Bali",
          "src": [
              "../images/kanto1.jpg",
              "../images/kanto2.jpg",
              "../images/kanto3.jpg",
              "../images/kanto4.jpg",
              "../images/kanto5.jpg",
            ],
          "description": "Inilah beberapa detail lokasi, rute, aktivitas dan biaya yang dibutuhkan untuk wisata ke Air Terjun Kanto Lampo, Bali",
          "content": "Gunung berapi bromo berada di dalam kawasan Taman Nasional Bromo Semeru Tengger. Meskipun letak gunung bromo masih satu area Taman Nasional dengan gunung semeru akan tetapi jarak keduanya terpaut cukup jauh. Lokasi gunung bromo berada di sebelah utara gunung semeru yang berjarak ± 18 km jika diukur lurus dari pusat kawah masing – masing gunung berapi tersebut.", 
          "link": "/MoutainDetail",
          "count": 1
        },
        {
            "_id": "2",
            "title": "Air Terjun Sekumpul, Buleleng",
            "src": [
                "../images/sekumpul1.jpg",              
                "../images/sekumpul2.jpg",              
                "../images/sekumpul3.jpg",              
                "../images/sekumpul4.jpg",              
                "../images/sekumpul8.jpg",              
              ],
            "description": "Inilah beberapa detail lokasi, rute, aktivitas dan biaya yang dibutuhkan untuk wisata ke Air Terjun Sekumpul, Buleleng",
            "content": "Gunung Prau berada di kawasan Dieng, Jawa Tengah. Lebih tepatnya berada di tiga kabupaten yaitu Batang, Kendal, dan Wonosobo. Gunung Prau ini memiliki ketinggian 2.565 mdpl diatas permukaan laut, masuk kedalam Gunung yang tidak terlalu tinggi sehingga cocok untuk pemula yang ingin mencoba hobi mendaki.",
            "count": 1
          },
          {
            "_id": "3",
            "title": "Air Terjun Cikanteh, Sukabumi",
            "src": [
                "../images/cikanteh1.jpg",        
                "../images/cikanteh2.jpg",        
                "../images/cikanteh3.jpg",        
                "../images/cikanteh4.jpg",        
                "../images/cikanteh5.jpg",               
              ],
            "description": "Inilah beberapa detail lokasi, rute, aktivitas dan biaya yang dibutuhkan untuk wisata ke Air Terjun Cikanteh, Sukabumi",
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
  
  export default Waterfall;