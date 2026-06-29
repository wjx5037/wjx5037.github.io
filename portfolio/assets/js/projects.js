window.PORTFOLIO_PROJECTS = [
  {
    id: "franka-manipulation",
    featured: true,
    media: ["posts/project9/1.jpg"],
    mediaAlt: {
      en: "Franka Emika Panda robot grasping blocks",
      zh: "Franka Emika Panda 机械臂抓取积木"
    },
    title: {
      en: "Autonomous Robotic Manipulation System",
      zh: "自主机器人操作系统"
    },
    subtitle: {
      en: "Vision-based static and dynamic pick-and-place on a 7-DOF Franka Emika Panda.",
      zh: "基于视觉的 7 自由度 Franka Emika Panda 静态和动态抓取放置系统。"
    },
    year: "2025",
    tags: ["Franka", "ROS", "IK", "Perception"],
    links: [{ label: "Details", url: "posts/project9/" }],
    body: {
      en: [
        "Built an end-to-end manipulation pipeline that combines AprilTag perception, camera-to-world transforms, custom inverse kinematics, and safe motion execution.",
        "The system handles static blocks and predicts dynamic turntable targets with lead-angle compensation for sensing and actuation latency."
      ],
      zh: [
        "构建端到端机械臂操作流程，整合 AprilTag 感知、相机到世界坐标变换、自定义逆运动学和安全运动执行。",
        "系统可以处理静态积木，并通过提前角补偿来预测转盘上的动态目标，抵消感知和执行延迟。"
      ]
    }
  },
  {
    id: "wifi-robot-car",
    featured: true,
    media: ["posts/project4/finalcar1.jpg", "posts/project4/finalcar2.jpg", "posts/project4/finalcar3.jpg"],
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
    tags: ["ESP32", "Embedded", "PI Control", "Encoders"],
    links: [{ label: "Details", url: "posts/project4/" }],
    body: {
      en: [
        "Designed and built a four-wheel-drive robot platform integrating Wi-Fi control, encoder-based feedback, and closed-loop velocity regulation.",
        "The project emphasizes low-level embedded control, hardware debugging, and repeatable mechatronic integration."
      ],
      zh: [
        "设计并搭建四轮驱动机器人平台，整合 Wi-Fi 控制、编码器反馈和闭环速度调节。",
        "项目重点在底层嵌入式控制、硬件调试和可复现的机电系统集成。"
      ]
    }
  },
  {
    id: "waldo-arm",
    featured: true,
    media: ["posts/project2/p1.jpg", "posts/project2/2.png", "posts/project2/3.png"],
    mediaAlt: {
      en: "Two-degree-of-freedom Waldo teleoperated arm",
      zh: "二自由度 Waldo 遥操作机械臂"
    },
    title: {
      en: "Waldo System - 2-DOF Servo-Controlled Arm",
      zh: "Waldo 系统 - 二自由度舵机控制机械臂"
    },
    subtitle: {
      en: "Master-slave teleoperation using potentiometer sensing and PWM servo output.",
      zh: "通过电位器采样和 PWM 舵机输出实现主从遥操作。"
    },
    year: "2025",
    tags: ["ATmega32U4", "Servo", "Teleoperation"],
    links: [{ label: "Details", url: "posts/project2/" }],
    body: {
      en: [
        "Fabricated a laser-cut two-joint mechanism and implemented real-time ADC-to-PWM signal mapping on an ATmega32U4 microcontroller.",
        "Careful power and grounding design allowed smooth servo operation during rapid motion and high-load moments."
      ],
      zh: [
        "制作激光切割二关节机构，并在 ATmega32U4 上实现实时 ADC 到 PWM 信号映射。",
        "通过电源和共地设计保证舵机在快速运动和较高负载下稳定运行。"
      ]
    }
  },
  {
    id: "diffuser-wall",
    featured: false,
    media: ["posts/project8/p1.png", "posts/project8/p2.png"],
    mediaAlt: {
      en: "Adjustable diffuser wall geometry project",
      zh: "可调扩压器壁面几何项目"
    },
    title: {
      en: "Adjustable Diffuser Wall Geometry",
      zh: "可调扩压器壁面几何设计"
    },
    subtitle: {
      en: "Capstone mechanism for turbomachinery testing with adjustable 0 to 3 degree wall angle.",
      zh: "面向涡轮机械测试的可调角度壁面机构，调节范围 0 到 3 度。"
    },
    year: "2025",
    tags: ["SolidWorks", "Mechanism", "Capstone"],
    links: [{ label: "Details", url: "posts/project8/" }],
    body: {
      en: [
        "Designed a movable diffuser insert to reduce test lead time and increase aerodynamic testing flexibility for sponsor-driven turbomachinery experiments.",
        "Contributed CAD modeling, motion simulation, and an internal drive ring actuation concept."
      ],
      zh: [
        "设计可移动扩压器插入件，减少实验准备时间，并提升涡轮机械气动测试灵活性。",
        "主要贡献包括 CAD 建模、运动仿真和内部驱动环调节机构方案。"
      ]
    }
  },
  {
    id: "forklift-attachment",
    featured: false,
    media: ["posts/project1/横向夹取.png", "posts/project1/空心混凝土护栏.png", "posts/project1/护栏实物.png"],
    mediaAlt: {
      en: "Forklift attachment for concrete guardrail handling",
      zh: "混凝土护栏搬运叉车属具"
    },
    title: {
      en: "Forklift Attachment for Concrete Guardrail Handling",
      zh: "混凝土护栏搬运叉车属具"
    },
    subtitle: {
      en: "Transverse gripping mechanism for safe and damage-free hollow concrete guardrail handling.",
      zh: "用于空心混凝土护栏安全、无损搬运的横向夹取机构。"
    },
    year: "2024",
    tags: ["SolidWorks", "Mechanism", "Patent"],
    links: [{ label: "Details", url: "posts/project1/" }],
    body: {
      en: [
        "Developed a forklift attachment concept with horizontal translation, adaptive gripping, and rubber-cushioned contact surfaces.",
        "Contributed CAD modeling, motion simulation, and national invention patent documentation."
      ],
      zh: [
        "开发带水平移动、自适应夹持和橡胶缓冲接触面的叉车属具方案。",
        "负责 CAD 建模、运动仿真和国家发明专利文档撰写。"
      ]
    }
  },
  {
    id: "guardrail-transporter",
    featured: false,
    media: ["posts/project5/p5.1.png", "posts/project5/p5.2.png", "posts/project5/p5.3.png"],
    mediaAlt: {
      en: "Semi-assembled concrete guardrail intelligent transporter",
      zh: "半装配式混凝土护栏智能搬运车"
    },
    title: {
      en: "Semi-Assembled Concrete Guardrail Transporter",
      zh: "半装配式混凝土护栏智能搬运车"
    },
    subtitle: {
      en: "Automated transport concept integrating precision mechanical design and multi-DOF handling.",
      zh: "整合精密机械设计和多自由度搬运的自动化运输方案。"
    },
    year: "2024",
    tags: ["CAD", "Motion Study", "Automation"],
    links: [{ label: "Details", url: "posts/project5/" }],
    body: {
      en: [
        "Designed intelligent handling equipment for semi-assembled concrete guardrails with an emphasis on stability, positioning, and construction efficiency.",
        "The work focused on SolidWorks modeling, motion studies, and mechanism-level feasibility."
      ],
      zh: [
        "面向半装配式混凝土护栏设计智能搬运装备，关注稳定性、定位精度和施工效率。",
        "工作重点包括 SolidWorks 建模、运动分析和机构可行性验证。"
      ]
    }
  },
  {
    id: "acrp-luggage",
    featured: false,
    media: ["posts/project7/p7.1.png", "posts/project7/p7.6.png", "posts/project7/p7.8.png"],
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
        "Developed LuggageLocator, an RFID-based baggage visibility concept with scanner geometry, operational analysis, and a software dashboard.",
        "The project combined user research, airport operations reasoning, CAD prototyping, and frontend dashboard design."
      ],
      zh: [
        "开发 LuggageLocator 概念：基于 RFID 的行李可视化系统，包含扫描结构、运营分析和软件看板。",
        "项目结合用户研究、机场运营逻辑、CAD 原型和前端看板设计。"
      ]
    }
  },
  {
    id: "museum-exhibit",
    featured: false,
    media: ["posts/project3/e1.jpg", "posts/project3/e2.png", "posts/project3/e11.jpg"],
    mediaAlt: {
      en: "Discovery Space Museum Exciting Pass exhibit",
      zh: "Discovery Space Museum Exciting Pass 展品"
    },
    title: {
      en: "Discovery Space Museum Exhibit",
      zh: "Discovery Space Museum 展品设计"
    },
    subtitle: {
      en: "Interactive electricity and physics exhibit for children, from concept screening to prototype.",
      zh: "面向儿童的电学和物理互动展品，从概念筛选到原型制作。"
    },
    year: "2023",
    tags: ["Prototype", "SolidWorks", "AHP"],
    links: [{ label: "Details", url: "posts/project3/" }],
    body: {
      en: [
        "Designed Exciting Pass, a hands-on metal-path challenge with buzzer and LED feedback for STEM learning.",
        "Contributed concept generation, AHP selection, CAD modeling, fabrication, and safety-focused iteration."
      ],
      zh: [
        "设计 Exciting Pass 互动展品，通过金属路径挑战、蜂鸣器和 LED 反馈帮助儿童学习 STEM 概念。",
        "参与概念生成、AHP 方案选择、CAD 建模、制作和安全性迭代。"
      ]
    }
  },
  {
    id: "goodwill-ebins",
    featured: false,
    media: ["posts/project6/p6.1.png", "posts/project6/p6.5.png", "posts/project6/p6.14.jpg"],
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
        "Explored a technology-enabled donation bin concept for Goodwill operations, balancing usability, pickup logistics, and fabrication constraints.",
        "The project moved through early prototyping, product reasoning, and manufacturable design choices."
      ],
      zh: [
        "探索面向 Goodwill 运营的技术化捐赠箱方案，平衡易用性、回收物流和制造约束。",
        "项目经历了早期原型、产品逻辑分析和可制造设计选择。"
      ]
    }
  }
];
