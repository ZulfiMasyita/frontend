import React, { Component }  from 'react';
import "./about.css";
import Award from "../../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="../images/labuan8.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title"><br></br><br></br><br></br>Apa saja yang bisa kita lakukan di Pink Beach?</h1>
        <p className="a-sub">
        Pink beach merupakan salah satu pulau yang berada di Pulau Komodo, Flores Barat, Nusa Tenggara Timur. Untuk datang kemari kamu harus menempuh perjalanan darat dan laut karena letaknya yang ada di Pulau Komodo. Pantai ini berjarak 82 kilometer dari Kota Mataram.
        </p>
        <p className="a-desc">
        Selain bermain-main di Pink beach, Labuan Bajo, aktivitas favorit lainnya adalah melakukan snorkeling dan diving. Berbagai jenis terumbu karang dan ragam ikan yang indah, bisa kamu nikmati di taman bawah lautnya.
        <br></br>
        <br></br>
        Nah, untuk sampai ke Pink beach, Labuan Bajo, kamu harus menaiki pesawat menuju Bandar Udara Internasional Komodo. Kmau bisa menginap semalam dahulu di Labuan Bajo, untuk berangakt dengan kapal keesokan paginya, atau pilih rute pesawat subuh, untuk langsung berlayar ketika tiba di Labuan Bajo. 
        <br></br>
        <br></br>
        Dari Labuan Bajo, kamu akan berlayar dari Dermaga Loh Liang, Pulau Komodo.
        <br></br>
        <br></br>
        Dari Dermaga Loh Liang, biasanya paket wisata kamu sudah termasuk kunjungan ke beberapa lokasi, termasuk pink beach. Ke Pink beach sendiri bisa ditempuh 30 menit menggunakan kapal atau 4 jam trekking melalui tebing karang dan hutan bakau. Mungkin akan lebih lama, akan tetapi panorama yang bisa kamu nikmati lebih indah.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Biaya Transportasi dan Tiket Masuk</h4>
            <p className="a-award-desc">
            Untuk harga menuju ke Pantai Pink sangat beragam, kamu bisa naik private boat seharga Rp 800 ribu - Rp 900 ribu satu kapal pulang-pergi, ataupun public boat seharga Rp30 ribu hingga Rp 40 ribu/ orang untuk sekali jalan. 
            Sedangkan untuk tiket masuknya, hanya Rp10 ribu untuk wisatawan lokal dan Rp50 ribu untuk wisatawan mancanegara.
            </p>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default About;
