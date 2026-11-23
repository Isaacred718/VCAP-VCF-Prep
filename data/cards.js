// Flashcards (Leitner spaced repetition). Contract: schemas/cards.schema.json.
// domain + front must be unique. Target per domain: 12
const CARDS = [
  {
    "domain": "vSAN and Storage",
    "front": "vSAN ESA vs OSA: the core architectural difference",
    "back": "ESA is a single-tier architecture on NVMe devices (no cache/capacity tiers, snapshot and compression built for performance). OSA uses a cache tier plus capacity tier per disk group."
  },
  {
    "domain": "vSAN and Storage",
    "front": "What does the vSAN witness host store in a stretched cluster?",
    "back": "Only witness components (metadata) for objects. It stores no VM data and must sit in a third fault domain, separate from both data sites."
  },
  {
    "domain": "vSAN and Storage",
    "front": "vSAN HCI Mesh (cross-cluster capacity sharing)",
    "back": "Lets one vSAN cluster mount another cluster's vSAN datastore and consume its free capacity, without contributing local storage. The mounting cluster is the client; the owner is the server cluster."
  },
  {
    "domain": "vSAN and Storage",
    "front": "FTT=2 with RAID-6: minimum hosts and fragment layout",
    "back": "Six hosts minimum. Data is split into 4 data fragments + 2 parity fragments (erasure coding), tolerating two host failures with less overhead than RAID-1 mirroring."
  },
  {
    "domain": "vSAN and Storage",
    "front": "vSAN maintenance mode: the three data options",
    "back": "Ensure accessibility (default; only enough migration to keep objects available), Full data migration (evacuate everything; use when a host leaves permanently), No data migration (risky; for temporary shutdowns)."
  },
  {
    "domain": "vSAN and Storage",
    "front": "Why does vSAN delay component rebuilds after a host goes absent?",
    "back": "The resync delay (default 60 minutes) avoids an expensive full rebuild when a host is only rebooting or briefly disconnected. Rebuilds start once the absence looks permanent."
  },
  {
    "domain": "vSAN and Storage",
    "front": "vSAN Data Protection in one line",
    "back": "Snapshot-based local protection for VM protection groups using native vSAN snapshots, with immutable snapshots for ransomware recovery and optional replication to another vSAN cluster."
  },
  {
    "domain": "vSAN and Storage",
    "front": "What does a vSAN storage policy actually control?",
    "back": "Per-VM (per-object) placement and resilience: failures to tolerate and method (mirroring vs erasure coding), plus features like encryption and space efficiency. Non-compliance means the object's current layout no longer matches the policy."
  },
  {
    "domain": "vSphere Administration",
    "front": "Shares, limits, reservations: the one-line distinction",
    "back": "Shares set relative priority only under contention. A reservation guarantees a minimum allocation. A limit caps maximum consumption, even if the host is idle."
  },
  {
    "domain": "vSphere Administration",
    "front": "What happens when you take a VM snapshot?",
    "back": "The base disk becomes read-only and all new writes go to a delta (child) disk. Memory and device state can be captured too. Consolidation merges deltas back. A snapshot is a point-in-time restore aid, not a backup."
  },
  {
    "domain": "vSphere Administration",
    "front": "Template vs clone vs customization specification",
    "back": "A template is a protected golden image you deploy from but never power on. A clone is a one-off copy. A customization specification applies guest identity (hostname, domain, network, Sysprep/cloud-init) during deployment from either."
  },
  {
    "domain": "vSphere Administration",
    "front": "Thin vs thick provisioning (lazy and eager zeroed)",
    "back": "Thin grows on first write and allows overcommit. Thick lazy zeroed allocates all space, zeroing on first write. Thick eager zeroed allocates and zeroes up front: slowest to create, best first-write latency."
  },
  {
    "domain": "vSphere Administration",
    "front": "ESX memory reclamation order under pressure",
    "back": "Transparent page sharing first (background), then ballooning via the guest driver, then memory compression, and finally host-level swapping to .vswp, the harshest and last resort."
  },
  {
    "domain": "vSphere Administration",
    "front": "High CPU ready (%RDY) means what, and the usual fix?",
    "back": "The VM is ready to run but waits for physical CPU. On oversized VMs (too many vCPUs for the host's contention level), reducing vCPU count usually lowers ready time and improves performance."
  },
  {
    "domain": "vSphere Administration",
    "front": "How do vCenter permissions scope?",
    "back": "A role is assigned to a user or group on an inventory object and, by default, propagates to child objects. Folder-level assignment is the standard way to scope a team to just its VMs."
  },
  {
    "domain": "vSphere Administration",
    "front": "Prerequisites for VM encryption",
    "back": "A key provider (external KMS or the built-in native key provider) trusted by vCenter, plus an encryption storage policy applied to the VM. vSphere Trust Authority extends this with host attestation for trusted environments."
  },
  {
    "domain": "Provider Management",
    "front": "Role of the VCF Identity Broker",
    "back": "The federated identity layer for VCF: it brokers the enterprise IdP (OIDC/SAML) to VCF components and portals, including the Provider Management portal and VCF SSO."
  },
  {
    "domain": "Provider Management",
    "front": "Provider content library: purpose",
    "back": "The provider-level distribution point for governed content (images, templates, blueprints) authored once by the provider and shared to organizations so all tenants consume identical items."
  },
  {
    "domain": "Provider Management",
    "front": "Provider roles vs organization roles",
    "back": "Provider roles administer the platform itself (organizations, shared content, provider settings). Organization and project roles govern tenant workloads inside one organization."
  },
  {
    "domain": "Provider Management",
    "front": "What is a blueprint in VCF Automation?",
    "back": "A reusable, governed deployment design (infrastructure plus application topology) that consumers request; providers can author and share blueprints so tenants deploy consistently without editing internals."
  },
  {
    "domain": "Provider Management",
    "front": "Provider Consumption Organization (PCO)",
    "back": "The provider's own consumption organization in VCF Automation. It lets the provider consume its platform the way a tenant does and host provider-managed offerings and shared services."
  },
  {
    "domain": "Provider Management",
    "front": "Provider IdP configuration scope",
    "back": "Identity federation for the Provider Management portal is configured for the provider scope separately from any organization's own IdP configuration; one does not complete the other."
  },
  {
    "domain": "Provider Management",
    "front": "Who can create and manage organizations?",
    "back": "Provider administrators, from the Provider Management portal. Organization administrators then manage users, projects and policies inside their own organization only."
  },
  {
    "domain": "Provider Management",
    "front": "Provider access control: where it is set",
    "back": "In the Provider Management portal's access control settings: provider users/groups from the federated IdP are mapped to provider roles that define platform-wide permissions."
  },
  {
    "domain": "VCF All Apps Tenancy",
    "front": "Can each All Apps organization use its own IdP?",
    "back": "Yes. An organization can federate its own corporate identity provider, independent of the provider's IdP, so its users sign in with their own corporate credentials."
  },
  {
    "domain": "VCF All Apps Tenancy",
    "front": "What is a project in an All Apps organization?",
    "back": "The tenancy workspace for a team or application: it groups members, their deployments, and the governance policies that apply, scoping access to just that project's resources."
  },
  {
    "domain": "VCF All Apps Tenancy",
    "front": "Governance policies: what do they enforce?",
    "back": "Controls on deployments within their scope, such as approval requirements, lease durations, deployment limits and resource constraints, applied at organization or project level."
  },
  {
    "domain": "VCF All Apps Tenancy",
    "front": "Namespace class: what it defines",
    "back": "The preset shape of a Supervisor namespace a project can request: resource limits (CPU, memory, storage) and characteristics, so namespaces are consistent, pre-sized units."
  },
  {
    "domain": "VCF All Apps Tenancy",
    "front": "VPC connectivity profile: what it governs",
    "back": "How an organization's VPCs connect outward: transit attachment, egress pattern and NAT behavior, applied consistently to the VPCs created under that profile."
  },
  {
    "domain": "VCF All Apps Tenancy",
    "front": "Organization access control layers",
    "back": "Organization-level roles span the whole org; project-level roles scope a user to one project. A user who deploys in a single project needs only the project role."
  },
  {
    "domain": "VCF All Apps Tenancy",
    "front": "Organization vs project: the boundary",
    "back": "The organization is the tenant boundary (identity, quotas, shared services). Projects subdivide it into team workspaces with their own members, deployments and policies."
  },
  {
    "domain": "VCF All Apps Tenancy",
    "front": "What lives in an organization's VPC?",
    "back": "The tenant's private networking: subnets for workloads, built-in routing, and connectivity/NAT per the assigned connectivity profile, isolated from other organizations."
  },
  {
    "domain": "Supervisor and VKS",
    "front": "Supervisor networking options",
    "back": "NSX networking (segments or NSX VPCs, NSX load balancing) or vSphere Distributed Switch networking with Avi Load Balancer or HAProxy for the Kubernetes API and services."
  },
  {
    "domain": "Supervisor and VKS",
    "front": "Three-zone (zonal) Supervisor",
    "back": "The Supervisor control plane is deployed across three vSphere clusters acting as zones, so losing one zone does not take down the Supervisor; namespaces and VKS clusters can span zones."
  },
  {
    "domain": "Supervisor and VKS",
    "front": "Harbor as a Supervisor add-on",
    "back": "An integrated private container registry for the Supervisor/VKS environment, with image vulnerability scanning, signing and replication, installed as a Supervisor add-on service."
  },
  {
    "domain": "Supervisor and VKS",
    "front": "How VKS cluster upgrades work",
    "back": "Rolling updates: after changing the target Kubernetes version, control plane and worker nodes are progressively replaced with new-version nodes, keeping workloads available throughout."
  },
  {
    "domain": "Supervisor and VKS",
    "front": "Registry secret (image pull secret)",
    "back": "Credentials stored in a namespace that let VKS workloads pull images from a private registry; associated with the cluster's service accounts or workloads that need them."
  },
  {
    "domain": "Supervisor and VKS",
    "front": "Standard packages and package repositories",
    "back": "VKS/Supervisor add-on software (Carvel packages) is distributed through package repositories; clusters install packages such as cert-manager or external-dns from the standard repository or private ones."
  },
  {
    "domain": "Supervisor and VKS",
    "front": "Supervisor upgrade path",
    "back": "Upgraded through vCenter's workload management, which updates the Supervisor control plane and platform components; VKS clusters then upgrade independently on their own schedule."
  },
  {
    "domain": "Supervisor and VKS",
    "front": "Supervisor add-on services: examples",
    "back": "Harbor (registry), external-dns, cert-manager, Contour (ingress) and similar platform services installed onto the Supervisor to serve VKS workloads."
  },
  {
    "domain": "VCF Operations",
    "front": "Reclamation vs rightsizing",
    "back": "Reclamation finds waste to delete (powered-off/idle VMs, old snapshots, orphaned disks) and the capacity it frees. Rightsizing changes allocations: shrink oversized VMs, grow undersized ones, based on observed demand."
  },
  {
    "domain": "VCF Operations",
    "front": "What-if scenarios answer which questions?",
    "back": "Capacity what-ifs: what happens if we add these VMs or these hosts? Combined with the capacity forecast (time remaining), they show whether planned growth fits and when resources run out."
  },
  {
    "domain": "VCF Operations",
    "front": "Cost drivers vs pricing policies",
    "back": "Cost drivers are the real cost inputs (licensing, hardware, labor, facilities) feeding the cost engine. Pricing policies shape the rates shown or charged to consumers for showback/chargeback."
  },
  {
    "domain": "VCF Operations",
    "front": "How VCF Operations policies layer",
    "back": "A base policy sets defaults; child policies override settings for specific object groups (for example production clusters), and precedence decides which policy wins for a given object."
  },
  {
    "domain": "VCF Operations",
    "front": "Business intent vs operational intent",
    "back": "Business intent: placement rules from business needs (licensing, affinity, compliance). Operational intent: how the platform should run workloads (consolidate for efficiency or balance for performance). Workload optimization honors both."
  },
  {
    "domain": "VCF Operations",
    "front": "Business application in VCF Operations",
    "back": "A monitored grouping of the objects forming an application, organized in tiers, with rolled-up health and availability for the application as a whole."
  },
  {
    "domain": "VCF Operations",
    "front": "Anatomy of an alert",
    "back": "Symptom definitions (conditions on metrics, properties or messages) that, when triggered, fire the alert with its recommendations and any configured actions or outbound notifications."
  },
  {
    "domain": "VCF Operations",
    "front": "Views, dashboards, reports: the chain",
    "back": "Views present collected data in a form (lists, trends, distributions). Dashboards arrange widgets for live use. Reports package views/dashboards into documents that can be scheduled and emailed."
  },
  {
    "domain": "Fleet Management",
    "front": "Fleet lifecycle upgrade flow",
    "back": "Stage bundles in the depot, run compatibility and pre-checks, then apply upgrades in the validated component sequence, verifying health between steps. Failed pre-checks block the run until remediated."
  },
  {
    "domain": "Fleet Management",
    "front": "What VCF SSO changes for users",
    "back": "One federated sign-in (via VCF Identity Broker and the enterprise IdP) across fleet components such as VCF Operations, VCF Automation and vCenter, while each component still enforces its own role-based permissions."
  },
  {
    "domain": "Fleet Management",
    "front": "Configuration drift (VCF Operations Config Drift)",
    "back": "Compares fleet component configurations against defined baselines and reports deviations, so unauthorized or accidental changes are detected and can be remediated or acknowledged."
  },
  {
    "domain": "Fleet Management",
    "front": "Scaling a VCF fleet",
    "back": "Deploy the additional instance or components, then onboard them into fleet management so lifecycle baselines, upgrades, SSO and drift monitoring apply uniformly across the fleet."
  },
  {
    "domain": "Fleet Management",
    "front": "Air-gapped lifecycle updates",
    "back": "Bundles are brought into the fleet's depot with the bundle transfer tooling (no direct internet), then the normal pre-check and sequenced upgrade process runs from the depot."
  },
  {
    "domain": "Fleet Management",
    "front": "What fleet management centralizes",
    "back": "Lifecycle (upgrades/patches), identity and SSO, certificate and password management, configuration baselines and drift, across all instances and components of the VCF fleet."
  },
  {
    "domain": "Fleet Management",
    "front": "Why pre-checks gate a fleet upgrade",
    "back": "They validate version compatibility, health, capacity and prerequisites in the required upgrade order, catching issues while rollback is still trivial instead of mid-upgrade."
  },
  {
    "domain": "Fleet Management",
    "front": "Drift baseline: what it captures",
    "back": "The expected configuration state of fleet components (settings and versions) against which actual configurations are continuously compared."
  },
  {
    "domain": "VMware NSX",
    "front": "Tier-0 vs Tier-1 gateways",
    "back": "Tier-0 connects the overlay to the physical network (BGP/OSPF, ECMP) and is provider-managed. Tier-1 serves tenants/segments, attaches upward to a Tier-0, and hosts stateful services when linked to an Edge cluster."
  },
  {
    "domain": "VMware NSX",
    "front": "What is a VRF gateway in NSX?",
    "back": "A Tier-0 VRF creates an isolated routing instance per tenant on a shared Tier-0, with its own routing table and interfaces, inheriting the parent Tier-0's uplinks and Edge nodes."
  },
  {
    "domain": "VMware NSX",
    "front": "GENEVE and TEPs",
    "back": "Overlay traffic between transport nodes is encapsulated in GENEVE and carried between Tunnel Endpoints (TEPs): IP addresses on hosts and Edge nodes that terminate the tunnels."
  },
  {
    "domain": "VMware NSX",
    "front": "NSX Federation components",
    "back": "A Global Manager coordinates Local Managers across sites for stretched objects and central policy; inter-site overlay traffic runs between Edge RTEPs (remote tunnel endpoints)."
  },
  {
    "domain": "VMware NSX",
    "front": "NSX VPC in one line",
    "back": "A tenant-scoped private cloud network: its own subnets (private/public), built-in distributed routing and default outbound NAT, consumed simply without managing Tier-0/Tier-1 constructs."
  },
  {
    "domain": "VMware NSX",
    "front": "NSX DHCP options (three)",
    "back": "Gateway DHCP server (on the gateway's service router), local DHCP server defined on the segment, or DHCP relay forwarding requests to external DHCP servers."
  },
  {
    "domain": "VMware NSX",
    "front": "SNAT vs DNAT vs reflexive NAT",
    "back": "SNAT rewrites source (many internal to one external, outbound). DNAT rewrites destination (publish an internal service). Reflexive (stateless) NAT applies matching rules in both directions, used for VPC default egress."
  },
  {
    "domain": "VMware NSX",
    "front": "When does a Tier-1 need an Edge cluster?",
    "back": "When it must run stateful or centralized services: NAT, load balancing, DHCP server, gateway firewall. A Tier-1 without an Edge link is distributed-only (routing and distributed firewall)."
  }
];
