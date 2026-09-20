+++
title = 'Cockroach Robot Beam Traversal Research'
date = 2026-08-24
summary = "LCSR JHU Robotics research applying potential-energy-landscape theory to IMU-controlled traversal of a flexible beam."
+++

*Ongoing research project at LCSR JHU Robotics*

{{< figure src="cockroach-robot.jpg" title="Cockroach robot flexible-beam traversal experimental platform" >}}

{{< notice text="Research paper in preparation. Detailed parameters, protocols, datasets, code, and unpublished analyses are intentionally not published here." >}}

## Research Goal

This research investigates how potential-energy-landscape theory can inform robot control during compliant-obstacle traversal. Physical interaction between a robot and an obstacle shapes the landscape of possible motions; the research examines how feedback control can help a robot reach the basin associated with successful traversal rather than one associated with failure.

The project shares the high-level scientific motivation of potential-energy-landscape studies of obstacle traversal, but the current experiment uses a physical cockroach robot passing through a flexible beam rather than a simplified test apparatus. The goal is to create repeatable robot-beam trials that connect body motion, physical interaction, sensing, and control with synchronized experimental data.

## Locomotor-Transition Background

When a multi-legged robot contacts a flexible obstacle, its body configuration and the obstacle deformation together define a potential-energy landscape. Familiar locomotor modes correspond to local basins on that landscape: once the system enters one basin, its physical state tends to remain there.

A locomotor transition is the move from one basin to another. For this project, a successful roll-through of the flexible beam is the desired transition; becoming trapped is an undesired state. Reaching the desired state requires the system to cross a potential-energy barrier, rather than simply following a geometric path around the obstacle.

Mechanical interaction and self-propulsion move the robot through this landscape. Sensing and feedback control can make a desired transition more likely by steering the system state and its interaction with the beam. Here, IMU-based control supports the robot's roll-through transition during flexible-beam traversal.

{{< figure src="locomotor-transitions-energy-landscape.png" title="Research background: locomotor transitions can be understood as barrier crossings between potential-energy basins." >}}

Figure source and theory background: LCSR Terradynamics Lab — *Principles of Multi-Legged Locomotor Transitions in Complex 3-D Terrain*

https://li.me.jhu.edu/home/principles-of-multi-legged-locomotor-transitions-in-complex-3-d-terrain/

## Research Platform

The platform integrates four-actuator locomotion, a 2-DOF tail, embedded control, a six-axis CoinFT force/torque sensor, IMU instrumentation, firmware, and Python automation. The flexible beam provides a controlled compliant obstacle whose interaction with the robot can be repeatedly tested.

The synchronized measurement system combines physical triggers, LED timing signals, 100-fps video, motor telemetry, beam sensors, and robot-state logging. This links each trial's physical motion to a shared time base for later analysis and 3D potential-energy-landscape reconstruction.

## My Contribution

I engineered the full experimental platform, including its mechanical/mechatronic integration, embedded control, sensing, firmware, and Python automation. The objective was to make the physical robot suitable for controlled, repeatable experiments rather than a one-off demonstration.

I developed predictive IMU-based tail-swing control for flexible-beam traversal. The controller adapts the tail swing amplitude, velocity, and acceleration from the robot's roll, increasing roll-through success by 69 percentage points.

I also built the synchronized experimental workflow that brings together triggers, LED timing, 100-fps video, motor telemetry, beam sensing, and robot-state logs. It makes the results traceable and supplies the data needed for subsequent potential-energy-landscape analysis.

## Research Value

The work moves potential-energy-landscape research from a simplified apparatus toward a free-running physical robot confronting a compliant obstacle. It creates an experimental basis for examining how feedback-driven body motion and physical interaction shape traversal outcomes.

Its central engineering value is experimental rigor: known initial conditions, controlled IMU-guided action, synchronized observations, and data that can be interpreted against a physics-based research framework.

## Publication Status

The research is active and a paper is in preparation. This page presents the research motivation, platform scope, and verified high-level contribution only. Detailed methods and results will remain private until publication.

## Research Focus

Potential-energy landscapes, bio-inspired robot control, IMU-based feedback, compliant-obstacle traversal, force/torque sensing, mechatronic system integration, synchronized motion tracking, experimental design, and repeatable data collection.
