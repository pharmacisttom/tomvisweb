import { Project } from '@/types/project';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'smartop',
    slug: 'smartop',
    name: 'SmartOP',
    shortName: 'SmartOP',
    tagline: 'Workforce & Field Operation Management',
    category: 'Operations',
    categorySlug: 'operations',
    status: 'Available',
    version: 'v2.4.1-demo',
    lastUpdated: 'Q3 2026',
    description: 'All-in-one workforce operations platform with high-precision GPS geofencing, photo evidence check-in, real-time worksite dispatch, and comprehensive audit trail.',
    overview: 'SmartOP provides enterprise organizations and field contractors with complete visibility into daily operations. Powered by Tomvis Location Services and Secure Sync, managers can coordinate hundreds of active sites, monitor staff attendance with biometric photo verification, and eliminate time theft and paperwork.',
    problem: {
      summary: 'Traditional field operations suffer from unreliable timekeeping, lack of location verification, slow reporting, and high operational friction.',
      points: [
        'Buddy punching and fraudulent attendance in dispersed sites',
        'Delayed incident reporting and lack of real-time photographic proof',
        'Manual paper-based scheduling and tedious supervisor sign-offs',
        'Zero centralized visibility over field team movements and safety'
      ]
    },
    solution: {
      summary: 'SmartOP connects field personnel with supervisory headquarters via real-time GPS geofenced check-ins, automated photo verification, and dynamic dispatch.',
      points: [
        'Geofenced check-in/out with anti-spoofing GPS algorithms',
        'Timestamped, geo-tagged camera capture for attendance and task evidence',
        'Live interactive worksite map showing on-duty staff and coverage gaps',
        'Automatic payroll-ready attendance reports and shift analytics'
      ]
    },
    features: [
      'GPS Check-in/out',
      'Worksite Map',
      'Employee Management',
      'Attendance',
      'Photo Evidence',
      'Dashboard',
      'Role Management',
      'Audit Log'
    ],
    detailedFeatures: [
      {
        title: 'Geofenced GPS Check-in & Out',
        description: 'Multi-layered GPS boundary enforcement preventing check-ins outside assigned facility perimeter with mock location detection.',
        badge: 'Core Engine'
      },
      {
        title: 'Interactive Worksite Map',
        description: 'Bird-eye geospatial dashboard visualizing all active job sites, current headcounts, and field supervisors.',
        badge: 'GIS Visual'
      },
      {
        title: 'Biometric & Photo Evidence',
        description: 'Instant camera capture with tamper-proof watermarking (time, lat/long, battery, accuracy radius) for audit certainty.',
        badge: 'Anti-Fraud'
      },
      {
        title: 'Employee & Shift Management',
        description: 'Automated shift scheduling, leave approval workflows, and emergency coverage dispatching.',
        badge: 'Workforce'
      },
      {
        title: 'Executive Operations Dashboard',
        description: 'Real-time KPI metrics for attendance rates, overtime trends, late arrivals, and site cost efficiency.',
        badge: 'Analytics'
      },
      {
        title: 'Granular Role Management & Audit Log',
        description: 'Tiered RBAC (HQ Admin, Area Manager, Site Supervisor, Field Worker) with immutable activity logging.',
        badge: 'Security'
      }
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'MySQL', 'Leaflet GIS', 'REST API', 'Docker'],
    architecture: {
      layers: [
        {
          name: 'Presentation Layer',
          description: 'Responsive PWA & Web Console with offline-first client storage for zero-connectivity check-ins.',
          components: ['Next.js PWA', 'Canvas Photo Watermarker', 'Geospatial Worksite Canvas']
        },
        {
          name: 'Tomvis Operations Service',
          description: 'Microservice handling location validation, shift scheduling engine, and notification dispatcher.',
          components: ['Geofence Engine', 'Attendance Aggregator', 'Shift Matrix Engine']
        },
        {
          name: 'Persistence & Vault',
          description: 'Encrypted object storage for photos and partitioned relational DB for historical attendance trails.',
          components: ['MySQL Cluster', 'Encrypted S3-compatible Blob Storage', 'Audit Log Vault']
        }
      ],
      dataFlow: [
        'Worker triggers Check-in via Mobile Web with hardware GPS & camera permission',
        'Client-side anti-mock check validates GPS integrity and watermarks evidence',
        'Tomvis API verifies spatial coordinates against Worksite Polygon boundary',
        'Attendance record and photo hash stored with immediate supervisor WebSocket alert'
      ]
    },
    security: {
      dataSegregation: 'Strict tenant and subsidiary isolation using tenant-keyed row-level security.',
      accessControl: 'Role-Based Access Control (RBAC) with fine-grained site-level scoping.',
      encryption: 'TLS 1.3 in transit and AES-256 encrypted photo evidence storage.',
      auditTrail: 'Every check-in, override, and supervisor modification logged with immutable timestamps.',
      complianceNotes: 'Compliant with enterprise labor record retention policies and privacy guidelines.'
    },
    deviceSupport: {
      desktop: true,
      tablet: true,
      mobile: true,
      ruggedHardware: true,
      offlineMode: true,
      details: 'Optimized for modern smartphones (iOS & Android Web/PWA), tablets, and desktop supervisor command centers.'
    },
    screenshots: [
      {
        id: 'sop-1',
        title: 'Supervisor Operations Center',
        device: 'desktop',
        caption: 'Central command monitoring live field attendance across 14 active projects.',
        previewColor: '#0ea5e9',
        mockDataSummary: 'Synthetic data showing 128 active workers across 4 industrial districts.',
        featuresShown: ['Real-time attendance rate 96.4%', 'Worksite Map', 'Active alerts banner']
      },
      {
        id: 'sop-2',
        title: 'Geofenced Check-in Screen',
        device: 'mobile',
        caption: 'Mobile PWA interface showing instant GPS lock, target boundary, and photo capture.',
        previewColor: '#2563eb',
        mockDataSummary: 'Mock field worker ID: OP-88219 at East Industrial Park Gate B.',
        featuresShown: ['GPS Accuracy 4.2m', 'Camera verification', 'Worksite radius circle']
      },
      {
        id: 'sop-3',
        title: 'Shift & Overtime Analysis',
        device: 'tablet',
        caption: 'Tablet dashboard for site supervisors to approve timesheets and manage shift swaps.',
        previewColor: '#6366f1',
        mockDataSummary: 'Simulated weekly timesheet approval queue with 12 pending requests.',
        featuresShown: ['Timesheet reconciliation', 'Overtime budget guardrails', '1-click approval']
      }
    ],
    demoUrl: '/demo/smartop',
    demoCredentials: [
      {
        role: 'Supervisor / Manager (Demo)',
        username: 'demo.supervisor@tomvis.local',
        password: 'DemoOpPassword!2026',
        notes: 'Full access to site maps, worker roster, and timesheet approvals.'
      },
      {
        role: 'Field Worker (Demo)',
        username: 'demo.worker@tomvis.local',
        password: 'DemoOpWorker!2026',
        notes: 'Worker portal for testing GPS check-in/out and personal attendance history.'
      }
    ],
    demoSafetyNotes: 'All worker profiles, coordinates, and photo evidence in this demo are 100% synthetic mock records. No real personnel or facility locations are accessed.',
    highlightStats: [
      { label: 'Check-in Speed', value: '< 1.2s' },
      { label: 'GPS Precision', value: '±3.5m' },
      { label: 'Audit Integrity', value: '100%' }
    ]
  },
  {
    id: 'smart-ems',
    slug: 'smart-ems',
    name: 'Smart EMS',
    shortName: 'Smart EMS',
    tagline: 'Emergency Medical Service Management',
    category: 'Healthcare',
    categorySlug: 'healthcare',
    status: 'Available',
    version: 'v3.1.0-demo',
    lastUpdated: 'Q3 2026',
    description: 'Mission-critical dispatch, telemetry tracking, ambulance fleet coordination, and emergency patient transfer referral system.',
    overview: 'Smart EMS unifies emergency command centers, paramedics on ambulances, and receiving hospital ER teams. Designed for extreme reliability and zero latency, it coordinates the entire lifecycle from emergency call triage to arrival at the emergency department.',
    problem: {
      summary: 'Emergency medical dispatching often faces fragmented communication, delayed ambulance routing, and lack of advance patient triage before hospital arrival.',
      points: [
        'Slow voice-only radio relay causing critical information loss',
        'No real-time ETA visualization for ER preparation',
        'Disorganized paramedic and driver roster management',
        'Complex inter-hospital patient transfer (Refer) approval paperwork'
      ]
    },
    solution: {
      summary: 'A unified digital EMS ecosystem connecting 1669 dispatchers, mobile ambulance units, and hospital emergency trauma teams.',
      points: [
        'Sub-second WebSocket telemetry for ambulance vehicle location & telemetry',
        'One-click mission dispatch with automated turn-by-turn routing',
        'In-transit vital signs logging and digital trauma pre-notification',
        'Streamlined multi-hospital Refer triage and emergency bed reservation'
      ]
    },
    features: [
      'Ambulance Tracking',
      'GPS',
      'EMS Mission',
      'Driver Management',
      'Medical Team',
      'Vehicle Management',
      'Refer Management',
      'Real-time Map'
    ],
    detailedFeatures: [
      {
        title: 'Live Ambulance Fleet Telemetry',
        description: 'Real-time vehicle position, siren status, speed, and fuel monitoring with high-frequency telemetry updates.',
        badge: 'Real-time IoT'
      },
      {
        title: 'Intelligent Mission Dispatch',
        description: 'Automated nearest-vehicle matching, emergency triage code classification (Red, Yellow, Green), and instant mission push.',
        badge: 'Dispatch Engine'
      },
      {
        title: 'Paramedic & Medical Crew Roster',
        description: 'Track duty rotations, BLS/ALS certifications, and paramedic availability per ambulance shift.',
        badge: 'Clinical Staff'
      },
      {
        title: 'Emergency Patient Refer System',
        description: 'Digital refer pathways between community clinics, district hospitals, and tertiary medical trauma centers.',
        badge: 'Referral Hub'
      },
      {
        title: 'Hospital ER Pre-Arrival Notification',
        description: 'Receiving emergency room receives live countdown ETA, patient severity, and inbound vital signs.',
        badge: 'ER Alert'
      },
      {
        title: 'Vehicle & Equipment Readiness',
        description: 'Checklist for defibrillators, oxygen pressure, and medical consumables inspection before every duty shift.',
        badge: 'Logistics'
      }
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'WebSocket', 'MySQL', 'GIS Routing API', 'Docker'],
    architecture: {
      layers: [
        {
          name: 'Command & Mobile Clients',
          description: 'Emergency Dispatch Console (Dual Screen GIS) & In-Ambulance Tablet Navigation App.',
          components: ['Dispatcher Multi-View', 'Tablet Paramedic UI', 'ER Inbound Ticker']
        },
        {
          name: 'Tomvis Telemetry Gateway',
          description: 'High-throughput event broker receiving GPS packets and mission state changes.',
          components: ['WebSocket Broker', 'Geospatial Proximity Matcher', 'Mission State Machine']
        },
        {
          name: 'Data & Audit Layer',
          description: 'Mission event journal and encrypted clinical transfer records.',
          components: ['Mission Time-Series DB', 'Referral Document Store', 'HIPAA/PDPA Guard']
        }
      ],
      dataFlow: [
        'Dispatcher creates mission from triage call with coordinates',
        'Tomvis evaluates vehicle readiness and routes mission packet to nearest Ambulance tablet',
        'Ambulance accepts; live GPS stream updates dispatch map and receiving hospital ER screen',
        'Paramedic inputs vitals; hospital ER pre-activates trauma team with real-time ETA'
      ]
    },
    security: {
      dataSegregation: 'Strict isolation between provincial dispatch zones and participating medical institutions.',
      accessControl: 'Multi-tier roles: Dispatch Director, Paramedic Lead, Driver, ER Physician.',
      encryption: 'AES-256 for all patient handover data and encrypted telemetry sockets.',
      auditTrail: 'Every mission milestone (Dispatched, En Route, On Scene, Transporting, Handed Over) stamped down to milliseconds.',
      complianceNotes: 'Designed according to emergency medical protocols and health data protection guidelines.'
    },
    deviceSupport: {
      desktop: true,
      tablet: true,
      mobile: true,
      ruggedHardware: true,
      details: 'Dual-monitor dispatch desk, rugged in-vehicle Android/iPad tablets, and mobile paramedic devices.'
    },
    screenshots: [
      {
        id: 'ems-1',
        title: 'Emergency Command Dispatch Map',
        device: 'desktop',
        caption: 'Full-screen GIS command center with active red-code emergency missions and fleet routes.',
        previewColor: '#ef4444',
        mockDataSummary: 'Simulated 6 active ambulances responding to urban priority calls.',
        featuresShown: ['Real-time Map', 'Active EMS Mission 1669-082', 'Live Ambulance ETA 04:12']
      },
      {
        id: 'ems-2',
        title: 'Paramedic In-Ambulance Tablet',
        device: 'tablet',
        caption: 'High-contrast touch interface for en-route navigation, vital entry, and hospital handover.',
        previewColor: '#dc2626',
        mockDataSummary: 'Mock patient: Male 48 y/o, chest pain, SpO2 96%, HR 84, BP 130/85.',
        featuresShown: ['Turn-by-turn route', 'Quick vitals logging', 'Hospital pre-alert trigger']
      },
      {
        id: 'ems-3',
        title: 'Inter-Hospital Refer Dashboard',
        device: 'desktop',
        caption: 'Patient referral queue between district community hospitals and regional trauma centers.',
        previewColor: '#b91c1c',
        mockDataSummary: 'Mock refer requests: 4 pending approval, 2 en-route transfers.',
        featuresShown: ['Refer ID #REF-2026-091', 'ICU bed availability matrix', 'Specialist sign-off']
      }
    ],
    demoUrl: '/demo/smart-ems',
    demoCredentials: [
      {
        role: 'Dispatch Commander (Demo)',
        username: 'demo.ems.dispatcher@tomvis.local',
        password: 'DemoEmsPassword!2026',
        notes: 'Full access to fleet radar, dispatch creation, and hospital refer routing.'
      },
      {
        role: 'Paramedic Unit (Demo)',
        username: 'demo.paramedic@tomvis.local',
        password: 'DemoParamedic!2026',
        notes: 'Ambulance mobile interface for accepting dispatches and updating vitals.'
      }
    ],
    demoSafetyNotes: 'CRITICAL: Absolutely no connection to live 1669 dispatch, hospital HIS, or real patient records. All scenarios and vitals are computer-generated synthetic fixtures.',
    highlightStats: [
      { label: 'Dispatch Latency', value: '< 450ms' },
      { label: 'GPS Ping Rate', value: '1.5 sec' },
      { label: 'ER Alert Sync', value: 'Real-time' }
    ]
  },
  {
    id: 'cooperative',
    slug: 'cooperative',
    name: 'Smart Cooperative',
    shortName: 'Smart Cooperative',
    tagline: 'Cooperative Digital Services',
    category: 'Finance & Cooperative',
    categorySlug: 'finance',
    status: 'Available',
    version: 'v2.8.0-demo',
    lastUpdated: 'Q3 2026',
    description: 'Modern digital portal for savings and credit cooperatives: member share accounts, automated dividend calculations, digital emergency loans, and member push services.',
    overview: 'Smart Cooperative transforms traditional paper-heavy cooperatives into agile digital institutions. Members can view share balances, apply for emergency loans from their smartphones, calculate projected dividends, and receive real-time transaction receipts.',
    problem: {
      summary: 'Cooperatives frequently face manual queues, delayed dividend distributions, cumbersome paper loan forms, and high administrative overhead.',
      points: [
        'Members waiting in branch queues for simple balance inquiries and loan applications',
        'Complex manual dividend and patronage refund calculations prone to human error',
        'Physical paper contract routing taking weeks for emergency micro-loan approvals',
        'Lack of real-time digital communication channels for member announcements'
      ]
    },
    solution: {
      summary: 'Comprehensive self-service member portal backed by an automated credit ledger and loan evaluation engine.',
      points: [
        'Mobile member portal for 24/7 balance checks, share capital, and deposit tracking',
        'Instant digital emergency loan application with rule-based guarantor checks',
        'Automated annual dividend and patronage refund calculation engine',
        'Secure multi-tier administrator approval workflow with audit logs'
      ]
    },
    features: [
      'Member Portal',
      'Dividend',
      'Loan',
      'Emergency Loan',
      'Member Services',
      'Notification',
      'Administration'
    ],
    detailedFeatures: [
      {
        title: 'Self-Service Member Portal',
        description: 'Instant overview of share capital, monthly contributions, outstanding loan balances, and interest statements.',
        badge: 'Member App'
      },
      {
        title: 'Automated Dividend Calculation',
        description: 'Batch dividend calculator running precision financial formulas on annual shares and loan interest payments.',
        badge: 'Finance Core'
      },
      {
        title: 'Emergency Micro-Loan Engine',
        description: 'Under 3-minute emergency loan approval pipeline based on member accumulated share collateral.',
        badge: 'Fast Loan'
      },
      {
        title: 'General & Housing Loan Workflow',
        description: 'Comprehensive loan underwriting with guarantor verification, repayment schedule simulation, and PDF agreements.',
        badge: 'Credit Hub'
      },
      {
        title: 'Real-time Member Notifications',
        description: 'Automated SMS, Line OA, and In-App alerts for monthly deductions, dividend payouts, and loan status updates.',
        badge: 'Alerts'
      },
      {
        title: 'Cooperative Admin & Ledger',
        description: 'Administrative back-office for managing member rosters, interest rate adjustments, and general ledger reports.',
        badge: 'Backoffice'
      }
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'MySQL', 'PDF Generation Engine', 'REST API', 'Docker'],
    architecture: {
      layers: [
        {
          name: 'Member & Staff Portals',
          description: 'Responsive customer-facing web application and high-security administrative backoffice.',
          components: ['Member Dashboard', 'Staff Underwriting Console', 'Board Financial Summary']
        },
        {
          name: 'Cooperative Ledger Engine',
          description: 'Double-entry accounting subsystem and automated loan amortization math service.',
          components: ['Share Capital Manager', 'Loan Amortization Calculator', 'Guarantor Matrix Engine']
        },
        {
          name: 'Document & Vault Store',
          description: 'Digitally signed loan agreements, encrypted member credentials, and audit ledgers.',
          components: ['MySQL Relational Store', 'Encrypted Contract Vault', 'Financial Transaction Audit']
        }
      ],
      dataFlow: [
        'Member submits Emergency Loan request via mobile portal with requested amount',
        'Tomvis Loan Engine calculates max allowable credit based on member shares without guarantor',
        'Credit check rules evaluate eligibility; automated pre-approval generated in seconds',
        'Admin reviews disbursement queue; automated ledger entry booked and notification sent'
      ]
    },
    security: {
      dataSegregation: 'Each cooperative runs in a dedicated organizational partition with strict ledger integrity.',
      accessControl: 'Segregation of duties: Loan Officer, Credit Committee Approver, Teller, General Manager.',
      encryption: 'End-to-end TLS 1.3, salted Argon2id password hashing, and encrypted financial statements.',
      auditTrail: 'Immutable ledger entry journals for all credit approvals, adjustments, and dividend runs.',
      complianceNotes: 'Compliant with Cooperative Auditing Department regulations and financial record standards.'
    },
    deviceSupport: {
      desktop: true,
      tablet: true,
      mobile: true,
      details: 'Seamless mobile experience for members and responsive widescreen dashboard for cooperative staff.'
    },
    screenshots: [
      {
        id: 'coop-1',
        title: 'Member Digital Financial Hub',
        device: 'mobile',
        caption: 'Member home screen showing share capital balance, current month contribution, and quick loan button.',
        previewColor: '#10b981',
        mockDataSummary: 'Synthetic member: Somchai Prasert, Shares ฿350,000, Accumulated Dividend ฿14,200.',
        featuresShown: ['Member Portal', 'Dividend Projection 4.8%', 'Emergency Loan 1-Tap']
      },
      {
        id: 'coop-2',
        title: 'Loan Underwriting Management',
        device: 'desktop',
        caption: 'Administrative approval queue for loan committee with collateral and guarantor verification matrix.',
        previewColor: '#059669',
        mockDataSummary: 'Simulated 8 loan applications totaling ฿1.2M awaiting committee review.',
        featuresShown: ['Guarantor cross-check', 'Debt-to-income ratio', 'Batch disbursement']
      },
      {
        id: 'coop-3',
        title: 'Annual Dividend Distribution Tool',
        device: 'desktop',
        caption: 'Batch calculator calculating shares and patronage refunds with simulated profit allocations.',
        previewColor: '#047857',
        mockDataSummary: 'Fiscal Year 2025 simulated distribution: ฿18.4M allocated to 1,420 members.',
        featuresShown: ['Patronage refund split', 'Withholding tax calculation', 'Direct deposit export']
      }
    ],
    demoUrl: '/demo/cooperative',
    demoCredentials: [
      {
        role: 'Cooperative Admin (Demo)',
        username: 'demo.coop.admin@tomvis.local',
        password: 'DemoCoopPassword!2026',
        notes: 'Full administrative access to loan underwriting, member management, and dividend setups.'
      },
      {
        role: 'Cooperative Member (Demo)',
        username: 'demo.member@tomvis.local',
        password: 'DemoCoopMember!2026',
        notes: 'Member portal access to test loan application, dividend calculator, and balance statements.'
      }
    ],
    demoSafetyNotes: 'All cooperative member accounts, account balances, and credit contracts are completely synthetic fixtures. No real bank accounts or financial deposits are used.',
    highlightStats: [
      { label: 'Loan Approval', value: '< 3 mins' },
      { label: 'Dividend Math', value: '100% Auto' },
      { label: 'Member Access', value: '24/7 Web' }
    ]
  },
  {
    id: 'pos',
    slug: 'pos',
    name: 'Smart POS',
    shortName: 'Smart POS',
    tagline: 'Retail & Welfare Shop Management',
    category: 'Commerce & Retail',
    categorySlug: 'commerce',
    status: 'Available',
    version: 'v2.2.4-demo',
    lastUpdated: 'Q3 2026',
    description: 'High-speed cloud POS system for retail stores, enterprise welfare shops, and community outlets with barcode scanning, stock control, and instant electronic receipts.',
    overview: 'Smart POS brings modern retail velocity to counter checkouts and enterprise welfare stores. Engineered for quick keystrokes, touch monitors, barcode scanners, and thermal receipt printers, it synchronizes stock levels across multiple branch locations in real time.',
    problem: {
      summary: 'Legacy point-of-sale systems are clunky, slow during peak checkout rushes, fail to update inventory accurately, and lack integration with employee welfare credits.',
      points: [
        'Slow checkout queues causing customer drop-off during peak lunch hours',
        'Stock discrepancies between physical shelves and warehouse records',
        'Inability to process specialized welfare vouchers and employee credit limits',
        'Difficult price management and multi-branch catalog synchronization'
      ]
    },
    solution: {
      summary: 'A responsive, touch-first POS interface with instant offline resilience, multi-payment acceptance, and real-time inventory ledger.',
      points: [
        'Touch-optimized checkout screen with hotkeys and sub-second barcode lookup',
        'Multi-tender payment: Cash, PromptPay QR, Credit Card, and Employee Welfare Wallet',
        'Live stock depletion and automatic low-inventory alert thresholds',
        'Digital e-Receipt generation via QR code and thermal ESC/POS hardware printing'
      ]
    },
    features: [
      'POS',
      'Product',
      'Inventory',
      'Sales',
      'Receipt',
      'Dashboard',
      'Stock Management'
    ],
    detailedFeatures: [
      {
        title: 'Lightning-Fast Touch Checkout',
        description: 'Optimized touch grid with quick categories, favorites, discount modifiers, and barcode input.',
        badge: 'Checkout'
      },
      {
        title: 'Product & SKU Catalog Management',
        description: 'Dynamic price tiers, barcode mapping, variants (size/color), and bundle promotion configurations.',
        badge: 'Catalog'
      },
      {
        title: 'Multi-Location Stock & Inventory Control',
        description: 'Real-time stock ledger, stock adjustments, purchase order receiving, and store transfer requests.',
        badge: 'Inventory'
      },
      {
        title: 'Sales History & Analytics Dashboard',
        description: 'Hourly sales curves, top-selling items, cashier performance, and daily register reconciliation.',
        badge: 'Analytics'
      },
      {
        title: 'Electronic & Thermal Printing',
        description: 'ESC/POS thermal printer integration plus paperless QR code e-Receipts for customers.',
        badge: 'Hardware'
      },
      {
        title: 'Welfare & Credit Account Tender',
        description: 'Supports enterprise welfare quotas and employee deduction accounts alongside cash and PromptPay.',
        badge: 'Welfare Ready'
      }
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'MySQL', 'Web Bluetooth / USB ESC/POS', 'REST API', 'Docker'],
    architecture: {
      layers: [
        {
          name: 'POS Terminal & Register UI',
          description: 'Touch-optimized web client with indexedDB offline transaction buffer.',
          components: ['Touch Register Interface', 'Barcode Listener', 'Thermal Print Dispatcher']
        },
        {
          name: 'Inventory & Order Engine',
          description: 'Sub-millisecond inventory decrementation and daily register settlement service.',
          components: ['Stock Ledger Engine', 'Promotion & Discount Evaluator', 'Tax Invoice Generator']
        },
        {
          name: 'Data Store & Sync Hub',
          description: 'Master product database and high-concurrency order ledger.',
          components: ['MySQL Products & Orders DB', 'Cache Layer', 'Audit Journal']
        }
      ],
      dataFlow: [
        'Cashier scans product barcode or selects from visual quick-touch menu',
        'Tomvis POS checks real-time price rules and promotions automatically',
        'Payment selected (Cash / PromptPay QR / Employee Welfare); instant payment confirmation',
        'Transaction recorded, stock decremented, and receipt printed or generated via QR'
      ]
    },
    security: {
      dataSegregation: 'Branch-level and tenant-level segregation preventing unauthorized inventory tampering.',
      accessControl: 'Cashier, Store Supervisor, Inventory Manager, and HQ Finance Director roles.',
      encryption: 'Encrypted transaction records and masked payment token identifiers.',
      auditTrail: 'Cash drawer opening, discount overrides, and price changes logged per cashier ID.',
      complianceNotes: 'Supports standard electronic tax invoice (e-Tax) structures and retail accounting compliance.'
    },
    deviceSupport: {
      desktop: true,
      tablet: true,
      mobile: true,
      posHardware: true,
      details: 'Compatible with all standard POS all-in-one touch terminals, Windows/Android PCs, iPads, and barcode scanners.'
    },
    screenshots: [
      {
        id: 'pos-1',
        title: 'Cashier Quick-Touch Register',
        device: 'tablet',
        caption: 'Touchscreen cashier terminal with fast item grid, barcode reader, and instant cart summary.',
        previewColor: '#f59e0b',
        mockDataSummary: 'Simulated Order #POS-98124 with 4 items: Milk, Organic Bread, Green Tea, Welfare discount applied.',
        featuresShown: ['POS Cashier Screen', 'PromptPay QR payment', 'Welfare credit balance']
      },
      {
        id: 'pos-2',
        title: 'Inventory & Stock Management',
        device: 'desktop',
        caption: 'Warehouse and store floor inventory ledger with low-stock alerts and reorder suggestions.',
        previewColor: '#d97706',
        mockDataSummary: 'Simulated 450 SKU items across 3 store aisles; 4 items flagged for reorder.',
        featuresShown: ['Real-time Stock Count', 'PO Auto-Generate', 'Barcode Generator']
      },
      {
        id: 'pos-3',
        title: 'Daily Sales & Revenue Dashboard',
        device: 'desktop',
        caption: 'Executive analytics showing hourly store footfall, gross sales, payment method breakdown.',
        previewColor: '#b45309',
        mockDataSummary: 'Mock daily store turnover: ฿48,920 across 214 transactions.',
        featuresShown: ['Hourly Sales Peak', 'Average Ticket ฿228', 'Top 5 Selling Items']
      }
    ],
    demoUrl: '/demo/pos',
    demoCredentials: [
      {
        role: 'Store Manager (Demo)',
        username: 'demo.pos.manager@tomvis.local',
        password: 'DemoPosPassword!2026',
        notes: 'Full access to POS cashier, inventory restock, price management, and sales reports.'
      },
      {
        role: 'Cashier Staff (Demo)',
        username: 'demo.cashier@tomvis.local',
        password: 'DemoCashier!2026',
        notes: 'Cashier terminal mode for testing fast barcode checkout and receipt generation.'
      }
    ],
    demoSafetyNotes: 'All products, barcode numbers, prices, and customer sales transactions are synthetic test data. No real financial payments or inventory records are processed.',
    highlightStats: [
      { label: 'Scan to Bill', value: '< 0.8s' },
      { label: 'Stock Sync', value: 'Instant' },
      { label: 'Printer Support', value: 'ESC/POS' }
    ]
  },
  {
    id: 'finance',
    slug: 'finance',
    name: 'Smart Finance',
    shortName: 'Smart Finance',
    tagline: 'Financial Management & Corporate Accounting',
    category: 'Finance & Cooperative',
    categorySlug: 'finance',
    status: 'Available',
    version: 'v2.6.2-demo',
    lastUpdated: 'Q3 2026',
    description: 'Corporate financial management system featuring AR Aging analysis, Accounts Payable (AP), Purchase Orders (PO), multi-tier Budget control, and executive cash-flow analytics.',
    overview: 'Smart Finance empowers CFOs, financial controllers, and accounting departments with unified fiscal oversight. By replacing scattered spreadsheets with automated receivables tracking, vendor payment scheduling, and departmental budget controls, organizations prevent cost overruns and improve liquidity.',
    problem: {
      summary: 'Businesses struggle with opaque debt aging, unmonitored budget leaks, slow PO approval cycles, and inaccurate cash flow forecasts.',
      points: [
        'Overdue accounts receivable (AR) going uncollected due to lack of aging tracking',
        'Manual purchase order approvals creating bottlenecks and unauthorized expenses',
        'Budget allocations tracked in isolated spreadsheets without hard spending caps',
        'Lack of real-time consolidated cash flow analytics for executive decision making'
      ]
    },
    solution: {
      summary: 'A consolidated financial intelligence suite with automated aging calculations, multi-stage approval hierarchies, and proactive budget enforcement.',
      points: [
        'Dynamic AR Aging bucket visualization (0-30, 31-60, 61-90, 90+ days) with automated dunning notices',
        'End-to-end AP and PO workflow from requisition to 3-way matching and vendor disbursement',
        'Departmental budget allocation with real-time commitment tracking and threshold lockouts',
        'Executive cash-flow projection dashboard powered by Tomvis Analytics Core'
      ]
    },
    features: [
      'Executive Dashboard',
      'AR Aging',
      'AP',
      'PO',
      'Budget',
      'Loan',
      'Financial Analytics'
    ],
    detailedFeatures: [
      {
        title: 'Executive Financial Dashboard',
        description: 'Real-time overview of current cash position, burn rate, operating margins, and trailing 12-month EBITDA.',
        badge: 'Executive'
      },
      {
        title: 'Automated AR Aging Analysis',
        description: 'Categorized aging schedules by customer risk rating, payment history, and collection reminders.',
        badge: 'Receivables'
      },
      {
        title: 'Accounts Payable & Vendor Scheduling',
        description: 'Early payment discount optimization, vendor payment batching, and withholding tax calculations.',
        badge: 'Payables'
      },
      {
        title: '3-Way Matching Purchase Orders',
        description: 'Seamless verification comparing Purchase Order, Goods Receipt Note (GRN), and Vendor Invoice.',
        badge: 'Procurement'
      },
      {
        title: 'Multi-Tier Budget Control',
        description: 'Granular cost center budgeting with soft warnings at 80% and hard spending stops at 100%.',
        badge: 'Budget Guard'
      },
      {
        title: 'Corporate Loan & Debt Servicing',
        description: 'Amortization tracking, covenant compliance monitoring, and automated interest provision schedules.',
        badge: 'Treasury'
      }
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'MySQL', 'Chart.js', 'REST API', 'Docker'],
    architecture: {
      layers: [
        {
          name: 'Financial Web App',
          description: 'High-density data grids, fiscal period selectors, and interactive chart visualizations.',
          components: ['Financial Ledger Grid', 'Aging Matrix Visualizer', 'Approval Inbox']
        },
        {
          name: 'Tomvis Fiscal Computation Engine',
          description: 'Calculates compound interest, currency conversions, 3-way matching, and budget limits.',
          components: ['3-Way Matching Engine', 'AR Aging Scheduler', 'Budget Threshold Guard']
        },
        {
          name: 'Fiscal Database & Audit Vault',
          description: 'ACID-compliant transaction storage with immutable double-entry journal records.',
          components: ['MySQL Financial DB', 'Encrypted Document Vault', 'Compliance Audit Journal']
        }
      ],
      dataFlow: [
        'Department submits Purchase Requisition; Tomvis validates against available Cost Center Budget',
        'Requisition routes to approvers based on financial authorization threshold matrix',
        'Upon goods delivery and invoice receipt, automated 3-way match clears invoice for AP scheduling',
        'Executive dashboard updates cash forecast and AR/AP balances in real time'
      ]
    },
    security: {
      dataSegregation: 'Multi-entity corporate structure with strict legal entity segregation.',
      accessControl: 'Role-Based Access Control: Accountant, Finance Manager, Department Head, CFO, Auditor.',
      encryption: 'AES-256 database column encryption for sensitive bank account and salary figures.',
      auditTrail: 'Every journal entry, reversal, and approval modification permanently preserved in audit logs.',
      complianceNotes: 'Designed according to international financial reporting standards (IFRS) and local revenue requirements.'
    },
    deviceSupport: {
      desktop: true,
      tablet: true,
      mobile: false,
      details: 'Optimized for desktop workstation monitors and tablets for mobile executive approvals.'
    },
    screenshots: [
      {
        id: 'fin-1',
        title: 'CFO Executive Dashboard',
        device: 'desktop',
        caption: 'High-level financial KPIs: Cash Flow, EBITDA, Working Capital, and Operating Runway.',
        previewColor: '#0284c7',
        mockDataSummary: 'Simulated FY2026 financials: Total Revenue ฿142M, Net Margin 18.6%, Cash Reserve ฿34.8M.',
        featuresShown: ['Executive Dashboard', 'AR vs AP Waterfall', 'Budget Utilization 74.2%']
      },
      {
        id: 'fin-2',
        title: 'Interactive AR Aging Matrix',
        device: 'desktop',
        caption: 'Receivables aging breakdown by client account, days overdue, and collector assignment.',
        previewColor: '#0369a1',
        mockDataSummary: 'Simulated receivables: ฿8.4M current, ฿1.2M (31-60d), ฿380K (61-90d), ฿120K (>90d).',
        featuresShown: ['AR Aging Chart', 'Dunning Notice Dispatch', 'Customer Risk Rating']
      },
      {
        id: 'fin-3',
        title: 'PO & Budget Commitment Tracker',
        device: 'tablet',
        caption: 'Departmental budget overview showing committed POs versus actual expenditures.',
        previewColor: '#075985',
        mockDataSummary: 'Marketing Dept: ฿4.5M allocated, ฿3.1M spent, ฿620K committed POs, ฿780K remaining.',
        featuresShown: ['Hard Budget Cap Alert', '1-Click PO Approval', '3-Way Match Status']
      }
    ],
    demoUrl: '/demo/finance',
    demoCredentials: [
      {
        role: 'CFO / Finance Director (Demo)',
        username: 'demo.cfo@tomvis.local',
        password: 'DemoFinancePassword!2026',
        notes: 'Full access to executive metrics, budget reallocations, and approval overrides.'
      },
      {
        role: 'Accountant (Demo)',
        username: 'demo.accountant@tomvis.local',
        password: 'DemoAccountant!2026',
        notes: 'Access to AR Aging, AP scheduling, and Purchase Order matching queues.'
      }
    ],
    demoSafetyNotes: 'All ledger balances, bank account numbers, invoice line items, and company names are completely synthetic mock values. No real fiscal data is accessed.',
    highlightStats: [
      { label: 'Aging Resolution', value: 'Daily' },
      { label: '3-Way Match', value: 'Automated' },
      { label: 'Ledger Audit', value: 'Immutable' }
    ]
  },
  {
    id: 'healthcare',
    slug: 'healthcare',
    name: 'Smart Healthcare',
    shortName: 'Smart Healthcare',
    tagline: 'Healthcare Application Platform & Clinical Intelligence',
    category: 'Healthcare',
    categorySlug: 'healthcare',
    status: 'Available',
    version: 'v3.4.0-demo',
    lastUpdated: 'Q3 2026',
    description: 'Next-generation clinical workflow platform featuring patient services, smart medication safety, Adverse Drug Reaction (ADR) detection, Medication Reconciliation, and FHIR/HL7 integration.',
    overview: 'Smart Healthcare bridges clinical wards, outpatient pharmacies, and medical specialists. Designed with patient safety at the center, it automatically cross-references drug allergies, evaluates potential drug-drug interactions, and streamlines patient medication reconciliation during admission and discharge.',
    problem: {
      summary: 'Healthcare providers face medication errors, adverse drug reactions, fragmented patient histories, and tedious manual medication reconciliation during care transitions.',
      points: [
        'Adverse Drug Reactions (ADR) caused by overlooked allergy records or duplicate prescriptions',
        'Medication reconciliation errors when patients transition between home, ward, and discharge',
        'Slow fragmented access to patient clinical dashboards across departments',
        'Difficult integration between disparate hospital information systems (HIS)'
      ]
    },
    solution: {
      summary: 'A unified clinical safety engine with automated ADR alert safeguards, digital medication reconciliation, and standards-based health API interoperability.',
      points: [
        'Real-time prescription safety screening against allergy registries and drug interaction databases',
        'Standardized digital Medication Reconciliation workflow reducing transition discrepancies',
        'Comprehensive clinical dashboard displaying vital trends, lab results, and active regimens',
        'Plug-and-play FHIR/HL7 REST API integration layer connecting with hospital systems'
      ]
    },
    features: [
      'Patient Services',
      'Medication',
      'ADR',
      'Medication Reconciliation',
      'Clinical Dashboard',
      'API Integration'
    ],
    detailedFeatures: [
      {
        title: 'Patient Clinical Portal & Services',
        description: 'Comprehensive patient timeline aggregating vital signs, allergies, past diagnoses, and medical encounters.',
        badge: 'Clinical Core'
      },
      {
        title: 'Adverse Drug Reaction (ADR) Alert System',
        description: 'Instant warning flags for known drug allergies, severe cross-sensitivities, and high-risk pharmacogenomic markers.',
        badge: 'Patient Safety'
      },
      {
        title: 'Medication Reconciliation (MedRec)',
        description: 'Seamless comparison of pre-admission medications against in-hospital physician orders and discharge prescriptions.',
        badge: 'MedRec Engine'
      },
      {
        title: 'Pharmacy Medication Dispensing & Barcode',
        description: 'Five-Rights medication verification (Right Patient, Drug, Dose, Route, Time) with barcode bedside scanning.',
        badge: 'Pharmacy'
      },
      {
        title: 'Executive Clinical Dashboard',
        description: 'Hospital ward census, infection control metrics, bed turnaround times, and prescription safety KPIs.',
        badge: 'Ward Analytics'
      },
      {
        title: 'FHIR / HL7 Interoperability Gateway',
        description: 'RESTful API endpoints compliant with modern health data exchange standards for seamless HIS integration.',
        badge: 'Interoperability'
      }
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'MySQL', 'FHIR API', 'REST API', 'Docker'],
    architecture: {
      layers: [
        {
          name: 'Clinical UI Layer',
          description: 'High-contrast medical station interface designed for doctors, clinical pharmacists, and nurses.',
          components: ['Doctor Order Entry (CPOE)', 'Pharmacist Verification UI', 'Nurse Administration Screen']
        },
        {
          name: 'Clinical Decision Support Engine (CDSS)',
          description: 'Rules engine verifying drug-drug interactions, dosage limits by renal function, and ADR history.',
          components: ['Drug Interaction Checker', 'ADR Matching Engine', 'MedRec Reconciliation Tool']
        },
        {
          name: 'Health Data Store & FHIR Gateway',
          description: 'Secure, segregated clinical repository with strict audit logging for medical history access.',
          components: ['Clinical Data Repository', 'FHIR Resource Mappings', 'Access Audit Log']
        }
      ],
      dataFlow: [
        'Physician enters prescription order into Smart Healthcare clinical portal',
        'CDSS engine instantly evaluates active medications, allergies, and lab renal indicators',
        'If allergy or interaction detected, high-priority alert requires clinical pharmacist sign-off',
        'Pharmacist validates; order dispatched to pharmacy dispensing queue and nurse MAR schedule'
      ]
    },
    security: {
      dataSegregation: 'Strict ward and institution-level patient data partitioning.',
      accessControl: 'Role-Based Access Control mapped to medical credentials (Doctor, Pharmacist, Nurse, Admin).',
      encryption: 'TLS 1.3 encrypted data transfer and AES-256 database column encryption for patient identities.',
      auditTrail: 'Every medical record view, prescription change, and override logged with timestamp and user ID.',
      complianceNotes: 'Strict adherence to health data confidentiality principles and medical privacy standards.'
    },
    deviceSupport: {
      desktop: true,
      tablet: true,
      mobile: true,
      details: 'Optimized for medical ward desktop terminals, mobile nursing tablets on carts, and doctor smartphones.'
    },
    screenshots: [
      {
        id: 'hc-1',
        title: 'Patient Clinical Overview & Safety Shield',
        device: 'desktop',
        caption: 'Integrated electronic patient chart displaying vital trends, lab values, and active ADR allergy alerts.',
        previewColor: '#06b6d4',
        mockDataSummary: 'Synthetic patient #PT-99412: Male 62 y/o, Allergy: Penicillin (Severe Urticaria), Renal GFR 54.',
        featuresShown: ['Active ADR Banner', 'Medication Reconciliation status', 'Vital signs graph']
      },
      {
        id: 'hc-2',
        title: 'Clinical Pharmacist MedRec Workflow',
        device: 'tablet',
        caption: 'Medication Reconciliation tool comparing home medications with current inpatient admission orders.',
        previewColor: '#0891b2',
        mockDataSummary: 'Simulated 5 pre-admission medications reconciled with 3 new inpatient cardiac regimens.',
        featuresShown: ['Drug Interaction Matrix', 'Dose adjustment helper', 'Pharmacist Sign-off']
      },
      {
        id: 'hc-3',
        title: 'Ward Inpatient Census & Drug Safety Analytics',
        device: 'desktop',
        caption: 'Nursing unit dashboard tracking medication administration schedule and high-alert drug protocols.',
        previewColor: '#0e7490',
        mockDataSummary: 'Ward 4B: 28 admitted patients, 100% on-time med pass rate, zero adverse events today.',
        featuresShown: ['Bed Turnover', 'High-Risk Med Alerts', 'Pending Lab Integrations']
      }
    ],
    demoUrl: '/demo/healthcare',
    demoCredentials: [
      {
        role: 'Clinical Pharmacist / Doctor (Demo)',
        username: 'demo.doctor@tomvis.local',
        password: 'DemoHealthPassword!2026',
        notes: 'Full access to patient clinical charts, CPOE prescription ordering, and ADR review.'
      },
      {
        role: 'Ward Nurse (Demo)',
        username: 'demo.nurse@tomvis.local',
        password: 'DemoNurse!2026',
        notes: 'Access to bedside medication administration records (MAR) and vital sign logging.'
      }
    ],
    demoSafetyNotes: 'SAFETY GUARANTEE: Never connected to live hospital databases or real patients. All patient names (e.g. John Doe, Somchai Test), medical records, and diagnostic values are 100% synthetic mock data.',
    highlightStats: [
      { label: 'ADR Check Latency', value: '< 150ms' },
      { label: 'Standards Support', value: 'FHIR / HL7' },
      { label: 'Safety Checks', value: '5-Rights Auto' }
    ]
  },
  {
    id: 'inspection',
    slug: 'inspection',
    name: 'Smart Inspection',
    shortName: 'Smart Inspection',
    tagline: 'Inspection & Field Intelligence Platform',
    category: 'Operations',
    categorySlug: 'operations',
    status: 'Available',
    version: 'v2.3.0-demo',
    lastUpdated: 'Q3 2026',
    description: 'Field inspection and facility risk intelligence system: dynamic checklist builder, smart GIS route planning, risk score assessment, and automated compliance reports.',
    overview: 'Smart Inspection powers regulatory bodies, property managers, and safety auditors in conducting thorough physical assessments. Featuring dynamic checklist templates, offline photo capture, automated risk scoring formulas, and optimized inspector driving routes, inspections are completed faster and with verifiable integrity.',
    problem: {
      summary: 'Physical inspections frequently rely on paper clipboards, lack standardized scoring formulas, waste inspector driving time, and delay safety remediation.',
      points: [
        'Subjective non-standardized inspector scoring without clear audit definitions',
        'Inefficient route planning wasting hours between scattered facility locations',
        'Delayed discovery of high-risk safety hazards due to manual report turnaround',
        'Fraudulent offsite completion without tamper-proof geo-verified presence'
      ]
    },
    solution: {
      summary: 'A digital inspection suite with geo-stamped checklist completion, automated algorithmic risk scoring, and optimized GIS route dispatching.',
      points: [
        'Customizable dynamic inspection templates with conditional logic and scoring weights',
        'Smart GIS route optimization minimizing inspector transit time between facilities',
        'Instant multi-dimensional Risk Assessment matrix calculating hazard severity',
        'Automated executive PDF compliance reports generated on-site with digital signatures'
      ]
    },
    features: [
      'Facility Management',
      'Smart Map',
      'Inspection Planning',
      'Risk Assessment',
      'Route Planning',
      'Analytics'
    ],
    detailedFeatures: [
      {
        title: 'Facility & Asset Registry',
        description: 'Comprehensive profiles for commercial buildings, factories, food outlets, and fire safety systems.',
        badge: 'Asset DB'
      },
      {
        title: 'Geospatial Smart Map & Inspector Dispatch',
        description: 'Visual map displaying facility compliance statuses (Red, Amber, Green) and assigned auditor routes.',
        badge: 'GIS Visual'
      },
      {
        title: 'Automated Multi-Point Route Optimization',
        description: 'Traveling salesperson algorithm calculating the most fuel-efficient inspection route sequence.',
        badge: 'Route Engine'
      },
      {
        title: 'Standardized Risk Assessment Calculator',
        description: 'Automated risk scoring based on ISO/safety matrices weighing hazard severity and likelihood.',
        badge: 'Risk Scoring'
      },
      {
        title: 'Mobile Offline Checklist with Photo Proof',
        description: 'Inspectors work seamlessly in basement facilities with photo attachment and offline sync.',
        badge: 'Offline PWA'
      },
      {
        title: 'Compliance & Hazard Trend Analytics',
        description: 'Organizational heatmaps identifying recurrent safety non-compliances and audit follow-up SLAs.',
        badge: 'Analytics'
      }
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'MySQL', 'MapLibre / Leaflet', 'REST API', 'Docker'],
    architecture: {
      layers: [
        {
          name: 'Inspector Tablet & Web Portal',
          description: 'Offline-capable tablet interface with camera capture and GIS routing map.',
          components: ['Inspector Tablet App', 'Admin Scheduling Portal', 'Dynamic Form Engine']
        },
        {
          name: 'Routing & Risk Scoring Service',
          description: 'Calculates shortest routes, evaluates risk matrices, and triggers corrective action alerts.',
          components: ['Route Optimization Solver', 'Risk Matrix Engine', 'Corrective Action Dispatcher']
        },
        {
          name: 'Audit Store & Report Generator',
          description: 'Tamper-proof storage for geo-tagged inspection records and instant PDF audit reports.',
          components: ['Facility Ledger DB', 'Evidence Photo Repository', 'Report Engine']
        }
      ],
      dataFlow: [
        'Inspection Officer receives daily optimized route schedule with 6 scheduled facility audits',
        'Inspector arrives at site; GPS verifies presence within designated facility polygon',
        'Checklist items scored with attached camera evidence and contractor representative digital signature',
        'Risk matrix calculates score; instant PDF compliance report emailed to facility owner'
      ]
    },
    security: {
      dataSegregation: 'Strict isolation between auditing jurisdictions and inspected enterprise entities.',
      accessControl: 'Chief Safety Auditor, Field Inspector, Facility Owner, and Public Compliance Viewer roles.',
      encryption: 'AES-256 for all stored inspection photos, signatures, and violation reports.',
      auditTrail: 'Every checklist question answer, photo timestamp, and score recalculation is permanently preserved.',
      complianceNotes: 'Compatible with ISO 19011 audit management standards and local safety inspection codes.'
    },
    deviceSupport: {
      desktop: true,
      tablet: true,
      mobile: true,
      ruggedHardware: true,
      offlineMode: true,
      details: 'Built specifically for rugged field tablets (Samsung Active / iPad Pro) and desktop command consoles.'
    },
    screenshots: [
      {
        id: 'ins-1',
        title: 'Inspection GIS Command & Route Map',
        device: 'desktop',
        caption: 'Central map monitoring municipal inspection routes, facility risk tiers, and daily audit progress.',
        previewColor: '#8b5cf6',
        mockDataSummary: 'Simulated 42 commercial facilities inspected across 3 city districts with route overlays.',
        featuresShown: ['Smart Map', 'Route Planning', 'Risk Heatmap']
      },
      {
        id: 'ins-2',
        title: 'Field Tablet Checklist & Hazard Photo',
        device: 'tablet',
        caption: 'Inspector tablet interface with interactive checklist questions, severity weights, and photo upload.',
        previewColor: '#7c3aed',
        mockDataSummary: 'Facility: Apex Industrial Warehouse #04, Fire Safety Audit: 1 minor violation logged.',
        featuresShown: ['Dynamic Checklist', 'Photo Evidence with GPS', 'Digital Signature Pad']
      },
      {
        id: 'ins-3',
        title: 'Risk Assessment & Remediation Analytics',
        device: 'desktop',
        caption: 'Risk distribution dashboard showing high-hazard facilities requiring 30-day follow-up re-audits.',
        previewColor: '#6d28d9',
        mockDataSummary: 'Simulated audit breakdown: 82% Compliant, 14% Moderate Risk, 4% High Risk.',
        featuresShown: ['Risk Matrix (5x5)', 'Corrective Action SLA Tracker', 'PDF Export']
      }
    ],
    demoUrl: '/demo/inspection',
    demoCredentials: [
      {
        role: 'Lead Inspector / Auditor (Demo)',
        username: 'demo.inspector@tomvis.local',
        password: 'DemoInspectPassword!2026',
        notes: 'Full access to field inspection checklists, risk scoring engine, and PDF report generator.'
      },
      {
        role: 'Facility Manager (Demo)',
        username: 'demo.facility@tomvis.local',
        password: 'DemoFacility!2026',
        notes: 'View inspection status, compliance certificates, and corrective action response queues.'
      }
    ],
    demoSafetyNotes: 'All facility addresses, inspection scores, violation findings, and business names are simulated mock models. No real physical facilities are subject to audit.',
    highlightStats: [
      { label: 'Route Efficiency', value: '+35%' },
      { label: 'Report Gen', value: 'Instant PDF' },
      { label: 'Offline Support', value: '100% PWA' }
    ]
  },
  {
    id: 'dashboard',
    slug: 'dashboard',
    name: 'Smart Dashboard',
    shortName: 'Smart Dashboard',
    tagline: 'Enterprise Analytics Platform & Executive Intelligence',
    category: 'Analytics & Intelligence',
    categorySlug: 'analytics',
    status: 'Available',
    version: 'v3.2.0-demo',
    lastUpdated: 'Q3 2026',
    description: 'Enterprise-grade executive analytics platform aggregating cross-module KPIs, operational metrics, interactive trend charts, and automated executive briefing summaries.',
    overview: 'Smart Dashboard serves as the unified intelligence layer for the entire Tomvis ecosystem. By seamlessly ingesting telemetry, financial figures, clinical metrics, and operational logs from all connected modules, C-level executives and department directors gain real-time clarity over organizational performance.',
    problem: {
      summary: 'Enterprises suffer from data silos where departments maintain separate reports, resulting in conflicting metrics and delayed strategic interventions.',
      points: [
        'Scattered departmental reporting resulting in conflicting KPI figures',
        'Slow weekly/monthly reporting cycles preventing proactive management',
        'Lack of drill-down capability from high-level summaries into granular operational logs',
        'Complex third-party BI tools requiring heavy licensing and dedicated data engineers'
      ]
    },
    solution: {
      summary: 'A unified executive command center with sub-second real-time charts, automated anomaly detection, and cross-module data integration.',
      points: [
        'Centralized KPI scorecard with customizable executive widgets and alert thresholds',
        'Rich interactive charting suite (time series, geospatial distribution, waterfall, cohorts)',
        'Natural-language Executive Summaries powered by the Tomvis Intelligence Core',
        'Pre-configured data pipeline connectors uniting Workforce, EMS, Healthcare, Finance, and POS'
      ]
    },
    features: [
      'KPI',
      'Dashboard',
      'Charts',
      'Executive Summary',
      'Data Integration',
      'Analytics'
    ],
    detailedFeatures: [
      {
        title: 'Customizable Executive KPI Scorecards',
        description: 'Drag-and-drop metric cards tracking revenue, active missions, workforce attendance, and clinical turnaround.',
        badge: 'Executive'
      },
      {
        title: 'Multi-Dimensional Interactive Charts',
        description: 'High-performance interactive charting with brush zooming, metric toggling, and exportable vector graphs.',
        badge: 'Data Viz'
      },
      {
        title: 'Automated Executive Briefing Generator',
        description: 'Algorithmic narrative summary highlighting weekly performance anomalies, cost trends, and operational wins.',
        badge: 'AI Briefing'
      },
      {
        title: 'Cross-Module Data Integration Hub',
        description: 'Zero-ETL pipeline seamlessly connecting SmartOP, Smart EMS, Smart Finance, and Smart POS data streams.',
        badge: 'Data Fabric'
      },
      {
        title: 'Granular Drill-Down to Raw Events',
        description: 'Click any high-level aggregated chart spike to inspect the exact underlying operational transactions.',
        badge: 'Drill-Down'
      },
      {
        title: 'Scheduled Executive Email & PDF Reports',
        description: 'Automated Monday morning PDF dispatch delivered directly to executive leadership team inboxes.',
        badge: 'Automation'
      }
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'MySQL', 'Canvas Chart Engine', 'REST API', 'Docker'],
    architecture: {
      layers: [
        {
          name: 'Executive Intelligence Web Portal',
          description: 'High-density responsive dashboard supporting 4K boardroom wall screens, laptops, and tablets.',
          components: ['Wallboard Presentation Mode', 'Executive Metric Widgets', 'Interactive Filter Rail']
        },
        {
          name: 'Tomvis Aggregation Pipeline',
          description: 'Streaming metric aggregators producing pre-computed analytical cubes with sub-second response times.',
          components: ['Metric Cube Engine', 'Anomaly Detection Core', 'Cross-Domain Join Engine']
        },
        {
          name: 'Data Lake & Analytics Cache',
          description: 'Columnar analytical storage and high-speed in-memory metric caches.',
          components: ['Analytical Storage Replica', 'Redis Metric Cache', 'Report Generation Queue']
        }
      ],
      dataFlow: [
        'Connected Tomvis modules emit operational telemetry events to internal message bus',
        'Aggregation engine computes rolling averages, variance indicators, and anomaly flags',
        'Executive dashboard receives live delta updates over WebSocket without page refresh',
        'Executive can filter by department, date range, or export board-ready presentation decks'
      ]
    },
    security: {
      dataSegregation: 'Strict role and organizational scope restrictions preventing unauthorized metric exposure.',
      accessControl: 'Executive Board, Chief Officers, Division Directors, and Analytics Auditors.',
      encryption: 'End-to-end TLS 1.3 encryption and automated data masking for sensitive customer/patient counts.',
      auditTrail: 'Every dashboard view, report export, and metric query logged in compliance audit journal.',
      complianceNotes: 'Strict data protection compliance ensuring all aggregated data respects individual module privacy rules.'
    },
    deviceSupport: {
      desktop: true,
      tablet: true,
      mobile: true,
      details: 'Optimized for 4K Executive Command Center video walls, desktop PCs, and executive iPad tablets.'
    },
    screenshots: [
      {
        id: 'dash-1',
        title: 'Enterprise Command Overview',
        device: 'desktop',
        caption: 'C-suite control center synthesizing operational health across all connected Tomvis software modules.',
        previewColor: '#ec4899',
        mockDataSummary: 'Enterprise overview: 8 Active Systems, 12,480 Daily Active Users, 99.98% System Uptime.',
        featuresShown: ['Executive Summary KPI Cards', 'System Health Radar', 'Cross-Module Throughput']
      },
      {
        id: 'dash-2',
        title: 'Cross-Module Performance Correlation',
        device: 'desktop',
        caption: 'Multi-series comparative chart evaluating workforce attendance against retail POS store throughput.',
        previewColor: '#db2777',
        mockDataSummary: 'Simulated 30-day correlation between field staffing levels and store sales volume.',
        featuresShown: ['Interactive Time Series', 'Anomaly Flags', 'Variance Analysis']
      },
      {
        id: 'dash-3',
        title: 'Executive Mobile Briefing Card',
        device: 'mobile',
        caption: 'Mobile-first executive summary card designed for leadership updates on the move.',
        previewColor: '#be185d',
        mockDataSummary: 'Weekly Executive Briefing: Overall operations +12.4% WoW, zero critical incidents.',
        featuresShown: ['Morning Digest', 'Key Anomaly Alerts', '1-Tap Share']
      }
    ],
    demoUrl: '/demo/dashboard',
    demoCredentials: [
      {
        role: 'Chief Executive / Board (Demo)',
        username: 'demo.executive@tomvis.local',
        password: 'DemoExecPassword!2026',
        notes: 'Full access to enterprise-wide metrics, cross-module comparisons, and executive exports.'
      },
      {
        role: 'Operations Director (Demo)',
        username: 'demo.ops.director@tomvis.local',
        password: 'DemoOpsDirector!2026',
        notes: 'Access to operational performance drill-downs, team KPIs, and anomaly monitors.'
      }
    ],
    demoSafetyNotes: 'All metrics, growth rates, revenue amounts, and user counts shown in the dashboard are synthetic simulated figures. No live corporate database is integrated.',
    highlightStats: [
      { label: 'Query Latency', value: '< 90ms' },
      { label: 'Modules Unified', value: '8 of 8' },
      { label: 'Executive AI', value: 'Auto-Digest' }
    ]
  }
];

export const USE_CASES_DATA = [
  {
    title: 'Healthcare',
    subtitle: 'Hospitals & Medical Centers',
    description: 'Empowers medical facilities with patient safety shields, Adverse Drug Reaction prevention, digital medication reconciliation, and clinical telemetry.',
    iconName: 'HeartPulse',
    solutionSlugs: ['healthcare', 'smart-ems'],
    tag: 'Clinical Grade'
  },
  {
    title: 'Emergency Medical Services',
    subtitle: 'EMS 1669 & Dispatch Centers',
    description: 'Real-time vehicle tracking, turn-by-turn paramedic routing, hospital ER pre-arrival trauma alerts, and inter-hospital patient referrals.',
    iconName: 'Ambulance',
    solutionSlugs: ['smart-ems'],
    tag: 'Life Safety'
  },
  {
    title: 'Private Companies',
    subtitle: 'Corporations & Field Operations',
    description: 'Streamlined field workforce attendance, anti-spoofing GPS geofencing, photo evidence logging, shift scheduling, and enterprise financial controls.',
    iconName: 'Building2',
    solutionSlugs: ['smartop', 'finance'],
    tag: 'Operational Velocity'
  },
  {
    title: 'Cooperatives',
    subtitle: 'Savings & Credit Unions',
    description: 'Digital transformation for member shares, automated annual dividend & patronage refunds, digital emergency loans, and member mobile portals.',
    iconName: 'Users',
    solutionSlugs: ['cooperative'],
    tag: 'Member Digital'
  },
  {
    title: 'Retail',
    subtitle: 'Store Chains & Welfare Shops',
    description: 'Lightning-fast touch checkout, barcode scanning, welfare employee credits, multi-location stock replenishment, and instant e-receipts.',
    iconName: 'ShoppingBag',
    solutionSlugs: ['pos'],
    tag: 'High Throughput'
  },
  {
    title: 'Finance',
    subtitle: 'Treasury & Corporate Accounting',
    description: 'Automated AR Aging analysis, 3-way matching purchase orders, vendor payables scheduling, hard budget enforcement, and cash flow forecasts.',
    iconName: 'CircleDollarSign',
    solutionSlugs: ['finance'],
    tag: 'Fiscal Control'
  },
  {
    title: 'Government',
    subtitle: 'Public Agencies & Municipalities',
    description: 'Field compliance auditing, GIS route-optimized inspection tours, facility risk assessment scoring, and tamper-proof digital certificates.',
    iconName: 'Landmark',
    solutionSlugs: ['inspection'],
    tag: 'Public Compliance'
  },
  {
    title: 'Local Organizations',
    subtitle: 'Regional Units & Communities',
    description: 'Accessible, scalable digital infrastructure connecting dispersed community branches, welfare initiatives, and local operational workflows.',
    iconName: 'Network',
    solutionSlugs: ['smartop', 'dashboard'],
    tag: 'Modular Reach'
  }
];

export const TECH_STACK_DATA = {
  core: {
    title: 'Tomvis Framework Core',
    description: 'Modular, event-driven architecture designed for enterprise scalability, security-first workflows, and unified UI component standards.',
    highlights: [
      'Modular Plugin Architecture',
      'Config-Driven Entity System',
      'Unified RBAC & Permission Bus',
      'Sub-second WebSocket Telemetry',
      'Standardized Audit Logging',
      'Synthetic Data Sandbox Engine'
    ]
  },
  categories: [
    {
      name: 'Frontend & UI Engineering',
      description: 'Modern, high-performance web applications built for speed, accessibility, and intuitive interactions.',
      items: [
        { name: 'Next.js App Router', role: 'Enterprise React Framework, SSR & Static Optimization', version: 'v16.x' },
        { name: 'React', role: 'Component-Driven Declarative User Interface', version: 'v19.x' },
        { name: 'TypeScript', role: 'Type-Safe Architecture & Contract Integrity', version: 'v6.x' },
        { name: 'Vanilla CSS Design System', role: 'CSS Custom Properties, Glassmorphism, Dark/Light Themes', version: 'Modern CSS3' },
        { name: 'Lucide Icons', role: 'Crisp Vector System Icons for Enterprise UI', version: 'Latest' }
      ]
    },
    {
      name: 'Backend & Services',
      description: 'Robust server engines delivering sub-second APIs, real-time sockets, and business logic.',
      items: [
        { name: 'Node.js', role: 'High-concurrency asynchronous runtime environment', version: 'LTS' },
        { name: 'PHP Core / Services', role: 'Proven enterprise integration & document processing', version: 'v8.x' },
        { name: 'REST API & WebSockets', role: 'Sub-second real-time telemetry and resource endpoints', version: 'HTTP/2 & WS' },
        { name: 'FHIR / HL7 Standards', role: 'Healthcare interoperability compliance protocol', version: 'R4' }
      ]
    },
    {
      name: 'Database & Caching',
      description: 'ACID-compliant relational data management paired with high-throughput cache layers.',
      items: [
        { name: 'MySQL Enterprise', role: 'Structured relational storage, indexing, and foreign constraints', version: 'v8.0+' },
        { name: 'Redis Cache (Optional)', role: 'In-memory caching for session states and telemetry bursts', version: 'v7.x' },
        { name: 'IndexedDB Client Store', role: 'Offline-first PWA caching for disconnected field workers', version: 'HTML5' }
      ]
    },
    {
      name: 'DevOps, Deployment & Infrastructure',
      description: 'Containerized deployment pipeline with process monitoring and SSL termination.',
      items: [
        { name: 'Docker & Docker Compose', role: 'Immutable containerization of microservices and dependencies', version: 'Container Engine' },
        { name: 'Nginx Reverse Proxy', role: 'High-performance SSL termination, load balancing, and gzip compression', version: 'Stable' },
        { name: 'PM2 Process Manager', role: 'Zero-downtime reloads, clustering, and health monitoring', version: 'v5.x' },
        { name: 'CI/CD Automated Testing', role: 'Linting, type validation, and production build checks', version: 'Automated' }
      ]
    }
  ]
};

export const SECURITY_STANDARDS = [
  {
    id: 'auth',
    title: 'Authentication & Session Integrity',
    description: 'Stateless JWT / secure session cookies with HTTPOnly, Secure, and SameSite protection. Automatic idle timeouts and instant token revocation upon logout.',
    icon: 'ShieldCheck',
    badge: 'Core Auth'
  },
  {
    id: 'rbac',
    title: 'Role-Based Access Control (RBAC)',
    description: 'Fine-grained hierarchical permission trees ensuring users only access endpoints and data scoped to their specific organizational role and facility.',
    icon: 'Lock',
    badge: 'Access Guard'
  },
  {
    id: 'audit',
    title: 'Tamper-Evident Audit Logging',
    description: 'Every create, read, update, delete (CRUD) action, supervisor override, and clinical chart view is immutably timestamped with user ID, IP address, and change diff.',
    icon: 'FileText',
    badge: 'Immutable Log'
  },
  {
    id: 'encryption',
    title: 'End-to-End & Rest Encryption',
    description: 'All network traffic enforced through TLS 1.3 with modern cipher suites. Sensitive database columns (credentials, bank details, patient identifiers) encrypted via AES-256.',
    icon: 'Key',
    badge: 'AES-256'
  },
  {
    id: 'api-security',
    title: 'API Security & Rate Limiting',
    description: 'Strict CORS policies, JSON schema validation, input sanitization to prevent SQL injection and XSS, paired with sliding-window rate limiting on public endpoints.',
    icon: 'Terminal',
    badge: 'Rate Limited'
  },
  {
    id: 'secrets',
    title: 'Environment Secrets Isolation',
    description: 'Zero hardcoded secrets. All cryptographic salts, database credentials, and service tokens are injected via isolated environment configurations at runtime.',
    icon: 'EyeOff',
    badge: 'Zero Secret Leaks'
  },
  {
    id: 'db-security',
    title: 'Database Security & Connection Isolation',
    description: 'Prepared statements with parameterized queries 100% of the time. Database accounts strictly privilege-scoped with no public port exposure.',
    icon: 'Database',
    badge: 'Zero SQLi'
  },
  {
    id: 'two-factor',
    title: '2FA / MFA Ready Architecture',
    description: 'Pre-architected TOTP (Time-based One-Time Password) and hardware security key support ready for immediate deployment on sensitive administrative accounts.',
    icon: 'Smartphone',
    badge: '2FA Ready'
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS_DATA.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
}

export function getAllProjectSlugs(): string[] {
  return PROJECTS_DATA.map((p) => p.slug);
}
