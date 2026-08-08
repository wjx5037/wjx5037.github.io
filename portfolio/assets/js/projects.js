window.PORTFOLIO_PROJECTS = [
  {
    id: "franka-manipulation",
    featured: true,
    thumbnail: "posts/project9/carousel.jpg",
    media: ["posts/project9/Dynamic_Success.mp4", "posts/project9/Static.mp4"],
    mediaAlt: {
      en: "Franka Emika Panda robot grasping blocks",
      zh: "Franka Emika Panda 机械臂抓取积木"
    },
    title: {
      en: "Autonomous Robotic Manipulation System",
      zh: "机器人自动抓取操作系统"
    },
    subtitle: {
      en: "Autonomous pick-and-place pipeline for static blocks and moving turntable targets on a 7-DOF Franka Panda.",
      zh: "面向 7 自由度 Franka Panda 的自主抓取系统，可处理静态积木和转盘动态目标。"
    },
    year: "2025",
    tags: ["Franka", "ROS", "IK", "Perception"],
    links: [
      { label: "Details", url: "posts/project9/" },
      { label: "GitHub", url: "https://github.com/wjx5037/Franka-Robot-Manipulation-System-Control" },
    ],
    body: {
      en: [
        "Built a vision-guided autonomous manipulation system on a 7-DOF Franka Panda for static pick-and-place and dynamic interception of AprilTag-tagged blocks on a rotating turntable.",
        "I wrote the kinematics and motion layer from scratch: forward kinematics, position inverse kinematics (IK) with null-space control, and velocity inverse kinematics (VIK). These routines generate joint targets and differential end-effector motion rather than relying on a packaged IK solver.",
        "AprilTag detections are propagated through camera-to-end-effector-to-base-to-world transforms. For rotating targets, a closed-loop angular polling strategy continuously tracks the block and triggers inside a lead-angle window, making interception more robust than a one-shot arrival-time estimate.",
        "Tech stack: Python, ROS, NumPy, self-written FK/IK/VIK, Jacobian-based velocity control, homogeneous transforms, AprilTag perception, Franka Panda API, and gripper-feedback verification."
      ],
      zh: [
        "面向 7 自由度 Franka Panda 的视觉自主抓取系统，可完成静态积木的拾放，以及转盘动态目标的拦截抓取。",
        "运动学与轨迹执行层由我从零编写，包括正运动学、带零空间控制的位置逆运动学（IK），以及用于微分末端运动的速度逆运动学（VIK）。这些模块为观察、接近、抓取、放置和在线目标更新生成关节目标与速度指令，而不是调用现成的黑盒 IK 求解器。",
        "系统将 AprilTag 检测结果依次转换到末端、机械臂基座和世界坐标系。针对转盘目标，我设计闭环角度轮询策略，持续追踪目标并在提前角触发窗口内发起抓取，避免一次性估算到达时间带来的误差。",
        "技术栈：Python、ROS、NumPy、自编写 FK/IK/VIK、基于雅可比矩阵的速度控制、齐次变换、AprilTag 感知、Franka Panda 接口和夹爪反馈验证。"
      ]
    }
  },
  {
    id: "wifi-robot-car",
    featured: true,
    thumbnail: "posts/project4/carousel.jpg",
    mediaLayout: "stacked-photos-video",
    media: ["posts/project4/finalcar1.jpg", "posts/project4/finalcar2.jpg", "posts/project4/Wallfollow.mp4"],
    mediaAlt: {
      en: "Four-wheel Wi-Fi controlled robot car",
      zh: "四轮 Wi-Fi 控制机器人车"
    },
    title: {
      en: "Four-Wheel Wi-Fi Controlled Robot Car",
      zh: "四轮 Wi-Fi 控制机器人车"
    },
    subtitle: {
      en: "ESP32-S3 platform with encoder feedback and closed-loop motion control.",
      zh: "基于 ESP32-S3、编码器反馈和闭环运动控制的机器人车平台。"
    },
    year: "2025",
    tags: ["ESP32-S3", "MCPWM", "PCNT", "ToF", "Vive"],
    links: [
      { label: "Details", url: "posts/project4/" },
      { label: "GitHub", url: "https://github.com/wjx5037/4WD-Wifi-Controlled-Robot-Car-with-ToF-Vive-" }
    ],
    body: {
      en: [
        "Built a 4WD embedded mobile robot around an ESP32-S3, four DC gear motors, quadrature encoders, dual VL53L1X ToF sensors, and Vive photodiode localization. The platform supports Wi-Fi teleoperation, wall following, point-to-point navigation, stop mode, and web-triggered task behaviors.",
        "The control stack separates high-level modes from low-level actuation: the browser dashboard sends speed, turn, PID, and navigation commands; the firmware samples sensors, estimates wheel speed through PCNT counters, runs independent PI control for each wheel, and converts forward/turn commands into skid-steer targets.",
        "Autonomous behavior combines ToF-based obstacle and wall-distance feedback with Vive-based pose estimation. The robot filters Vive coordinates, computes heading error to a target point, and uses distance/angle feedback to drive multi-stage waypoint navigation.",
        "Tech stack: SolidWorks CAD, ESP32-S3, Arduino/C++, Wi-Fi AP WebServer, MCPWM motor drive, PCNT quadrature encoders, VL53L1X ToF sensing, Vive510 localization, PI wheel-speed control, PD wall following, and JavaScript telemetry dashboard."
      ],
      zh: [
        "基于 ESP32-S3 搭建四轮驱动移动机器人平台，集成四个直流减速电机、正交编码器、双 VL53L1X ToF 传感器和 Vive 光电定位模块。系统支持 Wi-Fi 遥控、沿墙行驶、点到点导航、停止模式以及网页触发的任务动作。",
        "控制架构将高层模式和底层执行分离：网页端发送速度、转向、PID 和导航目标；固件端周期读取传感器，通过 PCNT 计数器估计四轮速度，为每个轮子独立运行 PI 控制，并将 forward/turn 指令转换成 skid-steer 左右轮目标速度。",
        "自主行为结合 ToF 距离反馈和 Vive 位姿估计。机器人对 Vive 坐标做滤波，计算目标点方向误差，并使用距离/角度反馈完成多段 waypoint navigation。",
        "技术栈：SolidWorks CAD、ESP32-S3、Arduino/C++、Wi-Fi AP WebServer、MCPWM 电机驱动、PCNT 正交编码器、VL53L1X ToF 感知、Vive510 定位、PI 轮速控制、PD 沿墙控制和 JavaScript 遥测调参界面。"
      ]
    }
  },
  {
    id: "diffuser-wall",
    featured: false,
    thumbnail: "posts/project8/carousel.jpg",
    media: ["posts/project8/p1.png"],
    mediaAlt: {
      en: "Adjustable diffuser wall geometry project",
      zh: "涡轮机械测试用可调扩压器壁面设计项目"
    },
    title: {
      en: "Adjustable Diffuser Wall Geometry for Turbomachinery Testing",
      zh: "涡轮机械测试用可调扩压器壁面设计"
    },
    subtitle: {
      en: "Sponsored by and delivered to Fox Rotating Equipment Solutions for centrifugal compressor testing.",
      zh: "由 Fox Rotating Equipment Solutions 赞助并最终交付，用于离心压缩机测试。"
    },
    year: "2025",
    tags: ["Client Delivery", "SolidWorks", "Mechanism"],
    links: [
      { label: "Details", url: "posts/project8/" },
      { label: { en: "Explanation Video", zh: "介绍视频" }, url: "https://drive.google.com/file/d/1IAWOdaP3prZ0QVEDt1Vp-jWv6TS1lB45/view?usp=sharing" }
    ],
    body: {
      en: [
        "Worked in a sponsor-funded capstone team to deliver an adjustable diffuser-wall insert for Fox Rotating Equipment Solutions. The design changes wall angle from 0 to 3 degrees, avoiding a separate fixed insert for every compressor test condition.",
        "The work began by translating sponsor test needs into engineering requirements: controlled adjustment, repeatable setup, instrumentation clearance, structural support, and practical manufacturing. We compared concepts before selecting an internal drive-ring layout for synchronized wall-angle motion.",
        "I led requirement organization, concept comparison, SolidWorks CAD modeling, moving-part clearance and motion simulation, and manufacturability refinement. I also prepared and presented the final design package, communicating mechanism choices, tradeoffs, and test value directly to the sponsor.",
        "Industrial design skills: stakeholder requirements, concept selection, design review, SolidWorks CAD, motion simulation, clearance analysis, design-for-manufacturing, and sponsor-facing delivery."
      ],
      zh: [
        "这是一个由 Fox Rotating Equipment Solutions 赞助并最终交付的团队项目：为离心压缩机测试设计可调扩压器壁面插入件，使壁面角度可在 0–3 度范围内变化，避免为每种工况重复加工固定壁面。",
        "项目先将客户测试需求转化为工程约束，包括受控调节、可重复设置、仪器空间、结构支撑和可制造性。团队对多种方案进行比较后，选择内部驱动环机构实现壁面角度的同步调节。",
        "我负责需求梳理、方案比选、SolidWorks 建模、运动与干涉检查及可制造性优化，并准备最终交付材料，向客户清晰说明机构选择、设计权衡和测试价值。",
        "工业项目能力：客户需求分析、方案筛选、设计评审、SolidWorks CAD、运动仿真、干涉检查、可制造性评估和面向客户的工程交付。"
      ]
    }
  },
  {
    id: "forklift-attachment",
    featured: false,
    thumbnail: "posts/project1/carousel.jpg",
    media: ["posts/project1/横向夹取.png"],
    mediaAlt: {
      en: "Forklift attachment for concrete guardrail handling",
      zh: "混凝土护栏搬运叉车属具"
    },
    title: {
      en: "Forklift Attachment for Concrete Guardrail Handling",
      zh: "混凝土护栏搬运叉车属具"
    },
    subtitle: {
      en: "Shanxi Transportation Science Research Institute internship project: transverse gripping for safe, damage-free hollow concrete guardrail handling.",
      zh: "山西交通科学研究院实习项目：用于空心混凝土护栏安全、无损搬运的横向夹取机构。"
    },
    year: "2024",
    tags: ["Industry Internship", "SolidWorks", "Patent"],
    links: [{ label: "Details", url: "posts/project1/" }],
    body: {
      en: [
        "Developed a forklift-mounted attachment for safe handling and installation of hollow, semi-prefabricated concrete guardrails, reducing alignment effort and preventing surface damage during construction-site handling.",
        "The transverse-gripping mechanism combines a fork-frame mount, horizontal translation, cylinder-actuated motion, and a parallelogram linkage with an adaptive contact element to align, support, and clamp the guardrail. Rubber contact layers protect the concrete during loading and placement.",
        "My contribution included developing the transverse-gripping concept, building the full SolidWorks assembly, running motion studies, and writing and submitting national invention-patent documentation for the attachment.",
        "Tech stack: SolidWorks CAD, mechanism design, cylinder-actuated linkage design, motion simulation, design-for-manufacturing, and patent documentation."
      ],
      zh: [
        "为半装配式空心混凝土护栏设计叉车属具，用于在施工现场完成更安全、更高效、且尽量无损的搬运与安装。",
        "横向夹取方案由叉车架连接、水平移动机构、缸驱动动作以及平行四边形连杆组成，并通过自适应接触件实现对齐、承托和夹紧；橡胶接触层可降低搬运和就位过程中的表面损伤。",
        "我提出并完善横向夹取方案，完成整机 SolidWorks 装配建模与运动仿真，并负责该属具国家发明专利材料的撰写和提交。",
        "技术栈：SolidWorks CAD、机构设计、缸驱动连杆机构、运动仿真、可制造性设计和专利文档。"
      ]
    }
  },
  {
    id: "guardrail-transporter",
    featured: false,
    thumbnail: "posts/project5/carousel.jpg",
    media: ["posts/project5/p5.3.png"],
    mediaAlt: {
      en: "Semi-assembled concrete guardrail intelligent transporter",
      zh: "半装配式混凝土护栏智能搬运车"
    },
    title: {
      en: "Semi-Assembled Concrete Guardrail Transporter",
      zh: "半装配式混凝土护栏智能搬运车"
    },
    subtitle: {
      en: "Shanxi Transportation Science Research Institute internship project: automated transport with multi-DOF guardrail handling.",
      zh: "山西交通科学研究院实习项目：整合多自由度护栏搬运的自动化运输方案。"
    },
    year: "2024",
    tags: ["Industry Internship", "CAD", "Automation"],
    links: [{ label: "Details", url: "posts/project5/" }],
    body: {
      en: [
        "Designed an intelligent straddle transporter concept for semi-assembled concrete guardrails, combining high-capacity transport with the positioning control needed for installation in constrained construction environments.",
        "The machine integrates six handling motions—lifting, longitudinal and lateral translation, rotation, and swing—to reposition guardrails while adapting to site geometry. The concept was sized for loads above 10 tons and uses dedicated chassis, lifting, attachment, protection, hydraulic, and electrical subsystems.",
        "I conducted technical research, developed the SolidWorks layout, ran motion simulations, and led structural refinements including cockpit relocation, interchangeable left/right mounting interfaces, and triangular frame supports.",
        "Tech stack: SolidWorks CAD, multi-DOF mechanism design, motion simulation, hydraulic actuation concepts, structural optimization, and engineering research."
      ],
      zh: [
        "面向半装配式混凝土护栏的智能跨运车概念设计，兼顾大载荷搬运能力与施工现场安装所需的定位和姿态调整。",
        "设备通过升降、前后与左右平移、旋转和摆动等六类运动完成护栏重定位，适应复杂工况；整机概念由底盘、升降、属具、防护、液压和电控子系统构成，目标载荷超过 10 吨。",
        "我完成了技术调研、SolidWorks 总体布局和运动仿真，并主导驾驶舱位置调整、左右可互换安装接口及三角支撑臂等结构优化。",
        "技术栈：SolidWorks CAD、多自由度机构设计、运动仿真、液压执行方案、结构优化和工程调研。"
      ]
    }
  },
  {
    id: "acrp-luggage",
    featured: false,
    thumbnail: "posts/project7/carousel.jpg",
    media: ["posts/project7/p7.1.png", "posts/project7/p7.6.png", "posts/project7/p7.8.png", "posts/project7/p7.2.png", "posts/project7/p7.3.jpg", "posts/project7/p7.4.png", "posts/project7/p7.5.png", "posts/project7/p7.7.png", "posts/project7/p7.9.png"],
    mediaAlt: {
      en: "RFID-assisted baggage visibility system",
      zh: "RFID 辅助行李可视化系统"
    },
    title: {
      en: "RFID-Assisted Baggage Visibility System",
      zh: "RFID 辅助行李可视化系统"
    },
    subtitle: {
      en: "ACRP concept for reducing mishandled baggage through end-to-end visibility.",
      zh: "通过端到端可视化减少行李错运的 ACRP 概念方案。"
    },
    year: "2024",
    tags: ["RFID", "UX", "Dashboard", "Systems"],
    links: [{ label: "Details", url: "posts/project7/" }],
    body: {
      en: [
        "Collaborated on LuggageLocator for the 2024 ACRP University Design Competition: an RFID-based, end-to-end baggage-visibility concept intended to reduce mishandled bags and give passengers, airlines, and airports actionable status information.",
        "The system combines a U-shaped RFID scanning station with a web dashboard and relational data model. Checkpoint data supports both individual bag status and historical views that can reveal congestion or operational bottlenecks.",
        "My work included problem framing and literature review, concept selection with a decision matrix, CAD modeling and structural analysis of the scanner, and testing the web/database prototype for technical feasibility, scalability, and operational value.",
        "Tech stack: RFID system concepts, SolidWorks CAD, structural analysis, React, JavaScript, CSS, relational database design, SQL query testing, and cost-benefit/risk analysis."
      ],
      zh: [
        "作为 2024 ACRP 大学生设计竞赛团队成员，我参与设计 LuggageLocator：一套基于 RFID 的端到端行李可视化方案，用于减少行李错运，并向旅客、航空公司和机场提供可执行的状态信息。",
        "系统将 U 型 RFID 扫描站、网页看板和关系型数据模型结合。各检查点数据既可显示单件行李状态，也能呈现历史趋势，用于识别拥堵和运营瓶颈。",
        "我负责问题定义与文献调研、使用决策矩阵筛选方案、扫描站 CAD 建模和结构分析，以及网页/数据库原型的可行性、扩展性和运营价值测试。",
        "技术栈：RFID 系统方案、SolidWorks CAD、结构分析、React、JavaScript、CSS、关系型数据库设计、SQL 查询测试及成本效益/风险分析。"
      ]
    }
  },
  {
    id: "museum-exhibit",
    featured: false,
    thumbnail: "posts/project3/carousel.jpg",
    media: ["posts/project3/e1.jpg", "posts/project3/e2.png", "posts/project3/e11.jpg", "posts/project3/e3.png", "posts/project3/e4.png", "posts/project3/e5.png", "posts/project3/e6.png", "posts/project3/e7.png", "posts/project3/e8.png"],
    mediaAlt: {
      en: "Discovery Space Museum Exciting Pass exhibit",
      zh: "Discovery Space Museum Exciting Pass 展品"
    },
    title: {
      en: "Discovery Space Museum Exhibit",
      zh: "Discovery Space Museum 展品设计"
    },
    subtitle: {
      en: "Client-commissioned interactive STEM exhibit for Discovery Space, from stakeholder needs to a maintainable prototype.",
      zh: "面向 Discovery Space 儿童博物馆的客户委托互动 STEM 展品，从需求梳理到可维护原型。"
    },
    year: "2023",
    tags: ["Client Design", "AHP", "Prototype"],
    links: [{ label: "Details", url: "posts/project3/" }],
    body: {
      en: [
        "Worked with a multidisciplinary team on a client-commissioned exhibit for Discovery Space Children’s Museum, translating its educational, safety, maintenance, and age-range needs into a hands-on STEM experience for children ages 2–12.",
        "Before detailed design, the team used 6-3-5 concept generation and AHP screening to compare options against engagement, flexibility, aesthetics, and ease of assembly. This created a traceable rationale for selecting the Exciting Pass concept.",
        "My role combined stakeholder-oriented requirement interpretation with SolidWorks CAD and prototype refinement. I helped turn design needs into maintainable details: protected low-voltage electronics, rounded wood surfaces, an accessible service door, and durable 3D-printed track supports.",
        "Industrial design skills: stakeholder requirements, structured concept selection, AHP decision matrices, SolidWorks CAD, rapid prototyping, low-voltage electronics, design-for-maintenance, and client-ready presentation."
      ],
      zh: [
        "与跨学科团队为 Discovery Space 儿童博物馆完成客户委托展品设计，将教育目标、安全性、维护便利性和 2–12 岁儿童的使用需求，转化为可互动的 STEM 学习体验。",
        "在详细设计之前，团队采用 6-3-5 概念生成法和 AHP 筛选矩阵，从互动性、灵活性、美观性和装配便利性等维度比较方案，为 Exciting Pass 的选择建立可追溯的决策依据。",
        "我参与面向使用方的需求梳理、SolidWorks 建模和原型迭代，将需求落实为可维护的设计细节：受保护的低压电子结构、圆角木质表面、便于维护的检修门，以及耐用的 3D 打印轨道支撑件。",
        "工业项目能力：利益相关方需求分析、结构化方案筛选、AHP 决策矩阵、SolidWorks CAD、快速原型、低压电子、面向维护的设计和客户交付展示。"
      ]
    }
  },
  {
    id: "goodwill-ebins",
    featured: false,
    thumbnail: "posts/project6/carousel.jpg",
    media: ["posts/project6/p6.1.png", "posts/project6/p6.5.png", "posts/project6/p6.14.jpg", "posts/project6/p6.2.png", "posts/project6/p6.3.png", "posts/project6/p6.4.png", "posts/project6/p6.6.png", "posts/project6/p6.7.png", "posts/project6/p6.8.png"],
    mediaAlt: {
      en: "Goodwill E-bins donation redesign project",
      zh: "Goodwill 智能捐赠箱设计项目"
    },
    title: {
      en: "E-Bins for Goodwill Donations",
      zh: "Goodwill 智能捐赠箱"
    },
    subtitle: {
      en: "Smart donation-bin redesign to improve pickup efficiency and donation quality.",
      zh: "用于提升回收效率和捐赠质量的智能捐赠箱再设计。"
    },
    year: "2022",
    tags: ["Product Design", "Prototype", "Manufacturing"],
    links: [{ label: "Details", url: "posts/project6/" }],
    body: {
      en: [
        "Collaborated on a smart donation-bin redesign for Goodwill, focused on improving donation quality, pickup timing, and the day-to-day usability of collection bins.",
        "The final concept combines a weight-based fullness signal, app-supported pickup visibility, a transport-friendly physical form, and location data that could inform bin placement and collection scheduling.",
        "My work covered needs research, concept generation and screening, CAD modeling, prototype evaluation, and feasibility analysis across sensors, appearance, transport mechanisms, and cost-saving potential.",
        "Tech stack: user research, product design, concept-selection matrices, CAD, prototype evaluation, sensor and app concepts, logistics reasoning, and cost feasibility analysis."
      ],
      zh: [
        "作为团队成员参与 Goodwill 智能捐赠箱再设计，目标是提升捐赠质量、优化回收时机，并改善捐赠箱的日常使用体验。",
        "最终方案结合基于重量的满载检测、支持回收调度的应用端信息、便于运输的实体结构，以及可用于优化布点和收运排程的位置数据。",
        "我负责需求调研、概念生成与筛选、CAD 建模、原型评估，并从传感器、外观、运输机构和降本潜力等方面开展可行性分析。",
        "技术栈：用户调研、产品设计、概念筛选矩阵、CAD、原型评估、传感器与应用端方案、物流分析和成本可行性评估。"
      ]
    }
  }
];
