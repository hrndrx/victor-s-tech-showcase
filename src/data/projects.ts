import networkTopology from "@/assets/projects/office-network-topology.png";
import pingTest from "@/assets/projects/office-network-ping-test.png";
import dhcpTopology from "@/assets/projects/dhcp-router-topology.png";
import dhcpPingTest from "@/assets/projects/dhcp-router-ping-test.png";
import natTopology from "@/assets/projects/nat-topology.png";
import natSimulation from "@/assets/projects/nat-simulation.png";
import trafficFlowPdu from "@/assets/projects/traffic-flow-unrouted-pdu.png";
import trafficFlowRoutedTopology from "@/assets/projects/traffic-flow-routed-topology.png";
import trafficFlowIpconfig from "@/assets/projects/traffic-flow-ipconfig-renew.png";
import trafficFlowPing from "@/assets/projects/traffic-flow-ping-test.png";
import smallOfficeLanTopology from "@/assets/projects/small-office-lan-topology.png";
import smallOfficeLanTracert from "@/assets/projects/small-office-lan-tracert.png";
import dnsHttpTopology from "@/assets/projects/dns-http-topology.png";
import dnsHttpSimulation from "@/assets/projects/dns-http-simulation.png";
import dnsHttpWebBrowser from "@/assets/projects/dns-http-web-browser.png";
import dnsHttpPduClient from "@/assets/projects/dns-http-pdu-client.png";
import dnsHttpPduServer from "@/assets/projects/dns-http-pdu-server.png";
import httpTcpTopology from "@/assets/projects/http-tcp-topology.png";
import httpTcpPing from "@/assets/projects/http-tcp-ping.png";
import httpTcpBrowser from "@/assets/projects/http-tcp-browser.png";
import httpTcpServerServices from "@/assets/projects/http-tcp-server-services.png";
import httpTcpHtmlCode from "@/assets/projects/http-tcp-html-code.png";
import httpTcpComplexPdu from "@/assets/projects/http-tcp-complex-pdu.png";
import httpTcpSimulation from "@/assets/projects/http-tcp-simulation.png";

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
  },
  {
    id: "dhcp-wireless-router",
    title: "Configuring DHCP on a Wireless Router",
    description: "Configuration of Dynamic Host Configuration Protocol (DHCP) on a wireless router so that multiple PCs could automatically obtain IP addresses and communicate successfully within the same local area network (LAN).",
    tags: ["Cisco Packet Tracer", "DHCP", "Wireless Router", "LAN", "Networking"],
    type: "report",
    category: "networking",
    documentation: {
      introduction: "The objective of this practical was to configure Dynamic Host Configuration Protocol (DHCP) on a wireless router so that multiple PCs could automatically obtain IP addresses and communicate successfully within the same local area network (LAN).",
      sections: [
        {
          title: "Network Topology Overview",
          content: "The network consists of one Wireless Router and three PCs (PC0, PC1, and PC2). Each PC is connected directly to the router using Ethernet cables. The router acts as the default gateway, the DHCP server, and the central device that interconnects all hosts in the LAN."
        },
        {
          title: "Initial Observation",
          content: "Before configuring the router, I opened the IP Configuration settings on one of the PCs. From this, I observed that the default gateway was 192.168.0.1, which indicated that this was the router's default IP address."
        },
        {
          title: "Accessing the Router GUI",
          content: "To configure the router, I opened a web browser on the PC and entered the default gateway IP address: http://192.168.0.1. The router's Graphical User Interface (GUI) loaded. I logged in using the default credentials (Username: admin, Password: admin). This provided access to the router's configuration settings."
        },
        {
          title: "Router IP Address Configuration",
          content: "To place the network on a new subnet and avoid conflicts, I navigated to the LAN / Network settings section. I changed the router's IP address to 192.168.5.1. This new address became the default gateway for all devices on the network. I saved the settings and allowed the router to apply the changes."
        },
        {
          title: "DHCP Configuration",
          content: "After setting the router IP, I enabled the DHCP service on the router. I configured the DHCP address pool with a starting IP address of 192.168.5.100. The range was set to automatically assign IP addresses to hosts joining the network. The router was now capable of dynamically assigning IP address, subnet mask, and default gateway."
        },
        {
          title: "PC Configuration",
          content: "On each PC (PC0, PC1, and PC2), I opened Desktop → IP Configuration. I selected DHCP as the IP assignment method. Each PC automatically received a unique IP address in the 192.168.5.0/24 network with default gateway set to 192.168.5.1. This confirmed that the router's DHCP server was functioning correctly."
        },
        {
          title: "Connectivity Testing",
          content: "To verify successful communication, from PC0, I opened the Command Prompt and ran a ping test to PC1: ping 192.168.5.101. The ping was successful, with zero packet loss. This confirmed that all PCs were on the same network, DHCP addressing was correct, and the router was properly routing traffic within the LAN."
        },
        {
          title: "Key Learning Outcome",
          content: "This exercise improved my understanding of DHCP operation, router configuration via GUI, IP addressing and default gateways, and basic LAN connectivity testing using ping. DHCP simplifies network management by automatically assigning IP addresses, reducing configuration errors and enabling scalable network deployment."
        }
      ],
      images: [
        {
          src: dhcpTopology,
          alt: "DHCP Wireless Router Network Topology",
          caption: "Cisco Packet Tracer network topology showing wireless router connected to three PCs via Ethernet"
        },
        {
          src: dhcpPingTest,
          alt: "DHCP Ping Test Results",
          caption: "Successful ping test from PC0 to PC1 (192.168.5.101) showing 0% packet loss"
        }
      ],
      conclusion: "This practical demonstrated the successful configuration of DHCP on a wireless router using the GUI interface. By changing the router's IP address, enabling DHCP, and configuring all PCs to obtain IP addresses automatically, I was able to establish full connectivity between hosts."
    }
  },
  {
    id: "nat-wireless-router",
    title: "Examining NAT on a Wireless Router",
    description: "Examination of how Network Address Translation (NAT) operates on a wireless router, configuring multiple PCs to obtain IP addresses via DHCP, and observing how private IP addresses are translated to a public IP address when accessing an external network.",
    tags: ["Cisco Packet Tracer", "NAT", "DHCP", "Networking", "TCP/IP"],
    type: "report",
    category: "networking",
    documentation: {
      introduction: "The purpose of this lab was to examine how Network Address Translation (NAT) operates on a wireless router, configure multiple PCs to obtain IP addresses via DHCP, and observe how private IP addresses are translated to a public IP address when accessing an external network.",
      sections: [
        {
          title: "Network Topology Overview",
          content: "The network consists of one wireless router acting as DHCP server for internal hosts and NAT device for internet access, four PCs connected to the wireless router using straight-through Ethernet cables, one external web server (ciscolearn.nat.com) representing an internet host, and an ISP cloud providing a public IP address to the router's Internet (WAN) interface."
        },
        {
          title: "Part 1: Examining External Network Configuration",
          content: "A PC was connected to the wireless router using a straight-through cable. DHCP was enabled on the PC to automatically obtain an IP address. The default gateway IP address was entered into a web browser to access the router's configuration page using admin credentials. The Status menu was selected, and the Internet Connection section was examined.",
          subsections: [
            {
              title: "Observation",
              content: "The IP address displayed under the Internet Connection section was assigned by the ISP DHCP server. This address represents the IP assigned to the router's WAN interface. This is a public IP address, because it is assigned by the ISP and is routable on the internet."
            }
          ]
        },
        {
          title: "Part 2: Examining Internal Network Configuration",
          content: "The Local Network option was selected under the Status menu. The Local Network IP address and DHCP server information were examined. The DHCP address pool assigned to internal hosts was reviewed.",
          subsections: [
            {
              title: "Observation",
              content: "The internal network uses an IP address from the private IP address range. The DHCP server distributes IP addresses within a private subnet. These are private IP addresses, which are used for internal communication and are not routable on the public internet."
            }
          ]
        },
        {
          title: "Part 3: Connecting Additional PCs",
          content: "Three additional PCs were connected to the wireless router. DHCP was enabled on all PCs. The ipconfig /all command was used on each PC to verify IP configuration.",
          subsections: [
            {
              title: "Observation",
              content: "All PCs received a private IP address (e.g., PC0: 192.168.1.2) with the wireless router (192.168.1.1) as the default gateway. No public IP addresses were assigned directly to the PCs. Private IP addresses cannot cross the internet. Therefore, NAT is required to translate private IP addresses to a public IP address for external communication."
            }
          ]
        },
        {
          title: "Part 4: Viewing NAT Translation (Simulation Mode)",
          content: "Simulation mode was enabled and event filters were configured to show only TCP and HTTP. A Complex PDU was created with HTTP application, source device PC, destination device ciscolearn.nat.com, source port 1000, simulation type Periodic, and interval 120 seconds.",
          subsections: [
            {
              title: "Observation",
              content: "Traffic from the PC traveled to the wireless router. The router forwarded the traffic toward the external server."
            }
          ]
        },
        {
          title: "Part 5: Examining Packet Headers (NAT in Action)",
          content: "The packet headers were examined before and after NAT translation to understand how the source IP address changes.",
          subsections: [
            {
              title: "Inbound PDU (Before NAT)",
              content: "Source IP: Private IP address of the PC (e.g., 192.168.x.x) | Destination IP: 209.165.200.228 (web server)"
            },
            {
              title: "Outbound PDU (After NAT)",
              content: "Source IP: 209.165.200.227 (public IP of wireless router, ISP-assigned) | Destination IP: 209.165.200.228 (web server)"
            },
            {
              title: "Key Observation",
              content: "The source IP address changes as the packet passes through the wireless router. This confirms that NAT is translating the private IP address into a public IP address."
            }
          ]
        },
        {
          title: "Key Takeaways",
          content: "Private IP addresses cannot access the internet directly. NAT enables multiple private devices to share a single public IP. DHCP simplifies IP address assignment within internal networks. Packet Tracer simulation mode is useful for visualizing real network behavior."
        }
      ],
      images: [
        {
          src: natTopology,
          alt: "NAT Network Topology",
          caption: "Cisco Packet Tracer network topology showing wireless router, four PCs, ISP cloud, and external web server (ciscolearn.nat.com)"
        },
        {
          src: natSimulation,
          alt: "NAT Simulation Mode",
          caption: "Simulation mode showing packet flow and event list as traffic travels from PC through router to external server"
        }
      ],
      conclusion: "This lab demonstrated how a wireless router uses NAT to allow devices with private IP addresses to communicate with external public networks. Internal hosts obtained private IP addresses through DHCP, while the router used its ISP-assigned public IP address to represent all internal devices when accessing the internet. Packet inspection in Simulation mode confirmed the translation of source IP addresses, validating the NAT process."
    }
  },
  {
    id: "traffic-flow-routed-network",
    title: "Observing Traffic Flow in an Unrouted and Routed Network",
    description: "Demonstration of how network efficiency can be improved by separating departments into multiple routed networks. Traffic flow is observed in both an unrouted LAN and a routed network to show the benefits of routing and subnetting in an enterprise environment.",
    tags: ["Cisco Packet Tracer", "Routing", "Subnetting", "ARP", "DHCP", "LAN"],
    type: "report",
    category: "networking",
    documentation: {
      introduction: "XYZ LLC is a growing startup company whose existing network design uses a single IPv4 network for all departments. As the company expanded, this flat network design became inefficient due to increased broadcast traffic, resulting in noticeable network delays. This lab demonstrates how network efficiency can be improved by separating departments into multiple routed networks. Using Cisco Packet Tracer, traffic flow is observed in both an unrouted LAN and a routed network to clearly show the benefits of routing and subnetting in an enterprise environment.",
      sections: [
        {
          title: "Objectives",
          content: "The objectives of this lab were to observe traffic flow in an unrouted LAN, reconfigure the network to route between multiple LANs, observe and compare traffic flow in a routed network, and understand how routing improves network efficiency."
        },
        {
          title: "Network Scenario Description",
          content: "The original XYZ network consists of approximately 150 devices connected within a single IPv4 network. Different departments such as Sales, Finance, and Accounting are connected through switches, which are then connected to an edge router. The router only provides connectivity to the internet and does not perform routing between departments because all hosts share the same network. For demonstration purposes, the Packet Tracer topology shows a simplified version of the network with fewer hosts and departments. However, the behavior observed in this lab represents what would occur in a much larger real-world network."
        },
        {
          title: "Part 1: Observing Traffic Flow in an Unrouted LAN",
          content: "The ARP cache on host Sales 1 was cleared using 'arp -a' and 'arp -d' commands. This ensured that no MAC address entries were stored before beginning the traffic observation. Simulation mode was enabled in Packet Tracer. From Sales 2, a ping command was issued to the IP address of Sales 1. Using the Capture and Forward button, PDUs were observed as they moved through the network.",
          subsections: [
            {
              title: "Analysis of the ARP Request PDU",
              content: "Frame Source MAC Address: MAC address of Sales 2 | Frame Destination MAC Address: FFFF.FFFF.FFFF (broadcast address) | Packet Source IP Address: IP address of Sales 2 (192.168.1.3) | Packet Destination IP Address: IP address of Sales 1 (192.168.1.2). The destination MAC address is a broadcast address because the ARP cache on Sales 2 is empty. The host does not know the MAC address of Sales 1, so it sends an ARP request that is broadcast to all devices on the local network."
            },
            {
              title: "Impact of ARP Broadcasts",
              content: "All hosts on the LAN and the router interface connected to the LAN processed the ARP request. In an unrouted LAN, ARP requests are broadcast to every device on the network, regardless of department. As the number of hosts increases, ARP broadcasts occur more frequently. This consumes bandwidth and processing resources, reducing overall network efficiency and contributing to delays."
            },
            {
              title: "ICMP Echo Request PDU",
              content: "A new PDU with a different color was generated after the ARP process. This PDU is the first ICMP Echo Request packet sent by Sales 2 as part of the ping command to Sales 1."
            }
          ]
        },
        {
          title: "Part 2: Reconfiguring the Network to Route Between LANs",
          content: "The switches were disconnected from each other and instead connected directly to the edge router using copper straight-through cables. Each department switch was connected to a separate GigabitEthernet interface on the router. This change allowed the router to act as a gateway between different department networks.",
          subsections: [
            {
              title: "IP Address Reconfiguration",
              content: "The edge router was preconfigured with multiple IPv4 networks, one for each department. DHCP services were enabled on the router to automatically assign IP addresses to hosts. To immediately obtain new IP addresses, the 'ipconfig /renew' command was run on each host in the Finance and Sales departments."
            },
            {
              title: "Assigned Networks",
              content: "Accounting Network: 192.168.1.0/24 | Finance Network: 192.168.2.0/24 | Sales Network: 192.168.3.0/24"
            }
          ]
        },
        {
          title: "Part 3: Observing Traffic Flow in the Routed Network",
          content: "The ARP cache on Sales 2 was cleared again before testing. Simulation mode was enabled, and Sales 2 pinged Sales 1.",
          subsections: [
            {
              title: "ARP Behavior in the Routed Network",
              content: "Only Sales 1 and the router interface connected to the Sales network receive the ARP broadcast this time. This occurs because ARP broadcasts are now limited to the local subnet."
            },
            {
              title: "Pinging Other Hosts and the Internet",
              content: "Additional ping tests were performed between departments and to the internet server (209.165.200.112). In all cases, ARP requests remained contained within their respective networks and were forwarded appropriately by the router."
            }
          ]
        },
        {
          title: "Benefits of Using Multiple IPv4 Networks",
          content: "Using multiple IPv4 networks reduces unnecessary broadcast traffic by containing it within relevant departments. This improves network performance, enhances security, simplifies troubleshooting, and allows the network to scale efficiently as the organization grows."
        }
      ],
      images: [
        {
          src: trafficFlowPdu,
          alt: "PDU Information in Unrouted Network",
          caption: "PDU Information showing Ethernet frame and IP packet details during ARP/ICMP communication in the unrouted LAN"
        },
        {
          src: trafficFlowRoutedTopology,
          alt: "Routed Network Topology",
          caption: "Routed network topology showing XYZ LLC with separate department networks connected through the edge router to the internet"
        },
        {
          src: trafficFlowIpconfig,
          alt: "IP Configuration Renewal",
          caption: "Command output showing 'ipconfig /renew' assigning new IP address (192.168.3.2) from the Sales network DHCP pool"
        },
        {
          src: trafficFlowPing,
          alt: "Ping Test in Routed Network",
          caption: "Simulation mode showing ICMP ping test between hosts in the routed network configuration"
        }
      ],
      conclusion: "This lab clearly demonstrated the inefficiency of an unrouted LAN in a growing enterprise environment. By implementing routing between departmental networks, broadcast traffic was reduced, network performance improved, and scalability was achieved. Routing is therefore a critical component in modern enterprise network design."
    }
  },
  {
    id: "small-office-lan-setup",
    title: "Creating a Small Office LAN",
    description: "Simulation of creating a small office Local Area Network (LAN) using Cisco Packet Tracer. Physically connected network devices, configured IPv4 addressing using both DHCP and static addressing, and verified connectivity within the LAN and to a remote internet server.",
    tags: ["Cisco Packet Tracer", "LAN", "DHCP", "Static IP", "Networking", "Troubleshooting"],
    type: "report",
    category: "networking",
    documentation: {
      introduction: "This lab was performed using Cisco Packet Tracer to simulate the creation of a small office Local Area Network (LAN). The objective was to physically connect network devices, configure IPv4 addressing using both DHCP and static addressing, and verify connectivity within the LAN and to a remote internet server. This lab demonstrates foundational networking skills including device configuration, IP addressing, and basic troubleshooting.",
      sections: [
        {
          title: "Objectives of the Lab",
          content: "The objectives were to connect network devices and hosts correctly, configure IPv4 addressing on end devices, verify connectivity between local devices, verify connectivity to a remote internet server, and use networking commands such as ipconfig and tracert to inspect network behavior."
        },
        {
          title: "Network Topology Overview",
          content: "The network consists of one Office Router, one Switch, two PCs (Admin PC and Manager PC), one Printer, and one Internet Web Server (www.cisco.pt). The Office Router connects the internal LAN to the ISP, while the switch connects all internal end devices."
        },
        {
          title: "Addressing Table",
          content: "Admin PC NIC: 192.168.1.2/255.255.255.0 | Manager PC NIC: 192.168.1.3/255.255.255.0 | Printer NIC: 192.168.1.100/255.255.255.0 (static) | Web Server NIC: 209.165.200.225/255.255.255.0. The PCs received their IP addresses dynamically from the router's DHCP service, while the printer and server were configured with static IP addresses."
        },
        {
          title: "Physical Connections",
          content: "All devices were connected using Ethernet copper straight-through cables. Office Router G0/1 → Switch G0/1 | Admin PC F0 → Switch F0/1 | Manager PC F0 → Switch F0/2 | Printer F0 → Switch F0/24 | Office Router G0/0 → ISP Cloud. After powering on all devices, green link lights confirmed successful physical connections."
        },
        {
          title: "IPv4 Configuration",
          content: "PCs (Admin and Manager) were configured to receive IP addresses automatically via DHCP. They were assigned IPs within the 192.168.1.0/24 network with identical subnet masks and default gateways. The PCs are on the same LAN, so they share the same network parameters, but each device must have a unique IP address to avoid address conflicts.",
          subsections: [
            {
              title: "Printer Configuration",
              content: "The printer was configured with a static IP address: 192.168.1.100/24. Static addressing ensures reliable access by users. The printer's default gateway would be the same as the PCs, which is the IP address of the Office Router's LAN interface."
            }
          ]
        },
        {
          title: "Connectivity Verification",
          content: "Local connectivity was verified with successful pings from Admin PC to Printer and from Manager PC to Printer. This confirmed that all LAN devices were properly addressed and connected.",
          subsections: [
            {
              title: "Internet Connectivity",
              content: "Access to the web server using IP address 209.165.200.225 was successful. Access using the URL failed when DNS was misconfigured. Cause: If a device can connect using an IP address but not a URL, the problem is related to DNS resolution."
            }
          ]
        },
        {
          title: "Network Commands Used",
          content: "Two key networking commands were used to analyze and verify the network configuration.",
          subsections: [
            {
              title: "ipconfig Command",
              content: "ipconfig displayed basic IP information (IP address, subnet mask, default gateway). ipconfig /all displayed additional details including DHCP server, DNS server, MAC address, and lease information."
            },
            {
              title: "tracert Command",
              content: "tracert www.cisco.pt was used to trace the path to the remote server. The command revealed multiple routers between the PC and the destination. Each router is identified by its IP address and the round-trip time (latency) to that hop. The second router is typically the ISP router, located outside the local office network."
            }
          ]
        },
        {
          title: "Reflection",
          content: "The biggest facilities challenge when setting up a new small office network is physical infrastructure preparation, including cable management and routing, power availability, and proper placement of networking equipment. Without proper planning, even well-configured networks can suffer from reliability and maintenance issues."
        }
      ],
      images: [
        {
          src: smallOfficeLanTopology,
          alt: "Small Office LAN Topology",
          caption: "Cisco Packet Tracer network topology showing Office Router, Switch, Admin PC, Manager PC, Printer, and Internet Web Server (www.cisco.pt)"
        },
        {
          src: smallOfficeLanTracert,
          alt: "Tracert Command Output",
          caption: "Tracert command output showing the path to the destination server with multiple router hops and latency information"
        }
      ],
      conclusion: "This Packet Tracer lab successfully demonstrated the process of building and verifying a small office LAN. It reinforced key concepts such as DHCP, static IP addressing, subnetting, default gateways, and basic troubleshooting. The skills practiced in this lab are directly applicable to real-world networking and entry-level IT roles."
    }
  },
  {
    id: "dns-http-client-server",
    title: "Client–Server Interaction Using DNS and HTTP",
    description: "Analysis of client–server interaction demonstrating how a client requests a web page from a server, how DNS resolves domain names to IP addresses, and how HTTP delivers web content. Includes detailed PDU inspection across OSI layers.",
    tags: ["Cisco Packet Tracer", "DNS", "HTTP", "OSI Model", "Client-Server", "PDU Analysis"],
    type: "report",
    category: "networking",
    documentation: {
      introduction: "This report documents a practical networking exercise carried out using Cisco Packet Tracer to observe and analyze the interaction between a client (PC) and a server. The activity focuses on understanding how a client requests a web page from a server, how DNS resolves a domain name to an IP address, and how HTTP delivers the requested web content. The exercise demonstrates fundamental concepts in client–server communication, application-layer protocols, and packet flow through the OSI model.",
      sections: [
        {
          title: "Objectives",
          content: "The objectives of this activity were to observe how a client interacts with a server in a networked environment, to understand the role of DNS in resolving domain names to IP addresses, to analyze how HTTP is used to request and deliver a web page, and to inspect Protocol Data Units (PDUs) and understand how data moves through the OSI layers."
        },
        {
          title: "Background and Scenario",
          content: "In real-world networks, client devices such as desktop computers rely on servers to provide services including DNS, web hosting (HTTP), file transfer, and IP addressing. While physical networks can support many services, simulated environments like Packet Tracer provide a controlled platform with selected services for learning purposes. In this activity, a simple network topology was used, consisting of one PC (client) and one server configured to provide DNS services and HTTP web services. The goal was to observe the complete process that occurs when a user enters a web address (www.example.com) into a browser, including DNS name resolution, HTTP request transmission, and web page delivery from the server to the client."
        },
        {
          title: "Methodology",
          content: "Packet Tracer was switched from Realtime Mode to Simulation Mode using the simulation mode icon located at the bottom-right of the workspace. Simulation mode allows packet-level visualization of network traffic.",
          subsections: [
            {
              title: "Configuring Event List Filters",
              content: "To focus only on relevant traffic, all event filters were cleared using Show All/None. Only DNS (under IPv4) and HTTP (under Miscellaneous) protocols were selected. This ensured that only DNS and HTTP events were captured and displayed during the simulation."
            },
            {
              title: "Requesting a Web Page",
              content: "On the client PC, the Desktop tab was opened, the Web Browser application was launched, and the URL www.example.com was entered with the Go button clicked. The PC window was minimized to allow observation of packet flow in the simulation panel."
            },
            {
              title: "Running the Simulation",
              content: "The Play button in the Simulation Panel was used to run the simulation. Packet Tracer animated the exchange between the PC and the server and logged each event in the Event List. The following sequence of events was observed: The PC sent a DNS request to resolve the domain name, the server responded with the corresponding IP address, the PC sent an HTTP request to the server, the server transmitted the web page in two HTTP segments, and the PC acknowledged receipt of the data."
            }
          ]
        },
        {
          title: "PDU Analysis",
          content: "The PDU Information window was accessed by clicking the colored box in the Event List for the first recorded event. This provided detailed packet-level information.",
          subsections: [
            {
              title: "OSI Layer Examination",
              content: "The PDU Information Window displays how data is processed across the OSI model. By clicking Next Layer >>, each layer was examined. Application Layer shows DNS and HTTP requests and responses. Transport Layer shows TCP segmentation and reliability mechanisms. Network Layer shows IP addressing and routing. Data Link Layer shows framing and MAC addressing. Physical Layer shows transmission of bits. Reviewing multiple PDUs gave a complete picture of how a web request is constructed, transmitted, and acknowledged across the network."
            },
            {
              title: "DNS Query Details",
              content: "Layer 7: DNS | Layer 4: UDP Src Port: 1031, Dst Port: 53 | Layer 3: IP Header Src. IP: 192.168.1.1, Dest. IP: 192.168.1.2 | Layer 2: Ethernet II Header with source and destination MAC addresses | Layer 1: FastEthernet0. The DNS client sends an A DNS query to the DNS server to resolve the domain name to an IP address."
            },
            {
              title: "DNS Response Details",
              content: "The server receives the DNS request on FastEthernet0. Inbound PDU shows Layer 7: DNS with source and destination ports swapped. The server processes the query and responds with the IP address mapping for the requested domain."
            }
          ]
        },
        {
          title: "Results and Observations",
          content: "DNS resolution occurs before any HTTP communication. The server delivers the web page in multiple segments, demonstrating TCP's role in reliable data transfer. Packet Tracer effectively visualizes the step-by-step communication process. Each protocol operates at a specific OSI layer, reinforcing the layered network model."
        },
        {
          title: "Skills Demonstrated",
          content: "This activity demonstrated several key networking skills: Network simulation using Cisco Packet Tracer, client–server communication analysis, DNS and HTTP protocol understanding, OSI model packet inspection, and technical documentation and reporting. This practical knowledge is essential for networking, cybersecurity, and system administration roles."
        }
      ],
      images: [
        {
          src: dnsHttpTopology,
          alt: "DNS and HTTP Network Topology",
          caption: "Cisco Packet Tracer topology showing PC (client) and Server with Simulation Panel in DNS/HTTP filter mode"
        },
        {
          src: dnsHttpSimulation,
          alt: "DNS/HTTP Simulation Event List",
          caption: "Simulation mode capturing DNS and HTTP traffic events between PC and Server"
        },
        {
          src: dnsHttpWebBrowser,
          alt: "Web Browser Request",
          caption: "PC Web Browser accessing www.example.com and receiving the Cisco Packet Tracer welcome page"
        },
        {
          src: dnsHttpPduClient,
          alt: "Client PDU Information",
          caption: "OSI Model view of outbound DNS query from PC showing Layer 4 UDP (port 53), Layer 3 IP addresses, and Layer 2 Ethernet framing"
        },
        {
          src: dnsHttpPduServer,
          alt: "Server PDU Information",
          caption: "Server PDU Information showing inbound and outbound DNS processing with MAC address swapping and port translation"
        }
      ],
      conclusion: "This activity successfully demonstrated the interaction between a client and a server during a web request. By using Packet Tracer's simulation mode and PDU inspection tools, it was possible to observe how DNS and HTTP work together to deliver web content. The exercise strengthened understanding of client–server architecture, DNS name resolution, HTTP communication, and OSI model layer interactions."
    }
  },
  {
    id: "http-tcp-web-request",
    title: "Observing a Web Request Using HTTP and TCP",
    description: "Analysis of client–server communication during a web request, examining DNS resolution, HTTP delivery, and TCP connection management using Complex PDUs in Cisco Packet Tracer Simulation Mode.",
    tags: ["Cisco Packet Tracer", "HTTP", "TCP", "DNS", "Simulation", "Complex PDU"],
    type: "report",
    category: "networking",
    documentation: {
      introduction: "This report documents a Packet Tracer simulation designed to observe and analyze client–server communication during a web request. The activity focuses on how a client verifies connectivity to a web server, requests web services using HTTP, and how the underlying TCP protocol manages reliable data transfer. The simulation provides insight into how application-layer web requests translate into multiple packets at the transport and network layers.",
      sections: [
        {
          title: "Objectives",
          content: "The objectives of this activity were to verify connectivity between a client and a web server, observe DNS name resolution during a web request, analyze HTTP communication between a client and a server, examine TCP behavior including connection setup and acknowledgements, and visualize packet flow using Packet Tracer Simulation Mode."
        },
        {
          title: "Network Scenario Overview",
          content: "The simulated network consisted of an External Client (PC), a web server hosting the domain ciscolearn.web.com, and supporting DNS services to resolve the domain name to an IP address. The client accessed the server using both ICMP (ping) and HTTP (web browser) to observe different types of network traffic."
        },
        {
          title: "Verifying Connectivity to the Web Server",
          content: "From the External Client, the Command Prompt was opened via the Desktop tab. The command 'ping ciscolearn.web.com' was executed. The ping output displayed the IP address 172.16.15.200 corresponding to ciscolearn.web.com. This IP address was provided by the DNS server, demonstrating DNS name resolution in action. The successful ping confirmed that the client could reach the web server at the network layer.",
          subsections: [
            {
              title: "Ping Results",
              content: "Pinging 172.16.15.200 with 32 bytes of data: Reply from 172.16.15.200: bytes=32 time=1ms to 11ms TTL=126. Packets: Sent = 4, Received = 3, Lost = 1 (25% loss). This confirmed network layer connectivity to the web server."
            }
          ]
        },
        {
          title: "Connecting to the Web Server via HTTP",
          content: "From the External Client Desktop, the Web Browser was opened and the URL ciscolearn.web.com was entered. The web page titled 'Welcome to the CiscoLearn Web Center' was successfully displayed, confirming that the server was reachable at the application layer using HTTP. The page content explained how DNS resolves domain names to IP addresses and how HTTP uses port 80 for web requests."
        },
        {
          title: "Viewing and Comparing HTML Code",
          content: "On the server side, the ciscolearn.web.com server was selected from the logical topology. The Services tab was opened, followed by the HTTP tab. The index.html file was opened in edit mode. The HTML markup on the server was compared with the rendered web page displayed in the client's browser. This demonstrated how HTML code stored on a server is interpreted and displayed by a web browser on a client device.",
          subsections: [
            {
              title: "Server-Side HTML",
              content: "The server stores multiple HTML files including copyrights.html, helloworld.html, and index.html. The index.html file contains HTML markup with font formatting, headers of different sizes, and text styling examples that the browser renders into a formatted web page."
            }
          ]
        },
        {
          title: "Observing Traffic in Simulation Mode",
          content: "Packet Tracer was switched to Simulation Mode to observe packet-level communication. The Edit Filters option was configured to show only TCP and HTTP under the Misc tab, ensuring only web-related traffic was captured during the simulation.",
          subsections: [
            {
              title: "Creating a Complex PDU",
              content: "A Complex PDU was created to simulate a web request with the following settings: Source Device: External Client | Application: HTTP | Destination IP: 172.16.15.200 | Starting Source Port: 1000 | Destination Port: 80 | Periodic Interval: 120 seconds. This generated repeated HTTP traffic for observation."
            },
            {
              title: "Traffic Flow Observation",
              content: "The simulation was started and multiple packets were observed being exchanged between the client and server. The animation showed packets traveling through the RemoteSwitch, Internet cloud, and WebSwitch before reaching the ciscolearn.web.com server."
            }
          ]
        },
        {
          title: "Results and Analysis",
          content: "The web request generated multiple TCP packets, not a single packet. TCP established a connection before data transfer and acknowledged receipt of packets. HTTP traffic relies on TCP, which increases overhead due to connection setup (three-way handshake), acknowledgements, and data segmentation. This demonstrated why web traffic involves significantly more packets than simple ICMP pings.",
          subsections: [
            {
              title: "TCP Overhead Explanation",
              content: "Unlike a simple ping which sends ICMP packets directly, HTTP over TCP requires: SYN packet for connection initiation, SYN-ACK for connection acknowledgment, ACK to complete handshake, HTTP request transmission, HTTP response (potentially multiple segments), and acknowledgements for each segment received."
            }
          ]
        },
        {
          title: "Skills Demonstrated",
          content: "This activity demonstrated proficiency in Packet Tracer Simulation Mode analysis, DNS name resolution understanding, HTTP and TCP protocol interaction, packet-level traffic inspection using Complex PDUs, and technical reporting and documentation."
        }
      ],
      images: [
        {
          src: httpTcpTopology,
          alt: "HTTP TCP Network Topology",
          caption: "Cisco Packet Tracer logical topology showing External Client, DNS Server, RemoteSwitch, Internet cloud, WebSwitch, and web servers (ciscolearn.web.com and test.web.com)"
        },
        {
          src: httpTcpPing,
          alt: "Ping Command Output",
          caption: "Command Prompt showing successful ping to ciscolearn.web.com (172.16.15.200) with DNS resolution and round-trip times of 1-11ms"
        },
        {
          src: httpTcpBrowser,
          alt: "Web Browser Display",
          caption: "CiscoLearn Web Center page displayed in client browser, explaining DNS resolution and HTTP port 80 communication"
        },
        {
          src: httpTcpServerServices,
          alt: "Server HTTP Services",
          caption: "Server Services tab showing HTTP configuration with available HTML files: copyrights.html, helloworld.html, and index.html"
        },
        {
          src: httpTcpHtmlCode,
          alt: "Server HTML Source Code",
          caption: "Raw HTML source code of index.html showing markup for headings, font colors, and text formatting that renders in the client browser"
        },
        {
          src: httpTcpComplexPdu,
          alt: "Complex PDU Configuration",
          caption: "Complex PDU settings panel configured for HTTP application to 172.16.15.200 with source port 1000, destination port 80, and 120-second periodic interval"
        },
        {
          src: httpTcpSimulation,
          alt: "Simulation Mode Traffic Flow",
          caption: "Packet Tracer simulation showing HTTP PDU envelope traveling from External Client through RemoteSwitch toward the Internet and web server"
        }
      ],
      conclusion: "This activity provided a clear visualization of how web requests function at multiple layers of the network. While a user experiences a simple web page load, the underlying process involves DNS resolution, TCP connection establishment, HTTP requests, and acknowledgements. By using Simulation Mode and Complex PDUs in Packet Tracer, it was possible to understand the hidden complexity behind everyday web browsing and the importance of TCP in ensuring reliable data delivery."
    }
  }
];

export const categories = [
  { id: "all", name: "All Projects" },
  { id: "security", name: "Security" },
  { id: "networking", name: "Networking" },
  { id: "development", name: "Development" },
];
