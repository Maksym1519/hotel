import styles from './about.module.css';
import Image from 'next/image';
import myImg from '/public/nuts.png';

const About = () => {
    return (
        <div>
            <Image className={styles.aboutImg} src={myImg} alt="img" />
        </div>
    );
};
export default About;
