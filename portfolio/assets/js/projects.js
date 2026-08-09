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
      en: "Autonomous Robot Manipulation",
      zh: "机器人自动抓取操作系统"
    },
    subtitle: {
      en: "Vision-guided static and dynamic grasping on a 7-DOF Franka Panda.",
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
        "Vision-guided pick-and-place for static blocks and rotating AprilTag targets.",
        "I wrote the motion layer: FK, null-space position IK, and Jacobian-based VIK, without a packaged IK solver.",
        "Camera-to-world transforms and closed-loop angular polling trigger reliable dynamic grasps.",
        "Python · ROS · NumPy · FK/IK/VIK · AprilTag · Franka API"
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
      en: "Four-Wheel Wi-Fi Robot Car",
      zh: "四轮 Wi-Fi 控制机器人车"
    },
    subtitle: {
      en: "ESP32-S3 mobile robot with closed-loop wheel control and autonomous behaviors.",
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
        "Four-wheel ESP32-S3 robot for Wi-Fi teleoperation and autonomous mobile behaviors.",
        "PCNT encoder feedback and independent PI loops regulate each wheel; skid-steer mixing converts forward and turn inputs.",
        "ToF feedback supports wall following, while Vive pose estimates guide point-to-point navigation.",
        "ESP32-S3 · Arduino/C++ · MCPWM · PCNT encoders · ToF · Vive · JavaScript"
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
      en: "Adjustable Diffuser Wall for Turbomachinery Testing",
      zh: "涡轮机械测试用可调扩压器壁面设计"
    },
    subtitle: {
      en: "Fox Rotating Equipment Solutions client delivery for centrifugal-compressor testing.",
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
        "Capstone-team delivery of an adjustable diffuser-wall insert for centrifugal-compressor testing.",
        "An internal drive-ring mechanism varies the wall angle from 0 to 3 degrees with repeatable adjustment.",
        "I led requirements, concept trade studies, SolidWorks CAD, motion and clearance checks, and sponsor presentation.",
        "Requirements · concept selection · SolidWorks · motion simulation · DFM · client delivery"
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
    mediaAlign: "left",
    mediaAlt: {
      en: "Forklift attachment for concrete guardrail handling",
      zh: "混凝土护栏搬运叉车属具"
    },
    title: {
      en: "Concrete Guardrail Forklift Attachment",
      zh: "混凝土护栏搬运叉车属具"
    },
    subtitle: {
      en: "Shanxi Transportation Science Research Institute internship project.",
      zh: "山西交通科学研究院实习项目：用于空心混凝土护栏安全、无损搬运的横向夹取机构。"
    },
    year: "2024",
    tags: ["Industry Internship", "SolidWorks", "Patent"],
    links: [{ label: "Details", url: "posts/project1/" }],
    body: {
      en: [
        "Forklift-mounted attachment for damage-free installation of hollow concrete guardrails.",
        "A transverse-gripping linkage provides lateral positioning, adaptive clamping, and protected contact surfaces.",
        "I developed the concept, complete CAD assembly, motion studies, and invention-patent documentation.",
        "SolidWorks · mechanism design · motion simulation · DFM · patent documentation"
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
      en: "Concrete Guardrail Transporter",
      zh: "半装配式混凝土护栏智能搬运车"
    },
    subtitle: {
      en: "Shanxi Transportation Science Research Institute internship project.",
      zh: "山西交通科学研究院实习项目：整合多自由度护栏搬运的自动化运输方案。"
    },
    year: "2024",
    tags: ["Industry Internship", "CAD", "Automation"],
    links: [{ label: "Details", url: "posts/project5/" }],
    body: {
      en: [
        "Straddle-transporter concept for heavy semi-assembled guardrails in constrained construction sites.",
        "Six controlled motions reposition each rail for pickup, transport, and installation; the design targets loads above 10 tons.",
        "I researched the application, built the SolidWorks layout, ran motion studies, and refined chassis and mounting details.",
        "SolidWorks, multi-DOF mechanisms, motion simulation, hydraulics, structural optimization"
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
      en: "2024 ACRP competition concept for end-to-end baggage visibility.",
      zh: "通过端到端可视化减少行李错运的 ACRP 概念方案。"
    },
    year: "2024",
    tags: ["RFID", "UX", "Dashboard", "Systems"],
    links: [{ label: "Details", url: "posts/project7/" }],
    body: {
      en: [
        "Competition concept using RFID to make baggage status visible from check-in to arrival.",
        "A U-shaped scanner, web dashboard, and relational model expose bag status and operational bottlenecks.",
        "I led problem research, decision-matrix concept selection, scanner CAD and analysis, and web/database validation.",
        "RFID · SolidWorks · structural analysis · React · JavaScript · CSS · SQL"
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
      en: "Discovery Space STEM Exhibit",
      zh: "Discovery Space Museum 展品设计"
    },
    subtitle: {
      en: "Client-commissioned interactive STEM exhibit for Discovery Space Children's Museum.",
      zh: "面向 Discovery Space 儿童博物馆的客户委托互动 STEM 展品，从需求梳理到可维护原型。"
    },
    year: "2023",
    tags: ["Client Design", "AHP", "Prototype"],
    links: [{ label: "Details", url: "posts/project3/" }],
    body: {
      en: [
        "Client-commissioned hands-on STEM exhibit for Discovery Space Children's Museum, for visitors aged 2 to 12.",
        "6-3-5 ideation and AHP selection compared engagement, flexibility, aesthetics, and assembly before choosing the concept.",
        "I translated stakeholder needs into CAD and prototype details: protected electronics, rounded wood, service access, and durable track supports.",
        "Stakeholder needs, AHP, SolidWorks, prototyping, low-voltage electronics, DFM"
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
      en: "Smart Donation Bins for Goodwill",
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
        "Goodwill donation-bin redesign focused on donation quality, pickup timing, and daily usability.",
        "Weight-based fullness sensing, pickup visibility, transport-ready form, and location data support smarter collection.",
        "I contributed needs research, concept screening, CAD, prototype evaluation, and sensor, logistics, and cost feasibility studies.",
        "User research · product design · CAD · prototyping · sensors · logistics · cost analysis"
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
