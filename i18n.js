/* LA 27 Marketing — i18n dictionary + apply logic */
/* Keys: data-i18n => textContent, data-i18n-html => innerHTML */

window.LA27_I18N = (() => {

  const T = {

    es: {
      "lang.label": "Español",
      "lang.code": "ES",
      "nav.work": "Soluciones",
      "nav.studio": "Tecnología",
      "nav.founder": "Founder",
      "nav.contact": "Contacto",
      "hero.meta": "001 / Intro",
      "hero.location": "Barcelona — ES",
      "hero.title": `<span class="word"><span>Alta</span></span> <span class="word"><span>Entregabilidad.</span></span>`,
      "hero.sub": "Campañas de email marketing de alto impacto para adquisición de clientes. Bases de datos B2B y B2C 100% verificadas, libres de bots y optimizadas para maximizar tus ventas.",
      "hero.scroll": "Ver soluciones",
      "hero.btn.audio": "Crear Campaña",
      "trust.text": "Email Marketing <i class=\"sep\"></i> Audiencias Verificadas <i class=\"sep\"></i> 0% Spam & Bots <i class=\"sep\"></i> B2B & B2C Database <i class=\"sep\"></i> Entregabilidad 99.8% <i class=\"sep\"></i>",
      "work.eyebrow": "Soluciones",
      "work.title": `Campañas de<br /><span class="it">Adquisición.</span>`,
      "work.ferrari.title": `Conciertos &<br /><span class="it">Live Shows.</span>`,
      "work.ferrari.meta1": "B2C Marketing",
      "work.ferrari.meta2": "Fan Acquisition",
      "work.ferrari.desc": "Campañas masivas dirigidas a audiencias reales, compradores de entradas y promotores de conciertos en Alemania, España y Europa. Segmentación precisa según región y gustos musicales.",
      "work.dior.title": `Brands &<br /><span class="it">E-Commerce.</span>`,
      "work.dior.meta1": "B2B/B2C Outreach",
      "work.dior.meta2": "Direct Sales",
      "work.dior.desc": "Email marketing conversacional de alto impacto para marcas D2C, tiendas online y suplementos. Generación de leads altamente interesados listos para comprar.",
      "work.bmw.title": `Bases de Datos<br /><span class="it">a Medida.</span>`,
      "work.bmw.meta1": "Data Enrichment",
      "work.bmw.meta2": "MX Verification",
      "work.bmw.desc": "Construcción y depuración de bases de datos B2B y B2C personalizadas. Validación en tiempo real (MX checks) y cumplimiento de privacidad (GDPR) para proteger la reputación de tu dominio.",
      "why.eyebrow": "Tecnología",
      "why.title": `Entregabilidad<br /><span class="it">Garantizada.</span>`,
      "why.lede": `Nuestra infraestructura técnica está optimizada para superar filtros de spam, combinando validación en tiempo real de contactos y rotación de IPs limpias para que tu mensaje llegue directamente al buzón principal.`,
      "why.lede": `Nuestra infraestructura técnica en la nube combina validación de correos en tiempo real, rotación de IPs limpias y pre-calentamiento de dominios para superar los filtros de spam. <span class="hl">Entregabilidad del 99.8%.</span>`,
      "pillar.01.title": `IPs <span class="it">Rotativas.</span>`,
      "pillar.01.body": "Configuración óptima de servidores con IPs dedicadas y rotación programada para mantener una reputación intachable.",
      "pillar.02.title": `Datos <span class="it">Verificados.</span>`,
      "pillar.02.body": "Validación activa de buzones reales (MX check) antes de realizar cualquier envío para evitar rebotes.",
      "pillar.03.title": `GDPR <span class="it">Compliance.</span>`,
      "pillar.03.body": "Cumplimiento estricto con las regulaciones de privacidad europeas para proteger tu imagen corporativa.",
      "pillar.04.title": `Copy <span class="it">Conversacional.</span>`,
      "pillar.04.body": "Redacción adaptada, limpia y directa escrita específicamente para generar interés sin resultar intrusiva.",
      "founder.eyebrow": "Quiénes somos",
      "founder.title": `El <span class="it">Founder.</span>`,
      "founder.quote": `"El email marketing solo funciona si le hablas a la persona adecuada en el momento indicado. Sin spam, con datos reales."`,
      "founder.bio": "Tim Helmes es creador de sistemas de adquisición y director en Barcelona. LA 27 Marketing nació tras optimizar un sistema propio de captación B2B de alta tasa de conversión, ahora disponible para agencias, marcas y promotoras.",
      "founder.role": "Founder & Director — LA 27 Marketing",
      "contact.title": `Inicia tu<br /><span class="it">Campaña.</span>`,
      "contact.aside": "Cuéntanos cuál es tu público objetivo. Te responderemos con una propuesta de volumen y enfoque de campaña sin compromiso.",
      "contact.direct": "O escríbenos directamente",
      "contact.status": "Respuesta en menos de 24h",
      "contact.nocost": "Presupuesto personalizado · Sin compromiso",
      "form.name": "Nombre",
      "form.email": "Email",
      "form.company": "Empresa",
      "form.type": "Tipo de campaña",
      "form.message": "Mensaje",
      "form.submit": "Enviar",
      "form.success": "Recibido. Tim responde en menos de 24h.",
      "index.intro": "Intro",
      "index.reels": "Soluciones",
      "index.studio": "Tecnología",
      "index.founder": "Founder",
      "index.contact": "Contacto",
      "footer.copy": "© LA 27 Marketing · Barcelona",
      "footer.mastered": "Configured in Barcelona",
      "overlay.title": "Selecciona idioma.",
      "overlay.sub": "Select your language to enter.",
      "pill.exclusive": "100% Verificado",
      "pill.noroyalties": "Cero Spam / Bots",
      "pill.barcelona": "Entregabilidad 99.8%",
    },

    en: {
      "lang.label": "English",
      "lang.code": "EN",
      "nav.work": "Solutions",
      "nav.studio": "Technology",
      "nav.founder": "Founder",
      "nav.contact": "Contact",
      "hero.meta": "001 / Intro",
      "hero.location": "Barcelona — ES",
      "hero.title": `<span class="word"><span>High</span></span> <span class="word"><span class="it">Deliverability.</span></span>`,
      "hero.sub": "High-impact email marketing campaigns for customer acquisition. 100% verified B2B and B2C databases, free of bots and optimized to maximize your sales.",
      "hero.scroll": "See solutions",
      "hero.btn.audio": "Start Campaign",
      "trust.text": "Email Marketing <i class=\"sep\"></i> Verified Audiences <i class=\"sep\"></i> 0% Spam & Bots <i class=\"sep\"></i> B2B & B2C Database <i class=\"sep\"></i> 99.8% Deliverability <i class=\"sep\"></i>",
      "work.eyebrow": "Solutions",
      "work.title": `Acquisition<br /><span class="it">Campaigns.</span>`,
      "work.ferrari.title": `Concerts &<br /><span class="it">Live Shows.</span>`,
      "work.ferrari.meta1": "B2C Marketing",
      "work.ferrari.meta2": "Fan Acquisition",
      "work.ferrari.desc": "Mass campaigns targeting real music fans, ticket buyers, and concert promoters in Germany, Spain, and Europe. Precise targeting by region and music preferences.",
      "work.dior.title": `Brands &<br /><span class="it">E-Commerce.</span>`,
      "work.dior.meta1": "B2B/B2C Outreach",
      "work.dior.meta2": "Direct Sales",
      "work.dior.desc": "High-impact conversational email outreach for D2C brands, online stores, and supplements. Generating highly interested leads ready to buy.",
      "work.bmw.title": `Bespoke<br /><span class="it">Databases.</span>`,
      "work.bmw.meta1": "Data Enrichment",
      "work.bmw.meta2": "MX Verification",
      "work.bmw.desc": "Building and cleaning custom B2B and B2C databases. Real-time validation (MX checks) and full privacy compliance (GDPR) to protect your domain reputation.",
      "why.eyebrow": "Technology",
      "why.title": `Guaranteed<br /><span class="it">Deliverability.</span>`,
      "why.lede": "Our cloud-based technical infrastructure combines real-time email validation, clean IP rotation, and domain pre-warming to successfully land your message in the main inbox. <span class=\"hl\">99.8% Deliverability rate.</span>",
      "pillar.01.title": `Rotating <span class="it">IPs.</span>`,
      "pillar.01.body": "Optimal mail server setups with dedicated IPs and scheduled rotation to maintain flawless sender reputation.",
      "pillar.02.title": `Verified <span class="it">Data.</span>`,
      "pillar.02.body": "Active real-time validation of recipient mailboxes (MX check) before any dispatch to eliminate bounces.",
      "pillar.03.title": `GDPR <span class="it">Compliance.</span>`,
      "pillar.03.body": "Strict adherence to European data privacy laws to completely safeguard your corporate brand image.",
      "pillar.04.title": `Conversational <span class="it">Copy.</span>`,
      "pillar.04.body": "Clean, conversational copywriting tailored to local markets to spark warm sales conversations naturally.",
      "founder.eyebrow": "Who we are",
      "founder.title": `The <span class="it">Founder.</span>`,
      "founder.quote": `"Email outreach only works when you talk to the right person at the right time. No spam, just real data."`,
      "founder.bio": "Tim Helmes is an acquisition systems developer and director based in Barcelona. LA 27 Marketing was born after optimizing a proprietary high-conversion B2B client acquisition system, now available for agencies, brands, and promoters.",
      "founder.role": "Founder & Director — LA 27 Marketing",
      "contact.title": `Start your<br /><span class="it">Campaign.</span>`,
      "contact.aside": "Tell us who your target audience is. We'll reply with a custom volume and campaign strategy proposal, no commitment.",
      "contact.direct": "Or write to us directly",
      "contact.status": "Reply within 24h",
      "contact.nocost": "Custom quote · No commitment",
      "form.name": "Name",
      "form.email": "Email",
      "form.company": "Company",
      "form.type": "Campaign type",
      "form.message": "Message",
      "form.submit": "Send",
      "form.success": "Received. Tim replies within 24h.",
      "index.intro": "Intro",
      "index.reels": "Solutions",
      "index.studio": "Technology",
      "index.founder": "Founder",
      "index.contact": "Contact",
      "footer.copy": "© LA 27 Marketing · Barcelona",
      "footer.mastered": "Configured in Barcelona",
      "overlay.title": "Select language.",
      "overlay.sub": "Choose to enter.",
      "pill.exclusive": "100% Verified",
      "pill.noroyalties": "Zero Spam / Bots",
      "pill.barcelona": "99.8% Deliverability",
    },

    de: {
      "lang.label": "Deutsch",
      "lang.code": "DE",
      "nav.work": "Lösungen",
      "nav.studio": "Technologie",
      "nav.founder": "Gründer",
      "nav.contact": "Kontakt",
      "hero.meta": "001 / Intro",
      "hero.location": "Barcelona — ES",
      "hero.title": `<span class="word"><span>Hohe</span></span> <span class="word"><span class="it">Zustellbarkeit.</span></span>`,
      "hero.sub": "Effektive E-Mail-Marketing-Kampagnen zur Kundenakquise. Zu 100 % verifizierte B2B- und B2C-Datenbanken, frei von Bots und optimiert, um Ihre Verkäufe zu maximieren.",
      "hero.scroll": "Lösungen sehen",
      "hero.btn.audio": "Kampagne starten",
      "trust.text": "E-Mail-Marketing <i class=\"sep\"></i> Verifizierte Zielgruppen <i class=\"sep\"></i> 0% Spam & Bots <i class=\"sep\"></i> B2B & B2C Datenbanken <i class=\"sep\"></i> 99,8% Zustellbarkeit <i class=\"sep\"></i>",
      "work.eyebrow": "Lösungen",
      "work.title": `Akquisitions<br /><span class="it">Kampagnen.</span>`,
      "work.ferrari.title": `Konzerte &<br /><span class="it">Live-Shows.</span>`,
      "work.ferrari.meta1": "B2C Marketing",
      "work.ferrari.meta2": "Fan-Gewinnung",
      "work.ferrari.desc": "Massenkampagnen für echte Musikfans, Ticketkäufer und Konzertveranstalter in Deutschland, Spanien und Europa. Präzises Targeting nach Region und Musikpräferenz.",
      "work.dior.title": `Marken &<br /><span class="it">E-Commerce.</span>`,
      "work.dior.meta1": "B2B/B2C Outreach",
      "work.dior.meta2": "Direktvertrieb",
      "work.dior.desc": "Konversationsstarkes E-Mail-Outreach für D2C-Marken, Online-Shops und Nahrungsergänzungsmittel. Generierung hochinteressierter Leads, die kaufbereit sind.",
      "work.bmw.title": `Maßgeschneiderte<br /><span class="it">Datenbanken.</span>`,
      "work.bmw.meta1": "Datenanreicherung",
      "work.bmw.meta2": "MX-Verifizierung",
      "work.bmw.desc": "Aufbau und Bereinigung benutzerdefinierter B2B- und B2C-Datenbanken. Echtzeit-Validierung (MX-Checks) und vollständige Einhaltung des Datenschutzes (DSGVO), um Ihre Domain-Reputation zu schützen.",
      "why.eyebrow": "Technologie",
      "why.title": `Garantierte<br /><span class="it">Zustellbarkeit.</span>`,
      "why.lede": "Unsere technische Infrastruktur ist darauf optimiert, Spam-Filter zu umgehen. Sie kombiniert Echtzeit-Kontaktvalidierung und saubere IP-Rotation, damit Ihre Nachricht direkt im primären Posteingang landet.",
      "pillar.01.title": "0% Spam / Bots",
      "pillar.01.body": "Alle Datenbankkontakte werden in Echtzeit aktiv bereinigt, verifiziert und validiert.",
      "pillar.02.title": "Targeting",
      "pillar.02.body": "Wir filtern und steuern Ihre Kampagne genau nach den demografischen Merkmalen und Regionen, die Ihr Unternehmen benötigt.",
      "pillar.03.title": "Hohe Zustellbarkeit",
      "pillar.03.body": "Sichere Domain-Einrichtung und Domain-Warming (SPF, DKIM, DMARC), um Öffnungsraten von über 60 % aufrechtzuerhalten.",
      "pillar.04.title": "Premium Copy",
      "pillar.04.body": "Texterstellung mit einem nicht-intrusiven, konversationsbasierten Copywriting-Ansatz, angepasst an die jeweilige Landessprache.",
      "founder.eyebrow": "Wer wir sind",
      "founder.title": "Der Gründer.",
      "founder.quote": `"E-Mail-Outreach funktioniert nur, wenn Sie zur richtigen Zeit mit der richtigen Person sprechen. Kein Spam, nur echte Daten."`,
      "founder.bio": "Tim Helmes ist Komponist, Regisseur und Systementwickler in Barcelona. LA 27 Marketing entstand nach der Optimierung eines eigenen B2B-Akquisitionssystems mit hoher Performance, das jetzt für Marken und Unterhaltung verfügbar es.",
      "founder.role": "Gründer & Direktor — LA 27 Marketing",
      "contact.title": `Starten Sie Ihre<br /><span class="it">Kampagne.</span>`,
      "contact.aside": "Teilen Sie uns mit, wer Ihre Zielgruppe ist. Wir antworten mit einem maßgeschneiderten Kampagnen- und Volumenkonzept, völlig unverbindlich.",
      "contact.direct": "Oder schreiben Sie uns direkt",
      "contact.status": "Antwort innerhalb von 24 Std.",
      "contact.nocost": "Individuelles Angebot · Unverbindlich",
      "form.name": "Name",
      "form.email": "E-Mail",
      "form.company": "Firma",
      "form.type": "Kampagnentyp",
      "form.message": "Nachricht",
      "form.submit": "Senden",
      "form.success": "Erhalten. Tim antwortet innerhalb von 24 Stunden.",
      "index.intro": "Intro",
      "index.reels": "Lösungen",
      "index.studio": "Technologie",
      "index.founder": "Gründer",
      "index.contact": "Kontakt",
      "footer.copy": "© LA 27 Marketing · Barcelona",
      "footer.mastered": "Configured in Barcelona",
      "overlay.title": "Sprache wählen.",
      "overlay.sub": "Auswählen zum Eintreten.",
      "pill.exclusive": "100% Verifiziert",
      "pill.noroyalties": "Keine Bots / Spam",
      "pill.barcelona": "99,8% Zustellbarkeit",
    },

    fr: {
      "lang.label": "Français",
      "lang.code": "FR",
      "nav.work": "Solutions",
      "nav.studio": "Technologie",
      "nav.founder": "Fondateur",
      "nav.contact": "Contact",
      "hero.meta": "001 / Intro",
      "hero.location": "Barcelona — ES",
      "hero.title": `<span class="word"><span>Haute</span></span> <span class="word"><span class="it">Délivrabilité.</span></span>`,
      "hero.sub": "Campagnes d'email marketing à fort impact pour l'acquisition de clients. Bases de données B2B et B2C 100% vérifiées, sans bots et optimisées pour maximiser vos ventes.",
      "hero.scroll": "Voir les solutions",
      "hero.btn.audio": "Lancer la Campagne",
      "trust.text": "Email Marketing <i class=\"sep\"></i> Audiences Vérifiées <i class=\"sep\"></i> 0% Spam & Bots <i class=\"sep\"></i> Bases de Données B2B/B2C <i class=\"sep\"></i> Délivrabilité 99.8% <i class=\"sep\"></i>",
      "work.eyebrow": "Solutions",
      "work.title": `Campagnes<br /><span class="it">d'Acquisition.</span>`,
      "work.ferrari.title": `Concerts &<br /><span class="it">Spectacles Live.</span>`,
      "work.ferrari.meta1": "B2C Marketing",
      "work.ferrari.meta2": "Fan Acquisition",
      "work.ferrari.desc": "Campagnes massives ciblant les vrais amateurs de musique, acheteurs de billets et promoteurs en Allemagne, Espagne et Europe. Ciblage précis par région et préférences musicales.",
      "work.dior.title": `Marques &<br /><span class="it">E-Commerce.</span>`,
      "work.dior.meta1": "B2B/B2C Outreach",
      "work.dior.meta2": "Ventes Directes",
      "work.dior.desc": "Emailing conversationnel à fort impact pour les marques D2C, boutiques en ligne et suppléments. Génération de leads qualifiés prêts à acheter.",
      "work.bmw.title": `Bases de Données<br /><span class="it">sur Mesure.</span>`,
      "work.bmw.meta1": "Enrichissement",
      "work.bmw.meta2": "Vérification MX",
      "work.bmw.desc": "Construction et nettoyage de bases de données B2B et B2C personnalisées. Validation en temps réel (MX checks) et conformité RGPD pour protéger votre réputation de domaine.",
      "why.eyebrow": "Technologie",
      "why.title": `Délivrabilité<br /><span class="it">Garantie.</span>`,
      "why.lede": "Notre infrastructure technique est optimisée pour contourner les filtres anti-spam, alliant validation des contacts en temps réel et rotation d'IP propres pour atterrir directement en boîte principale.",
      "pillar.01.title": "0% Spam / Bots",
      "pillar.01.body": "Tous les contacts de notre base sont activement nettoyés, vérifiés et validés en temps réel.",
      "pillar.02.title": "Ciblage",
      "pillar.02.body": "We filter and target your campaign based exactly on the demographics and region your business needs.",
      "pillar.03.title": "Délivrabilité Élevée",
      "pillar.03.body": "Configuration et préchauffage sécurisés des domaines (SPF, DKIM, DMARC) pour maintenir des taux d'ouverture supérieurs à 60%.",
      "pillar.04.title": "Copywriting Premium",
      "pillar.04.body": "Rédaction axée sur une approche conversationnelle et non intrusive, adaptée à la langue locale.",
      "founder.eyebrow": "Qui nous sommes",
      "founder.title": "Le Fondateur.",
      "founder.quote": `"La prospection par email ne fonctionne que si vous parlez à la bonne personne au bon moment. Pas de spam, uniquement des données réelles."`,
      "founder.bio": "Tim Helmes est compositeur, réalisateur et développeur de systèmes basé à Barcelone. LA 27 Marketing est né de l'optimisation d'un système d'acquisition B2B haute performance exclusif, désormais accessible aux marques et au divertissement.",
      "founder.role": "Fondateur & Directeur — LA 27 Marketing",
      "contact.title": `Lancez votre<br /><span class="it">Campagne.</span>`,
      "contact.aside": "Dites-nous quelle est votre cible. Nous répondrons avec une proposition personnalisée de volume et de stratégie, sans engagement.",
      "contact.direct": "Ou écrivez-nous directement",
      "contact.status": "Réponse sous 24h",
      "contact.nocost": "Devis personnalisé · Sans engagement",
      "form.name": "Nom",
      "form.email": "Email",
      "form.company": "Entreprise",
      "form.type": "Type de campagne",
      "form.message": "Message",
      "form.submit": "Envoyer",
      "form.success": "Reçu. Tim répond sous 24 heures.",
      "index.intro": "Intro",
      "index.reels": "Solutions",
      "index.studio": "Technologie",
      "index.founder": "Fondateur",
      "index.contact": "Contact",
      "footer.copy": "© LA 27 Marketing · Barcelone",
      "footer.mastered": "Configured in Barcelona",
      "overlay.title": "Choisir la langue.",
      "overlay.sub": "Sélectionnez pour entrer.",
      "pill.exclusive": "100% Vérifié",
      "pill.noroyalties": "Zéro Spam / Bots",
      "pill.barcelona": "Délivrabilité 99.8%",
    },

    pt: {
      "lang.label": "Português",
      "lang.code": "PT",
      "nav.work": "Soluções",
      "nav.studio": "Tecnologia",
      "nav.founder": "Founder",
      "nav.contact": "Contacto",
      "hero.meta": "001 / Intro",
      "hero.location": "Barcelona — ES",
      "hero.title": `<span class="word"><span>Alta</span></span> <span class="word"><span class="it">Entregabilidade.</span></span>`,
      "hero.sub": "Campanhas de email marketing de alto impacto para aquisição de clientes. Bases de dados B2B e B2C 100% verificadas, livres de bots e otimizadas para maximizar as suas vendas.",
      "hero.scroll": "Ver soluções",
      "hero.btn.audio": "Criar Campanha",
      "trust.text": "Email Marketing <i class=\"sep\"></i> Audiências Verificadas <i class=\"sep\"></i> 0% Spam & Bots <i class=\"sep\"></i> Bases de Dados B2B & B2C <i class=\"sep\"></i> Entregabilidade 99.8% <i class=\"sep\"></i>",
      "work.eyebrow": "Soluções",
      "work.title": `Campanhas de<br /><span class="it">Aquisição.</span>`,
      "work.ferrari.title": `Concertos &<br /><span class="it">Shows Live.</span>`,
      "work.ferrari.meta1": "B2C Marketing",
      "work.ferrari.meta2": "Fan Acquisition",
      "work.ferrari.desc": "Campanhas massivas direcionadas para fãs de música reais, compradores de bilhetes e promotores na Alemanha, Espanha e Europa. Segmentação precisa por região e preferências musicais.",
      "work.dior.title": `Marcas &<br /><span class="it">E-Commerce.</span>`,
      "work.dior.meta1": "B2B/B2C Outreach",
      "work.dior.meta2": "Vendas Diretas",
      "work.dior.desc": "Emailing conversacional de alto impacto para marcas D2C, lojas online e suplementos. Geração de leads altamente qualificados prontos a comprar.",
      "work.bmw.title": `Bases de Dados<br /><span class="it">à Medida.</span>`,
      "work.bmw.meta1": "Enriquecimento",
      "work.bmw.meta2": "Verificação MX",
      "work.bmw.desc": "Construção e limpeza de bases de dados B2B e B2C personalizadas. Validação em tempo real (MX checks) e conformidade de privacidade (GDPR) para proteger a reputação do seu domínio.",
      "why.eyebrow": "Tecnologia",
      "why.title": `Entregabilidade<br /><span class="it">Garantida.</span>`,
      "why.lede": "A nossa infraestrutura técnica está otimizada para superar filtros de spam, combinando validação de contactos em tempo real e rotação de IPs limpos para entregar a mensagem diretamente na caixa de entrada principal.",
      "pillar.01.title": "0% Spam / Bots",
      "pillar.01.body": "Todos os contactos da base de dados são limpos, verificados e validados ativamente em tempo real.",
      "pillar.02.title": "Segmentação",
      "pillar.02.body": "Filtramos e direcionamos a sua campanha com base exatamente no perfil e na região que a sua empresa necessita.",
      "pillar.03.title": "Alta Entregabilidade",
      "pillar.03.body": "Configuração e aquecimento seguro de domínios (SPF, DKIM, DMARC) para manter taxas de abertura acima de 60%.",
      "pillar.04.title": "Enfoque Premium",
      "pillar.04.body": "Redação focada num estilo conversacional e não intrusivo, adaptado ao idioma local.",
      "founder.eyebrow": "Quem somos",
      "founder.title": "O Founder.",
      "founder.quote": `"O email marketing só funciona quando fala com a pessoa certa no momento certo. Sem spam, apenas dados reais."`,
      "founder.bio": "Tim Helmes é compositor, diretor e desenvolvedor de sistemas sediado em Barcelona. A LA 27 Marketing nasceu após a otimização de um sistema de aquisição B2B próprio de alta performance, agora disponível para marcas e entretenimento.",
      "founder.role": "Founder & Diretor — LA 27 Marketing",
      "contact.title": `Inicie a sua<br /><span class="it">Campanha.</span>`,
      "contact.aside": "Diga-nos qual é o seu público-alvo. Responderemos com uma proposta de volume e estratégia personalizada, sem compromisso.",
      "contact.direct": "Ou escreva-nos diretamente",
      "contact.status": "Resposta em menos de 24h",
      "contact.nocost": "Orçamento personalizado · Sem compromisso",
      "form.name": "Nome",
      "form.email": "Email",
      "form.company": "Empresa",
      "form.type": "Tipo de campanha",
      "form.message": "Mensagem",
      "form.submit": "Enviar",
      "form.success": "Recebido. O Tim responde em menos de 24h.",
      "index.intro": "Intro",
      "index.reels": "Soluções",
      "index.studio": "Tecnologia",
      "index.founder": "Founder",
      "index.contact": "Contacto",
      "footer.copy": "© LA 27 Marketing · Barcelona",
      "footer.mastered": "Configured in Barcelona",
      "overlay.title": "Selecione o idioma.",
      "overlay.sub": "Escolha para entrar.",
      "pill.exclusive": "100% Verificado",
      "pill.noroyalties": "Cero Spam / Bots",
      "pill.barcelona": "Entregabilidade 99.8%",
    },

  };

  const LANGS = ["es", "en", "de", "fr", "pt"];
  const STORAGE_KEY = "la27.lang";

  function getLang() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function setLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }

  function apply(lang) {
    const dict = T[lang];
    if (!dict) return;

    document.documentElement.lang = lang;

    // Text content
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const k = el.getAttribute("data-i18n");
      if (dict[k] != null) el.textContent = dict[k];
    });

    // HTML content
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const k = el.getAttribute("data-i18n-html");
      if (dict[k] != null) el.innerHTML = dict[k];
    });

    // Re-stagger hero words
    const heroWords = document.querySelectorAll(".hero-title .word > span");
    heroWords.forEach((sp, i) => {
      sp.style.animationDelay = (0.1 + i * 0.08) + "s";
      sp.style.animation = "none";
      void sp.offsetWidth;
      sp.style.animation = "";
    });

    // Update lang switcher text
    const cur = document.querySelector(".lang-switch-btn .lang-switch-current");
    if (cur) cur.textContent = dict["lang.code"] || lang.toUpperCase();
  }

  function init() {
    let lang = getLang();
    if (!lang) {
      const user = (navigator.language || navigator.userLanguage || "es").toLowerCase().split("-")[0];
      lang = LANGS.includes(user) ? user : "es";
    }
    setLang(lang);
    apply(lang);

    // Bind lang switches
    document.querySelectorAll("[data-lang]").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        const l = a.getAttribute("data-lang");
        setLang(l);
        apply(l);
        const menu = document.querySelector(".lang-switch");
        if (menu) menu.classList.remove("is-open");
      });
    });
  }

  return { init, apply, getLang, setLang };

})();

document.addEventListener("DOMContentLoaded", () => {
  window.LA27_I18N.init();
});
