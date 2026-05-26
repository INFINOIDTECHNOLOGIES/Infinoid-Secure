import { Building2, Camera, ClipboardCheck, Cpu, DoorOpen, Factory, GraduationCap, Gauge, Globe2, HardHat, HeartPulse, Hotel, Laptop2, Shield, ShieldCheck, ShoppingBag, SquareUserRound, TrainFront, Video, Warehouse, Waves, Workflow, Zap, Eye, PanelTopDashed } from "lucide-react";

export type NavGroup = {
  label: string;
  href: string;
  children: Array<{
    label: string;
    href: string;
    description: string;
  }>;
};

export type FeatureCard = {
  title: string;
  description: string;
  icon: string;
  href: string;
  headline: string;
  copy: string;
  cards: Array<{
    title: string;
    description: string;
  }>;
};

export type ProductCard = {
  name: string;
  slug: string;
  description: string;
  category: string;
  icon: string;
  badge: string;
  image: string;
};

export type IndustryCard = {
  name: string;
  slug: string;
  description: string;
  icon: string;
};

export type PageDetail = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  sections: Array<{
    title: string;
    items: string[];
  }>;
};

export const brand = {
  name: "Infinoid Secure",
  legalName: "Infinoid Technologies",
  tagline: "Enterprise security infrastructure with intelligent monitoring.",
};

export const primaryNav: NavGroup[] = [
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Video Surveillance", href: "/solutions/video-surveillance", description: "AI-driven CCTV, command centers, perimeter defense." },
      { label: "Access Control", href: "/solutions/access-control", description: "Face recognition, door control, visitor flows." },
      { label: "Time Attendance", href: "/solutions/time-attendance", description: "Biometric attendance, cloud sync, payroll bridges." },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Railway", href: "/industries/railway", description: "Platform, station, and depot monitoring." },
      { label: "Manufacturing", href: "/industries/manufacturing", description: "Plant safety, perimeter, and asset protection." },
      { label: "Healthcare", href: "/industries/healthcare", description: "Patient areas, access zones, and audit trails." },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Bullet Cameras", href: "/products/bullet-cameras", description: "Long-range outdoor surveillance." },
      { label: "Face Attendance", href: "/products/face-attendance", description: "Smart attendance with secure identity verification." },
      { label: "VMS", href: "/products/vms", description: "Centralized monitoring and event management." },
    ],
  },
  {
    label: "Partners",
    href: "/partners",
    children: [
      { label: "Channel Partners", href: "/partners", description: "Dealer, integrator, and distributor ecosystem." },
      { label: "Technology Partners", href: "/partners", description: "Interop and integration-ready platform stack." },
      { label: "Alliance Program", href: "/partners", description: "Long-term support for scale deployments." },
    ],
  },
  {
    label: "Support",
    href: "/support",
    children: [
      { label: "Service Desk", href: "/support", description: "Ticketing, escalation, and SLA-backed response." },
      { label: "Downloads", href: "/resources/blogs", description: "Catalogues, guides, and technical resources." },
      { label: "Warranty", href: "/support", description: "Coverage, RMA, and support policy details." },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Blogs", href: "/resources/blogs", description: "Security insights and deployment stories." },
      { label: "Case Studies", href: "/resources/case-studies", description: "Realistic implementation narratives." },
      { label: "News", href: "/resources/news", description: "Announcements, launches, and industry updates." },
    ],
  },
  {
    label: "About Us",
    href: "/about-us",
    children: [
      { label: "Company Overview", href: "/about-us", description: "Who we are and how we deliver scale." },
      { label: "Leadership", href: "/about-us", description: "Experience-led product and service culture." },
      { label: "Careers", href: "/about-us", description: "Build next-generation security infrastructure." },
    ],
  },
  {
    label: "Contact Us",
    href: "/contact-us",
    children: [
      { label: "Sales Inquiry", href: "/contact-us", description: "Start a tailored security consultation." },
      { label: "Support Request", href: "/support", description: "Reach the service team quickly." },
      { label: "Office Locations", href: "/contact-us", description: "Regional presence and partner contact points." },
    ],
  },
];

export const solutions: FeatureCard[] = [
  {
    title: "Video Surveillance",
    description: "Centralized monitoring, AI analytics, and perimeter detection for enterprise-scale environments.",
    headline: "AI-Powered Video Surveillance",
    copy: "Centralized monitoring, AI analytics, perimeter detection, and smart tracking for enterprise-scale security operations.",
    icon: "video",
    href: "/solutions/video-surveillance",
    cards: [
      { title: "ANPR", description: "Automated plate recognition for parking, campus, and gate visibility." },
      { title: "Video Analytics", description: "Event intelligence, people counts, intrusion logic, and anomaly detection." },
      { title: "Centralized Monitoring", description: "One secure view across distributed sites and control rooms." },
      { title: "Smart Parking", description: "Occupancy and vehicle flow insight for managed properties." },
    ],
  },
  {
    title: "Access Control",
    description: "Biometric access, smart doors, and role-based visitor workflows across multiple sites.",
    headline: "Unified Access Intelligence",
    copy: "Biometric access, smart doors, visitor management, and role-based security across single or multi-site estates.",
    icon: "shield",
    href: "/solutions/access-control",
    cards: [
      { title: "Face Recognition", description: "Hands-free entry verification for secure and busy environments." },
      { title: "Smart Entry", description: "Door and turnstile workflows connected to policy and schedules." },
      { title: "Visitor Workflow", description: "Pre-registered, auditable, and friction-light guest journeys." },
      { title: "Multi-site Access", description: "Unified policy control for multiple properties and teams." },
    ],
  },
  {
    title: "Time Attendance",
    description: "Attendance automation and payroll sync for fast-moving teams and hybrid work models.",
    headline: "Workforce Tracking Simplified",
    copy: "Attendance automation, payroll integration, shift management, and remote workforce visibility for modern teams.",
    icon: "clipboard",
    href: "/solutions/time-attendance",
    cards: [
      { title: "Face Attendance", description: "Fast, contactless verification for offices and field teams." },
      { title: "Shift Tracking", description: "Live view of attendance by department, site, and schedule." },
      { title: "Cloud Attendance", description: "Centralized records for distributed and hybrid organizations." },
      { title: "Payroll Sync", description: "Streamlined exports and fewer manual corrections." },
    ],
  },
];

export const solutionHighlights = [
  { title: "Perimeter Security", description: "Detect, verify, and escalate events before they become incidents." },
  { title: "ANPR", description: "Automated vehicle recognition for campuses, parking, and gated access." },
  { title: "Centralized Surveillance", description: "Unify multiple sites into a single live operations view." },
  { title: "Access Integration", description: "Tie video, entry, and identity into one workflow." },
  { title: "Visitor Management", description: "Pre-registration and audit-ready visitor journeys." },
  { title: "Smart Attendance", description: "Contactless identity capture and attendance intelligence." },
];

export const products: ProductCard[] = [
  { name: "Bullet Cameras", slug: "bullet-cameras", description: "Long-range outdoor cameras for perimeter and parking environments.", category: "Video Surveillance", icon: "camera", badge: "Outdoor", image: "/images/products/bullet-camera.svg" },
  { name: "Dome Cameras", slug: "dome-cameras", description: "Discreet indoor and semi-outdoor surveillance options.", category: "Video Surveillance", icon: "dome", badge: "Indoor", image: "/images/products/dome-camera.svg" },
  { name: "PTZ Cameras", slug: "ptz-cameras", description: "Pan-tilt-zoom systems for active monitoring and tracking.", category: "Video Surveillance", icon: "ptz", badge: "Tracking", image: "/images/products/ptz-camera.svg" },
  { name: "IP Cameras", slug: "ip-cameras", description: "Network-ready cameras with enterprise-grade image clarity.", category: "Video Surveillance", icon: "network", badge: "IP", image: "/images/products/ip-camera.svg" },
  { name: "NVR Systems", slug: "nvr", description: "Recording and storage infrastructure for dependable evidence retention.", category: "Video Surveillance", icon: "record", badge: "Storage", image: "/images/products/nvr-system.svg" },
  { name: "VMS", slug: "vms", description: "Centralized video management for distributed sites.", category: "Video Surveillance", icon: "monitor", badge: "Platform", image: "/images/products/vms.svg" },
  { name: "AI Cameras", slug: "ai-cameras", description: "Built-in analytics for alerts, automation, and response.", category: "Video Surveillance", icon: "cpu", badge: "AI", image: "/images/products/ai-camera.svg" },
  { name: "Thermal Cameras", slug: "thermal-cameras", description: "Heat-based detection for harsh or low-visibility spaces.", category: "Video Surveillance", icon: "thermal", badge: "Specialty", image: "/images/products/bullet-camera.svg" },
  { name: "Biometric Devices", slug: "biometric-devices", description: "Reliable identity validation for secure entry control.", category: "Access Control", icon: "fingerprint", badge: "Secure", image: "/images/products/face-attendance.svg" },
  { name: "Face Recognition Devices", slug: "face-recognition-devices", description: "Hands-free identity verification for busy facilities.", category: "Access Control", icon: "scan-face", badge: "AI", image: "/images/products/face-attendance.svg" },
  { name: "RFID Readers", slug: "rfid-readers", description: "Fast and dependable credential reading at entry points.", category: "Access Control", icon: "badge-check", badge: "Tap", image: "/images/products/face-attendance.svg" },
  { name: "Door Controllers", slug: "door-controllers", description: "Intelligent control modules for doors, gates, and turnstiles.", category: "Access Control", icon: "door", badge: "Control", image: "/images/products/face-attendance.svg" },
  { name: "Attendance Machines", slug: "attendance-machines", description: "Reliable attendance capture for frontline and office staff.", category: "Time Attendance", icon: "clock", badge: "Workforce", image: "/images/products/face-attendance.svg" },
  { name: "Face Attendance", slug: "face-attendance", description: "Contactless attendance validation with smart identity matching.", category: "Time Attendance", icon: "scan-search", badge: "Contactless", image: "/images/products/face-attendance.svg" },
  { name: "Cloud Attendance", slug: "cloud-attendance", description: "Cloud connected attendance insights for distributed teams.", category: "Time Attendance", icon: "cloud", badge: "Cloud", image: "/images/products/face-attendance.svg" },
];

export const industries: IndustryCard[] = [
  { name: "Railway", slug: "railway", description: "Platforms, yards, and passenger flow visibility.", icon: "train" },
  { name: "Manufacturing", slug: "manufacturing", description: "Plant floors, gates, and asset movement monitoring.", icon: "factory" },
  { name: "BFSI", slug: "bfsi", description: "Branch security, vault zones, and branch analytics.", icon: "bank" },
  { name: "Retail", slug: "retail", description: "Store operations, shrink control, and customer flow insights.", icon: "shopping" },
  { name: "Hospitality", slug: "hospitality", description: "Guest experience and back-of-house safety.", icon: "hotel" },
  { name: "Power & Energy", slug: "power-energy", description: "Critical assets, substations, and remote sites.", icon: "energy" },
  { name: "Education", slug: "education", description: "Campus safety, visitor control, and student access.", icon: "education" },
  { name: "Healthcare", slug: "healthcare", description: "Patient areas, pharmacies, and clean access routes.", icon: "health" },
  { name: "Defence & Government", slug: "defence-government", description: "High-trust perimeter and operational oversight.", icon: "shield" },
  { name: "IT & ITES", slug: "it-ites", description: "Office access, data room monitoring, and compliance support.", icon: "laptop" },
  { name: "Construction", slug: "construction", description: "Site access, safety compliance, and asset protection.", icon: "hard-hat" },
  { name: "Warehousing", slug: "warehousing", description: "Dock management, inventory zones, and perimeter coverage.", icon: "warehouse" },
];

export const caseStudies = [
  { title: "Retail Chain Surveillance", description: "Standardized CCTV and exception alerts across 120 stores.", impact: "22% faster incident resolution", slug: "retail-chain-surveillance" },
  { title: "Manufacturing Plant Security", description: "Perimeter monitoring, entry controls, and safety zone coverage.", impact: "Unified monitoring across 3 plants", slug: "manufacturing-plant-security" },
  { title: "Smart Parking Solution", description: "ANPR and occupancy intelligence for a multi-level campus.", impact: "Reduced entry queues by 35%", slug: "smart-parking-solution" },
  { title: "Hospital Centralized Monitoring", description: "Single-pane visibility for emergency, pharmacy, and critical areas.", impact: "24/7 command oversight", slug: "hospital-centralized-monitoring" },
];

export const testimonials = [
  { quote: "Infinoid Secure gave us a clear, scalable monitoring stack that cut response time and simplified audits.", name: "Amit Kulkarni", role: "Head of Security, Meridian Retail Group", company: "Meridian Retail" },
  { quote: "The access control and attendance workflow is reliable across our multi-site operations and easy for teams to use.", name: "Neha Sharma", role: "Facilities Director, Horizon Manufacturing", company: "Horizon Manufacturing" },
  { quote: "We now have better visibility across our critical zones, with analytics that help our teams react faster.", name: "Dr. Imran Qureshi", role: "Chief Administrative Officer, CityCare Hospital", company: "CityCare Hospital" },
];

export const clients = [
  "Meridian Retail",
  "Horizon Manufacturing",
  "CityCare Hospitals",
  "Atlas Infrastructure",
  "Summit Banking",
  "Northstar Logistics",
];

export const stats = [
  { label: "Devices Deployed", value: "1M+" },
  { label: "Enterprise Clients", value: "5000+" },
  { label: "Countries Served", value: "50+" },
  { label: "Channel Partners", value: "100+" },
];

export const mediaTiles = [
  { title: "Videos", description: "Product walkthroughs and solution demos." },
  { title: "Awards", description: "Recognition for innovation and service." },
  { title: "Events", description: "Industry showcases and partner programs." },
  { title: "Blogs", description: "Security insights from the Infinoid team." },
  { title: "News", description: "Launches, updates, and company announcements." },
];

export const detailPages: Record<string, PageDetail> = {
  "video-surveillance": {
    slug: "video-surveillance",
    title: "Video Surveillance",
    eyebrow: "Solutions / Video Surveillance",
    description: "Intelligent CCTV architectures for command centers, campuses, perimeters, and distributed enterprise operations.",
    sections: [
      { title: "Core capabilities", items: ["ANPR", "Centralized monitoring", "Perimeter protection", "Video analytics", "AI surveillance", "Parking intelligence"] },
      { title: "Deployment outcomes", items: ["Faster incident detection", "Reduced blind spots", "Better operator context", "Improved evidentiary workflows"] },
    ],
  },
  "access-control": {
    slug: "access-control",
    title: "Access Control",
    eyebrow: "Solutions / Access Control",
    description: "Identity-aware access control for buildings, campuses, floors, and secure zones.",
    sections: [
      { title: "Core capabilities", items: ["Face recognition access", "Smart door control", "Visitor management", "Elevator access", "Multi-location control"] },
      { title: "Deployment outcomes", items: ["Stronger perimeter assurance", "Unified identity flows", "Less manual intervention", "Audit-ready access logs"] },
    ],
  },
  "time-attendance": {
    slug: "time-attendance",
    title: "Time Attendance",
    eyebrow: "Solutions / Time Attendance",
    description: "Biometric and cloud attendance workflows for enterprise teams, contractors, and hybrid work models.",
    sections: [
      { title: "Core capabilities", items: ["Biometric attendance", "Cloud attendance", "Employee tracking", "Shift management", "Payroll integration"] },
      { title: "Deployment outcomes", items: ["Simpler workforce planning", "Cleaner payroll input", "Better shift visibility", "Reduced manual tracking"] },
    ],
  },
};

for (const product of products) {
  detailPages[product.slug] = {
    slug: product.slug,
    title: product.name,
    eyebrow: `Products / ${product.category}`,
    description: product.description,
    sections: [
      {
        title: "What it delivers",
        items: ["Enterprise-ready build", "Optimized for scalable rollouts", "Integrates with Infinoid solution stack", "Designed for monitoring accuracy"],
      },
      {
        title: "Ideal deployments",
        items: [product.category === "Video Surveillance" ? "Campuses and perimeters" : product.category === "Access Control" ? "Secure entry points" : "Office and field workforce"],
      },
    ],
  };
}

for (const industry of industries) {
  detailPages[industry.slug] = {
    slug: industry.slug,
    title: industry.name,
    eyebrow: `Industries / ${industry.name}`,
    description: industry.description,
    sections: [
      { title: "Typical needs", items: ["Perimeter monitoring", "Operational visibility", "Secure access control", "Activity audit trails"] },
      { title: "Infinoid fit", items: ["Adaptable architecture", "Scalable monitoring", "Integration-ready design", "Enterprise support model"] },
    ],
  };
}

detailPages.blogs = {
  slug: "blogs",
  title: "Blogs",
  eyebrow: "Resources / Blogs",
  description: "Technical and industry perspectives on CCTV, access control, and AI surveillance.",
  sections: [
    { title: "Latest topics", items: ["AI assisted monitoring", "Campus security planning", "Smart parking visibility", "Access control deployment patterns"] },
    { title: "Audience", items: ["Security teams", "Facility heads", "IT administrators", "System integrators"] },
  ],
};

detailPages["case-studies"] = {
  slug: "case-studies",
  title: "Case Studies",
  eyebrow: "Resources / Case Studies",
  description: "Practical enterprise deployment stories showing how Infinoid Secure improves visibility and control.",
  sections: [
    { title: "Coverage", items: ["Retail", "Manufacturing", "Healthcare", "Parking and campuses"] },
    { title: "Outcomes", items: ["Higher response speed", "Cleaner oversight", "Better operator trust", "Reduced manual process friction"] },
  ],
};

detailPages.news = {
  slug: "news",
  title: "News",
  eyebrow: "Resources / News",
  description: "Company updates, product launches, and enterprise security announcements.",
  sections: [
    { title: "News themes", items: ["Launches", "Partnerships", "Field deployments", "Recognition"] },
    { title: "Use cases", items: ["Channel enablement", "Customer onboarding", "Solution expansion", "Service milestones"] },
  ],
};

detailPages.events = {
  slug: "events",
  title: "Events",
  eyebrow: "Resources / Events",
  description: "Customer forums, partner meets, and industry showcases focused on security solutions.",
  sections: [
    { title: "Event formats", items: ["Partner summits", "Security roadshows", "Product demos", "Industry panels"] },
    { title: "Value", items: ["Shared best practices", "Live demos", "Solution alignment", "Long-term partnerships"] },
  ],
};

export const resourceSlugs = ["blogs", "case-studies", "news", "events"];

export const iconMap: Record<string, any> = {
  video: Video,
  shield: Shield,
  clipboard: ClipboardCheck,
  camera: Camera,
  dome: Camera,
  ptz: Eye,
  network: Globe2,
  record: PanelTopDashed,
  monitor: Gauge,
  cpu: Cpu,
  thermal: Waves,
  fingerprint: ShieldCheck,
  "scan-face": SquareUserRound,
  "badge-check": ClipboardCheck,
  door: DoorOpen,
  clock: Workflow,
  "scan-search": Eye,
  cloud: Globe2,
  train: TrainFront,
  factory: Factory,
  bank: Building2,
  shopping: ShoppingBag,
  hotel: Hotel,
  energy: Zap,
  education: GraduationCap,
  health: HeartPulse,
  laptop: Laptop2,
  "hard-hat": HardHat,
  warehouse: Warehouse,
};

export const caseStudyMap = Object.fromEntries(caseStudies.map((item) => [item.slug, item]));