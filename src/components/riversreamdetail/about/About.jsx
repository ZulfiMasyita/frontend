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
            src="../images/maron1.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title"><br></br><br></br><br></br>Apa saja yang bisa kita lakukan di Sungai Maron?</h1>
        <p className="a-sub">
        Objek wisata yang satu ini berada di Maron, Desa Dersono, Kec Pringkuku, Kab Pacitan, Jawa Timur. Berjarak kurang lebih sekitar 24,4 Km dari pusat kota pacitan dan dapat di tempuh menggunakan kendaraan bermotor dengan waktu perjalanan sekitar 50 menit.
        </p>
        <p className="a-desc">
        Sungai Maron Pacitan ini adalah wisata menyusuri sungai dengan pemandangan indah di setiap sisinya. Anda akan merasa seperti menyusuri sungai amazon. Di setiap sisinya terdapat banyak pohon kelapa dan sangat menarik untuk dapat berswafoto selama perjalanan. Untuk dapat menyusuri sungai ini anda harus menyewa perahu yang harganya bervariasi tergantung kondisi perahu.
        <br></br>
        <br></br>
        Di lokasi wisata sungai maron ini juga telah tersedia berbagai fasilitas umum seperti warung makan, toilet umum, tempat parkir serta berbagai fasilitas pendukung wisata lainnya.
        <br></br>
        <br></br>
        Wisata Sungai Maron Pacitan ini buka setiap hari dari jam 6 pagi hingga jam 5 sore. Dengan waktu buka yang panjang anda dapat berkunjung kapan pun dan menikmati pemandangan dengan waktu yang lama.
        <br></br>
        <br></br>
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Biaya Transportasi dan Tiket Masuk</h4>
            <p className="a-award-desc">
            Harga Tiket masuk objek wisata ini sangatlah murah. Anda hanya perlu membayar tiket masuk sebesar Rp 5.000 per orang untuk mendapatkan pemandangan yang indah di sungai ini. selain itu anda juga dapat menyewa perahu dengan harga sebesar Rp 100.000,- hingga Rp 150.000,- tergantung kondisi perahunya dan kehebatan nego kalian. 
            Perahu tersebut dapat menampung 6 hingga 7 orang jadi ada baiknya jika ingin pergi ke lokasi wisata yang satu ini pergilah bersama teman-teman agar biaya sewa kapalnya menjadi murah.
            </p>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default About;
