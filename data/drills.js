// Scenario drills. Contract: schemas/drills.schema.json.
// Target count: 12
const DRILLS = [
  {
    "duty": "A",
    "task": "A7",
    "scenario": "A vSAN host suffered a failed capacity device. The replacement part arrives in five days. The cluster still meets its storage policies, but capacity is tight and the business cannot risk object unavailability if a second failure lands during the wait.",
    "question": "What is the safest immediate action?",
    "options": [
      "Change every storage policy in the cluster to FTT=0 for the duration of the wait, so the reduced redundancy stops consuming capacity",
      "Leave the host in the cluster and monitor health closely, keeping its surviving components in service while the part is in transit",
      "Put the host into maintenance mode using the No data migration option and leave it there until the replacement part has been installed",
      "Remove the host from the cluster immediately and rebuild it from scratch once the replacement capacity device has been installed"
    ],
    "correct": 1,
    "explanation": "The host's surviving components still hold needed data. Removing it or evacuating without capacity headroom risks non-compliance; monitoring with the host in place preserves redundancy while the part is in transit."
  },
  {
    "duty": "A",
    "task": "A2",
    "scenario": "A stretched vSAN cluster loses the inter-site link. Both data sites are up and each believes the other may be down. VMs must keep running on exactly one side.",
    "question": "What decides which site keeps the VMs running?",
    "options": [
      "The witness breaks the tie: the site that can still reach the witness forms the surviving partition and keeps the VMs",
      "The site whose virtual machines were powered on first keeps them, and the other site suspends its copies until reconnect",
      "Both sites keep every VM running independently until the link returns, then reconcile the two copies of each disk",
      "The site with more running hosts wins automatically and takes ownership of all of the stretched cluster's objects"
    ],
    "correct": 0,
    "explanation": "The witness acts as tiebreaker. The partition that retains witness quorum keeps the objects available; the isolated site loses access rather than risking split-brain divergence."
  },
  {
    "duty": "B",
    "task": "B1",
    "scenario": "Before a risky application upgrade, a VM owner asks for 'a backup we can roll back in minutes if it goes wrong, kept for the weekend only.' The change window is tonight.",
    "question": "Which approach fits the request?",
    "options": [
      "Run a full image backup job tonight and plan on a complete restore of the VM if the application upgrade goes wrong",
      "Take a VM snapshot before the upgrade, keep it only for the validation window, and delete it once the weekend passes",
      "Export the VM to an OVF package on a file share and re-import it over the original if the upgrade has to be reversed",
      "Clone the VM before the upgrade and keep the clone powered off as a cold spare that can replace the original if needed"
    ],
    "correct": 1,
    "explanation": "A short-lived snapshot is exactly the fast rollback mechanism requested. The key discipline is deleting it after validation, not letting it age into a problem."
  },
  {
    "duty": "B",
    "task": "B2",
    "scenario": "A shared host runs a latency-sensitive trading VM and several batch VMs. At peak, the trading VM stutters even though it has the highest shares. The host is saturated for a few minutes each hour.",
    "question": "Which change actually guarantees the trading VM its CPU at peak?",
    "options": [
      "Lower the batch VMs' limits to zero",
      "Set CPU affinity to the fastest cores",
      "Raise its shares further above the batch VMs",
      "Set a CPU reservation equal to its peak requirement"
    ],
    "correct": 3,
    "explanation": "Shares only divide contention proportionally; they guarantee nothing. A reservation is the mechanism that guarantees the allocation when the host is saturated."
  },
  {
    "duty": "C",
    "task": "C5",
    "scenario": "The provider team wants to offer a managed Kubernetes service to tenants and needs somewhere to run the provider-side control components, consuming its own platform like a tenant would.",
    "question": "What should be enabled and configured?",
    "options": [
      "A provider content library with cluster templates",
      "A new tenant organization with provider branding",
      "The Provider Consumption Organization (PCO)",
      "A separate VCF instance dedicated to the provider"
    ],
    "correct": 2,
    "explanation": "The PCO exists for exactly this: the provider consumes its own platform through an organization, hosting provider-managed offerings and shared services."
  },
  {
    "duty": "D",
    "task": "D4",
    "scenario": "A tenant organization discovers a junior engineer deployed a 64-vCPU VM in production without review. Leadership wants large deployments blocked until a manager approves them.",
    "question": "Which control prevents a repeat?",
    "options": [
      "A reduction of every namespace class size in the organization, so no project can request resources above the new preset limits",
      "Removal of the engineer's organization-level role, leaving them able to work only through tickets filed with the platform team",
      "An alert in VCF Operations that emails the engineering managers whenever an unusually large VM appears anywhere in the organization",
      "A governance approval policy on the project that intercepts deployments above a defined size threshold and routes them for approval"
    ],
    "correct": 3,
    "explanation": "Governance policies act before allocation: an approval policy scoped to the project intercepts oversized deployment requests and routes them for approval."
  },
  {
    "duty": "E",
    "task": "E3",
    "scenario": "A VKS cluster runs a payment API that cannot tolerate downtime. A Kubernetes security update requires moving the cluster from version 1.29 to 1.30.",
    "question": "How should the upgrade be executed?",
    "options": [
      "Trigger the version change and let the rolling update progressively replace control plane and worker nodes",
      "Snapshot every node first, then upgrade all of them simultaneously so the cluster spends the least time in transition",
      "Connect to each worker node in turn and upgrade its Kubernetes components in place while it keeps serving traffic",
      "Delete the cluster and redeploy it at the new version during a scheduled maintenance window with the API offline"
    ],
    "correct": 0,
    "explanation": "VKS upgrades are rolling: control plane, then workers are replaced node by node with the new version, so the API keeps serving throughout."
  },
  {
    "duty": "F",
    "task": "F7",
    "scenario": "After enabling workload optimization, an admin notices license-restricted database VMs were moved off their designated hosts during an overnight rebalance, creating a compliance problem.",
    "question": "Which setting was missing?",
    "options": [
      "An alert definition that notifies the platform team by email whenever a licensed VM is migrated to another host",
      "A rightsizing exclusion that kept the database VMs out of every optimization recommendation the platform generated",
      "A higher operational intent weighting for performance, which would have kept the VMs on the fastest available hosts",
      "Business intent placement rules pinning the licensed VMs to their designated host group during optimization runs"
    ],
    "correct": 3,
    "explanation": "Placement constraints driven by licensing are business intent. Without them, the optimizer followed only operational intent (balance/consolidate) and moved the VMs."
  },
  {
    "duty": "F",
    "task": "F4",
    "scenario": "A CIO asks: 'If sales adds 200 VMs next quarter, do we need more hosts, and when exactly does the production cluster run dry at current growth?'",
    "question": "Which VCF Operations workflow answers her?",
    "options": [
      "Build a what-if scenario that adds the 200 VMs, and read the capacity forecast's time-remaining projection",
      "Create a business application representing the sales workloads so their growth appears on the capacity dashboard",
      "Run the reclamation workflow first, then read the cluster's monthly cost report to estimate the hardware budget",
      "Export the cluster's performance charts for the last 90 days and extrapolate the growth trend in a spreadsheet"
    ],
    "correct": 0,
    "explanation": "What-if analysis models the added workload against the capacity engine, and the forecast projects when resources exhaust under current growth. Together they answer both halves."
  },
  {
    "duty": "G",
    "task": "G4",
    "scenario": "An auditor finds a fleet component's NTP and syslog settings differ from the approved standard, though nobody logged a change. The fleet is supposed to be configuration-controlled.",
    "question": "Which capability should have caught this, and what does it compare against?",
    "options": [
      "NSX configuration backup comparison, which diffs the current manager database against the last scheduled backup",
      "What-if capacity analysis, which compares the fleet's current configuration against the forecast requirements",
      "Rightsizing analysis, which compares each component's allocated resources against its observed utilization",
      "VCF Operations Config Drift, which compares fleet component configuration against the defined drift baseline"
    ],
    "correct": 3,
    "explanation": "Config drift monitoring continuously compares fleet component configurations to the defined baseline and reports deviations like these settings."
  },
  {
    "duty": "H",
    "task": "H7",
    "scenario": "A new Tier-1 gateway is created for an application, but NAT rules configured on it refuse to activate and no load balancer can be attached.",
    "question": "What is missing from the Tier-1 configuration?",
    "options": [
      "A DHCP profile attached to each segment, without which the gateway refuses to activate any of its services",
      "A BGP routing session between the Tier-1 gateway and the Tier-0 gateway it uses for north-south traffic",
      "A link to an Edge cluster, which provides the service router instance that runs the Tier-1's stateful services",
      "A VRF instance carved out of the Tier-0 gateway and dedicated to this Tier-1 and its attached segments"
    ],
    "correct": 2,
    "explanation": "Stateful services on a Tier-1 (NAT, load balancing, DHCP server) run on a service router hosted by an Edge cluster. Without the Edge link, the Tier-1 is distributed-only."
  },
  {
    "duty": "H",
    "task": "H1",
    "scenario": "A company merges two VCF sites and wants one stretched segment and one consistent firewall policy managed from a single place, without renumbering either site.",
    "question": "Which NSX deployment provides this?",
    "options": [
      "Merging both sites into a single workload domain so one NSX instance manages networking for the combined estate",
      "NSX Federation with a Global Manager spanning both sites' Local Managers, managing stretched objects and policy",
      "A shared Tier-0 VRF per site with route leaking configured between them to approximate a single network domain",
      "Two standalone NSX domains joined by a Tier-0 BGP peering, with firewall rules copied manually between sites"
    ],
    "correct": 1,
    "explanation": "Federation is built for this: the Global Manager manages stretched networking and global policy across Local Managers, with inter-site traffic over Edge RTEP tunnels."
  }
];
