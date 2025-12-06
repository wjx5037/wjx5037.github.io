+++
title = 'Waldo System — 2-DOF Servo-Controlled Arm'
date = 2025-10-11
summary = """
![一种搬运安装空心混凝土护栏的叉车属具结构图](posts/project2/p1.jpg)
*GM Lab, University of Pennsylvania*

This project features a two-degree-of-freedom teleoperation system in which a master arm equipped with dual potentiometers controls a servo-driven replica arm in real time. I designed and fabricated the full mechanism using laser-cut MDF components and implemented the embedded control system on an ATmega32U4 microcontroller. Through ADC-to-PWM signal mapping, the output arm accurately mirrors the operator’s movements, demonstrating stable, low-latency motion replication. Careful power and grounding design ensured smooth servo operation and prevented voltage drop during high-load conditions. The final system integrates mechanical design, embedded programming, and human-machine interaction into a compact, functional prototype.
#### ⬇️*Click*⬇️ { .text-right }
"""

+++

*GM Lab, University of Pennsylvania*
{{< figure src="p1.jpg" title="Image of Waldo system (input & output)" >}}


### Project Description
#### Mechanical Design  
I created a lightweight, two-joint arm mechanism constructed from laser-cut MDF to achieve precise geometric alignment and easy assembly.  
- A base servo provides horizontal rotation.  
- A secondary servo drives a vertical “barrier-gate” style arm.  
- Custom brackets were designed to maintain servo alignment and minimize backlash.  
The structure was modeled in SolidWorks to validate clearances and joint travel before fabrication.
#### Master–Slave Teleoperation Architecture
The master device uses two potentiometers to capture human input for each joint.  
- Analog signals from the potentiometers are sampled by the microcontroller’s ADC.  
- The ATmega32U4 generates PWM control signals to command the corresponding servos on the replica arm.  
- The mapping is linear and low-latency, allowing smooth replication of user motion.

This architecture provides an intuitive demonstration of joint-level teleoperation and real-time embedded control.
#### Electronics & Power System
- PWM outputs (OC1A/OC1B pins) drive the two SG90 servos.
- A stable 5 V / 2 A external supply powers the servos to avoid USB brownout.
- Shared grounding between the input device and output arm prevents signal noise and ensures consistent readings.
- System current peaks near ~1.6 A during rapid load changes, requiring proper power budgeting and wiring.
#### System Performance
- Motion replication is smooth, synchronized, and responsive.  
- The system maintains stable operation even during rapid or large-angle movements.  
- Teleoperation latency is minimal, making the arm immediately reflect user inputs.  

This project demonstrates the integration of mechanical fabrication, embedded sensing and actuation, real-time signal processing, and electromechanical system design.
#### CAD of Waldo system
{{< figure src="2.png" title="CAD of input " width="60%" >}}

{{< figure src="3.png" title="CAD of output " >}}
**in image means potentiometer*
### Dancing Video !!! ⬇️*Click*⬇️
https://www.youtube.com/watch?v=LfzphyK_K_E 