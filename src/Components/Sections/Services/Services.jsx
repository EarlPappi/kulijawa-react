import { faEthernet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from './Services.module.css';

const Services = () => {
    return (
        <div className={ classes.services }>
            <div className={ classes.service }>
            <FontAwesomeIcon icon={faEthernet} style={{
                    fontSize: '2em',
                    color: '#0C646D'
                }} />

                <h2>Architecture</h2>
                <p>We will help you in designing the building according to your wishes</p>
            </div>

            <div classname={ classes.service }>
            <FontAwesomeIcon icon={faEthernet} style={{
                    fontSize: '2em',
                    color: '#0C646D'
                }} />

                <h2>Interior Design</h2>
                <p>We will help you in designing the building according to your wishes</p>
            </div>

            <div classname={ classes.service }>
                <FontAwesomeIcon icon={faEthernet} style={{
                    fontSize: '2em',
                    color: '#0C646D'
                }} />

                <h2>Engineering</h2>
                <p>We will help you in designing the building according to your wishes</p>
            </div>
        </div>
    );
}

export default Services;