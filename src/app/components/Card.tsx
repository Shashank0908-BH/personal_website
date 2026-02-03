import styles from './Card.module.css';

interface CardProps {
    title: string;
    role: string;
    timeline?: string;
    description: string;
    highlights?: string[];
    tags: string[];
}

export default function Card({ title, role, timeline, description, highlights, tags }: CardProps) {
    return (
        <article className={styles.card}>
            <div className={styles.header}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <span className={styles.role}>{role}</span>
                    {timeline && <span className={styles.timeline}>{timeline}</span>}
                </div>
                <h3 className={styles.title}>{title}</h3>
            </div>

            <p className={styles.description}>{description}</p>

            {highlights && highlights.length > 0 && (
                <ul className={styles.highlights}>
                    {highlights.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}

            <div className={styles.tags}>
                {tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                        {tag}
                    </span>
                ))}
            </div>
        </article>
    );
}
