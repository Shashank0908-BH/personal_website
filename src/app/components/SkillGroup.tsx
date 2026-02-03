import styles from './SkillGroup.module.css';

interface SkillGroupProps {
    category: string;
    skills: string[];
}

export default function SkillGroup({ category, skills }: SkillGroupProps) {
    return (
        <div className={styles.group}>
            <h3 className={styles.category}>{category}</h3>
            <div className={styles.list}>
                {skills.map((skill) => (
                    <span key={skill} className={styles.skill}>
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}
