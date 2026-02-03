import Hero from './components/Hero';
import Section from './components/Section';
import Card from './components/Card';
import SkillGroup from './components/SkillGroup';
import styles from './components/Hero.module.css'; // Reusing for highlight class

export default function Home() {
  const previousVentures = [
    {
      title: 'HealthGPT',
      role: 'Founder & Chief Architect',
      description: 'Generative AI health assistant served over 2,000 active users globally. Fine-tuned 7B+ parameter models on biomedical literature and built a RAG pipeline with sub-second latency.',
      tags: ['LLM Fine-Tuning', 'RAG (Pinecone)', 'AWS Lambda', 'Scalability']
    },
    {
      title: 'CivisAI',
      role: 'Founder',
      description: 'Current Affairs Copilot for competitive exams. Streamlined news synthesis and syllabus mapping using NLP.',
      tags: ['NLP', 'EdTech', 'Information Retrieval']
    }
  ];

  const engineeringRecord = [
    {
      title: 'Centyle',
      role: 'Application Team Intern',
      description: 'Engineering cloud-agnostic genomics workflows using Docker and Galaxy. Automating host-free phytoplasma assembly pipelines and standardizing transcriptome analysis.',
      tags: ['Docker', 'Galaxy', 'Genomics Pipelines', 'Python']
    },
    {
      title: 'Enterprise Case Management (NIC)',
      role: 'NLP Engineer',
      description: 'Engineered an OCR and Transformer-based NLP pipeline to digitize 2,000+ judicial records, reducing retrieval time from 10 minutes to <2 seconds.',
      tags: ['NLP', 'Transformers', 'OCR', 'Optimization']
    }
  ];

  const research = [
    {
      title: 'Neurotoxicity Prediction Platform',
      role: 'CSIR-IITR (Summer 2025)',
      description: 'Achieved 89.4% accuracy on 3K+ compounds using MobileNetV2, GNNs, and Transformers. Optimized parallel computing to reduce preprocessing from 20s to <5s.',
      tags: ['MobileNetV2', 'GNNs', 'Computational Toxicology', 'Optimization']
    },
    {
      title: 'MILLETACT',
      role: 'Publication',
      description: 'Computational treasury of millet-based bioactive compounds. Submitted to Food Bioscience.',
      tags: ['Bioinformatics', 'Nutritional Informatics', 'Research']
    }
  ];

  const skills = [
    {
      category: 'Deep Learning & AI',
      skills: ['PyTorch', 'TensorFlow', 'MobileNetV2', 'GNNs', 'Transformers', 'LLM Fine-Tuning', 'LangChain', 'PINNs']
    },
    {
      category: 'Bio-Compute & Discovery',
      skills: ['Galaxy', 'AutoDock Vina', 'AlphaFold', 'DESeq2', 'Spades', 'PyMOL', 'fpocket']
    },
    {
      category: 'Cloud & DevOps',
      skills: ['AWS (SageMaker, Lambda, EC2)', 'Docker', 'Kubernetes', 'CI/CD Pipelines', 'Git']
    },
    {
      category: 'Languages & Core',
      skills: ['Python', 'C++', 'SQL', 'Java', 'Bash', 'PostgreSQL', 'MongoDB', 'Pinecone (Vector DB)']
    },
    {
      category: 'Leadership',
      skills: ['Management Head ACM Chapter (Infuturum 3.0)', 'Led 70+ Member Team', 'Managed 4000+ Participants']
    }
  ];

  return (
    <main>
      <Hero />

      {/* Current Focus: SynDx */}
      <Section id="syndx" title="Current Focus">
        <div className="glass-panel" style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, var(--silicon-primary), var(--synapse-primary))' }}></div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span style={{ color: 'var(--synapse-primary)', fontWeight: 'bold', letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.9rem' }}>Founder & Lead Architect</span>
              <h2 style={{ fontSize: '2.5rem', margin: '0.5rem 0', fontFamily: 'var(--font-heading)' }}>SynDx</h2>
            </div>
            <div style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--synapse-primary)', padding: '0.5rem 1rem', borderRadius: '99px', fontSize: '0.9rem', fontWeight: '600' }}>
              The "Speedrun" Pitch
            </div>
          </div>

          <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--text-primary)', marginBottom: '2rem', maxWidth: '800px' }}>
            Quantifying psychiatric biomarkers using AI. A proprietary neuro-computing engine analyzing <span className={styles.highlight}>EEG time-series data</span> to provide objective diagnostics.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem', borderTop: '1px solid var(--glass-border)', paddingTop: '2rem' }}>
            <div>
              <h4 style={{ color: 'var(--silicon-secondary)', marginBottom: '0.75rem' }}>Core Architecture</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Physics-Informed Neural Networks (PINNs) combined with Graph Neural Networks (GNNs) for biologically plausible predictions.</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--silicon-secondary)', marginBottom: '0.75rem' }}>Signal Processing</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Riemannian geometry-based classification using <code>pyriemann</code> and real-time artifact removal with <code>MNE-Python</code>.</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--silicon-secondary)', marginBottom: '0.75rem' }}>Infrastructure</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>High-performance compute layer ensuring real-time biomarker extraction from dense EEG arrays.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="ventures" title="Previous Ventures">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {previousVentures.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </Section>

      <Section id="engineering" title="Engineering Track Record">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {engineeringRecord.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </Section>

      <Section id="research" title="Deep Tech Research">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {research.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </Section>

      <Section id="skills" title="Technical Arsenal & Leadership">
        <div style={{ columns: '1 400px', gap: '2rem' }}>
          {skills.map((group) => (
            <SkillGroup key={group.category} category={group.category} skills={group.skills} />
          ))}
        </div>
      </Section>

      <footer style={{ padding: '3rem 0', textAlign: 'center', color: 'var(--text-secondary)', borderTop: '1px solid var(--glass-border)', background: 'var(--glass-bg)', marginTop: '4rem' }}>
        <p style={{ marginBottom: '1rem' }}>Shashank Singh &copy; {new Date().getFullYear()}</p>
        <p style={{ fontSize: '0.9rem' }}>shashankwork0908@gmail.com | +91-7505162403</p>
        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Greater Noida, India</p>
      </footer>
    </main>
  );
}
