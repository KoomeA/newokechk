import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Building2, Gavel, Globe, Scale, Shield, Users } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function PracticeAreas() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-secondary selection:text-secondary-foreground pt-20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <img src="/images/logo_final.png" alt="Okech K & Co Advocates Logo" className="h-12 w-auto" />
              <div className="hidden md:block">
                <h1 className="text-xl font-serif font-bold tracking-tight text-primary">OKECH K & CO</h1>
                <p className="text-xs tracking-widest text-muted-foreground uppercase">Advocates</p>
              </div>
            </div>
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="/practice-areas" className="text-primary font-bold">Practice Areas</Link>
            <Link href="/team" className="hover:text-primary transition-colors">Team</Link>
            <Link href="/news-insights" className="hover:text-primary transition-colors">News & Insights</Link>
          </div>
          <Link href="/contact">
            <Button className="bg-secondary hover:bg-secondary/90 text-white font-serif">Contact Us</Button>
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Areas of Practice</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl font-serif">
            Our expertise is organized into four specialized departments to ensure depth of service and technical excellence across all legal matters.
          </p>
        </div>
      </section>

      {/* Department A */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 bg-primary/5 rounded-lg flex items-center justify-center shrink-0">
              <Building2 className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-2">Corporate, Commercial & Tax</h2>
              <p className="text-lg text-muted-foreground">
                We act as the external legal counsel for SMEs and established corporations, providing the legal infrastructure necessary for sustainable growth.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 pl-0 md:pl-22">
            <Card className="bg-white border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-primary">Corporate Structuring & Governance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                    <span>Incorporation of Private Limited Companies, PLCs, and LLPs under the Companies Act, 2015.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                    <span>Registration of Foreign Branches and subsidiaries for multinational entities.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                    <span>Company Secretarial Services: Filing Annual Returns, Board Resolutions, and maintaining statutory registers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                    <span>Advisory on Directors’ duties and liabilities.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-primary">Commercial Contracts & Joint Ventures</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                    <span>Drafting and negotiation of complex commercial agreements including Shareholder, Franchise, and Distribution Agreements.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                    <span>Structuring Joint Ventures (JVs) for real estate and infrastructure projects.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                    <span>Due diligence on mergers and acquisitions (M&A).</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-primary">Tax Advisory & Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                    <span>Guidance on tax obligations under the Income Tax Act, VAT Act, and Tax Procedures Act.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                    <span>Representation before the Tax Appeals Tribunal (TAT).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                    <span>Structuring transactions to ensure tax efficiency and compliance with KRA requirements.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-primary">Technology & Intellectual Property (IP)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                    <span>Protection of intangible assets through Trademarks, Patents, and Copyrights registration at KIPI and KECOBO.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                    <span>Drafting Software as a Service (SaaS) agreements and Technology Transfer contracts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                    <span>Data Protection Impact Assessments (DPIA) and compliance with the Data Protection Act, 2019.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="container" />

      {/* Department B */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 bg-primary/5 rounded-lg flex items-center justify-center shrink-0">
              <Globe className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-2">Real Estate, Banking & Finance</h2>
              <p className="text-lg text-muted-foreground">
                We provide end-to-end support in property and financial transactions, ensuring security of tenure and enforceability of collateral.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 pl-0 md:pl-22">
            <Card className="bg-white border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-primary">Conveyancing & Real Estate Development</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                    <span>Handling Sale Agreements, Transfers, and Long-term Leases for residential and commercial properties.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                    <span>Development Advisory: Change of User, Amalgamation, Subdivision, and obtaining approvals (NCA, County).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                    <span>Due Diligence: Historical searches at the Land Registry and survey verifications.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-primary">Banking & Securities Perfection</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                    <span>Preparation and registration of securities including Charges, Mortgages, Corporate Debentures, and Chattels Mortgages.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                    <span>Advisory on the Moveable Property Security Rights Act, 2017.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                    <span>Debt restructuring and loan syndication agreements.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="container" />

      {/* Department C */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 bg-primary/5 rounded-lg flex items-center justify-center shrink-0">
              <Gavel className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-2">Dispute Resolution (Litigation & ADR)</h2>
              <p className="text-lg text-muted-foreground">
                When conflicts arise, we are prepared to advocate fearlessly for our clients' rights across the Kenyan judicial hierarchy.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 pl-0 md:pl-22">
            <Card className="bg-white border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-primary">Civil & Commercial Litigation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                    <span>Representation in Magistrates Courts, High Court, Court of Appeal, and Supreme Court.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                    <span>Handling complex commercial disputes, breach of contract suits, and insurance claims.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                    <span>Constitutional Petitions and Judicial Review applications.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-primary">Employment & Labour Relations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                    <span>Representation in the Employment and Labour Relations Court (ELRC).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                    <span>Defense against Unfair Termination and Wrongful Dismissal claims.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                    <span>Advisory on Redundancy procedures, restructuring, and Collective Bargaining Agreements (CBAs).</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-primary">Environment & Land Court (ELC)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                    <span>Resolving boundary disputes, trespass claims, and adverse possession suits.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                    <span>Litigation regarding Compulsory Acquisition and compensation by the State.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-primary">Alternative Dispute Resolution (ADR)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                    <span>Representation in Arbitration proceedings.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                    <span>Court-Annexed Mediation and private negotiation settlements to preserve business relationships.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="container" />

      {/* Department D */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 bg-primary/5 rounded-lg flex items-center justify-center shrink-0">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-2">Private Client & Specialized Services</h2>
              <p className="text-lg text-muted-foreground">
                We handle personal legal matters with the utmost discretion, empathy, and professionalism.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 pl-0 md:pl-22">
            <Card className="bg-white border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-primary">Family Law, Succession & Trusts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                    <span>Estate Planning: Drafting of Wills, Codicils, and creation of private Family Trusts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                    <span>Probate: Petitioning for Grants of Letters of Administration and Grants of Probate.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                    <span>Family Litigation: Divorce proceedings, Division of Matrimonial Property, and Child Custody/Maintenance.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-primary">Immigration & Global Mobility</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                    <span>Processing of Class D (Employment) and Class G (Investor) Work Permits.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                    <span>Applications for Permanent Residence and Kenya Citizenship.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                    <span>Appeals to the Kenya Citizenship and Immigration Services (KCIS).</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-primary">Environmental Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                    <span>Advisory on compliance with NEMA regulations and EMCA.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                    <span>Defense in environmental prosecution and Tribunal matters.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-primary">Criminal Defense</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                    <span>Representation in white-collar crime investigations (Anti-Corruption, Fraud).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-secondary mt-1 shrink-0" />
                    <span>Bail and Bond applications and criminal trial defense.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
