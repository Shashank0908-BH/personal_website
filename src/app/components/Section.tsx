import styles from './Section.module.css';

interface SectionProps {
    title?: string;
    id?: string;
    className?: string;
    children: React.ReactNode;
}

export default function Section({ title, id, className, children }: SectionProps) {
    return (
        <section id={id} className={`${styles.section} ${className || ''}`}>
            <div className={styles.container}>
                {title && <h2 className={styles.title}>{title}</h2>}
                {children}
            </div>
        </section>
    );
}
