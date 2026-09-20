+++
title = 'Cockroach Robot Beam Traversal Research'
date = 2026-08-24
summary = "LCSR JHU Robotics research applying potential-energy-landscape theory to IMU-controlled traversal of a flexible beam."
+++

*Ongoing research project at LCSR JHU Robotics*

{{< figure src="cockroach-robot.jpg" title="Cockroach robot flexible-beam traversal experimental platform" >}}

{{< notice text="Research paper in preparation. Controller design details, parameters, protocols, datasets, code, and unpublished analyses are intentionally not published here." >}}

## Research Goal

This research investigates how potential-energy-landscape theory can inform robot control during compliant-obstacle traversal. Physical interaction between a robot and an obstacle shapes the landscape of possible motions; the research examines how feedback control can help a robot reach the basin associated with successful traversal rather than one associated with failure.

The project shares the high-level scientific motivation of potential-energy-landscape studies of obstacle traversal, but the current experiment uses a physical cockroach robot passing through a flexible beam rather than a simplified test apparatus. The goal is to create repeatable robot-beam trials that connect body motion, physical interaction, sensing, and control with synchronized experimental data.

## Research Platform

The physical platform integrates the mechanical system, embedded control, sensing, firmware, and Python automation. The flexible beam provides a controlled compliant obstacle whose interaction with the robot can be repeatedly tested.

The synchronized measurement workflow aligns robot motion, obstacle interaction, and system data from each trial. This creates a shared time base for later analysis and 3D potential-energy-landscape reconstruction.

## My Contribution

I engineered the full experimental platform, including its mechanical/mechatronic integration, embedded control, sensing, firmware, and Python automation. The objective was to make the physical robot suitable for controlled, repeatable experiments rather than a one-off demonstration.

I developed IMU-based control to help the robot traverse the flexible beam reliably. The public portfolio presents the control purpose and experimental role only; its implementation remains private while the research is active.

I also built the synchronized experimental workflow that makes trial data traceable and supplies the measurements needed for subsequent potential-energy-landscape analysis.

## Research Value

The work moves potential-energy-landscape research from a simplified apparatus toward a free-running physical robot confronting a compliant obstacle. It creates an experimental basis for examining how feedback-driven body motion and physical interaction shape traversal outcomes.

Its central engineering value is experimental rigor: known initial conditions, controlled IMU-guided action, synchronized observations, and data that can be interpreted against a physics-based research framework.

## Publication Status

The research is active and a paper is in preparation. This page presents the research motivation, platform scope, and verified high-level contribution only. Detailed methods and results will remain private until publication.

## Research Focus

Potential-energy landscapes, bio-inspired robot control, IMU-based feedback, compliant-obstacle traversal, mechatronic system integration, synchronized motion tracking, experimental design, and repeatable data collection.
