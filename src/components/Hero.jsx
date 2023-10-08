import styles from "../style";
import { discount, robot } from "../assets";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Khataman Al-Quran <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Keluarga H.Abdul Hadi</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
          </div>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          <h2>Niatkan khataman ini (baca al-fatihah) untuk:</h2>
          <ol>
            <li>1. Nabi Muhammad serta sahabat-sahabatnya.</li>
            <li>2. Ibu/Mbah Hj. Husniati</li>
            <li>3. Mbah Masruri</li>
            <li>4. Mbah Suparkah</li>
            <li>5. Mbah Darjo Masilan</li>
            <li>6. Mbah Aisyah</li>
            <li>7. Mbah Karto Sarpin Sk</li>
            <li>8. Mbah Sastro Seno Sk</li>
            <li>9. Mbah H Nur Ali</li>
            <li>10. Mbah Saerozi Sk</li>
            <li>11. Mbah Miun Sk</li>
            <li>12. Mbah Saibani Sk</li>
            <li>13. Mbah Samsuri Sk</li>
            <li>14. Mbah Jono Sk</li>
            <li>15. Mbah Midi</li>
            <li>16. Mbah Masirah</li>
            <li>17. Mbah Yah Sk</li>
            <li>18. Mbah Marjan</li>
            <li>19. Mbah Suyuti Sk</li>
            <li>20. Mbah Kurdi Sk</li>
            <li>21. Mbah H Jazeri Arif</li>
            <li>22. Lik Suhadak</li>
            <li>23. Lik Supriyanto</li>
            <li>24. Mbah Tasmono SK</li>
            <li>25. Lik Sih</li>
            <li>26. Totok Sudarto</li>
            <li>27. Siti Fatimah</li>
          </ol>
          <br />
          <h3>
            Supaya kita semua diberi kemudahan, kelancaran, keberkahan, dan
            kesuksesan. Serta diberi keselamatan dan dijauhkan dari segala musibah
            dan marabahaya.
          </h3>
        </p>
      </div>
    </section>
  );
};

export default Hero;
