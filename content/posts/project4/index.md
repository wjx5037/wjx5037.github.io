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
11/2025-12/2025
{{< figure src="1.png" title="CAD of wifi 4WD car" >}}
## 1.0 version
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

{{< figure src="2.png" title="Image of wifi 4WD car 1.0 version(side view)" >}}
{{< figure src="3.png" title="Image of wifi 4WD car 1.0 version(top view)" >}}
## 2.0 Version
### Project Description
Version 2.0 represents a system-level refinement of the original 4WD Wi-Fi robot platform, focusing on robust autonomy, sensing-driven behaviors, and engineering reliability rather than manual teleoperation alone.

Building on the V1.0 hardware and control stack, this iteration introduces Time-of-Flight (ToF)–based perception, structured autonomous behaviors such as obstacle avoidance and wall following, and extensive improvements to mechanical layout, power integrity, and software architecture. The result is a more stable, extensible mobile robotics platform suitable for long-duration autonomous operation and further research-oriented development.
#### Mechanical & Electrical Optimization
The robot adopts a refined three-layer stacked architecture to improve robustness, serviceability, and noise isolation:

- Lower layer: 4× DC gear motors with quadrature encoders and high-current motor drivers

- Middle layer: centralized battery placement and DC–DC power regulation with star-ground distribution

- Upper layer: ESP32-S3 controller, ToF sensors, and auxiliary electronics

Key improvements over V1.0 include cleaner cable routing, separation of high-current and signal paths, improved grounding strategy, and more rigid sensor mounting, significantly reducing electrical noise and improving sensor stability during motion.

#### ToF-Based Perception & Autonomous Behaviors

Version 2.0 upgrades the sensing system with multiple VL53L1X Time-of-Flight sensors, enabling reliable near-field perception:

- Front-facing ToF for obstacle detection and collision avoidance

- Side-facing ToF for lateral distance regulation and wall-following control

Sensor data are filtered in software using bounded and median filtering to suppress noise and outliers. These signals drive autonomous behaviors including:

- Reactive obstacle avoidance

- Stable wall following using lateral distance control

- Smooth recovery maneuvers when frontal distance stagnates

Compared to the V1.0 platform, which relied primarily on manual control, this upgrade allows the robot to navigate its environment autonomously with consistent and repeatable behavior.

#### Motion Control & Drive System Refinement

Each wheel is controlled by an independent closed-loop PI speed controller using quadrature encoder feedback. Enhancements introduced in V2.0 include:

- Hardware PWM–based motor driving with symmetric forward/reverse control

- Integral anti-windup, deadband handling, and minimum-duty enforcement to overcome static friction

- Command slew-rate limiting for smoother skid-steer motion

These improvements significantly increased speed tracking accuracy, reduced oscillations under load, and improved low-speed controllability during autonomous maneuvers.

#### Software Architecture & State-Based Control

The firmware was restructured around a state-based control architecture, replacing ad-hoc logic with clearly defined operating modes:

- Manual: direct Wi-Fi teleoperation for testing and debugging

- Assisted: safety-aware driving with ToF-based obstacle handling

- Autonomous: continuous execution of wall following, obstacle avoidance, and recovery behaviors

Periodic task scheduling separates sensing, control updates, and high-level decision logic, improving code readability, timing predictability, and extensibility for future feature development.
#### Web-Based Interface & Runtime Tuning

A lightweight web server running directly on the ESP32-S3 provides a real-time control dashboard for:

- Live telemetry visualization (wheel speeds, ToF distances, system state)

- On-the-fly tuning of PI gains, target speed, and turning parameters

- Mode switching between manual and autonomous operation

This interface enables rapid iteration and debugging without firmware redeployment, supporting an efficient hardware–software co-design workflow.

{{< figure src="finalcar1.jpg" title="Image of wifi 4WD car 2.0 version(side view)">}}
{{< figure src="finalcar2.jpg" title="Image of wifi 4WD car 2.0 version(front view)"  >}}
{{< figure src="finalcar3.jpg" title="Image of wifi 4WD car 2.0 version(top view)" >}}
{{< figure src="finalcar4.jpg" title="Image of wifi 4WD car 2.0 version(bottom view)"  >}}


### Video
#### 1.0 Version
 https://youtube.com/shorts/3bOzf5cycDg?si=jNFPo0Qvo8tbKFiQ
#### 2.0 Version
 https://youtube.com/shorts/xrWTAGAtIhg?si=ORJMxfBXCtLerUQCYouTubeShortslink 