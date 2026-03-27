import {
  Award,
  Boxes,
  Building,
  Car,
  CheckCircle,
  Clock,
  Cookie,
  CreditCard,
  Database,
  Dumbbell,
  Facebook,
  FileText,
  GraduationCap,
  Handshake,
  Heart,
  Laptop,
  Lightbulb,
  Linkedin,
  Lock,
  Mail,
  MapPin,
  Package,
  Phone,
  Pill,
  Plane,
  RefreshCw,
  Scale,
  Share2,
  Shield,
  ShoppingCart,
  Target,
  Train,
  Truck,
  UserCog,
  Users,
  Utensils,
  Warehouse,
  XCircle,
  Zap,
  type LucideIcon,
} from "lucide-react";

type LinkItem = { name: string; href: string };
type SocialLinkItem = LinkItem & { icon: LucideIcon };
export type ContentSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};
type EditorialEntryBase = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  featured?: boolean;
  content: ContentSection[];
};
export type NewsArticle = EditorialEntryBase;
export type BlogPost = EditorialEntryBase & {
  author: string;
  authorImage: string;
};

const createSections = (
  heading: string,
  paragraphs: string[],
  bullets?: string[],
): ContentSection[] => [
  {
    heading,
    paragraphs,
    ...(bullets && bullets.length > 0 ? { bullets } : {}),
  },
];

export const newsArticles = [
  {
    slug: "navi-logistics-expands-operations-to-southeast-asia",
    title: "Navi Logistics Expands Operations to Southeast Asia",
    excerpt:
      "We are excited to announce the expansion of our logistics network to cover major markets in Southeast Asia, including Singapore, Thailand, and Vietnam.",
    date: "December 15, 2024",
    category: "Company Updates",
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&h=500&fit=crop",
    readTime: "5 min read",
    featured: true,
    content: createSections(
      "Regional Expansion",
      [
        "The Southeast Asia expansion gives Navi Logistics a stronger operating footprint across high-growth trade corridors that connect India with Singapore, Thailand, and Vietnam. The rollout includes new partner hubs, lane planning support, and customs coordination for import and export shipments.",
        "For customers, the biggest advantage is a simpler network for cross-border movement. Teams can now plan origin pickups, consolidation, customs clearance, and final-mile handoffs through a more unified service model instead of stitching together multiple vendors.",
      ],
      [
        "Faster cross-border coordination for electronics, retail, and industrial cargo",
        "Improved shipment visibility for multi-country freight movement",
        "Access to partner warehousing and customs support in new markets",
      ],
    ),
  },
  {
    slug: "renewable-diesel-pilot-cuts-emissions-on-eastern-corridor",
    title: "Renewable Diesel Pilot Cuts Emissions on Eastern Corridor",
    excerpt:
      "A new linehaul pilot using renewable diesel is helping us reduce emissions across high-volume eastern corridor routes without affecting service reliability.",
    date: "January 18, 2025",
    category: "Sustainability",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&h=500&fit=crop",
    readTime: "4 min read",
    featured: true,
    content: createSections(
      "Lower-Emission Linehaul",
      [
        "The pilot focuses on repeat lanes linking Kolkata, Bhubaneswar, Ranchi, and Patna, where fleet utilization is already high and operating data is easy to compare. By swapping a portion of traditional fuel use with renewable diesel, the operations team can measure carbon impact without redesigning route plans or delivery commitments.",
        "Early results show that sustainability improvements are easier to scale when they fit inside existing transport workflows. The next phase will evaluate fuel availability, operating cost stability, and partner readiness before the model is extended to additional corridors.",
      ],
      [
        "Pilot lanes selected for consistent volume and repeat schedules",
        "Service levels remain aligned with existing customer SLAs",
        "Performance metrics include fuel cost, emissions, and on-time delivery",
      ],
    ),
  },
  {
    slug: "new-warehousing-facility-opens-in-mumbai",
    title: "New Warehousing Facility Opens in Mumbai",
    excerpt:
      "Our newest 200,000 sq ft facility is now operational, featuring state-of-the-art automation and climate control systems.",
    date: "December 8, 2024",
    category: "Company Updates",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop",
    readTime: "3 min read",
    content: createSections(
      "Warehouse Capacity",
      [
        "The Mumbai facility was designed to support fast-moving inventory, multi-client storage, and cleaner inbound-to-outbound flow for regional distribution. Automation in scanning, slotting, and dispatch staging is expected to reduce manual handling delays during peak periods.",
        "The location also adds more resilience to west coast operations. Customers with retail, FMCG, healthcare, and spare-parts requirements can now use the site for buffer inventory and faster replenishment across western and central India.",
      ],
      [
        "200,000 sq ft of storage capacity",
        "Climate-controlled zones for sensitive cargo",
        "Integrated staging for faster dispatch planning",
      ],
    ),
  },
  {
    slug: "control-tower-platform-launches-for-multi-city-visibility",
    title: "Control Tower Platform Launches for Multi-City Visibility",
    excerpt:
      "Our new control tower experience gives enterprise customers one place to monitor shipments, exceptions, and SLA risks across multiple cities.",
    date: "January 14, 2025",
    category: "Industry News",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    readTime: "5 min read",
    content: createSections(
      "Operational Visibility",
      [
        "The control tower rollout brings shipment milestones, delay alerts, and hub-level performance into a single operating view for customers with large multi-city movements. Dispatch teams can follow lane health in real time and focus faster on exceptions that threaten promised delivery windows.",
        "Instead of reacting to missed milestones after the fact, operations and customer service teams can intervene earlier. This is especially useful for high-volume B2B networks where a single delay often creates downstream issues in stocking, labor planning, or route utilization.",
      ],
      [
        "Centralized status tracking across multiple hubs",
        "Early-warning alerts for SLA and dwell-time risks",
        "Shared visibility for operations and customer teams",
      ],
    ),
  },
  {
    slug: "ai-powered-route-optimization-launch",
    title: "AI-Powered Route Optimization Launch",
    excerpt:
      "Introducing our new AI-driven route optimization system that reduces delivery times by up to 25% and fuel consumption by 15%.",
    date: "December 5, 2024",
    category: "Industry News",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
    readTime: "4 min read",
    content: createSections(
      "Smarter Route Planning",
      [
        "The route optimization system uses live operating constraints such as delivery windows, traffic conditions, stop density, and vehicle capacity to generate more efficient plans. That helps dispatch teams spend less time manually adjusting trips throughout the day.",
        "Better route quality improves both customer experience and operating margin. Shorter travel time, fewer unproductive detours, and tighter capacity planning all contribute to more predictable delivery performance on dense service corridors.",
      ],
      [
        "Better balancing of time, distance, and vehicle capacity",
        "Reduced fuel usage on repetitive delivery lanes",
        "More consistent ETAs for customer communication",
      ],
    ),
  },
  {
    slug: "chennai-cross-dock-hub-goes-live-for-south-india-freight",
    title: "Chennai Cross-Dock Hub Goes Live for South India Freight",
    excerpt:
      "A new cross-dock operation in Chennai is now supporting faster turnaround for freight moving between southern metros and eastern distribution hubs.",
    date: "January 11, 2025",
    category: "Company Updates",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&h=400&fit=crop",
    readTime: "4 min read",
    content: createSections(
      "Network Throughput",
      [
        "The Chennai cross-dock hub was introduced to reduce idle time between inbound receipt and outbound movement for freight heading toward Bengaluru, Hyderabad, Vijayawada, Kolkata, and nearby industrial clusters. Cross-docking is especially effective for freight that does not require long storage dwell time.",
        "With shorter hub stays and more deliberate load planning, the southern network can now move mixed shipments with better speed and fewer touchpoints. That improves both transit reliability and asset utilization.",
      ],
      [
        "Faster handoff from inbound to outbound vehicles",
        "Lower dwell time for through-freight",
        "Improved connectivity between southern and eastern lanes",
      ],
    ),
  },
  {
    slug: "strategic-partnership-with-e-commerce-giants",
    title: "Strategic Partnership with E-Commerce Giants",
    excerpt:
      "Announcing partnerships with leading e-commerce platforms to provide seamless fulfillment solutions across India.",
    date: "December 1, 2024",
    category: "Partnerships",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    readTime: "3 min read",
    content: createSections(
      "Fulfillment Collaboration",
      [
        "The new partnerships focus on fulfillment coordination, returns management, and middle-mile movement for fast-scaling e-commerce sellers. By aligning platform demand patterns with warehousing and transport operations, Navi Logistics can support more stable delivery performance during promotions and peak periods.",
        "For customers selling online, the combined model reduces the operational gap between order intake and shipment execution. That means quicker processing, stronger service consistency, and more headroom for growth during high-order cycles.",
      ],
      [
        "Closer fulfillment alignment with order-volume spikes",
        "Stronger support for returns and reverse logistics",
        "Better planning for sale events and seasonal peaks",
      ],
    ),
  },
  {
    slug: "partnership-with-green-fleet-initiative",
    title: "Partnership with Green Fleet Initiative",
    excerpt:
      "Joining forces with the Green Fleet Initiative to reduce our carbon footprint by 40% by 2030 through electric vehicles and sustainable practices.",
    date: "December 10, 2024",
    category: "Sustainability",
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=500&fit=crop",
    readTime: "4 min read",
    content: createSections(
      "Sustainability Partnership",
      [
        "The Green Fleet Initiative partnership gives Navi Logistics access to implementation frameworks, benchmark data, and transition support for lower-emission fleet operations. The work includes evaluating EV suitability, route design changes, charging requirements, and supporting process improvements across the transport network.",
        "Rather than treating sustainability as a separate initiative, the company is integrating it with procurement, route planning, and operations reporting. That improves the odds of making measurable progress without weakening delivery performance.",
      ],
      [
        "Fleet transition roadmap aligned to operating reality",
        "Shared measurement for emissions and service performance",
        "Operational pilots before full-scale network changes",
      ],
    ),
  },
  {
    slug: "industry-recognition-best-logistics-provider-2024",
    title: "Industry Recognition: Best Logistics Provider 2024",
    excerpt:
      "Navi Logistics receives the prestigious 'Best Logistics Provider' award at the Supply Chain Excellence Awards 2024.",
    date: "November 28, 2024",
    category: "Company Updates",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
    readTime: "2 min read",
    content: createSections(
      "Recognition for Execution",
      [
        "The award reflects operational improvements made across warehousing, transport planning, and customer service over the last year. Consistency in on-time performance, process discipline, and responsiveness during peak demand all played an important role in the recognition.",
        "External validation is useful, but the bigger value comes from the habits behind it. The same routines that improve audit readiness and service quality also help the business scale more confidently as network complexity increases.",
      ],
      [
        "Recognition tied to service quality and execution standards",
        "Signals stronger customer confidence and market credibility",
        "Supports continued investment in network improvements",
      ],
    ),
  },
  {
    slug: "cold-chain-network-expansion",
    title: "Cold Chain Network Expansion",
    excerpt:
      "Expanding our temperature-controlled logistics network to serve pharmaceutical and food industries better.",
    date: "November 25, 2024",
    category: "Industry News",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    readTime: "4 min read",
    content: createSections(
      "Temperature-Controlled Growth",
      [
        "The cold chain expansion adds more route coverage, monitoring capability, and handling discipline for products that depend on stable temperature conditions. That includes pharmaceuticals, dairy, processed food, and other sensitive categories where small deviations can create quality and compliance risks.",
        "The program also strengthens customer confidence in traceability. Better monitoring, defined escalation workflows, and controlled handoffs make it easier to protect product integrity from origin to final destination.",
      ],
      [
        "Wider network support for pharma and food logistics",
        "Improved monitoring and traceability across transit legs",
        "Stronger process control for temperature-sensitive cargo",
      ],
    ),
  },
  {
    slug: "employee-excellence-program-launch",
    title: "Employee Excellence Program Launch",
    excerpt:
      "Introducing a new training and development program aimed at upskilling our workforce for future challenges.",
    date: "November 20, 2024",
    category: "Company Updates",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    readTime: "3 min read",
    content: createSections(
      "People and Capability",
      [
        "The Employee Excellence Program focuses on frontline operations, supervisory capability, safety awareness, and customer-facing communication. Training is structured around the practical moments that most affect shipment quality and service reliability.",
        "As logistics networks grow more data-heavy and time-sensitive, capability building becomes a direct operational lever. Better-trained teams make faster decisions, manage exceptions more confidently, and create a more reliable experience for customers.",
      ],
      [
        "Role-based skill development for operations teams",
        "Stronger focus on safety, service, and problem solving",
        "Better readiness for process and technology changes",
      ],
    ),
  },
] satisfies NewsArticle[];

export const blogPosts = [
  {
    slug: "the-future-of-logistics-ai-and-machine-learning-in-supply-chain",
    title: "The Future of Logistics: AI and Machine Learning in Supply Chain",
    excerpt:
      "Discover how artificial intelligence and machine learning are revolutionizing logistics operations, from predictive analytics to autonomous vehicles.",
    date: "December 12, 2024",
    author: "Rajiv Sharma",
    authorImage:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop",
    readTime: "8 min read",
    featured: true,
    content: createSections(
      "AI in Day-to-Day Operations",
      [
        "Artificial intelligence is becoming valuable in logistics because it helps teams make better decisions under constant operational pressure. Forecasting order volume, prioritizing exceptions, estimating delivery risk, and assigning transport capacity are all tasks where pattern recognition can improve speed and consistency.",
        "The strongest AI use cases are usually the most practical ones. Companies see results when models are paired with real operating data, clear decision points, and teams that know when to trust automation and when to step in manually.",
      ],
      [
        "Prediction works best when fed by stable process data",
        "AI should support planners, not hide operational accountability",
        "Clear exception workflows matter as much as the model itself",
      ],
    ),
  },
  {
    slug: "building-a-control-tower-that-reduces-exception-handling-time",
    title: "Building a Control Tower That Reduces Exception Handling Time",
    excerpt:
      "A practical look at how control tower design, alert quality, and ownership rules can help logistics teams solve issues before they affect delivery promises.",
    date: "January 16, 2025",
    author: "Sneha Gupta",
    authorImage:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    readTime: "7 min read",
    featured: true,
    content: createSections(
      "Control Tower Design",
      [
        "A control tower only improves operations when it shortens the path between a detected issue and a useful action. That means surfacing the right milestones, filtering noisy alerts, and making responsibility obvious across dispatch, hub operations, and customer service.",
        "Teams often over-focus on dashboards and under-invest in response playbooks. The best control tower models pair visibility with response rules so exceptions are triaged quickly and escalated only when intervention is actually required.",
      ],
      [
        "Prioritize alerts that threaten customer commitments",
        "Assign clear owners for each exception type",
        "Measure resolution time, not just dashboard usage",
      ],
    ),
  },
  {
    slug: "sustainable-logistics-building-a-greener-supply-chain",
    title: "Sustainable Logistics: Building a Greener Supply Chain",
    excerpt:
      "Learn about the latest strategies for reducing carbon footprint in logistics and how companies are achieving sustainability goals.",
    date: "December 8, 2024",
    author: "Priya Patel",
    authorImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
    category: "Industry Trends",
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=500&fit=crop",
    readTime: "6 min read",
    content: createSections(
      "Greener Supply Chains",
      [
        "Sustainability in logistics works best when it is broken into operational decisions that teams can actually control. Better load utilization, smarter route design, cleaner fuels, packaging changes, and reduced empty movement often create stronger impact than isolated brand campaigns.",
        "A greener supply chain is also easier to defend internally when it improves efficiency. Projects that lower emissions while reducing waste, fuel consumption, or rework tend to win support faster and stay funded longer.",
      ],
      [
        "Start with the highest-volume lanes and facilities",
        "Track both emissions and operational efficiency together",
        "Use pilots to validate the business case before scaling",
      ],
    ),
  },
  {
    slug: "network-design-lessons-for-fast-growing-fmcg-brands",
    title: "Network Design Lessons for Fast-Growing FMCG Brands",
    excerpt:
      "As product portfolios and delivery promises expand, FMCG brands need network design choices that balance inventory placement, speed, and service cost.",
    date: "January 10, 2025",
    author: "Rajiv Sharma",
    authorImage:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
    category: "Supply Chain",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
    readTime: "6 min read",
    content: createSections(
      "Scaling the FMCG Network",
      [
        "Fast-growing FMCG brands often outgrow their first logistics model before they notice the signs. Inventory sits too far from demand, replenishment becomes more reactive, and transport cost rises because the network was not designed for the current mix of SKUs, regions, and service commitments.",
        "The solution is rarely to add more nodes everywhere. The better approach is to identify which markets justify forward placement, which products require speed, and where shared infrastructure can reduce cost without weakening shelf availability.",
      ],
      [
        "Match inventory strategy to product velocity",
        "Use regional hubs only where demand supports them",
        "Review network design after every major portfolio shift",
      ],
    ),
  },
  {
    slug: "10-ways-to-optimize-your-warehouse-operations",
    title: "10 Ways to Optimize Your Warehouse Operations",
    excerpt:
      "Practical tips and strategies for improving warehouse efficiency and reducing operational costs.",
    date: "December 5, 2024",
    author: "Amit Kumar",
    authorImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    category: "Best Practices",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop",
    readTime: "5 min read",
    content: createSections(
      "Warehouse Performance Basics",
      [
        "Warehouse optimization usually begins with better layout discipline, cleaner slotting logic, and clearer work sequencing. Teams often chase automation first, but many performance gains come from reducing walking time, limiting double handling, and improving how fast exceptions are surfaced.",
        "Strong warehouse operations also depend on measurement. If inbound turnaround, pick accuracy, dock utilization, and inventory discrepancies are not visible, leaders end up relying on intuition instead of repeatable process control.",
      ],
      [
        "Shorten travel paths inside the facility",
        "Standardize putaway and picking rules",
        "Track a small set of operational KPIs every day",
      ],
    ),
  },
  {
    slug: "last-mile-delivery-challenges-and-solutions",
    title: "Last Mile Delivery: Challenges and Solutions",
    excerpt:
      "Exploring the complexities of last-mile delivery and innovative solutions that are transforming the industry.",
    date: "December 1, 2024",
    author: "Sneha Gupta",
    authorImage:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
    category: "Supply Chain",
    image:
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=400&fit=crop",
    readTime: "7 min read",
    content: createSections(
      "The Hardest Delivery Leg",
      [
        "Last-mile delivery is expensive because it combines tight customer expectations with the least predictable operating conditions. Traffic, failed attempts, address quality, route density, and vehicle constraints all shape whether the final delivery leg remains profitable.",
        "The most effective solutions combine routing discipline with better promise management. When customers receive clearer windows, drivers get stronger stop density, and exception handling becomes more deliberate, the economics of the last mile improve quickly.",
      ],
      [
        "Address quality has a direct cost impact",
        "Promise accuracy matters as much as delivery speed",
        "Dense route clusters improve the economics of fulfillment",
      ],
    ),
  },
  {
    slug: "e-commerce-logistics-meeting-customer-expectations",
    title: "E-Commerce Logistics: Meeting Customer Expectations",
    excerpt:
      "How logistics providers are adapting to meet the rising demands of e-commerce consumers.",
    date: "November 28, 2024",
    author: "Rajiv Sharma",
    authorImage:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
    category: "Industry Trends",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    readTime: "6 min read",
    content: createSections(
      "What Customers Expect Now",
      [
        "E-commerce buyers now expect fast delivery, clear tracking, simple returns, and reliable issue resolution as a baseline. That shifts pressure onto fulfillment networks to perform well not just during normal periods, but also through promotions, new launches, and seasonal demand swings.",
        "For logistics teams, the challenge is to scale responsiveness without letting cost spiral upward. That is why fulfillment design, returns handling, and better order-volume forecasting have become central to customer experience.",
      ],
      [
        "Fast delivery must still be economically viable",
        "Returns quality shapes customer trust",
        "Visibility and communication reduce support pressure",
      ],
    ),
  },
  {
    slug: "cold-chain-logistics-ensuring-product-integrity",
    title: "Cold Chain Logistics: Ensuring Product Integrity",
    excerpt:
      "Understanding the importance of temperature-controlled logistics for perishable goods.",
    date: "November 25, 2024",
    author: "Priya Patel",
    authorImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
    category: "Best Practices",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    readTime: "5 min read",
    content: createSections(
      "Protecting Sensitive Cargo",
      [
        "Cold chain logistics is less about refrigeration alone and more about control across every handoff. Packaging, staging, route timing, monitoring, and escalation steps all affect whether a product stays within acceptable temperature conditions.",
        "The operational goal is to reduce uncertainty. When teams know exactly where exposure risk exists and how to respond, they can preserve product quality and avoid the costly downstream impact of spoilage or compliance failure.",
      ],
      [
        "Temperature control depends on process, not just equipment",
        "Every transfer point introduces risk",
        "Monitoring is only useful when teams act on the data",
      ],
    ),
  },
  {
    slug: "case-study-transforming-supply-chain-for-a-major-retailer",
    title: "Case Study: Transforming Supply Chain for a Major Retailer",
    excerpt:
      "How Navi Logistics helped a leading retailer reduce delivery times by 40% and cut costs by 25%.",
    date: "November 22, 2024",
    author: "Amit Kumar",
    authorImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    category: "Case Studies",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&h=400&fit=crop",
    readTime: "10 min read",
    content: createSections(
      "Retail Supply Chain Results",
      [
        "The retailer's challenge was not a single broken process, but a combination of fragmented transport planning, inconsistent replenishment timing, and weak visibility across regional dispatch points. The transformation project focused on simplifying handoffs and improving execution discipline before layering in more technology.",
        "Once route design, shipment consolidation, and operating review cadence improved, the network produced better delivery speed with less waste. That created a clearer, more durable cost reduction than isolated short-term interventions.",
      ],
      [
        "Simplify process before automating it",
        "Regional consistency is essential for retail execution",
        "Review cadence matters when scaling change",
      ],
    ),
  },
  {
    slug: "the-role-of-iot-in-modern-logistics",
    title: "The Role of IoT in Modern Logistics",
    excerpt:
      "Exploring how Internet of Things technology is enabling smarter, more connected supply chains.",
    date: "November 18, 2024",
    author: "Sneha Gupta",
    authorImage:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&h=400&fit=crop",
    readTime: "7 min read",
    content: createSections(
      "Connected Supply Chains",
      [
        "IoT in logistics becomes valuable when it closes visibility gaps that matter operationally. Sensors on vehicles, containers, cold chain assets, and warehouse equipment can provide better awareness of location, condition, and utilization across the network.",
        "But raw data does not create better logistics on its own. Teams need thresholds, ownership, and workflows that turn device signals into useful decisions, whether that means rerouting a shipment or responding to a temperature breach before product quality is affected.",
      ],
      [
        "Use sensor data where it changes a real decision",
        "Alert fatigue reduces the value of connected devices",
        "Operational response matters more than data volume",
      ],
    ),
  },
  {
    slug: "packaging-kpis-every-operations-team-should-monitor",
    title: "Packaging KPIs Every Operations Team Should Monitor",
    excerpt:
      "Packaging quality affects cost, damage rates, cube efficiency, and delivery speed more than many teams realize. Here are the metrics worth reviewing regularly.",
    date: "January 7, 2025",
    author: "Amit Kumar",
    authorImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    category: "Best Practices",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&h=400&fit=crop",
    readTime: "5 min read",
    content: createSections(
      "Measuring Packaging Performance",
      [
        "Packaging is often reviewed only after damage claims rise, but it should be treated as an operating lever. Poor packaging choices affect volumetric weight, trailer utilization, handling speed, and the likelihood of damage during transfers and final-mile delivery.",
        "A small KPI set can make packaging performance far easier to manage. Teams should look at damage incidence, packaging cost per shipment, cube utilization, repack frequency, and returns caused by handling or protection issues.",
      ],
      [
        "Damage rate by packaging type",
        "Packaging cost per order or SKU family",
        "Cube efficiency and space utilization impact",
      ],
    ),
  },
] satisfies BlogPost[];

export const siteData = {
  brand: {
    name: "Navi Logistics",
    legalName: "Navi Logistics Pvt Ltd",
    tagline: "Logistics Made Simple",
    foundedYear: 2016,
    logo: "/Navi Logistics-Circular.png",
    circularLogo: "/Navi Logistics-Circular.png",
    favicon: "/Navi Logistics Favicon.png",
    heroGrid: "/grid.svg",
    ogImage: "/og-image.jpg",
  },
  company: {
    description:
      "Your trusted partner in logistics and supply chain solutions. Delivering excellence across India with speed, reliability, and care since 2016.",
    phonePrimary: "+91 98300 32732",
    phoneSecondary: "+91 83370 91474",
    email: "contact@navilogistics.in",
    inquiryRecipientEmail: "akcs1618@gmail.com",
    addressLine1: "146 Foreshore Road, Shibpur",
    addressLine2: "Howrah, West Bengal - 711101",
    address: {
      streetAddress: "146 Foreshore Road, Shibpur",
      locality: "Howrah",
      region: "West Bengal",
      postalCode: "711101",
      country: "IN",
    },
    geo: {
      latitude: "22.5718",
      longitude: "88.3339",
      position: "22.5718;88.3339",
      icbm: "22.5718, 88.3339",
    },
    openingHours: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 1:00 PM"],
    serviceAreasSummary:
      "Serving 23+ states including: West Bengal, Bihar, Jharkhand, Odisha, Assam, Uttar Pradesh, Rajasthan, Madhya Pradesh, Chhattisgarh, Gujarat, Maharashtra, Tamil Nadu, Karnataka, Telangana, Kerala & more across India.",
  },
  navigation: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "News", href: "/news" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ] satisfies LinkItem[],
  socialLinks: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/navilogistics",
      icon: Facebook,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/navilogistics",
      icon: Linkedin,
    },
  ] satisfies SocialLinkItem[],
  footer: {
    quickLinks: [
      { name: "About Us", href: "/about" },
      { name: "Our Services", href: "/services" },
      { name: "News & Updates", href: "/news" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
      { name: "Contact Us", href: "/contact" },
    ] satisfies LinkItem[],
    services: [
      { name: "3PL Services", href: "/services#3pl" },
      { name: "Express Delivery", href: "/services#express" },
      { name: "Warehousing", href: "/services#warehousing" },
      { name: "Full Truck Load", href: "/services#ftl" },
      { name: "Part Truck Load", href: "/services#ptl" },
      { name: "Air Freight", href: "/services#air-freight" },
    ] satisfies LinkItem[],
    serviceAreas: {
      "Eastern India": [
        "Howrah",
        "Kolkata",
        "Patna",
        "Ranchi",
        "Bhubaneswar",
        "Guwahati",
        "Siliguri",
      ],
      "North India": [
        "Delhi NCR",
        "Lucknow",
        "Kanpur",
        "Jaipur",
        "Chandigarh",
        "Noida",
        "Gurugram",
      ],
      "West India": [
        "Mumbai",
        "Pune",
        "Ahmedabad",
        "Surat",
        "Nagpur",
        "Indore",
        "Bhopal",
      ],
      "South India": [
        "Chennai",
        "Bengaluru",
        "Hyderabad",
        "Kochi",
        "Coimbatore",
        "Visakhapatnam",
      ],
    },
  },
  seo: {
    siteUrl: "https://navilogistics.in",
    title: {
      default:
        "Navi Logistics - Freight Shipping & Logistics Services in Howrah, Kolkata | West Bengal",
      template: "%s | Navi Logistics - Logistics Company in India",
    },
    description:
      "Navi Logistics - Leading logistics company in Howrah, West Bengal offering freight shipping, warehousing, supply chain management & express delivery across Kolkata, Asansol, Durgapur, Siliguri, Bihar, Jharkhand, Odisha, Delhi NCR & Pan India. Call +91 98300 32732.",
    keywords: [
      "Navi Logistics",
      "Navi Logistics Howrah",
      "Navi Logistics Kolkata",
      "logistics company",
      "freight shipping",
      "freight services",
      "warehousing services",
      "supply chain management",
      "transportation services",
      "express delivery",
      "cargo services",
      "truck transport",
      "air freight",
      "rail freight",
      "last mile delivery",
      "logistics in Howrah",
      "logistics in Kolkata",
      "logistics in Shibpur",
      "transport company Howrah",
      "freight services Kolkata",
      "logistics Asansol",
      "logistics Durgapur",
      "logistics Bardhaman",
      "logistics 24 Parganas",
      "logistics Hooghly",
      "logistics Siliguri",
      "logistics Kharagpur",
      "West Bengal logistics",
      "West Bengal transport",
      "logistics Bihar",
      "logistics Patna",
      "logistics Jharkhand",
      "logistics Ranchi",
      "logistics Jamshedpur",
      "logistics Odisha",
      "logistics Bhubaneswar",
      "logistics Cuttack",
      "logistics Assam",
      "logistics Guwahati",
      "logistics Sikkim",
      "logistics Gangtok",
      "logistics Delhi",
      "logistics Delhi NCR",
      "logistics Gurugram",
      "logistics Noida",
      "logistics Uttar Pradesh",
      "logistics Lucknow",
      "logistics Kanpur",
      "logistics Varanasi",
      "logistics Haryana",
      "logistics Madhya Pradesh",
      "logistics Bhopal",
      "logistics Indore",
      "logistics Chhattisgarh",
      "logistics Raipur",
      "logistics company India",
      "best logistics company",
      "reliable logistics partner",
      "affordable freight services",
      "same day delivery",
      "pan India logistics",
    ],
    openGraph: {
      title:
        "Navi Logistics - Best Logistics & Freight Company in Howrah, Kolkata",
      description:
        "Trusted logistics partner for freight shipping, warehousing & supply chain in West Bengal, Bihar, Jharkhand, Odisha, Delhi NCR & across India. Get a free quote today!",
      imageAlt: "Navi Logistics - Your Trusted Logistics Partner in India",
    },
    twitter: {
      title: "Navi Logistics - Freight & Logistics Services | Howrah, Kolkata",
      description:
        "Leading logistics company offering freight, warehousing & delivery services across India. Contact: +91 98300 32732",
    },
    jsonLd: {
      alternateName: "Navi Logistics Pvt Ltd",
      description:
        "Leading logistics and freight shipping company providing warehousing, supply chain management, and transportation services across India including West Bengal, Bihar, Jharkhand, Odisha, Assam, Delhi NCR, and more.",
      priceRange: "$$",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Credit Card, Bank Transfer, UPI",
      sameAs: [
        "https://www.linkedin.com/company/navilogistics",
        "https://www.facebook.com/navilogistics",
      ],
    },
  },
  routes: {
    main: [
      { route: "", priority: 1.0, changeFrequency: "weekly" as const },
      { route: "/about", priority: 0.9, changeFrequency: "monthly" as const },
      {
        route: "/services",
        priority: 0.95,
        changeFrequency: "weekly" as const,
      },
      { route: "/careers", priority: 0.7, changeFrequency: "weekly" as const },
      {
        route: "/contact",
        priority: 0.85,
        changeFrequency: "monthly" as const,
      },
      { route: "/news", priority: 0.6, changeFrequency: "weekly" as const },
      { route: "/blog", priority: 0.6, changeFrequency: "weekly" as const },
    ],
    serviceAnchors: [
      "/services#3pl",
      "/services#express",
      "/services#warehousing",
      "/services#ftl",
      "/services#ptl",
      "/services#speed-trucking",
      "/services#air-freight",
      "/services#rail",
    ],
  },
  home: {
    services: [
      {
        icon: Boxes,
        title: "3PL Services",
        description:
          "End-to-end third-party logistics including warehousing, fulfillment, and distribution management.",
        href: "/services#3pl",
        image:
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
      },
      {
        icon: Clock,
        title: "Express Delivery",
        description:
          "Time-critical shipments delivered with speed and precision across India.",
        href: "/services#express",
        image:
          "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=400&fit=crop",
      },
      {
        icon: Warehouse,
        title: "Warehousing",
        description:
          "State-of-the-art storage facilities with inventory management and fulfillment services.",
        href: "/services#warehousing",
        image:
          "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop",
      },
      {
        icon: Truck,
        title: "Full Truck Load",
        description:
          "Dedicated trucks for large shipments with direct routes and faster delivery times.",
        href: "/services#ftl",
        image:
          "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop",
      },
      {
        icon: Package,
        title: "Part Truck Load",
        description:
          "Cost-effective shared trucking solutions for smaller shipments across India.",
        href: "/services#ptl",
        image:
          "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&h=400&fit=crop",
      },
      {
        icon: Zap,
        title: "Speed Trucking",
        description:
          "Premium time-definite trucking for urgent cargo with guaranteed delivery windows.",
        href: "/services#speed-trucking",
        image:
          "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&h=400&fit=crop",
      },
      {
        icon: Plane,
        title: "Air Freight",
        description:
          "Fast and reliable domestic air cargo services for time-sensitive shipments.",
        href: "/services#air-freight",
        image:
          "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop",
      },
      {
        icon: Train,
        title: "Rail Freight",
        description:
          "Cost-effective rail transportation for bulk cargo across India's extensive rail network.",
        href: "/services#rail",
        image:
          "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&h=400&fit=crop",
      },
    ],
    stats: [
      { value: 9, suffix: "+", label: "Years Experience" },
      { value: 50, suffix: "K+", label: "Deliveries Monthly" },
      { value: 23, suffix: "+", label: "States Covered" },
      { value: 99.5, suffix: "%", label: "On-Time Delivery" },
    ],
    features: [
      { icon: Shield, text: "Fully Insured Shipments" },
      { icon: Clock, text: "24/7 Customer Support" },
      { icon: MapPin, text: "Real-Time Tracking" },
      { icon: CheckCircle, text: "Quality Guaranteed" },
    ],
    testimonials: [
      {
        name: "Rajesh Kumar",
        role: "CEO, TechCorp Industries",
        content:
          "Navi Logistics has transformed our supply chain. Their reliability and professionalism are unmatched.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      },
      {
        name: "Priya Patel",
        role: "Operations Manager, GlobalTrade",
        content:
          "We've been partners for 5 years. Their express delivery service is exceptional - always on time!",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
      },
      {
        name: "Amit Singh",
        role: "Founder, E-Commerce Plus",
        content:
          "The warehousing solutions helped us scale 3x. Professional team and cutting-edge technology.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      },
    ],
  },
  about: {
    stats: [
      { value: 9, suffix: "+", label: "Years of Experience" },
      { value: 500, suffix: "+", label: "Happy Clients" },
      { value: 100, suffix: "+", label: "Team Members" },
      { value: 23, suffix: "+", label: "States Covered" },
    ],
    values: [
      {
        icon: Award,
        title: "Excellence",
        description:
          "We strive for excellence in every shipment, every interaction, and every solution we deliver.",
      },
      {
        icon: Heart,
        title: "Integrity",
        description:
          "Honesty and transparency are the foundations of our relationships with clients and partners.",
      },
      {
        icon: Handshake,
        title: "Collaboration",
        description:
          "We work together with our clients, understanding their needs to deliver tailored solutions.",
      },
      {
        icon: Lightbulb,
        title: "Innovation",
        description:
          "Continuously improving our processes and technology to stay ahead of industry trends.",
      },
    ],
    milestones: [
      {
        year: "2016",
        title: "Foundation",
        description:
          "Started as SRS Logistics, building a strong foundation in regional transport in Howrah.",
      },
      {
        year: "2018",
        title: "Technology Upgrade",
        description:
          "Implemented real-time tracking and modern fleet management systems.",
      },
      {
        year: "2020",
        title: "Rebranding",
        description:
          "Evolved into Navi Logistics Pvt. Ltd., marking a shift towards modernization.",
      },
      {
        year: "2022",
        title: "Regional Expansion",
        description:
          "Expanded operations across West Bengal and Eastern India.",
      },
      {
        year: "2024",
        title: "Pan-India Network",
        description: "Established presence in 23+ states across India.",
      },
      {
        year: "2026",
        title: "Continued Growth",
        description:
          "Serving 500+ clients with 8 specialized logistics services.",
      },
    ],
    team: [
      {
        name: "Ram Vinay Sharma",
        role: "Director",
        bio: "With over 20 years of experience in the logistics industry, Mr. Sharma brings unparalleled expertise and strategic vision to Navi Logistics. His leadership has been pivotal in transitioning the company from a regional player to a national force.",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      },
      {
        name: "Rohit Kumar Sharma",
        role: "Logistics Consultant",
        bio: "With over 5 years of hands-on experience in logistics and specialized tax expertise from Ernst & Young, Rohit brings a unique multidisciplinary perspective to Navi Logistics.",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      },
      {
        name: "Saptarshi Sadhukhan",
        role: "Cluster Head",
        bio: "An experienced logistics professional with over 10 years of expertise. Has worked with Reinvent Agrochain, Pranik Logistics, Moeving Urban Tech, Mahindra Logistics, and Velocity Express.",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      },
    ],
  },
  servicesPage: {
    stats: [
      { value: 50, suffix: "K+", label: "Deliveries Monthly" },
      { value: 23, suffix: "+", label: "States Covered" },
      { value: 99.5, suffix: "%", label: "On-Time Rate" },
      { value: 24, suffix: "/7", label: "Support Available" },
    ],
    services: [
      {
        id: "3pl",
        icon: Boxes,
        title: "3PL Services",
        description:
          "End-to-end third-party logistics for seamless supply chain management.",
        image:
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop",
        features: [
          "Complete supply chain management",
          "Order fulfillment services",
          "Inventory optimization",
          "Distribution network management",
          "Returns processing",
          "Value-added services",
        ],
        details:
          "Our 3PL services provide comprehensive logistics solutions, allowing you to focus on your core business while we handle warehousing, fulfillment, and distribution across India.",
      },
      {
        id: "express",
        icon: Clock,
        title: "Express Delivery",
        description:
          "Time-critical deliveries with guaranteed speed and reliability.",
        image:
          "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=500&fit=crop",
        features: [
          "Same-day delivery options",
          "Next-day guaranteed service",
          "Time-definite deliveries",
          "Priority handling",
          "Real-time updates",
          "Proof of delivery",
        ],
        details:
          "When time is of the essence, our express delivery service ensures your shipments reach their destination with speed and precision across 23+ states in India.",
      },
      {
        id: "warehousing",
        icon: Warehouse,
        title: "Warehousing & Storage",
        description:
          "State-of-the-art warehousing facilities with advanced inventory management.",
        image:
          "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=500&fit=crop",
        features: [
          "Modern storage facilities",
          "Climate-controlled zones",
          "Real-time inventory tracking",
          "Pick and pack services",
          "Cross-docking solutions",
          "Kitting and assembly",
        ],
        details:
          "Our warehousing solutions are designed to optimize your supply chain. With strategically located facilities across India and advanced WMS, we ensure your inventory is always where you need it.",
      },
      {
        id: "ftl",
        icon: Truck,
        title: "Full Truck Load (FTL)",
        description: "Dedicated trucks for large shipments with direct routes.",
        image:
          "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=500&fit=crop",
        features: [
          "Dedicated vehicle allocation",
          "Direct point-to-point delivery",
          "Faster transit times",
          "Reduced handling damage",
          "GPS tracking for all shipments",
          "Flexible scheduling",
        ],
        details:
          "Our Full Truck Load services provide dedicated trucks for your large shipments, ensuring faster delivery with minimal handling across India's road network.",
      },
      {
        id: "ptl",
        icon: Package,
        title: "Part Truck Load (PTL)",
        description: "Cost-effective shared trucking for smaller shipments.",
        image:
          "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=500&fit=crop",
        features: [
          "Economical shipping rates",
          "Consolidated cargo handling",
          "Regular scheduled departures",
          "Hub-and-spoke network",
          "Tracking and visibility",
          "Flexible load sizes",
        ],
        details:
          "Part Truck Load service offers cost-effective shipping for smaller consignments by sharing truck space with other cargo, without compromising on reliability.",
      },
      {
        id: "speed-trucking",
        icon: Zap,
        title: "Speed Trucking",
        description: "Premium time-definite trucking for urgent cargo.",
        image:
          "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&h=500&fit=crop",
        features: [
          "Guaranteed delivery windows",
          "Priority route allocation",
          "24/7 operations",
          "Dedicated driver teams",
          "Real-time GPS tracking",
          "Premium handling",
        ],
        details:
          "Speed Trucking is our premium service for urgent cargo that requires guaranteed delivery times. We allocate the best routes and dedicated teams for your time-critical shipments.",
      },
      {
        id: "air-freight",
        icon: Plane,
        title: "Air Freight",
        description: "Fast and reliable domestic air cargo services.",
        image:
          "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=500&fit=crop",
        features: [
          "Domestic airport coverage",
          "Charter services available",
          "Dangerous goods handling",
          "Temperature-sensitive cargo",
          "Airport-to-door service",
          "Express air options",
        ],
        details:
          "Our air freight solutions connect you to cities across India with speed and reliability. We handle everything from documentation to delivery for your time-sensitive shipments.",
      },
      {
        id: "rail",
        icon: Train,
        title: "Rail Freight",
        description: "Cost-effective rail transportation for bulk cargo.",
        image:
          "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&h=500&fit=crop",
        features: [
          "Container rail services",
          "Bulk cargo handling",
          "Pan-India rail network",
          "Multi-modal integration",
          "Cost-effective for bulk",
          "Eco-friendly transport",
        ],
        details:
          "Leverage India's extensive rail network for cost-effective transportation of bulk cargo. Our rail freight services offer an eco-friendly alternative for long-distance shipping.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Consult",
        description: "Discuss your logistics needs with our experts",
      },
      {
        step: "02",
        title: "Plan",
        description: "Develop a customized logistics strategy",
      },
      {
        step: "03",
        title: "Execute",
        description: "Implement the solution with precision",
      },
      {
        step: "04",
        title: "Monitor",
        description: "Track and optimize performance continuously",
      },
    ],
    industries: [
      {
        icon: ShoppingCart,
        name: "E-Commerce",
        description: "Fast fulfillment for online retailers",
      },
      {
        icon: Pill,
        name: "Healthcare",
        description: "Temperature-controlled pharma logistics",
      },
      {
        icon: Building,
        name: "Manufacturing",
        description: "Industrial supply chain solutions",
      },
      {
        icon: Laptop,
        name: "Technology",
        description: "Secure handling for electronics",
      },
      {
        icon: Utensils,
        name: "Food & Beverage",
        description: "Cold chain logistics solutions",
      },
      {
        icon: Car,
        name: "Automotive",
        description: "Just-in-time delivery for manufacturers",
      },
    ],
  },
  contactPage: {
    contactInfo: [
      {
        icon: MapPin,
        title: "Visit Us",
        details: [
          "146 Foreshore Road, Shibpur",
          "Howrah (West Bengal) - 711101",
        ],
      },
      {
        icon: Phone,
        title: "Call Us",
        details: ["+91 98300 32732", "+91 83370 91474"],
      },
      {
        icon: Mail,
        title: "Email Us",
        details: ["contact@navilogistics.in"],
      },
      {
        icon: Clock,
        title: "Working Hours",
        details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 1:00 PM"],
      },
    ],
    serviceOptions: [
      { value: "3pl", label: "3PL Services" },
      { value: "express-delivery", label: "Express Delivery" },
      { value: "warehousing", label: "Warehousing" },
      { value: "ftl", label: "Full Truck Load (FTL)" },
      { value: "ptl", label: "Part Truck Load (PTL)" },
      { value: "speed-trucking", label: "Speed Trucking" },
      { value: "air-freight", label: "Air Freight" },
      { value: "rail-freight", label: "Rail Freight" },
      { value: "other", label: "Other" },
    ],
    faqs: [
      {
        question: "How can I track my shipment?",
        answer:
          "You can track your shipment using the tracking number provided in your confirmation email through our online tracking portal.",
      },
      {
        question: "What areas do you service?",
        answer:
          "We provide services across India, covering 23+ states including North, South, East, West, and North East regions.",
      },
      {
        question: "How do I get a quote?",
        answer:
          "Fill out the contact form above or call us directly. Our team will provide a customized quote within 24 hours.",
      },
      {
        question: "Do you offer insurance for shipments?",
        answer:
          "Yes, we offer comprehensive cargo insurance options for all shipments. Ask our team for details.",
      },
    ],
  },
  careersPage: {
    benefits: [
      {
        icon: Heart,
        title: "Health & Wellness",
        description:
          "Comprehensive health insurance for you and your family, plus wellness programs.",
      },
      {
        icon: GraduationCap,
        title: "Learning & Development",
        description:
          "Continuous learning opportunities, training programs, and career growth paths.",
      },
      {
        icon: Clock,
        title: "Work-Life Balance",
        description:
          "Flexible working hours, remote work options, and generous leave policies.",
      },
      {
        icon: Users,
        title: "Great Culture",
        description:
          "Collaborative environment, team events, and a supportive community.",
      },
      {
        icon: Dumbbell,
        title: "Fitness Benefits",
        description:
          "Gym memberships, fitness challenges, and wellness allowances.",
      },
      {
        icon: Plane,
        title: "Travel Perks",
        description:
          "Travel allowances, company trips, and relocation assistance.",
      },
    ],
    testimonials: [
      {
        name: "Rahul Verma",
        role: "Senior Logistics Manager",
        content:
          "Working at Navi Logistics has been an incredible journey. The growth opportunities and supportive team make it a great place to build a career.",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        years: "4 years at Navi",
      },
      {
        name: "Anita Sharma",
        role: "Operations Coordinator",
        content:
          "The work-life balance here is exceptional. I love how the company invests in employee development and values our contributions.",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
        years: "2 years at Navi",
      },
      {
        name: "Vikram Singh",
        role: "Fleet Manager",
        content:
          "The technology and innovation here keep me motivated. Every day brings new challenges and opportunities to learn.",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        years: "5 years at Navi",
      },
    ],
    positions: [
      {
        title: "Senior Logistics Manager",
        department: "Operations",
        location: "Howrah, WB",
        type: "Full-time",
      },
      {
        title: "Fleet Operations Coordinator",
        department: "Fleet Management",
        location: "Mumbai, MH",
        type: "Full-time",
      },
      {
        title: "Warehouse Supervisor",
        department: "Warehousing",
        location: "Delhi, NCR",
        type: "Full-time",
      },
      {
        title: "Customer Success Manager",
        department: "Customer Service",
        location: "Bangalore, KA",
        type: "Full-time",
      },
      {
        title: "Software Engineer",
        department: "Technology",
        location: "Remote",
        type: "Full-time",
      },
      {
        title: "Data Analyst",
        department: "Analytics",
        location: "Howrah, WB",
        type: "Full-time",
      },
    ],
    stats: [
      { value: 1000, suffix: "+", label: "Employees" },
      { value: 50, suffix: "+", label: "Cities" },
      { value: 4.8, suffix: "/5", label: "Employee Rating" },
      { value: 95, suffix: "%", label: "Retention Rate" },
    ],
  },
  newsPage: {
    categories: [
      "All News",
      "Company Updates",
      "Industry News",
      "Partnerships",
      "Sustainability",
    ],
    featuredNews: newsArticles.filter((article) => article.featured),
    news: newsArticles.filter((article) => !article.featured),
  },
  blogPage: {
    categories: [
      "All Posts",
      "Supply Chain",
      "Technology",
      "Industry Trends",
      "Best Practices",
      "Case Studies",
    ],
    featuredPosts: blogPosts.filter((post) => post.featured),
    posts: blogPosts.filter((post) => !post.featured),
  },
  privacyPage: {
    sections: [
      {
        icon: Database,
        title: "1. Information We Collect",
        content:
          "At Navi Logistics, we collect information that you provide directly to us to ensure seamless logistics services:",
        list: [
          "Personal details: Name, email address, phone number",
          "Business information: Company name, GST number, addresses",
          "Shipping details: Pickup and delivery addresses, package information",
          "Payment data: Billing address, transaction history",
          "Communication records: Support tickets, feedback, correspondence",
        ],
      },
      {
        icon: Target,
        title: "2. How We Use Your Information",
        content:
          "We use the information we collect for the following purposes:",
        list: [
          "Process and fulfill your logistics orders efficiently",
          "Provide real-time tracking and delivery updates",
          "Communicate about services, promotions, and important updates",
          "Provide responsive customer support",
          "Improve our services and develop new features",
          "Ensure compliance with legal and regulatory obligations",
        ],
      },
      {
        icon: Share2,
        title: "3. Information Sharing",
        content:
          "We may share your information with trusted partners only when necessary:",
        list: [
          "Delivery partners and carriers for order fulfillment",
          "Payment processors for secure transaction processing",
          "Warehousing partners for storage services",
          "Government authorities when required by law",
        ],
        note: "We never sell your personal information to third parties for marketing purposes.",
      },
      {
        icon: Lock,
        title: "4. Data Security",
        content:
          "We implement robust security measures to protect your personal information including: SSL encryption for all data transmissions, secure servers with regular security audits, access controls limiting data access to authorized personnel only, and regular security training for our staff. While we strive to protect your information, no method of transmission over the Internet is 100% secure.",
      },
      {
        icon: UserCog,
        title: "5. Your Rights",
        content: "You have the following rights regarding your personal data:",
        list: [
          "Access: Request a copy of your personal information",
          "Correction: Update or correct inaccurate data",
          "Deletion: Request deletion of your data (subject to legal requirements)",
          "Portability: Receive your data in a structured format",
          "Opt-out: Unsubscribe from marketing communications anytime",
          "Complaint: Lodge a complaint with relevant data protection authorities",
        ],
      },
      {
        icon: Cookie,
        title: "6. Cookies & Tracking",
        content:
          "Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can manage cookie preferences through your browser settings. Essential cookies are required for site functionality, while analytics and marketing cookies can be disabled. We use Google Analytics to understand how visitors interact with our website.",
      },
      {
        icon: RefreshCw,
        title: "7. Policy Updates",
        content:
          "We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. When we make significant changes, we will notify you via email or prominent notice on our website. We encourage you to review this policy periodically. Your continued use of our services after changes indicates your acceptance of the updated policy.",
      },
    ],
  },
  termsPage: {
    sections: [
      {
        icon: FileText,
        title: "1. Acceptance of Terms",
        content:
          'By accessing and using the services provided by Navi Logistics ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.',
      },
      {
        icon: Truck,
        title: "2. Our Services",
        content:
          "Navi Logistics provides comprehensive logistics and transportation services including:",
        list: [
          "Freight shipping (Full Truck Load & Less Than Truck Load)",
          "Warehousing and storage solutions",
          "Supply chain management",
          "Express delivery services",
          "Air and rail freight",
          "Last mile delivery",
        ],
      },
      {
        icon: Users,
        title: "3. User Responsibilities",
        content: "When using our services, you agree to:",
        list: [
          "Provide accurate and complete information for shipments",
          "Properly package and label all goods as per guidelines",
          "Comply with all applicable laws and regulations",
          "Not ship prohibited or restricted items",
          "Pay all applicable fees and charges on time",
          "Maintain valid contact information for delivery updates",
        ],
      },
      {
        icon: Shield,
        title: "4. Liability & Insurance",
        content:
          "While we take utmost care in handling your shipments, our liability is limited as per industry standards and applicable laws. We strongly recommend customers obtain appropriate insurance coverage for valuable shipments. Claims must be filed within 7 days of delivery for visible damage and 14 days for concealed damage.",
      },
      {
        icon: CreditCard,
        title: "5. Payment Terms",
        content:
          "Payment terms are agreed upon at the time of service booking. We accept various payment methods including bank transfer, credit cards, and UPI. Invoices are due within 30 days unless otherwise agreed. Late payments may incur additional charges at 1.5% per month.",
      },
      {
        icon: XCircle,
        title: "6. Cancellation Policy",
        content:
          "Cancellation policies vary based on the type of service booked. For standard shipments, cancellation before pickup is free of charge. Cancellation after pickup may incur fees based on distance covered. Express services may have different terms. Please contact our customer service team for specific cancellation terms.",
      },
      {
        icon: Scale,
        title: "7. Dispute Resolution",
        content:
          "Any disputes arising from these terms or our services shall be resolved through arbitration in Howrah, West Bengal, India, in accordance with the Arbitration and Conciliation Act, 1996. The language of arbitration shall be English. Courts in Howrah shall have exclusive jurisdiction.",
      },
      {
        icon: RefreshCw,
        title: "8. Changes to Terms",
        content:
          "We reserve the right to modify these terms at any time. Material changes will be notified via email or website announcement. Continued use of our services after changes constitutes acceptance of the modified terms. We encourage you to review these terms periodically.",
      },
    ],
  },
} as const;

export const getNewsArticleBySlug = (slug: string) =>
  newsArticles.find((article) => article.slug === slug);

export const getBlogPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);
