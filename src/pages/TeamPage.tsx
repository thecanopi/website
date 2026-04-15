import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import { PageTransition } from '@/components/shared/PageTransition';
import pageBg from '@/assets/page-bg-abstract.jpg';
import drAnupamaImg from '@/assets/Dr Anupama.jpg';
import drVikramImg from '@/assets/Dr Vikram.jpg';
import drAvneeshImg from '@/assets/Dr Avneesh khare.jpg';

export default function TeamPage() {
    return (
        <PageTransition>
            <div className="pt-20">
                {/* Hero Section */}
                <section className="relative py-20 text-white overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${pageBg})` }}
                    />
                    <div className="absolute inset-0 bg-black/60" />
                    <div className="relative z-10 container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center">
                            <RevealOnScroll>
                                <p className="text-accent text-sm font-medium uppercase tracking-wider mb-4">Leadership</p>
                                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Team</h1>
                                <p className="text-lg text-white/80">
                                    Meet the experts driving innovation, strategy, and excellence at Canopi.
                                </p>
                            </RevealOnScroll>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-16 md:py-24 bg-background">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">

                            {/* Dr. Anupama Srikonda */}
                            <RevealOnScroll delayMs={100}>
                                <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                                    <div className="aspect-square sm:aspect-[4/3] relative overflow-hidden">
                                        <img
                                            src={drAnupamaImg}
                                            alt="Dr. Anupama Srikonda"
                                            className="object-contain w-full h-full p-4"
                                        />
                                    </div>
                                    <div className="p-8 flex-1 flex flex-col">
                                        <h3 className="text-2xl font-serif font-bold text-foreground mb-1">Dr. Anupama Srikonda</h3>
                                        <p className="text-accent font-medium mb-4">Founder & CEO — Partner, Healthcare Strategy</p>
                                        <p className="text-muted-foreground leading-relaxed flex-1">
                                            Dr. Anupama is the Founder & CEO of Canopi Strategy Partners, where she leads data-driven strategy and commercial due diligence projects for healthcare and life sciences companies and investors. A former Director and Vice President in strategy consulting, she specializes in assessing the commercial potential of innovations across AI in healthcare, digital health, and biotechnology using real-time market insights. As a clinician turned strategy leader, she bridges science, medicine, and business to translate complex innovations into scalable market opportunities. She is an alumnus of the Indian School of Business (ISB).
                                        </p>
                                    </div>
                                </div>
                            </RevealOnScroll>

                            {/* Dr. Vikram Venkateswaran */}
                            <RevealOnScroll delayMs={200}>
                                <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                                    <div className="aspect-square sm:aspect-[4/3] relative overflow-hidden">
                                        <img
                                            src={drVikramImg}
                                            alt="Dr. Vikram Venkateswaran"
                                            className="object-contain w-full h-full p-4"
                                        />
                                    </div>
                                    <div className="p-8 flex-1 flex flex-col">
                                        <h3 className="text-2xl font-serif font-bold text-foreground mb-1">Dr. Vikram Venkateswaran</h3>
                                        <p className="text-accent font-medium mb-4">Advisory Member</p>
                                        <p className="text-muted-foreground leading-relaxed flex-1">
                                            A healthcare strategist, clinician, and Founder of Healthcare India. A former healthcare leader at Deloitte, he advises startups, investors, and health systems on innovation, AI, and growth strategy. He writes and speaks frequently on the future of healthcare, technology, and global health.
                                        </p>
                                    </div>
                                </div>
                            </RevealOnScroll>

                            {/* Dr. Avneesh Khare */}
                            <RevealOnScroll delayMs={300}>
                                <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                                    <div className="aspect-square sm:aspect-[4/3] relative overflow-hidden">
                                        <img
                                            src={drAvneeshImg}
                                            alt="Dr. Avneesh Khare"
                                            className="object-contain w-full h-full p-4"
                                        />
                                    </div>
                                    <div className="p-8 flex-1 flex flex-col">
                                        <h3 className="text-2xl font-serif font-bold text-foreground mb-1">Dr. Avneesh Khare</h3>
                                        <p className="text-accent font-medium mb-4">Independent Clinical AI Consultant</p>
                                        <div className="text-muted-foreground text-sm leading-relaxed flex-1 space-y-4">
                                            <p>
                                                Consultant and Researcher, BrainX AI, USA<br />
                                                Advisor and Mentor, IIHMR Startups (IIHMR Foundation), India<br />
                                                Med AI Subject Matter Expert (SME) Educator, BITS Pilani Digital, India<br />
                                                Advisor, AI Wing of the Indian Society of Critical Care Medicine (ISCCM)
                                            </p>
                                            <p>
                                                <strong className="text-foreground">Academic Qualifications:</strong> MBBS, MD Anaesthesiology (SMS Jaipur), DNB Anaesthesiology, PDCC Pain Management (BHU Varanasi), MNAMS, MBA Hospital and Health Systems Management (BITS Pilani), Certified by the American Board of Artificial Intelligence in Medicine (ABAIM) and the Royal College of Surgeons in Ireland (RCSI), Certificate in Healthcare Leadership (Duke University USA), Google Certified AI Professional and Educator, Gemini Certified Educator and Faculty
                                            </p>
                                            <p>
                                                <strong className="text-foreground">Honors and Awards:</strong> Member of the NAMS (India) Taskforce on Artificial Intelligence in Healthcare, Distinguished Guest at G20 Consultation India 2023 (AIIMS, Rishikesh), Invited Speaker at the India AI Impact Summit 2026 (New Delhi), AI Excellence Award in Healthcare Training, DataLEADS, India, 5-Star Mentor Award, Bionabu, UK, 'Top Voice' on LinkedIn, USA, Featured at Times Square, Quoted in Forbes
                                            </p>
                                            <p>
                                                <strong className="text-foreground">Publications:</strong> 17 Papers, 4 Book Chapters, The 'Med AI' Capsule Newsletter
                                            </p>
                                            <p>
                                                <strong className="text-foreground">Areas of interest:</strong> AI in Medicine, AI Literacy for Medical Professionals, Healthcare Leadership
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </RevealOnScroll>

                        </div>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
}
