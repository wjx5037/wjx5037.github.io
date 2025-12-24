+++
title = 'Autonomous Robotic Manipulation System (Franka Emika Panda)'
date = 2025-12-20
summary = """
![一种搬运安装空心混凝土护栏的叉车属具结构图](posts/project9/1.jpg)
*MEAM5200 Robotics, University of Pennsylvania*

I developed an autonomous robotic manipulation system capable of reliably performing both static and dynamic pick-and-place tasks on a 7-DOF Franka Emika Panda robot. The system integrates vision-based perception, explicit coordinate frame transformations, custom inverse kinematics, and safe motion execution into a unified pipeline. Static objects are detected and grasped with orientation-aware alignment, while dynamic objects on a rotating turntable are intercepted using a lead-angle–based prediction strategy to compensate for sensing and actuation latency. A key emphasis of this project was simulation-to-real transfer, where calibration residuals, kinematic feasibility, and hardware delays were addressed through empirical tuning, conservative motion planning, and robust failure recovery.
#### ⬇️*Click*⬇️ { .text-right }
"""

+++
*MEAM 5200, University of Pennsylvania*  
11/2025-12/2025
{{< figure src="1.jpg" title="Grasping image of Franka Emika Panda robot" >}}
### Project Overview
This project presents the design and implementation of an end-to-end autonomous robotic manipulation system capable of reliably handling both static and dynamic pick-and-place tasks on a real 7-DOF Franka Emika Panda robot.

The system integrates vision-based perception, kinematic modeling, motion planning, and hardware execution into a unified pipeline. Using an onboard camera and AprilTag-based perception, the robot estimates object poses in real time, transforms them into the world frame, and executes safe, collision-aware grasp and placement motions. Beyond static manipulation, the system is designed to intercept moving objects on a rotating turntable, requiring prediction, timing compensation, and robust recovery from perception and kinematic failures.

A major focus of this project was simulation-to-real transfer. While the system was initially validated in simulation, extensive hardware testing revealed non-idealities such as calibration residuals, actuation latency, and inverse kinematics feasibility near workspace boundaries. These challenges were addressed through empirical offset compensation, conservative motion strategies, and explicit failure-handling logic, resulting in a robust and repeatable manipulation system on real hardware.

This project reflects a system-level robotics workflow, emphasizing reliability, modularity, and real-world execution rather than task-specific heuristics.

### System Architecture & Technical Details
#### Perception & Coordinate Transformations

- Detected static and dynamic blocks using AprilTag-based visual perception from an end-effector-mounted camera.

- Implemented explicit homogeneous transformation chains to convert poses from camera frame → end-effector frame → robot base frame → world frame.

- Applied conservative height constraints and frame-specific offsets to improve robustness under real hardware noise.

#### Kinematics & Motion Generation

- Developed a custom inverse kinematics workflow using a fixed “hand-down” end-effector orientation to avoid wrist singularities.

- Extended the IK solver with:

configurable seed selection,

optional yaw control for orientation alignment,

explicit detection of IK non-convergence.

- Designed recovery strategies that automatically reselect targets or return the robot to safe observation configurations when IK solutions were infeasible.

#### Static Object Grasping

For static blocks, estimated object orientation directly from visual pose information and computed a corresponding gripper yaw alignment.

Executed a multi-stage grasp sequence consisting of pre-grasp approach, orientation refinement, vertical descent, and grasp verification using gripper force and width feedback.

#### Dynamic Object Interception

Modeled moving blocks on the turntable in polar coordinates (r, θ) relative to the rotation center.

Implemented a lead-angle-based interception strategy, triggering grasp execution when the target entered a predefined angular window to compensate for sensing and actuation latency.

Tuned interception parameters empirically on hardware to account for non-deterministic delays not present in simulation.

#### Execution, Safety & Robustness

Enforced conservative motion constraints, including minimum height limits and safe joint-space trajectories.

Verified grasp success using real-time gripper feedback rather than assuming ideal contact.

Designed the system to fail gracefully, prioritizing hardware safety and continued task execution over aggressive timing.
### Algorithm Formulation & Control Logic
#### Coordinate Frames & Pose Transformation
Estimated object poses in the camera frame and transformed them into the world frame using homogeneous transformations.

World-frame block pose:  
##### *T_WB = T_WEE(q) * T_EEC * T_CB*  { .text-center }
Where:
- T_WEE(q) is the world-to-end-effector transform from forward kinematics at joint configuration q

- T_EEC is the calibrated end-effector-to-camera extrinsic transform

- T_CB is the camera-to-block pose from AprilTag detection
#### Polar Representation for Dynamic Objects
Converted dynamic block positions into polar coordinates relative to the turntable center (cx, cy).

Radius:  

##### *r = sqrt((x - cx)^2 + (y - cy)^2)*  { .text-center } 

Angle:  

##### *theta = atan2(y - cy, x - cx)* { .text-center }  

This representation decouples radial reachability from angular timing constraints.
#### Inverse Kinematics Formulation
Modeled the Panda as a 7-DOF kinematic chain:  
##### *T_WEE(q) = f(q)* { .text-center }
Solved inverse kinematics by minimizing pose error:
##### *q = argmin_q || f(q) - T_target ||* { .text-center }
Enforced a fixed “hand-down” end-effector orientation to avoid wrist singularities, and seeded IK with the previous valid configuration to improve convergence.

#### Static Grasp Pose Generation
For a static block center p = [x, y, z] in the world frame, defined a conservative top-down pre-grasp pose by adding a vertical clearance h:  
##### *p_pre = [x, y, z + h]* { .text-center }
Then executed a vertical descent to the grasp height.  
Estimated block planar orientation from the detected rotation matrix and computed a gripper yaw angle to align the gripper with the block edge before descent.

#### Dynamic Interception via Lead-Angle Triggering
Formulated dynamic grasping as a latency compensation problem using an angle-window trigger.

Defined angular offset:

##### *Delta(t) = wrap_to_pi(theta(t) - theta_grasp)* { .text-center }

Triggered grasp motion when the block enters the lead-angle window:

##### *Delta(t) >= -theta_lead* { .text-center }
Where:

- theta_grasp is the fixed grasp-line angle

- theta_lead is an empirically tuned lead angle to compensate sensing + actuation latency

#### Grasp Verification
Verified grasp success using real-time gripper feedback (gap and force), instead of assuming ideal contact.

Accepted a grasp if:  

##### *g_min <= gap <= g_max   OR   force >= F_thresh* { .text-center }

#### Failure Handling & Recovery
Treated perception and inverse kinematics as non-deterministic processes.

If IK fails for either the pre-grasp or grasp pose, the system aborts the attempt, returns to a safe observation configuration, and reselects a new target to avoid deadlock near workspace boundaries.

#### Execution, Safety & Robustness
Enforced conservative motion constraints, including minimum height limits and safe joint-space trajectories.

Verified grasp success using real-time gripper feedback rather than assuming ideal contact.

Designed the system to fail gracefully, prioritizing hardware safety and continued task execution over aggressive timing.
### Demo video
Whole process of panda robot grasping: 
https://drive.google.com/file/d/1aUSOK_oHtc0gYIpPaPrK1bFyV4XfTu81/view?usp=drive_link 