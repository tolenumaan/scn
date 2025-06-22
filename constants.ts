
import { NotebookData, ContentItemType, Chapter } from './types';
import { CHAPTER_7_CONTENT } from './chapter7'; 
import { CHAPTER_8_CONTENT } from './chapter8';

const CHAPTER_1_CONTENT: Chapter = {
  id: "chapter-1",
  title: "Chapter 1: Cybersecurity Foundations - Building Your Digital Armor",
  shortTitle: "Cybersecurity Foundations",
  sections: [
    {
      id: "1.0", 
      title: "Key Terms Vocabulary Drill",
      content: [
        { type: ContentItemType.PARAGRAPH, text: "Let's start by familiarizing ourselves with some core cybersecurity terms. Use these interactive flashcards to test your knowledge! A strong vocabulary is the first step in understanding the complex world of digital defense."},
        { 
          type: ContentItemType.FLASHCARD_SET,
          flashcardSetData: {
            title: "Cybersecurity Basics Flashcards",
            cards: [
              { id: "fc1-1", term: "Cybersecurity", definition: "The practice of protecting systems, networks, and programs from digital attacks, unauthorized access, or damage. It encompasses a wide range of technologies, processes, and practices designed to safeguard confidentiality, integrity, and availability of digital assets." },
              { id: "fc1-2", term: "Vulnerability", definition: "A weakness in a system, application, design, implementation, or process that could be exploited by an attacker to compromise security objectives." },
              { id: "fc1-3", term: "Threat", definition: "Any potential danger, actor, or event that can exploit a vulnerability to breach security and cause harm to an asset. Threats can be intentional (e.g., hackers) or accidental (e.g., natural disasters)." },
              { id: "fc1-4", term: "Risk", definition: "The likelihood (probability) of a threat exploiting a vulnerability and the resulting impact or damage. Risk = Likelihood x Impact." },
              { id: "fc1-5", term: "Malware", definition: "Malicious software (e.g., viruses, ransomware, spyware, trojans, worms) designed to disrupt, damage, or gain unauthorized access to a computer system or data." },
              { id: "fc1-6", term: "Phishing", definition: "A type of social engineering where attackers deceive individuals into revealing sensitive information (like credentials or credit card numbers) by impersonating a trustworthy entity, often via email, text message (smishing), or voice call (vishing)." },
              { id: "fc1-7", term: "Exploit", definition: "A piece of software, data, or sequence of commands that takes advantage of a bug or vulnerability to cause unintended or unanticipated behavior to occur on computer software, hardware, or something electronic (usually computerized)." },
              { id: "fc1-8", term: "Zero-Day", definition: "A vulnerability that is unknown to those who should be interested in mitigating it (including the vendor of the target software). Until the vulnerability is mitigated, hackers can exploit it to adversely affect computer programs, data, additional computers or a network. An exploit directed at a zero-day is called a zero-day exploit." }
            ]
          }
        }
      ]
    },
    {
      id: "1.1",
      title: "Introduction to Cybersecurity: Why It Matters in a Connected World",
      content: [
        { type: ContentItemType.PARAGRAPH, text: "Cybersecurity is an indispensable discipline dedicated to safeguarding digital systems, networks, programs, and data from malicious digital attacks. Its primary objective is to protect sensitive information and ensure that digital operations can proceed securely and without interruption. This protection extends to both the physical components of a computer, known as hardware, and the programs that run on them, referred to as software." },
        { type: ContentItemType.HEADING3, text: "A Brief History and Evolution of Cybersecurity"},
        { type: ContentItemType.LIST, items: [
            "Early Days (1970s-1980s): Focus on academic research and protecting mainframe systems. The ARPANET era saw early viruses like 'Creeper' and 'Reaper'.",
            "The Rise of Personal Computers & Internet (1990s): Proliferation of viruses (e.g., Melissa, ILOVEYOU), necessitating commercial antivirus software. Early firewalls emerged.",
            "The Dot-Com Boom and Beyond (2000s): Increased financial motivation for cybercrime. Worms like Code Red and SQL Slammer caused widespread disruption. Regulatory frameworks started to appear.",
            "Advanced Persistent Threats (APTs) & Nation-State Actors (2010s): Sophisticated, targeted attacks often backed by governments. Rise of ransomware and large-scale data breaches.",
            "The Era of Cloud, IoT, and AI (Present): Expanded attack surfaces. Concerns about data privacy, supply chain attacks, and AI-powered cyberattacks and defenses."
        ]},
        { 
          type: ContentItemType.CAUTIONARY_TALE,
          cautionaryTaleData: {
            text: "A small e-commerce business overlooked basic website security, leading to a data breach that exposed customer credit card details. The financial fallout (fines, legal fees, loss of sales) and loss of customer trust forced them to close within six months.",
            source: "Inspired by numerous real-world incidents affecting SMEs."
          }
        },
        { type: ContentItemType.PARAGRAPH, text: "The landscape of cyber threats is in constant flux, with attacks becoming increasingly frequent and sophisticated. This dynamic environment means that cybersecurity is not a static state but an ongoing, adaptive process. Professionals in this field must continuously learn and evolve their understanding to identify and mitigate new vulnerabilities as they emerge. This constant evolution underscores that achieving a high level of expertise in cybersecurity is about developing a mindset of continuous learning, proactive threat intelligence monitoring, and adaptability, rather than simply memorizing a fixed set of facts. The pervasive nature of cybersecurity is evident in daily life, impacting personal devices, online activities, critical infrastructure (power grids, water supplies, transportation), financial systems, and even national security, highlighting its universal importance." },
        { type: ContentItemType.HEADING3, text: "Impact Across Different Sectors"},
        { type: ContentItemType.LIST, items: [
            "Personal Users: Identity theft, financial fraud, loss of personal data, device compromise.",
            "Businesses: Financial losses (theft, recovery costs, fines), reputational damage, loss of customer trust, intellectual property theft, operational disruption.",
            "Healthcare: Patient data breaches, disruption of medical services, compromise of medical devices.",
            "Government & Public Sector: Espionage, disruption of public services, threats to national security, compromise of sensitive citizen data.",
            "Critical Infrastructure: Potential for physical damage, widespread service outages (power, water, communication), public safety risks."
        ]},
        { type: ContentItemType.PARAGRAPH, text: "A holistic approach to cybersecurity necessitates a deep understanding of both hardware and software. Hardware security involves protecting physical devices from tampering and unauthorized access, encompassing components like motherboards, processors, and memory chips. This physical layer provides a foundational barrier against threats. Complementing this, software security ensures that programs running on these devices are safe from digital attacks. The combination of hardware and software security forms a robust defensive wall against cyber threats, illustrating that effective protection requires securing the entire technology stack, from the physical chips to the applications running on them." }
      ]
    },
    {
      id: "1.2",
      title: "Core Concepts: The CIA Triad, AAA Framework, and Beyond",
      content: [
        { type: ContentItemType.PARAGRAPH, text: "At the heart of cybersecurity are fundamental principles that guide all protective measures. The CIA Triad and the AAA Framework provide essential models for understanding the goals and mechanisms of digital security. We will also explore related concepts like Non-Repudiation." },
        { 
          type: ContentItemType.INTERACTIVE_CONCEPT,
          interactiveConceptData: {
            title: "The CIA Triad - Interactive Exploration",
            introduction: "The CIA Triad outlines the three primary objectives of information security. Click each concept to learn more about its real-world implications, examples of failures, and key protective measures:",
            concepts: [
              { 
                id: "confidentiality", 
                term: "Confidentiality", 
                brief: "Ensures that data and information are accessible only to authorized individuals.",
                details: [
                  { title: "Core Principle", explanation: "This involves implementing strict security measures, such as encryption, access controls, and data classification, to prevent unauthorized disclosure of sensitive information." },
                  { title: "Example of Failure (Detailed)", explanation: "A company stores unencrypted customer PII (Personally Identifiable Information) in a publicly accessible cloud storage bucket. An attacker discovers this bucket via automated scanning tools and downloads the entire dataset, leading to identity theft for affected customers and severe regulatory fines for the company.", example: "Data Breach: Unencrypted customer PII exposed via misconfigured S3 bucket." },
                  { title: "Protective Measures", explanation: "Strong passwords, multi-factor authentication (MFA), data encryption (at rest, in transit, in use), access control lists (ACLs), role-based access control (RBAC), data classification policies, data loss prevention (DLP) tools, network segmentation." }
                ]
              },
              { 
                id: "integrity", 
                term: "Integrity", 
                brief: "Focuses on maintaining the accuracy, consistency, and trustworthiness of data over its entire lifecycle. Data must not be changed in an unauthorized or undetected manner.",
                details: [
                  { title: "Core Principle", explanation: "Any unauthorized modification, deletion, or tampering with data compromises its integrity, potentially leading to incorrect decisions, financial fraud, or system malfunctions. Only authorized users or processes should be able to alter data." },
                  { title: "Example of Failure (Detailed)", explanation: "A disgruntled employee with database access alters financial records before leaving the company, changing transaction amounts to cover up embezzlement. The alterations go undetected for weeks due to lack of integrity checks and audit trails.", example: "Financial Fraud: Employee manipulates database records." },
                  { title: "Protective Measures", explanation: "Hashing algorithms (MD5, SHA-256, SHA-3) for verification, digital signatures, version control systems, file integrity monitoring (FIM), audit trails, checksums, input validation, proper database constraints, role-based access control." }
                ]
              },
              { 
                id: "availability", 
                term: "Availability", 
                brief: "Ensures that authorized users can access information systems, resources, and data whenever needed, without undue delay.",
                details: [
                  { title: "Core Principle", explanation: "Preventing situations where systems or data are inaccessible due to attacks, hardware failures, software bugs, or overwhelming legitimate traffic. This includes protection against Denial of Service (DoS) and Distributed Denial of Service (DDoS) attacks." },
                  { title: "Example of Failure (Detailed)", explanation: "A competitor launches a DDoS attack against an e-commerce website during a peak sales period. The website's servers are overwhelmed with malicious traffic, making the site unavailable to legitimate customers, resulting in significant revenue loss and reputational damage.", example: "Service Disruption: E-commerce site offline due to DDoS attack." },
                  { title: "Protective Measures", explanation: "Redundant systems (hardware, software, network links), regular backups and tested disaster recovery plans, DDoS mitigation services, load balancing, robust network infrastructure, uninterruptible power supplies (UPS), fault-tolerant design, timely patching." }
                ]
              }
            ]
          }
        },
        { type: ContentItemType.PARAGRAPH, text: "These three concepts collectively form the bedrock for protecting sensitive information and guaranteeing the secure operation of digital systems. They represent the fundamental objectives that cybersecurity endeavors to achieve: keeping data protected and systems operational. It's important to recognize that these components often exist in a dynamic tension; for example, extremely stringent confidentiality measures (like complex, multi-layered encryption requiring frequent re-authentication) might slightly impede availability or ease of use. Effective cybersecurity involves balancing these aspects based on risk assessment and operational needs. For instance, a public website's primary goal might be availability, while a secret military database prioritizes confidentiality." },
        
        { type: ContentItemType.HEADING3, text: "The AAA Framework (and Accountability)" },
        { type: ContentItemType.PARAGRAPH, text: "The AAA Framework (Identification, Authentication, Authorization) describes the mechanisms through which the goals of the CIA Triad are realized. Auditing and Accountability are often included as crucial supporting components." },
        
        { type: ContentItemType.HEADING4, text: "Identification (Who are you?)"},
        { type: ContentItemType.PARAGRAPH, text: "The process by which a user or entity claims an identity. This is the first step in gaining access to a system. Examples include usernames, email addresses, account numbers, or unique device identifiers."},
        { type: ContentItemType.LIST, items: [
            "Methods: User-provided identifiers, system-assigned identifiers.",
            "Importance: Forms the basis for subsequent authentication and authorization decisions."
        ]},

        { type: ContentItemType.HEADING4, text: "Authentication (Prove you are who you say you are)"},
        { type: ContentItemType.PARAGRAPH, text: "The verification of a user's or entity's claimed identity. This typically involves one or more authentication factors:"},
        { type: ContentItemType.LIST, items: [
            "Something you know: Passwords, PINs, security questions.",
            "Something you have: Physical tokens (smart cards, USB keys), one-time password (OTP) generators (hardware or software like Google Authenticator, Authy), digital certificates.",
            "Something you are: Biometrics (fingerprints, facial recognition, iris scans, voice recognition).",
            "Multi-Factor Authentication (MFA) / Two-Factor Authentication (2FA): Using two or more different factors significantly enhances security. For example, a password (something you know) plus an OTP from a mobile app (something you have)."
        ]},
        { type: ContentItemType.PARAGRAPH, text: "Strong authentication is a critical defense against unauthorized access."},

        { type: ContentItemType.HEADING4, text: "Authorization (What are you allowed to do?)"},
        { type: ContentItemType.PARAGRAPH, text: "The process of determining the specific permissions and privileges granted to an authenticated user or process to access system resources (files, applications, databases, functions). This controls what an authenticated entity is allowed to do."},
        { type: ContentItemType.LIST, items: [
            "Principle of Least Privilege: Grant only the minimum necessary permissions required to perform a task.",
            "Access Control Models:",
            "  - Discretionary Access Control (DAC): Resource owners control access permissions (e.g., standard file permissions in Linux/Windows).",
            "  - Mandatory Access Control (MAC): System-enforced access based on security labels of subjects and objects (e.g., SELinux, AppArmor). Bell-LaPadula (confidentiality) and Biba (integrity) are formal MAC models.",
            "  - Role-Based Access Control (RBAC): Permissions are assigned to roles, and users are assigned to roles. Simplifies management.",
            "  - Attribute-Based Access Control (ABAC): Access decisions based on attributes of the user, resource, environment, and action."
        ]},

        { type: ContentItemType.HEADING4, text: "Auditing (What happened?)"},
        { type: ContentItemType.PARAGRAPH, text: "The systematic recording, collection, and review of security-relevant events and activities within a system. Audit logs provide a chronological record of who did what, when, and where."},
        { type: ContentItemType.LIST, items: [
            "Purpose: Detect security incidents, investigate breaches, troubleshoot problems, demonstrate compliance, deter malicious activity.",
            "Examples: Login attempts (successful/failed), file access, system configuration changes, application errors, network connections.",
            "Tools: System logs, Security Information and Event Management (SIEM) systems."
        ]},

        { type: ContentItemType.HEADING4, text: "Accountability (Who is responsible?)"},
        { type: ContentItemType.PARAGRAPH, text: "Ensuring that actions taken within a system can be definitively traced back to a specific individual or entity. This relies heavily on strong identification, authentication, and comprehensive auditing."},
        { type: ContentItemType.LIST, items: [
            "Importance: Holds individuals responsible for their actions, aids in investigations, and discourages misuse."
        ]},
        
        { type: ContentItemType.HEADING3, text: "Non-Repudiation"},
        { type: ContentItemType.PARAGRAPH, text: "Non-repudiation provides proof that a specific action was taken by a specific entity, preventing that entity from later denying they performed the action. It's crucial for legal and financial transactions."},
        { type: ContentItemType.LIST, items: [
            "Non-repudiation of Origin: Proof that the sender actually sent the message/data.",
            "Non-repudiation of Receipt: Proof that the recipient actually received the message/data.",
            "Mechanisms: Often achieved through digital signatures (using asymmetric cryptography), trusted timestamps, and secure audit trails."
        ]},

        { type: ContentItemType.PARAGRAPH, text: "The CIA Triad defines what cybersecurity aims to protect, while the AAA Framework and related concepts like Non-Repudiation outline how these protections are practically implemented and enforced. This interconnectedness is a foundational understanding for anyone entering the cybersecurity field. Furthermore, the AAA framework forms a critical underpinning for modern security paradigms like Zero Trust, where explicit verification (authentication and authorization) is required for every access request, regardless of whether the user or device is inside or outside the traditional network perimeter." },
        { 
          type: ContentItemType.TABLE,
          tableData: {
            caption: "CIA Triad and AAA Framework Summary",
            headers: ["Concept/Service", "Definition", "Key Security Measures/Examples"],
            rows: [
              { "Concept/Service": "CIA Triad", "Definition": "Core security objectives.", "Key Security Measures/Examples": "Confidentiality, Integrity, Availability goals." },
              { "Concept/Service": "Confidentiality", "Definition": "Data accessible only to authorized persons.", "Key Security Measures/Examples": "Encryption (AES, RSA), Access Controls (ACLs, RBAC), Data Classification, MFA." },
              { "Concept/Service": "Integrity", "Definition": "Data remains accurate and unaltered.", "Key Security Measures/Examples": "Hashing (SHA-256), Digital Signatures, Version Control, FIM, Audit Trails." },
              { "Concept/Service": "Availability", "Definition": "Resources accessible to authorized users when needed.", "Key Security Measures/Examples": "Redundancy (RAID, clustering), Backups, Disaster Recovery Plans, DDoS Protection, Load Balancing." },
              { "Concept/Service": "AAA Framework", "Definition": "Mechanisms for access control.", "Key Security Measures/Examples": "Identification, Authentication, Authorization, Auditing, Accountability." },
              { "Concept/Service": "Identification", "Definition": "Claiming an identity.", "Key Security Measures/Examples": "Username, User ID, Email Address, Biometric scan initiation." },
              { "Concept/Service": "Authentication", "Definition": "Verifying identity.", "Key Security Measures/Examples": "Passwords, Biometrics (fingerprint, face), MFA/2FA (OTP tokens, push notifications), Smart Cards, Digital Certificates." },
              { "Concept/Service": "Authorization", "Definition": "Determining permissions/privileges.", "Key Security Measures/Examples": "Role-Based Access Control (RBAC), Access Control Lists (ACLs), Mandatory Access Control (MAC), Attribute-Based Access Control (ABAC), Principle of Least Privilege." },
              { "Concept/Service": "Auditing", "Definition": "Recording and reviewing activities.", "Key Security Measures/Examples": "System Logs (security, application, system), Network Logs, SIEM systems, Activity Monitoring." },
              { "Concept/Service": "Accountability", "Definition": "Tracing actions to an individual.", "Key Security Measures/Examples": "Secure audit trails linking actions to authenticated identities, non-repudiation mechanisms." },
              { "Concept/Service": "Non-Repudiation", "Definition": "Proof of an action's origin or receipt.", "Key Security Measures/Examples": "Digital Signatures (PKI), Trusted Timestamps, Secure Logging." }
            ]
          }
        }
      ]
    },
    {
      id: "1.3",
      title: "Computer Hardware Essentials: Components and Their Security Role",
      content: [
        { type: ContentItemType.PARAGRAPH, text: "Understanding the physical components of a computer is crucial for cybersecurity, as hardware forms the bedrock upon which all software operates. A compromise at the hardware level can undermine even the most robust software defenses. This section delves into core components, their functions, and specific security relevance." },
        { type: ContentItemType.HEADING3, text: "Core Components and Functions:" },
        { type: ContentItemType.LIST, items: [
          "Central Processing Unit (CPU): Often called the \"brain\" of the computer, the CPU is responsible for executing instructions and managing the flow of data within the system. Its performance is influenced by factors such as clock speed, the number of processing cores, and cache size, all of which impact how quickly and efficiently data is handled. Modern CPUs also include hardware-based security features like virtualization support (Intel VT-x, AMD-V) and trusted execution environments.",
          "Motherboard: This is the primary circuit board that serves as the central hub, connecting all internal components like the CPU, RAM, graphics card, and storage devices. It facilitates communication between these components and distributes power, providing the essential infrastructure for the computer to function. It also houses the BIOS/UEFI firmware, which is critical for initializing hardware during the boot process. Its chipsets manage data flow between components.",
          "Random Access Memory (RAM): RAM acts as temporary, high-speed storage for data that the CPU is actively using, enabling quick access and efficient multitasking. The quantity and speed of RAM significantly influence the overall responsiveness of the system. It is volatile, meaning data is lost when power is removed.",
          "Storage (HDD/SSD/NVMe): These devices are responsible for permanently storing data, including the operating system, applications, and user files. Hard Disk Drives (HDDs) are traditional mechanical storage. Solid State Drives (SSDs) offer faster data access using flash memory. NVMe (Non-Volatile Memory Express) drives are even faster SSDs connecting via the PCIe bus.",
          "Network Interface Card (NIC): Whether wired (Ethernet) or wireless (Wi-Fi), the NIC is the component that enables a computer to connect to a network, facilitating digital communication. Each NIC has a unique MAC address.",
          "Power Supply Unit (PSU): The PSU converts AC power from the outlet to DC power and supplies the necessary electrical power to all the computer's internal components, ensuring their stable and reliable operation.",
          "Graphics Processing Unit (GPU): Primarily designed for rendering visuals, GPUs are also used for parallel processing tasks, including, in some contexts, password cracking. Integrated GPUs are part of the CPU, while dedicated GPUs are separate cards.",
          "Trusted Platform Module (TPM): A dedicated microcontroller designed to secure hardware by integrating cryptographic keys into devices. Used for secure boot, disk encryption key storage, and platform integrity attestation.",
          "Hardware Security Module (HSM): A physical computing device that safeguards and manages digital keys for strong authentication and provides cryptoprocessing. HSMs are typically more robust and certified than TPMs, used in enterprise environments for high-value cryptographic operations."
        ]},
        { type: ContentItemType.HEADING3, text: "Hardware's Security Relevance and Vulnerabilities:" },
        { type: ContentItemType.PARAGRAPH, text: "The physical nature of hardware makes it a critical layer of defense. Physical security measures (locks, access controls for server rooms) are essential. However, hardware itself can be a source of vulnerabilities or a target." },
        { type: ContentItemType.LIST, items: [
          "CPU Vulnerabilities: Speculative execution attacks (e.g., Spectre, Meltdown) exploit CPU optimizations to leak sensitive data. Microcode updates can mitigate some of these.",
          "RAM Attacks: Cold boot attacks can recover data from RAM shortly after power-off. Rowhammer attacks exploit electrical interference between memory cells to flip bits.",
          "Storage Security: Data at rest encryption (Full Disk Encryption like BitLocker/LUKS, file-level encryption). Secure erase procedures are needed to truly wipe data. SSDs may require specific ATA Secure Erase commands.",
          "Firmware (BIOS/UEFI) Security: Firmware is the first software to run. Compromised firmware (e.g., bootkits, rootkits like LoJax) can be persistent and hard to detect. UEFI Secure Boot aims to prevent unauthorized code from running during boot. Regular firmware updates are crucial.",
          "Supply Chain Attacks: Malicious components or firmware can be inserted during manufacturing or distribution. This is a significant concern for critical infrastructure and government systems.",
          "Side-Channel Attacks: Exploiting physical emanations (power consumption, electromagnetic radiation, sound) to infer sensitive information from hardware operations.",
          "Physical Tampering: Unauthorized modification or replacement of hardware components. Evil maid attacks involve physical access to unattended devices."
        ]},
        { type: ContentItemType.PARAGRAPH, text: "To mitigate these risks, regular updates for hardware devices and their firmware are crucial. Keeping the motherboard's firmware and BIOS updated helps protect against known vulnerabilities and often includes security patches and bug fixes that address potential exploits. This emphasizes the interdependent relationship between hardware and software security: hardware provides physical protection and foundational integrity (e.g., through secure boot mechanisms), while software builds upon that to detect and mitigate digital threats. Neglecting the security of one aspect, such as the physical security of a server or the integrity of its low-level firmware, can undermine even the most robust software defenses, underscoring the necessity of a holistic approach to cybersecurity." },
        {
          type: ContentItemType.TABLE,
          tableData: {
            caption: "Hardware Components and Security Deep Dive",
            headers: ["Component", "Basic Function", "Key Security Relevance", "Common Vulnerabilities/Threats", "Mitigation Examples"],
            rows: [
              { "Component": "CPU", "Basic Function": "Executes instructions.", "Key Security Relevance": "Secure processing, crypto operations, trusted execution.", "Common Vulnerabilities/Threats": "Spectre, Meltdown, side-channel attacks, microcode bugs.", "Mitigation Examples": "Microcode updates, OS patches, careful programming." },
              { "Component": "Motherboard/Firmware (BIOS/UEFI)", "Basic Function": "Connects components, initial boot.", "Key Security Relevance": "Root of trust, secure boot.", "Common Vulnerabilities/Threats": "Firmware rootkits/bootkits, supply chain attacks, misconfigurations.", "Mitigation Examples": "UEFI Secure Boot, regular firmware updates from vendor, supply chain vetting." },
              { "Component": "RAM", "Basic Function": "Temporary active data storage.", "Key Security Relevance": "Volatile data security, memory forensics.", "Common Vulnerabilities/Threats": "Cold boot attacks, Rowhammer, memory scraping malware.", "Mitigation Examples": "RAM encryption (less common), physical security, OS memory protection." },
              { "Component": "Storage (HDD/SSD/NVMe)", "Basic Function": "Permanent data storage.", "Key Security Relevance": "Data at rest security, data remanence.", "Common Vulnerabilities/Threats": "Data exfiltration, physical theft, improper wiping, firmware attacks on drives.", "Mitigation Examples": "Full Disk Encryption (FDE), file-level encryption, secure erase utilities, physical security." },
              { "Component": "NIC", "Basic Function": "Network connectivity.", "Key Security Relevance": "Network access control, traffic source/destination.", "Common Vulnerabilities/Threats": "MAC spoofing, ARP poisoning (related), driver vulnerabilities.", "Mitigation Examples": "Port security on switches, ARP inspection, driver updates." },
              { "Component": "PSU", "Basic Function": "Supplies power.", "Key Security Relevance": "System stability, (rare) power-based attacks.", "Common Vulnerabilities/Threats": "Power glitching, malicious PSUs (supply chain).", "Mitigation Examples": "Quality PSUs, UPS, physical inspection." },
              { "Component": "TPM", "Basic Function": "Hardware-based key storage, integrity checks.", "Key Security Relevance": "Secure boot, disk encryption key protection, attestation.", "Common Vulnerabilities/Threats": "Physical attacks on TPM chip (difficult), firmware bugs in TPM.", "Mitigation Examples": "Using TPM features correctly, keeping TPM firmware updated." },
              { "Component": "HSM", "Basic Function": "Secure cryptographic operations and key management.", "Key Security Relevance": "High-assurance key protection for critical applications.", "Common Vulnerabilities/Threats": "Physical attacks (highly resistant), misconfiguration of HSM policies.", "Mitigation Examples": "FIPS 140-2/3 certified HSMs, proper deployment and management." }
            ]
          }
        }
      ]
    },
     {
      id: "1.4",
      title: "Software Fundamentals: OS, Applications, Firmware, and Their Interplay",
      content: [
        { type: ContentItemType.PARAGRAPH, text: "Software, the intangible counterpart to hardware, encompasses all sets of instructions—programs, data, and protocols—that direct a computer's operations. It's broadly categorized into firmware, operating systems, and application software, each playing a distinct role and presenting unique security considerations. Understanding their interplay is key to a holistic security view." },
        
        { type: ContentItemType.HEADING3, text: "Firmware: The Hardware's Soul (Expanded)" },
        { type: ContentItemType.PARAGRAPH, text: "Firmware is a special type of software embedded directly into a hardware device, such as a motherboard's BIOS/UEFI, a router, an IoT device, or even components like SSDs and NICs. It provides low-level control for the device's specific hardware and is the first code to run when the device is powered on." },
        { type: ContentItemType.LIST, items: [
            "Security Role: Initializes hardware securely, enables secure boot processes (e.g., UEFI Secure Boot verifies digital signatures of bootloaders), can implement hardware-level security features, and forms a root of trust for the system. Manages low-level hardware settings.",
            "Vulnerabilities: Firmware can be targeted by advanced persistent threats (APTs) to install rootkits or bootkits that are difficult to detect and remove, as they load before the operating system. Compromised firmware can undermine all higher-level security measures. Common vulnerabilities include hardcoded credentials, undocumented backdoors, and flaws in the update mechanism.",
            "Examples: BIOS/UEFI on motherboards, router firmware, printer firmware, firmware for network cards, SSD controller firmware.",
            "Mitigation: Regularly updating firmware from trusted vendor sources is crucial to patch known vulnerabilities. Employing hardware-backed security features like Trusted Platform Modules (TPMs) can enhance firmware integrity verification. Supply chain security for firmware is also critical."
        ]},
        
        { type: ContentItemType.HEADING3, text: "Operating Systems (OS): The System's Conductor (Expanded)" },
        { type: ContentItemType.PARAGRAPH, text: "The OS (e.g., Windows, macOS, Linux, Android, iOS, specialized RTOS for embedded systems) is system software that manages computer hardware, software resources, and provides common services for computer programs. It acts as an intermediary between applications and the hardware." },
        { type: ContentItemType.PARAGRAPH, text: "Think of an Operating System = The conductor of an orchestra, ensuring all instruments (hardware and software) play together harmoniously, managing resources, and enforcing rules so they don't interfere with each other improperly." },
        { type: ContentItemType.LIST, items: [
            "Core Functions: Process management, memory management, file system management, device management, user interface, and importantly, security enforcement.",
            "Security Role: Manages user authentication and authorization, controls access to files and resources (access control using models like DAC, MAC, RBAC), isolates processes from each other (memory protection, sandboxing), handles system calls (the interface between user-mode applications and the privileged kernel), provides APIs for applications, and logs system events.",
            "Kernel vs. User Mode: The OS kernel runs in a privileged mode (kernel mode or ring 0) with direct access to hardware. Applications run in a less privileged user mode. This separation is crucial for system stability and security; applications cannot directly access hardware or critical OS data without going through controlled kernel interfaces (system calls).",
            "Virtualization & Containers: Modern OS often support virtualization (running multiple OS instances on one physical machine via a hypervisor) and containerization (isolating applications with their dependencies, like Docker). These add layers of complexity and potential vulnerabilities (e.g., VM escape, container breakout).",
            "Vulnerabilities: OS vulnerabilities can allow attackers to escalate privileges, bypass access controls, execute arbitrary code (often in kernel mode), or cause denial of service. Common sources include bugs in the kernel, system services, drivers, or system libraries.",
            "Mitigation: Regular patching and updates (critical!), proper configuration (hardening by disabling unnecessary services, applying security baselines), use of built-in security features (firewalls, antivirus, DEP, ASLR), implementing the principle of least privilege for users and services, robust logging and monitoring."
        ]},
        
        { type: ContentItemType.HEADING3, text: "Application Software: The User's Tools (Expanded)" },
        { type: ContentItemType.PARAGRAPH, text: "Application software (apps) consists of programs designed to perform specific tasks for users or other applications. This is the software users interact with most directly." },
        { type: ContentItemType.LIST, items: [
            "Types: Web browsers, word processors, spreadsheets, databases, email clients, games, enterprise resource planning (ERP) systems, custom-developed business applications, mobile apps, etc.",
            "Security Role: Applications process and store user data, interact with networks, and execute user commands. Their security depends heavily on secure coding practices by developers, proper configuration by administrators/users, and their interaction with the underlying OS.",
            "Vulnerabilities: Common application vulnerabilities include those listed in the OWASP Top 10 (e.g., SQL injection, Cross-Site Scripting (XSS), insecure deserialization, broken authentication), buffer overflows, race conditions, insecure API usage, and improper error handling. These can lead to data breaches, unauthorized access, or system compromise.",
            "Mitigation: Secure Software Development Lifecycle (SSDLC) practices (including threat modeling, secure code reviews, static and dynamic application security testing - SAST/DAST), regular code audits and vulnerability scanning, input validation and output encoding, use of secure libraries and APIs, timely patching of identified vulnerabilities, principle of least privilege for application service accounts, web application firewalls (WAFs)."
        ]},
        
        { type: ContentItemType.HEADING3, text: "The Interplay and Defense-in-Depth" },
        { type: ContentItemType.PARAGRAPH, text: "Security at each software layer is crucial, and they are deeply interconnected. A vulnerability in firmware can compromise the OS, rendering its security features ineffective. An OS vulnerability can compromise all applications running on it. Similarly, a vulnerable application can expose the OS or user data. This hierarchical dependency means that a 'defense-in-depth' strategy, securing all layers, is essential for robust cybersecurity. If one layer of defense is bypassed, others should ideally still be in place to detect or prevent the attack." },
        { type: ContentItemType.TABLE, tableData: {
            caption: "Software Layers: Roles and Security Focus",
            headers: ["Software Layer", "Primary Role", "Key Security Functions", "Common Vulnerability Types", "Primary Mitigation Focus"],
            rows: [
                { "Software Layer": "Firmware", "Primary Role": "Hardware initialization, low-level control", "Key Security Functions": "Secure boot, hardware configuration, root of trust", "Common Vulnerability Types": "Rootkits/Bootkits, hardcoded credentials, update mechanism flaws", "Primary Mitigation Focus": "Vendor patches, secure boot configuration, supply chain integrity" },
                { "Software Layer": "Operating System (OS)", "Primary Role": "Manages hardware & software resources, provides services", "Key Security Functions": "Authentication, access control, process isolation, memory management, logging", "Common Vulnerability Types": "Privilege escalation, kernel exploits, driver vulnerabilities, misconfigurations", "Primary Mitigation Focus": "Patching, hardening, security feature configuration (firewall, ASLR, DEP), logging" },
                { "Software Layer": "Application Software", "Primary Role": "Performs user-specific tasks", "Key Security Functions": "Handles user data, interacts with OS/network", "Common Vulnerability Types": "OWASP Top 10 (SQLi, XSS, etc.), buffer overflows, insecure APIs", "Primary Mitigation Focus": "Secure coding (SSDLC), input validation, output encoding, patching, WAFs" }
            ]
          }
        }
      ]
    }
  ],
  endOfChapterContent: [
    {
        type: ContentItemType.MICRO_LEARNING_TIP,
        microLearningTipData: {
            tip: "5-Minute Security Tip: Always double-check the sender's email address for any suspicious variations (e.g., `yourbank.secure.com` vs. `secure.yourbank.com`) before clicking links or downloading attachments. A common tactic is using slightly misspelled domain names or subdomains to trick you!"
        }
    },
    {
        type: ContentItemType.END_OF_CHAPTER_ACTIONS,
        endOfChapterActionsData: {
            title: "Chapter 1 Recap & Next Steps: Building Your Foundation",
            actions: [
                { text: "Review the CIA Triad and AAA framework. Can you explain each component and give a real-world example of its failure and a corresponding protective measure?", link: "/chapter-1/1.2", linkText: "Revisit Section 1.2"},
                { text: "Identify 3 hardware components in your own computer (or a conceptual one). For each, list one specific security risk discussed and a potential mitigation." },
                { text: "Consider one piece of application software you use daily (e.g., web browser, email client). What kind of data does it handle? What is one vulnerability type it might be susceptible to, and what's a general way to mitigate it?" },
                { text: "Reflect on why cybersecurity is important to you personally or professionally. This motivation will fuel your learning journey."}
            ]
        }
    }
  ]
};

const CHAPTER_2_CONTENT: Chapter = {
  id: "chapter-2",
  title: "Chapter 2: Operating System Security - Securing Your Digital Core",
  shortTitle: "OS Security",
  sections: [
    {
      id: "2.1",
      title: "Principles of OS Security: Access Control, Memory Management, and Process Isolation",
      content: [
        { type: ContentItemType.PARAGRAPH, text: "Operating System (OS) security hinges on fundamental principles designed to protect system resources and data from unauthorized access or modification. Key among these are robust access control mechanisms, secure memory management, and strict process isolation. These principles work in concert to create a trusted computing base." },
        { 
          type: ContentItemType.CAUTIONARY_TALE,
          cautionaryTaleData: {
            text: "A company suffered a major ransomware attack because an employee used a weak, easily guessed password ('password123') for their administrative account on a critical server. This allowed attackers to gain full control via RDP, disable security software, and encrypt all data, causing days of downtime and significant financial loss.",
            source: "Common scenario in ransomware incidents."
          }
        },
        { type: ContentItemType.HEADING3, text: "Deep Dive into Access Control Models:" },
        { type: ContentItemType.PARAGRAPH, text: "Access control is the mechanism that determines who is allowed to access what resources and what operations they are permitted to perform. Several models exist:"},
        { type: ContentItemType.LIST, items: [
            "Discretionary Access Control (DAC): The owner of an object (e.g., file, directory) determines who has access and what privileges they have (e.g., read, write, execute). This is common in systems like Windows (using Access Control Lists - ACLs) and standard Linux permissions (owner, group, other). While flexible, it can be prone to privilege escalation if an owner grants excessive permissions or their account is compromised. Example: You create a file and decide who can read or edit it.",
            "Mandatory Access Control (MAC): Access decisions are made by a central authority based on security labels (e.g., Confidential, Secret, Top Secret) assigned to subjects (users/processes) and objects (files/resources). The OS enforces these policies, and users (even owners) cannot override them. Examples include SELinux (Security-Enhanced Linux) and AppArmor in Linux, and historically, systems designed for military/government use. MAC systems are generally considered more secure for environments requiring high assurance.",
            "  - Bell-LaPadula Model (Confidentiality-focused MAC): Enforces 'no read up' (a subject cannot read an object with a higher security level) and 'no write down' (a subject cannot write information to an object with a lower security level). Aims to prevent leakage of sensitive information.",
            "  - Biba Model (Integrity-focused MAC): Enforces 'no write up' (a subject cannot write to an object with a higher integrity level) and 'no read down' (a subject cannot read from an object with a lower integrity level). Aims to prevent contamination of high-integrity data by lower-integrity sources.",
            "Role-Based Access Control (RBAC): Access permissions are assigned to roles (e.g., 'Administrator', 'Accountant', 'Read-Only User') rather than individual users. Users are then assigned to one or more roles, inheriting their permissions. Simplifies administration in large organizations, enforces least privilege by ensuring users only have access relevant to their job functions, and facilitates easier permission reviews and changes.",
            "Attribute-Based Access Control (ABAC): Access decisions are based on policies that combine attributes of the user (e.g., role, department, location), the resource being accessed (e.g., sensitivity level, data type), the action being attempted (e.g., read, write, delete), and even environmental conditions (e.g., time of day, threat level). ABAC offers very fine-grained and dynamic access control."
        ]},
        { type: ContentItemType.HEADING3, text: "Secure Memory Management:" },
        { type: ContentItemType.PARAGRAPH, text: "The OS is responsible for managing the system's memory, allocating it to processes, and ensuring that one process cannot illegitimately access or corrupt the memory space of another process or the OS kernel itself. This is crucial for stability and security."},
        { type: ContentItemType.LIST, items: [
            "Address Space Layout Randomization (ASLR): Randomizes the memory locations of key data areas of a process (executables, libraries, heap, stack) each time it runs. This makes it significantly harder for attackers to predict target addresses for exploits like buffer overflows or return-oriented programming (ROP) attacks.",
            "Data Execution Prevention (DEP)/No-Execute (NX) Bit: A hardware and OS feature that marks certain memory regions (typically those containing data like the stack and heap) as non-executable. If an attacker manages to inject malicious code into these areas, DEP prevents it from being run, mitigating many common exploitation techniques.",
            "Stack Canaries/Guard Pages: Stack canaries are small, known values placed on the stack before function return addresses. If a buffer overflow overwrites the stack, the canary value will change, and the OS can detect this tampering before the overwritten return address is used, preventing control flow hijacking. Guard pages are memory pages marked as invalid, placed around critical data structures (like stacks) to detect overflows.",
            "Kernel Page Table Isolation (KPTI) / Meltdown Mitigation: A technique to separate user-space and kernel-space page tables to mitigate vulnerabilities like Meltdown, which could allow user-mode processes to read kernel memory.",
            "Virtual Memory: Each process gets its own virtual address space, isolating it from other processes. The OS and CPU's Memory Management Unit (MMU) handle the mapping from virtual to physical addresses."
        ]},
         { type: ContentItemType.HEADING3, text: "Process Isolation and Sandboxing:" },
         { type: ContentItemType.PARAGRAPH, text: "Process isolation ensures that individual processes run in separate, confined environments, limiting the potential impact if one process is compromised. Sandboxing is a specific form of strong process isolation."},
        { type: ContentItemType.LIST, items: [
            "User Authentication: Verifying the identity of users before granting access (passwords, biometrics, MFA). This is the first gatekeeper.",
            "Access Control Lists (ACLs) & Permissions: Defining specific permissions for objects (files, directories, registry keys) specifying who (users/groups) can do what (read, write, execute, delete, etc.).",
            "Kernel Mode vs. User Mode (Privilege Separation): Separating privileged OS operations (kernel mode, ring 0) from less privileged application operations (user mode, ring 3). System calls are the controlled interface for user mode processes to request services from the kernel. This prevents applications from directly manipulating hardware or critical OS data.",
            "Virtual Memory Management: Provides each process with its own isolated virtual address space, preventing direct interference between processes. One process cannot simply read or write to another process's memory.",
            "Sandboxing: A security mechanism for separating running programs, usually in an effort to mitigate system failures and/or software vulnerabilities from spreading. It often involves restricting access to OS resources (files, network, processes). Web browsers heavily use sandboxing for tabs and plugins. Applications can also be run in sandboxed environments (e.g., using AppArmor, SELinux policies, or tools like Sandboxie, Firejail, or container technologies like Docker).",
            "Auditing and Logging: Recording system events (logins, file access, process creation, security policy changes) for security monitoring, anomaly detection, and forensic analysis. Essential for understanding what happened after an incident."
        ]},
        { 
          type: ContentItemType.INTERACTIVE_SCENARIO,
          interactiveScenarioData: {
            title: "Suspicious Login Alert Analysis",
            description: "You are a Junior Security Analyst. An alert pops up: 'Suspicious login detected for user \"admin_backup\" from IP Address 103.45.12.78 (known TOR exit node) at 03:15 AM.' This account is rarely used, and the time is outside standard operational hours. What is your immediate course ofaction?",
            choices: [
              { id: "action1", text: "Immediately block the IP address at the firewall.", feedback: "While blocking might be necessary, doing so immediately without further investigation could disrupt legitimate (though unusual) activity or an automated process, and doesn't address the potential account compromise. It's a strong reaction for an initial step.", isCorrect: false, feedbackType: 'warning' },
              { id: "action2", text: "Attempt to contact the legitimate owner of the \"admin_backup\" account to verify activity.", feedback: "This is a good step for verification, but what if you can't reach them immediately, especially at 3 AM? The potential compromise needs faster containment if malicious. Verification should happen alongside or after containment.", isCorrect: false, feedbackType: 'warning' },
              { id: "action3", text: "Temporarily disable the \"admin_backup\" account, then investigate the source IP (check threat intelligence feeds for its reputation) and system login activity logs for that account and around that time. ", feedback: "Excellent! Disabling the account immediately contains any potential ongoing threat. Investigating logs and the IP's reputation (TOR exit node is highly suspicious for an admin account) will provide more context to determine if it's malicious. This balances immediate containment with investigation.", isCorrect: true, feedbackType: 'success' },
              { id: "action4", text: "Ignore the alert for now; it might be a system glitch. Monitor for further alerts.", feedback: "Ignoring security alerts, especially for privileged accounts from suspicious sources like TOR exit nodes, is highly risky. A proactive approach is always better. This could be an active compromise.", isCorrect: false, feedbackType: 'error' }
            ],
            successMessage: "You've taken the correct initial steps to contain a potential threat and begin a proper investigation. This balanced approach is key in incident response."
          }
        },
        {
          type: ContentItemType.PASSWORD_STRENGTH_CHECKER,
          passwordStrengthCheckerData: {
            title: "Interactive Password Strength Test",
            disclaimer: "WARNING: Do NOT enter your real passwords in this tool. This is for educational demonstration ONLY to understand password strength principles. Real password checkers use more sophisticated algorithms, including checks against breached password lists.",
            criteria: [
              { id: "length_8", regex: ".{8,}", message: "At least 8 characters long", strengthScore: 20 },
              { id: "length_12", regex: ".{12,}", message: "At least 12 characters long (Better!)", strengthScore: 15 }, // Cumulative with length_8
              { id: "uppercase", regex: "[A-Z]", message: "Contains an uppercase letter", strengthScore: 15 },
              { id: "lowercase", regex: "[a-z]", message: "Contains a lowercase letter", strengthScore: 10 },
              { id: "number", regex: "[0-9]", message: "Contains a number", strengthScore: 15 },
              { id: "special_char", regex: "[^A-Za-z0-9\\s]", message: "Contains a special character (e.g., !@#$%^&*)", strengthScore: 25 }
            ]
          }
        },
        {
          type: ContentItemType.PRACTICAL_EXERCISE,
          practicalExerciseData: {
            title: "Password Manager Setup Walkthrough (Conceptual)",
            introduction: "Using a password manager is crucial for creating and storing strong, unique passwords for all your accounts. This exercise guides you through the general steps of setting up a password manager like Bitwarden (a popular open-source option) or LastPass.",
            tasks: [
              { id: "pm-task-1", description: "Choose a Password Manager: Research reputable password managers. Bitwarden (free/paid), 1Password (paid), KeePass (free, local-only by default) are common choices. For this exercise, we'll conceptually use Bitwarden.", details: "Consider factors like cost, features (e.g., cross-platform sync, 2FA support for the manager itself, family/team sharing, emergency access), security audits, open-source vs. proprietary, and user reviews." },
              { id: "pm-task-2", description: "Create a Strong Master Password: This is the most important step. Your master password should be long (e.g., 16+ characters or a passphrase of 4+ random words), complex, unique (not used anywhere else), and memorable to YOU but extremely hard for others to guess. Write it down and store it securely (e.g., in a physical safe) as a backup if you fear forgetting it.", details: "Consider using a passphrase (e.g., 'CorrectHorseBatteryStaple!77Sky&Blue'). Test its strength conceptually with the checker above."},
              { id: "pm-task-3", description: "Enable Two-Factor Authentication (2FA) for your Password Manager Account: Add an extra layer of security to your password vault itself. Most password managers support 2FA via authenticator apps (like Google Authenticator, Authy, Microsoft Authenticator), hardware security keys (like YubiKey), or other methods.", details: "Follow the specific instructions within your chosen password manager to set up 2FA. This is critical!"},
              { id: "pm-task-4", description: "Install Browser Extensions and Mobile Apps: Install the password manager's browser extension on your web browsers (Chrome, Firefox, Edge, Safari, etc.) and the app on your mobile devices (iOS, Android).", details: "This allows for auto-filling credentials, easy password generation, and secure password capture when you log into new sites."},
              { id: "pm-task-5", description: "Start Adding Your Accounts: Manually add your existing online accounts (email, banking, social media) to the password manager. For each account, generate a new, strong, unique password using the password manager's generator tool. Update your password on the respective website immediately after adding it to the manager.", details: "Prioritize your most important accounts first (email, financial). Don't try to do everything at once; it can be a gradual process. Some managers can import passwords from browsers, but then you MUST change them to unique generated ones."},
              { id: "pm-task-6", description: "Learn to Use the Password Generator: Familiarize yourself with options for password length (aim for 16-20+ characters), character types (uppercase, lowercase, numbers, symbols). Let the manager generate and remember these complex passwords for you."},
              { id: "pm-task-7", description: "Explore Additional Features: Check for features like secure notes (for storing sensitive information like software licenses, recovery codes), identity storage (for addresses, credit cards - use with caution and understand risks), password breach checking services (alerts if your stored passwords appear in known breaches), and emergency access for trusted individuals."}
            ],
            expectedOutcome: "You will understand the key steps involved in setting up and using a password manager, and appreciate its role in significantly improving your online security by managing strong, unique passwords for all your accounts. You'll recognize the importance of a strong master password and 2FA for the manager itself.",
            notes: "This is a conceptual walkthrough. Actual steps may vary slightly depending on the password manager chosen. Always download software from official websites or app stores. NEVER share your master password with anyone. Be wary of phishing attempts targeting your password manager credentials."
          }
        }
      ] 
    },
    {
      id: "2.2",
      title: "Linux Security: Permissions, Hardening, and Logging",
      content: [
         { type: ContentItemType.PARAGRAPH, text: "Linux, known for its robustness, flexibility, and open-source nature, is a popular choice for servers, embedded systems, and development environments. Securing Linux involves understanding its permission model, utilizing built-in security features, applying hardening techniques, and robustly managing logs." },
         { type: ContentItemType.HEADING3, text: "Core Linux File Permissions and Ownership:" },
         { type: ContentItemType.LIST, items: [
          "Ownership: Each file and directory is owned by a user and a group.",
          "Permissions: Read (r), Write (w), Execute (x) permissions are assigned to three categories: User (owner), Group, and Other (everyone else). Represented as `rwxrwxrwx` or numerically (e.g., `755` means owner has rwx, group has r-x, others have r-x).",
          "Special Permissions:",
          "  - `setuid` (Set User ID): Allows an executable to run with the permissions of the file owner, not the user executing it. Used carefully for specific system tasks (e.g., `passwd` command needs to write to `/etc/shadow` as root). Can be a security risk if set on vulnerable programs.",
          "  - `setgid` (Set Group ID): Allows an executable to run with the permissions of the file's group. For directories, new files/subdirectories inherit the directory's group.",
          "  - `Sticky Bit`: When set on a directory, only the file owner, directory owner, or root can delete or rename files within that directory (e.g., `/tmp`).",
          "Commands: `chmod` (change mode/permissions), `chown` (change owner), `chgrp` (change group), `ls -l` (view permissions)."
         ]},
         { type: ContentItemType.HEADING4, text: "Access Control Lists (ACLs) in Linux:" },
         { type: ContentItemType.PARAGRAPH, text: "Standard Unix permissions can be limiting. ACLs (`getfacl`, `setfacl` commands, requires filesystem support like `acl` mount option) provide more granular control, allowing permissions to be set for specific additional users or groups beyond the standard owner/group/other." },
         
         { type: ContentItemType.HEADING3, text: "User Accounts and Privilege Management:" },
         { type: ContentItemType.LIST, items: [
          "Root User: The superuser with unrestricted access. Direct root login should be disabled, especially via SSH.",
          "`sudo` (superuser do): Allows authorized users to execute commands as root or another user, as defined in the `/etc/sudoers` file. Promotes accountability and least privilege compared to direct root login.",
          "Principle of Least Privilege: Users and processes should only have the minimum permissions necessary for their tasks."
         ]},

         { type: ContentItemType.HEADING3, text: "Linux Hardening Techniques (Expanded):" },
         { type: ContentItemType.LIST, items: [
          "Regular Updates: Keep the kernel and all packages updated using package managers like `apt` (Debian/Ubuntu) or `yum`/`dnf` (RedHat/CentOS/Fedora). `unattended-upgrades` can automate security updates.",
          "Secure SSH Configuration (`/etc/ssh/sshd_config`):",
          "  - Disable root login (`PermitRootLogin no`).",
          "  - Use key-based authentication instead of passwords (`PasswordAuthentication no`).",
          "  - Change the default SSH port (security through obscurity, but can deter some automated attacks).",
          "  - Use `AllowUsers` or `AllowGroups` to restrict who can log in.",
          "  - Configure strong ciphers, MACs, and KEX algorithms.",
          "  - Use `fail2ban` or `sshguard` to block IPs after multiple failed login attempts.",
          "Firewall Configuration: Use `iptables` (older), `nftables` (newer), or user-friendly front-ends like `ufw` (Uncomplicated Firewall) or `firewalld` to control network traffic based on rules (allow/deny specific ports, IPs, protocols).",
          "Disable Unnecessary Services & Ports: Reduce the attack surface by stopping and disabling services that are not required (`systemctl stop [service]`, `systemctl disable [service]`).",
          "File System Security: Use appropriate mount options in `/etc/fstab` (e.g., `nodev`, `nosuid`, `noexec` for partitions like `/tmp`, `/var/tmp`, `/home` if applicable). Encrypt sensitive data using LUKS (Linux Unified Key Setup) for full-disk or partition encryption.",
          "Kernel Hardening (`/etc/sysctl.conf`): Tune kernel parameters for security (e.g., disable IP forwarding if not a router, enable TCP SYN cookies, restrict ptrace).",
          "Security-Enhanced Linux (SELinux) / AppArmor: Implement Mandatory Access Control (MAC) systems. These define strict policies for what processes can do and access, even if running as root. Require careful configuration but significantly enhance security.",
          "Intrusion Detection: Implement Host-based Intrusion Detection Systems (HIDS) like OSSEC, Wazuh, or AIDE (Advanced Intrusion Detection Environment) for file integrity monitoring.",
          "Regular Audits & Monitoring: Use tools like `Lynis` or `chkrootkit`/`rkhunter` to audit system security configuration and check for rootkits. Continuously monitor logs.",
          "Disable Unused Kernel Modules: Further reduce attack surface by blacklisting unnecessary kernel modules via `modprobe.d` configurations."
         ]},

         { type: ContentItemType.HEADING3, text: "Linux Logging Deep Dive:" },
         { type: ContentItemType.PARAGRAPH, text: "Linux systems generate extensive logs, crucial for security monitoring, troubleshooting, and forensics. Centralized logging (e.g., sending logs to a SIEM) is recommended for production environments." },
         { type: ContentItemType.LIST, items: [
            "`/var/log/syslog` or `/var/log/messages`: General system messages and activity.",
            "`/var/log/auth.log` or `/var/log/secure`: Authentication-related events (logins, sudo usage, SSH activity).",
            "`/var/log/dmesg`: Kernel ring buffer messages (boot messages, hardware issues).",
            "`/var/log/kern.log`: Kernel-specific messages.",
            "`/var/log/faillog`: Failed login attempts (older systems).",
            "`lastlog`: Records of last login for all users.",
            "`utmp`, `wtmp`, `btmp`: Records of current logins, historical logins, and failed login attempts, respectively (binary files, use `who`, `last`, `lastb` commands to view).",
            "`auditd` logs (`/var/log/audit/audit.log`): If `auditd` service is configured, provides detailed auditing of system calls and file access based on configurable rules. Very powerful for forensics.",
            "Application Logs: Many applications (e.g., web servers like Apache/Nginx, databases) have their own logs in `/var/log` or specific directories.",
            "`journald` (systemd systems): A centralized logging system. Use `journalctl` command to query logs (e.g., `journalctl -u sshd`, `journalctl -p err`, `journalctl --since today`)."
         ]},
         { type: ContentItemType.PARAGRAPH, text: "Effective Linux security is an ongoing process of configuration, diligent monitoring, regular patching, and adaptation to new threats. Understanding these fundamentals allows administrators to build and maintain secure Linux environments." }
      ] 
    },
    {
      id: "2.3",
      title: "Windows Security: Features, Configuration, and PowerShell",
      content: [
        { type: ContentItemType.PARAGRAPH, text: "Windows operating systems are widely used in desktop and server environments. Microsoft has incorporated numerous security features over the years, which, when properly configured and managed, significantly enhance system security. Understanding these features and leveraging tools like PowerShell is key for Windows administrators." },
        
        { type: ContentItemType.HEADING3, text: "Key Windows Security Features (Expanded):" },
        { type: ContentItemType.LIST, items: [
          "User Account Control (UAC): Helps prevent unauthorized changes by prompting for permission or an administrator password when actions require administrative privileges. UAC has different integrity levels to isolate processes.",
          "BitLocker Drive Encryption: Provides full-disk encryption for operating system drives, fixed data drives, and removable drives. Protects data at rest, even if a device is lost or stolen. TPM integration enhances BitLocker security.",
          "Windows Defender Firewall (with Advanced Security): A built-in host-based stateful firewall that controls inbound and outbound network traffic based on configurable rules (program, port, predefined service, custom). Profiles for Domain, Private, Public networks.",
          "Windows Defender Antivirus: Provides real-time protection against malware, viruses, spyware, and other threats. Includes cloud-delivered protection, behavior monitoring, and tamper protection.",
          "Windows Defender Exploit Guard: A suite of intrusion prevention capabilities including Attack Surface Reduction (ASR) rules, Exploit Protection (configurable mitigations like DEP, ASLR for applications), Network Protection, and Controlled Folder Access.",
          "AppLocker / Windows Defender Application Control (WDAC): Policy-based application whitelisting/blacklisting to control which applications can run. WDAC is more robust and suitable for server environments.",
          "Group Policy (GPO): A powerful tool for centralized management and configuration of security settings (password policies, account lockout, audit policies, software restrictions, firewall rules, etc.) across a domain of Windows computers.",
          "Security Event Logging & Windows Event Forwarding (WEF): Windows maintains extensive event logs (Security, System, Application, and specific service logs). The Security log is crucial for auditing (logon events, object access, policy changes). WEF allows centralization of logs from multiple computers to a collector server.",
          "PowerShell: A command-line shell and scripting language. Version 5+ includes enhanced security features:",
          "  - Script Block Logging: Logs the content of PowerShell scripts as they are executed.",
          "  - Module Logging: Logs pipeline execution details for specific modules.",
          "  - PowerShell Transcription: Creates a detailed text record of entire PowerShell sessions.",
          "  - Constrained Language Mode: Restricts access to sensitive cmdlets and language features.",
          "  - Antimalware Scan Interface (AMSI): Allows applications (like PowerShell) to integrate with antivirus to scan scripts and commands before execution.",
          "Secure Boot (UEFI): Helps prevent malicious software from loading when the PC starts by ensuring only trusted software (signed by Microsoft or OEMs) can boot.",
          "Credential Guard: Uses virtualization-based security to isolate and protect NTLM password hashes, Kerberos Ticket Granting Tickets, and credentials stored by applications as domain credentials.",
          "Device Guard (now part of WDAC): Combines hardware and software security features to lock down a device so it can only run trusted applications."
        ]},

        { type: ContentItemType.HEADING3, text: "Common Windows Hardening Techniques (Expanded):" },
        { type: ContentItemType.LIST, items: [
          "Regular Updates: Use Windows Update / Windows Server Update Services (WSUS) / Microsoft Endpoint Configuration Manager (MECM) to keep the OS and Microsoft applications patched. Prioritize critical security updates.",
          "Strong Password Policies & Account Lockout: Enforce complex passwords, minimum length, history, and regular changes. Configure account lockout policies to deter brute-force attacks. Consider using Microsoft LAPS for local admin passwords.",
          "Principle of Least Privilege: Assign users only the necessary permissions. Avoid using administrator accounts for daily tasks. Use standard user accounts and elevate with UAC when needed. Implement tiered administration model in Active Directory.",
          "Disable Unnecessary Services and Features: Reduce the attack surface by removing or disabling Windows components, services, and protocols (e.g., SMBv1, PowerShell v2) not in use. Use Server Manager Roles and Features or DISM.",
          "Secure Remote Desktop Protocol (RDP): Use strong passwords for RDP access. Enable Network Level Authentication (NLA). Limit RDP access via firewall to specific trusted IPs. Use VPNs or RDP Gateways for external access. Change the default RDP port (obscurity). Monitor RDP logs.",
          "Monitor Event Logs: Regularly review security event logs for suspicious activity (e.g., failed logons, account lockouts, privilege changes, unexpected service installations). Utilize SIEM solutions for aggregation and analysis.",
          "Implement Security Baselines: Apply security configuration baselines, such as those provided by Microsoft (Security Compliance Toolkit - SCT, which includes Policy Analyzer and Local Group Policy Object (LGPO) utility) or CIS Benchmarks. These provide pre-configured GPO settings for enhanced security.",
          "Disable Legacy Protocols: Disable SMBv1, LLMNR, NBT-NS, and other older protocols that have known vulnerabilities or can be abused for reconnaissance.",
          "File System Permissions (NTFS ACLs): Ensure appropriate NTFS permissions are set on files and folders to restrict access based on user/group roles.",
          "Regular Backups: Ensure critical system state and data are regularly backed up and that restore procedures are tested."
        ]},
        { 
          type: ContentItemType.ACTIONABLE_CHECKLIST,
          actionableChecklistData: {
            title: "My Windows Security Hardening Checklist (Personal/Workstation Focus)",
            items: [
              { id: "win-check-1", text: "Ensure Windows Update is enabled and has recently checked for/installed updates.", guideLinkText: "Check Update Settings" },
              { id: "win-check-2", text: "Verify Windows Defender Firewall is active for your current network profile (Domain, Private, or Public).", guideLinkText: "Firewall Status" },
              { id: "win-check-3", text: "Confirm Windows Defender Antivirus real-time protection, cloud-delivered protection, and tamper protection are ON.", guideLinkText: "Antivirus Status" },
              { id: "win-check-4", text: "Review User Account Control (UAC) settings. The default level (Notify me only when apps try to make changes to my computer) is generally recommended.", guideLinkText: "UAC Settings" },
              { id: "win-check-5", text: "Use strong, unique passwords for all user accounts, especially administrator accounts. Consider a password manager.", guideLinkText: "Password Tips"},
              { id: "win-check-6", text: "If handling sensitive data, ensure BitLocker full-disk encryption is enabled (especially on laptops).", guideLinkText: "BitLocker Info" },
              { id: "win-check-7", text: "Check that PowerShell Script Block Logging and Module Logging are enabled (more for advanced users/admins, but good to know).", guideLinkText: "PowerShell Logging" },
              { id: "win-check-8", text: "Review installed applications and uninstall any that are unnecessary or from untrusted sources.", guideLinkText: "Apps & Features"}
            ]
          }
        },
        { type: ContentItemType.PARAGRAPH, text: "Properly configuring these features, following hardening best practices, and leveraging PowerShell for administration and security scripting are essential for securing Windows systems against a wide range of threats." }
      ] 
    },
    {
      id: "2.4",
      title: "The Critical Role of Patch Management in OS Security",
      content: [
        { type: ContentItemType.PARAGRAPH, text: "Patch management is the systematic process of identifying, acquiring, testing, and deploying software updates (patches) to address security vulnerabilities, fix bugs, and improve functionality. It is one of the most fundamental and critically impactful aspects of cybersecurity, directly mitigating known exploits." },
        
        { type: ContentItemType.HEADING3, text: "Why is Patch Management Crucial?" },
        { type: ContentItemType.LIST, items: [
          "Vulnerability Remediation: Software vendors release patches to fix known security weaknesses (often identified by CVE numbers). Applying these patches closes specific attack vectors that malicious actors actively scan for and exploit.",
          "Preventing Exploits: A vast majority of successful cyberattacks leverage unpatched, known vulnerabilities. Timely patching significantly reduces the likelihood of successful exploitation by both automated malware and targeted attacks.",
          "Maintaining System Stability & Functionality: Patches often include bug fixes that improve software stability, performance, and add new features or compatibility.",
          "Compliance Requirements: Many regulatory frameworks (e.g., PCI DSS, HIPAA, GDPR, SOC 2) mandate or strongly recommend regular and timely patch management as a core security control. Failure to patch can lead to non-compliance penalties.",
          "Protecting Data: By preventing breaches that exploit known vulnerabilities, patch management helps protect sensitive organizational and personal data from unauthorized access, modification, or exfiltration.",
          "Reducing Attack Surface: Each unpatched vulnerability represents an open door for attackers. Patching systematically reduces this attack surface."
        ]},
        
        { type: ContentItemType.HEADING3, text: "The Patch Management Lifecycle (Detailed):" },
        { type: ContentItemType.LIST, items: [
          "1. Discovery & Inventory: Identifying all assets within the environment (servers, workstations, applications, network devices, IoT devices) and the software versions they are running. Maintaining an accurate asset inventory is foundational.",
          "2. Monitoring & Identification: Continuously monitoring vendor notifications, vulnerability databases (e.g., NVD, CVE details), security mailing lists, and threat intelligence feeds for newly released patches and identified vulnerabilities relevant to the inventoried assets.",
          "3. Prioritization & Risk Assessment: Assessing the criticality of available patches. This involves considering: ",
          "    - Vulnerability Severity: Using scoring systems like CVSS (Common Vulnerability Scoring System).",
          "    - Exploitability: Is there known public exploit code? Is the vulnerability being actively exploited in the wild (e.g., CISA KEV catalog)?",
          "    - Asset Criticality: How important is the affected system to business operations?",
          "    - Potential Impact: What would be the consequences if this vulnerability were exploited on this asset?",
          "    This risk-based approach helps prioritize which patches to deploy first, as not all can be deployed simultaneously, especially in large environments.",
          "4. Acquisition & Verification: Downloading patches from trusted, official vendor sources. Verifying the integrity and authenticity of downloaded patches (e.g., checking digital signatures or hashes).",
          "5. Testing: Testing patches in a non-production environment (staging, QA, or a representative subset of systems) to ensure they don't cause unintended issues, break existing functionality, or conflict with other software. This step is crucial to avoid operational disruptions.",
          "6. Deployment & Scheduling: Rolling out approved patches to production systems. This can be done manually for small environments, but typically involves automated tools (e.g., WSUS for Windows, Ansible/Puppet/Chef for Linux, dedicated patch management solutions). Deployment should often be scheduled during maintenance windows to minimize disruption. Phased rollouts can also reduce risk.",
          "7. Verification & Reporting: Confirming that patches have been successfully applied and systems are updated to the correct versions. Verifying that the vulnerability is indeed remediated. Maintaining detailed records of patching activity for auditing, compliance, and tracking patch status across the organization.",
          "8. Rollback Planning (Contingency): Having a plan to revert or uninstall a patch if it causes critical issues in production, although thorough testing aims to prevent this."
        ]},

        { type: ContentItemType.HEADING4, text: "Challenges in Patch Management:" },
        { type: ContentItemType.LIST, items: [
          "Patch Overload: The sheer volume of patches released by vendors can be overwhelming for IT teams.",
          "Testing Complexity & Time: Ensuring patches don't break critical applications or business processes can be time-consuming and resource-intensive.",
          "Downtime Requirements: Some patches require system reboots, which may need to be carefully scheduled during maintenance windows, especially for 24/7 operations.",
          "Legacy Systems & End-of-Life Software: Older systems or software may no longer receive vendor support or patches, posing significant, persistent risks. Requires mitigation strategies like network isolation or virtual patching.",
          "Third-Party Software: Patching non-OS applications (e.g., Adobe products, Java, web browsers, business applications) often requires separate processes and tools.",
          "Operational Technology (OT) / Industrial Control Systems (ICS): Patching in OT/ICS environments is particularly challenging due to potential impacts on physical processes, long system lifecycles, and vendor certification requirements.",
          "Asset Inventory Accuracy: Incomplete or inaccurate asset inventories mean some systems might be missed during patching.",
          "Emergency Patches (Zero-Days): The need to rapidly deploy emergency patches for critical, actively exploited zero-day vulnerabilities can disrupt normal patching cycles and testing procedures."
        ]},
        { type: ContentItemType.PARAGRAPH, text: "Despite these challenges, a robust, consistent, and well-documented patch management program is non-negotiable for effective cybersecurity. Automation, risk-based prioritization, strong processes, and dedicated resources are key to managing the process effectively and minimizing organizational risk." }
      ] 
    }
  ]
};

const CHAPTER_3_CONTENT: Chapter = {
  id: "chapter-3",
  title: "Chapter 3: Networking Essentials - Navigating the Connected World Securely",
  shortTitle: "Networking Essentials",
  sections: [
    {
      id: "3.1",
      title: "Network Components, Topologies, and Basic Architecture",
      content: [
        { type: ContentItemType.PARAGRAPH, text: "Understanding the building blocks of networks and how they are interconnected is fundamental to grasping network security. This section explores common network components, their roles, structural layouts (topologies), and basic network architecture concepts like LANs and WANs." },
        { type: ContentItemType.HEADING3, text: "Common Network Components (Expanded):" },
        { type: ContentItemType.LIST, items: [
          "Network Interface Card (NIC): Hardware that connects a computer or device to a network. Each NIC has a unique Media Access Control (MAC) address burned into its firmware, used for Layer 2 addressing.",
          "Hub: An older, basic networking device that connects multiple Ethernet devices, making them act as a single network segment. Hubs operate at Layer 1 (Physical) and broadcast all traffic received on one port to all other ports, leading to collisions and inefficiency. Largely obsolete in modern networks, replaced by switches.",
          "Switch: A more intelligent device than a hub, operating at Layer 2 (Data Link). Switches learn the MAC addresses of devices connected to their ports and maintain a MAC address table. They forward traffic only to the intended recipient port based on the destination MAC address, improving efficiency, reducing collisions, and creating separate collision domains per port.",
          "  - Layer 3 Switch: A switch with some routing capabilities, able to forward traffic between different VLANs or subnets without needing a dedicated router in some scenarios.",
          "Router: A Layer 3 (Network) device that connects different networks (e.g., a LAN to the internet, or different subnets within an organization) and forwards data packets between them based on IP addresses and routing tables. Routers make decisions on the best path for traffic using routing protocols (e.g., OSPF, BGP).",
          "Modem (Modulator-Demodulator): Connects a local network to an Internet Service Provider (ISP) over different types of physical media (e.g., telephone lines (DSL modem), cable television lines (cable modem), fiber optic lines (ONT - Optical Network Terminal)). It modulates digital signals from the computer/router into analog signals for transmission and demodulates incoming analog signals back to digital.",
          "Access Point (AP) / Wireless Access Point (WAP): Allows wireless devices (laptops, smartphones) to connect to a wired network using Wi-Fi standards (IEEE 8002.11). Acts as a bridge between wireless and wired segments.",
          "Firewall: A security device (hardware appliance, software, or cloud-based) that monitors and controls incoming and outgoing network traffic based on predetermined security rules. Acts as a barrier between a trusted internal network and untrusted external networks (like the internet).",
          "  - Think of a Firewall = A bouncer at a club, checking IDs (IP addresses, ports, protocol types) and deciding who gets in or out based on a guest list (firewall rules).",
          "Servers: Computers that provide services (e.g., web servers (HTTP/S), file servers (SMB/NFS), email servers (SMTP/IMAP/POP3), DNS servers, DHCP servers) to other computers (clients) on the network.",
          "Clients: Computers or devices that request and use services provided by servers (e.g., your laptop browsing a website).",
          "Load Balancer: Distributes incoming network traffic across multiple servers to ensure no single server is overwhelmed, improving availability, performance, and scalability. Can operate at Layer 4 or Layer 7.",
          "Proxy Server: An intermediary server that acts on behalf of client computers when requesting resources from other servers. Can be used for caching, filtering, anonymity, or security.",
          "  - Forward Proxy: Used by clients within a network to access external resources.",
          "  - Reverse Proxy: Used by servers to manage client access to internal resources, often for security, load balancing, or SSL termination."
        ]},
        { type: ContentItemType.HEADING3, text: "Network Topologies (Arrangement of Network Devices):" },
        { type: ContentItemType.PARAGRAPH, text: "Topology refers to the physical or logical arrangement of network components. The choice affects performance, scalability, cost, fault tolerance, and security." },
        { type: ContentItemType.LIST, items: [
          "Bus Topology: All devices share a single communication line (the bus) with terminators at each end. Simple and inexpensive, but a break in the main cable disables the entire network. High collision rate. Security issue: all devices see all traffic.",
          "Star Topology: All devices connect to a central device (hub or, more commonly, a switch). Easy to manage, troubleshoot, and add new devices. Failure of a single device cable doesn't affect others, but failure of the central device cripples the network. Most common LAN topology today.",
          "Ring Topology: Devices are connected in a circular fashion. Data travels in one direction (or two in dual-ring setups). A single break can disable the network (unless a dual ring or fault tolerance mechanism is used). Less common now.",
          "Mesh Topology: Devices are interconnected with many redundant interconnections between network nodes. Offers high reliability and fault tolerance as data can take multiple paths.",
          "  - Full Mesh: Every node connects to every other node. Very expensive and complex for large networks.",
          "  - Partial Mesh: Some nodes are connected to multiple other nodes, but not all. Balances cost and redundancy.",
          "  Security benefit: resilience to single points of failure. Complexity can be a security challenge if not managed well.",
          "Tree (Hierarchical) Topology: A hybrid topology that integrates multiple star topologies onto a bus or another star. Common in larger networks, allowing for expansion and segmentation.",
          "Hybrid Topology: A combination of two or more different topologies (e.g., a star-bus network)."
        ]},
         { type: ContentItemType.HEADING3, text: "Basic Network Architectures:" },
        { type: ContentItemType.LIST, items: [
          "Local Area Network (LAN): A network confined to a relatively small geographical area, such as a single building or campus. Typically high-speed and owned by the organization.",
          "Wide Area Network (WAN): A network that spans a large geographical area, often connecting multiple LANs across cities, countries, or continents. The internet is the largest WAN. Often uses leased telecommunication lines or public infrastructure.",
          "Metropolitan Area Network (MAN): Spans a city or a large campus. Larger than a LAN but smaller than a WAN.",
          "Personal Area Network (PAN): A network for interconnecting devices centered around an individual person's workspace (e.g., Bluetooth connecting a phone, headset, and laptop).",
          "Storage Area Network (SAN): A dedicated high-speed network that interconnects and presents shared pools of storage devices to multiple servers.",
          "Virtual Private Network (VPN): Creates a secure, encrypted connection (tunnel) over a less secure network, such as the internet, to connect users or sites as if they were on the same private network."
        ]},
        { type: ContentItemType.PARAGRAPH, text: "The choice of components, topology, and architecture significantly affects a network's performance, scalability, cost, resilience, and inherent security posture. Secure network design often involves segmentation (dividing the network into smaller, isolated zones) to limit the impact of security breaches." }
      ]
    },
    {
      id: "3.2",
      title: "Understanding Network Models: OSI and TCP/IP (Detailed)",
      content: [
        { type: ContentItemType.PARAGRAPH, text: "Network models provide a conceptual framework to understand how data is transmitted across networks, standardizing functions into layers. The two most important models are the OSI (Open Systems Interconnection) model and the TCP/IP (Transmission Control Protocol/Internet Protocol) model. Understanding these helps in troubleshooting, designing networks, and placing security controls." },
        
        { type: ContentItemType.HEADING3, text: "The OSI Model (7 Layers):" },
        { type: ContentItemType.PARAGRAPH, text: "A conceptual, vendor-neutral model developed by the International Organization for Standardization (ISO). It provides a detailed framework by dividing network communication into seven distinct layers. While not directly implemented in full, it's invaluable for teaching and understanding network functions." },
        { type: ContentItemType.LIST, items: [
          "Layer 7 (Application): Provides the interface for applications to access network services. This is the layer users interact with. Protocols: HTTP, HTTPS, FTP, SMTP, DNS, DHCP, Telnet, SSH. Security: Application-level firewalls (WAFs), input validation, secure coding practices for applications.",
          "Layer 6 (Presentation): Handles data formatting, translation, encryption, and compression to ensure data is in a usable format for the Application layer and that different systems can understand each other. Protocols/Standards: ASCII, EBCDIC, JPEG, GIF, PNG, MPEG, SSL/TLS (for encryption/decryption), MIME. Security: Data encryption/decryption (e.g., TLS handles this implicitly), data sanitization.",
          "Layer 5 (Session): Manages connections (sessions) between applications: establishing, maintaining, synchronizing, and terminating them. Controls dialogue between systems. Protocols/Mechanisms: NetBIOS, RPC, Sockets (API often used here), session tokens, cookies (managed at application layer but conceptually related). Security: Session hijacking prevention, secure session management.",
          "Layer 4 (Transport): Provides reliable or unreliable data delivery between hosts. Manages flow control, error checking, and segmentation/reassembly of data. Protocols: TCP (Transmission Control Protocol - reliable, connection-oriented, ordered delivery, error recovery), UDP (User Datagram Protocol - unreliable, connectionless, faster, no guaranteed delivery). Ports operate at this layer. Security: Stateful firewalls, TCP SYN flood protection, port security, transport layer encryption (TLS builds on TCP).",
          "Layer 3 (Network): Responsible for logical addressing (IP addresses), routing packets across different networks, and path determination. Protocols: IP (Internet Protocol - IPv4, IPv6), ICMP (Internet Control Message Protocol), IGMP. Devices: Routers. Security: Packet-filtering firewalls, IPsec (for network-layer encryption and authentication), routing protocol security.",
          "Layer 2 (Data Link): Handles physical addressing (MAC addresses), framing data for transmission over a specific physical link, error detection (not correction) on the physical link, and controlling access to the physical medium (e.g., CSMA/CD for Ethernet). Protocols: Ethernet, Wi-Fi (802.11), PPP, Frame Relay, ATM. Devices: Switches, Bridges, NICs. Security: MAC filtering, 802.1X port-based network access control, VLAN segmentation, ARP spoofing detection.",
          "Layer 1 (Physical): Defines the physical and electrical characteristics of the network, such as cables (copper, fiber), connectors, signaling (voltages, timing), bit rates, and wireless frequencies. It transmits raw bits over the physical medium. Devices: Hubs, Repeaters, Modems, Cables, NICs (physical aspects). Security: Physical security of cabling and devices, tempest shielding (to prevent EM eavesdropping), preventing cable tapping."
        ]},
        { type: ContentItemType.DIAGRAM, diagramDefinition: `
graph TD
    subgraph OSI Model
        L7[Layer 7: Application<br>(Data/Message)<br>HTTP, DNS, FTP, SMTP]
        L6[Layer 6: Presentation<br>(Data/Message)<br>Encryption, Formatting (SSL/TLS, JPEG)]
        L5[Layer 5: Session<br>(Data/Message)<br>Session Management, APIs, RPC]
        L4[Layer 4: Transport<br>(Segment/Datagram)<br>TCP, UDP, Port Numbers]
        L3[Layer 3: Network<br>(Packet)<br>IP, ICMP, Routers]
        L2[Layer 2: Data Link<br>(Frame)<br>Ethernet, MAC, Switches]
        L1[Layer 1: Physical<br>(Bits)<br>Cables, Hubs, NICs]
    end
    L7 --> L6 --> L5 --> L4 --> L3 --> L2 --> L1
    style L7 fill:#8d6e63,stroke:#5d4037,color:#fff
    style L6 fill:#795548,stroke:#4e342e,color:#fff
    style L5 fill:#6d4c41,stroke:#3e2723,color:#fff
    style L4 fill:#5d4037,stroke:#3e2723,color:#fff
    style L3 fill:#4e342e,stroke:#3e2723,color:#fff
    style L2 fill:#3e2723,stroke:#3e2723,color:#fff
    style L1 fill:#260e04,stroke:#3e2723,color:#fff
        `},
        { type: ContentItemType.HEADING3, text: "The TCP/IP Model (4 or 5 Layers - A Practical Model):" },
        { type: ContentItemType.PARAGRAPH, text: "A more practical, widely implemented model that forms the basis of the internet. It's a suite of communication protocols. Often described with 4 layers, but sometimes a 5-layer version is used for better comparison with OSI." },
        { type: ContentItemType.LIST, items: [
          "Application Layer (Corresponds to OSI Layers 5-7): Combines functions of OSI's Application, Presentation, and Session layers. Defines protocols for specific applications (e.g., HTTP, FTP, SMTP, DNS).",
          "Transport Layer (Corresponds to OSI Layer 4): Same as OSI Transport Layer. Provides end-to-end communication services (e.g., TCP, UDP).",
          "Internet Layer (Corresponds to OSI Layer 3): Same as OSI Network Layer. Responsible for addressing, packaging, and routing functions (e.g., IP, ICMP, ARP).",
          "Network Access/Link Layer (Corresponds to OSI Layers 1-2): Combines functions of OSI's Data Link and Physical layers. Deals with all hardware aspects of the physical network interface and medium (e.g., Ethernet, Wi-Fi drivers and hardware)."
        ]},
        { type: ContentItemType.HEADING4, text: "Data Encapsulation and Decapsulation (The Journey of Data)" },
        { type: ContentItemType.PARAGRAPH, text: "As data moves down the layers of the sending device (encapsulation), each layer adds its own header (and sometimes a trailer) containing control information specific to that layer. This wrapped data unit at each layer is called a Protocol Data Unit (PDU). For example:"},
        { type: ContentItemType.LIST, items: [
            "Application Layer: PDU is often called Data or Message.",
            "Transport Layer: Data is segmented, and a TCP or UDP header is added. PDU is a Segment (TCP) or Datagram (UDP).",
            "Internet/Network Layer: An IP header (with source/destination IP addresses) is added to the segment/datagram. PDU is a Packet.",
            "Network Access/Data Link Layer: A frame header (with source/destination MAC addresses) and trailer (for error checking, like FCS) are added to the packet. PDU is a Frame.",
            "Physical Layer: The frame is converted into bits for transmission over the physical medium."
        ]},
        { type: ContentItemType.PARAGRAPH, text: "The receiving device performs decapsulation, where each layer strips off its corresponding header, processes the information, and passes the payload up to the next higher layer. This layered approach ensures modularity, interoperability between different vendors' equipment, and simplifies troubleshooting." },
        { type: ContentItemType.TABLE, tableData: {
            caption: "OSI vs. TCP/IP Model Comparison and PDUs",
            headers: ["OSI Layer # & Name", "TCP/IP Layer (Common 4-Layer)", "PDU", "Key Protocols/Devices/Functions", "Security Considerations"],
            rows: [
              { "OSI Layer # & Name": "7. Application", "TCP/IP Layer (Common 4-Layer)": "Application", "PDU": "Data/Message", "Key Protocols/Devices/Functions": "HTTP, HTTPS, FTP, SMTP, DNS, DHCP, SSH", "Security Considerations": "Input validation, secure coding, WAF, API security, application authN/authZ" },
              { "OSI Layer # & Name": "6. Presentation", "TCP/IP Layer (Common 4-Layer)": "Application", "PDU": "Data/Message", "Key Protocols/Devices/Functions": "Data formatting (ASCII, JPEG), encryption (SSL/TLS for negotiation)", "Security Considerations": "Data encryption/decryption, data sanitization, character set encoding" },
              { "OSI Layer # & Name": "5. Session", "TCP/IP Layer (Common 4-Layer)": "Application", "PDU": "Data/Message", "Key Protocols/Devices/Functions": "Session management, APIs, RPC, NetBIOS", "Security Considerations": "Session hijacking prevention, secure session tokens, proper session termination" },
              { "OSI Layer # & Name": "4. Transport", "TCP/IP Layer (Common 4-Layer)": "Transport", "PDU": "Segment (TCP), Datagram (UDP)", "Key Protocols/Devices/Functions": "TCP (reliable), UDP (unreliable), Port numbers", "Security Considerations": "Stateful firewalls, TCP SYN flood protection, port scanning detection, TLS/DTLS" },
              { "OSI Layer # & Name": "3. Network", "TCP/IP Layer (Common 4-Layer)": "Internet", "PDU": "Packet", "Key Protocols/Devices/Functions": "IP (addressing, routing), ICMP, ARP. Routers operate here.", "Security Considerations": "Packet-filtering firewalls, IP spoofing prevention, IPsec, routing protocol security (BGPsec), DoS/DDoS mitigation" },
              { "OSI Layer # & Name": "2. Data Link", "TCP/IP Layer (Common 4-Layer)": "Network Access/Link", "PDU": "Frame", "Key Protocols/Devices/Functions": "Ethernet, Wi-Fi, MAC addresses, PPP. Switches, Bridges, APs operate here.", "Security Considerations": "MAC filtering, 802.1X NAC, VLAN security, ARP spoofing detection, WPA2/3 for wireless" },
              { "OSI Layer # & Name": "1. Physical", "TCP/IP Layer (Common 4-Layer)": "Network Access/Link", "PDU": "Bits", "Key Protocols/Devices/Functions": "Cables (copper, fiber), Hubs, Repeaters, NICs (physical aspects), Radio waves (Wi-Fi)", "Security Considerations": "Physical security of devices/cabling, preventing wiretapping, TEMPEST shielding, jamming detection" }
            ]
          }
        },
        { type: ContentItemType.PARAGRAPH, text: "Understanding these models helps in diagnosing network issues (e.g., 'Is it a physical layer problem, or a routing issue at the network layer?') and designing secure network architectures by identifying which layer a particular protocol, device, or security control operates on. This allows for a defense-in-depth strategy where security is applied at multiple layers." }
      ]
    },
    {
      id: "3.3",
      title: "Common Network Protocols: Functions and Security Implications",
      content: [
        { type: ContentItemType.PARAGRAPH, text: "Network protocols are sets of rules that govern how data is formatted, transmitted, and received between devices. Many common protocols have inherent security weaknesses or can be misused if not properly configured and secured. This section delves into several key protocols." },
        
        { type: ContentItemType.HEADING3, text: "Application Layer Protocols:" },
        { type: ContentItemType.LIST, items: [
          "HTTP (HyperText Transfer Protocol, Port 80): Used for web communication (requesting and delivering web pages). Transmits data in cleartext, making it vulnerable to eavesdropping and man-in-the-middle (MitM) attacks. **Security:** Always use HTTPS.",
          "HTTPS (HyperText Transfer Protocol Secure, Port 443): HTTP secured with SSL/TLS encryption. Provides confidentiality, integrity, and server authentication. **Security Best Practices:** Use strong TLS configurations (TLS 1.2+), strong cipher suites, valid certificates from trusted CAs, and HTTP Strict Transport Security (HSTS).",
          "FTP (File Transfer Protocol, Ports 20, 21): Used for transferring files. Transmits credentials (username/password) and data in cleartext. Active vs. Passive modes have different firewall implications. **Security:** Highly insecure. Use FTPS (FTP over SSL/TLS) or SFTP (SSH File Transfer Protocol) instead.",
          "Telnet (Port 23): Provides remote command-line access. Transmits all data, including credentials, in cleartext. Highly insecure and obsolete for most uses. **Security:** Never use Telnet over untrusted networks. Replace with SSH.",
          "SSH (Secure Shell, Port 22): Provides encrypted remote command-line access, secure file transfers (SFTP, SCP), and port forwarding (tunneling). Generally secure if configured correctly. **Security Best Practices:** Use key-based authentication (disable password authentication), strong ciphers and MACs, disable root login, use Fail2Ban, change default port (optional, for obscurity).",
          "SMTP (Simple Mail Transfer Protocol, Port 25): Used for sending email between mail servers and from mail clients to servers. Traditionally cleartext, but often uses STARTTLS (opportunistic TLS encryption) on port 587 or implicit TLS on port 465. Vulnerable to spoofing and spam. **Security:** Use STARTTLS/TLS, SPF (Sender Policy Framework), DKIM (DomainKeys Identified Mail), DMARC (Domain-based Message Authentication, Reporting & Conformance) to combat spoofing and improve email deliverability and security.",
          "POP3 (Post Office Protocol 3, Port 110): Used for retrieving email from a mail server. Typically downloads emails to the client and deletes them from the server. Can transmit credentials in cleartext. **Security:** Use POP3S (POP3 over SSL/TLS, Port 995).",
          "IMAP (Internet Message Access Protocol, Port 143): Used for retrieving email from a mail server. Allows manipulation of emails on the server (folders, flags). Can transmit credentials in cleartext. **Security:** Use IMAPS (IMAP over SSL/TLS, Port 993).",
          "DNS (Domain Name System, Port 53 UDP/TCP): Translates human-readable domain names (e.g., www.example.com) to IP addresses. Critical internet infrastructure. Vulnerable to spoofing, cache poisoning, reflection/amplification DDoS attacks, and zone transfers (if misconfigured). **Security:** Use DNSSEC (DNS Security Extensions) to ensure data integrity and authenticity. Use DoH (DNS over HTTPS) or DoT (DNS over TLS) for query privacy between client and resolver. Secure internal DNS servers, restrict zone transfers.",
          "DHCP (Dynamic Host Configuration Protocol, Ports 67, 68 UDP): Automatically assigns IP addresses and other network configuration parameters (subnet mask, default gateway, DNS servers) to devices on a network. Vulnerable to rogue DHCP servers and DHCP starvation attacks. **Security:** DHCP snooping on switches, port security, careful network segmentation."
        ]},

        { type: ContentItemType.HEADING3, text: "Transport Layer Protocols:" },
        { type: ContentItemType.LIST, items: [
          "TCP (Transmission Control Protocol): Provides reliable, connection-oriented, ordered delivery of a stream of bytes. Establishes a connection using a three-way handshake (SYN, SYN-ACK, ACK). Uses sequence numbers for ordering and acknowledgments for reliability. Manages flow control and congestion control. **Security:** Vulnerable to SYN floods (a type of DoS attack overwhelming half-open connections), TCP session hijacking (predicting sequence numbers), and RST attacks (injecting reset packets). TLS often runs on top of TCP for security.",
          "UDP (User Datagram Protocol): Provides an unreliable, connectionless datagram service. Faster than TCP as there's no connection setup or guaranteed delivery. Suitable for applications where speed is critical and occasional data loss is acceptable (e.g., DNS queries, VoIP, online gaming). **Security:** Can be used in DDoS amplification attacks (e.g., DNS, NTP, memcached amplification). DTLS (Datagram TLS) can provide security for UDP-based applications."
        ]},
        
        { type: ContentItemType.HEADING3, text: "Internet Layer Protocols:" },
        { type: ContentItemType.LIST, items: [
          "IP (Internet Protocol, IPv4 & IPv6): Responsible for addressing hosts and routing packets from a source host to a destination host across one or more IP networks. Connectionless and unreliable (relies on upper layers like TCP for reliability). **Security:** Vulnerable to IP spoofing (forging the source IP address), sniffing (if traffic is unencrypted). IPsec provides network-layer encryption and authentication.",
          "ICMP (Internet Control Message Protocol): Used by network devices, like routers, to send error messages and operational information (e.g., destination unreachable, time exceeded, echo request/reply for ping). **Security:** Can be used in reconnaissance (ping sweeps, traceroute mapping), and DoS attacks (e.g., Smurf attack, Ping of Death, ICMP flood). Firewalls often filter or rate-limit ICMP traffic.",
          "ARP (Address Resolution Protocol): Used in IPv4 networks to map an IP address to a physical MAC address on a local network segment. Operates at the boundary of Layer 2 and Layer 3. **Security:** Vulnerable to ARP spoofing/poisoning, where an attacker sends forged ARP messages to associate their MAC address with the IP address of another host (e.g., the default gateway), enabling MitM attacks. Dynamic ARP Inspection (DAI) on switches can mitigate this."
        ]},
        { type: ContentItemType.HEADING3, text: "Network Time Protocol (NTP, Port 123 UDP):"},
        { type: ContentItemType.PARAGRAPH, text: "Used to synchronize the clocks of computers over a network. Accurate time is crucial for logging, certificate validation, and forensic analysis. **Security:** Vulnerable to NTP amplification/reflection DDoS attacks if misconfigured. Can be spoofed to manipulate system time. **Best Practices:** Use authenticated NTP, configure internal NTP servers, restrict access to NTP servers." },

        { type: ContentItemType.PARAGRAPH, text: "Securing network protocols involves a combination of using their secure variants (e.g., HTTPS, SFTP, SSH, IMAPS), implementing strong encryption and authentication where applicable, proper network segmentation, robust firewall rules, and continuous network monitoring to detect and respond to misuse or attacks." }
      ]
    },
    {
      id: "3.4",
      title: "Network Security Controls: Firewalls, IDS/IPS, VPNs, NAC, and Proxies",
      content: [
        { type: ContentItemType.PARAGRAPH, text: "Network security controls are technologies, devices, and processes designed to protect network assets by enforcing security policies. Key controls include firewalls, Intrusion Detection/Prevention Systems (IDS/IPS), Virtual Private Networks (VPNs), Network Access Control (NAC), and Proxy Servers. These are often used in combination as part of a defense-in-depth strategy." },
        
        { type: ContentItemType.HEADING3, text: "Firewalls (Expanded):" },
        { type: ContentItemType.PARAGRAPH, text: "A firewall acts as a barrier, monitoring and filtering network traffic between network segments (e.g., internal trusted network and external untrusted internet) based on predefined security rules. The goal is to allow legitimate traffic while blocking malicious or unauthorized traffic." },
        { type: ContentItemType.LIST, items: [
          "Packet-Filtering Firewalls: Operate at Layer 3 (Network) and Layer 4 (Transport). Make decisions based on source/destination IP addresses, source/destination ports, and protocols (TCP, UDP, ICMP). Fast but stateless (don't track connection state, evaluate each packet individually).",
          "Stateful Inspection Firewalls: Also operate at Layer 3/4 but maintain a state table to track active connections (e.g., TCP handshake completion, related UDP flows). Make decisions based on connection context as well as packet headers. More secure and common than simple packet filters.",
          "Proxy Firewalls (Application-Level Gateways): Operate at Layer 7 (Application). Act as an intermediary for specific applications (e.g., HTTP proxy, FTP proxy). They understand the application protocol and can inspect the content of traffic for malicious payloads, filter specific commands, or enforce granular policies. Can offer deep packet inspection but may introduce latency and require a proxy for each protocol.",
          "Next-Generation Firewalls (NGFW): Combine traditional firewall capabilities (stateful inspection) with advanced features like: ",
          "  - Deep Packet Inspection (DPI): Examining the payload of packets, not just headers.",
          "  - Intrusion Prevention System (IPS) capabilities.",
          "  - Application awareness and control (identifying and controlling specific applications like Facebook, YouTube, regardless of port).",
          "  - Threat intelligence integration (using feeds of known malicious IPs, domains, malware signatures).",
          "  - User identity integration (e.g., Active Directory integration to create rules based on users/groups).",
          "Web Application Firewalls (WAF): A specialized type of firewall deployed in front of web applications to protect them from web-specific attacks like SQL injection, XSS, CSRF, directory traversal, etc. Operates at Layer 7 and understands HTTP/S traffic deeply."
        ]},
        { type: ContentItemType.HEADING4, text: "Firewall Rule Best Practices:"},
        { type: ContentItemType.LIST, items: [
            "Implicit Deny: Start with a default deny-all policy and only explicitly allow necessary traffic.",
            "Least Privilege: Allow only the specific ports, protocols, and sources/destinations required for legitimate business functions.",
            "Rule Order: Rules are typically processed in order. Place more specific rules before general ones. ",
            "Regular Review and Cleanup: Periodically review firewall rules to remove obsolete or overly permissive rules.",
            "Logging: Log all allowed and denied traffic for monitoring and incident investigation."
        ]},

        { type: ContentItemType.HEADING3, text: "Intrusion Detection Systems (IDS) & Intrusion Prevention Systems (IPS):" },
        { type: ContentItemType.PARAGRAPH, text: "IDS/IPS solutions monitor network or system activities for malicious policies or policy violations."},
        { type: ContentItemType.LIST, items: [
          "Intrusion Detection System (IDS): Passively monitors traffic and system activity. Detects potential intrusions and logs them or alerts administrators but does *not* actively block traffic. Can be Network-based (NIDS) or Host-based (HIDS).",
          "Intrusion Prevention System (IPS): Extends IDS capabilities by actively blocking or preventing detected intrusions in real-time. Can be deployed inline in the network path. Also available as NIPS or HIPS.",
          "Detection Methods:",
          "  - Signature-based detection: Matches network traffic or system activity against a database of known attack patterns (signatures). Effective against known threats but can miss new/zero-day attacks.",
          "  - Anomaly-based detection: Establishes a baseline of normal network/system behavior and flags deviations from this baseline as potentially malicious. Can detect unknown threats but may have a higher false positive rate.",
          "  - Heuristic/Behavioral Analysis: Uses rules and algorithms to identify suspicious behavior that may indicate an attack, even without a specific signature.",
          "  - Stateful Protocol Analysis: Understands protocol states and flags deviations from expected protocol behavior."
        ]},
        
        { type: ContentItemType.HEADING3, text: "Virtual Private Networks (VPNs):" },
        { type: ContentItemType.PARAGRAPH, text: "VPNs create secure, encrypted connections (tunnels) over a less secure public network (like the internet), allowing data to be transmitted as if on a private network. This provides confidentiality and integrity." },
        { type: ContentItemType.PARAGRAPH, text: "Think of a VPN = A private, encrypted armored car for your internet traffic, hiding it from prying eyes and ensuring it arrives unmodified when traveling on public roads (the internet)." },
        { type: ContentItemType.LIST, items: [
          "Remote Access VPNs: Allow individual users (e.g., remote employees) to securely connect to a private corporate network from remote locations.",
          "Site-to-Site VPNs: Connect entire networks in different geographical locations (e.g., connecting a branch office network to the headquarters network), creating a single virtual network.",
          "Common VPN Protocols:",
          "  - IPsec (Internet Protocol Security): A suite of protocols providing security at the Network Layer (Layer 3). Can operate in tunnel mode (encrypting entire original IP packet) or transport mode (encrypting only payload). Uses Authentication Header (AH) for integrity/authenticity and Encapsulating Security Payload (ESP) for confidentiality/integrity/authenticity.",
          "  - SSL/TLS VPNs: Use SSL/TLS (like HTTPS) to secure connections. Often clientless (via web browser) or with a lightweight client. Common for remote access.",
          "  - WireGuard: A newer, modern VPN protocol known for its simplicity, speed, and strong cryptography." ,
          "Split Tunneling: A VPN configuration where only traffic destined for the private network goes through the VPN tunnel, while other internet traffic goes directly to the internet. Can improve performance but may pose security risks if the user's direct internet connection is not secure."
        ]},

        { type: ContentItemType.HEADING3, text: "Network Access Control (NAC):" },
        { type: ContentItemType.PARAGRAPH, text: "NAC solutions enhance network visibility and control by enforcing policies on devices attempting to connect to the network. Before granting access, NAC can check a device's security posture (e.g., antivirus status, patch level, OS version)." },
        { type: ContentItemType.LIST, items: [
            "Pre-admission vs. Post-admission control: Checks before or after network access is granted.",
            "Agent-based vs. Agentless: Requires software on the endpoint or uses network-based techniques.",
            "Remediation: Can quarantine non-compliant devices or provide resources to fix issues."
        ]},

        { type: ContentItemType.HEADING3, text: "Proxy Servers (Security Context):" },
        { type: ContentItemType.PARAGRAPH, text: "Proxies act as intermediaries for network requests."},
        { type: ContentItemType.LIST, items: [
            "Forward Proxy: Used by internal clients to access the internet. Can provide content filtering (URL filtering, keyword blocking), caching, user authentication, and logging of outbound traffic.",
            "Reverse Proxy: Positioned in front of web servers to handle incoming client requests. Can provide load balancing, SSL/TLS termination (offloading encryption from web servers), caching, compression, and security (e.g., hiding internal server IPs, integrating with WAFs)."
        ]},
        { type: ContentItemType.PARAGRAPH, text: "These controls are often used in combination as part of a defense-in-depth strategy to provide multiple layers of network security. For example, a firewall might be the first line of defense, an IPS might inspect traffic allowed through, and a VPN might secure remote connections." }
      ]
    },
    {
      id: "3.5",
      title: "Secure Network Design: Segmentation, Wireless Security, and Zero Trust",
      content: [
        { type: ContentItemType.PARAGRAPH, text: "Secure network design involves architecting the network in a way that minimizes risk, enhances resilience, and supports business objectives. Key principles include network segmentation, robust wireless security, and increasingly, the adoption of Zero Trust principles." },
        
        { type: ContentItemType.HEADING3, text: "Network Segmentation (Expanded):" },
        { type: ContentItemType.PARAGRAPH, text: "Dividing a network into smaller, isolated segments or zones using various technologies. If one segment is compromised, the breach can be contained and prevented from spreading to other parts of the network, limiting the 'blast radius'." },
        { type: ContentItemType.LIST, items: [
          "VLANs (Virtual Local Area Networks): Logically segment a physical network at Layer 2 (Data Link Layer). Devices on different VLANs cannot communicate directly without a Layer 3 device (router or Layer 3 switch) controlling and filtering traffic between them using Access Control Lists (ACLs).",
          "Subnetting: Dividing an IP network into smaller logical sub-networks at Layer 3 (Network Layer). Each subnet has its own network address and broadcast domain. Routers are used to forward traffic between subnets, allowing for ACL enforcement.",
          "DMZ (Demilitarized Zone) / Perimeter Network: A physical or logical subnetwork that exposes an organization's external-facing services (e.g., web servers, email servers, DNS servers) to an untrusted network (like the internet) while isolating them from the internal private network. Typically implemented using one or two firewalls.",
          "  - Single Firewall DMZ: Three interfaces on one firewall (External, Internal, DMZ).",
          "  - Dual Firewall DMZ (Screened Subnet): Two firewalls create a more secure DMZ. The external firewall allows traffic only to the DMZ. The internal firewall allows traffic only from the DMZ to specific internal resources (if needed) and from internal to DMZ.",
          "Microsegmentation: Applying granular security policies to individual workloads, applications, or even processes, often used in data centers and cloud environments. Achieved using technologies like host-based firewalls, security groups (in cloud), or specialized microsegmentation platforms. This drastically reduces the attack surface within a network segment.",
          "East-West vs. North-South Traffic: North-South traffic flows in and out of the data center/network (e.g., user to internet). East-West traffic flows between servers within the data center/network. Historically, security focused on North-South; modern approaches emphasize securing East-West traffic as well, especially with microsegmentation."
        ]},
        { type: ContentItemType.PARAGRAPH, text: "**Benefits of Segmentation:** Improved security (containment), limited attack surface, better performance (reduced broadcast traffic), enhanced monitoring capabilities, easier compliance with regulations (e.g., isolating cardholder data environments for PCI DSS)." },
        
        { type: ContentItemType.HEADING3, text: "Wireless Security (Wi-Fi) - Comprehensive Guide:" },
        { type: ContentItemType.PARAGRAPH, text: "Securing wireless networks is crucial due to their broadcast nature making them inherently more accessible than wired networks. Key practices include:" },
        { type: ContentItemType.LIST, items: [
          "Strong Encryption & Authentication Protocols:",
          "  - WPA3 (Wi-Fi Protected Access 3): The latest standard, offering stronger encryption (SAE - Simultaneous Authentication of Equals, replacing PSK) and better protection against offline dictionary attacks. WPA3-Personal for home, WPA3-Enterprise for businesses.",
          "  - WPA2 (Wi-Fi Protected Access 2): Still widely used. WPA2-Personal (uses a Pre-Shared Key - PSK) for home use. WPA2-Enterprise (uses IEEE 802.1X with a RADIUS server for authentication) for businesses, providing individual user credentials.",
          "  - AES (Advanced Encryption Standard): The encryption algorithm used by WPA2 and WPA3. Ensure it's selected over older, weaker TKIP.",
          "  - Avoid Outdated Protocols: WEP (Wired Equivalent Privacy) and WPA (original version with TKIP) are severely flawed and easily cracked. Disable them.",
          "Strong Wi-Fi Passphrases (for WPA2/3-Personal): Use long (15+ characters), complex, unique passphrases. Avoid common words or easily guessable phrases.",
          "Change Default Router/AP Credentials: Immediately change the default administrator username and password of the wireless router or access point. Default credentials are widely known.",
          "Disable SSID Broadcasting (Conceal Network Name - Optional): Hides the network name from casual scanning. Offers minimal security by obscurity as tools can still discover hidden SSIDs. Not a primary security measure but can deter very casual attackers.",
          "MAC Filtering: Allow only specific MAC addresses (unique hardware identifiers of NICs) to connect. Can be bypassed by MAC spoofing but adds another layer of defense against unsophisticated attackers.",
          "Guest Networks: Provide a separate, isolated wireless network for visitors or untrusted devices. Guest networks should not have access to internal network resources and should ideally be on a separate VLAN.",
          "Regular Firmware Updates: Keep router/AP firmware updated to patch known vulnerabilities. Many routers have auto-update features now.",
          "AP Placement & Power Levels: Strategically place APs to provide adequate coverage while minimizing signal bleed outside the intended area. Adjust transmit power levels if necessary.",
          "Wireless Intrusion Prevention Systems (WIPS): Monitor the radio spectrum for rogue APs, evil twins, deauthentication attacks, and other wireless threats. Can actively block or contain threats.",
          "Captive Portals (for public Wi-Fi): Require users to authenticate or agree to terms via a web page before granting full network access. Often used in hotels, airports, cafes. Ensure the captive portal login page itself is HTTPS.",
          "Evil Twin Attacks: Attackers set up a rogue AP with the same SSID as a legitimate one to trick users into connecting, allowing MitM attacks. WIPS and user awareness help.",
          "Deauthentication/Disassociation Attacks: Attackers send spoofed frames to disconnect clients from an AP, potentially to capture handshake data for password cracking or force clients to connect to an evil twin. Protected Management Frames (PMF/802.11w) in WPA3 helps mitigate this."
        ]},
        { type: ContentItemType.HEADING3, text: "Zero Trust Network Architecture (ZTNA):" },
        { type: ContentItemType.PARAGRAPH, text: "Zero Trust is a security model based on the principle of 'never trust, always verify.' It assumes that threats can exist both outside and inside the network, so no user or device should be trusted by default, regardless of its location. Key tenets include:"},
        { type: ContentItemType.LIST, items: [
            "Identity Verification: Strongly authenticate and authorize every user and device before granting access to resources.",
            "Microsegmentation: Divide the network into very small, granular zones to limit lateral movement for attackers.",
            "Least Privilege Access: Grant users and applications only the minimum access necessary to perform their tasks.",
            "Continuous Monitoring and Validation: Continuously monitor network traffic and user behavior for anomalies and re-verify trust as needed."
        ]},
        {
          type: ContentItemType.PRACTICAL_EXERCISE,
          practicalExerciseData: {
            title: "Is Your Home Router Safe? Comprehensive Security Check (Conceptual)",
            introduction: "Your home router is the gateway to your internet and a critical security device. Securing it is crucial. This guide provides conceptual steps to check and improve its security. (Note: Specific menu names and options vary significantly by router brand/model. Always refer to your router's manual.)",
            tasks: [
              { id: "hr-task-1", description: "Access Your Router's Admin Interface: Open a web browser and type your router's IP address (commonly 192.168.1.1, 192.168.0.1, or found via `ipconfig`/`ifconfig` as 'default gateway'). You'll need the admin username and password.", details: "If you don't know these, check the router's sticker or manual. If it's still the default (e.g., admin/admin, admin/password), this is the first and most critical thing to change!"},
              { id: "hr-task-2", description: "Change Default Admin Credentials: Find the 'Administration', 'System Tools', or 'Password' settings. Change the default admin username (if possible, some routers don't allow this) and create a strong, unique password for router access. Store this password securely.", details: "Use a long, complex password not used anywhere else."},
              { id: "hr-task-3", description: "Check & Update Wi-Fi Encryption: Look for 'Wireless Settings', 'Wi-Fi Security', or similar. Ensure it's set to WPA3-Personal if your devices support it, or at least WPA2-PSK (AES/CCMP). Avoid WEP or WPA/TKIP as they are insecure.", details: "Some routers might show WPA2/WPA3 mixed mode."},
              { id: "hr-task-4", description: "Use a Strong Wi-Fi Password (Passphrase): Your Wi-Fi network password (PSK) should be long (e.g., 15-20+ characters), complex, and unique. Use a mix of uppercase, lowercase, numbers, and symbols. Avoid common dictionary words."},
              { id: "hr-task-5", description: "Disable WPS (Wi-Fi Protected Setup) if not actively needed: WPS has known vulnerabilities (especially older PIN-based methods) and can be a security risk. If you don't use it to connect devices, disable it. Usually found in 'Wireless', 'Advanced Wireless', or 'WPS' settings."},
              { id: "hr-task-6", description: "Check for Firmware Updates: Look for a 'Firmware Update', 'Router Update', or 'System Tools' section. Keeping router firmware updated patches security holes and may add new features. Enable auto-update if available and trusted.", details: "Check your router manufacturer's website for the latest firmware version if manual update is needed."},
              { id: "hr-task-7", description: "Disable Remote Management (WAN Access) if you don't need it: This feature allows router administration from the internet. If you only manage your router from your local network, disable this to reduce attack surface. Often found in 'Administration', 'Advanced Settings', or 'Remote Management'. If you need it, ensure it uses HTTPS and a strong password, and consider restricting access to specific IP addresses.", details: "Also check for UPnP (Universal Plug and Play) and consider disabling it if not needed, as it can automatically open ports and has had security issues."},
              { id: "hr-task-8", description: "Review Connected Devices List: Most routers show a list of currently connected wired and wireless devices. Periodically check this list for any unrecognized devices. If found, investigate and consider changing Wi-Fi password if suspicious.", details: "Some routers allow you to block specific MAC addresses."},
              { id: "hr-task-9", description: "Enable Guest Network (Optional but Recommended): If your router supports it, enable a guest Wi-Fi network for visitors. This network should be isolated from your main network and have its own strong password. Ensure 'client isolation' is enabled for the guest network if possible.", details: "This prevents guests from accessing your personal devices or data."},
              { id: "hr-task-10", description: "Consider Changing Default LAN IP Range (Optional, Advanced): Changing the default LAN IP range (e.g., from 192.168.1.x to something else) can offer minor obscurity against some automated LAN-side attacks but is not a primary security measure."}
            ],
            expectedOutcome: "You'll have reviewed key security settings on your home router and made conceptual improvements to its security posture. You'll be more aware of common router vulnerabilities and how to mitigate them for a safer home network.",
            notes: "This is a general guide. Always refer to your router's specific manual for detailed instructions. Be cautious when changing settings; incorrect changes can disrupt your internet access. If unsure, consult a knowledgeable friend or tech support. Backup your router configuration before making significant changes if the option is available."
          }
        },
        {
          type: ContentItemType.WIFI_SIMULATOR,
          wifiSimulatorData: {
            title: "Airport Wi-Fi Connection Challenge: Security Check",
            scenarioDescription: "You're at 'Cyberia International Airport' and need to quickly check your flight status and perhaps an urgent email. Which Wi-Fi network do you connect to, considering security?",
            networks: [
              { id: "wifi-1", ssid: "Airport_Free_WiFi", securityType: "Open (Unencrypted)", isRecommended: false, feedback: "Open Wi-Fi networks are unencrypted. Anyone nearby could potentially intercept your traffic (passwords, browsing history, emails). Avoid sending sensitive information. Using a VPN is highly recommended on such networks. Risk of 'Evil Twin' APs with the same name.", signalStrength: 4 },
              { id: "wifi-2", ssid: "CyberiaGuest", securityType: "WPA2-PSK (Password: airport123)", isRecommended: false, feedback: "While this network uses WPA2 encryption, a publicly known or easily guessable shared password (like 'airport123') offers little protection against other users on the same network. Treat it similarly to an open network for sensitive tasks. Use a VPN.", signalStrength: 5 },
              { id: "wifi-3", ssid: "Starbucks Rewards Guest", securityType: "Captive Portal (then Open or WPA2-PSK)", isRecommended: false, feedback: "Captive portals often start with an open, unencrypted connection before redirecting you to a login page. The initial connection is risky. Ensure the login page itself is HTTPS. These networks are often targets for fake 'evil twin' access points. Even after login, if it's shared, risks remain. VPN advised.", signalStrength: 3},
              { id: "wifi-4", ssid: "XFINITY / ATTWiFi / Boingo Hotspot", securityType: "Often WPA2-Enterprise or Open with 802.1X", isRecommended: true, feedback: "If this uses WPA2/3-Enterprise (requiring your ISP or Boingo credentials), it's more secure as each user has a unique encryption key. However, ensure it's the legitimate provider's network and not an evil twin. If it's an open network variant requiring web login, be cautious. Using a VPN is still a good idea for maximum privacy.", signalStrength: 4},
              { id: "wifi-5", ssid: "Johns_iPhone_15_Hotspot", securityType: "WPA3-Personal (Strong Password)", isRecommended: true, feedback: "Personal hotspots, especially with WPA3 and a strong, unique password, can be relatively secure if you trust the person providing it and confirm it's their legitimate hotspot (not an evil twin). This avoids the risks of public airport Wi-Fi.", signalStrength: 2}
            ],
            generalAdvice: "Always be cautious on public Wi-Fi. Look for HTTPS (the lock icon) in your browser for web traffic, but remember this doesn't protect all app traffic. Consider using a trusted VPN for an extra layer of encryption for all your data. Avoid accessing highly sensitive accounts (banking, primary email) on public Wi-Fi if possible, or ensure VPN use. Disable auto-connect to open Wi-Fi networks on your device."
          }
        },
        { type: ContentItemType.PARAGRAPH, text: "A well-designed network incorporates these principles to create a resilient and defensible infrastructure, adapting to the evolving threat landscape and business needs." }
      ]
    },
    {
      id: "3.6",
      title: "Cybersecurity Frameworks: NIST CSF, ISO 27001, CIS Controls, and More",
      content: [
        { type: ContentItemType.PARAGRAPH, text: "Cybersecurity frameworks provide structured guidelines, best practices, standards, and recommendations to help organizations establish, manage, and improve their cybersecurity posture in a systematic and repeatable way. They offer a common language and methodology for addressing cyber risk." },
        
        { type: ContentItemType.HEADING3, text: "NIST Cybersecurity Framework (CSF):" },
        { type: ContentItemType.PARAGRAPH, text: "Developed by the U.S. National Institute of Standards and Technology, the NIST CSF is a voluntary framework that provides a high-level taxonomy of cybersecurity outcomes and a methodology to assess and improve an organization's ability to prevent, detect, and respond to cyberattacks. It is widely adopted across various industries and by organizations of all sizes." },
        { type: ContentItemType.HEADING4, text: "Core Components of NIST CSF:" },
        { type: ContentItemType.LIST, items: [
          "Framework Core: A set of cybersecurity activities, desired outcomes, and applicable informative references (e.g., to ISO 27001, COBIT, CIS Controls). Organized into five concurrent and continuous Functions:",
          "  - Identify: Develop an organizational understanding to manage cybersecurity risk to systems, assets, data, and capabilities. Includes Asset Management, Business Environment, Governance, Risk Assessment, Risk Management Strategy, Supply Chain Risk Management.",
          "  - Protect: Develop and implement appropriate safeguards to ensure delivery of critical infrastructure services and limit the impact of a potential cybersecurity event. Includes Identity Management & Access Control, Awareness & Training, Data Security, Information Protection Processes & Procedures, Maintenance, Protective Technology.",
          "  - Detect: Develop and implement appropriate activities to identify the occurrence of a cybersecurity event in a timely manner. Includes Anomalies & Events, Security Continuous Monitoring, Detection Processes.",
          "  - Respond: Develop and implement appropriate activities to take action regarding a detected cybersecurity event. Includes Response Planning, Communications, Analysis, Mitigation, Improvements.",
          "  - Recover: Develop and implement appropriate activities to maintain plans for resilience and to restore any capabilities or services that were impaired due to a cybersecurity event. Includes Recovery Planning, Improvements, Communications.",
          "Implementation Tiers: Describe the degree to which an organization's cybersecurity risk management practices exhibit the characteristics defined in the Framework (from Tier 1: Partial to Tier 4: Adaptive). Tiers help organizations assess their current state.",
          "Framework Profiles: Represent the alignment of the Functions, Categories, and Subcategories with the business requirements, risk tolerance, and resources of the organization. A 'Current Profile' indicates current outcomes, and a 'Target Profile' indicates desired outcomes. The gap between them drives improvement."
        ]},
        { type: ContentItemType.PARAGRAPH, text: "NIST CSF is flexible and designed to be customized to an organization's specific needs." },

        { type: ContentItemType.HEADING3, text: "ISO 27001 / ISO 27000 Series:" },
        { type: ContentItemType.PARAGRAPH, text: "ISO/IEC 27001 is an international standard that specifies the requirements for establishing, implementing, maintaining, and continually improving an Information Security Management System (ISMS). An ISMS is a systematic approach to managing sensitive company information so that it remains secure. ISO 27002 provides a code of practice for information security controls." },
        { type: ContentItemType.HEADING4, text: "Key Aspects of ISO 27001:" },
        { type: ContentItemType.LIST, items: [
          "Risk Assessment and Treatment: Requires organizations to identify information security risks, analyze them, evaluate them, and then select and implement appropriate controls to treat them (mitigate, avoid, transfer, accept).",
          "Annex A Controls: Provides a comprehensive list of control objectives and controls (e.g., 114 controls in 14 domains in the 2013 version; updated in ISO 27001:2022 to 93 controls in 4 themes - Organizational, People, Physical, Technological). These are not mandatory to implement all, but must be considered via the risk assessment.",
          "Management System Approach (PDCA): Emphasizes a Plan-Do-Check-Act (PDCA) cycle for continuous improvement of the ISMS: Plan (establish ISMS), Do (implement and operate ISMS), Check (monitor and review ISMS), Act (maintain and improve ISMS).",
          "Statement of Applicability (SoA): A document that lists the selected controls from Annex A, justifies their inclusion, states whether they are implemented, and may reference relevant documentation.",
          "Certification: Organizations can achieve ISO 27001 certification through an accredited certification body, demonstrating compliance with the standard to stakeholders. This is a key differentiator from NIST CSF."
        ]},

        { type: ContentItemType.HEADING3, text: "CIS Controls (Center for Internet Security Controls):" },
        { type: ContentItemType.PARAGRAPH, text: "The CIS Controls are a prioritized set of actions to protect organizations and data from known cyber-attack vectors. They are practical, actionable, and based on observed attack data. Often seen as a more prescriptive and technical starting point than NIST CSF or ISO 27001." },
        { type: ContentItemType.LIST, items: [
            "Implementation Groups (IGs): IG1 (basic cyber hygiene), IG2 (for organizations with more resources), IG3 (for mature organizations). This helps organizations prioritize based on their capabilities.",
            "Structure: Currently 18 top-level Controls (e.g., Inventory and Control of Enterprise Assets, Data Protection, Access Control Management, Vulnerability Management) with multiple Safeguards (specific actions) under each.",
            "Focus: Strong emphasis on foundational cyber hygiene and technical controls."
        ]},

        { type: ContentItemType.HEADING3, text: "Other Relevant Frameworks & Standards:" },
        { type: ContentItemType.LIST, items: [
            "COBIT (Control Objectives for Information and Related Technologies): A framework for the governance and management of enterprise IT. Broader than just security but includes security aspects.",
            "SOC 2 (System and Organization Controls 2): A reporting framework for service organizations to report on their non-financial internal controls relevant to Trust Services Criteria: Security, Availability, Processing Integrity, Confidentiality, and Privacy.",
            "PCI DSS (Payment Card Industry Data Security Standard): A set of security standards for organizations that handle branded credit cards. Prescriptive requirements for protecting cardholder data.",
            "HITRUST CSF: A comprehensive, flexible, and certifiable framework that harmonizes multiple standards and regulations (including HIPAA, ISO 27001, PCI DSS, NIST) for healthcare organizations.",
            "MITRE ATT&CK®: A globally-accessible knowledge base of adversary tactics and techniques based on real-world observations. Used for threat modeling, threat hunting, and evaluating security control effectiveness against known adversary behaviors."
        ]},
        { type: ContentItemType.PARAGRAPH, text: "Organizations often use multiple frameworks. For example, NIST CSF can provide the overall structure, ISO 27001 the ISMS methodology, CIS Controls the specific technical actions, and ATT&CK the understanding of adversary behaviors. The choice depends on the organization's industry, regulatory requirements, size, and maturity." }
      ]
    }
  ]
};

const CHAPTER_4_CONTENT: Chapter = {
  id: "chapter-4",
  title: "Chapter 4: Programming for Cybersecurity - Scripting Your Defenses and Offenses",
  shortTitle: "Programming for Cybersecurity",
  sections: [
    {
      id: "4.1",
      title: "Introduction to Python for Cybersecurity: Power and Simplicity",
      content: [
        { type: ContentItemType.PARAGRAPH, text: "Programming skills are increasingly indispensable in cybersecurity for automating repetitive tasks, analyzing vast amounts of data, developing custom security tools, understanding attack vectors at a code level, and even for crafting proof-of-concept exploits (in ethical contexts). Python has emerged as a dominant language in this field due to its remarkable combination of simplicity, readability, extensive libraries, and cross-platform compatibility." },
        { type: ContentItemType.HEADING3, text: "Why Python for Cybersecurity?" },
        { type: ContentItemType.LIST, items: [
          "Ease of Learning & Readability: Python's syntax is clear, concise, and resembles plain English, making it relatively easy for beginners to pick up and for experienced programmers to read and maintain.",
          "Rapid Prototyping & Development: Allows for quick development and testing of scripts and tools, essential in a fast-paced field like cybersecurity where quick responses or analyses are often needed.",
          "Extensive Standard Library & Third-Party Libraries: Python boasts a rich ecosystem:",
          "  - Standard Library: Modules like `socket` (networking), `os` (operating system interaction), `subprocess` (running external commands), `re` (regular expressions), `json`, `csv` are built-in.",
          "  - Cybersecurity-Specific Libraries: Numerous powerful libraries cater to various tasks: `Scapy` (packet crafting/sniffing), `Requests` (HTTP requests), `Beautiful Soup` / `lxml` (web scraping), `Paramiko` (SSH), `python-nmap` (Nmap scripting), `PyCryptodome` (cryptography), `Pandas` & `NumPy` (data analysis for logs/forensics), `Volatility3` (memory forensics framework, Python-based), `Pwntools` (exploit development).",
          "Cross-Platform Compatibility: Python scripts can run on Windows, macOS, and Linux with minimal or no modifications, making tools developed in Python highly portable.",
          "Strong Community Support & Resources: A large, active global community provides abundant resources, tutorials, documentation, and support forums (e.g., Stack Overflow).",
          "Integration Capabilities: Python can easily integrate with other languages and tools, acting as 'glue' code.",
          "Automation Powerhouse: Ideal for automating security tasks such as log analysis, vulnerability scanning orchestration, report generation, configuration management, and incident response actions."
        ]},
        { type: ContentItemType.HEADING3, text: "Common Cybersecurity Applications of Python (with conceptual one-liners):" },
        { type: ContentItemType.LIST, items: [
          "Network Scanning and Packet Manipulation: `from scapy.all import sr1, IP, TCP; response = sr1(IP(dst='target.com')/TCP(dport=80, flags='S'))`",
          "Web Application Scraping and Analysis: `import requests; page = requests.get('http://example.com').text`",
          "Interacting with APIs (e.g., VirusTotal, Shodan): `response = requests.get('https://api.example.com/data', headers={'X-API-Key': 'YOUR_KEY'})`",
          "Malware Analysis (scripting analysis tasks, e.g., unpacking, string extraction): `import pefile; pe = pefile.PE('malware.exe'); print(pe.sections)`",
          "Log Parsing and Event Correlation: `with open('server.log') as f: for line in f: if 'ERROR' in line: print(line)`",
          "Automating Security Tool Interactions (e.g., running Nmap and parsing output).",
          "Fuzzing (sending malformed data to test for vulnerabilities in applications or protocols).",
          "Developing Simple Penetration Testing Tools (e.g., custom port scanners, directory busters).",
          "Data Visualization for Security Analytics (using `Matplotlib` or `Seaborn` with log data).",
          "Password Cracking (scripting interactions with tools or custom logic for specific hash types).",
          "Digital Forensics (automating extraction of artifacts, timeline creation)."
        ]},
        { type: ContentItemType.PARAGRAPH, text: "This chapter will introduce basic Python concepts and demonstrate how they can be applied to common cybersecurity scenarios, empowering you to build your own scripts and understand code written by others in the field." }
      ]
    },
    {
      id: "4.2",
      title: "Essential Python Programming Concepts for Security Scripting",
      content: [
        { type: ContentItemType.PARAGRAPH, text: "To effectively use Python for cybersecurity, a grasp of its fundamental programming concepts is essential. This section covers the basics, with a slight emphasis on security-relevant contexts." },
        { type: ContentItemType.HEADING3, text: "Core Concepts:" },
        { type: ContentItemType.LIST, items: [
          "Variables and Data Types: Storing data (e.g., `target_ip = \"192.168.1.10\"`, `open_port = 22`, `is_vulnerable = True`). Common types:",
          "  - Strings (`str`): Text, e.g., `'User-Agent: Python-Requests'`, `\"SELECT * FROM users\"`.",
          "  - Integers (`int`): Whole numbers, e.g., `port = 80`, `timeout = 5`.",
          "  - Floats (`float`): Decimal numbers, e.g., `version = 2.1`.",
          "  - Booleans (`bool`): `True` or `False`, e.g., `is_admin = False`.",
          "  - Lists (`list`): Ordered, mutable collections, e.g., `ports_to_scan = [21, 22, 80, 443]`, `vulnerabilities_found = []`.",
          "  - Dictionaries (`dict`): Unordered (ordered in Python 3.7+) key-value pairs, e.g., `headers = {'Content-Type': 'application/json', 'Authorization': 'Bearer ...'}`.",
          "  - Tuples (`tuple`): Ordered, immutable collections, e.g., `ip_and_port = ('10.0.0.5', 443)`.",
          "  - Sets (`set`): Unordered collections of unique items, e.g., `unique_ips = {'1.1.1.1', '2.2.2.2'}`.",
          "Operators: Performing operations:",
          "  - Arithmetic: `+`, `-`, `*`, `/`, `//` (floor division), `%` (modulo), `**` (exponentiation).",
          "  - Comparison: `==`, `!=`, `>`, `<`, `>=`, `<=` (e.g., `if response.status_code == 200:`).",
          "  - Logical: `and`, `or`, `not` (e.g., `if 'admin' in username and password_correct:`).",
          "  - Assignment: `=`, `+=`, `-=`, etc.",
          "  - Membership: `in`, `not in` (e.g., `if 'root' in process_list:`).",
          "  - Identity: `is`, `is not` (checks if two variables point to the same object).",
          "Control Flow: Directing the execution of code.",
          "  - Conditional Statements: `if`, `elif`, `else` (e.g., `if port_open(target, port): print(f'Port {port} is open') else: print(f'Port {port} is closed')`).",
          "  - Loops: `for` (iterating over sequences like lists, strings, or ranges), `while` (repeating as long as a condition is true). E.g., `for port in common_ports: scan(target, port)`.",
          "Functions: Reusable blocks of code that perform a specific task (e.g., `def scan_port(ip_address, port_number): ...`). Functions take arguments (inputs) and can return values (outputs). They improve code organization, readability, and reduce redundancy.",
          "Modules and Libraries: Collections of pre-written functions, classes, and variables that extend Python's capabilities. Use `import module_name` or `from module_name import specific_function` to bring them into your script (e.g., `import socket`, `from scapy.all import IP, TCP`). The Python Package Index (PyPI) hosts thousands of third-party libraries installable via `pip`.",
          "File I/O: Reading from and writing to files. Essential for log analysis, reading configuration files, wordlists, or saving scan results.",
          "  - Reading: `with open('wordlist.txt', 'r') as f: for line in f: password = line.strip()`",
          "  - Writing: `with open('scan_results.txt', 'w') as f: f.write(f'Host {ip} is up.\\n')`",
          "Error Handling (Exception Handling): Using `try`, `except`, `else`, `finally` blocks to gracefully manage errors (exceptions) that occur during script execution and prevent scripts from crashing. Crucial for robust network scripts that might encounter timeouts or connection refusals.",
          "  - Example: `try: s.connect((target_ip, port)) except socket.timeout: print('Connection timed out') except socket.error as e: print(f'Connection error: {e}')`",
          "Basic Input/Output: Getting input from the user (`input('Enter target IP: ')`) and displaying output (`print(f'Scanning {target_ip}...')`).",
          "String Manipulation: Slicing, concatenating, finding substrings, formatting (f-strings are highly recommended: `f'Hello, {name}!'`). Essential for parsing text data, logs, and constructing payloads."
        ]},
        { type: ContentItemType.HEADING4, text: "Example: Simple Port Scanner Snippet (Conceptual with more detail)" },
        { type: ContentItemType.PARAGRAPH, text: "```python\nimport socket\nimport sys # For command-line arguments\n\ndef check_port(ip_address, port_number, timeout=1):\n    \"\"\"Checks if a specific port is open on the target IP.\"\"\"\n    try:\n        # Create a socket object (AF_INET for IPv4, SOCK_STREAM for TCP)\n        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n        # Set a timeout for the connection attempt to avoid indefinite blocking\n        sock.settimeout(timeout)\n        # Attempt to connect to the IP and port\n        # connect_ex returns an error indicator (0 for success)\n        result = sock.connect_ex((ip_address, port_number))\n        if result == 0:\n            print(f\"[+] Port {port_number}/tcp is open on {ip_address}\")\n        # else: (Optional) Port is closed or filtered\n        #    print(f\"[-] Port {port_number}/tcp is closed or filtered on {ip_address}\")\n        sock.close() # Always close the socket\n    except socket.timeout:\n        print(f\"[!] Connection to {ip_address}:{port_number} timed out.\")\n    except socket.gaierror: # Address-related error (e.g., hostname not found)\n        print(f\"[!] Hostname {ip_address} could not be resolved.\")\n        return # Exit function if hostname resolution fails\n    except socket.error as e:\n        print(f\"[!] Could not connect to {ip_address}:{port_number}. Error: {e}\")\n\nif __name__ == \"__main__\":\n    # Basic command-line argument handling (very simple)\n    if len(sys.argv) < 2:\n        print(\"Usage: python port_scanner.py <target_ip_or_hostname> [port1,port2,...]\")\n        sys.exit(1)\n\n    target_host = sys.argv[1]\n    \n    if len(sys.argv) > 2:\n        # If ports are provided as comma-separated string\n        try:\n            ports_to_scan_str = sys.argv[2].split(',')\n            ports_to_scan = [int(p) for p in ports_to_scan_str]\n        except ValueError:\n            print(\"[!] Invalid port numbers. Please provide comma-separated integers.\")\n            sys.exit(1)\n    else:\n        # Default to a few common ports if none specified\n        ports_to_scan = [21, 22, 23, 25, 53, 80, 110, 143, 443, 445, 3306, 3389, 5900, 8080]\n\n    print(f\"Scanning {target_host} for ports: {ports_to_scan}\\n\")\n    for port in ports_to_scan:\n        check_port(target_host, port)\n\n    print(\"\\nScan complete.\")\n\n```" },
        { type: ContentItemType.PARAGRAPH, text: "This conceptual snippet demonstrates variables, functions with docstrings and type hints (conceptual), loops, conditional statements, comprehensive error handling for networking, command-line argument parsing, and the use of the `socket` module for network interaction. This level of detail is more akin to a usable script." }
      ]
    },
    {
      id: "4.3",
      title: "Key Python Libraries for Common Security Tasks (Expanded)",
      content: [
        { type: ContentItemType.PARAGRAPH, text: "Python's power in cybersecurity is greatly amplified by its extensive collection of third-party libraries. These libraries provide specialized functionalities, saving significant development time and effort. Here's a more detailed look at some essential ones:" },
        
        { type: ContentItemType.HEADING3, text: "Networking & Packet Manipulation:" },
        { type: ContentItemType.LIST, items: [
          "**Scapy:** A powerful interactive packet manipulation program and library. It can forge or decode packets of a wide number of protocols, send them on the wire, capture them, match requests and replies, and much more. Excellent for custom network scans, protocol analysis, crafting proof-of-concept exploits for network vulnerabilities, and network discovery.",
          "  - Common uses: `send()`/`sr()` (send and receive packets), `sniff()` (capture packets), crafting layers (`IP()`, `TCP()`, `DNS()`, etc.), `hexdump()`.",
          "**Requests:** A simple, yet elegant HTTP library. Makes sending HTTP/1.1 requests extremely easy. Used for interacting with web services, APIs, web scraping, and testing web application security.",
          "  - Common uses: `requests.get()`, `requests.post()`, `requests.Session()` (for persistent connections and cookies), handling headers, JSON data, file uploads.",
          "**Sockets (built-in):** Python's built-in module for low-level network programming (TCP/IP, UDP). Provides the fundamental building blocks for network communication used by many higher-level libraries.",
          "  - Common uses: `socket.socket()`, `bind()`, `listen()`, `accept()`, `connect()`, `send()`, `recv()`.",
          "**python-nmap:** A Python library that helps in using the Nmap port scanner programmatically. Allows you to initiate Nmap scans from Python scripts and parse the XML output into Python objects.",
          "  - Common uses: `PortScanner().scan(hosts='target', arguments='-sS -sV')`."
        ]},
        
        { type: ContentItemType.HEADING3, text: "Web Interaction & Scraping:" },
        { type: ContentItemType.LIST, items: [
          "**Beautiful Soup (bs4):** A library for pulling data out of HTML and XML files. Works with your favorite parser to provide idiomatic ways of navigating, searching, and modifying the parse tree. Useful for web scraping to gather information, find vulnerabilities (e.g., exposed comments, links to sensitive files), or analyze website structure.",
          "  - Common uses: `BeautifulSoup(html_doc, 'html.parser')`, `soup.find()`, `soup.find_all()`, navigating by tags and attributes.",
          "**Selenium:** A browser automation tool. It can control a web browser programmatically, allowing for interaction with dynamic web content (JavaScript-heavy sites), automating logins, filling forms, and taking screenshots. Used for testing web application security (e.g., XSS, CSRF exploitation), and complex scraping tasks.",
          "  - Common uses: `webdriver.Chrome()`, `driver.get()`, `driver.find_element_by_id()`, `element.click()`, `element.send_keys()`."
        ]},
        
        { type: ContentItemType.HEADING3, text: "Cryptography:" },
        { type: ContentItemType.LIST, items: [
          "**PyCryptodome:** A self-contained Python package of low-level cryptographic primitives. Successor to the unmaintained PyCrypto. Supports various symmetric ciphers (AES, DES), asymmetric ciphers (RSA, ECC), hashing algorithms (SHA, MD5), MACs (HMAC), and cryptographic protocols.",
          "  - Common uses: `AES.new(key, AES.MODE_GCM)`, `RSA.generate(bits)`, `SHA256.new(data)`, `PKCS1_OAEP.new(key).encrypt(data)`.",
          "**Cryptography (pyca/cryptography):** Another popular library providing high-level recipes and low-level interfaces to common cryptographic algorithms like hashing, symmetric ciphers (Fernet), and asymmetric cryptography (RSA, ECC, X.509 certificate manipulation). Designed to be safer and easier to use correctly than older libraries.",
          "  - Common uses: `Fernet(key).encrypt(data)`, `hashes.Hash(hashes.SHA256())`, `rsa.generate_private_key()`."
        ]},

        { type: ContentItemType.HEADING3, text: "Malware Analysis & Forensics:" },
        { type: ContentItemType.LIST, items: [
          "**pefile:** A library for parsing and working with Portable Executable (PE) files (Windows executables and DLLs). Useful for static malware analysis to extract headers, sections, imports, exports, resources, and other metadata.",
          "  - Common uses: `pefile.PE('file.exe')`, accessing `pe.DOS_HEADER`, `pe.NT_HEADERS`, `pe.sections`, `pe.DIRECTORY_ENTRY_IMPORT`.",
          "**Volatility3 (and libioc):** While a standalone framework, Volatility is a powerful memory forensics tool written in Python. Understanding its Python API (libioc) can allow for scripting custom memory analysis tasks. Used to analyze memory dumps for running processes, network connections, loaded modules, malware artifacts, etc.",
          "**YARA / yara-python:** YARA is a tool to identify and classify malware samples based on textual or binary patterns. The `yara-python` library allows you to use YARA rules within your Python scripts.",
          "  - Common uses: `yara.compile(rules_file).match(data=sample_data)`."
        ]},

        { type: ContentItemType.HEADING3, text: "Data Analysis & Visualization:" },
        { type: ContentItemType.LIST, items: [
          "**Pandas:** A powerful data analysis and manipulation library offering data structures like DataFrames. Extremely useful for parsing and analyzing large datasets like CSV logs, JSON data, or structured security event information.",
          "  - Common uses: `pd.read_csv()`, `DataFrame.groupby()`, filtering, sorting, statistical analysis.",
          "**Matplotlib / Seaborn:** Libraries for creating static, animated, and interactive visualizations in Python. Helps in presenting security data, identifying trends in logs, or visualizing network traffic patterns.",
          "  - Common uses: `plt.plot()`, `plt.hist()`, `sns.heatmap()`."
        ]},
        
        { type: ContentItemType.HEADING3, text: "Others:" },
        { type: ContentItemType.LIST, items: [
          "**Paramiko:** A Python (2.7, 3.4+) implementation of the SSHv2 protocol, providing both client and server functionality. Useful for automating SSH interactions, executing remote commands, and transferring files (SFTP).",
          "  - Common uses: `SSHClient().connect()`, `client.exec_command()`, `SFTPClient.from_transport().put()`.",
          "**Click / Argparse (built-in):** Libraries for creating command-line interfaces (CLIs) for your Python scripts, making them more user-friendly and configurable.",
          "**Pwntools:** A CTF framework and exploit development library. Simplifies many common tasks in binary exploitation, shellcoding, and interacting with remote services.",
          "  - Common uses: `process('./vuln_binary')`, `remote('target', port)`, `pwn.p32()` (packing data), `pwn.ELF()` (ELF file parsing)."
        ]},
        { type: ContentItemType.PARAGRAPH, text: "Exploring the documentation and examples for these libraries is key to leveraging Python effectively for specific cybersecurity challenges. Many tasks can be accomplished with just a few lines of code by utilizing the right library." }
      ]
    },
    {
      id: "4.4",
      title: "Practical Python Scripting Exercises for Cybersecurity",
      content: [
        { type: ContentItemType.PARAGRAPH, text: "The best way to learn programming and its application in cybersecurity is by doing. This section outlines ideas for practical Python scripting exercises, ranging from beginner to more advanced. Remember to **only perform these exercises on systems you own or have explicit permission to test.**" },
        
        { type: ContentItemType.HEADING3, text: "Beginner Exercises:" },
        { type: ContentItemType.LIST, items: [
          "**1. Simple Port Scanner:** Write a script that takes an IP address and a list of ports (or a range) as input, then attempts to connect to each port to check if it's open or closed. Display the results.",
          "   - *Concepts used:* Sockets, loops, conditional statements, basic error handling (e.g., for timeouts).",
          "**2. Banner Grabbing Tool:** Extend the port scanner. If a port is open, attempt to receive a small amount of data (the service banner, e.g., web server version, SSH version) and display it.",
          "   - *Concepts used:* Socket `recv()`, string manipulation, error handling.",
          "**3. File Hash Calculator:** Create a script that prompts the user for a file path, then calculates and displays MD5, SHA1, and SHA256 hashes for that file. Useful for verifying file integrity.",
          "   - *Concepts used:* `hashlib` module, file I/O (binary read mode), string formatting.",
          "**4. Simple Log File Parser:** Write a script to read a web server log file (e.g., Apache access log format). Count occurrences of specific IP addresses, HTTP status codes (e.g., 404s, 500s), or requested URLs.",
          "   - *Concepts used:* File I/O, string methods (`split()`, `startswith()`, `endswith()`), dictionaries (for counting).",
          "**5. Caesar Cipher Encryptor/Decryptor:** Implement a simple Caesar cipher to encrypt and decrypt text messages by shifting letters a certain number of places in the alphabet.",
          "   - *Concepts used:* String iteration, character manipulation (`ord()`, `chr()`), modular arithmetic."
        ]},
        
        { type: ContentItemType.HEADING3, text: "Intermediate Exercises:" },
        { type: ContentItemType.LIST, items: [
          "**1. Subdomain Enumerator:** Develop a script that takes a domain name and a wordlist of common subdomains. For each subdomain in the wordlist, attempt a DNS lookup to see if it resolves to an IP address. Display found subdomains.",
          "   - *Concepts used:* `socket.gethostbyname()`, file I/O (reading wordlist), error handling (for non-existent domains).",
          "**2. Web Page Link Extractor:** Use libraries like `Requests` and `Beautiful Soup` to fetch a web page and extract all the links (`<a>` tag `href` attributes) from it. Optionally, categorize them as internal or external links.",
          "   - *Concepts used:* `requests.get()`, `BeautifulSoup` parsing, finding elements by tag/attribute.",
          "**3. Basic Network Sniffer (using Scapy):** Write a script to capture a small number of network packets (e.g., ICMP, TCP) on your local interface and display basic information like source/destination IP, source/destination port, and protocol.",
          "   - *Concepts used:* `scapy.sniff()`, accessing packet layers and fields (e.g., `pkt[IP].src`, `pkt[TCP].dport`).",
          "**4. Automated SSH Command Executor:** Use `Paramiko` to connect to an SSH server (e.g., a local VM you set up), execute a predefined command (e.g., `ls -l`, `uname -a`), and capture/display the output.",
          "   - *Concepts used:* `paramiko.SSHClient()`, `connect()`, `exec_command()`, handling stdout/stderr.",
          "**5. Basic Web Directory/File Guesser:** Given a base URL and a wordlist of common directory/file names, try to access `base_url/word` and check the HTTP status code to see if it exists (e.g., 200 OK, 403 Forbidden might indicate existence).",
          "   - *Concepts used:* `requests.get()`, handling status codes, file I/O (wordlist), loops."
        ]},
        
        { type: ContentItemType.HEADING3, text: "Advanced Exercise Ideas (Conceptual - requires more research and care):" },
        { type: ContentItemType.LIST, items: [
          "**1. Simple Vulnerability Scanner for a Specific CVE:** Choose a well-documented CVE with a clear check (e.g., a specific vulnerable software version banner). Write a script that connects to a service, grabs its banner, and checks if it matches the vulnerable version.",
          "**2. Analysis of PE File Headers for Suspicious Indicators:** Use `pefile` to extract and display information from the headers of Windows executable files, such as import table, section names, and compile time. Look for anomalies (e.g., packed sections, suspicious import functions).",
          "**3. Basic Keylogger (for educational purposes ONLY on your own system, understand legal/ethical implications):** Experiment with libraries like `pynput` to capture keyboard input. This is highly sensitive and should only be done on your own machine for learning how such malware might work.",
          "**4. Automated Log Anomaly Detector (Simple Version):** Analyze a log file (e.g., auth.log) to establish a baseline of normal activity (e.g., common login times, source IPs for a user). Then, flag deviations from this baseline (e.g., login from a new IP, login at an unusual time).",
          "**5. Crafting Custom Network Packets with Scapy:** Design and send custom packets to test network device responses or specific protocol interactions (e.g., crafting a TCP packet with unusual flag combinations, sending malformed DNS queries)."
        ]},
        { type: ContentItemType.PARAGRAPH, text: "Start with simpler exercises and gradually increase complexity. Focus on understanding the logic, breaking down problems, and utilizing appropriate Python libraries. Always prioritize ethical considerations and legal boundaries: only test systems you own or have explicit, written permission to test." },
        {
          type: ContentItemType.PRACTICAL_EXERCISE,
          practicalExerciseData: {
            title: "Python File Hasher - Enhanced",
            introduction: "Create a Python script that prompts the user for a file path and then calculates and displays its MD5, SHA1, and SHA256 hashes. This version will also allow comparing the calculated hash to an expected hash provided by the user.",
            tasks: [
              { id: "pyex-task-1", description: "Import the `hashlib` and `sys` modules." },
              { id: "pyex-task-2", description: "Define a function, e.g., `calculate_hashes(filepath)`, that takes a file path as input.", details: "This function should open the file in binary read mode (`'rb'`). Handle potential `FileNotFoundError`." },
              { id: "pyex-task-3", description: "Inside the function, read the file content. For large files, consider reading in chunks to manage memory (e.g., `file.read(4096)` in a loop, updating the hash object with each chunk using `hasher.update(chunk)`).", details: "For simplicity in this exercise, reading the whole file at once is acceptable if files are small."},
              { id: "pyex-task-4", description: "Calculate MD5, SHA1, and SHA256 hashes using `hashlib.md5(file_content).hexdigest()`, `hashlib.sha1(file_content).hexdigest()`, and `hashlib.sha256(file_content).hexdigest()`. Return these hashes (e.g., as a dictionary)." },
              { id: "pyex-task-5", description: "In the main part of your script (e.g., under `if __name__ == \"__main__\":`), prompt the user to enter a file path using `input()`." },
              { id: "pyex-task-6", description: "Call your `calculate_hashes` function and print the calculated hashes in a clear format." },
              { id: "pyex-task-7", description: "Optionally, prompt the user if they want to compare a hash: `input('Do you want to compare a hash (sha256/sha1/md5)? Enter type or no: ')`."},
              { id: "pyex-task-8", description: "If yes, prompt for the expected hash value: `input('Enter the expected hash value: ')`."},
              { id: "pyex-task-9", description: "Compare the relevant calculated hash (case-insensitively) with the user-provided expected hash and print whether they match or not."}
            ],
            expectedOutcome: "The script should correctly display the MD5, SHA1, and SHA256 hashes for the specified file. If comparison is chosen, it should accurately report if the calculated hash matches the expected hash. Error handling for file not found should be present.",
            notes: "You can create a sample text file to test your script. Generate its hashes using system utilities (e.g., `md5sum`, `sha1sum`, `sha256sum` on Linux, or `Get-FileHash -Algorithm [MD5|SHA1|SHA256]` in PowerShell on Windows) to verify your script's output and for the comparison feature."
          }
        }
      ]
    }
  ]
};

const CHAPTER_5_CONTENT: Chapter = {
  id: "chapter-5",
  title: "Chapter 5: Application & Data Security - Protecting Information Assets",
  shortTitle: "Application & Data Security",
  sections: [
    {
      id: "5.1",
      title: "Secure Application Design Principles (Expanded)",
      content: [
        { type: ContentItemType.PARAGRAPH, text: "Building secure applications requires integrating security into every phase of the development lifecycle (Secure Software Development Lifecycle - SSDLC). Proactive design, based on established security principles, is far more effective and less costly than attempting to retrofit security features after development or, worse, after a breach." },
        { type: ContentItemType.HEADING3, text: "Fundamental Secure Design Principles (Detailed):" },
        { type: ContentItemType.LIST, items: [
          "**Principle of Least Privilege (PoLP):** Grant users, processes, and applications only the minimum set of permissions, rights, and resources necessary to perform their intended functions for the shortest duration possible. Avoid using overly permissive accounts or roles (e.g., running services as root/administrator when not strictly needed).",
          "**Defense in Depth:** Implement multiple, layered security controls. If one layer fails or is bypassed, other layers are still in place to protect assets. This creates a resilient security posture (e.g., network firewall + host firewall + WAF + input validation + IAM).",
          "**Fail Securely (or Fail-Safe Defaults):** Applications should default to a secure state in the event of an error or failure. For example, if an authentication mechanism fails or a configuration file is corrupt, access should be denied rather than granting default or permissive access. Error messages should be generic and not reveal sensitive system information.",
          "**Input Validation:** Rigorously validate all input from any untrusted source, including users, external systems (APIs, files, databases), and even inter-process communication. Treat all input as potentially malicious. Validation should be context-aware (e.g., validating for HTML context is different from SQL context) and use whitelisting (allowing only known-good patterns) over blacklisting (blocking known-bad patterns). This is critical for preventing injection attacks (SQLi, XSS, Command Injection), buffer overflows, and other input-based vulnerabilities.",
          "**Output Encoding:** Properly encode data before displaying it to users or sending it to other systems to prevent interpretation-based attacks like Cross-Site Scripting (XSS). The type of encoding depends on the context where data is rendered (e.g., HTML entity encoding for HTML body, URL encoding for URL parameters, JavaScript encoding for script contexts, LDAP encoding for LDAP queries).",
          "**Separation of Duties (SoD):** Divide critical tasks and responsibilities among multiple individuals or roles to prevent a single point of compromise or fraud. No single person should have control over all aspects of a critical process.",
          "**Attack Surface Reduction:** Minimize the number of exposed entry points (e.g., open network ports, running services, APIs, libraries, code dependencies, user accounts). The smaller the attack surface, the fewer opportunities an attacker has. Disable unused features and services.",
          "**Secure Defaults:** Configure applications and systems with secure settings by default. Users or administrators should have to explicitly make choices to weaken security, not to enable basic security features.",
          "**Threat Modeling:** A proactive process performed during design and development to identify potential threats, vulnerabilities, attack vectors, and countermeasures for an application. Methodologies like STRIDE (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege) or DREAD (Damage potential, Reproducibility, Exploitability, Affected users, Discoverability) can be used. It helps prioritize security efforts.",
          "**Keep Security Simple (Economy of Mechanism):** Complex security mechanisms are harder to design, implement correctly, audit, and maintain. Simplicity in design and implementation often leads to more robust security, as there are fewer places for errors or oversights. However, simplicity should not come at the expense of necessary security controls.",
          "**Don't Trust Services (Zero Trust Mindset for Services):** Treat internal and external services (microservices, third-party APIs) as potentially untrusted. Validate and sanitize data received from them. Implement mechanisms like network segmentation, mutual authentication (mTLS), and proper authorization for inter-service communication.",
          "**Data Minimization:** Collect, process, and retain only the data that is absolutely necessary for the application's legitimate function and for the minimum required duration. This reduces the impact if a data breach occurs.",
          "**Psychological Acceptability (Usable Security):** Security controls should be designed to be as unobtrusive and user-friendly as possible, without compromising effectiveness. If security measures are too cumbersome or disruptive, users may find ways to bypass them, leading to reduced overall security.",
          "**Complete Mediation:** Every access to every object must be checked for authority. This principle ensures that permissions are not cached or assumed after an initial check.",
          "**Open Design:** The security of a system should not depend on the secrecy of its design or implementation (Kerckhoffs's Principle, relevant to cryptography). Security through obscurity is generally not a robust long-term strategy.",
          "**Session Management:** Implement secure session handling, including strong session identifiers, timely expiration, secure termination (logout), and protection against session fixation and hijacking."
        ]},
        { type: ContentItemType.PARAGRAPH, text: "Adhering to these principles throughout the development process, from requirements gathering to deployment and maintenance, significantly reduces the likelihood of security vulnerabilities and builds more resilient and trustworthy applications." }
      ]
    },
    {
      id: "5.2",
      title: "Web Application Vulnerabilities: OWASP Top 10 Deep Dive",
      content: [
        { type: ContentItemType.PARAGRAPH, text: "Web applications are prime targets for attackers due to their public accessibility and the valuable data they often handle. The Open Web Application Security Project (OWASP) Top 10 is a widely recognized awareness document representing a broad consensus about the most critical security risks to web applications. Understanding these is crucial." },
        
        { type: ContentItemType.HEADING3, text: "A1:2021 - Broken Access Control" },
        { type: ContentItemType.PARAGRAPH, text: "Failures related to how access control (authorization) is enforced. Attackers can exploit these flaws to access unauthorized functionality or data, such as accessing other users' accounts, viewing sensitive files, or modifying other users' data." },
        { type: ContentItemType.LIST, items: [
          "Examples: Insecure Direct Object References (IDORs) where an attacker changes a URL parameter (`?id=123` to `?id=124`) to access another user's record. Privilege escalation by accessing admin functions without proper checks.",
          "Prevention: Enforce access control checks on the server-side for every request. Use role-based access control (RBAC) or attribute-based access control (ABAC). Implement the principle of least privilege. Deny by default. Thoroughly test access control mechanisms.",
          "Analogy: A hotel where any room key can open any door, not just the one it was issued for."
        ]},

        { type: ContentItemType.HEADING3, text: "A2:2021 - Cryptographic Failures (formerly Sensitive Data Exposure)" },
        { type: ContentItemType.PARAGRAPH, text: "Failures related to cryptography (or lack thereof) which can lead to exposure of sensitive data. This includes data in transit (e.g., using HTTP instead of HTTPS) and data at rest (e.g., storing passwords in plaintext or using weak hashing)." },
        { type: ContentItemType.LIST, items: [
          "Examples: Transmitting credit card data over HTTP. Storing user passwords as plaintext or using MD5 hashes without salt. Using weak or outdated encryption algorithms/protocols (e.g., SSLv3, DES). Hardcoded cryptographic keys.",
          "Prevention: Encrypt all sensitive data in transit (use TLS 1.2+ with strong ciphers) and at rest (use strong encryption like AES-256). Use strong, salted, and iterated hashing algorithms for passwords (e.g., Argon2, bcrypt, scrypt). Implement proper key management. Don't roll your own crypto.",
          "Analogy: Sending a postcard (HTTP) with your bank details vs. an armored car (HTTPS). Storing your diary in plain sight (plaintext passwords) vs. a locked safe (strong hashed passwords)."
        ]},

        { type: ContentItemType.HEADING3, text: "A3:2021 - Injection (SQLi, NoSQLi, OS Command, LDAP)" },
        { type: ContentItemType.PARAGRAPH, text: "Injection flaws occur when untrusted data is sent to an interpreter as part of a command or query. The attacker's hostile data can trick the interpreter into executing unintended commands or accessing data without proper authorization." },
        { type: ContentItemType.LIST, items: [
          "**SQL Injection (SQLi):** Malicious SQL code injected into input fields, executed by the backend database.",
          "  - Types: Error-based, Union-based, Blind (Boolean-based, Time-based).",
          "  - Prevention: Use parameterized queries (prepared statements), Object-Relational Mappers (ORMs), input validation (whitelisting), least privilege database accounts.",
          "**NoSQL Injection:** Similar to SQLi but targets NoSQL databases (e.g., MongoDB, CouchDB) by injecting code or operators specific to that database's query language.",
          "**OS Command Injection:** Injecting OS commands through vulnerable application input. E.g., `filename=test.txt; rm -rf /`.",
          "  - Prevention: Avoid calling OS commands directly with user input. Use built-in language functions. Sanitize input rigorously if unavoidable.",
          "**LDAP Injection:** Exploiting applications that construct LDAP queries with user input.",
          "Prevention (General): Input validation and sanitization specific to the interpreter. Use safe APIs that avoid interpretation of user-supplied data as code/commands. Contextual output encoding."
        ]},
        { 
          type: ContentItemType.THREAT_EXPLAINER,
          threatExplainerData: {
            title: "How SQL Injection (SQLi) Works: A Step-by-Step Look",
            introduction: "SQL Injection is like tricking a database into running unintended commands by sneaking them into user input. Here's a simplified conceptual flow for a login bypass:",
            steps: [
              { title: "Step 1: Vulnerable Login Form", description: "A web application has a login form. The backend query might look like: `SELECT * FROM users WHERE username = '[USER_INPUT_USER]' AND password = '[USER_INPUT_PASS]'`." },
              { title: "Step 2: Malicious Input", description: "An attacker enters a username like `' OR '1'='1' --` and any password." },
              { title: "Step 3: Query Modification", description: "The application inserts this. The query becomes: `SELECT * FROM users WHERE username = '' OR '1'='1' --' AND password = 'anything'`." },
              { title: "Step 4: Unintended Execution", description: "The database executes this. `'1'='1'` is always true. The `--` comments out the rest of the original query. So, it effectively becomes `SELECT * FROM users WHERE username = '' OR '1'='1'`, which returns all users (or the first user), potentially logging the attacker in as that user without knowing the password." },
              { title: "Step 5: Impact", description: "Attacker gains unauthorized access to an account. Similar techniques can be used to extract data, modify data, or drop tables." }
            ]
          }
        },
        
        { type: ContentItemType.HEADING3, text: "A4:2021 - Insecure Design" },
        { type: ContentItemType.PARAGRAPH, text: "Focuses on risks related to design and architectural flaws, requiring more than a simple fix in implementation. Highlights the need for threat modeling, secure design patterns, and reference architectures." },
        { type: ContentItemType.LIST, items: [
          "Examples: Lack of business logic flaws consideration during design, improper separation of duties in application architecture, overly complex designs that are hard to secure.",
          "Prevention: Integrate security into all phases of the design lifecycle. Use threat modeling (STRIDE, DREAD) from the beginning. Apply secure design patterns. Conduct architectural reviews with a security focus.",
          "Analogy: Building a house without proper blueprints, leading to structural weaknesses or easy entry points that are hard to fix later."
        ]},

        { type: ContentItemType.HEADING3, text: "A5:2021 - Security Misconfiguration" },
        { type: ContentItemType.PARAGRAPH, text: "This is often a result of insecure default configurations, incomplete or ad-hoc configurations, open cloud storage, misconfigured HTTP headers, or verbose error messages containing sensitive information." },
        { type: ContentItemType.LIST, items: [
          "Examples: Default admin credentials unchanged. Unnecessary features/services enabled (e.g., directory listing on web servers). Error messages revealing stack traces or internal paths. Cloud storage (S3 buckets) accidentally made public. Missing security headers like `Content-Security-Policy` or `Strict-Transport-Security`.",
          "Prevention: Implement a hardening process for all components (application, web/app servers, databases, cloud services). Use automated tools to check configurations against security baselines (e.g., CIS Benchmarks). Minimal platform with no unnecessary features. Secure default configurations. Review cloud service permissions regularly.",
          "Analogy: Leaving the front door of your new house unlocked because you didn't change the factory default '0000' code."
        ]},

        { type: ContentItemType.HEADING3, text: "A6:2021 - Vulnerable and Outdated Components" },
        { type: ContentItemType.PARAGRAPH, text: "If a component (e.g., library, framework, OS, other software module) is vulnerable, unsupported, or out of date, it can undermine application defenses. This is especially true for third-party libraries commonly used in modern development." },
        { type: ContentItemType.LIST, items: [
          "Examples: Using an old version of Apache Struts with a known RCE vulnerability. Including a JavaScript library with a known XSS flaw. Running an application on an unpatched operating system.",
          "Prevention: Maintain an inventory of all components and their versions. Subscribe to vulnerability feeds for these components. Use Software Composition Analysis (SCA) tools to identify vulnerable dependencies. Patch or update components promptly. If a patch is not available, consider virtual patching (e.g., WAF rules) or other compensating controls. Remove unused dependencies.",
          "Analogy: Building a fortress with strong walls but using a rotten wooden gate (an outdated library)."
        ]},
        
        { type: ContentItemType.HEADING3, text: "A7:2021 - Identification and Authentication Failures (formerly Broken Authentication)" },
        { type: ContentItemType.PARAGRAPH, text: "Weaknesses in user identity management, authentication, and session management can allow attackers to compromise passwords, keys, or session tokens, or to exploit other implementation flaws to assume other users' identities temporarily or permanently." },
        { type: ContentItemType.LIST, items: [
          "Examples: Allowing weak or default passwords. No MFA. Exposing session IDs in URLs. Improper invalidation of session tokens on logout or timeout. Credential stuffing attacks. Brute-force attacks on login forms without rate limiting.",
          "Prevention: Implement strong password policies. Enforce MFA. Secure session management (e.g., use long, random, and rotated session IDs; secure cookie flags like HttpOnly, Secure, SameSite). Protect against brute-force and credential stuffing (rate limiting, account lockout, CAPTCHAs). Ensure proper logout functionality.",
          "Analogy: Using a simple, easily guessed password for your bank account or leaving your house key under the doormat."
        ]},

        { type: ContentItemType.HEADING3, text: "A8:2021 - Software and Data Integrity Failures" },
        { type: ContentItemType.PARAGRAPH, text: "Focuses on code and infrastructure that does not protect against integrity violations. This includes software updates, critical data, and CI/CD pipelines when they are not verified for integrity." },
        { type: ContentItemType.LIST, items: [
          "Examples: Insecure Deserialization (deserializing untrusted data which can lead to RCE). Applications that update themselves without verifying the signature of the update package. CI/CD pipelines that fetch dependencies from untrusted sources or don't verify their integrity.",
          "Prevention: Use digital signatures or similar mechanisms to verify the integrity of software updates, critical data, and components in CI/CD pipelines. Ensure data from untrusted sources (including serialized objects) is validated before processing. Regularly review code for deserialization vulnerabilities.",
          "Analogy: Accepting a software update package from an unknown source without checking if it's genuinely from the vendor and hasn't been tampered with."
        ]},

        { type: ContentItemType.HEADING3, text: "A9:2021 - Security Logging and Monitoring Failures" },
        { type: ContentItemType.PARAGRAPH, text: "Insufficient logging, monitoring, or ineffective incident response can allow attackers to operate undetected for extended periods, further attack systems, and exfiltrate data." },
        { type: ContentItemType.LIST, items: [
          "Examples: Not logging critical security events like logins, failed logins, access control failures, high-value transactions. Logs not being monitored in real-time. Alerts being ignored or not properly investigated. Lack of an incident response plan.",
          "Prevention: Log all critical security events with sufficient detail (who, what, when, where, how). Centralize logs (SIEM). Implement real-time monitoring and alerting for suspicious activities. Develop and test an incident response plan. Ensure logs are protected from tampering.",
          "Analogy: Having a security camera system that isn't recording or no one is watching the monitors."
        ]},

        { type: ContentItemType.HEADING3, text: "A10:2021 - Server-Side Request Forgery (SSRF)" },
        { type: ContentItemType.PARAGRAPH, text: "SSRF flaws occur whenever a web application is fetching a remote resource without validating the user-supplied URL. It allows an attacker to coerce the application to send a crafted request to an unexpected destination, even when protected by a firewall or VPN." },
        { type: ContentItemType.LIST, items: [
          "Examples: An application that fetches an image based on a URL parameter `?imageUrl=http://example.com/image.jpg`. An attacker changes it to `?imageUrl=http://internal-server/admin` or `?imageUrl=http://169.254.169.254/latest/meta-data/` (to access cloud metadata services).",
          "Prevention: Implement strict input validation on user-supplied URLs. Use whitelists of allowed protocols, domains, and ports. Disable unnecessary URL schemas. Ensure the application server has restricted network access (e.g., cannot reach internal sensitive systems or metadata services unless explicitly needed).",
          "Analogy: Tricking a company's internal mail clerk (the server) into sending a sensitive internal document to an external address provided by an outsider."
        ]},
        
        { type: ContentItemType.HEADING4, text: "Cross-Site Scripting (XSS) - A Common Injection Type"},
        { type: ContentItemType.PARAGRAPH, text: "XSS vulnerabilities allow attackers to inject malicious scripts (usually JavaScript) into web pages viewed by other users. When an unsuspecting user visits the compromised page, their browser executes the script, which can steal session cookies, deface websites, redirect users, or perform actions on behalf of the user." },
        { type: ContentItemType.LIST, items: [
          "Stored (Persistent) XSS: Malicious script is stored on the server (e.g., in a database, forum post, comment field) and served to every user visiting the affected page.",
          "Reflected XSS: Script is embedded in a URL or other request parameter. When the server processes the request, it reflects the script back in the HTTP response, which then executes in the user's browser. Requires tricking the user into clicking a crafted link or submitting a form.",
          "DOM-based XSS: Vulnerability exists in client-side JavaScript code that manipulates the Document Object Model (DOM) with untrusted data, leading to script execution.",
          "Prevention: Output encoding (e.g., HTML entity encoding, JavaScript escaping) for all user-supplied data displayed on a page, specific to the context where data is rendered. Input validation. Content Security Policy (CSP). Using secure frameworks that handle encoding automatically."
        ]},

        { type: ContentItemType.HEADING4, text: "Cross-Site Request Forgery (CSRF or XSRF)"},
        { type: ContentItemType.PARAGRAPH, text: "CSRF tricks a logged-in user's browser into sending a forged HTTP request, including the user's session cookie and any other automatically included authentication information, to a vulnerable web application. This allows the attacker to perform state-changing actions on behalf of the authenticated user without their knowledge (e.g., changing their email, making a purchase, transferring funds)." },
        { type: ContentItemType.LIST, items: [
          "Cause: Web applications trusting requests solely based on active session cookies without verifying if the request was intentionally initiated by the user for that specific action.",
          "Impact: Unauthorized state-changing actions performed on behalf of the user, account compromise.",
          "Prevention: Anti-CSRF tokens (unique, unpredictable, per-session or per-request tokens included in forms/requests and validated on the server). SameSite cookie attribute (Strict or Lax). Verifying the Origin or Referer header (can be less reliable). Requiring re-authentication for sensitive actions."
        ]},

        {
          type: ContentItemType.PHISHING_SIMULATOR, // Re-using existing component for demonstration
          phishingSimulatorData: {
            title: "Spot the Phishing Email: Advanced Edition",
            introduction: "You've received several emails. Some are legitimate, one or more are phishing attempts. Click on an email to examine it, then decide if it's safe or a phish. Your goal is to correctly identify the malicious emails. Pay attention to subtle clues.",
            emails: [
              {
                id: "email-adv-1",
                sender: "Your IT Services <IT.Services@company-portal.com>",
                subject: "Urgent: System Maintenance - Verify Your Credentials",
                bodyPreview: "We are performing unscheduled system maintenance. To avoid account disruption, please re-verify your login details immediately by clicking here...",
                fullBody: "Dear Employee,\n\nDue to critical unscheduled system maintenance, all users are required to re-verify their credentials to ensure continued access to corporate resources. Please click the link below within the next 2 hours to maintain access:\n\n[https://company-portal.com.security-update.xyz/login?sessionid=abc123xyz]\n\nFailure to comply may result in temporary account suspension.\n\nThank you for your cooperation,\nIT Services\ncompany-portal.com",
                isPhishing: true,
                feedbackCorrect: "Excellent! You spotted the phish. The suspicious domain `company-portal.com.security-update.xyz` (the real domain is likely just `company-portal.com`), the urgent call to action, and the threat of suspension are classic signs. The long, odd-looking URL is a major giveaway.",
                feedbackIncorrect: "This was a phishing attempt. The key is the URL: `company-portal.com.security-update.xyz`. The actual domain is `security-update.xyz`, not `company-portal.com`. Always scrutinize URLs carefully.",
                clues: ["Suspicious sender domain/URL (subdomain trick)", "Generic greeting", "Urgent call to action and threat of account suspension", "Link to a non-standard domain"]
              },
              {
                id: "email-adv-2",
                sender: "Dropbox <no-reply@dropboxmail.com>",
                subject: "Document Shared: 'Q4 Financial Projections.xlsx'",
                bodyPreview: "John Doe has shared 'Q4 Financial Projections.xlsx' with you on Dropbox. Click here to view the document...",
                fullBody: "Hi [Your Name],\n\nJohn Doe (john.doe@externalpartner.com) has shared a file with you:\n\n'Q4 Financial Projections.xlsx'\n\n[View Document Button - links to a fake Dropbox login page]\n\nThis file will be available via this link for the next 7 days.\n\nThanks,\nThe Dropbox Team",
                isPhishing: true,
                feedbackCorrect: "Correct! This is a sophisticated phish. While the sender `dropboxmail.com` might look legitimate, the critical part is where the 'View Document' button leads. In a real scenario, hovering would reveal a fake login page URL. The context (unexpected financial document from an external partner) should also raise suspicion.",
                feedbackIncorrect: "This was a phishing email. The sender `dropboxmail.com` can be legitimate, but the real danger is the link in 'View Document'. It would lead to a fake Dropbox login page designed to steal your credentials. Always verify such shares directly on the service's website.",
                clues: ["Context (potentially unexpected share)", "Urgency (implied by file availability)", "Link would go to a credential harvesting page (simulated here)"]
              },
               {
                id: "email-adv-3",
                sender: "Microsoft Account Team <account-security-noreply@accountprotection.microsoft.com>",
                subject: "Unusual sign-in activity for your Microsoft account",
                bodyPreview: "We detected something unusual about a recent sign-in to the Microsoft account [your_email@example.com]. To help keep you safe, we require an extra security challenge...",
                fullBody: "Microsoft account\nUnusual sign-in activity\nWe detected something unusual about a recent sign-in to the Microsoft account [your_email@example.com]. For example, you might be signing in from a new location, device, or app.\n\nSign-in details:\nCountry/region: Nigeria\nIP address: 102.89.xx.xx\nDate: [Current Date]\n\nIf this was you, then you can safely ignore this email.\nIf you're not sure this was you, a malicious user might have your password. Please review your recent activity and we'll help you take corrective action.\n\n[Review recent activity button - links to fake Microsoft login]\n\nThanks,\nThe Microsoft account team",
                isPhishing: true,
                feedbackCorrect: "Spot on! This is a very common and often convincing phishing tactic. The sender address and email body mimic legitimate Microsoft alerts. The key is the link in 'Review recent activity'. It would lead to a fake Microsoft login page to steal credentials. Always go to account.microsoft.com directly.",
                feedbackIncorrect: "This was a phishing email. While it looks very official, the link in 'Review recent activity' is the dangerous part. It would redirect to a fake login page. If you receive such an email, never click the link. Instead, open your browser and go to the official Microsoft account page directly to check for alerts.",
                clues: ["Mimics official branding", "Creates fear/urgency", "Link would lead to credential harvesting page"]
              }
            ],
            completionMessage: "You've assessed the emails! Remember to always be vigilant. Phishers are constantly evolving their tactics. If ever in doubt, report it to your IT/Security department and don't click! Verify by going directly to the service provider's website."
          }
        },
        { type: ContentItemType.PARAGRAPH, text: "The OWASP Top 10 is an excellent starting point, but many other vulnerabilities exist. Continuous learning and staying updated on new attack vectors and mitigation techniques are essential for web application security." }
      ]
    },
    {
      id: "5.3",
      title: "API Security: Best Practices and OWASP API Security Top 10",
      content: [
        { type: ContentItemType.PARAGRAPH, text: "Application Programming Interfaces (APIs) are fundamental to modern applications, enabling communication between different software components, microservices, mobile apps, and third-party integrations. Securing APIs is critical as they often handle sensitive data and critical functionalities, and can be a prime target for attackers." },
        { type: ContentItemType.HEADING3, text: "OWASP API Security Top 10 (Key Threats):" },
        { type: ContentItemType.LIST, items: [
          "**API1:2023 - Broken Object Level Authorization (BOLA):** APIs tend to expose endpoints that handle object identifiers (e.g., `/api/users/{userID}`). If an API doesn't properly validate that the authenticated user has permission to access or modify the specific object requested, attackers can manipulate IDs to access unauthorized data or perform unauthorized actions on other users' objects. This is one of the most common and impactful API vulnerabilities.",
          "  - *Example:* User A (ID 123) requests `/api/orders/999` (belonging to User B) and the API returns User B's order because it only checked if User A was authenticated, not if they owned order 999.",
          "**API2:2023 - Broken Authentication:** Flaws in authentication mechanisms (e.g., weak passwords, no rate limiting on login attempts, improper token management like JWT misconfigurations or insecure storage, insecure credential recovery, API keys sent in URLs) can allow attackers to compromise user accounts or gain unauthorized access to the API.",
          "**API3:2023 - Broken Object Property Level Authorization:** Even if object-level authorization is correct (you can access your own record), the API might expose all properties of an object by default, relying on the client to filter. Attackers can sniff traffic or directly query the API to access sensitive sub-properties not meant for them (Excessive Data Exposure). Or, it might allow modification of properties that should be read-only for that user (Mass Assignment).",
          "  - *Excessive Data Exposure Example:* `/api/users/me` returns full user object including `isAdmin` field, even for non-admin users.",
          "  - *Mass Assignment Example:* User updates their profile via `PUT /api/users/me` with `{\"email\":\"new@e.mail\", \"isAdmin\":true}` and the API blindly updates the `isAdmin` field.",
          "**API4:2023 - Unrestricted Resource Consumption:** APIs without proper rate limiting, request size limits, or resource quotas can be overwhelmed by legitimate or malicious requests, leading to Denial of Service (DoS), performance degradation, or increased operational costs.",
          "**API5:2023 - Broken Function Level Authorization:** Similar to BOLA, but at the API function/operation level. If an API doesn't properly check if the authenticated user has permission to perform a specific action or access a specific endpoint (e.g., an admin-only endpoint like `/api/admin/deleteUser`), attackers can exploit this by directly calling those restricted functions.",
          "**API6:2023 - Unrestricted Access to Sensitive Business Flows (New):** APIs might expose business flows (e.g., purchasing a product, claiming a coupon) without adequately protecting them from abuse or automation. This can lead to fraud, resource exhaustion, or unfair advantages.",
          "  - *Example:* An API for a limited-time offer doesn't prevent a bot from rapidly claiming all available slots.",
          "**API7:2023 - Server Side Request Forgery (SSRF):** An API endpoint accepts a user-supplied URL that is then requested by the server-side component. Attackers can make the server send requests to internal systems, cloud metadata services, or arbitrary external sites.",
          "**API8:2023 - Security Misconfiguration:** Insecure default configurations, verbose error messages revealing sensitive information, unnecessary HTTP methods enabled, missing security headers (e.g., CORS misconfigurations), unpatched systems hosting the API.",
          "**API9:2023 - Improper Inventory Management (New):** Organizations may not have a complete inventory of their APIs (including different versions, environments like staging/dev, deprecated APIs), leading to 'shadow' or 'zombie' APIs that are unpatched, unmonitored, and vulnerable.",
          "**API10:2023 - Unsafe Consumption of APIs (New):** When an application consumes third-party APIs, it must do so securely. This includes validating data from these APIs, handling errors gracefully, and not implicitly trusting them. For example, not sanitizing data from a third-party API before rendering it could lead to XSS."
        ]},
        { type: ContentItemType.HEADING3, text: "API Security Best Practices:" },
        { type: ContentItemType.LIST, items: [
          "**Strong Authentication:** Use robust authentication mechanisms like OAuth 2.0 (with appropriate flows like Authorization Code with PKCE for public clients), OpenID Connect, or well-managed API keys (not hardcoded, revokable, short-lived if possible). Avoid basic authentication over HTTP. Enforce multi-factor authentication where appropriate, especially for sensitive APIs.",
          "**Robust Authorization (BOLA & BFLA & BOPLA):** Implement fine-grained access control at object, property, and function levels. Verify permissions for every request, based on the authenticated user's identity and roles/permissions. Do not rely on client-side checks.",
          "**Input Validation:** Validate all incoming data (parameters in URL path/query, headers, request body) for type, format, length, range, and allowed characters to prevent injection attacks (SQLi, NoSQLi, Command Injection, XSS if API output is rendered unsafely) and other parsing issues.",
          "**Output Encoding/Filtering (Data Minimization):** Ensure APIs return only the necessary data for the requested operation. Avoid exposing internal implementation details or excessive data. Filter or encode data before sending it to clients if it might be rendered in an unsafe context.",
          "**Rate Limiting and Throttling:** Protect against DoS attacks, brute-force attacks, and abuse by limiting the number of requests a client can make in a given time period per API key or IP address. Implement quotas for resource-intensive operations.",
          "**Use HTTPS Everywhere:** Encrypt all API traffic in transit using TLS 1.2 or higher with strong cipher suites to protect data confidentiality and integrity.",
          "**Security Headers:** Implement relevant HTTP security headers (e.g., `Content-Security-Policy`, `Strict-Transport-Security`, `X-Content-Type-Options`, `X-Frame-Options` - though less relevant for pure APIs, good for related web UIs). Proper CORS (Cross-Origin Resource Sharing) configuration is crucial.",
          "**Logging and Monitoring:** Implement comprehensive logging of API requests, responses, errors, and authentication/authorization events. Monitor logs for suspicious activity, abuse patterns, and security incidents. Use API analytics and monitoring tools.",
          "**API Gateway:** Consider using an API gateway to centralize security policies, authentication, authorization, rate limiting, traffic management, logging, and routing for multiple backend APIs. It acts as a single entry point.",
          "**Regular Security Testing:** Perform penetration testing, vulnerability scanning, and code reviews specifically targeting APIs. Use tools designed for API testing.",
          "**Proper Inventory and Versioning:** Maintain a clear inventory of all APIs, their versions, environments, and deprecate/secure old versions. Use clear versioning in API paths (e.g., `/api/v1/users`, `/api/v2/users`).",
          "**Protect Against SSRF:** Validate and sanitize any URLs received as input that the server will request. Use whitelists for allowed destinations if possible. Restrict network access from the API server.",
          "**Secure Business Logic:** Analyze business flows exposed via APIs for potential abuse and implement appropriate controls (e.g., captchas, transaction limits)."
        ]}
      ]
    },
    {
      id: "5.4",
      title: "Data Security Fundamentals: Encryption, Hashing, Masking, and DLP",
      content: [
        { type: ContentItemType.PARAGRAPH, text: "Protecting data itself, whether at rest, in transit, or in use, is a cornerstone of cybersecurity. Key techniques include encryption for confidentiality, hashing for integrity, data masking for reducing exposure in non-production environments, and Data Loss Prevention (DLP) strategies to control data flow." },
        
        { type: ContentItemType.HEADING3, text: "Encryption (Confidentiality):" },
        { type: ContentItemType.PARAGRAPH, text: "Encryption transforms readable data (plaintext) into an unreadable format (ciphertext) using an algorithm and a key. Only those with the correct key can decrypt the ciphertext back into plaintext. This protects data confidentiality from unauthorized eyes." },
        { type: ContentItemType.PARAGRAPH, text: "Encryption = A secret code (like a locked diary with a complex key) where only authorized parties who possess the key can read the message. Without the key, the message is effectively gibberish." },
        { type: ContentItemType.LIST, items: [
          "**Symmetric Encryption:** Uses the same secret key for both encryption and decryption. Fast and efficient, suitable for encrypting large amounts of data (bulk encryption).",
          "  - Examples: AES (Advanced Encryption Standard - preferred, with key sizes 128, 192, or 256 bits), older algorithms like DES, 3DES (now considered weak or legacy).",
          "  - Modes of Operation for Block Ciphers (like AES): CBC (Cipher Block Chaining - older, requires careful IV management), GCM (Galois/Counter Mode - modern, provides both encryption and authentication/integrity (AEAD)), CTR (Counter Mode).",
          "  - Challenge: Secure distribution and management of the shared secret key.",
          "**Asymmetric Encryption (Public-Key Cryptography):** Uses a pair of mathematically related keys: a public key (for encryption, widely distributable) and a private key (for decryption, kept secret by the owner). Solves key distribution issues of symmetric crypto but is computationally slower.",
          "  - Examples: RSA (Rivest-Shamir-Adleman - widely used for key exchange and digital signatures), ECC (Elliptic Curve Cryptography - offers similar strength with smaller key sizes, good for mobile/IoT).",
          "  - Common Use: Encrypting a symmetric key with the recipient's public key (for hybrid encryption), digital signatures, secure key exchange (e.g., Diffie-Hellman).",
          "**Hybrid Encryption:** Combines symmetric and asymmetric encryption. Use asymmetric encryption to securely exchange a symmetric session key, then use the session key with symmetric encryption for bulk data transfer. This leverages the speed of symmetric and the key management benefits of asymmetric crypto. (TLS uses this).",
          "**Data in Transit Encryption:** Encrypting data as it moves across networks. Examples: TLS/SSL (for web traffic - HTTPS, email - SMTPS/IMAPS/POP3S), IPsec (for VPNs), SSH.",
          "**Data at Rest Encryption:** Encrypting data stored on disks, databases, backups, or cloud storage. Examples: Full Disk Encryption (FDE - BitLocker, LUKS, FileVault), database encryption (Transparent Data Encryption - TDE, column-level encryption), file/folder level encryption (EFS, GPG).",
          "**Data in Use Encryption (Emerging):** Protecting data while it's being processed in memory. Technologies like Homomorphic Encryption (allows computation on encrypted data) and Secure Enclaves (e.g., Intel SGX, AMD SEV) aim to address this, but are more complex and less widespread.",
          "**Key Management:** The secure generation, storage, distribution, rotation, and destruction of cryptographic keys is critical. Compromised keys render encryption useless. Solutions include Key Management Systems (KMS) and Hardware Security Modules (HSMs)."
        ]},
        
        { type: ContentItemType.HEADING3, text: "Hashing (Integrity & Password Storage):" },
        { type: ContentItemType.PARAGRAPH, text: "Hashing generates a fixed-size string of characters (hash value, digest, or fingerprint) from input data using a one-way mathematical function. It's computationally infeasible to reverse the hash to get the original data. Hashes are unique to the input; a small change in input results in a drastically different hash." },
        { type: ContentItemType.LIST, items: [
          "**Integrity Verification:** If the hash of a file or message changes, it means the data has been modified or corrupted. Used to verify software downloads, file transfers, and data integrity in storage.",
          "**Password Storage:** Instead of storing passwords directly (which is extremely insecure), systems store their hashes. When a user logs in, the entered password is hashed, and this hash is compared to the stored hash. To be secure, this requires:",
          "  - Strong Hashing Algorithms: Argon2 (current recommendation), scrypt, bcrypt. These are computationally intensive and designed to resist brute-force and GPU cracking.",
          "  - Salting: A unique random value (the salt) is added to each password *before* hashing. The salt is stored alongside the hash. This prevents attackers from using precomputed rainbow tables (tables of common passwords and their hashes) because each user's hash will be unique even if they have the same password.",
          "  - Peppering (Optional): A secret value (the pepper), known only to the server, can be added to the password along with the salt before hashing. Adds another layer of protection if the database is compromised but the pepper remains secret.",
          "**Common Hashing Algorithms (Varying Security):** MD5 (Message Digest 5 - obsolete for security, collision-prone), SHA-1 (Secure Hash Algorithm 1 - weakening, deprecated for most security uses), SHA-2 family (SHA-256, SHA-384, SHA-512 - still considered secure), SHA-3 (Keccak - newer standard, different internal design from SHA-2).",
          "**HMAC (Hash-based Message Authentication Code):** Combines a cryptographic hash function with a secret key to provide message authentication and integrity. Verifies that the message came from the key holder and hasn't been tampered with."
        ]},

        { type: ContentItemType.HEADING3, text: "Data Masking (or Data Obfuscation):" },
        { type: ContentItemType.PARAGRAPH, text: "Replacing sensitive data with fictitious yet realistic-looking data. This is often used to protect sensitive information in non-production environments (e.g., development, testing, training) where real data is not needed but realistic data structures are."},
        { type: ContentItemType.LIST, items: [
            "Techniques: Substitution (replacing with random values from a set), Shuffling (reordering existing values within a column), Redaction/Nulling Out (replacing with 'XXXX' or NULL), Encryption (masking with an encrypted version), Date Aging.",
            "Purpose: Reduces the risk of exposing sensitive data to developers, testers, or during analytics, while still allowing applications to function with data that resembles production data."
        ]},
        
        { type: ContentItemType.HEADING3, text: "Data Loss Prevention (DLP):" },
        { type: ContentItemType.PARAGRAPH, text: "DLP strategies and tools aim to prevent sensitive data from leaving the organization's control or being accessed by unauthorized individuals, whether accidentally or maliciously. DLP systems identify, monitor, and protect data through:" },
        { type: ContentItemType.LIST, items: [
            "**Data Identification and Classification:** Discovering where sensitive data resides (endpoints, network shares, databases, cloud storage) and classifying it based on its sensitivity level (e.g., Public, Internal, Confidential, Restricted) using manual tagging, automated pattern matching (regex for PII, credit card numbers), or machine learning.",
            "**Monitoring & Enforcement:** Continuously monitoring data usage and movement across endpoints, networks, and cloud services. Enforcing policies to block or alert on unauthorized data transfers or usage (e.g., copying to USB, uploading to personal cloud, sending via unencrypted email).",
            "**Endpoint DLP:** Focuses on data on user workstations and laptops.",
            "**Network DLP:** Monitors data in transit over the network.",
            "**Cloud DLP:** Addresses data security in cloud applications and storage.",
            "**Incident Response:** Defining actions to take when a potential data loss event is detected."
          ]
        },
        { type: ContentItemType.PARAGRAPH, text: "Effective data security requires a layered approach, combining these techniques with strong access controls, user awareness training, and regular audits to protect information assets throughout their lifecycle." }
      ]
    },
    {
      id: "5.5",
      title: "Practical Application: Building a Secure CRUD App (Conceptual)",
      content: [
        { type: ContentItemType.PARAGRAPH, text: "Let's conceptualize building a very simple Create, Read, Update, Delete (CRUD) web application (e.g., a To-Do list or a basic note-taking app) with security in mind from the start. We won't write full code here, but highlight key security considerations at each step. Assume we're using Python (Flask/Django) on the backend and basic HTML/JS on the frontend." },
        
        { type: ContentItemType.HEADING3, text: "1. Design & Threat Modeling (Before Writing Code):" },
        { type: ContentItemType.LIST, items: [
          "Identify Assets: User accounts, user-generated notes/tasks.",
          "Identify Threats (STRIDE):",
          "  - Spoofing: User impersonation (login), API key theft.",
          "  - Tampering: Modifying other users' notes, changing note content illicitly.",
          "  - Repudiation: Denying an action (e.g., 'I didn't delete that note').",
          "  - Information Disclosure: Viewing other users' notes, leaking database content.",
          "  - Denial of Service: Overwhelming the app with requests, making notes inaccessible.",
          "  - Elevation of Privilege: Regular user gaining admin access (if admin functions exist).",
          "Define Security Requirements: Secure authentication, authorization (users can only access their own notes), input validation, protection against common web vulns (XSS, SQLi, CSRF)."
        ]},

        { type: ContentItemType.HEADING3, text: "2. Secure Setup & Configuration:" },
        { type: ContentItemType.LIST, items: [
          "Use HTTPS for all communication (TLS certificates).",
          "Secure server configuration (e.g., disable unnecessary services on the host, use a non-root user for the app).",
          "Database: Use strong, unique credentials. Limit database user permissions to only what's needed for CRUD operations.",
          "Framework Security Features: Enable built-in security features of Flask/Django (e.g., CSRF protection, secure session management defaults). Set `DEBUG=False` in production."
        ]},

        { type: ContentItemType.HEADING3, text: "3. User Authentication & Session Management:" },
        { type: ContentItemType.LIST, items: [
          "Password Storage: Hash passwords using Argon2, bcrypt, or scrypt with unique salts per user.",
          "Login Endpoint: Protect against brute-force (rate limiting, account lockout). Input validation for username/password fields.",
          "Session Management: Use secure, random session tokens. Store them server-side or use stateless tokens (JWTs) with proper security (strong signing key, short expiry, HTTPS-only transmission). Set HttpOnly, Secure, and SameSite=Lax/Strict flags on session cookies.",
          "Multi-Factor Authentication (MFA): Strongly consider for enhanced security."
        ]},

        { type: ContentItemType.HEADING3, text: "4. Authorization (Access Control):" },
        { type: ContentItemType.LIST, items: [
          "Create Operation: Ensure the logged-in user ID is associated with the new note/task.",
          "Read/Update/Delete Operations: Before performing any action on a note/task, verify that the currently authenticated user is the owner of that specific note/task. (Broken Object Level Authorization prevention).",
          "  - Example (Python/Flask pseudo-code): `note = get_note_by_id(note_id); if note.owner_id != current_user.id: abort(403) # Forbidden`"
        ]},

        { type: ContentItemType.HEADING3, text: "5. Input Validation & Output Encoding (Preventing Injection & XSS):" },
        { type: ContentItemType.LIST, items: [
          "Input Validation (Server-Side): For all user inputs (note title, content, search terms):",
          "  - Validate type, length, format, character set (whitelisting preferred).",
          "  - For database queries: Use Parameterized Queries/Prepared Statements (SQLi prevention). ORMs often handle this.",
          "Output Encoding (Server-Side before rendering to HTML):",
          "  - When displaying note content, ensure it's HTML-entity encoded to prevent XSS. Frameworks like Jinja2 (Flask) or Django templates often auto-escape by default, but verify.",
          "  - Example (Jinja2): `{{ user_note_content }}` (auto-escapes).",
          "Content Security Policy (CSP): Implement a CSP header to restrict what resources (scripts, styles, images) can be loaded and from where, mitigating XSS impact."
        ]},
        
        { type: ContentItemType.HEADING3, text: "6. API Security (if exposing APIs):" },
        { type: ContentItemType.LIST, items: [
          "Apply all OWASP API Security Top 10 principles (authentication, authorization at object/function level, rate limiting, input validation, HTTPS).",
          "Use API keys or tokens for authentication if client is non-browser based."
        ]},

        { type: ContentItemType.HEADING3, text: "7. Error Handling & Logging:" },
        { type: ContentItemType.LIST, items: [
          "Error Handling: Implement generic error messages for users. Avoid exposing stack traces or sensitive system details in production.",
          "Logging: Log critical security events (logins - success/failure, access control failures, significant errors, CRUD operations with user context). Ensure logs are protected and regularly reviewed."
        ]},

        { type: ContentItemType.HEADING3, text: "8. Dependency Management & Regular Patching:" },
        { type: ContentItemType.LIST, items: [
          "Keep all libraries, frameworks, OS, and server software patched and up-to-date.",
          "Use tools to scan for known vulnerabilities in dependencies (e.g., `pip-audit` for Python, Snyk, Dependabot)."
        ]},

        { type: ContentItemType.HEADING3, text: "9. Testing:" },
        { type: ContentItemType.LIST, items: [
          "Unit & Integration Tests: Include tests for security functions (e.g., authorization logic).",
          "Security Testing (Manual & Automated): Perform basic vulnerability scanning (e.g., OWASP ZAP), and manual checks for common flaws. For critical apps, engage professional penetration testers."
        ]},
        { type: ContentItemType.PARAGRAPH, text: "This conceptual walkthrough illustrates that security must be an integral part of the development mindset, not an afterthought. Even for a 'simple' CRUD app, numerous security considerations apply." },
        {
          type: ContentItemType.PRACTICAL_EXERCISE,
          practicalExerciseData: {
            title: "Social Media Privacy Settings: Screenshot Tutorials (Conceptual)",
            introduction: "Understanding and configuring privacy settings on social media is crucial for protecting your personal information. This exercise guides you through *conceptually* finding and adjusting key privacy settings on a generic social media platform. The exact steps vary between platforms (Facebook, Instagram, X/Twitter, LinkedIn, TikTok, etc.).",
            tasks: [
              { id: "sm-privacy-1", description: "Log into your chosen social media account (use a test account if possible, or be very mindful of your live account settings).", details: "Always ensure you are on the legitimate website/app." },
              { id: "sm-privacy-2", description: "Navigate to 'Settings' or 'Settings & Privacy'. This is usually found under your profile icon or a menu (e.g., three dots/lines).", details: "Look for cogwheel icons or similar indicators." },
              { id: "sm-privacy-3", description: "Find the 'Privacy' or 'Privacy and Safety' section. Explore subsections like:", 
                details: "- **Post/Audience Control:** Who can see your future posts/tweets/updates? (Public, Friends, Only Me, Custom Lists).\n- **Profile Information:** Control visibility of your email, phone number, birth date, location, etc.\n- **Tagging:** Who can tag you in photos or posts? Do you want to review tags before they appear on your profile?\n- **Friend/Follower Requests:** Who can send you requests? (Everyone, Friends of Friends).\n- **Direct Messages/Messaging:** Who can message you directly?\n- **Activity Status/Online Presence:** Control if others see when you're active.\n- **Location Sharing:** Disable precise location sharing for posts if not needed. Check app permissions for location access.\n- **Off-Platform Activity / Data Sharing:** Review how your data is used for ads or shared with third-party apps. Opt-out where possible.\n- **Blocked Accounts:** Manage your list of blocked users.\n- **Two-Factor Authentication (2FA/MFA):** THIS IS CRITICAL. Find the 'Security' or 'Login Security' section and enable 2FA using an authenticator app, SMS (less secure but better than nothing), or security key." 
              },
              { id: "sm-privacy-4", description: "For each key setting, (conceptually) take a screenshot of where it's located and what options are available. Annotate the screenshot to highlight the setting.", details: "This helps create a personal visual guide." },
              { id: "sm-privacy-5", description: "Adjust your settings to a level you are comfortable with. Prioritize restricting public visibility of sensitive personal information and enabling 2FA.", details: "Consider the principle of least privilege: share only what's necessary with the smallest audience necessary." },
              { id: "sm-privacy-6", description: "Review Connected Apps/Third-Party Access: Find sections that list apps or websites you've logged into using your social media account. Revoke access for any apps you no longer use or don't trust.", details: "This is often under 'Apps and Websites' or 'Security'." },
              { id: "sm-privacy-7", description: "Regularly review these settings. Social media platforms often update their interfaces and introduce new features/settings." }
            ],
            expectedOutcome: "You will have a better understanding of where to find and how to configure key privacy and security settings on a typical social media platform. You will have conceptually created a visual guide for these settings and made informed choices about your own privacy.",
            notes: "This is a conceptual exercise focused on the *process* of finding and understanding settings. **Always be careful when changing live account settings.** If unsure, research the specific platform's help documentation. The goal is awareness and informed configuration, not just clicking through."
          }
        }
      ]
    }
  ]
};

const CHAPTER_6_CONTENT: Chapter = {
  id: "chapter-6",
  title: "Chapter 6: Cryptography in Practice - Securing Data and Communications",
  shortTitle: "Cryptography in Practice",
  sections: [
    {
      id: "6.1",
      title: "Introduction to Cryptographic Principles",
      content: [
        { type: ContentItemType.PARAGRAPH, text: "Cryptography, at its core, is the science of secure communication in the presence of adversaries. It encompasses techniques for transforming data (plaintext) into an unintelligible form (ciphertext) and back again, as well as methods for verifying data integrity, authenticating parties, and ensuring non-repudiation. Modern cryptography is built on rigorous mathematical principles and algorithms." },
        { type: ContentItemType.HEADING3, text: "Fundamental Goals of Cryptography:" },
        { type: ContentItemType.LIST, items: [
            "Confidentiality: Ensuring that information is accessible only to authorized individuals. Achieved primarily through encryption.",
            "Integrity: Ensuring that information remains unaltered during transmission or storage. Achieved using hashing algorithms and message authentication codes (MACs).",
            "Authentication: Verifying the identity of a user, device, or system. Achieved using digital signatures, MACs, and challenge-response protocols.",
            "Non-repudiation: Providing proof that a specific party performed an action (e.g., sent a message or authorized a transaction), preventing them from later denying it. Achieved using digital signatures."
          ]
        },
        { type: ContentItemType.HEADING3, text: "Key Cryptographic Concepts:" },
        { type: ContentItemType.LIST, items: [
            "Plaintext: The original, readable data.",
            "Ciphertext: The encrypted, unreadable data.",
            "Encryption: The process of converting plaintext to ciphertext.",
            "Decryption: The process of converting ciphertext back to plaintext.",
            "Algorithm (Cipher): The mathematical function used for encryption and decryption.",
            "Key: A piece of information (a sequence of bits) used by the algorithm to encrypt or decrypt data. The security of modern cryptographic systems relies on the secrecy and strength of the key, not the secrecy of the algorithm itself (Kerckhoffs's Principle).",
            "Key Space: The set of all possible keys for a given algorithm. Larger key spaces generally mean stronger security against brute-force attacks.",
            "Cryptanalysis: The study of methods for obtaining the meaning of encrypted information, without access to the secret key normally required to do so; i.e., the study of how to 'break' cryptographic systems."
          ]
        },
        { type: ContentItemType.PARAGRAPH, text: "Understanding these basic principles is essential before diving into specific cryptographic algorithms and their applications. A common mistake is attempting to invent one's own cryptographic algorithms ('rolling your own crypto'), which almost invariably leads to insecure systems. Always rely on well-vetted, standardized algorithms and protocols." }
      ]
    },
    {
      id: "6.2",
      title: "Symmetric vs. Asymmetric Encryption (Detailed)",
      content: [
        { type: ContentItemType.PARAGRAPH, text: "Encryption algorithms are broadly categorized into symmetric and asymmetric types, based on how keys are used for encryption and decryption. Each has its strengths, weaknesses, and typical use cases." },
        
        { type: ContentItemType.HEADING3, text: "Symmetric Encryption (Secret Key Cryptography):" },
        { type: ContentItemType.PARAGRAPH, text: "Uses a single, shared secret key for both encrypting plaintext and decrypting ciphertext. Both the sender and receiver must have access to the same secret key. Analogy: A locked mailbox where both parties have identical keys." },
        { type: ContentItemType.HEADING4, text: "Characteristics:" },
        { type: ContentItemType.LIST, items: [
            "Speed: Generally very fast and computationally efficient, making it suitable for encrypting large volumes of data (bulk encryption).",
            "Key Strength: Security depends on the length and randomness of the secret key (e.g., AES-128, AES-256 offer strong security).",
            "Key Distribution Challenge: The primary difficulty is securely distributing and managing the shared secret key. If the key is intercepted, confidentiality is lost. This is a major hurdle for widespread communication.",
            "Types of Symmetric Ciphers:",
            "  - Block Ciphers: Operate on fixed-size blocks of data (e.g., AES operates on 128-bit blocks). Require padding if the last block of plaintext is smaller than the block size. Different modes of operation (e.g., ECB, CBC, CTR, GCM) define how multiple blocks are processed.",
            "  - Stream Ciphers: Encrypt data one bit or byte at a time. Often faster than block ciphers and don't require padding. Examples: ChaCha20, RC4 (RC4 is now considered insecure)."
          ]
        },
        { type: ContentItemType.HEADING4, text: "Popular Symmetric Algorithms:" },
        { type: ContentItemType.LIST, items: [
            "AES (Advanced Encryption Standard): The current global standard. Supports key sizes of 128, 192, and 256 bits. Widely used and considered very secure.",
            "DES (Data Encryption Standard): Older algorithm with a 56-bit key. Now considered insecure due to its small key size and susceptible to brute-force attacks.",
            "3DES (Triple DES): Applies DES three times with different keys to increase effective key length. Slower than AES and largely superseded by it."
          ]
        },
        { type: ContentItemType.HEADING4, text: "Use Cases:" },
        { type: ContentItemType.LIST, items: [
            "Encrypting files on disk (full-disk encryption, file encryption).",
            "Securing database contents.",
            "Bulk data encryption in secure communication protocols (e.g., the actual data payload in TLS is encrypted using a symmetric key established during the handshake)."
          ]
        },

        { type: ContentItemType.HEADING3, text: "Asymmetric Encryption (Public-Key Cryptography):" },
        { type: ContentItemType.PARAGRAPH, text: "Uses a pair of mathematically related keys: a public key and a private key. The public key can be freely distributed and is used for encryption or verifying signatures. The private key is kept secret by the owner and is used for decryption or creating signatures. Analogy: A mailbox with two slots: one public slot where anyone can drop messages (encrypt with public key), and a private locked door (opened with private key) to retrieve them." },
        { type: ContentItemType.HEADING4, text: "Characteristics:" },
        { type: ContentItemType.LIST, items: [
            "Key Management: Solves the key distribution problem of symmetric encryption. To send a confidential message, you encrypt it with the recipient's public key; only the recipient with their private key can decrypt it.",
            "Speed: Significantly slower and more computationally intensive than symmetric encryption. Not suitable for encrypting large volumes of data directly.",
            "Functionality: Enables not only confidentiality but also digital signatures (for authentication, integrity, and non-repudiation) and secure key exchange.",
            "Key Strength: Depends on the difficulty of the underlying mathematical problem (e.g., factoring large numbers for RSA, elliptic curve discrete logarithm problem for ECC). Requires much larger key sizes than symmetric crypto for comparable security (e.g., RSA 2048-bit or 3072-bit)."
          ]
        },
        { type: ContentItemType.HEADING4, text: "Popular Asymmetric Algorithms:" },
        { type: ContentItemType.LIST, items: [
            "RSA (Rivest-Shamir-Adleman): Widely used for encryption and digital signatures. Security based on the difficulty of factoring large prime numbers.",
            "ECC (Elliptic Curve Cryptography): Provides equivalent security to RSA with smaller key sizes, making it more efficient for resource-constrained devices (e.g., mobile phones, IoT). Used in ECDSA (Elliptic Curve Digital Signature Algorithm) and ECDH (Elliptic Curve Diffie-Hellman for key exchange).",
            "Diffie-Hellman Key Exchange (DH): A protocol used to securely establish a shared secret key over an insecure channel. Does not encrypt data itself but enables two parties to derive the same symmetric key without prior shared secrets. (Often used with ECC, as ECDH)."
          ]
        },
        { type: ContentItemType.HEADING4, text: "Use Cases:" },
        { type: ContentItemType.LIST, items: [
            "Securely exchanging symmetric keys (e.g., in TLS handshake, PGP/GPG).",
            "Digital signatures for software, documents, and email.",
            "Authenticating parties in communication protocols.",
            "Encrypting small amounts of data, like session keys or messages."
          ]
        },
        
        { type: ContentItemType.HEADING3, text: "Hybrid Cryptosystems: The Best of Both Worlds" },
        { type: ContentItemType.PARAGRAPH, text: "In practice, most secure communication systems (like TLS/SSL for HTTPS) use a hybrid approach: \n1. Asymmetric encryption is used to authenticate one or both parties (e.g., server authentication via its certificate containing a public key) and to securely exchange a randomly generated symmetric session key. \n2. Once the symmetric session key is securely established, it is used with a fast symmetric algorithm (like AES) to encrypt the actual bulk data being transmitted. \nThis combines the key management convenience of asymmetric cryptography with the speed and efficiency of symmetric cryptography." },
        { type: ContentItemType.TABLE, tableData: {
            caption: "Symmetric vs. Asymmetric Encryption at a Glance",
            headers: ["Feature", "Symmetric Encryption", "Asymmetric Encryption"],
            rows: [
              { "Feature": "Key(s) Used", "Symmetric Encryption": "Single shared secret key", "Asymmetric Encryption": "Pair of keys (public and private)" },
              { "Feature": "Speed", "Symmetric Encryption": "Fast", "Asymmetric Encryption": "Slow" },
              { "Feature": "Key Distribution", "Symmetric Encryption": "Difficult, major challenge", "Asymmetric Encryption": "Simpler, public key can be shared openly" },
              { "Feature": "Primary Use", "Symmetric Encryption": "Bulk data encryption (confidentiality)", "Asymmetric Encryption": "Key exchange, digital signatures, encrypting small data" },
              { "Feature": "Example Algorithms", "Symmetric Encryption": "AES, DES, 3DES, ChaCha20", "Asymmetric Encryption": "RSA, ECC, Diffie-Hellman" }
            ]
          }
        }
      ]
    },
    {
      id: "6.3",
      title: "Hashing Algorithms and Their Applications",
      content: [
        { type: ContentItemType.PARAGRAPH, text: "Hashing algorithms are fundamental cryptographic tools that create a fixed-size 'fingerprint' or 'digest' of input data. They are one-way functions, meaning it's computationally infeasible to reverse the process and obtain the original data from its hash. Even a small change in the input data results in a drastically different hash value." },
        { type: ContentItemType.HEADING3, text: "Properties of Secure Hashing Algorithms:" },
        { type: ContentItemType.LIST, items: [
            "Deterministic: The same input always produces the same hash output.",
            "Pre-image Resistance (One-way): Given a hash value H, it should be computationally infeasible to find an input message M such that hash(M) = H.",
            "Second Pre-image Resistance (Weak Collision Resistance): Given an input M1, it should be computationally infeasible to find a different input M2 such that hash(M1) = hash(M2).",
            "Collision Resistance (Strong Collision Resistance): It should be computationally infeasible to find any two different inputs M1 and M2 such that hash(M1) = hash(M2). This is the strongest property.",
            "Avalanche Effect: A small change in the input (e.g., flipping a single bit) should produce a significantly different hash output (ideally, about half the bits in the output should change)."
          ]
        },
        { type: ContentItemType.HEADING3, text: "Common Hashing Algorithms & Their Status:" },
        { type: ContentItemType.LIST, items: [
            "**MD5 (Message Digest 5):** Produces a 128-bit hash. Once widely used, but now considered cryptographically broken and unsuitable for security applications due to known collision vulnerabilities (meaning it's possible to find two different inputs that produce the same MD5 hash). Still sometimes used for non-cryptographic checksums.",
            "**SHA-1 (Secure Hash Algorithm 1):** Produces a 160-bit hash. Also considered weakened and deprecated for most security uses (e.g., digital signatures, SSL certificates) as practical collision attacks have been demonstrated. Avoid for new applications.",
            "**SHA-2 Family (SHA-224, SHA-256, SHA-384, SHA-512):** A family of stronger hash functions developed by NIST. SHA-256 (256-bit hash) and SHA-512 (512-bit hash) are widely used and currently considered secure for most applications.",
            "**SHA-3 (Secure Hash Algorithm 3 - Keccak):** Selected by NIST in 2012 as a new generation hash standard after a public competition. It has a different internal structure (sponge construction) than SHA-1 and SHA-2, offering an alternative if weaknesses are found in SHA-2. It also supports various output sizes."
          ]
        },
        { type: ContentItemType.HEADING3, text: "Key Applications of Hashing:" },
        { type: ContentItemType.LIST, items: [
            "**Password Storage:** As discussed in Data Security, storing hashes of passwords (with salts and strong algorithms like Argon2, bcrypt, scrypt) instead of plaintext passwords. Hashing prevents direct exposure of passwords if a database is breached.",
            "**Data Integrity Verification:** Generating a hash of a file or message and storing/transmitting it separately. To verify integrity, the hash is recomputed from the received/retrieved data and compared to the original hash. If they match, the data is likely unaltered. Used in software downloads, file synchronization, and digital forensics.",
            "**Digital Signatures:** Hashing is a core component. A message is hashed, and then the hash (not the entire message) is encrypted with the sender's private key to create the signature. This is more efficient than encrypting the whole message.",
            "**Message Authentication Codes (MACs):** HMAC (Hash-based MAC) uses a cryptographic hash function along with a secret key to generate a MAC. This verifies both data integrity and authenticity (proof that the message came from someone who knows the secret key).",
            "**Data Deduplication:** Some storage systems use hashes to identify identical blocks of data, storing only one copy to save space.",
            "**Blockchain Technology:** Hashing is fundamental to creating blocks in a blockchain. Each block typically contains a hash of the previous block, creating a secure, tamper-evident chain."
          ]
        },
        { 
          type: ContentItemType.CAUTIONARY_TALE,
          cautionaryTaleData: {
            text: "In 2012, LinkedIn suffered a major data breach where over 6.5 million user password hashes (unsalted SHA-1) were leaked. Because the hashes were unsalted and SHA-1 was relatively fast to compute, attackers were quickly able to crack a large percentage of these passwords using dictionary and brute-force attacks, leading to widespread account compromises.",
            source: "LinkedIn 2012 breach."
          }
        },
        { type: ContentItemType.PARAGRAPH, text: "Choosing the right hashing algorithm is crucial. For security-sensitive applications, always opt for currently secure algorithms like SHA-256, SHA-512, or SHA-3, and ensure proper implementation (e.g., salting for passwords)." }
      ]
    },
    {
      id: "6.4",
      title: "Digital Signatures and Certificates: Trust and Authenticity",
      content: [
        { type: ContentItemType.PARAGRAPH, text: "Digital signatures and digital certificates are cornerstone technologies for establishing trust, authenticity, integrity, and non-repudiation in digital communications and transactions. They leverage asymmetric cryptography." },
        
        { type: ContentItemType.HEADING3, text: "Digital Signatures:" },
        { type: ContentItemType.PARAGRAPH, text: "A digital signature is a cryptographic mechanism used to verify the authenticity and integrity of digital data (e.g., a message, document, or piece of software). It provides assurance that the data originated from the claimed sender and has not been tampered with since it was signed." },
        { type: ContentItemType.PARAGRAPH, text: "Digital Signature = A tamper-proof seal for digital documents, like a handwritten signature combined with a notary's stamp, verifying who 'signed' it and that it hasn't been altered." },
        { type: ContentItemType.HEADING4, text: "How Digital Signatures Work (Simplified):" },
        { type: ContentItemType.LIST, items: [
          "1. **Hashing:** The sender takes the original data (message) and creates a hash of it using a secure hashing algorithm (e.g., SHA-256).",
          "2. **Encryption (Signing):** The sender then encrypts this hash value with their own **private key**. This encrypted hash is the digital signature.",
          "3. **Transmission:** The original data and the digital signature are sent to the recipient (the signature is often appended to the data).",
          "4. **Verification (by Recipient):**",
          "   a. The recipient decrypts the received digital signature using the sender's **public key**. This reveals the original hash (H1) calculated by the sender.",
          "   b. The recipient independently calculates a new hash (H2) of the received original data using the same hashing algorithm the sender used.",
          "   c. The recipient compares H1 and H2. If they match, the signature is valid: it confirms the data came from the owner of the private key (authenticity) and that the data has not been altered since signing (integrity)."
          ]
        },
        { type: ContentItemType.HEADING4, text: "Benefits Provided:" },
        { type: ContentItemType.LIST, items: [
            "**Authentication:** Verifies the origin of the data (sender's identity).",
            "**Integrity:** Ensures the data has not been modified after signing.",
            "**Non-repudiation:** The sender cannot later deny having signed the data, as only they possess the private key used to create the signature."
          ]
        },

        { type: ContentItemType.HEADING3, text: "Digital Certificates (X.509 Certificates):" },
        { type: ContentItemType.PARAGRAPH, text: "A digital certificate is an electronic document that uses a digital signature to bind a public key with an identity (an individual, organization, server, device). Certificates are issued by trusted third parties called Certificate Authorities (CAs)." },
        { type: ContentItemType.PARAGRAPH, text: "Digital Certificate = An electronic ID card (like a passport or driver's license) that verifies someone's identity and includes their public key, vouched for by a trusted authority (the CA)." },
        { type: ContentItemType.HEADING4, text: "Key Information in a Digital Certificate:" },
        { type: ContentItemType.LIST, items: [
            "Subject's Public Key: The public key being certified.",
            "Subject's Identifying Information: Name, organization, domain name (for SSL/TLS certificates), email address, etc.",
            "Issuer (Certificate Authority) Information: Name of the CA that issued the certificate.",
            "Validity Period: Start and end dates for when the certificate is valid.",
            "Serial Number: A unique number assigned by the CA.",
            "Issuer's Digital Signature: The CA digitally signs the entire certificate with its own private key, vouching for its authenticity.",
            "Certificate Usage: Specifies the purpose of the key (e.g., server authentication, client authentication, code signing, email signing)."
          ]
        },

        { type: ContentItemType.HEADING3, text: "Public Key Infrastructure (PKI):" },
        { type: ContentItemType.PARAGRAPH, text: "PKI is a comprehensive system of hardware, software, policies, procedures, and people required to create, manage, distribute, use, store, and revoke digital certificates. It provides the framework for trust in asymmetric cryptography." },
        { type: ContentItemType.HEADING4, text: "Core Components of PKI:" },
        { type: ContentItemType.LIST, items: [
            "**Certificate Authority (CA):** Issues and manages digital certificates. Verifies the identity of entities before issuing certificates. Root CAs are highly trusted (their public keys are often pre-installed in browsers/OS). Subordinate CAs can issue certificates on behalf of a Root CA, creating a chain of trust.",
            "**Registration Authority (RA):** Verifies the identity of entities requesting certificates, acting as an intermediary between the user and the CA (though sometimes this role is combined with the CA).",
            "**Certificate Repository:** A database where certificates are stored and can be publicly accessed.",
            "**Certificate Revocation List (CRL):** A list of certificates that have been revoked by the CA before their scheduled expiration date (e.g., due to key compromise). Browsers/systems check CRLs (or use OCSP) to ensure a certificate is still valid.",
            "**Online Certificate Status Protocol (OCSP):** An alternative to CRLs for checking a certificate's revocation status in real-time by querying the CA or an OCSP responder.",
            "**Subscribers/End Entities:** The individuals, organizations, or devices that are issued certificates."
          ]
        },
        { type: ContentItemType.HEADING4, text: "Chain of Trust:" },
        { type: ContentItemType.PARAGRAPH, text: "When your browser encounters an SSL/TLS certificate from a website, it verifies the certificate's signature using the public key of the issuing CA. If that CA is a subordinate CA, the browser then verifies the subordinate CA's certificate using the public key of its issuer (e.g., a Root CA). This process continues up to a trusted Root CA certificate that is already embedded in the browser or OS. This hierarchical structure forms a 'chain of trust.'" },

        { type: ContentItemType.HEADING3, text: "Applications:" },
        { type: ContentItemType.LIST, items: [
            "**SSL/TLS Certificates:** Secure web communication (HTTPS). Authenticate web servers to clients (browsers) and enable encrypted connections.",
            "**Email Security (S/MIME, PGP/GPG):** Digitally signing emails to verify sender authenticity and integrity, and encrypting emails for confidentiality.",
            "**Code Signing:** Digitally signing software executables and scripts to verify the publisher's identity and ensure the code hasn't been tampered with since signing.",
            "**Document Signing:** Providing authenticity and integrity for digital documents (e.g., PDF signatures).",
            "**Client Authentication:** Using certificates to authenticate clients (users or devices) to servers.",
            "**Smart Cards & Identity Tokens:** Storing private keys and certificates securely on hardware tokens for strong authentication."
          ]
        },
        { type: ContentItemType.PARAGRAPH, text: "Digital signatures and PKI are essential for establishing trust in the digital world, enabling secure e-commerce, software distribution, and authenticated communications." }
      ]
    },
    {
      id: "6.5",
      title: "Real-World Cryptography: TLS/SSL, VPNs, and Secure Email",
      content: [
        { type: ContentItemType.PARAGRAPH, text: "While understanding cryptographic primitives is important, their real power comes from how they are combined and implemented in protocols to secure everyday applications and communications. This section explores how cryptography underpins TLS/SSL, VPNs, and secure email." },
        
        { type: ContentItemType.HEADING3, text: "Transport Layer Security (TLS) / Secure Sockets Layer (SSL):" },
        { type: ContentItemType.PARAGRAPH, text: "TLS is the successor to SSL and is the most widely used cryptographic protocol for securing communications over a computer network. It is the 'S' in HTTPS, ensuring secure web browsing. It provides confidentiality (encryption), integrity (message authentication codes), and server authentication (via digital certificates)." },
        { type: ContentItemType.HEADING4, text: "TLS Handshake (Simplified Overview):" },
        { type: ContentItemType.LIST, items: [
          "1. **Client Hello:** Client sends a message to the server, including the TLS versions it supports, cipher suites it prefers, and a random number (client random).",
          "2. **Server Hello:** Server responds with its chosen TLS version, selected cipher suite, its digital certificate (containing its public key), and another random number (server random).",
          "3. **Certificate Verification (Client):** Client verifies the server's certificate against its trusted CA list. Checks validity period, revocation status, and that the domain name matches.",
          "4. **Key Exchange:** Client generates a 'premaster secret,' encrypts it with the server's public key (from the certificate), and sends it to the server. (Alternative: Diffie-Hellman key exchange can be used where both sides derive the premaster secret independently).",
          "5. **Session Keys Derived:** Both client and server use the client random, server random, and premaster secret to independently derive identical symmetric session keys (for encryption and MACs).",
          "6. **Client Finished:** Client sends a 'Finished' message, encrypted with the new session key, to indicate its part of the handshake is complete.",
          "7. **Server Finished:** Server sends its own 'Finished' message, encrypted with the session key.",
          "8. **Secure Communication:** Handshake complete. All subsequent application data (e.g., HTTP requests/responses) is encrypted and integrity-protected using the derived symmetric session keys."
          ]
        },
        { type: ContentItemType.PARAGRAPH, text: "**Key Cryptographic Components Used:** Asymmetric cryptography (for server authentication and premaster secret encryption/exchange), symmetric cryptography (for bulk data encryption after handshake), hashing (for message authentication codes - MACs, and in digital signatures)." },

        { type: ContentItemType.HEADING3, text: "Virtual Private Networks (VPNs):" },
        { type: ContentItemType.PARAGRAPH, text: "VPNs use cryptographic tunneling protocols to create secure, encrypted connections over untrusted networks (like the internet). Common VPN protocols like IPsec and OpenVPN heavily rely on cryptography." },
        { type: ContentItemType.LIST, items: [
          "**IPsec (Internet Protocol Security):** A suite of protocols operating at the Network Layer (Layer 3).",
          "  - **Authentication Header (AH):** Provides connectionless integrity, data origin authentication, and anti-replay protection. Does *not* provide confidentiality (encryption).",
          "  - **Encapsulating Security Payload (ESP):** Provides confidentiality (encryption), and can also provide integrity, authentication, and anti-replay.",
          "  - **Security Associations (SA):** Define the specific algorithms and keys to be used for a particular connection.",
          "  - **Internet Key Exchange (IKE):** Protocol used to negotiate SAs and establish shared keys (often using Diffie-Hellman).",
          "  - **Modes:** Tunnel mode (encrypts entire original IP packet, common for site-to-site VPNs) and Transport mode (encrypts only payload, common for host-to-host security).",
          "**SSL/TLS VPNs (e.g., OpenVPN):** Use TLS to secure connections. Often operate at higher layers than IPsec. OpenVPN is a popular open-source solution that can use TLS with custom security protocols.",
          "**WireGuard:** A newer VPN protocol known for its simplicity, speed, and modern cryptography (e.g., ChaCha20 for symmetric encryption, Curve25519 for ECDH, BLAKE2s for hashing)."
          ]
        },
        { type: ContentItemType.PARAGRAPH, text: "**Cryptography in VPNs:** Establishes authenticated and encrypted tunnels, ensuring that data transiting the VPN is protected from eavesdropping and tampering." },

        { type: ContentItemType.HEADING3, text: "Secure Email (PGP/GPG and S/MIME):" },
        { type: ContentItemType.PARAGRAPH, text: "Standard email (SMTP) is inherently insecure, transmitting messages in cleartext. Secure email solutions use cryptography to provide confidentiality and authenticity." },
        { type: ContentItemType.LIST, items: [
          "**PGP (Pretty Good Privacy) / GPG (GNU Privacy Guard - open-source PGP):**",
          "  - Uses a 'Web of Trust' model for key validation (users sign each other's keys) or can use hierarchical PKI.",
          "  - Provides encryption (using symmetric keys protected by recipient's public key) and digital signatures (hash of message encrypted with sender's private key).",
          "  - Users generate their own public/private key pairs.",
          "**S/MIME (Secure/Multipurpose Internet Mail Extensions):**",
          "  - Relies on a hierarchical PKI with CAs to issue and validate certificates (similar to SSL/TLS).",
          "  - Provides encryption and digital signatures, integrated into many enterprise email clients.",
          "  - Certificates are typically issued by an organizational CA or a commercial CA."
          ]
        },
        { type: ContentItemType.PARAGRAPH, text: "**Cryptography in Secure Email:** A hybrid approach. For encryption, a random symmetric key is generated to encrypt the email content; this symmetric key is then encrypted with the recipient's public key. For digital signatures, the sender hashes the email content and encrypts the hash with their private key." },
        { type: ContentItemType.PARAGRAPH, text: "These examples demonstrate how various cryptographic techniques are orchestrated within protocols to secure real-world applications, protecting data confidentiality, integrity, and authenticity in our daily digital interactions." }
      ]
    },
     {
      id: "6.6",
      title: "Common Cryptographic Pitfalls and Best Practices",
      content: [
        { type: ContentItemType.PARAGRAPH, text: "While modern cryptographic algorithms are strong, their effectiveness hinges on correct implementation and usage. Many security breaches involving cryptography are not due to broken algorithms, but rather to mistakes in how they are applied or managed." },
        { type: ContentItemType.HEADING3, text: "Common Cryptographic Pitfalls:" },
        { type: ContentItemType.LIST, items: [
          "**Using Weak or Deprecated Algorithms:** Employing algorithms known to be insecure (e.g., MD5 for hashing passwords, DES for encryption, RC4, SSLv3).",
          "**Incorrect Key Management:**",
          "  - Hardcoding keys directly into source code or configuration files.",
          "  - Using weak or default keys.",
          "  - Not rotating keys regularly.",
          "  - Sharing private keys insecurely or storing them without adequate protection.",
          "  - Losing keys (making encrypted data unrecoverable).",
          "**Improper Use of Initialization Vectors (IVs) or Nonces:** For block ciphers in modes like CBC or GCM, IVs/nonces must be unique and, for some modes, unpredictable. Reusing IVs/nonces with the same key can catastrophically break encryption.",
          "**Rolling Your Own Crypto:** Attempting to design and implement custom cryptographic algorithms or protocols. This is extremely difficult to do securely and almost always results in vulnerabilities. Always use well-vetted, standardized algorithms and libraries.",
          "**Ignoring Salt for Password Hashing:** Storing password hashes without unique salts per user makes them vulnerable to rainbow table attacks and precomputation.",
          "**Not Validating Certificates Properly:** Failing to check certificate validity (dates, issuer, revocation status via CRL/OCSP), or accepting self-signed certificates in inappropriate contexts, can lead to man-in-the-middle attacks.",
          "**Timing Attacks and Other Side-Channel Attacks:** In some implementations, the time taken for cryptographic operations can leak information about the secret key. Other side channels include power consumption or electromagnetic radiation.",
          "**Sensitive Data in Logs or Error Messages:** Accidentally logging plaintext keys, passwords, or sensitive data, or revealing too much information in error messages.",
          "**Insufficient Randomness:** Using weak or predictable random number generators for creating keys, IVs, or other cryptographic material.",
          "**Exposing Unencrypted Data Unnecessarily:** Transmitting sensitive data over unencrypted channels (HTTP instead of HTTPS) or storing it unencrypted when it should be protected at rest.",
          "**Ignoring Protocol Downgrade Attacks:** Allowing attackers to force a system to use older, weaker versions of protocols or cipher suites (e.g., POODLE attack on SSLv3)."
        ]},
        { type: ContentItemType.HEADING3, text: "Cryptographic Best Practices:" },
        { type: ContentItemType.LIST, items: [
          "**Use Strong, Standardized Algorithms and Protocols:** Rely on well-vetted, industry-accepted algorithms (AES, SHA-256/SHA-512, RSA, ECC) and protocols (TLS 1.2+, SSHv2, IPsec).",
          "**Implement Robust Key Management:** Use a dedicated Key Management System (KMS) or Hardware Security Module (HSM) for sensitive keys. Generate strong, random keys. Rotate keys periodically. Protect private keys rigorously.",
          "**Use Secure Libraries and APIs:** Utilize reputable cryptographic libraries that are maintained and have been audited. Follow their documentation carefully.",
          "**Properly Handle IVs/Nonces:** Ensure IVs/nonces are generated correctly (unique, random as required by the mode) for each encryption operation with the same key.",
          "**Salt and Iterate Password Hashes:** Use strong, modern password hashing algorithms (Argon2, scrypt, bcrypt) with unique salts per user and a sufficient iteration count/work factor.",
          "**Validate Certificates Thoroughly:** Implement strict certificate validation, including chain of trust, expiration, revocation status, and hostname matching.",
          "**Protect Data in Transit and at Rest:** Encrypt sensitive data wherever it is, using appropriate methods (TLS for transit, AES for rest).",
          "**Follow the Principle of Least Privilege:** Cryptographic keys should only be accessible to the processes and users that absolutely need them.",
          "**Regularly Audit and Test Cryptographic Implementations:** Conduct code reviews and penetration tests focusing on cryptographic components to identify weaknesses.",
          "**Stay Updated:** Keep cryptographic libraries, protocols, and underlying systems patched to address newly discovered vulnerabilities.",
          "**Develop an Incident Response Plan for Key Compromise:** Know what to do if a private key is compromised (e.g., revoke certificates, re-encrypt data with new keys).",
          "**Educate Developers:** Ensure developers understand basic cryptographic principles and common pitfalls to avoid making implementation mistakes."
        ]},
        { type: ContentItemType.PARAGRAPH, text: "By being aware of common pitfalls and adhering to best practices, organizations can significantly improve the effectiveness of their cryptographic implementations and better protect their sensitive information." }
      ]
    }
  ]
};

const NOTEBOOK_DATA: NotebookData = {
  title: "Smart Cybersecurity Notebook",
  chapters: [
    CHAPTER_1_CONTENT,
    CHAPTER_2_CONTENT,
    CHAPTER_3_CONTENT,
    CHAPTER_4_CONTENT,
    CHAPTER_5_CONTENT,
    CHAPTER_6_CONTENT,
    CHAPTER_7_CONTENT,
    CHAPTER_8_CONTENT,
  ]
};

// Helper function to get chapter title by ID - used by ContentDisplay for AI context
export const getChapterTitle = (chapterId?: string): string | undefined => {
  if (!chapterId) return undefined;
  const chapter = NOTEBOOK_DATA.chapters.find(c => c.id === chapterId);
  return chapter?.title;
};
export { NOTEBOOK_DATA };
