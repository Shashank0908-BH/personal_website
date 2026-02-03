import styles from './Card.module.css';

interface CardProps {
    title: string;
    role: string;
    description: string;
    tags: string[];
}

export default function Card({ title, role, description, tags }: CardProps) {
    return (
        <article className={styles.card}>
            <div className={styles.header}>
                <span className={styles.role}>{role}</span>
                <h3 className={styles.title}>{title}</h3>
            </div>
            <p className={styles.description}>{description}</p>
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
