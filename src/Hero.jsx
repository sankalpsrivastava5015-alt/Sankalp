import "./Style.css"
import devImage from "../src/assets/developer.jpeg"

export default function Hero() {
    return(
        <>
        <section className="hero-container">
            <div className="hero-text">
                <h2>Hi, I am Sankalp srivastava</h2>
                <p>Passionate Java Full Stack Developer building mordern web experiences.</p>
                <button className="cta-button">View My Work</button>
            </div>
            <div className="hero-image">
                <img src={devImage} alt="Developer" style={{width:"400px", height:"auto"}} />
            </div>
        </section>
        </>
    );
}