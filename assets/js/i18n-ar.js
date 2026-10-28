/* Arabic translations.
   Keys are the English text exactly as it appears on the page (whitespace collapsed).
   - rich: whole elements whose content has inline markup (value is HTML)
   - text: single text fragments (value is plain text)
   Text not listed here (tech names, emails, etc.) stays in English. */
window.I18N_AR = {
  meta: {
    title: 'عبدالرحمن خطاب | مطوّر Full-Stack ‎.NET و Angular',
    description: 'عبدالرحمن خطاب — مطوّر Full-Stack متخصص في الباك إند باستخدام ASP.NET Core و Angular و SQL Server، مع Clean Architecture و DDD و CQRS. يبني أيضاً مزايا الذكاء الاصطناعي — المركز الثاني في هاكاثون الذكاء الاصطناعي 2026.'
  },
  name: 'عبدالرحمن خطاب',
  roles: [
    'مطوّر Full-Stack ‎.NET و Angular',
    'متخصص باك إند ‎.NET',
    'Clean Architecture · DDD · CQRS',
    'مطوّر واجهات Angular',
    'تطبيقات مدعومة بالذكاء الاصطناعي · RAG'
  ],
  botText: 'للمرضى الذين لديهم حساسية من البنسلين، يذكر الدليل بدائل غير البنسلين، وينصح بالتأكد من نوع الحساسية مع طبيبك قبل اختيار أحدها.',
  ui: {
    copied: 'تم نسخ البريد الإلكتروني ✓',
    copiedBtn: 'تم النسخ!',
    copy: 'نسخ',
    langBtnLabel: 'View the site in English',
    openMenu: 'فتح القائمة',
    closeMenu: 'إغلاق القائمة'
  },

  rich: {
    '2nd Place · AI Hackathon 2026': '<strong>المركز الثاني</strong> · هاكاثون الذكاء الاصطناعي 2026',
    'Full-stack developer specialized in the back end. I build production-style C# / ASP.NET Core APIs with Angular front ends — Clean Architecture, DDD, CQRS, OAuth 2.0 / OIDC and hundreds of automated tests — and I add AI where it helps: my medical RAG assistant took 2nd place at the AI Hackathon 2026.':
      'مطوّر Full-Stack <em>متخصص في الباك إند</em>. أبني APIs بمستوى إنتاجي باستخدام <strong><bdi>C# / ASP.NET Core</bdi></strong> مع واجهات <strong>Angular</strong> — بتطبيق Clean Architecture و DDD و CQRS و OAuth 2.0 / OIDC ومئات الاختبارات الآلية — وأضيف <strong>الذكاء الاصطناعي</strong> حيث يفيد: مساعدي الطبي القائم على RAG حصل على المركز الثاني في هاكاثون الذكاء الاصطناعي 2026.',
    '600+ testspassing · Clean Architecture': '<strong>+600 اختبار</strong><small>ناجحة · Clean Architecture</small>',
    '2nd / 15,000+AI Hackathon applicants': '<strong>الثاني من +15,000</strong><small>متقدم لهاكاثون الذكاء الاصطناعي</small>',
    'Automated tests across my .NET projects': 'اختبار آلي في مشاريعي على ‎.NET',
    'Back-end systems built — 2 with Angular front ends': 'أنظمة باك إند بنيتها — منها 2 بواجهات Angular',
    'Place, AI Hackathon 2026 (15,000+ applicants)': 'المركز الثاني، هاكاثون الذكاء الاصطناعي 2026 (+15,000 متقدم)',
    'Training tracks & certifications': 'مسارات تدريبية وشهادات',

    '01 Featured project': '<span>01</span> مشروع مميز',
    'Talabat-like Food-Delivery Platform': 'منصة <span class="grad">توصيل طعام</span> على غرار طلبات',
    'A full-stack .NET + Angular system I started during my Link Development internship and kept building afterwards: an enterprise-grade back end with separate Customer, Delivery and Admin APIs, a central identity server, a DDD domain model with CQRS via MediatR, Redis cart caching, an Angular customer app — and 600+ automated tests keeping it all honest.':
      'نظام Full-Stack بـ ‎.NET و Angular بدأته خلال تدريبي في <strong>Link Development</strong> وواصلت تطويره بعده: باك إند بمستوى المؤسسات مع <strong>APIs منفصلة للعملاء والتوصيل والإدارة</strong>، وخادم هوية مركزي، ونموذج Domain بأسلوب DDD مع CQRS عبر MediatR، وتخزين مؤقت للسلة باستخدام Redis، وتطبيق Angular للعملاء — و<strong>أكثر من 600 اختبار آلي</strong> تضمن سلامة كل ذلك.',
    'Zero infrastructure leakage into the domain — enforced by architecture tests. CQRS via MediatR separates reads and writes; optimistic concurrency (RowVersion) stops two couriers from taking the same order, and Redis caches shopping carts.':
      'لا تسرّب لطبقة البنية التحتية إلى الـ Domain — وتفرض ذلك اختبارات المعمارية. يفصل CQRS عبر MediatR بين القراءة والكتابة، ويمنع التزامن المتفائل (RowVersion) مندوبَين من استلام الطلب نفسه، ويخزّن Redis سلال التسوق مؤقتاً.',
    'A centralized OAuth 2.0 / OpenID Connect authority (Duende IdentityServer) with PKCE, role-based authorization and custom JWT claims, isolated from the Customer, Delivery and Admin APIs.':
      'جهة مصادقة مركزية بـ OAuth 2.0 / OpenID Connect (Duende IdentityServer) مع PKCE وصلاحيات حسب الأدوار و JWT claims مخصصة، ومعزولة عن APIs العملاء والتوصيل والإدارة.',
    "The customer app is built against the APIs' OpenAPI contracts — browse, menu, cart, checkout and order history.":
      'تطبيق العملاء مبني وفق عقود OpenAPI الخاصة بالـ APIs — تصفح المطاعم، والقائمة، والسلة، وإتمام الطلب، وسجل الطلبات.',

    '02 Experience': '<span>02</span> الخبرة',
    "Where I've worked": 'أين <span class="grad">عملت</span>',
    'Talabat-like food-delivery platform · .NET, EF Core, SQL Server, Duende IdentityServer, Angular':
      'منصة توصيل طعام على غرار طلبات · ‎.NET و EF Core و SQL Server و Duende IdentityServer و Angular',
    'Applied CQRS, Domain-Driven Design, system design and software architecture from the training by building a Talabat-like platform — and kept developing it after the internship.':
      'طبّقت CQRS و Domain-Driven Design وتصميم الأنظمة ومعمارية البرمجيات من التدريب ببناء منصة على غرار طلبات — وواصلت تطويرها بعد انتهاء التدريب.',
    'Layered Clean Architecture with separate Customer, Delivery and Admin APIs and an identity server (OAuth 2.0 / OpenID Connect, authorization code + PKCE, role-based access).':
      'Clean Architecture متعددة الطبقات مع <b>APIs منفصلة للعملاء والتوصيل والإدارة</b> وخادم هوية (OAuth 2.0 / OpenID Connect، و authorization code + PKCE، وصلاحيات حسب الأدوار).',
    'DDD aggregates and domain services for cart expiry, checkout validation and delivery assignment, with CQRS via MediatR, Redis cart caching and optimistic concurrency (RowVersion) to prevent conflicting courier assignments.':
      'Aggregates و Domain Services بأسلوب DDD لانتهاء صلاحية السلة والتحقق عند الدفع وإسناد التوصيل، مع CQRS عبر MediatR وتخزين السلة مؤقتاً في Redis والتزامن المتفائل (RowVersion) لمنع تعارض إسناد الطلبات للمندوبين.',
    'Built the Angular customer app end to end and covered the back end with 600+ automated tests, including architecture tests and SQL Server integration tests with Testcontainers.':
      'بنيت تطبيق العملاء بـ Angular بالكامل، وغطّيت الباك إند بـ <b>أكثر من 600 اختبار آلي</b>، منها اختبارات المعمارية واختبارات تكامل مع SQL Server باستخدام Testcontainers.',
    'Supported business clients using ERP, POS and invoicing software, resolving day-to-day issues in their sales and invoicing operations.':
      'دعم فني لعملاء من الشركات يستخدمون أنظمة ERP ونقاط البيع (POS) والفوترة، وحل مشكلاتهم اليومية في عمليات البيع والفوترة.',
    'Guided clients through an e-invoicing application that automates invoice submission to the Egyptian Tax Authority (ETA) portal.':
      'إرشاد العملاء لاستخدام تطبيق فاتورة إلكترونية يرسل الفواتير تلقائياً إلى بوابة مصلحة الضرائب المصرية (ETA).',
    'Delivered technical presentations and training sessions on back-end development with .NET.':
      'تقديم عروض تقنية وجلسات تدريبية في تطوير الباك إند باستخدام ‎.NET.',
    'Mentored team members on coding and problem-solving, and encouraged knowledge sharing across the team.':
      'توجيه أعضاء الفريق في البرمجة وحل المشكلات، وتشجيع تبادل المعرفة داخل الفريق.',

    '03 Projects': '<span>03</span> المشاريع',
    "Things I've built": 'أشياء <span class="grad">بنيتها</span>',
    'Full-stack .NET & Angular systems first — taken from business requirements to tested, demo-ready products.':
      'أنظمة Full-Stack بـ ‎.NET و Angular أولاً — من متطلبات العمل إلى منتجات مختبرة وجاهزة للعرض.',
    'Enterprise-grade back end: Customer, Delivery & Admin APIs on Clean Architecture + DDD + CQRS (MediatR), an OAuth 2.0 / OIDC identity server, Redis cart caching and an Angular customer app.':
      'باك إند بمستوى المؤسسات: APIs للعملاء والتوصيل والإدارة مبنية على Clean Architecture و DDD و CQRS (MediatR)، مع خادم هوية OAuth 2.0 / OIDC، وتخزين السلة مؤقتاً في Redis، وتطبيق Angular للعملاء.',
    'Employees, departments, leave & transport requests, attendance, compensation and audit logs. HR policy turned into enforced rules, with scoped role-based access for Admin, HR, Manager and Employee.':
      'الموظفون والأقسام وطلبات الإجازات والمواصلات والحضور والرواتب وسجلات التدقيق. سياسات الموارد البشرية تحولت إلى قواعد مُلزِمة، مع صلاحيات محددة النطاق لمدير النظام والموارد البشرية والمدير والموظف.',
    'Web API that blocks requests by country — permanently or for a set time — using IPGeolocation.io behind a service interface, with a background cleanup worker, request logging and unit tests.':
      'Web API يحظر الطلبات حسب الدولة — بشكل دائم أو لمدة محددة — باستخدام IPGeolocation.io خلف واجهة خدمة، مع عامل تنظيف في الخلفية وتسجيل للطلبات واختبارات وحدات.',
    'A platform for running school operations — student registration, attendance tracking, grading and communication between teachers and parents.':
      'منصة لإدارة العمليات المدرسية — تسجيل الطلاب، ومتابعة الحضور، والدرجات، والتواصل بين المعلمين وأولياء الأمور.',
    'A minimal, framework-free PHP 8 API exposing sales and reporting data through secure endpoints — API-key authentication, request logging, validation and daily reporting.':
      'API خفيف بـ PHP 8 بدون أي framework يعرض بيانات المبيعات والتقارير عبر endpoints آمنة — مصادقة بمفتاح API، وتسجيل للطلبات، وتحقق من المدخلات، وتقارير يومية.',
    'Medical RAG assistant with hybrid retrieval, cross-encoder reranking, streaming LLM answers, citation validation and personalized memory in Arabic & English.':
      'مساعد طبي قائم على RAG مع بحث هجين، وإعادة ترتيب بـ cross-encoder، وإجابات LLM متدفقة، والتحقق من المصادر، وذاكرة شخصية بالعربية والإنجليزية.',

    '04 AI work · 🥈 2nd place': '<span>04</span> الذكاء الاصطناعي · 🥈 المركز الثاني',
    'Bringing AI into real products': 'إدخال <span class="grad">الذكاء الاصطناعي</span> في منتجات حقيقية',
    'Care for You — Medical RAG Assistant.': '<strong>Care for You — مساعد طبي قائم على RAG.</strong>',
    'A clinical decision-support assistant that answers medical questions from official guidelines (e.g. WHO) with cited sources — and abstains when the evidence is weak. Built with my team at the AI Hackathon (Creativa Innovation Hubs · Orange Digital Center Egypt · Instant Software Solutions), where we took 2nd place out of 15,000+ applicants. I worked end to end across ingestion, retrieval, generation and the API, and pitched it in the final round.':
      'مساعد لدعم القرار السريري يجيب عن الأسئلة الطبية من الإرشادات الرسمية (مثل منظمة الصحة العالمية) مع ذكر المصادر — <strong>ويمتنع عن الإجابة</strong> عندما تكون الأدلة ضعيفة. بنيته مع فريقي في هاكاثون الذكاء الاصطناعي (Creativa Innovation Hubs · Orange Digital Center Egypt · Instant Software Solutions)، وحصلنا على <strong>المركز الثاني</strong> من بين أكثر من 15,000 متقدم. عملت على المشروع من البداية للنهاية: إدخال المستندات، والاسترجاع، والتوليد، والـ API، وقدّمت العرض في الجولة النهائية.',
    'I have a penicillin allergy. What do the guidelines suggest for strep throat?':
      'عندي حساسية من البنسلين. ماذا تقترح الإرشادات لالتهاب الحلق البكتيري؟',
    'Detected: penicillin allergy — saved to memory with your consent':
      '<i class="fa-solid fa-brain"></i> تم رصد: <b>حساسية من البنسلين</b> — حُفظت في الذاكرة بموافقتك',
    'Ingests PDF, DOCX, DOC, Markdown and TXT with OCR fallback for scanned pages, table extraction, text cleaning, semantic and recursive chunking and deduplication in a background queue.':
      'يستقبل ملفات PDF و DOCX و DOC و Markdown و TXT مع OCR للصفحات الممسوحة ضوئياً، واستخراج الجداول، وتنظيف النصوص، والتقسيم الدلالي والتكراري، وإزالة التكرار في طابور خلفي.',
    'An LLM detects personal medical facts — conditions, allergies, medications — and, with consent, saves them as memory to tailor later answers. Supabase auth and per-user chat history.':
      'يكتشف LLM المعلومات الطبية الشخصية — الأمراض والحساسية والأدوية — ويحفظها بموافقة المستخدم كذاكرة لتخصيص الإجابات لاحقاً. مع مصادقة Supabase وسجل محادثات لكل مستخدم.',
    'Compared retrieval strategies with Precision@3/@5 and LLM-as-a-judge. Deployed to AWS EC2 via GitHub Actions with S3 document storage.':
      'قارنت استراتيجيات الاسترجاع باستخدام Precision@3/@5 و LLM-as-a-judge. النشر على AWS EC2 عبر GitHub Actions مع تخزين المستندات على S3.',

    '05 Skills': '<span>05</span> المهارات',
    'My toolbox': '<span class="grad">أدواتي</span>',
    'Back-end first, full-stack by default — with AI as a growing edge.':
      'الباك إند أولاً، و Full-Stack دائماً — مع الذكاء الاصطناعي كميزة متنامية.',
    '06 Education & training': '<span>06</span> التعليم والتدريب',
    'Always learning': 'أتعلّم <span class="grad">باستمرار</span>',
    '07 Contact': '<span>07</span> تواصل',
    "Let's build something intelligent.": 'لنبنِ شيئاً <span class="grad">ذكياً</span> معاً.',
    'Open to full-stack .NET & Angular roles, back-end positions and internships — AI features welcome. The fastest way to reach me is email.':
      'متاح لوظائف Full-Stack بـ ‎.NET و Angular، ووظائف الباك إند، والتدريب — ومرحّب بمزايا الذكاء الاصطناعي. أسرع طريقة للتواصل معي هي البريد الإلكتروني.',
    '© 2026 AbdElrahman Khattab · Built by hand with HTML, CSS & JS':
      '© <span id="year">2026</span> عبدالرحمن خطاب · صُمّم يدوياً بـ HTML و CSS و JS'
  },

  text: {
    'Skip to content': 'تخطَّ إلى المحتوى',
    'Featured': 'مميز',
    'Experience': 'الخبرة',
    'Projects': 'المشاريع',
    'AI': 'الذكاء الاصطناعي',
    'Skills': 'المهارات',
    'Education': 'التعليم',
    'Contact': 'تواصل',
    "Let's talk": 'لنتحدث',
    "Hi, I'm": 'مرحباً، أنا',
    'View my work': 'شاهد أعمالي',
    'Download CV': 'تحميل السيرة الذاتية',
    'Cairo, Egypt': 'القاهرة، مصر',
    'Open to opportunities': 'متاح لفرص العمل',
    'nd': '',

    'Angular customer app': 'تطبيق العملاء بـ Angular',
    'Browse · menu · cart · checkout · order history': 'التصفح · القائمة · السلة · الدفع · سجل الطلبات',
    'client': 'العميل',
    'OAuth 2.0 / OIDC · PKCE · roles · custom JWT claims': 'OAuth 2.0 / OIDC · PKCE · أدوار · JWT claims مخصصة',
    'auth': 'مصادقة',
    'api': 'api',
    'MediatR command & query handlers': 'معالجات أوامر واستعلامات عبر MediatR',
    'app': 'تطبيق',
    'Aggregates for cart expiry, checkout, delivery assignment': 'Aggregates لانتهاء السلة والدفع وإسناد التوصيل',
    'domain': 'نطاق',
    'Infrastructure': 'البنية التحتية',
    'EF Core · SQL Server · Redis cart cache · RowVersion': 'EF Core · SQL Server · تخزين السلة في Redis · RowVersion',
    'infra': 'بنية',
    'illustrative': 'توضيحي',
    'Clean Architecture, DDD & CQRS': 'Clean Architecture و DDD و CQRS',
    "Security that's built in": 'أمان مدمج من الأساس',
    'Angular, end to end': 'Angular من البداية للنهاية',
    'API repo': 'مستودع الـ API',
    'Frontend repo': 'مستودع الواجهة',

    'Back-End .NET Intern': 'متدرب باك إند ‎.NET',
    'Jul 2026 — Aug 2026': 'يوليو 2026 — أغسطس 2026',
    'Technical Support Specialist': 'أخصائي دعم فني',
    'Arkan for Digital Technology': 'أركان للتكنولوجيا الرقمية',
    'May 2025 — May 2026': 'مايو 2025 — مايو 2026',
    'Back-End Instructor (.NET) — Volunteer': 'مدرّب باك إند (‎.NET) — تطوعي',
    'Oct 2024 — May 2025': 'أكتوبر 2024 — مايو 2025',
    'SAP Basis Intern': 'متدرب SAP Basis',
    'IT Department, Amer Group': 'قسم تكنولوجيا المعلومات، مجموعة عامر',
    'Jul 2022 — Aug 2022': 'يوليو 2022 — أغسطس 2022',

    'All': 'الكل',
    'Full-Stack': 'Full-Stack',
    'Back-End': 'باك إند',
    '600+ tests': '+600 اختبار',
    'Back-End · Full-Stack': 'باك إند · Full-Stack',
    'Talabat-like Food Delivery': 'منصة توصيل طعام على غرار طلبات',
    'API': 'API',
    'Frontend': 'الواجهة',
    '390+ tests': '+390 اختبار',
    'Full-Stack · Independent': 'Full-Stack · مشروع مستقل',
    'HR Management System': 'نظام إدارة الموارد البشرية',
    'Code': 'الكود',
    'Geo-blocking': 'حظر جغرافي',
    'Back-End · API': 'باك إند · API',
    'IP Blocker API': 'IP Blocker API',
    'School platform': 'منصة مدرسية',
    'Full-Stack · ASP.NET Core': 'Full-Stack · ASP.NET Core',
    'Learning Management System': 'نظام إدارة التعلّم (LMS)',
    'API-key auth': 'مصادقة بمفتاح API',
    'Sales Reporting API': 'API تقارير المبيعات',
    '2nd Place': 'المركز الثاني',
    'AI · RAG · Team': 'ذكاء اصطناعي · RAG · فريق',
    'How it works': 'كيف يعمل',
    'More on GitHub': 'المزيد على GitHub',

    'Ingest': 'الإدخال',
    'PDF · DOCX · MD · OCR fallback, chunk & dedupe': 'PDF · DOCX · MD · OCR، تقسيم وإزالة التكرار',
    'Hybrid search': 'بحث هجين',
    'Qdrant vectors (BGE) + BM25 keywords': 'متجهات Qdrant (BGE) + كلمات مفتاحية BM25',
    'RRF fusion': 'دمج RRF',
    'Reciprocal Rank Fusion of both lists': 'دمج نتائج القائمتين بـ Reciprocal Rank Fusion',
    'Rerank': 'إعادة الترتيب',
    'BGE cross-encoder relevance': 'ترتيب الصلة بـ BGE cross-encoder',
    'Generate': 'التوليد',
    'Groq / OpenRouter LLMs, streamed': 'نماذج Groq / OpenRouter بإجابات متدفقة',
    'Validate': 'التحقق',
    'LLM citation check — block unsupported answers': 'فحص المصادر بـ LLM — حجب الإجابات غير المدعومة',
    '[1] Clinical guideline · p.14': '[1] دليل سريري · ص 14',
    '[2] WHO reference · §3.2': '[2] مرجع منظمة الصحة العالمية · §3.2',
    'Citation validator': 'مدقق المصادر',
    'Data handling': 'معالجة البيانات',
    'Personalization (Arabic / English)': 'التخصيص (عربي / إنجليزي)',
    'Evaluation & deployment': 'التقييم والنشر',
    'View the repository': 'عرض المستودع',

    'core': 'أساسي',
    'Back-End · .NET': 'الباك إند · ‎.NET',
    'Front-End · Angular': 'الواجهات · Angular',
    'Architecture & Testing': 'المعمارية والاختبارات',
    'Databases': 'قواعد البيانات',
    'AI & GenAI': 'الذكاء الاصطناعي التوليدي',
    'Cloud, DevOps & Languages': 'السحابة و DevOps ولغات البرمجة',

    'Aug 2022 — May 2027 (expected)': 'أغسطس 2022 — مايو 2027 (متوقع)',
    'B.Sc. in Software Engineering': 'بكالوريوس هندسة البرمجيات',
    'Al-Azhar University, Cairo': 'جامعة الأزهر، القاهرة',
    'Degree progress': 'التقدم في الدراسة',
    'Languages': 'اللغات',
    'Arabic': 'العربية',
    'Native': 'اللغة الأم',
    'English': 'الإنجليزية',
    'B2': 'B2',
    'Front-End Development with Angular': 'تطوير الواجهات باستخدام Angular',
    'Digital Egypt Pioneers Initiative': 'مبادرة رواد مصر الرقمية (DEPI)',
    'Jun — Dec 2025': 'يونيو — ديسمبر 2025',
    'Full-Stack .NET Web Development': 'تطوير الويب Full-Stack بـ ‎.NET',
    'Apr — Nov 2024': 'أبريل — نوفمبر 2024',
    'Information Technology Institute': 'معهد تكنولوجيا المعلومات (ITI)',
    'Jul — Sep 2024': 'يوليو — سبتمبر 2024',
    'Software Engineering — Back-End (Python, C)': 'هندسة البرمجيات — باك إند (Python و C)',
    'Nov 2023 — Nov 2024': 'نوفمبر 2023 — نوفمبر 2024',
    '45-Hour Startup Course & Final Project': 'دورة ريادة أعمال 45 ساعة ومشروع نهائي',
    'Jan 2024': 'يناير 2024',
    'Web Development Challenger Track': 'مسار تحدي تطوير الويب',
    'Ministry of Communications & IT': 'وزارة الاتصالات وتكنولوجيا المعلومات',
    'Sep 2022': 'سبتمبر 2022',
    'Full Stack Development (1 Million Arab Coders)': 'تطوير Full-Stack (مبادرة مليون مبرمج عربي)',
    'Jul 2020': 'يوليو 2020',
    'Copy': 'نسخ',
    'Back to top': 'العودة للأعلى'
  }
};
