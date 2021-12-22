import React from 'react';
import Colors from '../Colors'
import { Link } from 'react-router-dom';
import DetailsThumb from '../DetailThumb';
import '../../index.css';
import '../../App.css';
import '../Content.css';

class RiverStream extends React.Component{

    state = {
      products: [
        {
          "_id": "1",
          "title": "Sungai Maron, Pacitan Jawa Timur",
          "src": [
              "../images/maron1.jpg",
              "../images/maron2.jpg",
              "../images/maron3.jpg",
              "../images/maron.jpg",
              "../images/maron5.jpg",
            ],
          "description": "Inilah beberapa detail lokasi, rute, aktivitas dan biaya yang dibutuhkan untuk wisata ke Sungai Maron, Pacitan Jawa Timur",
          "content": "Pink beach merupakan salah satu pulau yang berada di Pulau Komodo, Flores Barat, Nusa Tenggara Timur. Untuk datang kemari kamu harus menempuh perjalanan darat dan laut karena letaknya yang ada di Pulau Komodo. Pantai ini berjarak 82 kilometer dari Kota Mataram. ", 
          "content2": "Nah, untuk sampai ke Pink beach, Labuan Bajo, kamu harus menaiki...", 
          "link": "/BeachDetail",
          "count": 1
        },
          {
            "_id": "2",
            "title": "Sungai Niyama, Tulungagung Jawa Timur",
            "src": [
                "../images/niyama3.jpg",
                "../images/niyama2.jpg",
                "../images/niyama6.jpg",
                "../images/niyama7.jpg",
                "../images/niyama5.jpg",           
              ],
            "description": "Inilah beberapa detail lokasi, rute, aktivitas dan biaya yang dibutuhkan untuk wisata ke Sungai Niyama, Tulungagung Jawa Timur",
            "content": "Wilayah Sumba Barat, Provinsi Nusa Tenggara Timur (NTT) ternyata menyimpan Pantai yang masuk kedalam 100 pantai terbaik di dunia, pantai ini bernama Pantai Nihiwatu. Pantai itu berada di peringkat ke 17 dari 100 pantai terbaik di dunia dan satu satunya pantai di Indonesia yang terpilih menjadi pantai terbaik di Asia.",
            "count": 1
          },
          {
            "_id": "3",
            "title": "Sungai Tamborasi, Sulawesi Tenggara",
            "src": [
                "../images/tamborasi1.jpg",
                "../images/tamborasi2.jpg",
                "../images/tamborasi3.jpg",
                "../images/tamborasi4.jpg",
                "../images/tamborasi5.jpg",                  
              ],
            "description": "Inilah beberapa detail lokasi, rute, aktivitas dan biaya yang dibutuhkan untuk wisata ke Sungai Tamborasi, Sulawesi Tenggara",
            "content": "Pantai klayar terletak di Desa Kalak, Kecamatan Donorejo, Kabupaten Pacitan, provinsi Jawa Timur. Jarak pantai klaya dengan pusat kota Jawa Timur yaitu Surabaya adalah 302,9 kilometer. Kamu membutuhkan waktu sekitar 7 sampai 8 jam untuk sampai di pantai ini.",
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
  
  export default RiverStream;