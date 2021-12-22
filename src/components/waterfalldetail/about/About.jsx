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
        <h1 className="a-title"><br></br><br></br><br></br>Apa saja yang bisa kita lakukan di Air Terjun Kanto Lampo</h1>
        <p className="a-sub">
        Objek wisata Air Terjun Kanto Lampo terletak di Br. Kelod Kangin, Desa Beng, Kecamatan / Kabupaten Gianyar, Provinsi Bali. Lokasinya berjarak hanya sekitar 30 km dari pusat kota Denpasar, sementara dari arah pusat kota Gianyar berjarak 3 km saja terletak di sebelah utaranya.
        </p>
        <p className="a-desc">
        Untuk menuju ke tempat air terjun kanto lampo maka kita harus terlebih dahulu menuruni puluhan anak tangga, Dan di sepanjang perjalanan ada beberapa tempat peristirahatan dan juga pedagang makanan dan minuman yang bisa anda temui.
        <br></br>
        <br></br>
        Tips Wisata ke Air Terjun Lampo adalah, sebaiknya jika mau berkunjung ke sini hindari saat di musim penghujan, karena jalannya akan menjadi licin. Perlu anda ketahui, sebenarnya jalan setapak yang menuju air terjun Kanto Lampo ini sebelumnya sudah lama digunakan warga setempat. Setelah Kanto Lampa menjadi tempat wisata, akses jalan pun lebih ditata menjadi baik untuk kenyamanan para pengunjungnya.
        <br></br>
        <br></br>
        jika anda ingin berkunjung ke Air Terjun Kanto Lampo ini, anda dapat berkunjung pada waktu operasional tempat wisata di Gianyar Bali ini adalah setiap hari, buka mulai dari 08.00 – 17.00 WITA.
        <br></br>
        <br></br>
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Biaya Transportasi dan Tiket Masuk</h4>
            <p className="a-award-desc">
            Setiap pengunjung yang datang ke sana akan dikenai tarif Tiket Masuk Air Terjun Kanto Lampo ini hanya Rp.5.000/orang.
            </p>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default About;
