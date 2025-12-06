+++
title = 'Four-Wheel Wi-Fi Controlled Robot Car'
date = 2025-11-20
summary = """
![一种搬运安装空心混凝土护栏的叉车属具结构图](posts/project4/1.png)
*GM Lab, University of Pennsylvania*

I designed and built a four-wheel-drive robot platform integrating Wi-Fi control, encoder-based feedback, and full closed-loop motion control. The system uses an ESP32-S3 microcontroller with quadrature encoders on all four motors, enabling precise odometry and differential steering. I developed a web-based control interface for real-time tuning and telemetry visualization, and implemented PI speed control, ToF-based distance sensing, and interrupt-driven encoder processing. This project strengthened my skills in embedded systems, motor control, real-time sensing, and full-stack hardware–software integration.
#### ⬇️*Click*⬇️ { .text-right }
"""

+++
*GM Lab, University of Pennsylvania*  
11/2025-present
{{< figure src="1.png" title="CAD of wifi 4WD car" >}}
### Project Description
This project focuses on the design of a robust 4WD embedded robotics platform capable of both Wi-Fi teleoperation and autonomous behaviors. The system architecture follows a multi-layer mechatronic design, integrating sensing, control, mechanical layout, and real-time software.
#### Mechanical & Electrical Architecture
The robot uses a symmetric 4-wheel drivetrain powered by DC motors with Hall A+B encoders, providing direction-aware pulse feedback for odometry and velocity estimation. The electronics stack includes:
- ESP32-S3 DevKitC-1 as the central controller  
- 4× BTS7960 motor drivers for high-current actuation  
- 4× VL53L1X ToF sensors for obstacle and wall-distance measurement  
- Modular chassis layout separating power, drivers, and sensors for stability and maintainability
#### Control System Development
I developed the complete control stack:
- Low-level wheel control using LEDC PWM, driver interlocks, and acceleration limiting
- Quadrature encoder processing with ESP32 PCNT hardware
- PI speed controller providing ±5% tracking accuracy under load
- Differential steering based on dynamic turn-scaling
#### Wi-Fi Real-Time Tuning & Web Dashboard
To support rapid control tuning and debugging, I implemented a custom HTML/JavaScript interface running on the ESP32 in AP mode.  
The dashboard supports:
- Live motor speed feedback
- Real-time ToF distance streaming
- On-the-fly adjustment of target speed, turn factor, KP, KI
- Smooth UI updates without page refresh
- This allowed iterative tuning and performance validation directly over wireless communication.
#### Autonomous Behaviors & Sensor Fusion
Using the multi-sensor configuration, I designed behaviors such as:  
- Wall following based on ToF front-fan geometry
- Heading stabilization using Vive photodiode timing (final version)
- State-machine-based autonomy enabling patrol, contact, and escape modes
#### Performance & Validation
Through iterative hardware debugging and control refinement, the system achieved:  
- Smooth closed-loop speed control across all four wheels
- Stable Wi-Fi teleoperation with minimal latency
- Reliable ToF streaming and autonomous wall-tracking
- Robust mechanical and electrical integration proven in extended runtime tests
### 1.0 Version
{{< figure src="2.png" title="Image of wifi 4WD car 1.0 version" >}}
{{< figure src="3.png" title="Image of wifi 4WD car 1.0 version" >}}
### 2.0 Version
Will be posted on 2025-12/12 !

### Video
#### 1.0 Version
 https://youtube.com/shorts/3bOzf5cycDg?si=jNFPo0Qvo8tbKFiQ
#### 2.0 Version
Will be posted on 2025-12/12 !