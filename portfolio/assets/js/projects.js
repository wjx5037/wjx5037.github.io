window.PORTFOLIO_PROJECTS = [
  {
    id: "franka-manipulation",
    featured: true,
    thumbnail: "posts/project9/1.jpg",
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
        "The grasping pipeline is organized around four core modules: AprilTag perception, coordinate-frame transformation, IK-based motion generation, and gripper-state verification. Detected block poses are first transformed into the world frame, then converted into either a static grasp plan or a dynamic interception plan.",
        "For dynamic blocks on the rotating turntable, I avoided a purely time-based open-loop prediction method. Instead, I designed a polling-based angular tracking strategy: the system continuously updates the target block's real-time polar angle and triggers the grasp only when the block enters the predefined grasp-angle window. Compared with estimating arrival time once, this closed-loop angle check is much more robust to turntable speed variation, perception delay, and actuation latency.",
        "Static blocks are handled with pose estimation and top-down gripper-yaw alignment. Dynamic blocks are handled with radius filtering, real-time angular polling, lead-angle triggering, and gripper-feedback validation.",
        "Tech stack: Python, ROS, NumPy, Franka Panda interfaces, forward kinematics, inverse kinematics, homogeneous transforms, and feedback-based grasp validation."
      ],
      zh: [
        "抓取逻辑由四个核心模块构成：AprilTag 感知、坐标变换、基于 IK 的运动生成，以及基于夹爪状态的抓取验证。系统先将相机检测到的积木位姿转换到世界坐标系，再根据任务类型生成静态抓取或动态拦截动作。",
        "针对转盘上的动态积木，我没有采用常见的基于时间估计的开环预测方法，而是设计了一个角度轮询跟踪策略：系统持续检测目标积木的实时极坐标角度，并在它进入预设抓取角窗口时立即触发抓取。相比单纯计算到达时间，这种方法能显著降低转速波动、检测延迟和执行误差带来的影响。",
        "静态积木通过姿态估计和自上而下的 gripper yaw 对齐完成抓取；动态积木则通过半径筛选、实时角度跟踪、提前角触发和夹爪反馈验证完成拦截。",
        "技术栈：Python、ROS、NumPy、Franka Panda 接口、正运动学、逆运动学、齐次变换和反馈式抓取验证。"
      ]
    }
  },
  {
    id: "wifi-robot-car",
    featured: true,
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
        "Tech stack: ESP32-S3, Arduino/C++, Wi-Fi AP WebServer, MCPWM motor drive, PCNT quadrature encoders, VL53L1X ToF sensing, Vive510 localization, PI wheel-speed control, PD wall following, and JavaScript telemetry dashboard."
      ],
      zh: [
        "基于 ESP32-S3 搭建四轮驱动移动机器人平台，集成四个直流减速电机、正交编码器、双 VL53L1X ToF 传感器和 Vive 光电定位模块。系统支持 Wi-Fi 遥控、沿墙行驶、点到点导航、停止模式以及网页触发的任务动作。",
        "控制架构将高层模式和底层执行分离：网页端发送速度、转向、PID 和导航目标；固件端周期读取传感器，通过 PCNT 计数器估计四轮速度，为每个轮子独立运行 PI 控制，并将 forward/turn 指令转换成 skid-steer 左右轮目标速度。",
        "自主行为结合 ToF 距离反馈和 Vive 位姿估计。机器人对 Vive 坐标做滤波，计算目标点方向误差，并使用距离/角度反馈完成多段 waypoint navigation。",
        "技术栈：ESP32-S3、Arduino/C++、Wi-Fi AP WebServer、MCPWM 电机驱动、PCNT 正交编码器、VL53L1X ToF 感知、Vive510 定位、PI 轮速控制、PD 沿墙控制和 JavaScript 遥测调参界面。"
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
    media: ["posts/project1/横向夹取.png", "posts/project1/空心混凝土护栏.png", "posts/project1/护栏实物.png", "posts/project1/figure1.png", "posts/project1/figure2.png", "posts/project1/figure3.png", "posts/project1/figure4.png", "posts/project1/figure5.png", "posts/project1/figure6.png"],
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
