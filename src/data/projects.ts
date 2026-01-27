import networkTopology from "@/assets/projects/office-network-topology.png";
import pingTest from "@/assets/projects/office-network-ping-test.png";

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  type: "demo" | "report" | "finding";
  category: string;
  github?: string;
  link?: string;
  documentation?: ProjectDocumentation;
}

export interface ProjectDocumentation {
  introduction: string;
  sections: DocumentSection[];
  images: ProjectImage[];
  conclusion: string;
}

export interface DocumentSection {
  title: string;
  content: string;
  subsections?: { title: string; content: string }[];
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
}

export const projects: Project[] = [
  {
    id: "simple-office-network",
    title: "Simple Office Network",
    description: "Design and testing of a simple office network using Cisco Packet Tracer. Connected multiple wired and wireless devices within one LAN, assigned IP addresses using DHCP, and confirmed successful communication between devices.",
    tags: ["Cisco Packet Tracer", "DHCP", "LAN", "Networking", "ICMP"],
    type: "report",
    category: "networking",
    documentation: {
      introduction: "This practical demonstrates the design and testing of a simple office network using Cisco Packet Tracer. The goal was to connect multiple wired and wireless devices within one local area network (LAN), assign IP addresses automatically using DHCP, and confirm successful communication between devices. The network was tested by sending ICMP (ping) messages between computers, and successful results were observed.",
      sections: [
        {
          title: "Network Topology Overview",
          content: "The network consists of one router acting as default gateway, DHCP server, and connection to the internet (WAN). One switch is used to interconnect all wired devices, one wireless access point provides Wi-Fi, multiple PCs are wired, one laptop is wireless, and a cloud represents the internet.",
          subsections: [
            {
              title: "Logical Flow of the Network",
              content: "The router connects to the internet through G0/0. The router connects to the internal office network through G0/1. The switch distributes connectivity to all PCs and the access point. The access point connects the laptop wirelessly to the same LAN."
            }
          ]
        },
        {
          title: "Router Configuration (Key Findings)",
          content: "The router has two interfaces, each serving a different purpose.",
          subsections: [
            {
              title: "Router Interface G0/0 – WAN (Internet Side)",
              content: "IP Address: 10.0.0.2 | Subnet Mask: 255.0.0.0 | Purpose: Connects the office network to the internet. This interface represents the wide area network (WAN) side. The large subnet (/8) is typical for upstream or ISP-side networks."
            },
            {
              title: "Router Interface G0/1 – LAN (Office Network)",
              content: "IP Address: 192.168.1.1 | Subnet Mask: 255.255.255.0 | Purpose: Default gateway for all office devices. This interface serves as the entry point to the local area network (LAN). All internal devices use this IP address as their default gateway."
            }
          ]
        },
        {
          title: "End Devices IP Addressing (Observed via DHCP)",
          content: "Although the IP addresses appear fixed, they were not manually assigned. All PCs and the laptop were set to DHCP, and the router dynamically allocated the IPs.",
          subsections: [
            {
              title: "Assigned IP Addresses",
              content: "PC3: 192.168.1.2/24 | PC0: 192.168.1.3/24 | PC4: 192.168.1.4/24 | PC2: 192.168.1.5/24 | Laptop: 192.168.1.6/24. The IP addresses are sequential, indicating the router's DHCP service is functioning correctly and devices are being assigned addresses from the same DHCP pool."
            }
          ]
        },
        {
          title: "Wireless Network Operation",
          content: "The wireless laptop connects through the access point, which has DHCP disabled and acts only as a bridge, forwarding DHCP requests to the router. As a result, the laptop receives an IP address from the same router DHCP pool as the wired PCs. This confirms that wired and wireless devices are on the same LAN."
        },
        {
          title: "Network Testing & Verification",
          content: "Ping Test Performed: Source: PC3 | Destination: PC0 | Result: Successful. This confirms devices can reach each other, no packet loss occurred, the switch is forwarding frames correctly, and IP configuration is correct."
        },
        {
          title: "Why Communication Was Successful",
          content: "All devices are on the same network because they share the same network address: 192.168.1.0/255.255.255.0. Only the last octet differs (host portion). No router is required for internal communication. When PC3 sends data to PC0, the packet does not leave the LAN and the switch uses MAC addresses to deliver it directly. This makes communication fast and efficient."
        },
        {
          title: "Student Reflection & Learning Outcome",
          content: "From this practical, the following key insights were gained: DHCP simplifies network administration by automatically assigning IP addresses. Devices in the same subnet can communicate without routing. The router plays multiple roles: gateway, DHCP server, and WAN connector. Wireless and wired devices can coexist in one LAN when properly configured. Successful ping tests confirm both logical and physical connectivity. This lab strengthened understanding of real-world office networking, not just theoretical concepts."
        }
      ],
      images: [
        {
          src: networkTopology,
          alt: "Network Topology Diagram",
          caption: "Cisco Packet Tracer network topology showing router, switch, access point, PCs, and laptop connections"
        },
        {
          src: pingTest,
          alt: "Ping Test Results",
          caption: "Successful ping test from PC3 to PC0 showing 0% packet loss and response times"
        }
      ],
      conclusion: "The simple office network was successfully designed, configured, and tested. All devices obtained IP addresses dynamically and communicated effectively within the same LAN. The successful ping test validates correct network configuration and connectivity. This setup reflects a practical and scalable model used in real office environments."
    }
  }
];

export const categories = [
  { id: "all", name: "All Projects" },
  { id: "security", name: "Security" },
  { id: "networking", name: "Networking" },
  { id: "development", name: "Development" },
];
