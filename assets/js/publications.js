/* ------------------------------------------------------------------
   PUBLICATIONS DATA
   Edit this file to add a new paper. Newest first.
   Fields:
     y      year (number)
     type   "journal" | "conference" | "chapter"
     title  paper title
     authors author string
     venue  journal / conference / book name and volume info
     imf    impact factor as printed on the CV (optional)
     doi    full URL (optional). If omitted, the site builds a
            Google Scholar search link from the title.
-------------------------------------------------------------------*/

const PUBLICATIONS = [
  // ---------------------------------------------------------- 2026
  { y:2026, type:"journal", title:"Context-aware temporal fusion transformer for short-term electric vehicle charging stations demand prediction", authors:"A. Hussain, Q. C. Lu, K. N. Qureshi", venue:"Sustainable Energy, Grids and Networks, vol. 47, art. 102444", imf:"5.7", doi:"https://doi.org/10.1016/j.segan.2026.102444" },
  { y:2026, type:"journal", title:"On-demand dynamic charging pricing strategy for Electric Vehicles", authors:"A. Hussain, Q. C. Lu, K. N. Qureshi, K. Javeed", venue:"Egyptian Informatics Journal, vol. 33, art. 100921", imf:"4.2", doi:"https://doi.org/10.1016/j.eij.2026.100921" },

  // ---------------------------------------------------------- 2025
  { y:2025, type:"journal", title:"Securing edge based smart city networks with software defined networking and zero trust architecture", authors:"A. Iftikhar, F. B. Hussain, K. N. Qureshi, M. Shiraz, M. Sookhak", venue:"Journal of Network and Computer Applications, p. 104341", imf:"8.0" },
  { y:2025, type:"journal", title:"A large-scale dataset and robust multifeature representation with maximum correlation-based feature fusion and matching for apparel image retrieval", authors:"M. Murtaza, M. Fayyaz, M. Yasmin, M. Anwar, K. N. Qureshi, U. A. Raza", venue:"Expert Systems, vol. 42, no. 9, e70097", imf:"2.3" },
  { y:2025, type:"journal", title:"GST-Former: GCN-based Spatial-Temporal Transformer Model for Interaction-Aware Vehicle Trajectory Prediction", authors:"A. Aslam, X. Yao, K. N. Qureshi, A. Hussain, K. Z. Ghafoor", venue:"Journal of Engineering Research", imf:"2.2", doi:"https://doi.org/10.1016/j.jer.2025.07.005" },
  { y:2025, type:"journal", title:"Advancing healthcare systems: A tri-tier architecture by using data communication, AI data generative and regulation and compliance standards", authors:"K. N. Qureshi, H. Nafea, P. Kim", venue:"Expert Systems, vol. 42, no. 2, e13742", imf:"2.3" },
  { y:2025, type:"journal", title:"A review of intelligent data analysis: Machine learning approaches for addressing class imbalance in healthcare, challenges and perspectives", authors:"B. H. Aubaidan, R. A. Kadir, M. T. Lajb, K. N. Qureshi et al.", venue:"Intelligent Data Analysis", imf:"0.9", doi:"https://doi.org/10.1177/1088467X241305509" },
  { y:2025, type:"journal", title:"A blockchain based secure authentication technique for ensuring user privacy in edge based smart city networks", authors:"A. Iftikhar, K. N. Qureshi, F. B. Hussain, M. Shiraz, M. Sookhak", venue:"Journal of Network and Computer Applications, vol. 233, p. 104052", imf:"7.7" },

  // ---------------------------------------------------------- 2024
  { y:2024, type:"journal", title:"Blockchain-Based Trust and Authentication Model for Detecting and Isolating Malicious Nodes in Flying Ad Hoc Networks", authors:"K. N. Qureshi, H. O. Nafea, I. Tariq, K. Z. Ghafoor", venue:"IEEE Access", imf:"3.4", doi:"https://doi.org/10.1109/ACCESS.2024.3425153" },
  { y:2024, type:"journal", title:"Enhanced centroid-based energy-efficient clustering routing protocol for serverless based wireless sensor networks", authors:"S. Karim, K. N. Qureshi, A. O. Ibrahim, A. W. Abulfaraj, K. Z. Ghafoor", venue:"Journal of King Saud University, Computer and Information Sciences, p. 102067", imf:"6.9", doi:"https://doi.org/10.1016/j.jksuci.2024.102067" },
  { y:2024, type:"journal", title:"Lightweight Hybrid Cryptography Algorithm for Wireless Body Area Sensor Networks Using Cipher Technique", authors:"A. Raziq, K. N. Qureshi, A. Yar, K. Z. Ghafoor, G. Jeon", venue:"Computer Assisted Methods in Engineering and Science", imf:"2.1", doi:"http://dx.doi.org/10.24423/cames.2024.594" },
  { y:2024, type:"journal", title:"AI enabled: a novel IoT-based fake currency detection using millimeter wave (mmWave) sensor", authors:"F. Niaz, J. Zhang, M. Khalid, K. N. Qureshi, Y. Zheng, Younas", venue:"Computing", imf:"3.3", doi:"https://doi.org/10.1007/s00607-024-01300-2" },

  // ---------------------------------------------------------- 2023
  { y:2023, type:"journal", title:"Security Provision by Using Detection and Prevention Methods to Ensure Trust in Edge-Based Smart City Networks", authors:"A. Iftikhar, K. N. Qureshi, A. A. Altalbe, K. Javeed", venue:"IEEE Access, vol. 11, pp. 137529-137547", imf:"3.9", doi:"https://doi.org/10.1109/ACCESS.2023.3338550" },
  { y:2023, type:"journal", title:"Security, Trust and Privacy Risks, Responses, and Solutions for High-Speed Smart Cities Networks: A Systematic Literature Review", authors:"A. Iftikhar, K. N. Qureshi, M. Shiraz, S. Albahli", venue:"Journal of King Saud University, Computer and Information Sciences, p. 101788", imf:"6.9", doi:"https://doi.org/10.1016/j.jksuci.2023.101788" },
  { y:2023, type:"journal", title:"State-Based Energy Calculation Scheme for Internet of Things Networks", authors:"R. W. Anwar, F. Outay, K. N. Qureshi, S. Iqbal, K. Z. Ghafoor", venue:"IEEE Access", imf:"3.9", doi:"https://doi.org/10.1109/ACCESS.2023.3318005" },
  { y:2023, type:"journal", title:"An Enhanced Intelligent Intrusion Detection System to Secure E-Commerce Communication Systems", authors:"A. Hussain, K. N. Qureshi, K. Javeed, M. Alhussein", venue:"Computer Systems Science and Engineering, vol. 47, no. 2, pp. 2513-2528", imf:"2.2" },
  { y:2023, type:"journal", title:"Congestion aware reward based scheme based on delay tolerant networks for emergency evacuation in 6G-based internet of things networks", authors:"K. M. Awan, M. Tariq, K. N. Qureshi, T. Newe, G. Jeon", venue:"Transactions on Emerging Telecommunications Technologies, e4832", imf:"3.6", doi:"https://doi.org/10.1002/ett.4832" },
  { y:2023, type:"journal", title:"An IoT System and MODIS Images Enable Smart Environmental Management for Mekong Delta", authors:"V. H. Phan, D. P. H. Pham, T. V. Pham, K. N. Qureshi, C. Pham-Quoc", venue:"Future Internet, vol. 15, no. 7, p. 245", imf:"3.4" },
  { y:2023, type:"journal", title:"Internet of Things enables smart solid waste bin management system for a sustainable environment", authors:"K. N. Qureshi, A. Khan, S. U. U. Jamil, B. Sharma, G. Jeon", venue:"Environmental Science and Pollution Research", imf:"5.8", doi:"https://doi.org/10.1007/s11356-023-28611-9" },
  { y:2023, type:"journal", title:"Integration of Interdomain Flow-Rule in Software-Defined Networks for Embedded Internet of Things Devices", authors:"S. K. Afridi, S. Iqbal, K. N. Qureshi, S. Majeed, G. Jeon", venue:"Electronics, vol. 12, no. 5, p. 1172", imf:"2.69" },
  { y:2023, type:"journal", title:"Decision-Based Routing for Unmanned Aerial Vehicles and Internet of Things Networks", authors:"M. Ali, K. N. Qureshi, T. Newe, K. Aman, A. O. Ibrahim, M. Almujaly, W. Nagmeldin", venue:"Applied Sciences, vol. 13, no. 4, p. 2131", imf:"2.84" },
  { y:2023, type:"journal", title:"Delay Optimization in LoRaWAN by Employing Adaptive Scheduling Algorithm with Unsupervised Learning", authors:"Z. Ali, K. N. Qureshi, A. S. Al-Shamayleh, A. Akhunzada, A. Raza, M. F. U. Butt", venue:"IEEE Access", imf:"3.48", doi:"https://doi.org/10.1109/ACCESS.2023.3234188" },

  // ---------------------------------------------------------- 2022
  { y:2022, type:"journal", title:"ISDA-BAN: interoperability and security based data authentication scheme for body area network", authors:"F. Kiyani, K. N. Qureshi, K. Z. Ghafoor, G. Jeon", venue:"Cluster Computing", imf:"2.30", doi:"https://doi.org/10.1007/s10586-022-03823-9" },
  { y:2022, type:"journal", title:"Intelligent Deep Learning for Anomaly-Based Intrusion Detection in IoT Smart Home Networks", authors:"N. Butt, A. Shahid, K. N. Qureshi, S. Haider, A. O. Ibrahim, F. Binzagr, N. Arshad", venue:"Mathematics, vol. 10, no. 23, p. 4598", imf:"2.59" },
  { y:2022, type:"journal", title:"A Cyber Secure Medical Management System by Using Blockchain", authors:"M. Rehman, I. T. Javed, K. N. Qureshi, T. Margaria, G. Jeon", venue:"IEEE Transactions on Computational Social Systems", imf:"4.75", doi:"https://doi.org/10.1109/TCSS.2022.3215455" },
  { y:2022, type:"journal", title:"Edge Based Priority-Aware Dynamic Resource Allocation for Internet of Things Networks", authors:"Z. Ali, K. N. Qureshi, K. Mustafa, R. Bukhsh, S. Aslam, H. Mujlid, K. Z. Ghafoor", venue:"Entropy, vol. 24, no. 11, p. 1607", imf:"2.74" },
  { y:2022, type:"journal", title:"Data Analytics, Self-Organization, and Security Provisioning for Smart Monitoring Systems", authors:"R. W. Anwar, K. N. Qureshi, W. Nagmeldin, A. Abdelmaboud, K. Z. Ghafoor, I. T. Javed, N. Crespi", venue:"Sensors, vol. 22, no. 19, p. 7201", imf:"3.85" },
  { y:2022, type:"journal", title:"A Software-Defined Network-based Intelligent Decision Support System for the Internet of Things Networks", authors:"K. N. Qureshi, A. Alhudhaif, M. Azahar, I. T. Javed, G. Jeon", venue:"Wireless Personal Communications", imf:"2.02", doi:"https://doi.org/10.1007/s11277-022-09626-w" },
  { y:2022, type:"journal", title:"Towards Enabling Fault Tolerance and Reliable Green Communications in Next-Generation Wireless Systems", authors:"R. S. Rathore, O. Kaiwartya, K. N. Qureshi, I. T. Javed, W. Nagmeldin, A. Abdelmaboud, N. Crespi", venue:"Applied Sciences, vol. 12, no. 17, p. 8870", imf:"2.84" },
  { y:2022, type:"journal", title:"Coverage Area Decision Model by Using Unmanned Aerial Vehicles Base Stations for Ad Hoc Networks", authors:"S. Majeed, A. Sohail, K. N. Qureshi, S. Iqbal, I. T. Javed, N. Crespi, W. Nagmeldin, A. Abdelmaboud", venue:"Sensors, vol. 22, no. 16, p. 6130", imf:"3.85" },
  { y:2022, type:"journal", title:"Exploiting optimised communities in directed weighted graphs for link prediction", authors:"F. Abbasi, M. Muzammal, K. N. Qureshi, I. T. Javed, T. Margaria, N. Crespi", venue:"Online Social Networks and Media, vol. 31, p. 100222", doi:"https://doi.org/10.1016/j.osnem.2022.100222" },
  { y:2022, type:"journal", title:"Terahertz fading model for wireless nanosensor networks in advanced medical manufacturing technologies", authors:"I. T. Javed, K. N. Qureshi, F. Alharbi, G. Jeon", venue:"The International Journal of Advanced Manufacturing Technology", imf:"3.56", doi:"https://doi.org/10.1007/s00170-022-09660-9" },
  { y:2022, type:"journal", title:"A Comparative Study of Web Application Security Parameters: Current Trends and Future Directions", authors:"J. Shahid, M. K. Hameed, I. T. Javed, K. N. Qureshi, M. Ali, N. Crespi", venue:"Applied Sciences, vol. 12, no. 8, p. 4077", imf:"2.68" },
  { y:2022, type:"journal", title:"Link-based penalized trust management scheme for preemptive measures to secure the edge-based internet of things networks", authors:"A. Ahmed, K. N. Qureshi, M. Anwar, F. Masud, J. Imtiaz, G. Jeon", venue:"Wireless Networks", imf:"2.60" },
  { y:2022, type:"journal", title:"Blockchain-Based Privacy-Preserving Authentication Model Intelligent Transportation Systems", authors:"K. N. Qureshi, G. Jeon, M. M. Hassan, M. R. Hassan, K. Kaur", venue:"IEEE Transactions on Intelligent Transportation Systems", imf:"6.49", doi:"https://doi.org/10.1109/TITS.2022.3158320" },
  { y:2022, type:"journal", title:"Secure Data Communication for Wireless Mobile Nodes in Intelligent Transportation Systems", authors:"K. N. Qureshi, A. Alhudhaif, S. W. Haider, S. Majeed, G. Jeon", venue:"Microprocessors and Microsystems, p. 104501", imf:"1.53" },
  { y:2022, type:"journal", title:"Security Provision for Protecting Intelligent Sensors and Zero Touch Devices by using Blockchain Method for the Smart Cities", authors:"K. Un Nisa, A. Alhudhaif, K. N. Qureshi, H. J. Hadi, G. Jeon", venue:"Microprocessors and Microsystems, p. 104503", imf:"1.53" },
  { y:2022, type:"journal", title:"Trust-oriented peered customized mechanism for malicious nodes isolation for flying ad hoc networks", authors:"W. Buksh, Y. Guo, S. Iqbal, K. N. Qureshi, J. Lloret", venue:"Transactions on Emerging Telecommunications Technologies, e4489", imf:"2.64" },
  { y:2022, type:"journal", title:"Artificial general intelligence-based rational behavior detection using cognitive correlates for tracking online harms", authors:"S. Naseem, A. Alhudhaif, M. Anwar, K. N. Qureshi, G. Jeon", venue:"Personal and Ubiquitous Computing", imf:"3.01" },
  { y:2022, type:"journal", title:"A Blockchain-Based Efficient, Secure and Anonymous Conditional Privacy-Preserving and Authentication Scheme for the Internet of Vehicles", authors:"K. N. Qureshi, L. Shahzad, A. Abdelmaboud, T. A. Elfadil Eisa, B. Alamri, I. T. Javed, A. Al-Dhaqm, N. Crespi", venue:"Applied Sciences, vol. 12, no. 1, p. 476", imf:"2.68" },

  // ---------------------------------------------------------- 2021
  { y:2021, type:"journal", title:"Trust aware energy management system for smart homes appliances", authors:"K. N. Qureshi, A. Alhudhaif, A. Hussain, S. Iqbal, G. Jeon", venue:"Computers and Electrical Engineering, p. 107641", imf:"3.82" },
  { y:2021, type:"journal", title:"Neurocomputing for Internet of Things: Object Recognition and Detection Strategy", authors:"K. N. Qureshi, O. Kaiwartya, G. Jeon, F. Piccialli", venue:"Neurocomputing", imf:"3.94" },
  { y:2021, type:"journal", title:"Automised flow rule formation by using machine learning in software defined networks based edge computing", authors:"S. Iqbal, H. Maryam, K. N. Qureshi, I. T. Javed, N. Crespi", venue:"Egyptian Informatics Journal", imf:"5.72" },
  { y:2021, type:"journal", title:"Next-Generation Indoor Wireless Systems: Compatibility and Migration Case Study", authors:"P. Dhawankar, A. Kumar, N. Crespi, K. Busawon, K. N. Qureshi, I. T. Javed, S. Prakash, O. Kaiwartya", venue:"IEEE Access", imf:"3.37" },
  { y:2021, type:"journal", title:"Data analysis based dynamic prediction model for public security in internet of multimedia things networks", authors:"K. N. Qureshi, A. Alhudhaif, N. Arshad, U. Kalsoom, G. Jeon", venue:"Multimedia Tools and Applications", imf:"2.76" },
  { y:2021, type:"journal", title:"Nature-Inspired Solution for Coronavirus Disease Detection and its Impact on Existing Healthcare Systems", authors:"K. N. Qureshi, A. Alhudhaif, M. A. Qureshi, G. Jeon", venue:"Computers and Electrical Engineering, p. 107411", imf:"3.82" },
  { y:2021, type:"journal", title:"Self-assessment and deep learning-based coronavirus detection and medical diagnosis systems for healthcare", authors:"K. N. Qureshi, A. Alhudhaif, M. Ali, M. A. Qureshi, G. Jeon", venue:"Multimedia Systems", imf:"1.94" },
  { y:2021, type:"journal", title:"Network Functions Virtualization for Mobile Core and Heterogeneous Cellular Networks", authors:"K. N. Qureshi, E. Ahmad, M. Anwar, K. Z. Ghafoor, G. Jeon", venue:"Wireless Personal Communications", imf:"1.67" },
  { y:2021, type:"journal", title:"Partially Overlapped Channel Assignment for Cloud-Based Heterogeneous Cellular and Mesh Networks", authors:"S. Iqbal, K. N. Qureshi, S. Majeed, K. Z. Ghafoor, G. Jeon", venue:"Wireless Personal Communications", imf:"1.67" },
  { y:2021, type:"journal", title:"Authentication scheme for Unmanned Aerial Vehicles based Internet of Vehicles networks", authors:"K. N. Qureshi, M. A. S. Sandila, I. T. Javed, T. Margaria, L. Aslam", venue:"Egyptian Informatics Journal", imf:"3.94" },
  { y:2021, type:"journal", title:"Context-aware text classification system to improve the quality of text: A detailed investigation and techniques", authors:"Z. Saleem, A. Alhudhaif, K. N. Qureshi, G. Jeon", venue:"Concurrency and Computation: Practice and Experience, e6489", imf:"1.54" },
  { y:2021, type:"journal", title:"Health-ID: A Blockchain-Based Decentralized Identity Management for Remote Healthcare", authors:"I. T. Javed, F. Alharbi, B. Bellaj, T. Margaria, N. Crespi, K. N. Qureshi", venue:"Healthcare, vol. 9, no. 6, p. 712", imf:"2.65" },
  { y:2021, type:"journal", title:"Internet of Things for education: A smart and secure system for schools monitoring and alerting", authors:"K. N. Qureshi, A. Naveed, Y. Kashif, G. Jeon", venue:"Computers and Electrical Engineering, vol. 93, p. 107275", imf:"3.82" },
  { y:2021, type:"journal", title:"A trust evaluation model for secure data aggregation in smart grids infrastructures for smart cities", authors:"K. N. Qureshi, M. N. ul Islam, G. Jeon", venue:"Journal of Ambient Intelligence and Smart Environments, pp. 1-18", imf:"1.60" },
  { y:2021, type:"journal", title:"Fully Integrated Data Communication Framework by Using Visualization Augmented Reality for Internet of Things Networks", authors:"K. N. Qureshi, A. Alhudhaif, R. W. Anwar, S. N. Bhatti, G. Jeon", venue:"Big Data", imf:"3.64" },
  { y:2021, type:"journal", title:"Trust and priority-based drone assisted routing and mobility and service-oriented solution for the internet of vehicles networks", authors:"K. N. Qureshi, A. Alhudhaif, A. A. Shah, S. Majeed, G. Jeon", venue:"Journal of Information Security and Applications, vol. 59, p. 102864", imf:"2.33" },
  { y:2021, type:"journal", title:"Survivability of mobile and wireless communication networks by using service oriented Software Defined Network based Heterogeneous Inter-Domain Handoff system", authors:"S. Khan, S. Iqbal, K. N. Qureshi, K. Z. Ghafoor, P. Kim, G. Jeon", venue:"Computer Communications", imf:"2.82" },
  { y:2021, type:"journal", title:"Electric-vehicle energy management and charging scheduling system in sustainable cities and society", authors:"K. N. Qureshi, A. Alhudhaif, G. Jeon", venue:"Sustainable Cities and Society, p. 102990", imf:"5.27" },
  { y:2021, type:"journal", title:"Deep learning-based feature extraction and optimizing pattern matching for intrusion detection using finite state machine", authors:"J. S. Abbasi, F. Bashir, K. N. Qureshi, M. Najam ul Islam, G. Jeon", venue:"Computers and Electrical Engineering, vol. 92, p. 107094", imf:"2.66" },
  { y:2021, type:"journal", title:"Deep learning based cyber bullying early detection using distributed denial of service flow", authors:"M. H. Zaib, F. Bashir, K. N. Qureshi, S. Kausar, M. Rizwan, G. Jeon", venue:"Multimedia Systems", imf:"1.56" },
  { y:2021, type:"journal", title:"PETchain: A Blockchain based Privacy Enhancing Technology", authors:"I. T. Javed, F. Alharbi, T. Margaria, N. Crespi, K. N. Qureshi", venue:"IEEE Access", imf:"3.75", doi:"https://doi.org/10.1109/ACCESS.2021.3064896" },
  { y:2021, type:"journal", title:"Multipath transport control protocol for 5G mobile augmented reality networks", authors:"T. Khan, A. Sohail, K. N. Qureshi, S. Iqbal, G. Jeon", venue:"International Journal of Communication Systems, e4778", imf:"1.32" },
  { y:2021, type:"journal", title:"Systematic Mapping Study on Energy Optimization Solutions in Smart Building Structure: Opportunities and Challenges", authors:"M. S. Aliero, K. N. Qureshi, M. F. Pasha, I. Ghani, R. A. Yauri", venue:"Wireless Personal Communications, pp. 1-37", imf:"1.06" },
  { y:2021, type:"journal", title:"Smart Home Energy Management Systems in Internet of Things networks for green cities demands and services", authors:"M. S. Aliero, K. N. Qureshi, M. F. Pasha, G. Jeon", venue:"Environmental Technology and Innovation, p. 101443", imf:"3.36" },
  { y:2021, type:"journal", title:"An Enhanced Multi-Hop Intersection-Based Geographical Routing Protocol for the Internet of Connected Vehicles Network", authors:"K. N. Qureshi, M. Ahmed, G. Jeon, F. Piccialli", venue:"IEEE Transactions on Intelligent Transportation Systems", imf:"6.32", doi:"https://doi.org/10.1109/TITS.2021.3049429" },
  { y:2021, type:"journal", title:"A secure data parallel processing based embedded system for internet of things computer vision using field programmable gate array devices", authors:"K. N. Qureshi, S. Qayyum, M. N. Ul Islam, G. Jeon", venue:"International Journal of Circuit Theory and Applications, pp. 1-20", imf:"1.58", doi:"https://doi.org/10.1002/cta.2964" },
  { y:2021, type:"journal", title:"Deep learning-based ambient assisted living for self-management of cardiovascular conditions", authors:"M. A. Qureshi, K. N. Qureshi, G. Jeon, F. Piccialli", venue:"Neural Computing and Applications", imf:"4.77" },
  { y:2021, type:"journal", title:"Signature and flow statistics based anomaly detection system in software-defined networking for 6G internet of things network", authors:"M. J. Nazar, A. Alhudhaif, K. N. Qureshi, S. Iqbal, G. Jeon", venue:"International Journal of System Assurance Engineering and Management (Scopus)" },

  // ---------------------------------------------------------- 2020
  { y:2020, type:"journal", title:"Unmanned aerial vehicles optimal airtime estimation for energy aware deployment in IoT-enabled fifth generation cellular networks", authors:"S. Majeed, A. Sohail, K. N. Qureshi, A. Kumar, S. Iqbal, J. Lloret", venue:"EURASIP Journal on Wireless Communications and Networking, vol. 2020, no. 1, pp. 1-14", imf:"1.41" },
  { y:2020, type:"journal", title:"Anomaly Detection and Trust Authority in Artificial Intelligence and Cloud Computing", authors:"K. N. Qureshi, G. Jeon, F. Piccialli", venue:"Computer Networks, p. 107647", imf:"3.11" },
  { y:2020, type:"journal", title:"Beaconless Traffic-Aware Geographical Routing Protocol for Intelligent Transportation System", authors:"S. Din, K. N. Qureshi, M. S. Afsar, J. J. P. C. Rodrigues, A. Ahmad, G. S. Choi", venue:"IEEE Access, vol. 8, pp. 187671-187686", imf:"3.75", doi:"https://doi.org/10.1109/ACCESS.2020.3030982" },
  { y:2020, type:"journal", title:"Minimize the delays in software defined network switch controller communication", authors:"S. Iqbal, K. N. Qureshi, F. Shoaib, A. Ahmad, G. Jeon", venue:"Concurrency and Computation: Practice and Experience, e5940", imf:"1.45" },
  { y:2020, type:"journal", title:"Improved Road Segment-Based Geographical Routing Protocol for Vehicular Ad-hoc Networks", authors:"K. N. Qureshi, F. U. Islam, O. Kaiwartya, A. Kumar, J. Lloret", venue:"Electronics, vol. 9, no. 8, p. 1248", imf:"2.41" },
  { y:2020, type:"journal", title:"Dynamic superframe adaptation using group-based media access control for handling traffic heterogeneity in wireless body area networks", authors:"Y. Zia, F. Bashir, K. N. Qureshi", venue:"International Journal of Distributed Sensor Networks, vol. 16, no. 8", imf:"1.15" },
  { y:2020, type:"journal", title:"Trust management and evaluation for edge intelligence in the Internet of Things", authors:"K. N. Qureshi, A. Iftikhar, S. N. Bhatti, F. Piccialli, F. Giampaolo, G. Jeon", venue:"Engineering Applications of Artificial Intelligence, vol. 94, p. 103756", imf:"4.20" },
  { y:2020, type:"journal", title:"An Interference Aware Energy Efficient Data Transmission Approach for Smart Cities Healthcare Systems", authors:"K. N. Qureshi, M. Q. Tayyab, S. U. Rehman, G. Jeon", venue:"Sustainable Cities and Society, p. 102392", imf:"5.27" },
  { y:2020, type:"journal", title:"Detection of structure query language injection vulnerability in web driven database application", authors:"M. S. Aliero, K. N. Qureshi, M. F. Pasha, A. Ahmad, G. Jeon", venue:"Concurrency and Computation: Practice and Experience, e5936", imf:"1.45" },
  { y:2020, type:"journal", title:"An Accurate and Dynamic Predictive Model for a Smart M-Health System Using Machine Learning", authors:"K. N. Qureshi, S. Din, F. Piccialli", venue:"Information Sciences", imf:"5.91" },
  { y:2020, type:"journal", title:"A Novel and Secure Attacks Detection Framework for Smart Cities Industrial Internet of Things", authors:"K. N. Qureshi, S. S. Rana, A. Ahmed, G. Jeon", venue:"Sustainable Cities and Society, p. 102343", imf:"5.27" },
  { y:2020, type:"journal", title:"Internet of Vehicles: Key Technologies, Network Model, Solutions and Challenges With Future Aspects", authors:"K. N. Qureshi, S. Din, G. Jeon, F. Piccialli", venue:"IEEE Transactions on Intelligent Transportation Systems", imf:"6.32" },
  { y:2020, type:"journal", title:"A distributed software defined networking model to improve the scalability and quality of services for flexible green energy internet for smart grid systems", authors:"K. N. Qureshi, R. Hussain, G. Jeon", venue:"Computers and Electrical Engineering, vol. 84, p. 106634", imf:"3.02" },
  { y:2020, type:"journal", title:"Nature-inspired algorithm-based secure data dissemination framework for smart city networks", authors:"K. N. Qureshi, A. Ahmad, F. Piccialli, G. Casolla, G. Jeon", venue:"Neural Computing and Applications", imf:"4.66" },
  { y:2020, type:"journal", title:"Solutions and Recent Challenges Related to Energy in Wireless Body Area Networks with Integrated Technologies: Applications and Perspectives", authors:"K. N. Qureshi", venue:"Baghdad Science Journal, vol. 17, no. 1 (Suppl.), pp. 0378" },
  { y:2020, type:"journal", title:"Security protocol using elliptic curve cryptography algorithm for wireless sensor networks", authors:"R. Qazi, K. N. Qureshi, F. Bashir, N. U. Islam, S. Iqbal, A. Arshad", venue:"Journal of Ambient Intelligence and Humanized Computing", imf:"4.59" },
  { y:2020, type:"journal", title:"Content-based dynamic superframe adaptation for Internet of Medical Things", authors:"Y. Zia, A. Farhad, F. Bashir, K. N. Qureshi, G. Ahmed", venue:"International Journal of Distributed Sensor Networks, vol. 16, no. 2", imf:"1.64" },
  { y:2020, type:"journal", title:"Self-Assessment Based Clustering Data Dissemination for Sparse and Dense Traffic Conditions for Internet of Vehicles", authors:"K. N. Qureshi, M. M. Idrees, J. Lloret, I. Bosch", venue:"IEEE Access, vol. 8, pp. 10363-10372", imf:"4.10" },
  { y:2020, type:"journal", title:"Link quality and energy utilization based preferable next hop selection routing for wireless body area networks", authors:"K. N. Qureshi, S. Din, G. Jeon, F. Piccialli", venue:"Computer Communications, vol. 149, pp. 382-392", imf:"2.77" },
  { y:2020, type:"journal", title:"Optimized Cluster-Based Dynamic Energy-Aware Routing Protocol for Wireless Sensor Networks in Agriculture Precision", authors:"K. N. Qureshi, M. U. Bashir, J. Lloret, A. Leon", venue:"Journal of Sensors, vol. 2020 (Article of the Year Award)", imf:"2.02", award:true },
  { y:2020, type:"journal", title:"Collaborative energy efficient zone-based routing protocol for multihop Internet of Things", authors:"S. Iqbal, K. N. Qureshi, N. Kanwal, G. Jeon", venue:"Transactions on Emerging Telecommunications Technologies, e3885", imf:"1.26" },
  { y:2020, type:"journal", title:"Systematic Review Analysis on SQLIA Detection and Prevention Approaches", authors:"M. S. Aliero, K. N. Qureshi, M. F. Pasha, I. Ghani, R. A. Yauri", venue:"Wireless Personal Communications, pp. 1-37", imf:"1.54" },
  { y:2020, type:"journal", title:"An algorithm for detecting SQL injection vulnerability using black-box testing", authors:"M. S. Aliero, I. Ghani, K. N. Qureshi, M. F. A. Rohani", venue:"Journal of Ambient Intelligence and Humanized Computing, vol. 11, no. 1, pp. 249-266", imf:"1.91" },

  // ---------------------------------------------------------- 2019
  { y:2019, type:"journal", title:"Distance and signal quality aware next hop selection routing protocol for vehicular ad hoc networks", authors:"K. N. Qureshi, F. Bashir, A. H. Abdullah", venue:"Neural Computing and Applications, pp. 1-14", imf:"4.66" },
  { y:2019, type:"journal", title:"Efficient Non-Linear Covert Channel Detection in TCP Data Streams", authors:"H. Nafea, K. Kifayat, Q. Shi, K. N. Qureshi, B. Askwith", venue:"IEEE Access", imf:"4.10" },
  { y:2019, type:"journal", title:"An adaptive interference-aware and traffic-aware channel assignment strategy for backhaul networks", authors:"S. Iqbal, A. H. Abdullah, K. N. Qureshi", venue:"Concurrency and Computation: Practice and Experience, e5650", imf:"1.17" },
  { y:2019, type:"journal", title:"A priority-based congestion-avoidance routing protocol using IoT-based heterogeneous medical sensors for energy efficiency in healthcare wireless body area networks", authors:"K. M. Awan et al.", venue:"International Journal of Distributed Sensor Networks, vol. 15, no. 6", imf:"1.64" },

  // ---------------------------------------------------------- 2018
  { y:2018, type:"journal", title:"A Dynamic Congestion Control Scheme for safety applications in vehicular ad hoc networks", authors:"K. N. Qureshi, A. H. Abdullah, O. Kaiwartya, S. Iqbal, R. A. Butt, F. Bashir", venue:"Computers and Electrical Engineering, vol. 72, pp. 774-788", imf:"2.19" },
  { y:2018, type:"journal", title:"Cluster-based data dissemination, cluster head formation under sparse, and dense traffic conditions for vehicular ad hoc networks", authors:"K. N. Qureshi, A. H. Abdullah, F. Bashir, S. Iqbal, K. M. Awan", venue:"International Journal of Communication Systems, vol. 31, no. 8, e3533", imf:"1.28" },
  { y:2018, type:"journal", title:"New Trends in Internet of Things, Applications, Challenges, and Solutions", authors:"K. N. Qureshi", venue:"2018" },
  { y:2018, type:"journal", title:"Cybersecurity measures for geocasting in vehicular cyber physical system environments", authors:"S. Kumar, U. Dohare, K. Kumar, D. P. Dora, K. N. Qureshi, R. Kharel", venue:"IEEE Internet of Things Journal, vol. 6, no. 4, pp. 5916-5926", imf:"9.96" },
  { y:2018, type:"journal", title:"Securing data communication in wireless body area networks using digital signatures", authors:"M. Anwar, A. H. Abdullah, R. A. Butt, M. W. Ashraf, K. N. Qureshi, F. Ullah", venue:"Technical Journal, vol. 23, no. 02, pp. 50-55" },
  { y:2018, type:"journal", title:"Green computing for wireless body area networks: energy efficient link aware medical data dissemination approach", authors:"M. Anwar, K. N. Qureshi", venue:"Sensors, vol. 18, no. 10, pp. 3237", imf:"3.03" },
  { y:2018, type:"journal", title:"Green communication for wireless body area networks: Energy aware link efficient routing approach", authors:"M. Anwar et al.", venue:"Sensors, vol. 18, no. 10, p. 3237", imf:"1.64" },
  { y:2018, type:"journal", title:"New trends in internet of things, applications, challenges, and solutions", authors:"Y. A. A. S. Aldeen, K. N. Qureshi", venue:"Telkomnika, vol. 16, no. 3, pp. 1114-1119" },
  { y:2018, type:"journal", title:"Accurate and dynamic predictive model for better prediction in medicine and healthcare", authors:"H. Alanazi, A. Abdullah, K. N. Qureshi, A. Ismail", venue:"Irish Journal of Medical Science, vol. 187, no. 2, pp. 501-513", imf:"1.03" },

  // ---------------------------------------------------------- 2017
  { y:2017, type:"journal", title:"An energy efficient cyclic sleep control framework for ITU PONs", authors:"R. A. Butt, S. M. Idrus, K. N. Qureshi, P. M. A. Shah, N. Zulkifli", venue:"Optical Switching and Networking, vol. 27, pp. 7-17", imf:"1.35" },
  { y:2017, type:"journal", title:"Road aware geographical routing protocol coupled with distance, direction and traffic density metrics for urban vehicular ad hoc networks", authors:"K. N. Qureshi, A. H. Abdullah, A. Altameem", venue:"Wireless Personal Communications, vol. 92, no. 3, pp. 1251-1270", imf:"0.93" },
  { y:2017, type:"journal", title:"Soft-GORA: Soft constrained globally optimal resource allocation for critical links in IoT backhaul communication", authors:"S. Iqbal, A. H. Abdullah, K. N. Qureshi, J. Lloret", venue:"IEEE Access, vol. 6, pp. 614-624", imf:"4.10" },
  { y:2017, type:"journal", title:"Channel quality and utilization metric for interference estimation in Wireless Mesh Networks", authors:"S. Iqbal, A. H. Abdullah, K. N. Qureshi", venue:"Computers and Electrical Engineering, vol. 64, pp. 420-435", imf:"2.19" },
  { y:2017, type:"journal", title:"Critical link identification and prioritization using Bayesian theorem for dynamic channel assignment in wireless mesh networks", authors:"S. Iqbal, A. H. Abdullah, F. Ahsan, K. N. Qureshi", venue:"Wireless Networks, pp. 1-13", imf:"2.41" },
  { y:2017, type:"journal", title:"Improved dynamic bandwidth allocation algorithm for XGPON", authors:"R. A. Butt, S. M. Idrus, K. N. Qureshi, N. Zulkifli, S. H. Mohammad", venue:"Journal of Optical Communications and Networking, vol. 9, no. 1, pp. 87-97", imf:"3.09" },
  { y:2017, type:"journal", title:"Wireless body area networks for healthcare applications: An overview", authors:"M. Anwar, A. H. Abdullah, K. N. Qureshi, A. H. Majid", venue:"2017" },
  { y:2017, type:"journal", title:"A critical review for developing accurate and dynamic predictive models using machine learning methods in medicine and health care", authors:"H. O. Alanazi, A. H. Abdullah, K. N. Qureshi", venue:"Journal of Medical Systems, vol. 41, no. 4, p. 69", imf:"2.42" },
  { y:2017, type:"journal", title:"The role of cross-layered designs in wireless body area network", authors:"F. Ullah, A. H. Abdullah, M. Zubair, W. Rauf, J. Junaid, K. N. Qureshi", venue:"Jurnal Teknologi, vol. 78, no. 4-3" },

  // ---------------------------------------------------------- 2016
  { y:2016, type:"journal", title:"Beaconless Packet Forwarding Approach for Vehicular Urban Environment", authors:"K. N. Qureshi, A. H. Abdullah, F. Ullah", venue:"Bulletin of Electrical Engineering and Informatics, vol. 5, no. 2, pp. 253-262" },
  { y:2016, type:"journal", title:"OBPF: Opportunistic Beaconless Packet Forwarding Strategy for Vehicular Ad Hoc Networks", authors:"K. N. Qureshi, A. H. Abdullah, J. Lloret, A. Altameem", venue:"International Journal of Distributed Sensor Networks, vol. 10, no. 5, pp. 2144-2165", imf:"1.61" },
  { y:2016, type:"journal", title:"Road-aware routing strategies for vehicular ad hoc networks: Characteristics and comparisons", authors:"K. N. Qureshi, A. H. Abdullah, J. Lloret, A. Altameem", venue:"International Journal of Distributed Sensor Networks, vol. 12, no. 3", imf:"1.61" },
  { y:2016, type:"journal", title:"Road perception based geographical routing protocol for vehicular ad hoc networks", authors:"K. N. Qureshi, A. H. Abdullah, J. Lloret", venue:"International Journal of Distributed Sensor Networks, vol. 12, no. 2", imf:"1.61" },
  { y:2016, type:"journal", title:"Weighted link quality and forward progress coupled with modified RTS/CTS for beaconless packet forwarding protocol (B-PFP) in VANETs", authors:"K. N. Qureshi, A. H. Abdullah, O. Kaiwartya, F. Ullah, S. Iqbal, A. Altameem", venue:"Telecommunication Systems, pp. 1-16", imf:"1.71" },
  { y:2016, type:"journal", title:"Improving quality of service through road side backbone network in VANET", authors:"K. N. Qureshi, A. H. Abdullah, S. Iqbal", venue:"Jurnal Teknologi, vol. 78, no. 2" },
  { y:2016, type:"journal", title:"AEGRP: An enhanced geographical routing protocol for VANET", authors:"K. N. Qureshi, A. H. Abdullah, R. W. Anwar, M. Anwar, K. M. Awan", venue:"Jurnal Teknologi, vol. 78, no. 4-3" },
  { y:2016, type:"journal", title:"Facebook's public social interaction utilization to assist recommendation across system domain", authors:"M. M. Khan, I. Ghani, S. R. Jeong, R. Ibrahim, K. N. Qureshi", venue:"Journal of Theoretical and Applied Information Technology, vol. 88, no. 3, p. 392" },
  { y:2016, type:"journal", title:"Adaptive Interface Reconfiguration in Low-Rate Mesh WPANs", authors:"S. Iqbal, A. H. Abdullah, M. M. Mohamad, K. N. Qureshi, K. Hussain", venue:"Journal of Computational and Theoretical Nanoscience, vol. 13, no. 7, pp. 4703-4710", imf:"1.6" },
  { y:2016, type:"journal", title:"Energy efficient frame structure for gigabit passive optical networks", authors:"R. A. Butt, S. M. Idrus, R. Z. Radzi, K. N. Qureshi", venue:"International Journal of Electrical and Computer Engineering, vol. 6, no. 6, p. 2971", imf:"1.61" },
  { y:2016, type:"journal", title:"A new soft set based pruning algorithm for ensemble method", authors:"M. K. Awang, M. Makhtar, M. N. A. Rahman, M. M. Deris, K. N. Qureshi", venue:"Journal of Theoretical and Applied Information Technology, vol. 88, no. 3, pp. 384-391" },
  { y:2016, type:"journal", title:"Wireless body area networks routing protocols: A review", authors:"K. M. Awan, K. N. Qureshi, M. Mehwish", venue:"Indonesian Journal of Electrical Engineering and Computer Science, vol. 4" },
  { y:2016, type:"journal", title:"Wireless sensor network performance analysis and effect of blackhole and sinkhole attacks", authors:"R. W. Anwar, M. Bakhtiari, A. Zainal, K. N. Qureshi", venue:"Jurnal Teknologi, vol. 78, no. 4-3" },
  { y:2016, type:"journal", title:"Predicting the outcomes of traumatic brain injury using accurate and dynamic predictive model", authors:"H. O. Alanazi, A. H. Abdullah, K. N. Qureshi, M. Larbani, M. Al Jumah", venue:"Journal of Theoretical and Applied Information Technology, vol. 93, no. 2" },

  // ---------------------------------------------------------- 2015
  { y:2015, type:"journal", title:"Patient data prioritization in the cross-layer designs of wireless body area network", authors:"F. Ullah, A. H. Abdullah, M. Q. Jan, K. N. Qureshi", venue:"Journal of Computer Networks and Communications, vol. 2015" },
  { y:2015, type:"journal", title:"Vehicular ad hoc networks routing protocols: Survey", authors:"K. N. Qureshi, A. H. Abdullah, F. Ullah", venue:"Science International" },
  { y:2015, type:"journal", title:"Geographical forwarding methods in vehicular ad hoc networks", authors:"K. N. Qureshi, A. H. Abdullah, A. Mirza, R. W. Anwar", venue:"International Journal of Electrical and Computer Engineering, vol. 5, no. 6" },
  { y:2015, type:"journal", title:"Secure Dynamic System Development Method (SDSDM): A survey about its suitability", authors:"I. Ghani, N. Niknejad, M. Bello, M. Chughtai, K. N. Qureshi, S. Jeong", venue:"Journal of Theoretical and Applied Information Technology, vol. 74, no. 1, p. 4" },
  { y:2015, type:"journal", title:"Security in wireless sensor network: Approaches and issues", authors:"R. W. Anwar, M. Bakhtiari, A. Zainal, K. N. Qureshi", venue:"Indonesian Journal of Electrical Engineering and Computer Science, vol. 15, no. 3, pp. 584-590" },
  { y:2015, type:"journal", title:"A survey of wireless sensor network security and routing techniques", authors:"R. W. Anwar, M. Bakhtiari, A. Zainal, K. N. Qureshi", venue:"Research Journal of Applied Sciences, Engineering and Technology, vol. 9, no. 11, pp. 1016-1026" },
  { y:2015, type:"journal", title:"Malicious node detection through trust aware routing in wireless sensor networks", authors:"R. W. Anwar, M. Bakhtiari, A. Zainal, K. N. Qureshi", venue:"Journal of Theoretical and Applied Information Technology, vol. 74, no. 1" },

  // ---------------------------------------------------------- 2014
  { y:2014, type:"journal", title:"Comparison of topology based protocols of vehicular ad hoc network", authors:"D. K. Sheet, A. H. Abdullah, A. N. Hassan, K. N. Qureshi", venue:"Middle-East Journal of Scientific Research, vol. 20, no. 12, pp. 2113-2116" },
  { y:2014, type:"journal", title:"Mechanism of multiprotocol label switching for forwarding packets and performance in virtual private network", authors:"K. N. Qureshi, A. H. Abdullah, A. N. Hassan, D. K. Sheet, R. W. Anwar", venue:"Middle-East Journal of Scientific Research, vol. 20, no. 12, pp. 2117-2127" },
  { y:2014, type:"journal", title:"Localization-based system challenges in vehicular ad hoc networks: Survey", authors:"K. N. Qureshi, A. H. Abdullah", venue:"Smart Computing Review, vol. 4, no. 6, pp. 515-528" },
  { y:2014, type:"journal", title:"Wireless sensor based hybrid architecture for vehicular ad hoc networks", authors:"K. N. Qureshi, A. H. Abdullah", venue:"TELKOMNIKA, vol. 12, no. 4" },
  { y:2014, type:"journal", title:"Multiprotocol label switching in vehicular ad hoc network for QoS", authors:"K. N. Qureshi, A. H. Abdullah", venue:"Information Management and Business Review, vol. 6, no. 3, pp. 115-120" },
  { y:2014, type:"journal", title:"Adaptation of wireless sensor network in industries and their architecture, standards and applications", authors:"K. N. Qureshi, A. H. Abdullah", venue:"World Applied Sciences Journal, vol. 30, no. 10, pp. 1218-1223" },
  { y:2014, type:"journal", title:"Comparison of position based routing protocols of vehicular ad hoc network", authors:"A. N. Hassan, A. H. Abdullah, D. K. Sheet, K. N. Qureshi", venue:"World Applied Sciences Journal, vol. 31, no. 3, pp. 341-345" },
  { y:2014, type:"journal", title:"Security issues and attacks in wireless sensor network", authors:"R. W. Anwar, M. Bakhtiari, A. Zainal, A. H. Abdullah, K. N. Qureshi", venue:"World Applied Sciences Journal, vol. 30, no. 10, pp. 1224-1227" },

  // ---------------------------------------------------------- 2013
  { y:2013, type:"journal", title:"Topology based routing protocols for VANET and their comparison with MANET", authors:"K. N. Qureshi, A. H. Abdullah", venue:"Journal of Theoretical and Applied Information Technology, vol. 58, no. 3, pp. 707-715" },
  { y:2013, type:"journal", title:"Position-based routing protocols of vehicular ad hoc networks and applicability in typical road situation", authors:"K. N. Qureshi, A. H. Abdullah, R. Yusof", venue:"Life Science Journal, vol. 10, no. 4, pp. 905-913", imf:"0.165" },
  { y:2013, type:"journal", title:"A survey on intelligent transportation systems", authors:"K. N. Qureshi, A. H. Abdullah", venue:"Middle-East Journal of Scientific Research, vol. 15, no. 5, pp. 629-642" },
  { y:2013, type:"journal", title:"Study of efficient topology based routing protocols for vehicular ad-hoc network technology", authors:"K. N. Qureshi, A. H. Abdullah", venue:"World Applied Sciences Journal, vol. 23, no. 5, pp. 656-663" },
  { y:2013, type:"journal", title:"Comparison of public key authority and token based registration approach", authors:"K. Haseeb, K. A. Bakar, K. N. Qureshi", venue:"World Applied Sciences Journal, vol. 23, no. 6, pp. 740-743" },
  { y:2013, type:"journal", title:"Resource allocation in IEEE 802.16e mobile WiMAX networks: Survey", authors:"K. M. Awan, A. H. Abdullah, K. N. Qureshi", venue:"World Applied Sciences Journal, vol. 28, no. 1, pp. 103-113" },
  { y:2013, type:"journal", title:"A simulation based study of well known routing protocols for delay tolerant network", authors:"A. Ahmed, K. A. Bakar, M. I. Channa, K. N. Qureshi", venue:"World Applied Sciences Journal, vol. 28, no. 3, pp. 353-360" },

  // ====================================================== CONFERENCES
  { y:2024, type:"conference", title:"TSC18 Convolutional Neural Network for Traffic Sign Classification", authors:"A. Hussain, K. N. Qureshi, A. Aslam, Tariq, M. R. Abdullahi", venue:"4th International Conference on Emerging Smart Technologies and Applications (eSmarTA-2024), Sana'a, Yemen" },
  { y:2024, type:"conference", title:"Minor Surface Cracks Detection using SCD11 Convolutional Neural Network", authors:"A. Hussain, K. N. Qureshi, F. Zaman, A. Aslam, Tariq", venue:"4th International Conference on Emerging Smart Technologies and Applications (eSmarTA-2024), Sana'a, Yemen" },
  { y:2023, type:"conference", title:"Intrusion Detection Systems for Cyber Attacks Detection in Power Line Communications Networks", authors:"K. N. Qureshi, N. Arshad, T. Newe", venue:"31st Euromicro International Conference on Parallel, Distributed and Network-Based Processing (PDP), Naples, Italy, pp. 193-199", doi:"https://doi.org/10.1109/PDP59025.2023.00038" },
  { y:2020, type:"conference", title:"Towards an Efficient Intrusion Detection System for High Speed Networks", authors:"H. Qadeer, K. N. Qureshi, F. Bashir, N. U. Islam", venue:"17th International Bhurban Conference on Applied Sciences and Technology (IBCAST), Islamabad" },
  { y:2020, type:"conference", title:"Hardware Trojan Detection using FBHT in FPGAs", authors:"S. Qayyum, K. N. Qureshi, F. Bashir, N. U. Islam", venue:"17th International Bhurban Conference on Applied Sciences and Technology (IBCAST), Islamabad" },
  { y:2019, type:"conference", title:"Privacy Leakage through Exploitation of Vulnerable Inter-App Communication on Android", authors:"H. M. A. Maqsood, K. N. Qureshi, F. Bashir, N. U. Islam", venue:"13th International Conference on Open Source Systems and Technologies (ICOSST), Lahore, pp. 1-6" },
  { y:2019, type:"conference", title:"Link Aware High Data Transmission Approach for Internet of Vehicles", authors:"K. N. Qureshi, F. Bashir, N. U. Islam", venue:"2nd International Conference on Computer Applications and Information Security (ICCAIS), Riyadh, pp. 1-5, IEEE" },
  { y:2018, type:"conference", title:"Cloud Computing Model for Vehicular Ad hoc Networks", authors:"K. N. Qureshi, F. Bashir, S. Iqbal", venue:"IEEE 7th International Conference on Cloud Networking (CloudNet), Tokyo, pp. 1-3" },
  { y:2018, type:"conference", title:"An energy and link aware next node selection protocol for body area networks", authors:"K. N. Qureshi, F. Bashir, A. H. Abdullah", venue:"International Conference on Information Networking (ICOIN), Chiang Mai, pp. 721-726, IEEE" },
  { y:2018, type:"conference", title:"Internet of Things device authentication scheme using hardware serialization", authors:"A. Hasan, K. N. Qureshi", venue:"International Conference on Applied and Engineering Mathematics (ICAEM), Taxila, pp. 109-114, IEEE" },
  { y:2018, type:"conference", title:"Energy efficient cluster based routing algorithm for wireless sensors networks", authors:"K. M. Awan, A. Ali, F. Aadil, K. N. Qureshi", venue:"International Conference on Advancements in Computational Sciences (ICACS), Lahore, pp. 1-7, IEEE" },
  { y:2017, type:"conference", title:"Energy efficient and delay-aware adaptive slot allocation medium access control protocol for wireless body area network", authors:"F. Ullah, A. H. Abdullah, M. M. Arshad, K. N. Qureshi", venue:"5th International Conference on Information and Communication Technology (ICoIC7), pp. 1-6, IEEE" },
  { y:2017, type:"conference", title:"Systematic study of geographical routing protocols and routing challenges for Vehicular Ad hoc Networks", authors:"K. N. Qureshi, F. Bashir, S. Iqbal, R. W. Anwar", venue:"13th International Conference on Emerging Technologies (ICET), pp. 1-6, IEEE" },
  { y:2017, type:"conference", title:"Real time traffic density aware road based forwarding method for vehicular ad hoc networks", authors:"K. N. Qureshi, F. Bashir, A. H. Abdullah", venue:"10th IFIP Wireless and Mobile Networking Conference (WMNC), pp. 1-6, IEEE" },
  { y:2017, type:"conference", title:"Provision of Security in Vehicular Ad hoc Networks through An Intelligent Secure Routing Scheme", authors:"K. N. Qureshi, F. Bashir, A. H. Abdullah", venue:"International Conference on Frontiers of Information Technology (FIT), Islamabad, pp. 200-205, IEEE" },
  { y:2017, type:"conference", title:"An intelligent hybrid approach to encounter coverage holes for wireless sensor nodes deployment in the field", authors:"R. W. Anwar, A. Zainal, M. Bakhtiari, K. N. Qureshi", venue:"13th International Conference on Emerging Technologies (ICET), pp. 1-4, IEEE" },
  { y:2015, type:"conference", title:"A Systematic Review on Routing Protocols of Vehicular Ad Hoc Networks", authors:"K. N. Qureshi, A. H. Abdullah, R. W. Anwar, F. Ullah", venue:"KSII 7th International Conference on Internet (ICONI), vol. 7, pp. 205-210" },
  { y:2015, type:"conference", title:"SSNM: Smart Sensor Network Model for Vehicular Ad hoc Networks", authors:"K. N. Qureshi, A. H. Abdullah, R. W. Anwar, M. Bukhari", venue:"International Conference on Smart Sensors and Application (ICSSA), pp. 82-87, IEEE" },
  { y:2015, type:"conference", title:"Enhanced Trust Aware Routing against Wormhole Attacks in Wireless Sensor Networks", authors:"R. W. Anwar, M. Bakhtiari, A. Zainal, A. H. Abdullah, K. N. Qureshi", venue:"International Conference on Smart Sensors and Application (ICSSA), pp. 56-59, IEEE" },
  { y:2014, type:"conference", title:"Sensor based Vehicle Environment Perception Information System", authors:"K. N. Qureshi, A. H. Abdullah, G. Ullah", venue:"IEEE International Conference on Ubiquitous Intelligence and Computing, pp. 697-700" },
  { y:2014, type:"conference", title:"The Evolution in Health Care with Information and Communication Technologies", authors:"K. N. Qureshi, A. H. Abdullah, R. W. Anwar", venue:"2nd International Conference of Applied Information and Communications Technology, Oman, Elsevier" },
  { y:2014, type:"conference", title:"Congestion Control Scheduling Scheme for Vehicular Networks", authors:"K. N. Qureshi, A. H. Abdullah, R. W. Anwar", venue:"IEEE Malaysia Section" },
  { y:2014, type:"conference", title:"Vehicular Road Side Backbone Network with Multiprotocol Label Switching", authors:"K. N. Qureshi, A. H. Abdullah", venue:"1st International Conference of Recent Trends in Information and Communication Technologies, UTM, Malaysia, pp. 204-210" },
  { y:2014, type:"conference", title:"A Roadmap to Wireless Sensor Security Protocols Implementation in Health Care System", authors:"R. W. Anwar, M. Bakhtiari, A. Zainal, K. N. Qureshi", venue:"2nd International Conference on Applied Information and Communications Technology (ICAICT), Elsevier" },
  { y:2013, type:"conference", title:"Industrial Wireless Sensor Network Architecture Standards, Applications", authors:"K. N. Qureshi, A. H. Abdullah", venue:"AsiaSense, 6th International Conference, Melaka, Malaysia" },

  // =================================================== BOOK CHAPTERS
  { y:2023, type:"chapter", title:"Secure interaction and processing of multimedia data in the Internet of Things based on wearable devices", authors:"K. N. Qureshi, A. Raziq, G. Jeon", venue:"Computing, Access Control and Security Monitoring of Multimedia Information Processing and Transmission, IET, pp. 91-106", doi:"https://digital-library.theiet.org/content/books/10.1049/pbpc061e_ch5" },
  { y:2023, type:"chapter", title:"Multilayer Security and Privacy Provision in Internet of Things Networks: Challenges and Future Trends", authors:"K. N. Qureshi, T. Newe, R. Qazi, G. Jeon", venue:"Data Analytics for Internet of Things Infrastructure, Springer Nature Switzerland, pp. 291-306" },
  { y:2022, type:"chapter", title:"Next-Generation Connected Traffic Using UAVs/Drones", authors:"K. N. Qureshi, A. Sikandar, P. Dhawankar", venue:"Secure and Digitalized Future Mobility, CRC Press, p. 65 (ISBN 9781032307534)" },
  { y:2022, type:"chapter", title:"Software-Defined Networking (SDN) Security Concerns", authors:"M. J. Nazar, S. Iqbal, S. Altaf, K. N. Qureshi, K. H. Usmani, S. Wassan", venue:"Information Security Handbook, CRC Press, pp. 19-38 (eBook ISBN 9780367808228)" },
  { y:2020, type:"chapter", title:"A Novel Framework for Cyber Secure Smart City", authors:"K. N. Qureshi, H. J. Hadi, F. Haroon, A. I. Tahirkheli, F. Bashir, N. U. Islam", venue:"Security and Organization within IoT and Smart Cities, Taylor and Francis, pp. 75-92 (ISBN 9781003018636)" },
  { y:2020, type:"chapter", title:"Contemplating Security Challenges and Threats for Smart Cities", authors:"K. N. Qureshi, R. Qazi", venue:"Security and Organization within IoT and Smart Cities, Taylor and Francis, pp. 93-118 (ISBN 9781003018636)" }
];

/* Books are rendered as cards in their own section. */
const BOOKS = [
  {
    kind: "Authored",
    year: "In press",
    title: "Cybersecurity Essentials: Protecting the Digital World",
    publisher: "Springer Nature Switzerland AG, Cham",
    cover: "assets/img/book-cybersecurity-essentials.jpg",
    link: "",
    note: "Single-authored volume, currently in production."
  },
  {
    kind: "Edited",
    year: "In press",
    title: "AI-Driven Farming Systems With Minimal Human Intervention",
    publisher: "IGI",
    cover: "assets/img/AI-Driven-Farming-System.jpg",
    link: "",
    note: "Currently in production."
  },
  {
    kind: "Edited",
    year: "2023",
    title: "Cybersecurity Vigilance and Security Engineering of Internet of Everything",
    publisher: "Springer",
    cover: "assets/img/book-ioe-vigilance.jpg",
    link: "https://link.springer.com/book/9783031451614"
  },
  {
    kind: "Edited",
    year: "2023",
    title: "Artificial Intelligence of Things (AIoT): New Standards, Technologies and Communication Systems",
    publisher: "CRC Press",
    cover: "assets/img/book-aiot.jpg",
    link: "https://www.routledge.com/Artificial-Intelligence-of-Things-AIoT-New-Standards-Technologies-and/Qureshi-Newe/p/book/9781032552996"
  },
  {
    kind: "Edited",
    year: "2024",
    title: "Next Generation AI Language Models in Research: Promising Perspectives and Valid Concerns",
    publisher: "CRC Press",
    cover: "assets/img/book-ai-language-models.jpg",
    link: "https://www.routledge.com/Next-Generation-AI-Language-Models-in-Research-Promising-Perspectives-and-Valid-Concerns/Qureshi-Jeon/p/book/9781032667935"
  },
  {
    kind: "Edited",
    year: "2024",
    title: "Artificial Intelligence-based Smart Healthcare Systems",
    publisher: "Elsevier",
    cover: "assets/img/book-smart-healthcare.jpg",
    link: "https://shop.elsevier.com/books/artificial-intelligence-based-smart-healthcare-systems/qureshi/978-0-443-26476-4"
  },
  {
    kind: "Edited",
    year: "2025",
    title: "Artificial Intelligence-Based Renewable Energy Systems",
    publisher: "Elsevier",
    cover: "assets/img/book-renewable-energy.jpg",
    link: "https://www.sciencedirect.com/book/edited-volume/9780443406188/artificial-intelligence-based-renewable-energy-systems"
  }
];
