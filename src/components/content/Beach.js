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
          "title": "Pink Beach, Labuan Bajo",
          "src": [
              "../images/labuan.jpg",
              "../images/labuan2.jpg",
              "../images/labuan3.jpg",
              "../images/labuan5.jpg",
              "../images/labuan6.jpg",
            ],
          "description": "Inilah beberapa detail lokasi, rute, aktivitas dan biaya yang dibutuhkan untuk wisata ke pink beach, Labuan Bajo.",
          "content": "Pink beach merupakan salah satu pulau yang berada di Pulau Komodo, Flores Barat, Nusa Tenggara Timur. Untuk datang kemari kamu harus menempuh perjalanan darat dan laut karena letaknya yang ada di Pulau Komodo. Pantai ini berjarak 82 kilometer dari Kota Mataram. ", 
          "content2": "Nah, untuk sampai ke Pink beach, Labuan Bajo, kamu harus menaiki...", 
          "link": "/BeachDetail",
          "count": 1
        },
        {
            "_id": "2",
            "title": "Raja Ampat, Papua Barat",
            "src": [
                "../images/ampat.jpg",
                "../images/ampat1.jpg",
                "../images/ampat2.jpg",
                "../images/ampat3.jpg",
                "../images/ampat5.jpg",               
              ],
            "description": "Inilah beberapa detail lokasi, rute, aktivitas dan biaya yang dibutuhkan untuk wisata ke Raja Ampat, Papua Barat",
            "content": "Siapa sih yang tidak mengenal Kepulauan Raja Ampat? Gugusan kepulauan bak kepingan surga ini terkenal dengan keindahan pemandangan bawah lautnya. Ada empat pulau besar yang terkenal di Kepulauan Raja Ampat, yakni Pulau Misool, Pulau Batanta, Pulau Salawati, dan Pulau Waigeo.",
            "count": 1
          },
          {
            "_id": "3",
            "title": "Pantai Nihiwatu, Sumba",
            "src": [
                "../images/nihiwatu1.jpg",
                "../images/nihiwatu2.jpg",
                "../images/nihiwatu3.jpg",
                "../images/nihiwatu4.jpg",
                "../images/nihiwatu5.jpg",           
              ],
            "description": "Inilah beberapa detail lokasi, rute, aktivitas dan biaya yang dibutuhkan untuk wisata ke Pantai Nihiwatu di Sumba",
            "content": "Wilayah Sumba Barat, Provinsi Nusa Tenggara Timur (NTT) ternyata menyimpan Pantai yang masuk kedalam 100 pantai terbaik di dunia, pantai ini bernama Pantai Nihiwatu. Pantai itu berada di peringkat ke 17 dari 100 pantai terbaik di dunia dan satu satunya pantai di Indonesia yang terpilih menjadi pantai terbaik di Asia.",
            "count": 1
          },
          {
            "_id": "4",
            "title": "Pantai Klayar, Pacitan",
            "src": [
                "../images/klayar1.jpg",
                "../images/klayar2.jpg",
                "../images/klayar3.jpg",
                "../images/klayar4.jpg",
                "../images/klayar5.jpg",                  
              ],
            "description": "Inilah beberapa detail lokasi, rute, aktivitas dan biaya yang dibutuhkan untuk wisata ke Pantai Klayar di Pacitan",
            "content": "Pantai klayar terletak di Desa Kalak, Kecamatan Donorejo, Kabupaten Pacitan, provinsi Jawa Timur. Jarak pantai klaya dengan pusat kota Jawa Timur yaitu Surabaya adalah 302,9 kilometer. Kamu membutuhkan waktu sekitar 7 sampai 8 jam untuk sampai di pantai ini.",
            "count": 1
          },
          {
            "_id": "5",
            "title": "Gili Trawangan, Lombok, Nusa Tenggara Barat",
            "src": [
                "../images/gili1.jpg",
                "../images/gili2.jpg",
                "../images/gili3.jpg",
                "../images/gili4.jpg",
                "../images/gili5.jpg",                  
              ],
            "description": "Inilah beberapa detail lokasi, rute, aktivitas dan biaya yang dibutuhkan untuk wisata ke Pantai Gili Trawangan, Lombok, Nusa Tenggara Barat",
            "content": "Lombok, memiliki potensi wisata pantai yang mengagumkan. Di perairan sebelah barat Pulau Lombok, ada sebuah pulau kecil bernama Gili Trawangan. Kebanyakan dari wisatawan yang datang ke Pantai Gili Trawangan Lombok adalah wisatawan asing, yang merupakan pecinta pantai cantik di Lombok.",
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