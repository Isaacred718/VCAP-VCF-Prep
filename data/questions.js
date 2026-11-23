// Question bank. Contract: schemas/questions.schema.json.
// Domains (use verbatim — readiness groups by these):
//   - vSAN and Storage (duty A)
//   - vSphere Administration (duty B)
//   - Provider Management (duty C)
//   - VCF All Apps Tenancy (duty D)
//   - Supervisor and VKS (duty E)
//   - VCF Operations (duty F)
//   - Fleet Management (duty G)
//   - VMware NSX (duty H)
// Tracks: VCAP. Targets: {"VCAP":120}
const QUESTIONS = [
  {
    "domain": "vSAN and Storage",
    "cert": "VCAP",
    "duty": "A",
    "task": "A1",
    "q": "An administrator is creating a workload domain whose principal storage is a vSAN ESA cluster. Which host requirement is specific to ESA rather than the original storage architecture (OSA)?",
    "options": [
      "Each host needs NVMe storage devices and no separate cache tier",
      "Each host needs at least four spinning disks for capacity",
      "Each host needs Fibre Channel HBAs for the storage fabric",
      "Each host needs a dedicated cache tier device plus capacity devices"
    ],
    "correct": 0,
    "explanation": "vSAN ESA is a single-tier architecture built on NVMe devices; it has no cache/capacity tier split, which is an OSA concept.",
    "diff": 2
  },
  {
    "domain": "vSAN and Storage",
    "cert": "VCAP",
    "duty": "A",
    "task": "A2",
    "q": "A vSAN stretched cluster spans two data sites. Where must the witness host be placed, and what does it store?",
    "options": [
      "In the management domain, storing backup copies of VM disks",
      "At site B, storing VM data for site A workloads",
      "At site A, storing a full copy of all VM data",
      "In a third location, storing only witness components and metadata"
    ],
    "correct": 3,
    "explanation": "The witness lives in a third fault domain, separate from both data sites, and holds only witness components (metadata), never VM data blocks.",
    "diff": 1
  },
  {
    "domain": "vSAN and Storage",
    "cert": "VCAP",
    "duty": "A",
    "task": "A3",
    "q": "A workload domain needs a cluster whose principal storage is not vSAN. Which option is a supported configuration in VCF?",
    "options": [
      "A cluster using local host disks aggregated by a third-party tool",
      "A cluster using NFS or VMFS on Fibre Channel as its principal storage",
      "A cluster using cloud object storage mounted as its principal datastore",
      "A cluster using consumer SATA drives pooled over the management network"
    ],
    "correct": 1,
    "explanation": "VCF supports workload domain clusters with supported non-vSAN principal storage such as NFS and VMFS on Fibre Channel, alongside vSAN clusters.",
    "diff": 1
  },
  {
    "domain": "vSAN and Storage",
    "cert": "VCAP",
    "duty": "A",
    "task": "A4",
    "q": "A cluster is running low on storage but has spare CPU and memory, while a second vSAN cluster in the same environment has free capacity. What does vSAN cross-cluster capacity sharing (HCI Mesh) let the first cluster do?",
    "options": [
      "Mount the second cluster's vSAN datastore and consume its capacity",
      "Replicate all its objects to the second cluster as a backup target",
      "Merge both clusters into one stretched cluster without downtime",
      "Rebalance its VMs' storage policies to the second cluster automatically"
    ],
    "correct": 0,
    "explanation": "HCI Mesh lets a client cluster mount a remote vSAN datastore from a server cluster and consume its capacity, without contributing local storage.",
    "diff": 2
  },
  {
    "domain": "vSAN and Storage",
    "cert": "VCAP",
    "duty": "A",
    "task": "A5",
    "q": "An administrator enables vSAN data-at-rest encryption on a cluster. What must be in place and reachable for encryption to work?",
    "options": [
      "A vSphere Trust Authority cluster attesting every host",
      "A key management server (KMS) providing the key encryption keys",
      "A dedicated encryption appliance in each rack",
      "Self-encrypting drives in every host, with no external service"
    ],
    "correct": 1,
    "explanation": "vSAN encryption relies on an external KMS (KMIP) that supplies key encryption keys; vSAN wraps per-host data encryption keys with them.",
    "diff": 1
  },
  {
    "domain": "vSAN and Storage",
    "cert": "VCAP",
    "duty": "A",
    "task": "A6",
    "q": "A team wants local, snapshot-based protection for VMs on a vSAN cluster, with defined restore points and protection against ransomware deletion. Which vSAN feature provides this?",
    "options": [
      "vSAN File Services, by sharing protected folders to the VMs over NFS with scheduled share-level snapshots",
      "vSAN Data Protection, which protects VM groups with native snapshots, including immutable restore points",
      "vSphere Replication with array-based replication, copying the VMs to a recovery cluster on a fixed schedule",
      "vSAN iSCSI target service, by presenting LUNs whose array-style snapshots serve as the protection mechanism"
    ],
    "correct": 1,
    "explanation": "vSAN Data Protection protects VM groups with native vSAN snapshots, including immutable snapshots, and can replicate them to another vSAN cluster.",
    "diff": 2
  },
  {
    "domain": "vSAN and Storage",
    "cert": "VCAP",
    "duty": "A",
    "task": "A7",
    "q": "A host in a vSAN cluster is being permanently decommissioned. Which maintenance mode option guarantees all its data is migrated to other hosts before it leaves?",
    "options": [
      "No data migration",
      "Partial migration of non-compliant objects only",
      "Ensure accessibility",
      "Full data migration (evacuate all data)"
    ],
    "correct": 3,
    "explanation": "Full data migration evacuates every object component from the host; Ensure accessibility only keeps data available, which is wrong for a host that will not return.",
    "diff": 1
  },
  {
    "domain": "vSAN and Storage",
    "cert": "VCAP",
    "duty": "A",
    "task": "A9",
    "q": "A storage policy sets failures to tolerate (FTT) to 2 using RAID-6 erasure coding. What is the minimum number of hosts the vSAN cluster needs for compliant placement?",
    "options": [
      "Four hosts",
      "Eight hosts",
      "Five hosts",
      "Six hosts"
    ],
    "correct": 3,
    "explanation": "RAID-6 stores four data fragments plus two parity fragments, so six hosts are required for FTT=2 with erasure coding.",
    "diff": 2
  },
  {
    "domain": "vSAN and Storage",
    "cert": "VCAP",
    "duty": "A",
    "task": "A7",
    "q": "After a host failure, vSAN has not started rebuilding components an hour later. Which behavior explains the delay, and what is it protecting against?",
    "options": [
      "Rebuilds only run inside the nightly maintenance window, when cluster load and network traffic are at their lowest point of the day",
      "The resync delay (60 minutes by default) has not elapsed yet, so vSAN avoids a full rebuild for a host that may only be rebooting",
      "Rebuilds are held until an administrator reviews the failure and approves each affected object in the vSAN health service console",
      "Rebuilds wait until cluster free capacity drops below a threshold, so the rebuild always has room to complete without throttling"
    ],
    "correct": 1,
    "explanation": "vSAN waits (default 60 minutes) before rebuilding absent components, so a host that is only rebooting or briefly disconnected does not cause an unnecessary full resync.",
    "diff": 2
  },
  {
    "domain": "vSphere Administration",
    "cert": "VCAP",
    "duty": "B",
    "task": "B2",
    "q": "A critical VM must be guaranteed 8 GHz of CPU even when its host is heavily contended. Shares alone are not meeting the requirement. What should the administrator configure?",
    "options": [
      "CPU affinity pinning the VM to two physical cores",
      "A higher share value in a resource pool with no reservation",
      "A CPU limit of 8 GHz on the VM",
      "A CPU reservation of 8 GHz for the VM"
    ],
    "correct": 3,
    "explanation": "A reservation is the guaranteed minimum allocation; shares only set relative priority under contention and guarantee nothing on their own.",
    "diff": 1
  },
  {
    "domain": "vSphere Administration",
    "cert": "VCAP",
    "duty": "B",
    "task": "B2",
    "q": "A VM has a memory limit set below its configured memory and is performing poorly, while its host has free memory. Why is the VM suffering?",
    "options": [
      "The limit silently converts the VM's reservation into a host-level lock, starving unrelated VMs that share the same host memory",
      "The limit disables the VMware Tools memory driver for that VM, so the guest can no longer report or release its idle memory pages",
      "The limit forces all of the VM's memory through transparent page sharing, collapsing its working set even when no contention exists",
      "The limit caps the VM below its configured memory, so it balloons and swaps internally even while the host still has free memory"
    ],
    "correct": 3,
    "explanation": "A limit caps what the VM may consume regardless of host capacity; the VM balloons and may swap to its own .vswp file once it hits the cap.",
    "diff": 2
  },
  {
    "domain": "vSphere Administration",
    "cert": "VCAP",
    "duty": "B",
    "task": "B1",
    "q": "An administrator has kept a VM snapshot for six weeks as a 'backup'. Which statement best describes the risk in this practice?",
    "options": [
      "Snapshots silently convert the base disk from thick to thin provisioning, changing the VM's storage profile without any warning",
      "Snapshots permanently block vMotion and Storage vMotion for the VM, so it can never be moved until every snapshot is deleted",
      "Snapshots expire automatically after 30 days and delete the virtual machine along with its base disks and configuration files",
      "The delta disk grows with every write while performance degrades, and the datastore can fill before anyone notices the risk"
    ],
    "correct": 3,
    "explanation": "A snapshot redirects writes to a delta disk that grows over time; long-lived snapshots degrade performance and can fill the datastore. Snapshots are not backups.",
    "diff": 1
  },
  {
    "domain": "vSphere Administration",
    "cert": "VCAP",
    "duty": "B",
    "task": "B1",
    "q": "Fifty identical VMs must be deployed with unique hostnames and IP settings applied automatically at first boot. Which combination achieves this?",
    "options": [
      "Clone the VM fifty times and rename each one manually after power-on",
      "Convert the VM to a template, then edit each deployed VM's .vmx file",
      "Use an OVF export and re-import it with new MAC addresses only",
      "Deploy from a template and apply a guest customization specification"
    ],
    "correct": 3,
    "explanation": "Templates provide the golden image; customization specifications apply hostname, domain and network settings (via Sysprep or cloud-init) during deployment.",
    "diff": 1
  },
  {
    "domain": "vSphere Administration",
    "cert": "VCAP",
    "duty": "B",
    "task": "B3",
    "q": "A database VM needs the lowest possible storage latency and its full disk space committed up front, with all blocks zeroed at creation. Which provisioning should be chosen?",
    "options": [
      "Thin provisioned",
      "Thick provisioned lazy zeroed",
      "Dependent disk in nonpersistent mode",
      "Thick provisioned eager zeroed"
    ],
    "correct": 3,
    "explanation": "Eager zeroed thick allocates and zeroes all blocks at creation, avoiding first-write zeroing latency later; it is the traditional choice for latency-sensitive and clustered workloads.",
    "diff": 1
  },
  {
    "domain": "vSphere Administration",
    "cert": "VCAP",
    "duty": "B",
    "task": "B5",
    "q": "A host is under memory pressure. Which reclamation mechanism does ESX normally use first to reclaim idle VM memory gently, before compression and host swapping?",
    "options": [
      "Memory compression into the per-VM compression cache",
      "Transparent page sharing across all VMs",
      "Memory ballooning through the VMware Tools driver",
      "Hypervisor swapping to the VM's .vswp file"
    ],
    "correct": 2,
    "explanation": "Ballooning inflates inside the guest via the vmmemctl driver so the guest gives up its least valuable pages first; compression and host-level swapping are harsher later stages.",
    "diff": 2
  },
  {
    "domain": "vSphere Administration",
    "cert": "VCAP",
    "duty": "B",
    "task": "B4",
    "q": "A 16-vCPU VM shows very high CPU ready time on a busy host while smaller VMs are fine. What is the most likely cause and fix?",
    "options": [
      "The VM is memory ballooning; add a memory reservation",
      "The VM is oversized; reducing its vCPU count lowers scheduling wait",
      "The host has too much transparent page sharing; disable it",
      "The VM needs CPU affinity to spread its vCPUs across sockets"
    ],
    "correct": 1,
    "explanation": "Large VMs wait longer for enough physical cores to co-schedule; high %RDY on an oversized VM is the classic sign to right-size vCPUs downward.",
    "diff": 2
  },
  {
    "domain": "vSphere Administration",
    "cert": "VCAP",
    "duty": "B",
    "task": "B7",
    "q": "A support team needs full control of VMs in one folder of a workload domain vCenter, and no rights anywhere else. How should access be granted?",
    "options": [
      "Assign the Administrator role at the root and rely on the team to stay in the folder",
      "Create a local host account on each ESX host for each team member",
      "Assign the role at the data center level and deny permissions on other folders",
      "Assign the appropriate role on that folder object; permissions propagate to its child objects"
    ],
    "correct": 3,
    "explanation": "vCenter permissions are assigned on inventory objects and propagate to children by default, so a folder-level assignment scopes the team exactly to that folder's VMs.",
    "diff": 1
  },
  {
    "domain": "vSphere Administration",
    "cert": "VCAP",
    "duty": "B",
    "task": "B8",
    "q": "An administrator must encrypt a powered-off VM in a workload domain. What prerequisite must exist in vCenter before the encryption can be applied?",
    "options": [
      "A vSphere Trust Authority cluster must be deployed first",
      "A key provider (KMS) must be added and trusted by vCenter",
      "The VM must be converted to a template and redeployed",
      "All hosts must have TPM chips with Secure Boot disabled"
    ],
    "correct": 1,
    "explanation": "VM encryption needs a key provider configured in vCenter; the VM is then encrypted with a storage policy, and its keys are managed through that provider.",
    "diff": 1
  },
  {
    "domain": "Provider Management",
    "cert": "VCAP",
    "duty": "C",
    "task": "C1",
    "q": "A provider wants administrators and tenants to sign in to the VCF Automation portals with their corporate identity provider using federation. Which VCF component brokers that identity integration?",
    "options": [
      "NSX Manager, using its built-in identity store",
      "vCenter Single Sign-On alone, with local accounts",
      "VCF Identity Broker, federating the external IdP",
      "VCF Operations, using its authentication sources only"
    ],
    "correct": 2,
    "explanation": "VCF Identity Broker provides the federated identity layer for VCF components and portals, integrating external OIDC/SAML identity providers.",
    "diff": 1
  },
  {
    "domain": "Provider Management",
    "cert": "VCAP",
    "duty": "C",
    "task": "C2",
    "q": "A provider builds a standard set of VM images and blueprints that every organization should consume identically. Where should the provider publish them from?",
    "options": [
      "A vSAN datastore folder copied between workload domains",
      "Each organization's local content library, uploaded separately",
      "A provider content library shared out to the organizations",
      "The Provider Consumption Organization's private catalog only"
    ],
    "correct": 2,
    "explanation": "Provider content libraries are the provider-level distribution point: content is authored once and shared to organizations so all tenants consume the same governed items.",
    "diff": 1
  },
  {
    "domain": "Provider Management",
    "cert": "VCAP",
    "duty": "C",
    "task": "C3",
    "q": "A new engineer joins the provider team and must create organizations and manage provider-wide settings, but should not deploy tenant workloads. Which assignment fits?",
    "options": [
      "A provider-level role such as Provider Administrator",
      "Organization Administrator in every organization",
      "Read-only auditor, with changes made by a tenant admin on request",
      "Project Administrator in the Provider Consumption Organization"
    ],
    "correct": 0,
    "explanation": "Provider-scoped roles govern platform-wide administration (organizations, shared content, provider settings) and are separate from organization and project roles used for tenant workloads.",
    "diff": 1
  },
  {
    "domain": "Provider Management",
    "cert": "VCAP",
    "duty": "C",
    "task": "C4",
    "q": "A provider wants to offer a governed, reusable deployment design that organizations can request without editing its internals. Which object should the provider author and share?",
    "options": [
      "A blueprint published through the provider's shared content",
      "An NSX project template containing firewall rules only",
      "A Supervisor namespace class with embedded scripts",
      "A VCF Operations policy exported to each organization"
    ],
    "correct": 0,
    "explanation": "Blueprints are the reusable deployment designs in VCF Automation; providers author and share them so organizations consume consistent, governed deployments.",
    "diff": 1
  },
  {
    "domain": "Provider Management",
    "cert": "VCAP",
    "duty": "C",
    "task": "C5",
    "q": "What is the purpose of the Provider Consumption Organization (PCO) in VCF Automation?",
    "options": [
      "It is a billing-only organization that the provider uses to generate invoices and usage reports for its tenant organizations",
      "It lets the provider itself consume platform services and host provider-managed workloads, the way a tenant organization would",
      "It is a standby organization that activates automatically to take over workloads whenever a tenant organization becomes unavailable",
      "It replaces the Provider Management portal entirely, moving all provider administration tasks into a single consumption workspace"
    ],
    "correct": 1,
    "explanation": "The PCO is the provider's own consumption organization: it lets the provider deploy and consume services from its own platform the way a tenant would, for provider-managed offerings.",
    "diff": 2
  },
  {
    "domain": "Provider Management",
    "cert": "VCAP",
    "duty": "C",
    "task": "C1",
    "q": "After federating an external identity provider for the Provider Management portal, an administrator finds provider users still cannot sign in, although org users can. What is the most likely gap?",
    "options": [
      "The NSX load balancer in front of the portal VIP is dropping the authentication redirects before they reach the identity provider",
      "The provider portal's own identity provider configuration was never completed for the provider scope, separate from the org setup",
      "Provider users must be recreated as local accounts inside every organization before federated sign-in will work for any of them",
      "The management domain vCenter must be restarted so it can pick up the new federation trust before provider sign-ins will succeed"
    ],
    "correct": 1,
    "explanation": "Provider and organization identity configurations are scoped separately; org federation working does not complete the provider portal's own IdP configuration.",
    "diff": 2
  },
  {
    "domain": "VCF All Apps Tenancy",
    "cert": "VCAP",
    "duty": "D",
    "task": "D1",
    "q": "An organization wants its own users to authenticate with the organization's corporate IdP rather than the provider's. How is this arranged in a VCF All Apps organization?",
    "options": [
      "It cannot be done; all orgs share the provider IdP",
      "Configure an identity provider within the organization itself",
      "Give org users accounts in the Provider Consumption Organization",
      "Federate the IdP at the NSX project level instead"
    ],
    "correct": 1,
    "explanation": "All Apps organizations can configure their own identity provider integration, so each tenant organization federates its own corporate IdP independently of the provider's.",
    "diff": 1
  },
  {
    "domain": "VCF All Apps Tenancy",
    "cert": "VCAP",
    "duty": "D",
    "task": "D2",
    "q": "A user must deploy and manage workloads in one project of an organization, with no rights in the organization's other projects. Which assignment is correct?",
    "options": [
      "Provider Administrator with a project filter applied",
      "Namespace class owner for every namespace in the org",
      "A project-scoped role (administrator or member) on that project only",
      "Organization Administrator, trusting the user to stay in the project"
    ],
    "correct": 2,
    "explanation": "Access control is layered: organization roles span the org, while project roles scope a user's rights to a single project's resources and deployments.",
    "diff": 1
  },
  {
    "domain": "VCF All Apps Tenancy",
    "cert": "VCAP",
    "duty": "D",
    "task": "D3",
    "q": "An organization administrator creates a project for the payments team. What does the project primarily define?",
    "options": [
      "An NSX Tier-1 gateway dedicated to the payments application, with its own segments, NAT rules and firewall policy attached",
      "A physical cluster reservation carved out of a workload domain for the payments team's exclusive use during business hours",
      "A vSAN storage policy that the team applies to every VM it deploys, controlling resilience and performance for its workloads",
      "A bounded workspace that groups the team's users, their deployments, and the governance policies that apply to their work"
    ],
    "correct": 3,
    "explanation": "Projects are the tenancy workspace inside an organization: they group members, their deployments, and the governance that applies to them.",
    "diff": 1
  },
  {
    "domain": "VCF All Apps Tenancy",
    "cert": "VCAP",
    "duty": "D",
    "task": "D4",
    "q": "An organization wants deployments above a certain size to require a manager's approval before resources are allocated. Which mechanism provides this?",
    "options": [
      "A VCF Operations alert with an email notification",
      "An NSX distributed firewall rule in the org VPC",
      "A namespace class with approval annotations",
      "A governance (approval) policy applied to the project"
    ],
    "correct": 3,
    "explanation": "Governance policies in the organization enforce controls such as approvals, leases and limits on deployments within the projects they apply to.",
    "diff": 1
  },
  {
    "domain": "VCF All Apps Tenancy",
    "cert": "VCAP",
    "duty": "D",
    "task": "D5",
    "q": "A platform team wants every Supervisor namespace a project can request to come in fixed sizes with preset CPU, memory and storage limits. What should they define?",
    "options": [
      "Namespace classes that projects select when creating namespaces, carrying preset resource limits and settings",
      "A set of VM classes attached directly to each project, defining the sizes of the virtual machines it may run",
      "VPC connectivity profiles with quota settings that limit how many namespaces each project is allowed to create",
      "Storage policies named after each project, so the platform team can cap consumption through policy compliance"
    ],
    "correct": 0,
    "explanation": "Namespace classes package the resource limits and characteristics a Supervisor namespace gets, so projects consume consistent, pre-sized namespaces.",
    "diff": 2
  },
  {
    "domain": "VCF All Apps Tenancy",
    "cert": "VCAP",
    "duty": "D",
    "task": "D6",
    "q": "An organization's VPCs must all use the same north-south behavior: centralized egress with NAT through the regional networking layer. What governs this for the org's VPCs?",
    "options": [
      "The default Tier-0 gateway's BGP configuration, which every VPC in the organization inherits without exception",
      "The Supervisor namespace class network template, which stamps the same egress settings onto every tenant VPC",
      "Each project's governance policy, whose network section overrides connectivity behavior for that project's VPCs",
      "The VPC connectivity profile assigned to the organization, which defines transit attachment, egress and NAT behavior"
    ],
    "correct": 3,
    "explanation": "VPC connectivity profiles define how an organization's VPCs connect outward (transit attachment, NAT and egress behavior) so all VPCs inherit consistent connectivity.",
    "diff": 2
  },
  {
    "domain": "Supervisor and VKS",
    "cert": "VCAP",
    "duty": "E",
    "task": "E1",
    "q": "A Supervisor must be enabled using vSphere Distributed Switch (vDS) networking rather than NSX. Which load balancer option is available for that configuration?",
    "options": [
      "Avi Load Balancer (or HAProxy) paired with the vDS networking stack for API and workload load balancing",
      "No load balancer can be provided in that configuration, so services of type LoadBalancer remain pending",
      "NSX Advanced Load Balancer operating only as part of the NSX networking stack, with no vDS integration available",
      "The Tier-0 gateway's built-in load balancer service, borrowed by the Supervisor when NSX is not deployed"
    ],
    "correct": 0,
    "explanation": "With vDS networking, the Supervisor uses Avi Load Balancer (or HAProxy) for Kubernetes API and workload load balancing; NSX load balancing belongs to the NSX networking option.",
    "diff": 1
  },
  {
    "domain": "Supervisor and VKS",
    "cert": "VCAP",
    "duty": "E",
    "task": "E2",
    "q": "Developers need an integrated container image registry with vulnerability scanning inside the Supervisor environment. Which add-on service should be installed?",
    "options": [
      "Contour",
      "Cert Manager",
      "Harbor",
      "External DNS"
    ],
    "correct": 2,
    "explanation": "Harbor is the Supervisor add-on service providing a private container registry with image scanning and signing, integrated with VKS clusters.",
    "diff": 1
  },
  {
    "domain": "Supervisor and VKS",
    "cert": "VCAP",
    "duty": "E",
    "task": "E3",
    "q": "A VKS cluster must move to a newer Kubernetes version without downtime for its workloads. How does the upgrade proceed?",
    "options": [
      "Only the control plane upgrades; worker nodes never change version",
      "The cluster is deleted and redeployed from a backup each time",
      "A rolling update replaces nodes one at a time with new-version nodes",
      "All nodes are powered off, upgraded in place, and restarted together"
    ],
    "correct": 2,
    "explanation": "VKS upgrades are rolling: control plane and worker nodes are replaced progressively with new-version nodes, so workloads keep running through the upgrade.",
    "diff": 1
  },
  {
    "domain": "Supervisor and VKS",
    "cert": "VCAP",
    "duty": "E",
    "task": "E4",
    "q": "A VKS cluster must pull images from the company's private registry, which requires credentials. What must be configured?",
    "options": [
      "A storage policy on the namespace granting the cluster's service accounts standing access to the registry",
      "An NSX NAT rule that translates the private registry's address into the cluster's overlay network range",
      "A registry secret stored in the namespace, referenced by the cluster or its workloads for image pulls",
      "A Harbor project switched to public access, so the cluster can pull images without presenting credentials"
    ],
    "correct": 2,
    "explanation": "Private registry access is provided through registry (image pull) secrets stored in the namespace and associated with the VKS cluster's workloads.",
    "diff": 1
  },
  {
    "domain": "Supervisor and VKS",
    "cert": "VCAP",
    "duty": "E",
    "task": "E5",
    "q": "An administrator plans to upgrade the Supervisor service itself. What is the correct sequencing expectation?",
    "options": [
      "The Supervisor upgrade is applied through vCenter workload management, updating the control plane and platform components first",
      "Each ESX host in the cluster is upgraded manually in sequence before the Supervisor upgrade is allowed to start on the control plane",
      "The Supervisor upgrades itself automatically as a side effect whenever any single VKS cluster in the environment is upgraded",
      "VKS clusters must all be deleted first, because the Supervisor cannot upgrade while any cluster exists in any of its namespaces"
    ],
    "correct": 0,
    "explanation": "Supervisor upgrades are driven from vCenter (workload management), updating the Supervisor control plane and platform components; VKS clusters are then upgraded separately on their own cadence.",
    "diff": 2
  },
  {
    "domain": "Supervisor and VKS",
    "cert": "VCAP",
    "duty": "E",
    "task": "E1",
    "q": "A Supervisor design must survive the loss of an entire availability zone while keeping its control plane running. Which Supervisor topology supports this?",
    "options": [
      "A three-zone (multi-zonal) Supervisor spanning three vSphere clusters/zones",
      "Two Supervisors in an active-passive pair with manual failover",
      "A Supervisor stretched by placing its VMs on a vSAN stretched cluster only",
      "A single-zone Supervisor with three control plane VMs in one cluster"
    ],
    "correct": 0,
    "explanation": "The zonal Supervisor model deploys the control plane across three zones (vSphere clusters), so the Supervisor remains available if one zone fails.",
    "diff": 2
  },
  {
    "domain": "VCF Operations",
    "cert": "VCAP",
    "duty": "F",
    "task": "F2",
    "q": "Capacity reports show a cluster nearly full, yet many VMs have been powered off for months and old snapshots are everywhere. Which VCF Operations capability identifies this recoverable capacity?",
    "options": [
      "Configuration drift reporting, which compares each VM's settings against a baseline and lists everything that has changed",
      "What-if scenario analysis, which models the effect of adding new hosts to the cluster before any purchase is approved",
      "Resource reclamation, which surfaces powered-off and idle VMs, old snapshots and orphaned disks as recoverable capacity",
      "Business application discovery, which maps the cluster's VMs into application tiers and reports their rolled-up health status"
    ],
    "correct": 2,
    "explanation": "Reclamation analysis finds waste such as long-powered-off VMs, idle VMs, aged snapshots and orphaned disks, and quantifies the capacity and cost that deleting them would recover.",
    "diff": 1
  },
  {
    "domain": "VCF Operations",
    "cert": "VCAP",
    "duty": "F",
    "task": "F3",
    "q": "A VM with 16 vCPUs has averaged 4 percent CPU use for 30 days. Which recommendation should VCF Operations generate, and why?",
    "options": [
      "Workload optimization: migrate the VM to a less loaded host, because its performance problem is caused by noisy neighbors",
      "Rightsizing: reduce the vCPU count, because sustained low utilization over the analysis window shows the VM is oversized",
      "Capacity forecasting: plan to add hosts to the cluster, because the VM will eventually grow into its current allocation",
      "Reclamation: power the VM off and delete it, because utilization that low over a month means the workload was abandoned"
    ],
    "correct": 1,
    "explanation": "Rightsizing compares allocation against observed demand over time; a chronically underused VM is flagged oversized with a recommended smaller configuration.",
    "diff": 1
  },
  {
    "domain": "VCF Operations",
    "cert": "VCAP",
    "duty": "F",
    "task": "F4",
    "q": "Management asks whether the production cluster can absorb 40 new VMs next quarter, and when it will run out of capacity if growth continues. Which tool answers both questions?",
    "options": [
      "Cost driver analysis with pricing policies, which estimates what the additional 40 VMs would cost the business each month",
      "Business intent placement rules, which reserve space in the cluster for the expected growth of the sales organization",
      "What-if scenarios combined with capacity forecasting, which model the new VMs and project the cluster's time remaining",
      "Alert definitions with capacity symptoms that notify the team when utilization crosses the agreed planning thresholds"
    ],
    "correct": 2,
    "explanation": "What-if analysis models hypothetical changes (adding VMs or hosts) against the capacity engine, whose forecast also projects time remaining before resources are exhausted.",
    "diff": 1
  },
  {
    "domain": "VCF Operations",
    "cert": "VCAP",
    "duty": "F",
    "task": "F5",
    "q": "Finance reports that the per-VM costs shown to tenants no longer reflect the new software licensing agreement. Where is that corrected in VCF Operations cost management?",
    "options": [
      "In the business application cost allocation rules, where shared application costs are divided among the owning teams",
      "In the reclamation settings of the production policy, where the value assigned to recovered resources is calculated",
      "In the pricing policy assigned to the tenant projects, where the per-VM rates shown to consumers are directly configured",
      "In the cost drivers, where the underlying cost inputs such as licensing, hardware and labor are maintained and updated"
    ],
    "correct": 3,
    "explanation": "Cost drivers hold the underlying cost inputs (licensing, hardware, labor, facilities and so on) that the cost engine uses; pricing policies then shape what consumers are charged or shown.",
    "diff": 2
  },
  {
    "domain": "VCF Operations",
    "cert": "VCAP",
    "duty": "F",
    "task": "F6",
    "q": "Production clusters need stricter capacity thresholds and different reclamation behavior than development clusters. How is this implemented in VCF Operations?",
    "options": [
      "Tag each production VM individually and write a separate alert definition for every threshold the team wants to enforce",
      "Install a second VCF Operations deployment dedicated to production, since policies cannot differ between object groups",
      "Create a policy for production, assign it to the production object group, and let policy precedence place it above the base policy",
      "Edit the single global policy, because VCF Operations applies one policy uniformly to every object it manages by design"
    ],
    "correct": 2,
    "explanation": "Policies are layered and assigned to groups of objects; a child policy for production overrides the inherited base settings for those objects according to policy precedence.",
    "diff": 1
  },
  {
    "domain": "VCF Operations",
    "cert": "VCAP",
    "duty": "F",
    "task": "F7",
    "q": "An administrator configures workload optimization so licensed database VMs stay on a specific set of hosts, while other workloads consolidate aggressively. Which intent types are being combined?",
    "options": [
      "Business intent for the placement constraints, operational intent for the consolidation goal",
      "Both settings are alert symptoms evaluated by the analytics engine",
      "Operational intent for the placement constraints, business intent for the consolidation goal",
      "Both settings are business intent; optimization has no second intent type"
    ],
    "correct": 0,
    "explanation": "Business intent captures placement rules driven by business needs (licensing, affinity, compliance); operational intent captures how the platform should run (consolidate for efficiency versus balance for performance).",
    "diff": 2
  },
  {
    "domain": "VCF Operations",
    "cert": "VCAP",
    "duty": "F",
    "task": "F8",
    "q": "Operations wants a single monitored view of a three-tier application, with its VMs grouped as tiers and rolled-up health. Which VCF Operations construct provides this?",
    "options": [
      "A super metric exported to the application team",
      "A namespace class representing the application",
      "A what-if scenario named after the application",
      "A business application with discovered or defined tiers"
    ],
    "correct": 3,
    "explanation": "Business applications group the objects that make up an application into tiers, giving rolled-up health, availability and monitoring for the app as a unit.",
    "diff": 1
  },
  {
    "domain": "VCF Operations",
    "cert": "VCAP",
    "duty": "F",
    "task": "F9",
    "q": "A team must be notified when datastore latency risks breaching an SLA, with a recommended fix attached. What is the core structure of an alert in VCF Operations?",
    "options": [
      "A super metric compared against a static threshold, with no other components involved in how the alert fires or resolves",
      "A policy, a cost driver and a pricing rule must be combined into a single object before an alert can be defined and enabled",
      "One or more symptoms (conditions on metrics or properties), paired with recommendations and optional automated actions",
      "A dashboard, a view and a report must be scheduled together before any notification can leave the VCF Operations platform"
    ],
    "correct": 2,
    "explanation": "Alerts are built from symptom definitions that evaluate conditions; when symptoms trigger, the alert fires with its recommendations and any configured actions or notifications.",
    "diff": 1
  },
  {
    "domain": "VCF Operations",
    "cert": "VCAP",
    "duty": "F",
    "task": "F1",
    "q": "An administrator needs the same capacity summary emailed to management every Monday in a consistent format. Which Day 2 construct delivers this?",
    "options": [
      "An alert definition with a weekly notification rule that attaches the current capacity values to the alert email",
      "A view placed on a shared dashboard, with a subscription that emails a link to the dashboard every Monday morning",
      "A business application object exported to PDF by an administrator each week and forwarded to the management team",
      "A report generated from a view and scheduled for recurring email delivery to the management distribution list"
    ],
    "correct": 3,
    "explanation": "Reports package views (and dashboards) into documents that can be generated and delivered on a schedule, which is the standard recurring-reporting path.",
    "diff": 1
  },
  {
    "domain": "Fleet Management",
    "cert": "VCAP",
    "duty": "G",
    "task": "G2",
    "q": "A fleet upgrade is planned for the weekend. During pre-checks, a component reports a version incompatibility with the target release. What should happen?",
    "options": [
      "Disable lifecycle management for this run and upgrade every component manually, in whatever order each team prefers",
      "Resolve the incompatibility first, because lifecycle upgrades follow a validated sequence and block on failed pre-checks",
      "Upgrade the incompatible component twice in a row, which forces its version forward to match the rest of the target release",
      "Skip the incompatible component and upgrade the rest of the fleet, because component order has no effect on the outcome"
    ],
    "correct": 1,
    "explanation": "Fleet lifecycle management validates compatibility and ordering through pre-checks; a failed check must be remediated before the sequenced upgrade proceeds.",
    "diff": 1
  },
  {
    "domain": "Fleet Management",
    "cert": "VCAP",
    "duty": "G",
    "task": "G3",
    "q": "Users complain they sign in separately to VCF Operations, VCF Automation and vCenter. What does configuring VCF SSO through identity and access management provide?",
    "options": [
      "Automatic account provisioning that creates matching local user accounts inside every tenant organization in the fleet",
      "Single sign-on across the fleet's components, brokered through the VCF Identity Broker and the enterprise identity provider",
      "Replacement of role-based access control with identity provider group membership as the only authorization mechanism",
      "A shared local administrator password that is synchronized automatically across every component in the VCF fleet"
    ],
    "correct": 1,
    "explanation": "VCF SSO federates the fleet's components to the enterprise identity provider through the Identity Broker, so one identity and sign-in serves the platform while RBAC still applies per component.",
    "diff": 1
  },
  {
    "domain": "Fleet Management",
    "cert": "VCAP",
    "duty": "G",
    "task": "G4",
    "q": "A security review asks how the team would know if someone changed a fleet component's configuration outside the approved baseline. Which capability answers this?",
    "options": [
      "VCF Operations configuration drift monitoring, which compares component configurations against defined baselines",
      "VCF Automation governance policies applied to provider settings, which block configuration changes outside windows",
      "vCenter scheduled task reporting, which emails a daily summary of every configuration change made by any user",
      "NSX configuration backup comparison inside the manager interface, reviewed manually by the security team each week"
    ],
    "correct": 0,
    "explanation": "Configuration drift in VCF Operations compares fleet component configurations against defined baselines and surfaces deviations for review and remediation.",
    "diff": 1
  },
  {
    "domain": "Fleet Management",
    "cert": "VCAP",
    "duty": "G",
    "task": "G1",
    "q": "The organization is adding a second VCF fleet instance in another region, to be lifecycle-managed together with the first. What is the correct general process?",
    "options": [
      "Deploy the instance as a fully independent fleet, then link the two fleets afterward with a one-time configuration export",
      "Deploy the instance, then register and onboard it into fleet management so baselines, upgrades and drift apply across the fleet",
      "Clone the first instance's appliances to the new region and rename them, so both regions run identical configurations",
      "Import the second instance's hosts directly into the first instance's management domain and retire its own management stack"
    ],
    "correct": 1,
    "explanation": "Fleet management scales by deploying additional instances and onboarding them into the shared lifecycle framework, so upgrades, configuration baselines and drift monitoring span the fleet.",
    "diff": 2
  },
  {
    "domain": "Fleet Management",
    "cert": "VCAP",
    "duty": "G",
    "task": "G2",
    "q": "Before a fleet-wide upgrade, an administrator must obtain the update bundles in an air-gapped environment. What is the expected flow?",
    "options": [
      "Bundles stream automatically from the vendor cloud during the upgrade, so air-gapped sites follow the same flow as connected ones",
      "Attach the original installation media to each appliance in turn and upgrade from it, one component at a time, in any order",
      "Copy the running binaries directly from a lab fleet at the target version, then restart each component to pick them up",
      "Download the bundles (or use the bundle transfer utility) into the fleet's depot, then run pre-checks and the sequenced upgrade"
    ],
    "correct": 3,
    "explanation": "Lifecycle content is staged in a depot; disconnected environments bring bundles in with the transfer tooling, after which the normal pre-check and sequenced upgrade flow applies.",
    "diff": 2
  },
  {
    "domain": "VMware NSX",
    "cert": "VCAP",
    "duty": "H",
    "task": "H1",
    "q": "Two VCF regions must share stretched NSX segments and consistent security policy, managed centrally. Which NSX capability provides this, and what is its central component?",
    "options": [
      "NSX Federation, coordinated by the Global Manager",
      "NSX VPC with a shared connectivity profile",
      "vSphere Distributed Switch with cross-vCenter networking",
      "Tier-0 active-active with ECMP across regions"
    ],
    "correct": 0,
    "explanation": "NSX Federation links local managers across sites under a Global Manager, enabling stretched networking objects and centralized policy across locations.",
    "diff": 1
  },
  {
    "domain": "VMware NSX",
    "cert": "VCAP",
    "duty": "H",
    "task": "H3",
    "q": "An Edge cluster must be deployed to host Tier-0 and stateful Tier-1 services. Which statements describe the Edge nodes' role correctly?",
    "options": [
      "Edge nodes provide the service router functions (gateways, NAT, load balancing and other centralized services) via their TEPs",
      "Edge nodes replace host transport nodes entirely, terminating all overlay tunnels so hosts need no tunnel endpoints at all",
      "Edge nodes act as standby NSX Managers, holding a copy of the policy database in case the management cluster is ever lost",
      "Edge nodes run only the distributed firewall data plane, inspecting east-west traffic between workloads on the same segment"
    ],
    "correct": 0,
    "explanation": "Edge nodes host the centralized service components of gateways (service routers) and services such as NAT and load balancing, participating in the overlay through their TEPs.",
    "diff": 1
  },
  {
    "domain": "VMware NSX",
    "cert": "VCAP",
    "duty": "H",
    "task": "H4",
    "q": "A Tier-0 gateway must connect the overlay to the physical network with dynamic routing and multipathing. Which configuration is standard?",
    "options": [
      "OSPF area 0 on all segments attached to the Tier-0",
      "Direct attachment of segments to the physical switches",
      "BGP peering with the physical routers and ECMP across uplinks",
      "Static routes only, with a single active uplink"
    ],
    "correct": 2,
    "explanation": "Tier-0 gateways typically peer with top-of-rack/core routers using BGP and use ECMP over multiple uplinks for resilient, load-shared north-south routing.",
    "diff": 1
  },
  {
    "domain": "VMware NSX",
    "cert": "VCAP",
    "duty": "H",
    "task": "H5",
    "q": "A single physical Tier-0 must serve several tenants with fully separate routing tables but shared uplinks. Which construct provides this?",
    "options": [
      "NAT rules on a single shared gateway that isolate each tenant's address space by translating it to a unique public range",
      "Separate Edge clusters built per tenant on the same hosts, so each tenant's gateways run on fully dedicated Edge nodes",
      "Multiple Tier-1 gateways with route filtering between them, one for each tenant sharing the same physical infrastructure",
      "Tier-0 VRF gateways, one per tenant, each with an isolated routing table while inheriting the parent Tier-0's uplinks"
    ],
    "correct": 3,
    "explanation": "VRF gateways on a Tier-0 give each tenant an isolated routing and forwarding instance while sharing the parent Tier-0's uplinks and Edge infrastructure.",
    "diff": 2
  },
  {
    "domain": "VMware NSX",
    "cert": "VCAP",
    "duty": "H",
    "task": "H6",
    "q": "A new overlay segment must be created for an application tier. How does traffic on that segment travel between hosts?",
    "options": [
      "It routes through the Tier-0 gateway for every packet, even within the segment",
      "It uses VXLAN provided by the vSphere Distributed Switch alone",
      "It is encapsulated in GENEVE tunnels between host and Edge tunnel endpoints (TEPs)",
      "It is VLAN-backed on the physical switches with standard vSwitches"
    ],
    "correct": 2,
    "explanation": "NSX overlay segments use GENEVE encapsulation between TEPs on transport nodes, so L2 traffic crosses the physical network inside tunnels independent of the underlay topology.",
    "diff": 1
  },
  {
    "domain": "VMware NSX",
    "cert": "VCAP",
    "duty": "H",
    "task": "H7",
    "q": "A Tier-1 gateway must offer NAT and load balancing to its segments. What does the Tier-1 require for those stateful services?",
    "options": [
      "A service router component for the Tier-1, hosted on an Edge cluster that the Tier-1 is connected to",
      "A dedicated physical load balancing appliance registered with NSX Manager and assigned to the Tier-1 gateway",
      "A direct uplink from the Tier-1 to a Tier-0 VRF gateway, which lends the Tier-1 its own service components",
      "Nothing at all, because a Tier-1 gateway always runs its stateful services in a distributed way on every host"
    ],
    "correct": 0,
    "explanation": "A standalone Tier-1 is distributed only; stateful services such as NAT, DHCP server and load balancing need a service router instance running on an Edge cluster.",
    "diff": 1
  },
  {
    "domain": "VMware NSX",
    "cert": "VCAP",
    "duty": "H",
    "task": "H8",
    "q": "A team creates an NSX VPC for a project. Which description matches what a VPC provides?",
    "options": [
      "A scheduled backup of the NSX Manager configuration, scoped so it captures only the objects belonging to that one project",
      "A self-service tenancy unit with its own subnets, default connectivity and NAT, consumed without exposing gateway internals",
      "A physical network partition carved directly out of the Tier-0 gateway and assigned to the project as dedicated hardware",
      "A vSphere resource pool with network reservations attached, guaranteeing the project a fixed share of uplink bandwidth"
    ],
    "correct": 1,
    "explanation": "NSX VPCs give tenants a private-cloud-style network construct: private or public subnets, built-in routing and default outbound NAT, managed simply without Tier-0/Tier-1 mechanics.",
    "diff": 1
  },
  {
    "domain": "VMware NSX",
    "cert": "VCAP",
    "duty": "H",
    "task": "H9",
    "q": "Workloads on a segment must get addresses from the company's central DHCP servers rather than from NSX. Which DHCP option should be configured?",
    "options": [
      "A local DHCP server defined directly on the segment, serving the same address ranges as the central corporate servers",
      "Static binding entries created for every workload in advance, so no dynamic address assignment is needed at all",
      "DHCP relay configured on the segment, forwarding the workloads' requests to the company's external DHCP servers",
      "The gateway DHCP server running on the Tier-1's service router, configured with the company's central address pools"
    ],
    "correct": 2,
    "explanation": "DHCP relay forwards client requests from the segment to external DHCP servers; the gateway and local server options have NSX itself provide the service.",
    "diff": 1
  },
  {
    "domain": "VMware NSX",
    "cert": "VCAP",
    "duty": "H",
    "task": "H10",
    "q": "An application with a private address must be reachable from outside, and many internal VMs share one public address outbound. Which NAT types map to these two needs?",
    "options": [
      "DNAT for the published application, SNAT for shared outbound access",
      "NAT64 for the application, NAT overload disabled outbound",
      "SNAT for the published application, DNAT for shared outbound access",
      "Reflexive NAT for both directions in all cases"
    ],
    "correct": 0,
    "explanation": "DNAT rewrites the destination so external clients reach an internal service; SNAT rewrites the source so many internal systems share one external address outbound.",
    "diff": 1
  },
  {
    "domain": "VMware NSX",
    "cert": "VCAP",
    "duty": "H",
    "task": "H13",
    "q": "An administrator must ensure NSX configuration can be recovered after a management-plane failure. Which operational practice is essential?",
    "options": [
      "Configure scheduled NSX backups to an SFTP or FTP server, and verify restore prerequisites such as matching version",
      "Export the segment and gateway definitions to a spreadsheet every week and store it with the team's other runbooks",
      "Copy the NSX database files manually from one manager node to a file share whenever the configuration changes significantly",
      "Snapshot the NSX Manager virtual machines nightly with memory included, and keep the snapshots for at least thirty days"
    ],
    "correct": 0,
    "explanation": "NSX supports scheduled cluster configuration backups to a file server; restores depend on those backups plus matching software version and deployment details. Manager VM snapshots are not a supported backup method.",
    "diff": 2
  },
  {
    "domain": "VMware NSX",
    "cert": "VCAP",
    "duty": "H",
    "task": "H12",
    "q": "Security operations wants NSX component logs centralized for analysis. Which configuration forwards them?",
    "options": [
      "Install a third-party logging agent inside every workload virtual machine and forward its output to the security platform",
      "Mirror the Edge nodes' uplink traffic to a dedicated logging appliance that reconstructs events from the packet stream",
      "Enable SNMP traps on the NSX Managers only, because Edge and host log events are already rolled into the manager event stream",
      "Enable log forwarding (syslog) on NSX Managers, Edges and hosts, sending events to the central collector for analysis"
    ],
    "correct": 3,
    "explanation": "NSX components support remote syslog forwarding; configuring it on managers, edges and hosts centralizes logs, commonly into VCF Operations for Logs.",
    "diff": 1
  },
  {
    "domain": "VMware NSX",
    "cert": "VCAP",
    "duty": "H",
    "task": "H2",
    "q": "A stretched segment spans two federated sites. Which endpoint type carries overlay traffic between the sites?",
    "options": [
      "Remote tunnel endpoints (RTEPs) configured on the Edge nodes at each site, carrying inter-site overlay traffic",
      "The Global Manager's management network interface, which relays overlay traffic between the sites it manages",
      "Standard tunnel endpoints (TEPs) configured on every host transport node in both of the federated sites",
      "The Tier-0 gateways' BGP uplinks alone, since stretched segments route between sites without any tunneling"
    ],
    "correct": 0,
    "explanation": "In a federated deployment, inter-site overlay traffic rides tunnels between RTEPs configured on each site's Edge nodes.",
    "diff": 2
  },
  {
    "domain": "VMware NSX",
    "cert": "VCAP",
    "duty": "H",
    "task": "H11",
    "q": "In NSX projects (tenancy), a project administrator reports they cannot see the default Tier-0 or other projects' objects. Is this expected, and why?",
    "options": [
      "Yes, projects scope visibility and permissions to the project's own objects and its assigned networking resources by design",
      "No, the user needs the Enterprise Admin role assigned before they can see even the objects inside their own project scope",
      "Yes, but only because object quotas hide resources from view until an administrator raises the project's quota limits",
      "No, project administrators inherit full NSX visibility by default, so something in the user's role assignment is broken"
    ],
    "correct": 0,
    "explanation": "NSX projects are a tenancy boundary: users scoped to a project see and manage only that project's objects and the resources assigned to it, isolating tenants from each other.",
    "diff": 1
  },
  {
    "domain": "VMware NSX",
    "cert": "VCAP",
    "duty": "H",
    "task": "H2",
    "q": "An NSX design integrates an external load balancer and third-party service insertion for traffic steering. Which objective area does this advanced integration work fall under, and what is inserted?",
    "options": [
      "VPC connectivity profiles, which automatically insert partner security services into every VPC created in the organization",
      "Federation global policy, which inserts partner appliances between the Global Manager and each site's Local Managers",
      "Edge high availability, which inserts partner services into the failover path between the active and standby Edge nodes",
      "Service insertion, where third-party services such as firewalls or load balancers are chained into the traffic path by policy"
    ],
    "correct": 3,
    "explanation": "Advanced NSX integrations include service insertion, where partner services are registered and traffic is redirected through them by policy for inspection or load balancing.",
    "diff": 2
  }
];
