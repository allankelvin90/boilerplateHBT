import './App.css'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, MapPin, Code, Database, Cloud, Users, Award, Calendar, ExternalLink } from 'lucide-react'

/*
================================================================================
PORTFOLIO BOILERPLATE (React + Tailwind + Framer Motion)
--------------------------------------------------------------------------------
Como usar (rápido):
1) Edite o objeto CONFIG abaixo com seus dados.
2) Para imagens, use URLs (ex.: hospedadas no GitHub, Cloudinary, Imgur) ou paths locais em /public.
3) Opcional: esconda seções ajustando CONFIG.sectionsEnabled.
4) Troque cores/gradientes em CONFIG.theme.
5) Publique no Vercel/Netlify.

Se preferir, você pode passar <Portfolio config={...} /> com seus dados.
================================================================================
*/

// Ícones helper para skills (mapeie nomes comuns -> ícones)
const SkillIconMap = {
  Code,
  Database,
  Cloud,
  Users,
  ExternalLink,
};

// -------------------- TEMPLATE DE CONFIGURAÇÃO --------------------
const DEFAULT_CONFIG = {
  person: {
    name: "Joaquim - Noite sem pressa",
    roleHighlight: "Desempregado",
    tagline:
      "Sua mensagem de impacto.",
    location: "Sua Cidade, Seu Estado, País",
    email: "seuemail@dominio.com",
    phone: "+55 00 00000 0000",
    github: "https://github.com/usuario",
    linkedin: "https://www.linkedin.com/in/usuario",
  },
  theme: {
    gradient: "from-slate-900 via-blue-900 to-slate-800",
    accentFrom: "from-blue-400",
    accentTo: "to-purple-400",
    card: "bg-slate-800/50 border border-slate-700",
    textMuted: "text-gray-300",
  },
  hero: {
    coverImg:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop",
  },
  about: {
    description:
      "Descrição sobre você, suas paixões, experiência e o que você busca profissionalmente. Mantenha curto e impactante.",
    photos: [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1470&auto=format&fit=crop",
    ],
  },
  experience: [
    {
      company: "Sua Empresa Atual",
      position: "Cargo",
      period: "Data de Início - Presente",
      location: "Cidade, Estado, País",
      description:
        "Descrição breve do seu papel, responsabilidades e conquistas. Use verbos de ação e destaque resultados mensuráveis.",
      technologies: [
        "tecnologia 1",
        "tecnologia 2",
      ],
    },
  ],
  skills: [
    { name: "Tecnologia1", level: 90, icon: "Code" },
    { name: "Tecnologia2", level: 85, icon: "Code" },
    { name: "Tecnologia3", level: 88, icon: "ExternalLink" },
    { name: "Tecnologia4", level: 80, icon: "Database" },
    { name: "Tecnologia5", level: 75, icon: "Database" },
    { name: "Tecnologia6", level: 70, icon: "Cloud" },
    { name: "Tecnologia7", level: 75, icon: "Cloud" },
    { name: "Tecnologia8", level: 85, icon: "Users" },
  ],
  certifications: [
    "Curso 1",
    "Curso 2",
    "Curso 2",
    "Curso 3",
  ],
  education: [
    {
      institution: "Nome da Instituição",
      course: "Curso / Formação",
      period: "mar 2023 - mar 2025",
    },
  ],
  projects: [
    {
      title: "Projeto 1",
      description:
        "Descrição curta do projeto. O que ele resolve, seu papel e resultados.",
      url: "https://exemplo.com",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1470&auto=format&fit=crop",
      techs: ["Tecnologia1", "Tecnologia2", "Tecnologia3", "Tecnologia4", "Tecnologia5"],
    },
  ],
  contact: {
    illustration:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470&auto=format&fit=crop",
  },
  footer: {
    copyrightName: "Seu Nome",
    tagline: "Sua Stack | Desenvolvedor Full-Stack",
  },
  sectionsEnabled: {
    hero: true,
    about: true,
    experience: true,
    skills: true,
    projects: true,
    contact: true,
  },
};

// -------------------- COMPONENTE PRINCIPAL --------------------
export default function Portfolio({ config = DEFAULT_CONFIG }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const {
    person,
    theme,
    hero,
    about,
    experience,
    skills,
    certifications,
    education,
    projects,
    contact,
    footer,
    sectionsEnabled,
  } = config;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const photos = about?.photos || [];
  const nextPhoto = () => setPhotoIndex((i) => (i + 1) % photos.length);
  const prevPhoto = () => setPhotoIndex((i) => (i - 1 + photos.length) % photos.length);

  const goto = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const NavButton = ({ label, id }) => (
    <button
      onClick={() => goto(id)}
      className="text-white hover:text-blue-400 transition-colors duration-200"
    >
      {label}
    </button>
  );

  const SectionTitle = ({ children }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-bold text-white">{children}</h2>
    </motion.div>
  );

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.gradient}`}>
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-slate-900/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-2xl font-bold text-white">
              {person.name}
            </motion.div>
            <div className="hidden md:flex space-x-8">
              <NavButton label="Home" id="home" />
              {sectionsEnabled.about && <NavButton label="Sobre" id="sobre" />}
              {sectionsEnabled.experience && <NavButton label="Experiência" id="experiencia" />}
              {sectionsEnabled.skills && <NavButton label="Habilidades" id="habilidades" />}
              {sectionsEnabled.projects && <NavButton label="Projetos" id="projetos" />}
              {sectionsEnabled.contact && <NavButton label="Contato" id="contato" />}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      {sectionsEnabled.hero && (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
          <div className={`absolute inset-0 bg-gradient-to-r ${theme.accentFrom} ${theme.accentTo} opacity-20`}></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                  Desenvolvedor
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.accentFrom} ${theme.accentTo}`}>{" "}
                    {person.roleHighlight}
                  </span>
                </h1>
                <p className={`text-xl ${theme.textMuted} mb-8 leading-relaxed`}>{person.tagline}</p>
                <div className="flex flex-wrap gap-4">
                  {person.email && (
                    <motion.a href={`mailto:${person.email}`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2">
                      <Mail size={20} />
                      Entre em Contato
                    </motion.a>
                  )}
                  {person.linkedin && (
                    <motion.a href={person.linkedin} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2">
                      <Linkedin size={20} />
                      Ver LinkedIn
                    </motion.a>
                  )}
                  {person.github && (
                    <motion.a href={person.github} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2">
                      <Github size={20} />
                      Ver Github
                    </motion.a>
                  )}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
                {hero?.coverImg && (
                  <img src={hero.coverImg} alt="Capa" className="w-full h-auto rounded-2xl shadow-2xl" />
                )}
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* About */}
      {sectionsEnabled.about && (
        <section id="sobre" className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle>Sobre Mim</SectionTitle>
            <p className={`text-xl ${theme.textMuted} max-w-3xl mx-auto text-center`}>{about.description}</p>

            {photos.length > 0 && (
              <div className="mt-8 mx-auto max-w-3xl">
                <div className={`relative ${theme.card} rounded-2xl p-3`}>
                  <div className="overflow-hidden rounded-xl">
                    <motion.img
                      key={photoIndex}
                      src={photos[photoIndex]}
                      alt={`Foto ${photoIndex + 1}`}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className="w-full h-full object-cover max-h-[540px]"
                    />
                  </div>
                  {/* Controles */}
                  <button aria-label="Anterior" onClick={prevPhoto} className="absolute left-3 top-1/2 -translate-y-1/2 bg-slate-800/70 hover:bg-slate-800 border border-slate-700 rounded-full w-9 h-9 grid place-items-center">
                    ‹
                  </button>
                  <button aria-label="Próxima" onClick={nextPhoto} className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-800/70 hover:bg-slate-800 border border-slate-700 rounded-full w-9 h-9 grid place-items-center">
                    ›
                  </button>
                  {/* Indicadores */}
                  <div className="flex items-center justify-center gap-2 mt-3">
                    {photos.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setPhotoIndex(i)}
                        aria-label={`Ir para foto ${i + 1}`}
                        className={`h-2.5 rounded-full transition-all ${i === photoIndex ? "w-6 bg-blue-400" : "w-2.5 bg-slate-600"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Experience */}
      {sectionsEnabled.experience && (
        <section id="experiencia" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle>Experiência Profissional</SectionTitle>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} viewport={{ once: true }} className={`${theme.card} backdrop-blur-sm rounded-2xl p-8`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.position}</h3>
                      <p className="text-blue-400 text-lg font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <p className="text-gray-300">{exp.period}</p>
                      <p className="text-gray-400 text-sm">{exp.location}</p>
                    </div>
                  </div>
                  <p className={`${theme.textMuted} mb-6 leading-relaxed`}>{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies?.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Skills */}
      {sectionsEnabled.skills && (
        <section id="habilidades" className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle>Principais Competências</SectionTitle>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="space-y-6">
                {skills.map((skill, index) => {
                  const IconComp = SkillIconMap[skill.icon] || Code;
                  return (
                    <div key={index} className={`${theme.card} backdrop-blur-sm rounded-xl p-6`}>
                      <div className="flex items-center gap-4 mb-4">
                        <IconComp className="text-blue-400" size={24} />
                        <span className="text-white font-semibold text-lg">{skill.name}</span>
                        <span className="text-blue-400 ml-auto">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} transition={{ duration: 1, delay: index * 0.05 }} viewport={{ once: true }} className={`bg-gradient-to-r ${theme.accentFrom} ${theme.accentTo} h-2 rounded-full`} />
                      </div>
                    </div>
                  );
                })}
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                <img
                  src="https://www.unisuam.edu.br/wp-content/uploads/2024/06/soft-skill-1.jpg"
                  alt="Skills Illustration"
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
              </motion.div>
            </div>

            {/* Certifications */}
            {certifications?.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-16">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">Cursos Complementares</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {certifications.map((cert, index) => (
                    <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: index * 0.05 }} viewport={{ once: true }} className={`${theme.card} backdrop-blur-sm rounded-xl p-4 flex items-center gap-3`}>
                      <Award className="text-yellow-400 flex-shrink-0" size={20} />
                      <span className={`${theme.textMuted} text-sm`}>{cert}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Education */}
            {education?.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                <h3 className="text-2xl font-bold text-white mb-8 text-center">Formação Acadêmica</h3>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <motion.div key={index} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.05 }} viewport={{ once: true }} className={`${theme.card} backdrop-blur-sm rounded-xl p-6`}>
                      <div className="flex items-start gap-4">
                        <Calendar className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                        <div>
                          <h4 className="text-white font-semibold text-lg mb-2">{edu.institution}</h4>
                          <p className={`${theme.textMuted} mb-2`}>{edu.course}</p>
                          <p className="text-gray-400 text-sm">{edu.period}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </section>
      )}

      {/* Projects */}
      {sectionsEnabled.projects && (
        <section id="projetos" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle>Projetos</SectionTitle>
            <p className={`${theme.textMuted} max-w-2xl mx-auto text-center mb-8`}>
              Uma seleção de MVPs/projetos. Clique para visualizar.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((p, i) => (
                <motion.a key={i} href={p.url} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.05 }} viewport={{ once: true }} className={`group ${theme.card} rounded-2xl p-4 hover:border-blue-400 transition-all duration-200 flex flex-col`}>
                  <div className="relative overflow-hidden rounded-xl mb-4 bg-white flex items-center justify-center h-40">
                    {p.image && <img src={p.image} alt={`Thumb do projeto ${p.title}`} className="w-full h-full object-contain" loading="lazy" />}
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                        {p.title}
                        <ExternalLink size={16} className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </h3>
                      <p className={`${theme.textMuted} text-sm mt-1`}>{p.description}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {p.techs?.map((t, idx) => (
                          <span key={idx} className="text-xs bg-blue-600/20 text-blue-300 px-2 py-0.5 rounded-full">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact */}
      {sectionsEnabled.contact && (
        <section id="contato" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle>Vamos Trabalhar Juntos?</SectionTitle>
            <p className={`text-xl ${theme.textMuted} max-w-2xl mx-auto text-center`}>
              Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato!
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-center mt-10">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                {contact?.illustration && (
                  <img src={contact.illustration} alt="Ilustração" className="w-full h-auto rounded-2xl shadow-xl" />
                )}
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="space-y-8">
                {person.location && (
                  <motion.a className={`${theme.card} backdrop-blur-sm rounded-xl p-6 hover:border-blue-400 transition-all duration-200 flex items-center gap-4`}>
                    <MapPin className="text-blue-400" size={24} />
                    <div>
                      <h3 className="text-white font-semibold">Localização</h3>
                      <p className={`${theme.textMuted}`}>{person.location}</p>
                    </div>
                  </motion.a>
                )}

                {person.email && (
                  <motion.a href={`mailto:${person.email}`} whileHover={{ scale: 1.02 }} className={`${theme.card} backdrop-blur-sm rounded-xl p-6 hover:border-blue-400 transition-all duration-200 flex items-center gap-4`}>
                    <Mail className="text-blue-400" size={24} />
                    <div>
                      <h3 className="text-white font-semibold">Email</h3>
                      <p className={`${theme.textMuted}`}>{person.email}</p>
                    </div>
                  </motion.a>
                )}

                {person.phone && (
                  <motion.a href={`tel:${person.phone.replace(/\s|\(|\)/g, "")}`} whileHover={{ scale: 1.02 }} className={`${theme.card} backdrop-blur-sm rounded-xl p-6 hover:border-blue-400 transition-all duration-200 flex items-center gap-4`}>
                    <Phone className="text-blue-400" size={24} />
                    <div>
                      <h3 className="text-white font-semibold">Telefone</h3>
                      <p className={`${theme.textMuted}`}>{person.phone}</p>
                    </div>
                  </motion.a>
                )}

                {person.linkedin && (
                  <motion.a href={person.linkedin} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.02 }} className={`${theme.card} backdrop-blur-sm rounded-xl p-6 hover:border-blue-400 transition-all duration-200 flex items-center gap-4`}>
                    <Linkedin className="text-blue-400" size={24} />
                    <div>
                      <h3 className="text-white font-semibold">LinkedIn</h3>
                      <p className={`${theme.textMuted}`}>{person.linkedin.replace("https://", "")}</p>
                    </div>
                  </motion.a>
                )}

                {person.github && (
                  <motion.a href={person.github} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.02 }} className={`${theme.card} backdrop-blur-sm rounded-xl p-6 hover:border-blue-400 transition-all duration-200 flex items-center gap-4`}>
                    <Github className="text-blue-400" size={24} />
                    <div>
                      <h3 className="text-white font-semibold">GitHub</h3>
                      <p className={`${theme.textMuted}`}>{person.github.replace("https://", "")}</p>
                    </div>
                  </motion.a>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} {footer.copyrightName}. Todos os direitos reservados.</p>
            {footer.tagline && <p className="mt-2">{footer.tagline}</p>}
          </div>
        </div>
      </footer>
    </div>
  );
}
