import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles['glow-silicon']} />
            <div className={styles['glow-synapse']} />

            <div className={styles.content}>
                {/* <span className={styles.eyebrow}>Antigravity Portfolio</span> */}

                <h1 className={styles.title}>
                    Shashank Singh <br />
                    <span className="gradient-text">AI Engineer & Biotech Founder</span>
                </h1>

                <p className={styles.subtitle}>
                    Building the computational layer for Neuro-Diagnostics.
                </p>

                <div className={styles['mission-box']}>
                    <p className={styles['mission-text']}>
                        Founder @ <a href="https://syndxlabs.com" target="_blank" rel="noopener noreferrer" className={styles.highlight} style={{ textDecoration: 'none', cursor: 'pointer' }}>SynDx</a> | B.Tech Biotechnology (Drug Discovery & AI).
                    </p>
                </div>

                <div style={{ marginTop: '2.5rem', opacity: 0, animation: 'fadeUp 0.8s ease-out 1s forwards' }}>
                    <a href="mailto:shashankwork0908@gmail.com" className={styles['cta-button']}>
                        Let's Connect
                    </a>
                </div>
            </div>
        </section>
    );
}
