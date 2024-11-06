
export type ProductType = {
    id: number;
    name: string;
    description: string;
    image: string;
    about: string | null;
    features: string[];
    specifications: string[];
    link: string;
}

export const products: ProductType[] = [
    {
        id: 1,
        name: "SNet Portable String Monitoring Device",
        description: "The SNet Portable String Monitoring Device is a cutting-edge PV string monitoring system designed to precisely detect abnormal conditions within a solar power plant.",
        image: "/assets/products/7-min-removebg-preview.png",
        about:"The SNet Portable String Monitoring Device is a cutting-edge PV string monitoring system designed to precisely detect abnormal conditions within a solar power plant. It monitors all strings within a Combiner Box without disrupting power generation.",
        features:[
            "Seamless 4G Internet Communication",
            "Easy Retrofit Installation",
            "Compact Design with Integrated Power Supply",
            "Safe and Effortless Current Measurement",
            "Seamless Integration with Modbus/RTU Communication"
        ],
        specifications:[
            "12 to 24-channel current measurement, supporting up to 35 A DC.",
            "Detection of reverse currents of up to -5 A.",
            "The SNet unit is powered directly from the solar string.",
            "Voltage measurement up to 1500 V DC in any grounded PV system.",
        ],
        link: "/products/1"
    },
    {
        id: 2,
        name: "SNet - LoRa",
        description: "Advanced LoRa Technology (wireless) for Reliable Data Acquisition and Transmission",
        image: "/assets/products/1-min-removebg-preview.png",
        about:"",
        features:[
            "Advanced LoRa Technology (wireless) for Reliable Data Acquisition and Transmission.",
            "The SNet LoRa series is designed for seamless data acquisition through LoRa technology, supporting wireless sensors and wireless RS485 serial data conversion.",
            "This versatile solution finds applications in various industries, including energy, chemical plants, water pipelines, hospitals, and more, for temperature and humidity collection and monitoring.",
        ],
        specifications:[
            "Working voltage design, supports 5-12VDC power supply, and anti- reverse protection design.",
            "Using local SSH, remote access to set parameter, easy to operate and easy to use.",
            "Modbus TCP protocol and Modbus RTU protocol are Compatible with transparent transmission.",
            "Adopt time division multiplexing, multi-channel mounting, less interference, ore mounting nodes, can support up to 250 Devic collecting points.",
            "Data encryption transmission.",
            "Maximum communication distance: 12Km. (Test in an empty area, under the 20dBm transmitting power and 6dBi antenna gain, 865/432MHz)",
            "Supports high speed bidirectional communication.",
            "Supports point to point or multiple points data transmission.",
            "Converting RS485 serial port data to wireless transmission.",
            "Programmable ISM Frequency band.",
            "Supports ESD protection.",
            "Supports RS485 anti surge.",
        ],
        link:'/products/2',
    },
    {
        id: 3,
        name: "SNet String Monitoring Box",
        description: "We are the only Indian manufacturer to offer a String Monitoring Box with our own proprietary monitoring card featuring LoRa technology for data communication.",
        image: "/assets/products/6-min-removebg-preview.png",
        about:"",
        features:[
            "Maximize Energy Production: Ensure each solar string is performing at its peak, optimizing your energy output.",
            "Reduce Downtime: Instantly detect issues and take corrective action to minimize system downtime.",
            "Cost-Efficiency: Improve system ROI with increased energy production and reduced maintenance costs.",
            "Remote Access: Monitor your solar installation from anywhere, simplifying management and troubleshooting.",
            "Proven Reliability: Rely on a product designed by experts with a deep understanding of the industry.",
        ],
        specifications:[
            "Monitoring Technology: LoRa (wireless technology)",
            "Input Voltage: 1000-1500VDC",
            "Number of Strings: 8/12/16/24",
            "Protection Rating: IP65",
            "Dimensions: [Specify]",
            "Certifications: CE, ROHS, ISO",
        ],
        link:'/products/3'
    },
    {
        id: 4,
        name: "SNet RS485 to Ethernet Convertor",
        description: "The SNet RS485 to Ethernet Converter links MODBUS TCP and RTU devices, allowing up to 10 TCP masters and unlimited RTU clients to connect. Configurable via an embedded HTTP module, it supports customizable IP, port, and baud rate settings.",
        image: "/assets/products/3-min-removebg-preview.png",
        about:"",
        features:[
            "Acts as MODBUS TCP Slave and MODBUS RTU Master",
            "Supports standard MODBUS commands",
            "Embedded HTTP module to configure static IP and Port number",
            "Provision to condigure static IP and Port number",
            "Up to ten TCP masters can connect to the device",
            "No limit for number of RTU clients",
            "Optional RS485/RS232 Isolation",
            "RS232/RS485 configurable Baud rate (1200-230400)",
            "Highly Reliable and Low cost",
        ],
        specifications:[],
        link:'/products/4',
    },
    {
        id: 5,
        name: "SNet IoT Gateway",
        description: "Unlock the Power of Real-Time Information for Your Solar Power Systems",
        image: "/assets/products/2-min-removebg-preview.png",
        about:"",
        features:[
            "Digital Inputs: For remote monitoring.",
            "Digital Outputs: For remote controls.",
            "RS232 and RS485 Ports: For data acquisition.",
            "Supports Protocols: Including HTTP, TCP/IP, FTP, and MQTT for data communication.",
            "Programmable Automation Logic: For digital outputs.",
            "Built-In RTC: Real-time clock.",
            "Low Cost: Cost-effective solution.",
            "GSM: 850/900/1800/1900MHz GPRS Class 10",
            "Ultra-Low Consumption: Energy-efficient design.",
            "Operating Temperature: -40~ +85°C",
            "Sensitivity: -109dBm (850/900MHz), -108dBm (1800/1900MHz)",
            "Inputs: 2 Digital Inputs",
            "Outputs: 2 Digital Outputs",
            "UART Ports: 1 RS232/TTL UART, 1 RS485/TTL UART",
            "Input Power: 9-24V DC",
            "Sleep Mode: For low power consumption",
        ],
        specifications:[],
        link:'/products/5',
    },
];